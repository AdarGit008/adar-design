# Neon Console — mix

Arcade neon geometry with terminal/CRT type, scanlines, and motion.

**Base:** `arcade`

**Overrides**

- `fonts` ← `terminal`
- `effects` ← `terminal`
- `motion` ← `terminal`

**Signature element:** Arcade pixel-border panels with a phosphor-green typewriter cursor.

## Resolved groups

| Group | Source |
|---|---|
| `colors` | `arcade` |
| `typeScale` | `arcade` |
| `paletteVariants` | `arcade` |
| `fonts` | `terminal` |
| `radius` | `arcade` |
| `spacing` | `arcade` |
| `shadow` | `arcade` |
| `motion` | `terminal` |
| `effects` | `terminal` |
| `rules` | `arcade` |
| `componentRecipes` | `arcade` |
| `copywriting` | `arcade` |
| `accessibility` | `arcade` |
| `signatureElement` | `arcade` |

## Resolved tokens

### Color scheme

- Color scheme: `dark`

### Colors

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
| `border` | `#e9e9ff` |
| `divider` | `#adafbc` |
| `selection` | `#ff2d95` |
| `overlay` | `#0b0b1e` |
| `selection-text` | `#0b0b1e` |
| `color-scheme` | `dark` |

### Typography

- Display: "VT323", "Courier New", "monospace"
- Body: "VT323", "IBM Plex Mono", "Courier New", "monospace"
- Mono: "IBM Plex Mono", "Courier New", "monospace"

### Type scale

| Tier | Size | Line-height | Notes |
|---|---|---|---|
| h1 | `24px` | 1.1 | — |
| h2 | `16px` | 1.2 | — |
| body | `16px` | 1.5 | — |
| caption | `14px` | 1.4 | — |

### Rules

