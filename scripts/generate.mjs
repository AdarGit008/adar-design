#!/usr/bin/env node
// adar-design generator — single source of truth is data/ (skill.json + modes/*.json).
// Emits the entire skills/adar-design/ tree deterministically.
// Add or edit a mode: create/edit data/modes/<id>.json, then `node scripts/generate.mjs`.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA = path.join(ROOT, "data");
const OUT = path.join(ROOT, "skills", "adar-design");

const skill = JSON.parse(fs.readFileSync(path.join(DATA, "skill.json"), "utf8"));

const modeFiles = fs
  .readdirSync(path.join(DATA, "modes"))
  .filter((f) => f.endsWith(".json") && f !== "_template.json")
  .sort();

const modes = modeFiles.map((f) => JSON.parse(fs.readFileSync(path.join(DATA, "modes", f), "utf8")));

const MIXES_DIR = path.join(DATA, "mixes");
const mixes = fs.existsSync(MIXES_DIR)
  ? fs.readdirSync(MIXES_DIR)
      .filter((f) => f.endsWith(".json") && f !== "_template.json")
      .sort()
      .map((f) => JSON.parse(fs.readFileSync(path.join(MIXES_DIR, f), "utf8")))
  : [];

// ---- validation -----------------------------------------------------------
const REQUIRED = [
  "id", "name", "order", "aliases", "summary", "whenToUse",
  "colors", "paletteVariants", "fonts", "radius", "spacing", "shadow", "motion",
  "effects", "rules", "componentRecipes", "copywriting", "do", "dont",
  "accessibility", "signatureElement", "attribution", "prose",
];
const errors = [];
for (const m of modes) {
  for (const k of REQUIRED) {
    if (m[k] === undefined) errors.push(`mode ${m.id ?? "?"}: missing required key "${k}"`);
  }
  if (!/^[a-z0-9-]+$/.test(m.id || "")) errors.push(`mode ${m.id}: id must be lowercase-hyphen`);
  if (modeFiles.map((f) => f.replace(".json", "")).filter((x) => x === m.id).length !== 1)
    errors.push(`mode ${m.id}: id must equal its filename`);
  for (const role of ["background", "surface", "foreground", "primary", "accent"]) {
    if (m.colors && !/^#([0-9a-fA-F]{6})$/.test(m.colors[role] || ""))
      errors.push(`mode ${m.id}: colors.${role} must be a #RRGGBB hex`);
  }
}
const GROUP_KEYS = (skill.mixing && skill.mixing.groups) || {};
const modeById = Object.fromEntries(modes.map((m) => [m.id, m]));
for (const mix of mixes) {
  for (const k of ["id", "name", "order", "base", "overrides", "summary", "signatureElement"]) {
    if (mix[k] === undefined) errors.push(`mix ${mix.id ?? "?"}: missing required key "${k}"`);
  }
  if (!/^[a-z0-9-]+$/.test(mix.id || "")) errors.push(`mix ${mix.id}: id must be lowercase-hyphen`);
  if (!modeById[mix.base] && !mixes.some((x) => x.id === mix.base))
    errors.push(`mix ${mix.id}: base "${mix.base}" is not a known mode or mix`);
  for (const [group, src] of Object.entries(mix.overrides || {})) {
    if (!(group in GROUP_KEYS)) errors.push(`mix ${mix.id}: unknown override group "${group}"`);
    else if (!modeById[src]) errors.push(`mix ${mix.id}: override "${group}" -> "${src}" is not a known mode`);
  }
}
if (skill.description.length > 1024) errors.push("skill.description exceeds 1024 chars");
if (errors.length) {
  console.error("VALIDATION FAILED:\n- " + errors.join("\n- "));
  process.exit(1);
}

// ---- helpers --------------------------------------------------------------
const write = (rel, content) => {
  const p = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
  console.log("wrote", path.relative(ROOT, p));
};
const esc = (s) => String(s).replace(/\|/g, "\\|").replace(/\n/g, " ");
const yq = (s) => `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`; // YAML double-quoted scalar
const list = (arr) => (arr || []).map((x) => `- ${x}`).join("\n");
const quoteFonts = (fonts) => fonts.map((f) => `"${f}"`).join(", ");

// ---- SKILL.md -------------------------------------------------------------
const modeIndex = modes
  .slice()
  .sort((a, b) => a.order - b.order)
  .map((m) => `| \`${m.id}\` | ${esc(m.name)} | ${esc(m.summary)} |`)
  .join("\n");

const mixIndex = mixes.length
  ? mixes
      .slice()
      .sort((a, b) => a.order - b.order)
      .map((x) => `| \`${x.id}\` | \`${x.base}\` | ${Object.entries(x.overrides || {}).map(([g, s]) => `\`${g}\`→\`${s}\``).join(", ") || "—"} | ${esc(x.summary)} |`)
      .join("\n")
  : "| — | — | — | no named mixes |";

const mixingGroups = Object.entries(GROUP_KEYS)
  .map(([g, keys]) => `- \`${g}\` → ${(Array.isArray(keys) ? keys : [keys]).map((k) => `\`${k}\``).join(", ")}`)
  .join("\n");

const mixingSection = `## Mixing modes

