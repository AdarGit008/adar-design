# 80s Arcade — reference

8-bit arcade cabinet: deep indigo ground, neon pink/cyan/yellow, hard 4px pixel borders, and Press Start 2P display type.

**When to use:** When the user asks for 80s arcade, 8-bit, NES, pixel-art, neon arcade HUD, or a retro game-cabinet aesthetic.

**Signature element:** The pixel-border panel (4px solid border wrapped in stacked offset rings) and the press-physics button (hard offset shadow that collapses on :active)

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#0b0b1e` |
| `surface` | `#1a1440` |
| `foreground` | `#e9e9ff` |
| `muted` | `#adafbc` |
| `primary` | `#ffd300` |
| `accent` | `#ff2d95` |
| `danger` | `#ff3b3b` |
| `warning` | `#f7d51d` |
| `success` | `#2bff88` |

### Variant: `arcade`

| Key | Value |
|---|---|
| `bg` | `#0b0b1e` |
| `pink` | `#ff2d95` |
| `cyan` | `#00e5ff` |
| `yellow` | `#ffd300` |
| `green` | `#2bff88` |
| `red` | `#ff3b3b` |
| `purple` | `#7c1dfd` |
| `white` | `#ffffff` |
| `ink` | `#e9e9ff` |

### Variant: `nesRamps`

| Key | Value |
|---|---|
| `default_` | `#ffffff/#e7e7e7/#adafbc` |
| `primary` | `#209cee/#108de0/#006bb3` |
| `success` | `#92cc41/#76c442/#4aa52e` |
| `warning` | `#f7d51d/#f2c409/#e59400` |
| `error` | `#e76e55/#ce372b/#8c2022` |

### Variant: `nes64`

| Key | Value |
|---|---|
| `0x00` | `#7c7c7c` |
| `0x02` | `#0000fc` |
| `0x06` | `#f8b800` |
| `0x0A` | `#58d854` |
| `0x16` | `#ec2c2c` |
| `0x28` | `#38b8b8` |
| `0x20` | `#fcfcfc` |
| `0x30` | `#ffffff` |


### Typography

- Display: "Press Start 2P", "VT323", "monospace"
- Mono: "VT323", "IBM Plex Mono", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=24px` `xl=32px` |
| shadow.hard | `8px 8px 0 8px #7c1dfd` |
| shadow.glow | `0 0 8px #00e5ff` |
| motion.easing | `steps(8, end)` |
| motion.cursor | `steps(2, jump-none) 1s infinite` |
| motion.durations | `0ms` `150ms` `300ms` `1500ms` |
| effects.scanlines | `repeating-linear-gradient(to bottom, transparent 0 2px, rgba(255,255,255,0.02) 2px 3px)` |
| effects.vignette | `radial-gradient(ellipse at top, #1a1440 0%, #0b0b1e 60%)` |
| effects.pixelate | `pixelated` |

## Work-style rules

