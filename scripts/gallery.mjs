#!/usr/bin/env node
// adar-design gallery — generates skills/adar-design/gallery.html from data/.
// One fixed shared component set, rendered identically across all modes + mixes,
// with generic semantic vars mapped to each mode's namespaced tokens.

import fs from "node:fs";
import path from "node:path";

import { ROOT, OUT, loadAll, kebab, mixToMode, validEffectImage } from "./lib.mjs";

const { skill, modes, mixes } = loadAll();
const groupKeys = (skill.mixing && skill.mixing.groups) || {};
const modeById = Object.fromEntries(modes.map((m) => [m.id, m]));

const entries = [
  ...modes.map((m) => ({ id: m.id, name: m.name, resolved: m })),
  ...mixes.map((mix) => ({ id: mix.id, name: `${mix.name} (mix)`, resolved: mixToMode(mix.id, modeById, mixes, groupKeys) })),
];

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const GENERIC_VARS = [
  ["bg", "background"],
  ["surface", "surface"],
  ["fg", "foreground"],
  ["muted", "muted"],
  ["primary", "primary"],
  ["accent", "accent"],
  ["danger", "danger"],
  ["warning", "warning"],
  ["success", "success"],
  ["border", "border"],
  ["divider", "divider"],
  ["selection", "selection"],
  ["selection-text", "selection-text"],
  ["overlay", "overlay"],
  ["font-display", "font-display"],
  ["font-body", "font-body"],
  ["font-mono", "font-mono"],
  ["h1", "type-h1-size"],
  ["h2", "type-h2-size"],
  ["body", "type-body-size"],
  ["caption", "type-caption-size"],
  ["radius", "radius"],
  ["shadow-hard", "shadow-hard"],
  ["shadow-glow", "shadow-glow"],
  ["ease", "motion-easing"],
  ["dur-instant", "duration-instant"],
  ["dur-fast", "duration-fast"],
  ["dur-base", "duration-base"],
];

const SPACE_VARS = ["xs", "sm", "md", "lg", "xl"];

function extraDurationVars(id, m) {
  const out = [];
  const d = (m.motion && m.motion.durations) || [];
  if (d[3]) out.push(`  --dur-slow: var(--adar-${id}-duration-slow);`);
  if (d[4]) out.push(`  --dur-slowest: var(--adar-${id}-duration-slowest);`);
  return out.join("\n");
}

function otherEffectKeys(m) {
  return Object.keys(m.effects || {}).filter(
    (k) => !["scanlines", "vignette", "pixelate"].includes(k) && validEffectImage(m.effects[k])
  );
}

function signatureRecipe(m) {
  const keys = ["hero", "wordmark", "plane"];
  const found = keys.find((k) => m.componentRecipes && m.componentRecipes[k]);
  return found ? m.componentRecipes[found] : m.signatureElement;
}

const GOOGLE_FAMILIES = new Set([
  "Anton", "Archivo", "Archivo Black", "Audiowide", "Baloo 2", "Chakra Petch",
  "Chewy", "Cinzel", "Cormorant", "Cormorant Garamond", "EB Garamond", "Fredoka",
  "IBM Plex Mono", "JetBrains Mono", "Josefin Sans", "Michroma", "Montserrat",
  "Orbitron", "Oswald", "Playfair Display", "Press Start 2P", "Rajdhani",
  "Share Tech Mono", "Space Grotesk", "Space Mono", "VT323",
]);

function googleFontsLinks() {
  const families = [];
  const seen = new Set();
  for (const e of entries) {
    for (const k of ["display", "body", "mono"]) {
      for (const fam of e.resolved.fonts?.[k] || []) {
        if (GOOGLE_FAMILIES.has(fam) && !seen.has(fam)) {
          seen.add(fam);
          families.push(fam);
        }
      }
    }
  }
  families.sort();
  const qs = families
    .map((f) => `family=${f.replace(/ /g, "+")}:wght@400;700`)
    .join("&");
  return qs
    ? `<link rel="preconnect" href="https://fonts.gstatic.com">\n<link href="https://fonts.googleapis.com/css2?${qs}&display=swap" rel="stylesheet">`
    : "";
}

// ---- CSS -------------------------------------------------------------------
const mappingCss = entries
  .map((e) => {
    const { id, resolved: m } = e;
    const lines = [];
    lines.push(`body[data-mode="${id}"] {`);
    for (const [generic, token] of GENERIC_VARS) {
      lines.push(`  --${generic}: var(--adar-${id}-${token});`);
    }
    lines.push(extraDurationVars(id, m));
    for (const s of SPACE_VARS) {
      if (m.spacing && m.spacing[s] !== undefined) {
        lines.push(`  --space-${s}: var(--adar-${id}-space-${s});`);
      }
    }
    lines.push(`  color-scheme: var(--adar-${id}-color-scheme);`);
    lines.push(`}`);
    return lines.join("\n");
  })
  .join("\n\n");