${(skill.mixing && skill.mixing.intro) || "A mix keeps one base mode and overrides whole token groups from other modes."}

Precedence: **overrides > base > cross-cutting rules**. Override whole groups only — never half a group. The base supplies the copywriting voice unless \`copywriting\` is overridden; one \`signatureElement\` wins (the base's, unless overridden). Every output states its mix (base + overrides). A mix may use another mix as its \`base\` (reuse); bases resolve transitively, cycles are invalid.

**Override-able groups**

${mixingGroups}

**Mixing rules**

${list((skill.mixing && skill.mixing.rules) || [])}

**Named mixes**

| Mix | Base | Overrides | Summary |
|---|---|---|---|
${mixIndex}
`;

const skillBody = `# ${skill.name}

${skill.description}

## When to use

${list(skill.whenToUse)}

## Choose a mode

This skill implements ${modes.length} visual modes. Pick one base mode per surface, or mix modes (see "Mixing modes").

| Mode | Name | Summary |
|---|---|---|
${modeIndex}

To implement a mode, read its reference file: \`references/<mode>.md\` (full spec: tokens, rules, component recipes, copywriting, accessibility) and \`references/designs/<mode>.DESIGN.md\` (Google DESIGN.md schema, lintable). The machine-readable registries are \`tokens.json\` and \`tokens.css\` (all modes, namespaced \`--adar-<mode>-*\`).

## Work-style rules (all modes)

${list(skill.crossCuttingRules)}

${mixingSection}

## Adding or editing a mode

Modes are data, not code. Edit \`data/modes/<id>.json\` (see \`data/modes/_template.json\`) and run \`node scripts/generate.mjs\` to regenerate every file below. Add a new mode by dropping a new \`data/modes/<id>.json\` and rerunning.
`;

const fm = `---\nname: ${skill.name}\ndescription: ${yq(skill.description)}\nlicense: ${skill.license}\nmetadata:\n  version: ${skill.version}\n  modes: ${modes.map((m) => m.id).join(", ")}\n---\n`;
write("SKILL.md", fm + "\n" + skillBody + "\n");

