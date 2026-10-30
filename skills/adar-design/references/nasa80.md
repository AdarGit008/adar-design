# NASA 80s / Worm / Space — reference

Deep-space interface: starfield black, a red worm wordmark, thin geometric type, and blueprint grid lines borrowed from mission documentation.

**When to use:** When the user asks for 80s NASA, the red worm logo, space or starfield aesthetics, aerospace mission-control panels, or a technical blueprint-grid look.

**Signature element:** The red worm wordmark set over a starlight starfield on a 1px blueprint grid — red mark, white dust, blue technical lines, and a lot of black between them

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#050510` |
| `surface` | `#0a1128` |
| `foreground` | `#e6e8f0` |
| `muted` | `#7d89a6` |
| `primary` | `#ff2038` |
| `accent` | `#2a6f97` |
| `danger` | `#ff2038` |
| `warning` | `#e8b23a` |
| `success` | `#4ec7a4` |

### Variant: `wormsign`

| Key | Value |
|---|---|
| `space` | `#050510` |
| `navy` | `#0a1128` |
| `worm` | `#ff2038` |
| `wormDeep` | `#c11428` |
| `starlight` | `#e6e8f0` |
| `blueprint` | `#2a6f97` |
| `grid` | `#123a52` |
| `muted` | `#7d89a6` |
| `ink` | `#02030a` |

### Variant: `blueprint`

| Key | Value |
|---|---|
| `paper` | `#071228` |
| `line` | `#2a6f97` |
| `lineFaint` | `#123a52` |
| `annotation` | `#7d89a6` |
| `callout` | `#e6e8f0` |
| `stamp` | `#ff2038` |
| `trajectory` | `#4ec7a4` |
| `warning` | `#e8b23a` |

### Variant: `missionControl`

| Key | Value |
|---|---|
| `bg` | `#050510` |
| `panel` | `#0a1128` |
| `label` | `#7d89a6` |
| `value` | `#e6e8f0` |
| `live` | `#4ec7a4` |
| `alert` | `#ff2038` |
| `vector` | `#2a6f97` |
| `grid` | `#123a52` |
| `shadow` | `#02030a` |


### Typography

- Display: "Space Grotesk", "Orbitron", "Helvetica Neue", "Arial", "sans-serif"
- Mono: "IBM Plex Mono", "Courier New", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=24px` `xl=32px` `xxl=64px` |
| shadow.hard | `8px 8px 0 #02030a` |
| shadow.glow | `0 0 12px rgba(255, 32, 56, 0.45)` |
| motion.easing | `cubic-bezier(0.2, 0, 0.2, 1)` |
| motion.cursor | `steps(2, jump-none) 1.2s infinite` |
| motion.durations | `0ms` `160ms` `320ms` `2400ms` |
| effects.scanlines | `undefined` |
| effects.vignette | `radial-gradient(ellipse at 50% 0%, rgba(10, 17, 40, 0.9) 0%, rgba(5, 5, 16, 0.98) 70%)` |
| effects.pixelate | `undefined` |

## Work-style rules