- Treat 4px as the pixel unit: every border, inset, outset, ring, and gap derives from it (4/8/12/16px) — never 1px hairlines, 2px borders, or 3px insets.
- Elevate with hard offset shadows only, zero blur (4px 4px 0 #7c1dfd, 8px 8px 0 8px #7c1dfd); never soft or blurred drop shadows — the single exception is the 0 0 8px #00e5ff HUD glow.
- Use Press Start 2P for headings, buttons, and HUD labels only; set all body copy, table cells, and input values in VT323 — the 8px pixel font is unreadable at paragraph length.
- Uppercase display type with letter-spacing 0.05em–0.15em, and keep display strings to a few words so the tracking does not shred them.
- Pixelate imagery: image-rendering: pixelated, no anti-aliasing, integer scale factors only, and snap every column and row to the 8px grid (4px sub-steps allowed).
- Animate discretely: steps(8, end) easing, linear coin spin, and instant :active press physics (translate by the offset, collapse the shadow) at 0/150/300/1500ms — never smooth cubic-bezier fades.
- Build the pixel-border panel as a 4px solid border plus stacked offset rings (0 0 0 4px background, 0 0 0 8px accent) plus a hard offset drop — the rings are the look, not an optional flourish.
- Spend one neon per component: pink #ff2d95 for primary action and selection, cyan #00e5ff for focus and live HUD trim, yellow #ffd300 for highlights and score values.

### Component recipes

- **panel:** background: #1a1440; border: 4px solid #e9e9ff; border-radius: 0; padding: 16px 24px; color: #e9e9ff; box-shadow: 0 0 0 4px #0b0b1e, 0 0 0 8px #ff2d95, 8px 8px 0 8px #7c1dfd; — the dark inner ring is what separates the pixel border from the neon ring; drop the outer 8px ring below 640px. Optional inner scanline overlay from effects.scanlines at 100% cover, pointer-events: none.
- **card:** background:#1a1440; border:4px solid #e9e9ff; border-radius:0; padding:16px 24px; color:#e9e9ff; box-shadow:0 0 0 4px #0b0b1e, 0 0 0 8px #ff2d95, 8px 8px 0 8px #7c1dfd; header = Press Start 2P 12px uppercase #ffd300 with a 4px #ff2d95 underline, body = VT323 20px/1.4 #e9e9ff, and a footer action row of 4px-bordered buttons; one neon per card, hover lifts translate(-2px,-2px) and widens the offset shadow.
- **button:** font: 700 12px/1.4 'Press Start 2P'; text-transform: uppercase; letter-spacing: 0.08em; background: #ffd300; color: #0b0b1e; border: 4px solid #0b0b1e; border-radius: 0; padding: 12px 16px; box-shadow: 4px 4px 0 #7c1dfd, 0 0 0 4px #e9e9ff; transition: none; :hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #7c1dfd, 0 0 0 4px #e9e9ff; } :active { transform: translate(4px, 4px); box-shadow: 0 0 0 #7c1dfd, 0 0 0 4px #e9e9ff; } :focus-visible { outline: 4px solid #00e5ff; outline-offset: 4px; } — secondary variant: #1a1440 background, #e9e9ff text, 0 0 0 4px #ff2d95 ring.
- **input:** background: #0b0b1e; color: #e9e9ff; font: 20px/1.4 'VT323'; border: 4px solid #adafbc; border-radius: 0; padding: 8px 12px; caret-color: #00e5ff; box-shadow: inset 0 0 0 4px #1a1440; :placeholder { color: #adafbc; text-transform: uppercase; letter-spacing: 0.05em; font-family: 'Press Start 2P'; font-size: 10px; } :focus { border-color: #00e5ff; box-shadow: inset 0 0 0 4px #1a1440, 0 0 8px #00e5ff; outline: none; } — invalid state: border-color #ff3b3b with a VT323 uppercase message below, always accompanied by the word ERROR.
- **select:** A HUD toggle, not a native dropdown: trigger is a Press Start 2P 12px uppercase plate (background:#0b0b1e;border:4px solid #adafbc;padding:12px 16px;color:#e9e9ff) with a blinking '▼' in #00e5ff; the open list is a stacked-ring panel of VT323 rows where the selected row inverts to #ff2d95 with #0b0b1e text and prefixes '►'; hover hard-offsets the row 4px and focus keeps the 4px cyan outline.
- **checkbox:** Square 24px pixel well: background:#0b0b1e;border:4px solid #adafbc;border-radius:0; the checked state fills a 12px #ffd300 block centred inside with a 4px #ff2d95 ring on focus; radio variant uses a 12px #ff2d95 dot instead; label sits in VT323 20px #e9e9ff and the state is repeated as 'ON'/'OFF' in Press Start 2P.
- **badge:** A 4px-bordered pixel chip: display:inline-flex;align-items:center;gap:8px;padding:6px 10px;background:#0b0b1e;border:4px solid;border-radius:0;font:10px/1 'Press Start 2P';text-transform:uppercase;letter-spacing:0.08em; role color = border+text (#2bff88 success, #f7d51d warning, #ff3b3b danger, #ffd300 neutral) with the word spelled out; never rounded, never icon-only.
- **avatar:** A 32px pixel tile: image-rendering:pixelated; background:#0b0b1e; border:4px solid #e9e9ff; border-radius:0; box-shadow:4px 4px 0 #7c1dfd; initials fall back to a centred Press Start 2P 12px glyph in #ffd300; integer 2x/3x scale only, and the tile snaps to the 8px grid.
- **nav:** Horizontal HUD rail: items are Press Start 2P 12px uppercase #e9e9ff with 4px 0 16px padding and a 4px #7c1dfd separator; hover inverts the label to #00e5ff; the active tab paints a 4px #ffd300 underline that stops one grid step short and prefixes a blinking '▮'; the vertical menu form is the existing menu recipe; no radius and no smooth motion.
- **table:** 4px pixel table: header row = Press Start 2P 10px uppercase #ffd300 on #0b0b1e with a 4px #e9e9ff bottom border; body rows = VT323 20px/1.4 #e9e9ff on #1a1440 separated by 4px #adafbc rules; hover inverts to #00e5ff, the selected row inverts to background #ff2d95 / text #0b0b1e and prefixes '►'; cell padding 8px 12px, radius 0, no zebra opacity.
- **dialog:** A stacked-ring modal: background:#1a1440;border:4px solid #e9e9ff;box-shadow:0 0 0 4px #0b0b1e, 0 0 0 8px #ff2d95, 8px 8px 0 8px #7c1dfd; the scrim is color-mix(in srgb, var(--overlay) 60%, transparent) over the page; title in Press Start 2P uppercase, body in VT323, and a Press Start 2P action row at the bottom; entrance is a 150ms steps(8) translate from -8px, focus stays trapped.
- **toast:** Bottom-right HUD alert: background:#0b0b1e;border:4px solid;padding:12px 16px;font:VT323 20px/1.2;border-radius:0; a 4px left accent in the role color (#2bff88/#f7d51d/#ff3b3b) plus the word (SCORED, WARNING, ERROR); auto-dismisses in 300ms by collapsing its 4px 4px 0 #7c1dfd shadow to 0, and reduced motion shows it statically.
- **code:** A pixel monospace block: background:#0b0b1e;border:4px solid #e9e9ff;border-radius:0;padding:16px;font:18px/1.5 'VT323'; color:#e9e9ff; preserve whitespace; comments in #adafbc, strings in #ffd300, and errors in #ff3b3b; no syntax gradients, and the block keeps the 4px cyan focus ring when tabbed.
- **empty:** A centred pixel panel (panel recipe) with an 8-bit sprite motif drawn in 4px blocks (#ff2d95/#00e5ff/#ffd300), one VT323 message ('INSERT COIN' / 'NO SAVES'), and a single Press Start 2P primary button; the motif is aria-hidden and the message names the empty state in words.
- **statusbar:** height: 32px; display: flex; align-items: center; gap: 24px; padding: 0 16px; background: #1a1440; border-top: 4px solid #00e5ff; border-radius: 0; font: 10px/1 'Press Start 2P'; text-transform: uppercase; letter-spacing: 0.08em; color: #e9e9ff; segments separated by border-left: 4px solid #7c1dfd; live value in #ffd300, warning in #f7d51d, critical in #ff3b3b; the trailing prompt is an 8px wide #00e5ff block animated with steps(2, jump-none) 1s infinite.
- **menu:** vertical list, no radius, no bullets: item { display: block; font: 12px/1.5 'Press Start 2P'; text-transform: uppercase; padding: 8px 16px 8px 32px; color: #e9e9ff; } selected item inverts to background #ff2d95 / color #0b0b1e and prefixes a blinking '>' in #ffd300 at 32px steps(2, jump-none) 1s infinite; hover shifts translate(-4px, -4px) with box-shadow 4px 4px 0 #7c1dfd; group separators are 4px dashed #7c1dfd, never 1px hairlines.

### Copywriting

- Voice: Coin-op cabinet HUD: clipped, loud, second-person imperative. Short uppercase commands, score-like numerals, and zero corporate politeness — the machine is talking to a player, not a customer.
- Case: headers=UPPERCASE, commands=UPPERCASE, body=UPPERCASE for HUD labels and buttons; sentence case only for running paragraphs of VT323 body copy
- Prefixes: [P1] [P2] [HI] [READY] [1UP]
- Verb table: start→PRESS START; stop→GAME OVER; save→SAVE SLOT; load→CONTINUE; delete→ERASE DATA
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution'), soft hedges ('maybe', 'perhaps', 'might want to'), emoji and modern flat iconography, stacked punctuation (!!!, ???) and all-caps sentences in VT323 body, Press Start 2P for any string longer than a few words, mixed-case labels in the HUD or on buttons, apologetic loading copy ('Sorry, just a moment')

### Do

- Quantize every border, padding step, and grid line to 4px or 8px multiples so the pixel unit stays honest across components.
- Pair neon with the deep indigo ground (#0b0b1e, #1a1440) — the same pink or cyan on white reads as modern, not arcade.
- Give every interactive element a hard offset shadow plus a discrete pressed state so clicks feel like cabinet buttons snapping down.
- Set HUD labels, headings, and buttons in Press Start 2P uppercase at 0.05em–0.15em letter-spacing, and keep them to a few words.
- Use the stacked-ring panel (0 0 0 4px background, 0 0 0 8px accent, then hard drop) as the default container instead of a flat bordered card.
- Keep a 4px cyan (#00e5ff) focus outline at 4px offset on every focusable element, and hold that state steady rather than blinking it.

### Don't

- No border-radius anywhere — 0 on buttons, inputs, panels, images, and avatars.
- No smooth motion: no ease-in-out, no cubic-bezier fades, no animated blur transitions — and no blurred shadows beyond the single cyan HUD glow.
- No Press Start 2P body copy: paragraphs, table cells, help text, and long values belong to VT323.
- No gradients or glassmorphism on surfaces, no backdrop-blur, no semi-transparent overlays over the neon.
- No 1px hairlines, 2px borders, or 3px insets — the smallest line weight in the system is 4px.
- No white or pastel page backgrounds, and no mixing two neon accents on one component as decoration.

### Accessibility

- Body text #e9e9ff on #0b0b1e clears 4.5:1 easily, but #ff2d95 and #00e5ff on #1a1440 do not — reserve those neons for large bold type, borders, or non-text signal, and verify every pairing before shipping.
- Press Start 2P only reads from 10px up with 1.4–1.6 line-height and a few words per line; VT323 carries all running text at 20px/1.4 minimum with no fake bold or italic.
- Honor prefers-reduced-motion: stop the blinking cursor, coin spin, and scanline drift, and render the :active shadow collapse as an instant state change rather than an animation.
- Never encode state by color alone — pair each neon with a label (HI-SCORE, GAME OVER, ERROR, READY) and keep a visible 4px focus ring on every focusable element.