// ---- per-mode reference + Google DESIGN.md --------------------------------
for (const m of modes) {
  const variants = Object.entries(m.paletteVariants || {})
    .map(([vname, v]) => {
      const rows = Object.entries(v).map(([k, val]) => `| \`${k}\` | \`${val}\` |`).join("\n");
      return `### Variant: \`${vname}\`\n\n| Key | Value |\n|---|---|\n${rows}\n`;
    })
    .join("\n");

  const colors = Object.entries(m.colors)
    .map(([k, v]) => `| \`${k}\` | \`${v}\` |`)
    .join("\n");

  const refBody = `# ${m.name} — reference

${m.summary}

**When to use:** ${m.whenToUse}

**Signature element:** ${m.signatureElement}

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
${colors}

${variants}

### Typography

- Display: ${quoteFonts(m.fonts.display)}
- Mono: ${quoteFonts(m.fonts.mono)}

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | \`${m.radius}\` |
| spacing | ${Object.entries(m.spacing).map(([k, v]) => `\`${k}=${v}\``).join(" ")} |
| shadow.hard | \`${m.shadow.hard}\` |
| shadow.glow | \`${m.shadow.glow}\` |
| motion.easing | \`${m.motion.easing}\` |
| motion.cursor | \`${m.motion.cursor}\` |
| motion.durations | ${m.motion.durations.map((d) => `\`${d}\``).join(" ")} |
| effects.scanlines | \`${m.effects.scanlines}\` |
| effects.vignette | \`${m.effects.vignette}\` |
| effects.pixelate | \`${m.effects.pixelate}\` |

## Work-style rules

${list(m.rules)}

## Component recipes

${Object.entries(m.componentRecipes).map(([k, v]) => `- **${k}:** ${v}`).join("\n")}

## Copywriting

- Voice: ${m.copywriting.voice}
- Case: ${Object.entries(m.copywriting.case).map(([k, v]) => `${k}=${v}`).join(", ")}
- Prefixes: ${(m.copywriting.prefixes || []).join(" ")}
- Verb table: ${Object.entries(m.copywriting.verbs || {}).map(([k, v]) => `${k}→${v}`).join("; ")}
- Avoid: ${(m.copywriting.avoid || []).join(", ")}

## Do

${list(m.do)}

## Don't

${list(m.dont)}

## Accessibility

${list(m.accessibility)}

## Attribution / sources

${m.attribution.map((a) => `- ${a.name} — ${a.url} (${a.license})`).join("\n")}
`;
  write(`references/${m.id}.md`, refBody);

  // Google-spec DESIGN.md
  const g = m.prose || {};
  const radius = /^\d+$/.test(m.radius) ? m.radius + "px" : m.radius; // Dimension needs px/em/rem
  const designFm = `---\nversion: alpha\nname: ${m.name}\ncolors:\n${Object.entries(m.colors).map(([k, v]) => `  ${k}: "${v}"`).join("\n")}\ntypography:\n  h1:\n    fontFamily: ${m.fonts.display[0]}\n    fontSize: 32px\n    fontWeight: 700\n  body:\n    fontFamily: ${m.fonts.mono[0]}\n    fontSize: 16px\n    fontWeight: 400\n    lineHeight: 1.5\nrounded:\n  none: ${radius}\nspacing:\n${Object.entries(m.spacing).map(([k, v]) => `  ${k}: ${v}`).join("\n")}\ncomponents:\n  button-primary:\n    backgroundColor: "{colors.primary}"\n    textColor: "{colors.background}"\n    rounded: "{rounded.none}"\n  panel:\n    backgroundColor: "{colors.surface}"\n    textColor: "{colors.foreground}"\n    rounded: "{rounded.none}"\n  text-muted:\n    textColor: "{colors.muted}"\n  accent:\n    textColor: "{colors.accent}"\n  danger:\n    textColor: "{colors.danger}"\n  warning:\n    textColor: "{colors.warning}"\n  success:\n    textColor: "{colors.success}"\n---\n`;
  const designBody = `## Overview\n\n${g.overview}\n\n## Colors\n\n${g.colors}\n\n## Typography\n\n${g.typography}\n\n## Layout\n\n${g.layout}\n\n## Elevation & Depth\n\n${g.elevation}\n\n## Shapes\n\n${g.shapes}\n\n## Components\n\n${g.components}\n\n## Do's and Don'ts\n\n${g.dosDonts}\n`;
  write(`references/designs/${m.id}.DESIGN.md`, designFm + "\n" + designBody);
}

// ---- mix resolution + references -------------------------------------------
function mixToMode(id, seen = new Set()) {
  if (seen.has(id)) return null;
  seen.add(id);
  if (modeById[id]) return modeById[id];
  const mix = mixes.find((x) => x.id === id);
  if (!mix) return null;
  const base = mixToMode(mix.base, seen);
  if (!base) return null;
  const out = JSON.parse(JSON.stringify(base));
  for (const [group, srcId] of Object.entries(mix.overrides || {})) {
    const src = modeById[srcId];
    if (!src) return null;
    for (const k of (Array.isArray(GROUP_KEYS[group]) ? GROUP_KEYS[group] : [group])) {
      out[k] = src[k];
    }
  }
  return out;
}

for (const mix of mixes) {
  const resolved = mixToMode(mix.id);
  const overrides = Object.entries(mix.overrides || {}).map(([g, s]) => `- \`${g}\` ← \`${s}\``).join("\n") || "- none";
  const sourceRows = Object.keys(GROUP_KEYS)
    .map((g) => `| \`${g}\` | \`${(mix.overrides || {})[g] || mix.base}\` |`)
    .join("\n");
  const mixBody = `# ${mix.name} — mix

${mix.summary}

**Base:** \`${mix.base}\`

**Overrides**

${overrides}

**Signature element:** ${mix.signatureElement}

## Resolved groups

| Group | Source |
|---|---|
${sourceRows}

## Resolved tokens

### Colors

| Role | Value |
|---|---|
${Object.entries(resolved.colors).map(([k, v]) => `| \`${k}\` | \`${v}\` |`).join("\n")}