const hideCss = entries
  .map((e) => `body[data-mode="${e.id}"] .mode:not([data-mode="${e.id}"]) { display: none; }`)
  .join("\n");

const effectCss = entries
  .map((e) => {
    const { id, resolved: m } = e;
    const lines = [];
    lines.push(`body[data-mode="${id}"] .fx-scanlines { background-image: var(--adar-${id}-effects-scanlines); }`);
    lines.push(`body[data-mode="${id}"] .fx-vignette { background-image: var(--adar-${id}-effects-vignette); }`);
    for (const key of otherEffectKeys(m)) {
      lines.push(`body[data-mode="${id}"] .fx-${kebab(key)} { background-image: var(--adar-${id}-effects-${kebab(key)}); }`);
    }
    lines.push(`body[data-mode="${id}"] img, body[data-mode="${id}"] .avatar, body[data-mode="${id}"] .sprite { image-rendering: var(--adar-${id}-effects-pixelate); }`);
    return lines.join("\n");
  })
  .join("\n");

const cursorCss = entries
  .map((e) => {
    const { id, resolved: m } = e;
    const cursor = typeof m.motion?.cursor === "string" ? m.motion.cursor : "";
    let animation = "none";
    if (cursor.includes("steps(")) {
      animation = `blink var(--adar-${id}-motion-cursor)`;
    } else if (cursor.includes("pulse")) {
      animation = `var(--adar-${id}-motion-cursor)`;
    }
    return `body[data-mode="${id}"] .cursor { animation: ${animation}; }`;
  })
  .join("\n");

