# Cyberpunk / Neon Noir — reference

Neon-noir cyberpunk: a near-black #0a0a0f field under hot magenta and cyan glow, 1px HUD chrome with chamfered corners, glitch/RGB-split states, scanlines, film grain, and terminal fragments.

**When to use:** When the user asks for cyberpunk, neon-noir, glitch, dystopian sci-fi HUD, dark neon dashboard, or a futuristic/terminal-fragment aesthetic.

**Signature element:** The glitchy neon HUD: chamfered near-black panels outlined in 1px magenta or cyan with a 12px outer glow, over a grain-and-scanline black field, with an 80ms–160ms RGB-split flash on hover and focus

## Design tokens

### Colors (all roles)

| Role | Value |
|---|---|
| `background` | `#0a0a0f` |
| `surface` | `#14141f` |
| `foreground` | `#e8e8f0` |
| `muted` | `#6b6b85` |
| `primary` | `#ff00ff` |
| `accent` | `#00ffff` |
| `danger` | `#ff0055` |
| `warning` | `#ffe600` |
| `success` | `#00ff9c` |
| `border` | `#00ffff` |
| `divider` | `#6b6b85` |
| `selection` | `#ff00ff` |
| `overlay` | `#0a0a0f` |
| `selection-text` | `#0a0a0f` |
| `color-scheme` | `dark` |

### Variant: `neonNoir`

| Key | Value |
|---|---|
| `bg` | `#0a0a0f` |
| `surface` | `#14141f` |
| `line` | `#2a2a3d` |
| `ink` | `#e8e8f0` |
| `dim` | `#6b6b85` |
| `magenta` | `#ff00ff` |
| `cyan` | `#00ffff` |
| `acid` | `#00ff9c` |
| `yellow` | `#ffe600` |
| `red` | `#ff0055` |
| `void` | `#000000` |

### Variant: `glitchRgb`

| Key | Value |
|---|---|
| `base` | `#0a0a0f` |
| `magenta` | `#ff00ff` |
| `cyan` | `#00ffff` |
| `red` | `#ff0055` |
| `green` | `#00ff9c` |
| `white` | `#ffffff` |
| `line` | `#2a2a3d` |

### Variant: `acidTerminal`

| Key | Value |
|---|---|
| `bg` | `#050508` |
| `fg` | `#00ff9c` |
| `prompt` | `#00ffff` |
| `dim` | `#0a5c3d` |
| `warn` | `#ffe600` |
| `err` | `#ff0055` |
| `cursor` | `#ff00ff` |

### Variant: `hudChrome`

| Key | Value |
|---|---|
| `bezel` | `#0a0a0f` |
| `bar` | `#14141f` |
| `rule` | `#2a2a3d` |
| `label` | `#6b6b85` |
| `value` | `#00ffff` |
| `live` | `#00ff9c` |
| `alert` | `#ff0055` |
| `active` | `#ff00ff` |


### Typography

- Display: "Orbitron", "Rajdhani", "Chakra Petch", "sans-serif"
- Body: "Space Mono", "Share Tech Mono", "IBM Plex Mono", "monospace"
- Mono: "Space Mono", "Share Tech Mono", "IBM Plex Mono", "Courier New", "monospace"

### Type scale

| Tier | Size | Line-height | Notes |
|---|---|---|---|
| h1 | `28px` | 1.1 | — |
| h2 | `18px` | 1.2 | — |
| body | `16px` | 1.5 | — |
| caption | `12px` | 1.4 | — |

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `2px` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=32px` `xl=64px` |
| shadow.hard | `4px 4px 0 #000000` |
| shadow.glow | `0 0 12px rgba(255,0,255,0.55), 0 0 24px rgba(0,255,255,0.30)` |
| motion.easing | `cubic-bezier(0.16, 1, 0.3, 1)` |
| motion.cursor | `steps(2, jump-none) 1s infinite` |
| motion.durations | `0ms` `80ms` `160ms` `400ms` `1200ms` |
| effects.scanlines | `repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,255,255,0.06) 2px 3px)` |
| effects.vignette | `radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(5,5,10,0.88) 100%)` |
| effects.pixelate | `pixelated` |

## Work-style rules