### Type & shape

- Display: ${quoteFonts(resolved.fonts.display)}
- Mono: ${quoteFonts(resolved.fonts.mono)}
- Radius: \`${resolved.radius}\`
- Shadow hard: \`${resolved.shadow.hard}\`
- Shadow glow: \`${resolved.shadow.glow}\`
- Motion easing: \`${resolved.motion.easing}\`
`;
  write(`references/mixes/${mix.id}.md`, mixBody);
}

// ---- consolidated registries ----------------------------------------------
const cssVars = [];
const jsonModes = {};
for (const m of modes) {
  const p = m.id;
  const colorVars = Object.entries(m.colors).map(([k, v]) => `  --adar-${p}-${k}: ${v};`).join("\n");
  const fontVars = `  --adar-${p}-font-display: ${quoteFonts(m.fonts.display)};\n  --adar-${p}-font-mono: ${quoteFonts(m.fonts.mono)};`;
  const spacingVars = Object.entries(m.spacing).map(([k, v]) => `  --adar-${p}-space-${k}: ${v};`).join("\n");
  cssVars.push(`/* ${m.name} */\n:root {\n${colorVars}\n${fontVars}\n${spacingVars}\n  --adar-${p}-radius: ${m.radius};\n  --adar-${p}-shadow-hard: ${m.shadow.hard};\n  --adar-${p}-shadow-glow: ${m.shadow.glow};\n}`);
  jsonModes[p] = { name: m.name, summary: m.summary, aliases: m.aliases, colors: m.colors, paletteVariants: m.paletteVariants, fonts: m.fonts, radius: m.radius, spacing: m.spacing, shadow: m.shadow, motion: m.motion, effects: m.effects };
}

const jsonMixes = {};
for (const mix of mixes) {
  const r = mixToMode(mix.id);
  const p = mix.id;
  const colorVars = Object.entries(r.colors).map(([k, v]) => `  --adar-${p}-${k}: ${v};`).join("\n");
  const fontVars = `  --adar-${p}-font-display: ${quoteFonts(r.fonts.display)};\n  --adar-${p}-font-mono: ${quoteFonts(r.fonts.mono)};`;
  const spacingVars = Object.entries(r.spacing).map(([k, v]) => `  --adar-${p}-space-${k}: ${v};`).join("\n");
  cssVars.push(`/* ${mix.name} (mix) */\n:root {\n${colorVars}\n${fontVars}\n${spacingVars}\n  --adar-${p}-radius: ${r.radius};\n  --adar-${p}-shadow-hard: ${r.shadow.hard};\n  --adar-${p}-shadow-glow: ${r.shadow.glow};\n}`);
  jsonMixes[mix.id] = { name: mix.name, summary: mix.summary, base: mix.base, overrides: mix.overrides || {}, signatureElement: mix.signatureElement, resolved: { colors: r.colors, paletteVariants: r.paletteVariants, fonts: r.fonts, radius: r.radius, spacing: r.spacing, shadow: r.shadow, motion: r.motion, effects: r.effects } };
}

write("tokens.css", `/* adar-design tokens — generated. Edit data/ (modes + mixes), run node scripts/generate.mjs */\n\n${cssVars.join("\n\n")}\n`);
write("tokens.json", JSON.stringify({ name: skill.name, version: skill.version, description: skill.description, modes: jsonModes, mixes: jsonMixes }, null, 2) + "\n");

const tokensMd = `# Token registry — all modes\n\nMachine-readable sources: \`tokens.json\` (nested) and \`tokens.css\` (\`--adar-<mode>-*\` CSS variables).\n\n${modes.map((m) => `## ${m.name} (\`${m.id}\`)\n\n${Object.entries(m.colors).map(([k, v]) => `- \`${k}\`: \`${v}\``).join("\n")}\n`).join("\n")}`;
write("references/tokens.md", tokensMd);

console.log(`\nGenerated ${modes.length} mode(s): ${modes.map((m) => m.id).join(", ")}${mixes.length ? ` · ${mixes.length} mix(es): ${mixes.map((x) => x.id).join(", ")}` : ""}`);
