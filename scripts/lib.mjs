// adar-design shared helpers + validation — used by generate.mjs, lint.mjs, gallery.mjs.
// Single source of truth stays in data/; these functions only read and check it.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const DATA = path.join(ROOT, "data");
export const OUT = path.join(ROOT, "skills", "adar-design");

export const CANONICAL_RECIPES = [
  "panel", "card", "button", "input", "select", "checkbox", "badge", "avatar",
  "nav", "table", "dialog", "toast", "code", "empty", "statusbar",
];
export const COLOR_ROLES = [
  "background", "surface", "foreground", "muted", "primary", "accent", "danger",
  "warning", "success", "border", "divider", "selection", "overlay",
];
export const TYPE_TIERS = ["h1", "h2", "body", "caption"];

const REQUIRED_MODE_KEYS = [
  "id", "name", "order", "aliases", "summary", "whenToUse",
  "colorScheme", "typeScale", "colors", "paletteVariants", "fonts", "radius",
  "spacing", "shadow", "motion", "effects", "rules", "componentRecipes",
  "copywriting", "do", "dont", "accessibility", "signatureElement",
  "attribution", "prose",
];

export function loadSkill() {
  return JSON.parse(fs.readFileSync(path.join(DATA, "skill.json"), "utf8"));
}

export function loadModes() {
  const modeFiles = fs
    .readdirSync(path.join(DATA, "modes"))
    .filter((f) => f.endsWith(".json") && f !== "_template.json")
    .sort();
  const modes = modeFiles.map((f) =>
    JSON.parse(fs.readFileSync(path.join(DATA, "modes", f), "utf8"))
  );
  return { modes, modeFiles };
}

export function loadMixes() {
  const dir = path.join(DATA, "mixes");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json") && f !== "_template.json")
    .sort()
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
}

export function loadAll() {
  const skill = loadSkill();
  const { modes, modeFiles } = loadModes();
  const mixes = loadMixes();
  return { skill, modes, modeFiles, mixes };
}

export function quoteFonts(fonts) {
  return (fonts || []).map((f) => `"${f}"`).join(", ");
}

const GENERIC_FAMILIES = new Set([
  "sans-serif", "serif", "monospace", "system-ui", "ui-monospace", "ui-serif",
  "ui-sans-serif", "cursive", "fantasy", "emoji", "math", "fangsong",
]);

// CSS font-family list: quote real family names, but leave generic keywords bare
// so `font-family: ... , sans-serif` still resolves to the generic fallback.
export function cssFontList(fonts) {
  return (fonts || [])
    .map((f) => (GENERIC_FAMILIES.has(String(f).toLowerCase()) ? f : `"${f}"`))
    .join(", ");
}

