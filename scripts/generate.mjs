#!/usr/bin/env node
// adar-design generator — single source of truth is data/ (skill.json + modes/*.json + mixes/*.json).
// Emits the entire skills/adar-design/ tree deterministically.
// Add or edit a mode: create/edit data/modes/<id>.json, then `node scripts/generate.mjs`.

import fs from "node:fs";
import path from "node:path";

import {
  ROOT,
  DATA,
  OUT,
  CANONICAL_RECIPES,
  COLOR_ROLES,
  TYPE_TIERS,
  loadAll,
  quoteFonts,
  cssFontList,
  kebab,
  selectionText,
  mixToMode,
  validate,
  validEffectImage,
} from "./lib.mjs";

const { skill, modes, modeFiles, mixes } = loadAll();

// ---- validation (shared with lint.mjs) ------------------------------------
const errors = validate({ skill, modes, modeFiles, mixes });
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

const GROUP_KEYS = (skill.mixing && skill.mixing.groups) || {};
const modeById = Object.fromEntries(modes.map((m) => [m.id, m]));

function colorTable(m) {
  const rows = COLOR_ROLES.map((k) => `| \`${k}\` | \`${m.colors[k]}\` |`);
  rows.push(`| \`selection-text\` | \`${selectionText(m)}\` |`);
  rows.push(`| \`color-scheme\` | \`${m.colorScheme}\` |`);
  return rows.join("\n");
}

function typeScaleTable(m) {
  const rows = TYPE_TIERS.map((tier) => {
    const t = m.typeScale[tier];
    const notes = [
      t.fontWeight ? `weight ${t.fontWeight}` : "",
      t.letterSpacing ? `tracking ${t.letterSpacing}` : "",
      t.textTransform && t.textTransform !== "none" ? t.textTransform : "",
    ].filter(Boolean).join(", ");
    return `| ${tier} | \`${t.fontSize}\` | ${t.lineHeight} | ${notes || "—"} |`;
  });
  return `| Tier | Size | Line-height | Notes |\n|---|---|---|---|\n${rows.join("\n")}`;
}

function recipeList(m) {
  const keys = [
    ...CANONICAL_RECIPES,
    ...Object.keys(m.componentRecipes || {}).filter((k) => !CANONICAL_RECIPES.includes(k)),
  ];
  return keys.map((k) => `- **${k}:** ${m.componentRecipes[k]}`).join("\n");
}

function copywritingBlock(c) {
  return [
    `- Voice: ${c.voice}`,
    `- Case: ${Object.entries(c.case || {}).map(([k, v]) => `${k}=${v}`).join(", ")}`,
    `- Prefixes: ${(c.prefixes || []).join(" ")}`,
    `- Verb table: ${Object.entries(c.verbs || {}).map(([k, v]) => `${k}→${v}`).join("; ")}`,
    `- Avoid: ${(c.avoid || []).join(", ")}`,
  ].join("\n");
}

function resolvedSections(r) {
  return [
    `### Color scheme\n\n- Color scheme: \`${r.colorScheme}\``,
    `### Colors\n\n| Role | Value |\n|---|---|\n${colorTable(r)}`,
    `### Typography\n\n- Display: ${quoteFonts(r.fonts.display)}\n- Body: ${quoteFonts(r.fonts.body)}\n- Mono: ${quoteFonts(r.fonts.mono)}`,
    `### Type scale\n\n${typeScaleTable(r)}`,
    `### Rules\n\n${list(r.rules)}`,
    `### Component recipes\n\n${recipeList(r)}`,
    `### Copywriting\n\n${copywritingBlock(r.copywriting)}`,
    `### Do\n\n${list(r.do)}`,
    `### Don't\n\n${list(r.dont)}`,
    `### Accessibility\n\n${list(r.accessibility)}`,
  ].join("\n\n");
}

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

To implement a mode, read its reference file: \`references/<mode>.md\` (full spec: tokens, rules, component recipes, copywriting, accessibility) and \`references/designs/<mode>.DESIGN.md\` (Google DESIGN.md schema, lintable). The machine-readable registries are \`tokens.json\` and \`tokens.css\` (all modes, namespaced \`--adar-<mode>-*\`). A screenshotable visual preview lives in \`gallery.html\` (open it and switch modes with the selector or \`?mode=<id>\`).

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

  const refBody = `# ${m.name} — reference

${m.summary}

**When to use:** ${m.whenToUse}

**Signature element:** ${m.signatureElement}

## Design tokens

### Colors (all roles)

| Role | Value |
|---|---|
${colorTable(m)}

${variants}

### Typography

- Display: ${quoteFonts(m.fonts.display)}
- Body: ${quoteFonts(m.fonts.body)}
- Mono: ${quoteFonts(m.fonts.mono)}

