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

const skillBody = `# ${skill.name}

${skill.description}

## When to use

${list(skill.whenToUse)}

## Choose a mode

This skill implements three visual modes. Pick exactly one per surface.

| Mode | Name | Summary |
|---|---|---|
${modeIndex}

To implement a mode, read its reference file: \`references/<mode>.md\` (full spec: tokens, rules, component recipes, copywriting, accessibility) and \`references/designs/<mode>.DESIGN.md\` (Google DESIGN.md schema, lintable). The machine-readable registries are \`tokens.json\` and \`tokens.css\` (all modes, namespaced \`--adar-<mode>-*\`).

## Work-style rules (all modes)

${list(skill.crossCuttingRules)}

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

write("tokens.css", `/* adar-design tokens — generated. Edit data/modes/*.json, run node scripts/generate.mjs */\n\n${cssVars.join("\n\n")}\n`);
write("tokens.json", JSON.stringify({ name: skill.name, version: skill.version, description: skill.description, modes: jsonModes }, null, 2) + "\n");

const tokensMd = `# Token registry — all modes\n\nMachine-readable sources: \`tokens.json\` (nested) and \`tokens.css\` (\`--adar-<mode>-*\` CSS variables).\n\n${modes.map((m) => `## ${m.name} (\`${m.id}\`)\n\n${Object.entries(m.colors).map(([k, v]) => `- \`${k}\`: \`${v}\``).join("\n")}\n`).join("\n")}`;
write("references/tokens.md", tokensMd);

console.log(`\nGenerated ${modes.length} mode(s): ${modes.map((m) => m.id).join(", ")}`);