const baseCss = `
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { font-family: var(--font-body, system-ui, sans-serif); background: var(--bg); color: var(--fg); }
.mode { position: relative; min-height: 100vh; background: var(--bg); color: var(--fg); }
.mode-caption { position: relative; z-index: 5; padding: var(--space-sm) var(--space-md); font-family: var(--font-mono); font-size: var(--caption); color: var(--muted); border-bottom: 1px solid var(--divider); }
.app { position: relative; z-index: 5; max-width: 1080px; margin: 0 auto; padding: var(--space-lg) var(--space-md) calc(var(--space-xl) + 96px); }
.shell-inner { max-width: 1080px; margin: 0 auto; padding: 0 var(--space-md); display: flex; align-items: center; gap: var(--space-md); }
.gallery-bar { position: sticky; top: 0; z-index: 70; padding: var(--space-sm) 0; background: var(--surface); border-bottom: 1px solid var(--border); font-family: var(--font-display); }
.gallery-title { font-weight: 700; }
.gallery-bar select { font: inherit; color: var(--fg); background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 4px 8px; }
.app-nav { display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); padding: var(--space-sm) var(--space-md); background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow-hard); }
.logo { font-family: var(--font-display); font-weight: 700; }
.tabs { display: flex; gap: var(--space-sm); }
.tab { padding: 4px 10px; border: 1px solid transparent; border-radius: var(--radius); }
.tab.active { background: var(--selection); color: var(--selection-text); }
.hero { padding: var(--space-xl) 0; }
.hero h1 { margin: 0 0 var(--space-sm); font-family: var(--font-display); font-size: var(--h1); line-height: 1.1; }
.lead { margin: 0; font-size: var(--body); color: var(--muted); max-width: 60ch; }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); }
.card { background: var(--surface); color: var(--fg); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--space-md); box-shadow: var(--shadow-hard); }
.card-title { margin: 0 0 var(--space-sm); font-family: var(--font-display); font-size: var(--h2); }
.card-body { margin: 0 0 var(--space-md); font-size: var(--body); }
.btn { font-family: var(--font-display); font-size: var(--caption); padding: 8px 16px; border: 1px solid var(--border); border-radius: var(--radius); cursor: pointer; transition: all var(--dur-fast, 150ms) var(--ease); }
.btn-primary { background: var(--primary); color: var(--bg); box-shadow: var(--shadow-hard); }
.btn-secondary { background: var(--surface); color: var(--fg); }
.block { margin-top: var(--space-xl); }
.block h2 { font-family: var(--font-display); font-size: var(--h2); }
.table { width: 100%; border-collapse: collapse; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.table th, .table td { text-align: left; padding: 8px 12px; border-bottom: 1px solid var(--divider); font-size: var(--body); }
.table th { font-family: var(--font-display); font-weight: 700; color: var(--muted); background: var(--surface); }
.table .num { text-align: right; font-variant-numeric: tabular-nums; }
.table tr.selected td { background: var(--selection); color: var(--selection-text); }
.form { display: flex; flex-wrap: wrap; gap: var(--space-md); align-items: flex-end; }
.field { display: flex; flex-direction: column; gap: 4px; font-size: var(--caption); color: var(--muted); }
.input, .select { background: var(--bg); color: var(--fg); border: 1px solid var(--border); border-radius: var(--radius); padding: 8px 12px; font-size: var(--body); font-family: var(--font-body); }
.check { display: inline-flex; align-items: center; gap: 6px; font-size: var(--body); }
.checkbox, .radio { accent-color: var(--primary); width: 18px; height: 18px; margin: 0; flex: 0 0 auto; }
.actions { display: flex; gap: var(--space-sm); }
.badge-row { display: flex; gap: var(--space-sm); margin-bottom: var(--space-md); }
.badge { display: inline-flex; align-items: center; gap: 8px; padding: 4px 10px; border-radius: var(--radius); border: 1px solid var(--border); background: var(--surface); color: var(--fg); font-size: var(--caption); line-height: 1.2; }
.badge::before { content: ""; flex: 0 0 auto; width: 8px; height: 8px; border-radius: 999px; background: var(--success); }
.badge-warning::before { background: var(--warning); }
.badge-danger::before { background: var(--danger); }
.toast { display: inline-block; padding: 10px 16px; background: var(--surface); border: 1px solid var(--border); border-left: 4px solid var(--success); border-radius: var(--radius); font-size: var(--body); box-shadow: var(--shadow-hard); }
.dialog { position: fixed; inset: 0; z-index: 80; display: flex; align-items: center; justify-content: center; padding: var(--space-md); background: color-mix(in srgb, var(--overlay) 55%, transparent); }
.dialog-panel { max-width: 420px; width: 100%; padding: var(--space-md); background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow-hard); }
.dialog-panel h2 { margin: 0 0 var(--space-sm); font-family: var(--font-display); font-size: var(--h2); }
.empty { margin-top: var(--space-md); padding: var(--space-lg); text-align: center; background: var(--surface); border: 1px dashed var(--divider); border-radius: var(--radius); color: var(--fg); font-size: var(--body); }
.empty-text { margin: 0; }
.empty .btn { margin-top: var(--space-sm); }
.code { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--space-md) var(--space-md) var(--space-lg); font-family: var(--font-mono); font-size: var(--caption); line-height: 1.5; white-space: pre; overflow-x: auto; }
.avatar-row { display: flex; gap: var(--space-sm); margin-top: var(--space-md); }
.avatar { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); font-family: var(--font-display); font-size: var(--caption); }
.signature { margin-top: var(--space-xl); padding: var(--space-md); background: var(--surface); border: 1px solid var(--border); border-left: 4px solid var(--primary); border-radius: var(--radius); box-shadow: var(--shadow-hard); }
.sig-label { font-family: var(--font-mono); font-size: var(--caption); color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
.sig-body { margin-top: var(--space-sm); font-size: var(--body); }
.statusbar { position: fixed; left: 0; right: 0; bottom: 0; z-index: 65; padding: var(--space-sm) 0; background: var(--surface); border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: var(--caption); color: var(--muted); }
.cursor { color: var(--primary); display: inline-block; }
@keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.fx { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.fx-scanlines { z-index: 60; opacity: .6; }
.fx-vignette { opacity: 1; }
@media (max-width: 720px) { .cards { grid-template-columns: 1fr; } .app-nav { flex-wrap: wrap; } .shell-inner { flex-wrap: wrap; } }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
`;

