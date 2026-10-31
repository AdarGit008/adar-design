# adar-design refine spec — v0.4.0 ("holistic, refined UI")

This is the implementable specification for turning every `adar-design` visual mode from a
"color + font mood with five widgets" into a **holistic, refined UI**: a finished app surface
with a real body typeface, a real type scale, a light/dark scheme signal, complete color roles,
a complete component vocabulary, emitted motion + effects tokens, working mixes, and a
screenshotable gallery for vision-agent review.

Scope of this document: it changes **data only** (and the generator/lint/gallery scripts that
read that data). It does **not** change `skills/` by hand — `skills/` stays fully generated.
Deterministic generation and the data-driven architecture are preserved.

---

## 0. Ground truth corrections (read first)

The audit's gap list is mostly right; two items need correction so the implementer does not
chase a non-bug:

1. **`tokens.json` already contains `motion` and `effects`** for modes and mixes (verify:
   `jq '.modes.arcade | {motion, effects}' skills/adar-design/tokens.json`). The real omission is
   **(a)** `tokens.css` never emits motion/effects, and **(b)** `tokens.json` is missing the
   *new* roles/signals: `fonts.body`, `typeScale`, `colorScheme`, `colors.border`, `colors.divider`,
   `colors.selection`, `colors.overlay`. The spec below fixes all of those.
2. **The light/dark split is 9 light / 11 dark, not 8/12.** `gameboy` (olive LCD `#9bbc0f`) is a
   light scheme. The per-mode table (§4) is authoritative.

---

## 1. NEW MODE SCHEMA