### Type scale

${typeScaleTable(m)}

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

${recipeList(m)}

## Copywriting

${copywritingBlock(m.copywriting)}

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
  const radius = /^\d+$/.test(m.radius) ? m.radius + "px" : m.radius;
  const designColors = COLOR_ROLES.map((k) => `  ${k}: "${m.colors[k]}"`).join("\n");
  const componentMap = [
    ["panel", "{colors.surface}", "{colors.foreground}"],
    ["card", "{colors.surface}", "{colors.foreground}"],
    ["button-primary", "{colors.primary}", "{colors.background}"],
    ["button-secondary", "{colors.surface}", "{colors.foreground}"],
    ["input", "{colors.background}", "{colors.foreground}"],
    ["select", "{colors.background}", "{colors.foreground}"],
    ["checkbox", "{colors.surface}", "{colors.foreground}"],
    ["badge", "{colors.primary}", "{colors.background}"],
    ["avatar", "{colors.surface}", "{colors.foreground}"],
    ["nav", "{colors.surface}", "{colors.foreground}"],
    ["table", "{colors.surface}", "{colors.foreground}"],
    ["dialog", "{colors.surface}", "{colors.foreground}"],
    ["toast", "{colors.surface}", "{colors.foreground}"],
    ["code", "{colors.background}", "{colors.foreground}"],
    ["empty", "{colors.surface}", "{colors.foreground}"],
    ["statusbar", "{colors.surface}", "{colors.foreground}"],
  ]
    .map(([name, bg, fg]) => `  ${name}:\n    backgroundColor: "${bg}"\n    textColor: "${fg}"\n    rounded: "{rounded.none}"`)
    .join("\n");

  const designFm = `---\nversion: alpha\nname: ${m.name}\ncolors:\n${designColors}\n  selectionText: "${selectionText(m)}"\ntypography:\n  h1:\n    fontFamily: "${m.fonts.display[0]}"\n    fontSize: ${m.typeScale.h1.fontSize}\n    fontWeight: ${m.typeScale.h1.fontWeight ?? 700}\n  h2:\n    fontFamily: "${m.fonts.display[0]}"\n    fontSize: ${m.typeScale.h2.fontSize}\n    fontWeight: ${m.typeScale.h2.fontWeight ?? 700}\n  body:\n    fontFamily: "${m.fonts.body[0]}"\n    fontSize: ${m.typeScale.body.fontSize}\n    fontWeight: ${m.typeScale.body.fontWeight ?? 400}\n    lineHeight: ${m.typeScale.body.lineHeight}\n  caption:\n    fontFamily: "${m.fonts.body[0]}"\n    fontSize: ${m.typeScale.caption.fontSize}\n    fontWeight: ${m.typeScale.caption.fontWeight ?? 400}\nrounded:\n  none: ${radius}\nspacing:\n${Object.entries(m.spacing).map(([k, v]) => `  ${k}: ${v}`).join("\n")}\ncomponents:\n${componentMap}\n  text-muted:\n    textColor: "{colors.muted}"\n  accent:\n    textColor: "{colors.accent}"\n  danger:\n    textColor: "{colors.danger}"\n  warning:\n    textColor: "{colors.warning}"\n  success:\n    textColor: "{colors.success}"\n---\n`;

  const designBody = `## Overview\n\n${g.overview}\n\n## Colors\n\n${g.colors}\n\n## Typography\n\n${g.typography}\n\n## Layout\n\n${g.layout}\n\n## Elevation & Depth\n\n${g.elevation}\n\n## Shapes\n\n${g.shapes}\n\n## Components\n\n${g.components}\n\n## Do's and Don'ts\n\n${g.dosDonts}\n`;
  write(`references/designs/${m.id}.DESIGN.md`, designFm + "\n" + designBody);
}