- Reserve #ff2038 for exactly one thing per screen: the worm wordmark, the primary action, or the active state — spreading the red across borders and labels turns the page into a warning screen.
- Every surface sits on the dark end (#050510 background, #0a1128 panel); never invert to a light page, because the starfield, blueprint lines, and starlight type all depend on the void behind them.
- Set display type thin and wide: Space Grotesk or Orbitron at 300–400 weight, letter-spacing 0.08em–0.28em, UPPERCASE for the wordmark and section labels, and keep headings to a few words.
- Put all data, units, coordinates, timestamps, and table cells in IBM Plex Mono at 12–14px with tabular numerals; the mono is the flight-data voice and must never fight the display face.
- Draw structure with 1px blueprint lines (#2a6f97 at 18–30% alpha) on a 24px grid, never with heavy borders — the grid is annotation, not chrome.
- Lift elements with one hard offset (8px 8px 0 #02030a) or a thin 1px #2a6f97 rule; no soft blurred drop shadows, and the only bloom in the system is the red glow on the wordmark and the 6px starlight sparkle on dots.
- Motion is slow and orbital: 160–320ms ease-outs for state, 2400ms linear for star drift and scan sweep, and instant 0ms for press — nothing bounces, nothing pops.
- Keep 64px or more of empty space around the wordmark hero; the worm only reads as NASA when a large calm field surrounds it.

## Component recipes

- **panel:** background: #0a1128; border: 1px solid rgba(42, 111, 151, 0.35); border-radius: 0; padding: 24px 32px; color: #e6e8f0; box-shadow: 8px 8px 0 #02030a; — a 1px #2a6f97 top rule and a mono 11px uppercase caption (#7d89a6, letter-spacing 0.18em) sit in the top-left like a blueprint callout; optional CSS blueprint grid overlay (effects.blueprintGrid at background-size 24px 24px) at 0.35 opacity, pointer-events: none.
- **button:** font: 500 12px/1 'IBM Plex Mono'; text-transform: uppercase; letter-spacing: 0.16em; background: #ff2038; color: #050510; border: 0; border-radius: 0; padding: 14px 24px; box-shadow: 0 0 0 1px #ff2038, 8px 8px 0 #02030a; transition: transform 160ms cubic-bezier(0.2,0,0.2,1), box-shadow 160ms; :hover { transform: translate(-2px, -2px); box-shadow: 0 0 0 1px #ff2038, 0 0 12px rgba(255,32,56,0.45), 10px 10px 0 #02030a; } :active { transform: translate(6px, 6px); box-shadow: 0 0 0 1px #ff2038, 0 0 0 #02030a; } :focus-visible { outline: 2px solid #2a6f97; outline-offset: 4px; } — secondary variant: transparent background, 1px #2a6f97 border, #e6e8f0 mono label, hover border #e6e8f0.
- **input:** background: #050510; color: #e6e8f0; font: 13px/1.5 'IBM Plex Mono'; letter-spacing: 0.04em; border: 1px solid #2a6f97; border-radius: 0; padding: 12px 16px; caret-color: #ff2038; box-shadow: inset 0 -1px 0 rgba(42,111,151,0.5); :placeholder { color: #7d89a6; text-transform: uppercase; letter-spacing: 0.18em; font-size: 11px; } :focus { border-color: #e6e8f0; box-shadow: inset 0 -1px 0 #ff2038, 0 0 0 1px rgba(230,232,240,0.25); outline: none; } — label above in 11px mono uppercase #7d89a6 at 0.18em; invalid state sets border-color #ff2038 and appends a mono 11px 'ERR ' prefixed message below, always with the word, not color alone.
- **statusbar:** height: 40px; display: flex; align-items: center; gap: 32px; padding: 0 24px; background: #0a1128; border-top: 1px solid rgba(42,111,151,0.35); font: 11px/1 'IBM Plex Mono'; text-transform: uppercase; letter-spacing: 0.18em; color: #7d89a6; values in #e6e8f0 with tabular numerals; segments split by border-left: 1px solid rgba(42,111,151,0.35); live telemetry in #4ec7a4, alert in #ff2038 plus the word 'ALERT'; a 6px #e6e8f0 star dot leads the strip and pulses at steps(2, jump-none) 1.2s infinite.
- **menu:** horizontal or vertical list on #050510, no radius, no bullets: item { display: block; font: 12px/1 'IBM Plex Mono'; text-transform: uppercase; letter-spacing: 0.16em; padding: 12px 20px; color: #7d89a6; border-bottom: 1px solid rgba(42,111,151,0.2); } active item in #e6e8f0 with a 2px #ff2038 left rule and a mono index ('01', '02') in #2a6f97; hover lifts the label to #e6e8f0 without moving the layout; group separators are 1px dashed rgba(42,111,151,0.35) with a 11px uppercase mono caption above.

## Copywriting

- Voice: Mission-documentation voice: precise, procedural, and calm under pressure. Label things the way a flight plan does — noun, unit, nominal state — in short declaratives with no marketing adjectives. Second person only for instructions, and never raise the volume with punctuation.
- Case: headers=UPPERCASE, commands=UPPERCASE for buttons, sentence case for procedural instructions, body=sentence case; labels and units UPPERCASE at 0.18em tracking
- Prefixes: [SYS] [TEL] [NAV] [SEQ] [ALERT] [LINK]
- Verb table: start→INITIATE SEQUENCE; stop→ABORT; save→RECORD; load→ACQUIRE; delete→PURGE
- Avoid: rocket emoji, planet emoji, and any emoji, exclamation marks and dramatic phrasing ('LAUNCH!', 'Blast off'), corporate filler ('solutions', 'leverage', 'seamless', 'empower'), sci-fi cliché ('to infinity', 'warp speed', 'beam me up'), mixed-case headers or sentence-case section labels, floating-point numbers without units (write 'ALT 412 km', not '412'), apologetic or chatty error copy

## Do

- Anchor every screen with the starfield black #050510 and one constellation of starlight dots; keep the field large and mostly empty so the void reads as intentional.
- Spend the worm red #ff2038 exactly once per view — the wordmark, the primary button, or the active row — and let mono labels carry everything else.
- Draw the technical grid at 1px and 18–30% alpha on a 24px module, and let panels sit on it rather than inside heavy borders.
- Set headings in Space Grotesk 300–400 uppercase at 0.12em–0.28em tracking, sized 32px and up, with generous 64px breathing room above and below the hero.
- Give every value a unit and set it in IBM Plex Mono with tabular numerals so telemetry columns align without manual nudging.
- Use the blueprint callout caption (11px mono uppercase #7d89a6) on panels to name the subsystem, sequence, or timestamp — it is what makes the surface read as mission documentation.

## Don't

- Don't flood the page with red: no red body text, no red borders on every card, no red-to-black gradients — the worm red is a mark, not a theme.
- Don't put anything on white or light gray; a light mode destroys the starfield, the grid, and the starlight type simultaneously.
- Don't round corners: no pills, no 8px radius cards, no circular avatars — this system is square and technical.
- Don't use Orbitron or Space Grotesk at 700+ weight or for body copy; thick or long-form display type collapses into sci-fi pastiche.
- Don't blur shadows, add glassmorphism, or apply backdrop-filter — depth is one hard offset or one hairline rule.
- Don't animate fast: no bounces, no spring physics, no sub-100ms fades, and no looping spin on anything other than a slow 2400ms star drift.
- Don't reach for sci-fi set dressing — no UFOs, no swooshing comets, no neon cyan glow, no fake alien HUD glyphs.

## Accessibility

- #e6e8f0 on #050510 clears 15:1 and #7d89a6 on #050510 clears 6:1; but #7d89a6 on #0a1128 sits near 5:1 and #2a6f97 fails for text entirely — use blueprint blue for lines, never for body copy.
- #ff2038 on #050510 clears 4.5:1 only at 18px bold or larger; pair every red with the word or an icon (ALERT, ERR, REQUIRED) so state is never encoded by color alone.
- Keep monospace data at 12px minimum with 1.5 line-height and tabular numerals, and raise label tracking only to 0.18em — beyond that, thin uppercase mono fragments at small sizes.
- Honor prefers-reduced-motion: stop star drift, scan sweeps, and the pulsing status dot, and make red glow states static while keeping the 2px #2a6f97 focus outline at 4px offset visible.

## Attribution / sources

- NASA Graphics Standards Manual (1975, worm logotype by Richard Danne & Bruce Blackburn, for the 1976 NASA logotype) — https://www.nasa.gov/nasa-brand-center/ (public domain / US Government work (logo usage per NASA media guidelines))
- Space Grotesk (Florian Karsten), derived from Space Mono — https://github.com/floriankarsten/space-grotesk (OFL 1.1)
- Orbitron (Matt McInerney) — https://github.com/theleagueof/orbitron (OFL 1.1)
- IBM Plex Mono (IBM / Bold Monday) — https://github.com/IBM/plex (OFL 1.1)
- NovusGFX retro-design-system — https://github.com/NovusGFX/retro-design-system (MIT)