// ---- HTML ------------------------------------------------------------------
function sectionHtml(e) {
  const { id, name, resolved: m } = e;
  const effectLayers = ["scanlines", "vignette", ...otherEffectKeys(m).map(kebab)]
    .map((k) => `  <div class="fx fx-${k}" aria-hidden="true"></div>`)
    .join("\n");
  const signature = signatureRecipe(m);
  return `<section class="mode" data-mode="${id}">
${effectLayers}
  <div class="mode-caption">${esc(id)} — ${esc(name)}</div>
  <div class="app">
    <nav class="app-nav">
      <span class="logo">${esc(id)}</span>
      <div class="tabs"><span class="tab active">Overview</span><span class="tab">Data</span><span class="tab">Settings</span></div>
    </nav>
    <header class="hero">
      <h1>Adar Design ${esc(name)}</h1>
      <p class="lead">A finished app surface rendered from this mode's body type, type scale, complete color roles, motion, and effects.</p>
    </header>
    <section class="cards">
      <article class="card"><h2 class="card-title">Panel one</h2><p class="card-body">Data-bearing surface with the mode's edge and elevation signature.</p><button class="btn btn-primary">Action</button></article>
      <article class="card"><h2 class="card-title">Panel two</h2><p class="card-body">Same component, same tokens — only the mode changes below.</p><button class="btn btn-secondary">Secondary</button></article>
      <article class="card"><h2 class="card-title">Panel three</h2><p class="card-body">Every mode renders this exact layout for comparison.</p><button class="btn btn-primary">Action</button></article>
    </section>
    <section class="block">
      <h2>Data table</h2>
      <table class="table">
        <thead><tr><th class="num">ID</th><th>Name</th><th>Status</th><th class="num">Value</th></tr></thead>
        <tbody>
          <tr><td class="num">001</td><td>Alpha</td><td>Active</td><td class="num">12</td></tr>
          <tr class="selected"><td class="num">002</td><td>Bravo</td><td>Selected</td><td class="num">34</td></tr>
          <tr><td class="num">003</td><td>Charlie</td><td>Idle</td><td class="num">56</td></tr>
          <tr><td class="num">004</td><td>Delta</td><td>Done</td><td class="num">78</td></tr>
        </tbody>
      </table>
    </section>
    <section class="block">
      <h2>Form</h2>
      <div class="form">
        <label class="field"><span>Name</span><input class="input" placeholder="Enter value"></label>
        <label class="field"><span>Option</span><select class="select"><option>One</option><option selected>Two</option><option>Three</option></select></label>
        <label class="check"><input type="checkbox" class="checkbox" checked><span>Checkbox</span></label>
        <label class="check"><input type="radio" class="radio" name="r"><span>Radio</span></label>
        <div class="actions"><button class="btn btn-primary">Save</button><button class="btn btn-secondary">Cancel</button></div>
      </div>
    </section>
    <section class="block">
      <h2>Feedback</h2>
      <div class="badge-row"><span class="badge badge-success">Success</span><span class="badge badge-warning">Warning</span><span class="badge badge-danger">Danger</span></div>
      <div class="toast">Saved successfully.</div>
      <div class="empty"><p class="empty-text">Nothing here yet — one message and one CTA.</p><button class="btn btn-primary">Create</button></div>
    </section>
    <section class="block">
      <h2>Code + avatars</h2>
      <pre class="code">const mode = "${esc(id)}";\nrender(app, mode);</pre>
      <div class="avatar-row"><span class="avatar">A</span><span class="avatar">B</span><span class="avatar">C</span></div>
    </section>
    <section class="signature">
      <div class="sig-label">Signature element</div>
      <div class="sig-body">${esc(signature)}</div>
    </section>
    <footer class="statusbar"><div class="shell-inner"><span>Ready</span><span>${esc(id)}</span><span class="cursor">█</span></div></footer>
  </div>
  <div class="dialog" role="dialog" aria-modal="true" aria-label="Confirm">
    <div class="dialog-panel"><h2>Confirm</h2><p>This dialog is rendered open, with the scrim drawn from the overlay token.</p><div class="actions"><button class="btn btn-primary">OK</button><button class="btn btn-secondary">Cancel</button></div></div>
  </div>
</section>`;
}

const options = entries
  .map((e) => `<option value="${esc(e.id)}">${esc(e.name)}</option>`)
  .join("\n");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${googleFontsLinks()}
<title>adar-design gallery</title>
<link rel="stylesheet" href="tokens.css">
<style>
${baseCss}
${mappingCss}

${hideCss}

${effectCss}

${cursorCss}
</style>
</head>
<body data-mode="arcade">
<header class="gallery-bar">
  <div class="shell-inner">
    <span class="gallery-title">adar-design gallery</span>
    <select id="mode-select" aria-label="Choose mode">
${options}
    </select>
  </div>
</header>
<main>
${entries.map(sectionHtml).join("\n")}
</main>
<script>
(function () {
  var sel = document.getElementById("mode-select");
  var params = new URLSearchParams(location.search);
  var mode = params.get("mode");
  var valid = Array.prototype.some.call(sel.options, function (o) { return o.value === mode; });
  if (!valid) mode = "arcade";
  document.body.dataset.mode = mode;
  sel.value = mode;
  document.title = "adar-design gallery — " + mode;
  sel.addEventListener("change", function () {
    document.body.dataset.mode = sel.value;
    var url = new URL(location.href);
    url.searchParams.set("mode", sel.value);
    history.replaceState(null, "", url);
    document.title = "adar-design gallery — " + sel.value;
  });
})();
</script>
</body>
</html>
`;

const outPath = path.join(OUT, "gallery.html");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, html);
console.log("wrote", path.relative(ROOT, outPath), `(${entries.length} modes/mixes)`);