Add the fields below to every `data/modes/<id>.json` and to `data/modes/_template.json`. All of
them are **required** (the generator's validation fails if any are absent). This is the
correctness-critical set: body copy, type hierarchy, and complete color roles cannot be
synthesized safely, so there is no silent fallback.

### 1.1 `fonts.body` (string array, required)

Readable running-copy face. Ordered fallback list, same convention as `fonts.display`/`fonts.mono`.
Used for paragraphs, table cells, form values, dialog body, and every other "sentence" — it is
**not** the display face and **not** forced to monospace.

- Semantics: `body` is what `DESIGN.md`'s `typography.body.fontFamily` and the generated
  `--adar-<id>-font-body` token use.
- For text-terminal modes (`bios`, `c64`, `terminal`, `gameboy`, `arcade`, `atari-sierra`,
  `cyberpunk`, `vaporwave`) the body face *is* a mono/terminal face by design — that is correct
  and expected. For every other mode it must be a readable sans/serif (see §4).

```json
"fonts": {
  "display": ["Press Start 2P", "VT323", "monospace"],
  "mono": ["VT323", "IBM Plex Mono", "monospace"],
  "body": ["VT323", "IBM Plex Mono", "monospace"]
}
```

### 1.2 `typeScale` (object, required)

Exact shape (all four tiers required):

```json
"typeScale": {
  "h1":      { "fontSize": "24px", "lineHeight": 1.1 },
  "h2":      { "fontSize": "16px", "lineHeight": 1.2 },
  "body":    { "fontSize": "16px", "lineHeight": 1.5 },
  "caption": { "fontSize": "14px", "lineHeight": 1.4 }
}
```

- `fontSize`: string, must match `/^\d+(\.\d+)?px$/`.
- `lineHeight`: unitless number ≥ 1.0.
- Optional per-tier keys (defaults in parentheses): `fontWeight` (700 for h1/h2, 400 for
  body/caption), `letterSpacing` (`"normal"`), `textTransform` (`"none"`). If present, the
  generator emits them; if absent it uses the defaults. These are optional so the 20-mode fill
  stays small, but they let modes encode tracking/case (e.g. arcade `letterSpacing: "0.06em"`,
  vaporwave `textTransform: "uppercase"`).
- Invariant (validated): `h1.fontSize ≥ h2.fontSize ≥ body.fontSize ≥ caption.fontSize` when
  parsed as numbers, and `body.fontSize ≥ 11px`. Ties are legal: fixed-cell text modes
  (`bios`, `c64`, `terminal`, `gameboy`) intentionally use a flat scale (h1 == body) and convey
  hierarchy through weight / inversion / color rather than size. All other modes should keep
  `h1 > h2 > body` strictly (§4.2).

### 1.3 `colorScheme` (top-level string, required)

`"light"` or `"dark"`. No other value is valid.

- Semantics: drives native control chrome (`color-scheme`), selection-text derivation (§1.5),
  and the gallery's forced-color/prefers-color-scheme behavior.
- Emitted as `--adar-<id>-color-scheme: light|dark` and `tokens.json` `modes.<id>.colorScheme`.

### 1.4 New color roles (inside the existing `colors` object, required)

Add four keys to `colors` so the flat role set goes from 9 to 13:

| key | semantics | constraints |
|---|---|---|
| `border` | default structural edge/hairline for panels, inputs, cards, table cells | `#RRGGBB` |
| `divider` | horizontal rule / list separator / table row rule | `#RRGGBB` |
| `selection` | highlight/selection background (`::selection`, active nav row, selected table row) | `#RRGGBB` |
| `overlay` | scrim/backdrop color for dialogs, drawers, and effect overlays | `#RRGGBB` |

Notes:

- All four are **solid** `#RRGGBB` hex (matching the existing convention). Translucency is
  applied at the *usage site*, not stored in the token — the gallery and recipes use
  `color-mix(in srgb, var(--overlay) 60%, transparent)` for scrims.
- `selection` is the *background* only. The matching text color is derived (next section); a
  mode may override it with an optional `colors.selectionText` (`#RRGGBB`).
- Because these live inside `colors`, they automatically ride along with the existing
  `colors` mixing group (whole-object override). No new mixing group is needed for them.

### 1.5 `selection` text derivation

Deterministic, no per-mode data required (with one documented exception):

```
selectionText =
  colorScheme === "dark"
    ? colors.background
    : colors.foreground
```

Exceptions (set optional `colors.selectionText`):

- `folk-art`: `"selectionText": "#2b2b2b"` (its gold `#e8b32a` selection needs ink text, not white).
- Any mode whose chosen `selection` makes the derived text fail 4.5:1 may set `selectionText`
  explicitly; the lint asserts the value is `#RRGGBB`.

The generator emits `--adar-<id>-selection-text` from this rule (or the override) so the gallery
and recipes never have to re-derive it.

### 1.6 Normalize `effects.pixelate`

Replace the free-text values with a two-value enum mapped directly to CSS `image-rendering`:

| data value | emitted CSS | modes |
|---|---|---|
| `"pixelated"` | `image-rendering: pixelated` | bios, arcade, atari-sierra, c64, cyberpunk, gameboy |
| `"auto"` | `image-rendering: auto` | all others (including current `"none"`, `"auto"`, and missing) |

Rules:

- `effects.pixelate` **must** be exactly `"pixelated"` or `"auto"`. `"none"` normalizes to
  `"auto"` (there is no CSS `image-rendering: none`). `"undefined"`, prose, and missing keys are
  validation errors.
- `win95`: set `"effects.pixelate": "auto"` and move its guidance string
  ("keep image-rendering: auto and scale icons by integer factors only (16/32/48px)") into the
  mode's existing `rules` array (it already exists in `prose.shapes`; keep both consistent).
- `nasa80`: currently has **no** `pixelate` key and **no** `scanlines` key — add
  `"effects.pixelate": "auto"` and `"effects.scanlines": "none"` (its scanline role is carried
  by `starfield`/`blueprintGrid`).
- `tim` and `stranger-things` already use `"auto"` — leave as `"auto"`.

### 1.7 Normalize `shadow.hard` / `shadow.glow`

Both keys are **required** and must hold a clean CSS `box-shadow` value, not prose.

Token grammar (validated):

```
shadowToken := 'none' | shadowList
shadowList  := shadowItem (', ' shadowItem)*
shadowItem  := [ 'inset' SP ] len SP len ( SP len )? ( SP len )? SP color
len         := [+-]? digits ['.' digits]? ( 'px' | 'em' | 'rem' | 'vh' | 'vw' | '%' )
color       := '#RRGGBB' | '#RGB' | 'rgba(...)' | 'rgb(...)' | 'currentColor' | 'transparent'
```

Concretely: reject any value containing `undefined`, an em-dash `—`, or sentence prose
(blocklist markers: `undefined`, `—`, `never a`, `placeholder`, `draw the`, `instead`, `a real`,
`(transform:`). Positive check: value is `none` or every comma-separated item matches the grammar
above (2–4 lengths then one color).

Bug fixes this requires:

- `fauvism.shadow.hard`: currently `"none — elevation is an offset colour plane …"`. Set it to
  `"none"`. The offset-plane guidance already lives in `prose.elevation` and
  `shadow.plane` (keep `shadow.plane` as-is; it is a legal extra key, not emitted as a
  `box-shadow`). This fixes `--adar-fauvism-shadow-hard: none — …` in `tokens.css`.
- `impressionism.shadow.hard`: currently **missing** → emits `undefined`. Add
  `"hard": "none"` (impressionism elevates with `soft`/`lift`/`contact`/`glow`, never a hard
  offset). This fixes `--adar-impressionism-shadow-hard: undefined`.

`shadow.glow` must satisfy the same grammar. All existing `shadow.glow` values already do; the
lint enforces it so prose can never regress.

### 1.8 Required vs optional — summary

| field | required? | rationale |
|---|---|---|
| `fonts.body` | **required** | fixes monospace-everywhere bug; no safe fallback |
| `typeScale` | **required** | fixes hardcoded 32/16; hierarchy is correctness-critical |
| `colorScheme` | **required** | native controls + selection text depend on it |
| `colors.border/divider/selection/overlay` | **required** | complete the role set; recipes reference them |
| `colors.selectionText` | optional | derived by rule (§1.5); override only where contrast fails |
| `effects.pixelate` | **required**, enum | fixes prose/`undefined` token bug |
| `shadow.hard`, `shadow.glow` | **required**, grammar | fixes the two `tokens.css` bugs |

`_template.json` must be updated to carry all required fields with placeholder values (see §6)
so a new mode starts compliant.

---

## 2. CANONICAL COMPONENT-RECIPE VOCABULARY

Every mode must implement **all 15 keys** in `componentRecipes` — one recipe string per key.
This is the "target ~14" list plus `statusbar`, kept because `statusbar` is the app-shell footer
and all 20 modes already carry one. Coverage: app shell (panel, card, nav, dialog, empty,
statusbar), data (table, code, avatar, badge), form (button, input, select, checkbox), feedback
(toast, dialog, badge).

| # | key | definition (1–2 lines) |
|---|---|---|
| 1 | `panel` | Base surface container: mode-tinted background, the mode's edge treatment (border / bevel / offset plane), the mode's radius. The building block every other component sits on. |
| 2 | `card` | A data-bearing surface distinct from `panel`: header/title + optional media or motif + body + footer actions, carrying the mode's elevation signature (hard offset, glow, plane, or soft lift). |
| 3 | `button` | Primary action control with hover / active / focus-visible / disabled states and the mode's press physics (bevel swap, offset collapse, translate, or glow widen). |
| 4 | `input` | Single-line text field: placeholder, focus ring, caret color, and an invalid state that pairs a visual cue with a text message (never color alone). |
| 5 | `select` | Dropdown select: styled trigger + chevron + option list/menu that reuses the mode's `input` well and `nav`/menu row treatment. |
| 6 | `checkbox` | Boolean control covering both checkbox and radio variants, with the mode's indicator glyph (bitmap check, filled dot, neon square) plus label and keyboard-focus states. |
| 7 | `badge` | Small status chip / count / pill: role-colored (success/warning/danger/neutral) with text, using the mode's radius, shape, and type. |
| 8 | `avatar` | User/entity identifier: image (pixel sprite, photo, or mode motif) or initials, on the mode's surface with the mode's edge. |
| 9 | `nav` | Horizontal nav/tabs (and the vertical menu form where the mode uses one): items with hover/selected states and a per-mode active indicator (invert, underline, glow, or left rule). |
| 10 | `table` | Data table: header row, body rows, zebra/border/rule treatment, hover and selected-row states, and the mode's cell padding and type. |
| 11 | `dialog` | Modal: `overlay` scrim + panel with title/body/action buttons, focus trapping, and a mode-appropriate entrance; references `border`, `overlay`, `selection`. |
| 12 | `toast` | Transient feedback notification: role-colored left accent + message + optional action, auto-dismiss with the mode's motion, positioned consistently. |
| 13 | `code` | Inline + block code: `fonts.mono`, mode-specific background/edge (sunken well, phosphor block, etched panel), preserves whitespace. |
| 14 | `empty` | Empty state: mode motif/illustration + one message + one CTA, on a `panel`/`card` surface. |
| 15 | `statusbar` | App-shell footer strip: the mode's status segments, live values, and cursor/signature indicator. Already present in all 20 modes; formalized as required. |

### 2.1 Existing keys — keep or fold

- `menu` → **fold into `nav`**. Keep `menu` in the data as an optional alias only if a mode's
  nav recipe needs a separate vertical form; the required key is `nav`.
- `toggle` (bauhaus, cubism, expressionism, goya, impressionism, tim), `fieldset` (folk-art),
  `plane` (fauvism), `hero` (terminal), `wordmark` (stranger-things), `badge` (folk-art,
  kandinsky) → `badge` becomes required; the rest remain **optional signature recipes** and are
  still emitted verbatim. Do not delete them.

### 2.2 How to add the missing recipes without losing each mode's voice

Do **not** copy a recipe from another mode. For each missing key, derive it from three local
sources in priority order:

1. the mode's **existing** `panel`/`button`/`input`/`statusbar` recipes (the local grammar of
   edge, depth, radius, and type);