// ---- mix resolution + references -------------------------------------------
for (const mix of mixes) {
  const resolved = mixToMode(mix.id, modeById, mixes, GROUP_KEYS);
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

${resolvedSections(resolved)}
`;
  write(`references/mixes/${mix.id}.md`, mixBody);
}

// ---- consolidated registries ----------------------------------------------
function cssBlock(p, label, m) {
  const lines = [];
  for (const role of COLOR_ROLES) lines.push(`  --adar-${p}-${role}: ${m.colors[role]};`);
  lines.push(`  --adar-${p}-selection-text: ${selectionText(m)};`);
  lines.push(`  --adar-${p}-color-scheme: ${m.colorScheme};`);
  lines.push(`  --adar-${p}-font-display: ${cssFontList(m.fonts.display)};`);
  lines.push(`  --adar-${p}-font-mono: ${cssFontList(m.fonts.mono)};`);
  lines.push(`  --adar-${p}-font-body: ${cssFontList(m.fonts.body)};`);
  for (const [k, v] of Object.entries(m.spacing)) lines.push(`  --adar-${p}-space-${k}: ${v};`);
  lines.push(`  --adar-${p}-radius: ${m.radius};`);
  lines.push(`  --adar-${p}-shadow-hard: ${m.shadow.hard};`);
  lines.push(`  --adar-${p}-shadow-glow: ${m.shadow.glow};`);
  for (const tier of TYPE_TIERS) {
    const t = m.typeScale[tier];
    lines.push(`  --adar-${p}-type-${tier}-size: ${t.fontSize};`);
    lines.push(`  --adar-${p}-type-${tier}-line-height: ${t.lineHeight};`);
    if (t.fontWeight !== undefined) lines.push(`  --adar-${p}-type-${tier}-weight: ${t.fontWeight};`);
    if (t.letterSpacing !== undefined) lines.push(`  --adar-${p}-type-${tier}-letter-spacing: ${t.letterSpacing};`);
    if (t.textTransform !== undefined) lines.push(`  --adar-${p}-type-${tier}-transform: ${t.textTransform};`);
  }
  lines.push(`  --adar-${p}-motion-easing: ${m.motion.easing};`);
  lines.push(`  --adar-${p}-motion-cursor: ${m.motion.cursor};`);
  const DUR = ["instant", "fast", "base", "slow", "slowest"];
  (m.motion.durations || []).forEach((d, i) => {
    if (DUR[i]) lines.push(`  --adar-${p}-duration-${DUR[i]}: ${d};`);
  });
  lines.push(`  --adar-${p}-effects-scanlines: ${m.effects.scanlines};`);
  lines.push(`  --adar-${p}-effects-vignette: ${m.effects.vignette};`);
  lines.push(`  --adar-${p}-effects-pixelate: ${m.effects.pixelate};`);
  for (const [k, v] of Object.entries(m.effects)) {
    if (["scanlines", "vignette", "pixelate"].includes(k)) continue;
    if (!validEffectImage(v)) continue;
    lines.push(`  --adar-${p}-effects-${kebab(k)}: ${v};`);
  }
  return `/* ${label} */\n:root {\n${lines.join("\n")}\n}`;
}

function resolvedColors(m) {
  const colors = {};
  for (const role of COLOR_ROLES) colors[role] = m.colors[role];
  colors.selectionText = selectionText(m);
  return colors;
}

const cssVars = [];
const jsonModes = {};
for (const m of modes) {
  const p = m.id;
  cssVars.push(cssBlock(p, m.name, m));
  jsonModes[p] = {
    name: m.name,
    summary: m.summary,
    aliases: m.aliases,
    colorScheme: m.colorScheme,
    colors: resolvedColors(m),
    paletteVariants: m.paletteVariants,
    fonts: m.fonts,
    typeScale: m.typeScale,
    radius: m.radius,
    spacing: m.spacing,
    shadow: m.shadow,
    motion: m.motion,
    effects: m.effects,
  };
}

const jsonMixes = {};
for (const mix of mixes) {
  const r = mixToMode(mix.id, modeById, mixes, GROUP_KEYS);
  cssVars.push(cssBlock(mix.id, `${mix.name} (mix)`, r));
  jsonMixes[mix.id] = {
    name: mix.name,
    summary: mix.summary,
    base: mix.base,
    overrides: mix.overrides || {},
    signatureElement: mix.signatureElement,
    resolved: { ...r, colors: resolvedColors(r) },
  };
}

write("tokens.css", `/* adar-design tokens — generated. Edit data/ (modes + mixes), run node scripts/generate.mjs */\n\n${cssVars.join("\n\n")}\n`);
write("tokens.json", JSON.stringify({ name: skill.name, version: skill.version, description: skill.description, modes: jsonModes, mixes: jsonMixes }, null, 2) + "\n");

const tokensMd = `# Token registry — all modes\n\nMachine-readable sources: \`tokens.json\` (nested) and \`tokens.css\` (\`--adar-<mode>-*\` CSS variables).\n\n${modes.map((m) => `## ${m.name} (\`${m.id}\`)\n\n${COLOR_ROLES.map((k) => `- \`${k}\`: \`${m.colors[k]}\``).join("\n")}\n- \`selection-text\`: \`${selectionText(m)}\`\n- \`color-scheme\`: \`${m.colorScheme}\`\n`).join("\n")}`;
write("references/tokens.md", tokensMd);

console.log(`\nGenerated ${modes.length} mode(s): ${modes.map((m) => m.id).join(", ")}${mixes.length ? ` · ${mixes.length} mix(es): ${mixes.map((x) => x.id).join(", ")}` : ""}`);