export function kebab(s) {
  return String(s).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export function selectionText(m) {
  if (m.colors && m.colors.selectionText) return m.colors.selectionText;
  return m.colorScheme === "dark" ? m.colors.background : m.colors.foreground;
}

// Resolve a mix to a full mode object (transitive; base may itself be a mix).
export function mixToMode(id, modeById, mixes, groupKeys, seen = new Set()) {
  if (seen.has(id)) return null;
  seen.add(id);
  if (modeById[id]) return modeById[id];
  const mix = mixes.find((x) => x.id === id);
  if (!mix) return null;
  const base = mixToMode(mix.base, modeById, mixes, groupKeys, seen);
  if (!base) return null;
  const out = JSON.parse(JSON.stringify(base));
  for (const [group, srcId] of Object.entries(mix.overrides || {})) {
    const src = modeById[srcId];
    if (!src) return null;
    const keys = Array.isArray(groupKeys[group]) ? groupKeys[group] : [group];
    for (const k of keys) out[k] = src[k];
  }
  return out;
}

// ---- CSS token grammar -----------------------------------------------------
const LEN = "(?:[+-]?0|[+-]?\\d+(?:\\.\\d+)?(?:px|em|rem|vh|vw|%))";
const COLOR = "(?:#[0-9a-fA-F]{3,8}|rgba?\\([^)]*\\)|currentColor|transparent)";
const SHADOW_ITEM = new RegExp(`^(?:inset )?${LEN} ${LEN}(?: ${LEN})?(?: ${LEN})? ${COLOR}$`);

const SHADOW_BLOCKLIST = ["undefined", "—", "never a", "placeholder", "draw the", "instead"];
const TOKEN_BLOCKLIST = ["undefined", "—", "placeholder", "Array of", "One-sentence"];
const EFFECT_BLOCKLIST = [";", "clip-path:", "mask-image:", "—", "undefined", "placeholder", "Array of", "One-sentence"];

function hasAny(v, markers) {
  const s = String(v);
  return markers.some((marker) => s.includes(marker));
}

function splitShadowList(v) {
  const items = [];
  let depth = 0;
  let cur = "";
  for (let i = 0; i < v.length; i += 1) {
    const c = v[i];
    if (c === "(") depth += 1;
    if (c === ")") depth -= 1;
    if (c === "," && depth === 0 && v[i + 1] === " ") {
      items.push(cur);
      cur = "";
      i += 1;
      continue;
    }
    cur += c;
  }
  items.push(cur);
  return items.map((s) => s.trim()).filter(Boolean);
}

export function validShadowToken(v) {
  if (v === "none") return true;
  if (hasAny(v, SHADOW_BLOCKLIST)) return false;
  return splitShadowList(v).every((item) => SHADOW_ITEM.test(item));
}

export function validEffectImage(v) {
  if (v === "none") return true;
  if (hasAny(v, EFFECT_BLOCKLIST)) return false;
  return /^(linear-gradient|radial-gradient|repeating-|url\(|conic-gradient)/.test(v);
}

function checkTokenProse(prefix, value, errors) {
  if (Array.isArray(value)) {
    value.forEach((v, i) => checkTokenProse(`${prefix}[${i}]`, v, errors));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      checkTokenProse(`${prefix}.${k}`, v, errors);
    }
  } else if (typeof value === "string" && hasAny(value, TOKEN_BLOCKLIST)) {
    errors.push(`${prefix}: token value must not contain prose (${TOKEN_BLOCKLIST.join(", ")})`);
  }
}

// ---- validation ------------------------------------------------------------
export function validate({ skill, modes, modeFiles, mixes }) {
  const errors = [];
  const modeById = Object.fromEntries(modes.map((m) => [m.id, m]));
  const groupKeys = (skill.mixing && skill.mixing.groups) || {};

  for (const m of modes) {
    for (const k of REQUIRED_MODE_KEYS) {
      if (m[k] === undefined) errors.push(`mode ${m.id ?? "?"}: missing required key "${k}"`);
    }
    // assertion 10: id shape + filename match
    if (!/^[a-z0-9-]+$/.test(m.id || "")) errors.push(`mode ${m.id}: id must be lowercase-hyphen`);
    const filenameMatches = (modeFiles || []).filter((f) => f.replace(/\.json$/, "") === m.id);
    if (filenameMatches.length !== 1) errors.push(`mode ${m.id}: id must equal its filename`);

    // assertion 1: required new-field shapes
    if (m.fonts) {
      if (!Array.isArray(m.fonts.body) || m.fonts.body.length < 1 || m.fonts.body.some((x) => typeof x !== "string" || !x.trim()))
        errors.push(`mode ${m.id}: fonts.body must be a non-empty string array`);
    }
    if (m.typeScale) {
      for (const tier of TYPE_TIERS) {
        const t = m.typeScale[tier];
        if (!t) {
          errors.push(`mode ${m.id}: typeScale.${tier} is required`);
          continue;
        }
        if (typeof t.fontSize !== "string" || !/^\d+(\.\d+)?px$/.test(t.fontSize))
          errors.push(`mode ${m.id}: typeScale.${tier}.fontSize must match /^\\d+(\\.\\d+)?px$/`);
        if (typeof t.lineHeight !== "number" || t.lineHeight < 1.0)
          errors.push(`mode ${m.id}: typeScale.${tier}.lineHeight must be a number >= 1.0`);
      }
    }
    if (!["light", "dark"].includes(m.colorScheme))
      errors.push(`mode ${m.id}: colorScheme must be "light" or "dark"`);
    if (m.colors) {
      for (const role of ["border", "divider", "selection", "overlay"]) {
        if (!/^#([0-9a-fA-F]{6})$/.test(m.colors[role] || ""))
          errors.push(`mode ${m.id}: colors.${role} must be a #RRGGBB hex`);
      }
    }

    // assertion 2: all 13 roles valid hex
    for (const role of COLOR_ROLES) {
      if (m.colors && !/^#([0-9a-fA-F]{6})$/.test(m.colors[role] || ""))
        errors.push(`mode ${m.id}: colors.${role} must be a #RRGGBB hex`);
    }
    // optional selectionText override, when present
    if (m.colors && m.colors.selectionText !== undefined) {
      if (!/^#([0-9a-fA-F]{6})$/.test(m.colors.selectionText || ""))
        errors.push(`mode ${m.id}: colors.selectionText must be a #RRGGBB hex`);
    }

    // assertion 3: pixelate enum
    if (!m.effects || !["pixelated", "auto"].includes(m.effects.pixelate))
      errors.push(`mode ${m.id}: effects.pixelate must be "pixelated" or "auto"`);

    // assertion 4: scanlines + vignette present and CSS-image-shaped
    for (const key of ["scanlines", "vignette"]) {
      if (!m.effects || m.effects[key] === undefined)
        errors.push(`mode ${m.id}: effects.${key} is required`);
      else if (!validEffectImage(m.effects[key]))
        errors.push(`mode ${m.id}: effects.${key} must be "none" or a CSS image value`);
    }

    // assertion 4b: effects values must never carry prose or non-image markers
    for (const [k, v] of Object.entries(m.effects || {})) {
      if (typeof v === "string" && hasAny(v, EFFECT_BLOCKLIST))
        errors.push(`mode ${m.id}: effects.${k} must not contain prose or non-image markers`);
    }

    // assertion 5: shadow grammar (emitted tokens hard + glow)
    for (const key of ["hard", "glow"]) {
      const v = m.shadow && m.shadow[key];
      if (v === undefined) {
        errors.push(`mode ${m.id}: shadow.${key} is required`);
      } else if (!validShadowToken(v)) {
        errors.push(`mode ${m.id}: shadow.${key} must be "none" or a valid box-shadow token`);
      }
    }

    // assertion 6: 15 canonical recipes
    if (m.componentRecipes) {
      for (const key of CANONICAL_RECIPES) {
        const v = m.componentRecipes[key];
        if (typeof v !== "string" || !v.trim())
          errors.push(`mode ${m.id}: componentRecipes.${key} must be a non-empty string`);
        else if (["recipe", "Array of", "One-sentence", "..."].includes(v.trim()))
          errors.push(`mode ${m.id}: componentRecipes.${key} looks like a placeholder`);
      }
    }

    // assertion 7: no prose in emitted token values
    const emittedColors = Object.fromEntries(
      Object.entries(m.colors || {}).filter(([k]) => k !== "selectionText" || m.colors.selectionText !== undefined)
    );
    checkTokenProse(`mode ${m.id}.colors`, emittedColors, errors);
    if (m.fonts) {
      for (const key of ["display", "mono", "body"]) {
        checkTokenProse(`mode ${m.id}.fonts.${key}`, m.fonts[key], errors);
      }
    }
    checkTokenProse(`mode ${m.id}.radius`, m.radius, errors);
    checkTokenProse(`mode ${m.id}.spacing`, m.spacing, errors);
    for (const key of ["hard", "glow"]) {
      checkTokenProse(`mode ${m.id}.shadow.${key}`, m.shadow && m.shadow[key], errors);
    }
    if (m.motion) {
      for (const key of ["easing", "cursor", "durations"]) {
        checkTokenProse(`mode ${m.id}.motion.${key}`, m.motion[key], errors);
      }
    }
    checkTokenProse(`mode ${m.id}.effects`, m.effects, errors);
    checkTokenProse(`mode ${m.id}.typeScale`, m.typeScale, errors);

    // assertion 8: type-scale ordering
    if (m.typeScale && TYPE_TIERS.every((t) => m.typeScale[t] && /^\d+(\.\d+)?px$/.test(m.typeScale[t].fontSize))) {
      const sizes = TYPE_TIERS.map((t) => parseFloat(m.typeScale[t].fontSize));
      if (!(sizes[0] >= sizes[1] && sizes[1] >= sizes[2] && sizes[2] >= sizes[3]))
        errors.push(`mode ${m.id}: typeScale must satisfy h1 >= h2 >= body >= caption`);
      if (sizes[2] < 11) errors.push(`mode ${m.id}: typeScale.body must be >= 11px`);
    }
  }

  // assertion 9 + mix invariants (assertion 10 mix half)
  for (const mix of mixes) {
    for (const k of ["id", "name", "order", "base", "overrides", "summary", "signatureElement"]) {
      if (mix[k] === undefined) errors.push(`mix ${mix.id ?? "?"}: missing required key "${k}"`);
    }
    if (!/^[a-z0-9-]+$/.test(mix.id || "")) errors.push(`mix ${mix.id}: id must be lowercase-hyphen`);
    if (!modeById[mix.base] && !mixes.some((x) => x.id === mix.base))
      errors.push(`mix ${mix.id}: base "${mix.base}" is not a known mode or mix`);
    for (const [group, src] of Object.entries(mix.overrides || {})) {
      if (!(group in groupKeys)) errors.push(`mix ${mix.id}: unknown override group "${group}"`);
      else if (!modeById[src]) errors.push(`mix ${mix.id}: override "${group}" -> "${src}" is not a known mode`);
    }

    const resolved = mixToMode(mix.id, modeById, mixes, groupKeys);
    if (!resolved) {
      errors.push(`mix ${mix.id}: base could not be resolved transitively`);
    } else {
      for (const key of CANONICAL_RECIPES) {
        if (typeof resolved.componentRecipes?.[key] !== "string" || !resolved.componentRecipes[key].trim())
          errors.push(`mix ${mix.id}: resolved.componentRecipes.${key} is missing or empty`);
      }
      if (!resolved.typeScale) errors.push(`mix ${mix.id}: resolved.typeScale is missing`);
      if (!["light", "dark"].includes(resolved.colorScheme))
        errors.push(`mix ${mix.id}: resolved.colorScheme must be "light" or "dark"`);
      if (!Array.isArray(resolved.fonts?.body) || resolved.fonts.body.length < 1)
        errors.push(`mix ${mix.id}: resolved.fonts.body is missing`);
      for (const role of COLOR_ROLES) {
        if (!/^#([0-9a-fA-F]{6})$/.test(resolved.colors?.[role] || ""))
          errors.push(`mix ${mix.id}: resolved.colors.${role} must be a #RRGGBB hex`);
      }
    }
  }

  // skill-level mixing group invariants
  const groupEntries = Object.keys(groupKeys);
  if (groupEntries.length !== 14)
    errors.push(`skill.mixing.groups must have exactly 14 groups (found ${groupEntries.length})`);
  if (!Array.isArray(groupKeys.colors) || !groupKeys.colors.includes("colorScheme"))
    errors.push(`skill.mixing.groups.colors must include "colorScheme"`);

  // assertion 10: description length
  if (skill.description && skill.description.length > 1024)
    errors.push("skill.description exceeds 1024 chars");

  return errors;
}