2. the mode's **tokens** (`colors`, `fonts`, `spacing`, `radius`, `shadow`, `motion`, `effects`);
3. the mode's **rules / do / dont / prose.components / signature motif** (the voice and subject).

Worked example — arcade `table`: start from `panel` (4px border + stacked dark/neon ring) for
the frame; header row = `button`-like `Press Start 2P` uppercase cells on `primary` `#ffd300`;
body rows = `VT323` 16px on `surface` with `divider` `#adafbc` 1px rules; hover/selected = invert
to `accent` `#ff2d95` (the mode's stated selection color). Nothing is imported from `bios` or a
generic web table.

Non-obvious modes are flagged in §4.3 so the implementer knows where naive application would
clash with the voice.

---

## 3. GENERATOR CHANGE LIST (`scripts/generate.mjs`)

### 3.1 `tokens.css` — new emissions (per mode **and** per resolved mix namespace)

For every mode id `p` (and every resolved mix id, using the resolved object), emit, in addition
to today's colors/fonts/spacing/radius/shadow:

```css
/* colors — the existing 9 plus these 4 */
--adar-<p>-border: #RRGGBB;
--adar-<p>-divider: #RRGGBB;
--adar-<p>-selection: #RRGGBB;
--adar-<p>-overlay: #RRGGBB;
--adar-<p>-selection-text: #RRGGBB;      /* derived per §1.5 */
--adar-<p>-color-scheme: light|dark;

/* fonts */
--adar-<p>-font-body: "F1", "F2", ...;   /* from fonts.body (NEW) */
/* keep --adar-<p>-font-display and --adar-<p>-font-mono */

/* type scale */
--adar-<p>-type-h1-size: 32px;
--adar-<p>-type-h1-line-height: 1.1;
--adar-<p>-type-h2-size: 20px;
--adar-<p>-type-h2-line-height: 1.2;
--adar-<p>-type-body-size: 16px;
--adar-<p>-type-body-line-height: 1.5;
--adar-<p>-type-caption-size: 12px;
--adar-<p>-type-caption-line-height: 1.4;
/* optional, when the tier has them: */
--adar-<p>-type-<tier>-weight: 400|700;
--adar-<p>-type-<tier>-letter-spacing: normal|0.06em|...;
--adar-<p>-type-<tier>-transform: none|uppercase|...;

/* motion (NEW to tokens.css) */
--adar-<p>-motion-easing: <motion.easing>;
--adar-<p>-motion-cursor: <motion.cursor>;
--adar-<p>-duration-instant: <motion.durations[0]>;
--adar-<p>-duration-fast:    <motion.durations[1]>;
--adar-<p>-duration-base:    <motion.durations[2]>;
--adar-<p>-duration-slow:    <motion.durations[3]>;   /* only if present */

/* effects (NEW to tokens.css) — canonical three normalized, plus generic pass-through */
--adar-<p>-effects-scanlines: <background-image value | none>;
--adar-<p>-effects-vignette: <background-image value | none>;
--adar-<p>-effects-pixelate: pixelated|auto;
--adar-<p>-effects-<key>: <value>;   /* for every other effects key, hyphenated */
```

Duration mapping is **positional**: `durations[0]`→instant, `[1]`→fast, `[2]`→base,
`[3]`→slow. Arrays of length 3 (no slow) are valid. A 5th element (`durations[4]`, e.g.
cyberpunk's `1200ms`) emits as `--adar-<p>-duration-slowest`; lengths beyond 5 are invalid (lint).

### 3.2 `tokens.json` — new emissions

- `modes.<id>` gains: `colorScheme`, `fonts.body` (inside `fonts`), `typeScale`, and the four new
  color roles (inside `colors`, plus derived `selectionText`).
- `motion`/`effects` are already present — keep them, but ensure the **normalized** values flow
  through (pixelate enum, cleaned shadow).
- `mixes.<id>.resolved` must become the **full resolved mode object** (not the current reduced
  `{colors, paletteVariants, fonts, radius, spacing, shadow, motion, effects}`). Concretely:
  spread the resolved object so it also carries `colorScheme`, `typeScale`, `rules`, `do`,
  `dont`, `componentRecipes`, `copywriting`, `accessibility`, `signatureElement`. (The `mixToMode`
  helper already produces the full object; only the JSON emission drops fields today — stop
  dropping them.)

### 3.3 `references/<mode>.md` — additions

Add to each mode reference:

- Color table: all 13 roles + derived `selection-text` + `color-scheme`.
- Typography: `Body:` line next to `Display:`/`Mono:`.
- A **Type scale** table (tier / size / line-height / weight / letter-spacing).
- Keep the existing spacing/radius/shadow/motion/effects rows (already there) but render
  `effects.pixelate` as the normalized enum.

### 3.4 `references/designs/<mode>.DESIGN.md` — real type scale + full component set

Frontmatter changes:

- `typography.h1.fontFamily` = `fonts.display[0]`; `fontSize` = `typeScale.h1.fontSize`;
  `fontWeight` = `typeScale.h1.fontWeight ?? 700`.
- `typography.body.fontFamily` = **`fonts.body[0]`** (fixes the mono-everywhere bug);
  `fontSize` = `typeScale.body.fontSize`; `fontWeight` = `typeScale.body.fontWeight ?? 400`;
  `lineHeight` = `typeScale.body.lineHeight`.
- Add `typography.h2` (display face, `typeScale.h2`) and `typography.caption` (body face,
  `typeScale.caption`).
- `colors:` map: emit all 13 roles (border/divider/selection/overlay included). Omit
  `selectionText` if the DESIGN.md linter rejects it; otherwise include it.
- `components:` map: expand from 7 to the 15 canonical entries plus the existing
  `text-muted/accent/danger/warning/success` text tokens. Use only the three keys already proven
  to lint — `backgroundColor`, `textColor`, `rounded` — and reference tokens:

```yaml
components:
  panel:            { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  card:             { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  button-primary:   { backgroundColor: "{colors.primary}",     textColor: "{colors.background}",  rounded: "{rounded.none}" }
  button-secondary: { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  input:            { backgroundColor: "{colors.background}",  textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  select:           { backgroundColor: "{colors.background}",  textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  checkbox:         { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  badge:            { backgroundColor: "{colors.primary}",     textColor: "{colors.background}",  rounded: "{rounded.none}" }
  avatar:           { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  nav:              { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  table:            { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  dialog:           { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  toast:            { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  code:             { backgroundColor: "{colors.background}",  textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  empty:            { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  statusbar:        { backgroundColor: "{colors.surface}",     textColor: "{colors.foreground}",  rounded: "{rounded.none}" }
  text-muted:       { textColor: "{colors.muted}" }
  accent:           { textColor: "{colors.accent}" }
  danger:           { textColor: "{colors.danger}" }
  warning:          { textColor: "{colors.warning}" }
  success:          { textColor: "{colors.success}" }
```

If `npx @google/design.md lint` rejects `typography.h2`/`typography.caption` or the 13-role
color map, keep those in the DESIGN.md **body** prose (Typography / Colors / Components sections)
rather than the frontmatter, and re-lint until clean. Do not drop them from the body.

### 3.5 Mix references — full resolved spec

`references/mixes/<id>.md` must render, after "Resolved tokens":

- Resolved `colorScheme`, `fonts.body`, `typeScale` table, all 13 color roles.
- **Resolved work-style rules** (`rules`).
- **Resolved component recipes** (all 15 keys, values from the resolved mode).
- **Resolved copywriting** (voice, case, prefixes, verb table, avoid).
- **Resolved Do / Don't / Accessibility**.

All of these already exist on the resolved object; the current renderer only prints
colors + type/shape, so the fix is purely additive rendering (plus the §3.2 JSON fix).

### 3.6 Mix override groups (`skill.json`)

- **`typeScale` becomes a new override group**: add `"typeScale": ["typeScale"]` to
  `mixing.groups` (13 → 14 groups). Rationale: type scale is a distinct whole-group concern, like
  spacing or radius, and mixes should be able to swap it independently of fonts.
- **`fonts.body` does NOT need a new group** — it lives inside `fonts`, which is already a
  whole-object override, so `fonts: terminal` carries display + mono + body together.
- **`colorScheme` rides with colors**: change the colors group from `"colors": ["colors"]` to
  `"colors": ["colors", "colorScheme"]`, so overriding a mode's colors also brings its light/dark
  scheme (they must stay consistent).
- The four new color roles are inside `colors` and therefore already covered by the `colors`
  group; no change needed.
- `mixing.groups.componentRecipes` already lists `["componentRecipes"]` — it now resolves 15 keys
  automatically.

### 3.7 Version + description

- `data/skill.json`: `version` `"0.3.0"` → `"0.4.0"`.
- `package.json`: `version` `"0.1.0"` → `"0.4.0"` (align; it is stale today).
- `skill.json` `description`/`whenToUse`: add a clause that the skill now produces a *finished
  app surface* (full component set + type scale + light/dark scheme + motion/effects + gallery
  preview), and mention `gallery.html` as the visual preview entry point. Keep ≤1024 chars for
  `description` (already validated).

---

## 4. PER-MODE FILL TABLE

Values below are the **authoritative** fill for the new required fields. `fonts.body` and the
four new hex roles must be pasted into each mode's JSON; `typeScale` sizes must be pasted with
the line-height defaults in §4.2.

### 4.1 Identity + color roles + body face

| mode | `fonts.body` | scheme | `border` | `divider` | `selection` | `overlay` |
|---|---|---|---|---|---|---|
| bios | `"IBM Plex Mono","Courier New","monospace"` | dark | `#a8a8a8` | `#555555` | `#fcfc54` | `#0000aa` |
| arcade | `"VT323","IBM Plex Mono","monospace"` | dark | `#e9e9ff` | `#adafbc` | `#ff2d95` | `#0b0b1e` |
| terminal | `"VT323","IBM Plex Mono","Courier New","monospace"` | dark | `#33ff66` | `#1e9944` | `#33ff66` | `#0a0e0a` |
| vaporwave | `"Space Mono","IBM Plex Mono","monospace"` | dark | `#f7ecff` | `#9d8bd6` | `#00e5ff` | `#1a1038` |
| win95 | `"W95FA","MS Sans Serif","Tahoma","Verdana","sans-serif"` | light | `#808080` | `#808080` | `#000080` | `#000000` |
| c64 | `"C64 Pro Mono","Pet Me 64","IBM Plex Mono","Courier New","monospace"` | dark | `#a0a0ff` | `#6a6ab8` | `#c6c6ff` | `#0000aa` |
| gameboy | `"VT323","IBM Plex Mono","monospace"` | light | `#0f380f` | `#306230` | `#0f380f` | `#306230` |
| cyberpunk | `"Space Mono","Share Tech Mono","IBM Plex Mono","monospace"` | dark | `#00ffff` | `#6b6b85` | `#ff00ff` | `#0a0a0f` |
| stranger-things | `"Playfair Display","Cormorant Garamond","Georgia","serif"` | dark | `#8a7f76` | `#8a7f76` | `#ff1a1a` | `#050505` |
| atari-sierra | `"Space Mono","IBM Plex Mono","monospace"` | dark | `#ececee` | `#86878f` | `#f5c518` | `#0a0a0d` |
| tim | `"Fredoka","Baloo 2","system-ui","sans-serif"` | light | `#2b2b2b` | `#8a8175` | `#2d7dd2` | `#2b2b2b` |
| nasa80 | `"Space Grotesk","Helvetica Neue","Arial","sans-serif"` | dark | `#2a6f97` | `#7d89a6` | `#ff2038` | `#050510` |
| kandinsky | `"Montserrat","Archivo","Futura","system-ui","sans-serif"` | light | `#111111` | `#6f6a60` | `#1d4ed8` | `#111111` |
| goya | `"Playfair Display","Cormorant","Georgia","serif"` | dark | `#8a7a63` | `#2a2a28` | `#a56a2e` | `#0d0b09` |
| bauhaus | `"Archivo","Helvetica Neue","Arial","system-ui","sans-serif"` | light | `#141414` | `#5f5a50` | `#1b5fa8` | `#141414` |
| cubism | `"Archivo","Arial Narrow","system-ui","sans-serif"` | light | `#2a2a28` | `#8a7f6f` | `#5b6b7a` | `#2a2a28` |
| expressionism | `"Oswald","system-ui","sans-serif"` | dark | `#e8e4dc` | `#9aa3b8` | `#e6c229` | `#14141a` |
| fauvism | `"Fredoka","Montserrat","system-ui","sans-serif"` | light | `#221e1b` | `#6f6a63` | `#d7263d` | `#221e1b` |
| folk-art | `"Fredoka","Baloo 2","system-ui","sans-serif"` | light | `#2b2b2b` | `#8b7c66` | `#e8b32a` | `#2b2b2b` |
| impressionism | `"Cormorant","EB Garamond","Playfair Display","Georgia","serif"` | light | `#8a8478` | `#8a8478` | `#3a3a3a` | `#3a3a3a` |

Selection-text rule (§1.5) applied: dark modes use `colors.background`; light modes use
`colors.foreground` — with explicit `colors.selectionText` overrides where the derived value
would be invisible or fail contrast: `folk-art` `#2b2b2b`, `win95` `#ffffff`, `gameboy`
`#9bbc0f`, `impressionism` `#f7f2e6`, `bauhaus` `#ffffff`, `kandinsky` `#ffffff`, `cubism`
`#ffffff`, `fauvism` `#ffffff`, `goya` `#e8dcc8`, and `tim` `#2b2b2b` (tim's `selection` is
changed to `#ffd23f`, its own selected-row idiom).

### 4.2 Type scale (fontSize) + recipe flags

Line-height defaults: **h1 1.1, h2 1.2, body 1.5, caption 1.4**. Overrides:

- `bios`, `c64`, `terminal`, `gameboy`: body/caption line-height **1.2** (fixed screen rows).
- `win95`: body/caption line-height **1.4** (system metric).
- `goya`, `impressionism`, `stranger-things`: body line-height **1.6** (generous serif).
- All other modes use the defaults.

| mode | h1 | h2 | body | caption | recipe flag |
|---|---|---|---|---|---|
| bios | 16px | 16px | 16px | 16px | **Text-mode frames**: card/table/dialog/code must be ASCII/box-drawing character frames, not CSS shadow panels. |
| arcade | 24px | 16px | 16px | 14px | **Sprite UI**: avatar = pixel tile; select/checkbox = HUD toggles; table/code keep the 4px stacked-ring panel grammar. |
| terminal | 20px | 16px | 16px | 14px | **Line-based**: card/table/dialog use ASCII borders + a `$`/prompt idiom; select is a menu row, not a popover pill. |
| vaporwave | 32px | 20px | 15px | 12px | Straightforward: dialog/card reuse panel + optional sunset footer strip; chrome stays on the wordmark only. |
| win95 | 18px | 14px | 11px | 11px | **System metrics**: select/checkbox/dialog/table must use 21px/23px controls, bitmap glyphs, square corners, no scrim blur. |
| c64 | 16px | 16px | 16px | 16px | **PETSCII frame**: like bios — character-cell frames; table/dialog drawn from the blue screen + border frame. |
| gameboy | 20px | 16px | 16px | 14px | **Monochrome**: badge/selection/table states must map to the 4 olive shades only (no extra colors). |
| cyberpunk | 28px | 18px | 16px | 12px | Straightforward: HUD frames, cyan rules, magenta selection; dialog/toast carry the glitch/neon idiom. |
| stranger-things | 48px | 28px | 17px | 12px | Straightforward: serif on near-black + red neon glow + grain; wordmark is the signature. |
| atari-sierra | 28px | 18px | 16px | 12px | Straightforward: slice-stack divider motif; table/dialog headers use the horizontal-slice treatment. |
| tim | 32px | 22px | 17px | 13px | Straightforward: contraption motifs; dialog = a machine step, toast = a dropped part; keep crayon+ink. |
| nasa80 | 32px | 20px | 16px | 12px | Straightforward: blueprint data-lines + worm red; table/dialog use blueprint grid frames. |
| kandinsky | 44px | 26px | 16px | 12px | Straightforward: circle/arc/line motifs in empty/avatar/dialog; geometric grid alignment. |
| goya | 56px | 32px | 19px | 13px | **Chiaroscuro**: table/code/dialog use etched 1px crosshatch and bone-on-charcoal; no bright fills. |
| bauhaus | 48px | 28px | 16px | 12px | Straightforward: strict 24px grid; circle/square/triangle motifs; red/blue/yellow roles only. |
| cubism | 40px | 24px | 16px | 12px | **Fragmented planes**: card/dialog/table get the split-plane `shadow.plane` background, not flat fills. |
| expressionism | 48px | 28px | 16px | 12px | **Distortion**: table/dialog/card edges may be rough/wavy; keep emotional color + brushwork. |
| fauvism | 44px | 26px | 17px | 13px | **Offset plane elevation**: card/dialog must draw a translated color plane (::before), never a box-shadow. |
| folk-art | 40px | 24px | 17px | 13px | Straightforward: hand-painted decorative border motif on card/dialog/table frames. |
| impressionism | 44px | 26px | 17px | 13px | **No hard shadow**: card/dialog/table use soft/dappled edges + `contact` shadow; selection is a quiet pastel/ink wash. |

### 4.3 Non-obvious recipe treatments (flags, condensed)

The implementer must **not** apply the generic web form of these controls in the following modes;
each gets its period/art-voice treatment as stated in §4.2's flag column:

- **Text/frame modes** — `bios`, `c64`, `terminal`: card/table/dialog/code are character-cell or
  ASCII frames.
- **Bitmap/sprite modes** — `arcade`, `gameboy`, `win95`: use sprite tiles, monochrome shades, or
  system-metric controls respectively.
- **Non-shadow elevation** — `fauvism` (offset color plane), `cubism` (split plane),
  `impressionism` (soft/dapple), `goya` (etch), `expressionism` (distortion).
- The remaining modes (`vaporwave`, `cyberpunk`, `nasa80`, `stranger-things`, `atari-sierra`,
  `tim`, `kandinsky`, `folk-art`, `bauhaus`) follow their existing `panel`/`button`/`input` idiom;
  no special flag beyond what §4.2 notes.

---

## 5. GALLERY SPEC

Add `scripts/gallery.mjs` (Node, deterministic, reads `data/`) that generates
`skills/adar-design/gallery.html`. Add `"gallery": "node scripts/gallery.mjs"` and
`"build": "node scripts/generate.mjs && node scripts/gallery.mjs"` to `package.json` scripts.
The gallery is a **generated** artifact (never hand-edited), consistent with the rest of the
tree.

### 5.1 What it renders

One fixed, shared component set, rendered **identically across all 20 modes + 1 mix**, so a
vision agent can screenshot the same layout in any mode and judge it:

1. **App shell** — top `nav` (logo wordmark + 3 tabs), footer `statusbar` (3 segments + cursor).
2. **Hero/title band** — `h1` + a short lead, on the mode's `panel`/`background`.
3. **Card grid** — 3 `card`s (title + body + a `button`).
4. **Data table** — 4 columns × 4 rows with a selected row.
5. **Form** — `input`, `select`, `checkbox`, `radio`, and primary/secondary `button`s.
6. **Feedback** — 3 `badge`s (success/warning/danger), one static `toast`, one `dialog` rendered
   open (scrim via `overlay`), and one `empty` state.
7. **Data-ish** — one `code` block and a row of 3 `avatar`s.
8. **Signature slot** — the mode's `signatureElement`: render the concrete `componentRecipes`
   recipe when it exists (`hero`, `wordmark`, `plane`), otherwise a labeled panel whose caption is
   the `signatureElement` string, styled with the mode's primary/accent so the judge sees the
   declared signature.

Every component uses **only** generic semantic vars (next section) so one HTML template renders
every mode via the mapping.

### 5.2 "Apply" scaffold — generic → namespaced var mapping

Emit a `<style>` block that, for each mode/mix id `p`, maps generic vars to the namespaced
`--adar-<p>-*` vars:

```css
body[data-mode="arcade"] {
  --bg: var(--adar-arcade-background);
  --surface: var(--adar-arcade-surface);
  --fg: var(--adar-arcade-foreground);
  --muted: var(--adar-arcade-muted);
  --primary: var(--adar-arcade-primary);
  --accent: var(--adar-arcade-accent);
  --danger: var(--adar-arcade-danger);
  --warning: var(--adar-arcade-warning);
  --success: var(--adar-arcade-success);
  --border: var(--adar-arcade-border);
  --divider: var(--adar-arcade-divider);
  --selection: var(--adar-arcade-selection);
  --selection-text: var(--adar-arcade-selection-text);
  --overlay: var(--adar-arcade-overlay);
  --font-display: var(--adar-arcade-font-display);
  --font-body: var(--adar-arcade-font-body);
  --font-mono: var(--adar-arcade-font-mono);
  --h1: var(--adar-arcade-type-h1-size);
  --h2: var(--adar-arcade-type-h2-size);
  --body: var(--adar-arcade-type-body-size);
  --caption: var(--adar-arcade-type-caption-size);
  --radius: var(--adar-arcade-radius);
  --shadow-hard: var(--adar-arcade-shadow-hard);
  --shadow-glow: var(--adar-arcade-shadow-glow);
  --ease: var(--adar-arcade-motion-easing);
  --dur-instant: var(--adar-arcade-duration-instant);
  --dur-fast: var(--adar-arcade-duration-fast);
  --dur-base: var(--adar-arcade-duration-base);
  --dur-slow: var(--adar-arcade-duration-slow);
  color-scheme: var(--adar-arcade-color-scheme);
}
/* …repeat for all 20 modes + neon-console… */
```

Generic-variable contract for the shared component CSS: `--bg`, `--surface`, `--fg`, `--muted`,
`--primary`, `--accent`, `--danger`, `--warning`, `--success`, `--border`, `--divider`,
`--selection`, `--selection-text`, `--overlay`, `--font-display`, `--font-body`, `--font-mono`,
`--h1/--h2/--body/--caption`, `--radius`, `--shadow-hard`, `--shadow-glow`, `--ease`, and the
duration vars. Spacing keeps using the mode's `--adar-<p>-space-*` directly (or a `--space-*`
mapping is added identically).

### 5.3 Mode switching

- The page loads with `?mode=<id>` (default `arcade`); a top `<select>` lists all modes + the mix
  and sets `document.body.dataset.mode` + the URL (a 5-line inline script, no framework).
- Only the selected mode's `<section class="mode" data-mode="<id>">` is shown:
  `body[data-mode="X"] .mode:not([data-mode="X"]) { display: none; }`. All sections are in the
  DOM so screenshots of any mode work without JS re-render (JS only toggles `data-mode`).
- `<title>` and a visible caption state the current mode id + name, so a screenshot is
  self-describing.

### 5.4 Effect overlays

Inside each mode section, add two fixed full-bleed layers (plus the signature layer):

```html
<div class="fx fx-scanlines" aria-hidden="true"></div>
<div class="fx fx-vignette" aria-hidden="true"></div>
```

```css
.fx { position: absolute; inset: 0; pointer-events: none; z-index: 60; }
.fx-scanlines { background-image: var(--adar-<p>-effects-scanlines); opacity: .6; }
.fx-vignette  { background-image: var(--adar-<p>-effects-vignette);  opacity: 1; }
```

- `pointer-events: none` is mandatory (never block interaction).
- `--adar-<p>-effects-*` hold the actual `background-image` gradients from the mode data
  (scanlines/vignette), so no re-derivation is needed.
- Apply `image-rendering: var(--adar-<p>-effects-pixelate)` to all `<img>` and avatar/sprite
  elements.
- Any other effects key (grain, dapple, starfield, …) is emitted as an additional
  `.fx-<key>` layer with `background-image: var(--adar-<p>-effects-<key>)`, `pointer-events:none`.

### 5.5 Motion + reduced motion

- Use `transition: all var(--dur-fast) var(--ease)` and `animation` for the cursor/signature
  element from `--motion-cursor`.
- Wrap all motion behind:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

- The gallery also demonstrates one **signature keyframe** per mode where the data implies one
  (e.g. terminal blinking cursor, vaporwave pulsing ON AIR dot, tim overshoot). If a mode has no
  cursor/motion, render the signature element statically — do not invent animation.

---

## 6. VALIDATION (updated audit/lint)

Add `scripts/lint.mjs` and `"lint": "node scripts/lint.mjs"`. `generate.mjs` must call the same
validation and refuse to emit on failure (keep the existing `VALIDATION FAILED` exit path).

Assertions (fail with the mode id + key in the message):

1. **Required schema** — every mode has: `fonts.body` (array, ≥1 non-empty string), `typeScale`
   (h1/h2/body/caption each with `fontSize` matching `/^\d+(\.\d+)?px$/` and numeric
   `lineHeight ≥ 1.0`), `colorScheme ∈ {"light","dark"}`, and
   `colors.border/divider/selection/overlay` all matching `/^#([0-9a-fA-F]{6})$/`.
2. **13 color roles valid hex** — extend the current 5-role check to all 13
   (`background, surface, foreground, muted, primary, accent, danger, warning, success, border,
   divider, selection, overlay`).
3. **`effects.pixelate` ∈ {"pixelated","auto"}** — no `"none"`, `"undefined"`, prose, or missing
   key.
4. **`effects.scanlines` and `effects.vignette`** — present; each is `"none"` or a valid CSS image
   value (starts with `linear-gradient`/`radial-gradient`/`repeating-`/`url(`/`conic-gradient`).
5. **`shadow.hard` and `shadow.glow`** — each is `"none"` or matches the §1.7 box-shadow grammar;
   reject substrings `undefined`, `—`, `never a`, `placeholder`, `draw the`, `instead`.
6. **15 canonical recipe keys** — every mode's `componentRecipes` contains exactly the keys
   `panel, card, button, input, select, checkbox, badge, avatar, nav, table, dialog, toast, code,
   empty, statusbar` (extra signature keys allowed). Each value is a non-empty string and is not a
   placeholder (`recipe`, `Array of`, `One-sentence`, `...`).
7. **No token prose** — no value under `colors`, `fonts`, `radius`, `spacing`, `shadow`, `motion`,
   `effects`, or `typeScale` may contain `undefined`, an em-dash `—`, or the words
   `placeholder`/`Array of`/`One-sentence`. Prose is allowed only in `rules`, `do`, `dont`,
   `accessibility`, `componentRecipes`, `copywriting`, `prose`, `summary`, `whenToUse`,
   `signatureElement`, `attribution`.
8. **Type-scale ordering** — `h1 ≥ h2 ≥ body ≥ caption` (numeric), `body ≥ 11px` (flat scales legal in fixed-cell text modes; see §1.2).
9. **Mix lint** — base resolves transitively; override groups are known (14 groups after §3.6);
   resolved object has all 15 recipe keys, `typeScale`, `colorScheme`, `fonts.body`, and the 13
   color roles.
10. **Existing invariants preserved** — id lowercase-hyphen, id == filename, mix id/overrides
    validation, `skill.description ≤ 1024 chars`.

`_template.json` must be updated with placeholder values for every required field so a freshly
copied mode passes shape checks (values may be dummy but must be type-correct, e.g.
`"colorScheme": "dark"`, `"effects.pixelate": "auto"`, a full 15-key `componentRecipes` with
`"recipe"` placeholder strings — the lint's placeholder check only runs against real modes, not
the template, so add a `_template.json` skip in lint.mjs).

---

## 7. Definition of done

A separate implementer can apply this spec with zero re-derivation when:

- All 20 `data/modes/*.json` + `_template.json` carry §1's required fields using §4's values.
- `data/skill.json` has 14 mixing groups, `colorScheme` in the colors group, and version 0.4.0.
- `scripts/generate.mjs` emits §3.1–3.5 (body font, type scale, 13 colors, color-scheme,
  motion+effects, fixed DESIGN.md, fixed mix references) and runs §6 validation.
- `scripts/lint.mjs` passes on all 20 modes + 1 mix.
- `scripts/gallery.mjs` emits `skills/adar-design/gallery.html` per §5.
- `node scripts/generate.mjs && node scripts/gallery.mjs` is deterministic (same output on
  repeated runs) and `npx @google/design.md lint skills/adar-design/references/designs/*.DESIGN.md`
  is clean.