- Black is the screen: keep ~90% of the viewport between #000000 and #1a1a26, with surfaces no lighter than #14141f; neon only reads as neon against near-black, and any mid-gray panel collapses the whole aesthetic into 'dark mode with pink accents'.
- One neon per role, two per component maximum: magenta #ff00ff for primary action and active state, cyan #00ffff for focus and live telemetry, acid #00ff9c for success and data flow, yellow #ffe600 for warning and scan labels, red #ff0055 for danger only.
- Glow is the elevation system: 0 0 12px for resting, 0 0 24px–32px for hover/focus, always in the element's own hue. Glow belongs to controls, HUD values, and the hero — never to body copy, and never as a substitute for a border.
- Every lit component keeps a 1px or 2px solid neon border in the same hue as its glow, so the shape survives on projectors, forced-colors mode, and reduced-transparency settings where the glow is flattened.
- Chromatic aberration is a state, not a default: RGB-split text-shadow only on hero titles, hover, and glitch keyframes — 1px–3px offsets on #ff0055/#00ffff/#00ff9c channels, alternating every 80ms–160ms for at most two cycles, then settling to a clean glyph.
- Type is split by function: Orbitron or Rajdhani for display at 24px+ uppercase with 0.08em–0.16em tracking, Space Mono for all body copy and values, Share Tech Mono for HUD labels, numbers, and terminal fragments at 11px–13px. Never set a paragraph in a display face, and never use more than two weights.
- Grain and scanlines are fixed full-viewport overlays at pointer-events: none — scanline pitch 3px (2px transparent, 1px rgba(0,255,255,0.06)), film grain 4%–8% opacity — layered above content and below modals, never above text at more than 8%.
- Chrome is mandatory: every screen carries a HUD header (mode label, id, timestamp, pulsing status dot) and a telemetry footer (coordinates, load, connection, build). A bare content area on black is not cyberpunk, it is just a dark page.

## Component recipes