- Treat 4px as the pixel unit: every border, inset, outset, ring, and gap derives from it (4/8/12/16px) — never 1px hairlines, 2px borders, or 3px insets.
- Elevate with hard offset shadows only, zero blur (4px 4px 0 #7c1dfd, 8px 8px 0 8px #7c1dfd); never soft or blurred drop shadows — the single exception is the 0 0 8px #00e5ff HUD glow.
- Use Press Start 2P for headings, buttons, and HUD labels only; set all body copy, table cells, and input values in VT323 — the 8px pixel font is unreadable at paragraph length.
- Uppercase display type with letter-spacing 0.05em–0.15em, and keep display strings to a few words so the tracking does not shred them.
- Pixelate imagery: image-rendering: pixelated, no anti-aliasing, integer scale factors only, and snap every column and row to the 8px grid (4px sub-steps allowed).
- Animate discretely: steps(8, end) easing, linear coin spin, and instant :active press physics (translate by the offset, collapse the shadow) at 0/150/300/1500ms — never smooth cubic-bezier fades.
- Build the pixel-border panel as a 4px solid border plus stacked offset rings (0 0 0 4px background, 0 0 0 8px accent) plus a hard offset drop — the rings are the look, not an optional flourish.
- Spend one neon per component: pink #ff2d95 for primary action and selection, cyan #00e5ff for focus and live HUD trim, yellow #ffd300 for highlights and score values.

## Component recipes

- **panel:** background: #1a1440; border: 4px solid #e9e9ff; border-radius: 0; padding: 16px 24px; color: #e9e9ff; box-shadow: 0 0 0 4px #0b0b1e, 0 0 0 8px #ff2d95, 8px 8px 0 8px #7c1dfd; — the dark inner ring is what separates the pixel border from the neon ring; drop the outer 8px ring below 640px. Optional inner scanline overlay from effects.scanlines at 100% cover, pointer-events: none.
- **button:** font: 700 12px/1.4 'Press Start 2P'; text-transform: uppercase; letter-spacing: 0.08em; background: #ffd300; color: #0b0b1e; border: 4px solid #0b0b1e; border-radius: 0; padding: 12px 16px; box-shadow: 4px 4px 0 #7c1dfd, 0 0 0 4px #e9e9ff; transition: none; :hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #7c1dfd, 0 0 0 4px #e9e9ff; } :active { transform: translate(4px, 4px); box-shadow: 0 0 0 #7c1dfd, 0 0 0 4px #e9e9ff; } :focus-visible { outline: 4px solid #00e5ff; outline-offset: 4px; } — secondary variant: #1a1440 background, #e9e9ff text, 0 0 0 4px #ff2d95 ring.
- **input:** background: #0b0b1e; color: #e9e9ff; font: 20px/1.4 'VT323'; border: 4px solid #adafbc; border-radius: 0; padding: 8px 12px; caret-color: #00e5ff; box-shadow: inset 0 0 0 4px #1a1440; :placeholder { color: #adafbc; text-transform: uppercase; letter-spacing: 0.05em; font-family: 'Press Start 2P'; font-size: 10px; } :focus { border-color: #00e5ff; box-shadow: inset 0 0 0 4px #1a1440, 0 0 8px #00e5ff; outline: none; } — invalid state: border-color #ff3b3b with a VT323 uppercase message below, always accompanied by the word ERROR.
- **statusbar:** height: 32px; display: flex; align-items: center; gap: 24px; padding: 0 16px; background: #1a1440; border-top: 4px solid #00e5ff; border-radius: 0; font: 10px/1 'Press Start 2P'; text-transform: uppercase; letter-spacing: 0.08em; color: #e9e9ff; segments separated by border-left: 4px solid #7c1dfd; live value in #ffd300, warning in #f7d51d, critical in #ff3b3b; the trailing prompt is an 8px wide #00e5ff block animated with steps(2, jump-none) 1s infinite.
- **menu:** vertical list, no radius, no bullets: item { display: block; font: 12px/1.5 'Press Start 2P'; text-transform: uppercase; padding: 8px 16px 8px 32px; color: #e9e9ff; } selected item inverts to background #ff2d95 / color #0b0b1e and prefixes a blinking '>' in #ffd300 at 32px steps(2, jump-none) 1s infinite; hover shifts translate(-4px, -4px) with box-shadow 4px 4px 0 #7c1dfd; group separators are 4px dashed #7c1dfd, never 1px hairlines.

## Copywriting

- Voice: Coin-op cabinet HUD: clipped, loud, second-person imperative. Short uppercase commands, score-like numerals, and zero corporate politeness — the machine is talking to a player, not a customer.
- Case: headers=UPPERCASE, commands=UPPERCASE, body=UPPERCASE for HUD labels and buttons; sentence case only for running paragraphs of VT323 body copy
- Prefixes: [P1] [P2] [HI] [READY] [1UP]
- Verb table: start→PRESS START; stop→GAME OVER; save→SAVE SLOT; load→CONTINUE; delete→ERASE DATA
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution'), soft hedges ('maybe', 'perhaps', 'might want to'), emoji and modern flat iconography, stacked punctuation (!!!, ???) and all-caps sentences in VT323 body, Press Start 2P for any string longer than a few words, mixed-case labels in the HUD or on buttons, apologetic loading copy ('Sorry, just a moment')

## Do

- Quantize every border, padding step, and grid line to 4px or 8px multiples so the pixel unit stays honest across components.
- Pair neon with the deep indigo ground (#0b0b1e, #1a1440) — the same pink or cyan on white reads as modern, not arcade.
- Give every interactive element a hard offset shadow plus a discrete pressed state so clicks feel like cabinet buttons snapping down.
- Set HUD labels, headings, and buttons in Press Start 2P uppercase at 0.05em–0.15em letter-spacing, and keep them to a few words.
- Use the stacked-ring panel (0 0 0 4px background, 0 0 0 8px accent, then hard drop) as the default container instead of a flat bordered card.
- Keep a 4px cyan (#00e5ff) focus outline at 4px offset on every focusable element, and hold that state steady rather than blinking it.

## Don't

- No border-radius anywhere — 0 on buttons, inputs, panels, images, and avatars.
- No smooth motion: no ease-in-out, no cubic-bezier fades, no animated blur transitions — and no blurred shadows beyond the single cyan HUD glow.
- No Press Start 2P body copy: paragraphs, table cells, help text, and long values belong to VT323.
- No gradients or glassmorphism on surfaces, no backdrop-blur, no semi-transparent overlays over the neon.
- No 1px hairlines, 2px borders, or 3px insets — the smallest line weight in the system is 4px.
- No white or pastel page backgrounds, and no mixing two neon accents on one component as decoration.

## Accessibility

- Body text #e9e9ff on #0b0b1e clears 4.5:1 easily, but #ff2d95 and #00e5ff on #1a1440 do not — reserve those neons for large bold type, borders, or non-text signal, and verify every pairing before shipping.
- Press Start 2P only reads from 10px up with 1.4–1.6 line-height and a few words per line; VT323 carries all running text at 20px/1.4 minimum with no fake bold or italic.
- Honor prefers-reduced-motion: stop the blinking cursor, coin spin, and scanline drift, and render the :active shadow collapse as an instant state change rather than an animation.
- Never encode state by color alone — pair each neon with a label (HI-SCORE, GAME OVER, ERROR, READY) and keep a visible 4px focus ring on every focusable element.

## Attribution / sources

- NovusGFX retro-design-system (11-8bit-arcade) — https://github.com/NovusGFX/retro-design-system (MIT)
- nostalgic-css/NES.css — https://github.com/nostalgic-css/NES.css (MIT)
- Press Start 2P (CodeMan38) — https://github.com/google/fonts/tree/main/ofl/pressstart2p (OFL 1.1)
- VT323 (Peter Hull) — https://github.com/google/fonts/tree/main/ofl/vt323 (OFL)