- **panel:** wrapper { filter: drop-shadow(0 0 12px rgba(255,0,255,0.45)); } panel { background: #14141f; border: 1px solid #ff00ff; border-radius: 2px; padding: 16px 24px; color: #e8e8f0; box-shadow: inset 0 1px 0 rgba(0,255,255,0.14), 4px 4px 0 #000000; clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); } — the 12px chamfer on two opposite corners is the HUD tell; the glow lives on the wrapper because clip-path clips box-shadow. Header bar is 32px tall, 1px #2a2a3d bottom rule, label 11px 'Share Tech Mono' uppercase #00ffff at 0.14em tracking plus a 6px #00ff9c dot; the scanline overlay is an absolutely positioned child at 100% cover. Below 640px drop the clip-path and the wrapper glow, keep the 1px border and the offset black shadow.
- **card:** A chamfered HUD card: background:#14141f;border:1px solid #ff00ff;border-radius:2px;padding:16px 24px;color:#e8e8f0;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px)); box-shadow:inset 0 1px 0 rgba(0,255,255,0.14),4px 4px 0 #000000; wrapper drop-shadow 0 0 12px rgba(255,0,255,0.45); header = 11px Share Tech Mono uppercase #00ffff with a 6px #00ff9c dot, body = Space Mono 14px/1.5, footer actions are outlined neon buttons.
- **button:** font: 700 13px/1 'Orbitron'; text-transform: uppercase; letter-spacing: 0.12em; background: #ff00ff; color: #0a0a0f; border: 1px solid #ff00ff; border-radius: 2px; padding: 12px 20px; box-shadow: 4px 4px 0 #000000, 0 0 16px rgba(255,0,255,0.55); transition: box-shadow 80ms linear, transform 80ms linear; :hover { box-shadow: 4px 4px 0 #000000, 0 0 28px rgba(255,0,255,0.85); } :active { transform: translate(4px, 4px); box-shadow: 0 0 0 #000000, 0 0 10px rgba(255,0,255,0.8); } :focus-visible { outline: 2px solid #00ffff; outline-offset: 2px; } — secondary variant: transparent background, #00ffff text and 1px cyan border with cyan glow; ghost variant: no fill, #6b6b85 border that turns #ff00ff on hover. The label may run one short glitch cycle on hover, never on every frame.
- **input:** background: #0a0a0f; color: #e8e8f0; font: 14px/1.5 'Space Mono'; border: 1px solid #2a2a3d; border-left: 2px solid #00ffff; border-radius: 2px; padding: 10px 14px; caret-color: #ff00ff; :placeholder { color: #6b6b85; font-family: 'Share Tech Mono'; text-transform: uppercase; letter-spacing: 0.08em; } :focus { border-color: #00ffff; box-shadow: 0 0 12px rgba(0,255,255,0.40), inset 0 0 12px rgba(0,255,255,0.08); outline: none; } — invalid state swaps the left rail and border to #ff0055, keeps the entered value visible, and appends a 'ERR:' prefix plus a sentence-case message in Share Tech Mono, so color is never the only signal; disabled drops to #2a2a3d border and #6b6b85 text with no glow.
- **select:** A HUD dropdown: trigger is a Space Mono 14px field with a 2px cyan left rail and a blinking '▮' caret in #ff00ff; the open list is a 2px-radius panel of Rajdhani rows with two-digit indices; the active row sets border-left:2px solid #ff00ff, background linear-gradient(90deg,rgba(255,0,255,0.16),transparent 70%), and #ff00ff text; hover shifts to #00ffff with a cyan glow.
- **checkbox:** A 20px square HUD toggle: background:#0a0a0f;border:1px solid #2a2a3d;border-left:2px solid #00ffff;border-radius:2px; checked = 10px #ff00ff core with a 0 0 8px magenta glow; radio = 8px #00ffff dot; label in Space Mono 14px #e8e8f0 with 'ACTIVE'/'IDLE' text; focus-visible keeps a 2px cyan outline.
- **badge:** A chamfered status chip: display:inline-flex;gap:8px;padding:4px 10px;background:#0a0a0f;border:1px solid;border-radius:2px;font:11px/1 'Share Tech Mono';text-transform:uppercase;letter-spacing:0.10em; role = border+text (#00ff9c success, #ffe600 warning, #ff0055 danger, #00ffff neutral) with the word spelled out; clip-path chamfers one corner and a 0 0 12px glow in the role hue.
- **avatar:** A 36px square ID plate: background:#0a0a0f;border:1px solid #2a2a3d;border-radius:2px;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px)); initials in Share Tech Mono 12px #00ffff; image avatars get a duotone magenta/cyan pass and image-rendering:pixelated.
- **nav:** Horizontal HUD tabs: Rajdhani 12px uppercase #e8e8f0, letter-spacing 0.10em, padding 10px 16px 10px 24px, border-left 2px transparent; hover = #00ffff with a cyan glow on the left rail; active = 2px solid #ff00ff left rail plus rgba(255,0,255,0.16) wash and #ff00ff text, with a right-aligned two-digit Share Tech Mono index; the vertical form reuses the menu.
- **table:** A telemetry grid: header = Share Tech Mono 11px uppercase #00ffff on #0a0a0f over a 1px #2a2a3d rule; body rows = Space Mono 14px #e8e8f0 separated by 1px #2a2a3d rules; hover = cyan 12px glow on the row, selected row = rgba(255,0,255,0.16) fill with a 2px #ff00ff left rule and #ff00ff text; values tabular, radius 2px.
- **dialog:** A chamfered modal: panel recipe with wrapper drop-shadow 0 0 16px rgba(255,0,255,0.55); scrim = color-mix(in srgb, var(--overlay) 60%, transparent); header = Share Tech Mono uppercase label + 6px #00ff9c status dot; body = Space Mono; actions = magenta primary + cyan-outline secondary; entrance is an 80ms RGB-split then settle; focus traps inside.
- **toast:** Bottom-right HUD alert: background:#0a0a0f;border:1px solid;border-radius:2px;padding:10px 14px;font:Share Tech Mono 11px uppercase; a 2px left rail in the role color (#00ff9c/#ffe600/#ff0055) plus the word (COMMIT, WARN, ERR); auto-dismisses in 160ms with a single glitch cycle, and reduced motion keeps it static.
- **code:** A terminal-fragment block: background:#0a0a0f;border:1px solid #2a2a3d;border-left:2px solid #00ffff;border-radius:2px;padding:16px;font:Space Mono 13px/1.6;color:#e8e8f0; preserve whitespace; prompt '>_' in #ff00ff, strings #00ff9c, warnings #ffe600; no syntax gradients, one glitch accent per block.
- **empty:** A centred HUD panel: a 24px glitch glyph (RGB-split square) above one Share Tech Mono message ('NO SIGNAL' / 'EMPTY BUFFER') and a single magenta CTA; the glyph is aria-hidden, the state is written in words, and the panel keeps the chamfered 1px frame.
- **statusbar:** height: 28px; display: flex; align-items: center; gap: 20px; padding: 0 16px; background: #0a0a0f; border-top: 1px solid #2a2a3d; font: 11px/1 'Share Tech Mono'; text-transform: uppercase; letter-spacing: 0.10em; color: #6b6b85; segments separated by 1px #2a2a3d rules; live values in #00ffff, success and throughput in #00ff9c, warnings in #ffe600, critical in #ff0055; the leading link indicator is a 6px #00ff9c square pulsing with steps(2, jump-none) 1.2s infinite; fixed to the bottom 28px of the viewport with the grain layer above it at pointer-events: none.
- **menu:** vertical list, 2px radius, no bullets: item { display: block; font: 600 12px/1.5 'Rajdhani'; text-transform: uppercase; letter-spacing: 0.10em; padding: 10px 16px 10px 40px; color: #e8e8f0; border-left: 2px solid transparent; } each item carries a right-aligned two-digit index in 'Share Tech Mono' at #6b6b85; selected item sets border-left: 2px solid #ff00ff, background: linear-gradient(90deg, rgba(255,0,255,0.16), transparent 70%), color: #ff00ff, and prefixes a '#ff00ff' '▌' block; hover shifts color to #00ffff and adds a 0 0 12px cyan glow to the left rail; group separators are 1px dashed #2a2a3d with a 11px uppercase #6b6b85 label.

## Copywriting

- Voice: A dystopian operating system that already knows too much about the user. Clipped, declarative, faintly menacing: telemetry readouts, access levels, and terminal fragments instead of sentences — system status first, human comfort never.
- Case: headers=UPPERCASE, commands=lowercase for shell fragments, UPPERCASE for HUD actions, body=sentence case
- Prefixes: SYS:// >_ [NEON] [NET] [LOCK] [GLITCH]
- Verb table: start→BOOT; stop→TERMINATE; save→COMMIT; load→FETCH; delete→PURGE
- Avoid: Please, Sorry, Oops, emoji and playful stickers, corporate filler ('seamless', 'leverage', 'empower', 'solution'), exclamation marks, friendly microcopy ('Yay!', 'You're all set'), sentences longer than about twelve words

## Do

- Do keep the frame near-black (#0a0a0f, #14141f) and spend neon only on signal — border, label, value, state — so glow always means something.
- Do pair every glow with a 1px–2px solid border in the same hue, and put wrapper-level glow on a parent when using clip-path chamfers, because clip-path clips box-shadow.
- Do carry HUD chrome on every screen: a header with mode label, id, timestamp, and pulsing status dot, and a footer with telemetry — temperature, load, coordinates, build.
- Do set every number, id, coordinate, and terminal fragment in Share Tech Mono with tabular numerals and 0.08em+ tracking so readouts align in columns.
- Do treat glitch as a state: 80ms–160ms RGB split for at most two cycles on hover, focus change, or an error, then settle to a clean glyph.
- Do layer the atmosphere in a fixed order — content, scanlines, grain, vignette, then modals — at 4%–8% opacity with pointer-events: none, so text stays crisp.

## Don't

- Don't put neon on white, cream, or light gray grounds, and don't use pastels — magenta #ff00ff only works over near-black.
- Don't stack three or more neon hues on one component or more than two per screen region; neon everywhere reads as a gaming peripheral, not a HUD.
- Don't run glitch, RGB split, or flicker on body copy, on every hover, or in a permanent loop — it is the loudest tool in the system and it destroys legibility.
- Don't use radius of 8px or more, pill buttons, or soft blurred drop shadows; shapes are chamfered rectangles with 1px–2px hairlines and a hard 4px 4px 0 #000000 offset.
- Don't set a paragraph in Orbitron or Rajdhani, don't fake-italic or faux-bold them, and don't go below 11px in any HUD label.
- Don't animate grain, scanline crawl, or the status pulse without a prefers-reduced-motion off switch, and never place grain above text at more than 8% opacity.

## Accessibility

- Body text #e8e8f0 on #0a0a0f clears ~15:1 and cyan #00ffff clears ~14:1, but muted #6b6b85 lands near 3.8:1 — use it for 18px+ meta labels, borders, and dividers only, never for paragraphs or critical values.
- Never let glow carry state alone: every selected, focused, invalid, and disabled component keeps its 1px–2px border, its label text, and a textual marker (ERR:, ACTIVE, LOCKED) so forced-colors mode and low-brightness displays still parse it.
- Keep a 2px #00ffff focus outline at 2px offset on every focusable element, and hold it steady — the focus ring must not glitch, blink, or pulse.
- Honor prefers-reduced-motion: stop grain drift, scanline crawl, the status pulse, the blinking cursor, and all RGB splitting, and render glitch states as an instant static offset so focus and selection remain visible.

## Attribution / sources

- Lospec cyberpunk/neon-noir palette collections — https://lospec.com/palette-list/tag/cyberpunk (CC0 / per-palette)
- Orbitron (Matt McInerney) — https://github.com/google/fonts/tree/main/ofl/orbitron (OFL 1.1)
- Rajdhani (Indian Type Foundry) — https://github.com/google/fonts/tree/main/ofl/rajdhani (OFL 1.1)
- Space Mono (Colophon Foundry) — https://github.com/google/fonts/tree/main/ofl/spacemono (OFL 1.1)
- Share Tech Mono (Carrois Type Design) — https://github.com/google/fonts/tree/main/ofl/sharetechmono (OFL 1.1)
- NovusGFX retro-design-system — https://github.com/NovusGFX/retro-design-system (MIT)
