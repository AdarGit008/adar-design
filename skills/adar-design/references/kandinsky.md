# Kandinsky / Synesthetic Abstraction — reference

Fine-art canvas UI after Kandinsky: warm cream ground, overlapping circles, quarter-arcs, and ruled line-segments in red/yellow/blue struck with 3px black outlines, arranged like a musical score and moving only in slow, contemplative drift.

**When to use:** When the user asks for Kandinsky, Bauhaus or Russian-avant-garde geometry, an abstract-composition look, circles-and-arcs motifs, a museum or gallery art direction, "color as sound" synesthesia, or a calm fine-art canvas interface instead of a retro screen.

**Signature element:** The circles-and-arcs composition: a cluster of overlapping ink-stroked circles, quarter-arcs, and ruled line-segments in red, yellow, and blue drifting slowly across a warm cream ground, as if the canvas were sounding a chord

## Design tokens

### Colors (all roles)

| Role | Value |
|---|---|
| `background` | `#f7f2e8` |
| `surface` | `#fdfaf3` |
| `foreground` | `#111111` |
| `muted` | `#6f6a60` |
| `primary` | `#d62828` |
| `accent` | `#1d4ed8` |
| `danger` | `#a81f1f` |
| `warning` | `#f4b400` |
| `success` | `#2a7d4f` |
| `border` | `#111111` |
| `divider` | `#6f6a60` |
| `selection` | `#1d4ed8` |
| `overlay` | `#111111` |
| `selection-text` | `#ffffff` |
| `color-scheme` | `light` |

### Variant: `composition`

| Key | Value |
|---|---|
| `cream` | `#f7f2e8` |
| `paper` | `#fdfaf3` |
| `white` | `#fafafa` |
| `red` | `#d62828` |
| `blue` | `#1d4ed8` |
| `yellow` | `#f4b400` |
| `green` | `#2a7d4f` |
| `ink` | `#111111` |
| `muted` | `#6f6a60` |

### Variant: `trioRamps`

| Key | Value |
|---|---|
| `red` | `#e8554f/#d62828/#a81f1f` |
| `yellow` | `#f8cd5e/#f4b400/#c98f00` |
| `blue` | `#5b83ea/#1d4ed8/#173a9e` |
| `green` | `#6aa887/#2a7d4f/#1c5a37` |
| `ink` | `#3a3a3a/#111111/#000000` |

### Variant: `voices`

| Key | Value |
|---|---|
| `canvas` | `#f7f2e8` |
| `circleFill` | `#f4b400` |
| `circleStroke` | `#111111` |
| `arcFill` | `#1d4ed8` |
| `triangleFill` | `#d62828` |
| `lineWeight` | `#111111` |
| `highlight` | `#fafafa` |
| `annotation` | `#6f6a60` |


### Typography

- Display: "Montserrat", "Archivo", "Futura", "system-ui", "sans-serif"
- Body: "Montserrat", "Archivo", "Futura", "system-ui", "sans-serif"
- Mono: "IBM Plex Mono", "ui-monospace", "monospace"

### Type scale

| Tier | Size | Line-height | Notes |
|---|---|---|---|
| h1 | `44px` | 1.1 | — |
| h2 | `26px` | 1.2 | — |
| body | `16px` | 1.5 | — |
| caption | `12px` | 1.4 | — |

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=32px` `xl=64px` |
| shadow.hard | `3px 3px 0 #111111` |
| shadow.glow | `0 0 0 3px #f4b400` |
| motion.easing | `cubic-bezier(.22,.61,.36,1)` |
| motion.cursor | `default` |
| motion.durations | `0ms` `240ms` `480ms` `900ms` |
| effects.scanlines | `none` |
| effects.vignette | `radial-gradient(ellipse at 50% 45%, transparent 45%, rgba(17,17,17,.10) 100%)` |
| effects.pixelate | `auto` |

## Work-style rules

- Compose, don't decorate: arrange circles, quarter-arcs, triangles, and line-segments on an invisible 8px grid the way a score places notes — pick one dominant mass, one counterweight, and one line that travels between them, then stop before the canvas fills up.
- Outline everything: every circle, arc, triangle, and rule carries a 3px #111111 stroke, and fills come only from the trio — red #d62828, blue #1d4ed8, yellow #f4b400 — plus cream #f7f2e8, paper #fdfaf3, and white #fafafa for the ground.
- Keep the ground warm and quiet: page is #f7f2e8, cards lift to #fdfaf3, and no hue outside the trio appears as a fill; a violet or teal gradient instantly reads as a modern app instead of a painting.
- Radius stays 0 on every rectangle — a panel is a ruled rectangle, and the only curves in the system are whole circles and arcs drawn as motifs, so rounding a card to 12px fights the geometry.
- Depth is a stamped ink offset, 3px 3px 0 #111111, and nothing more; the single allowed soft lift is 0 16px 40px rgba(17,17,17,.08) for a floating plate, plus a 3px yellow ring for focus.
- Set display type in Montserrat 700/800 with 0.02em tracking, Title Case or UPPERCASE for short labels, and body in Montserrat 400/500 at 16–18px/1.6; IBM Plex Mono is reserved for catalogue data — plate numbers, dimensions, dates, durations.
- Motion is contemplative: 240–900ms cubic-bezier(.22,.61,.36,1) fades and 4–8px drifts, plus one slow 28–40s drift loop on a single background arc group; a painting breathes, it does not bounce, spin, or fly in.
- Treat color as sound: red is brass and percussive (primary action, emphasis), yellow is high brass and trumpet (highlight, warning), blue is deep string and organ (links, focus, structure), green is the quiet middle voice (success) — and never more than three voices sounding at once in one component.
- Stay evocation-only: no reproduction, trace, crop, or scan of any Kandinsky painting, no museum wall text copied verbatim, and no title used as decoration — the style lives in palette, motif, and composition.

## Component recipes

- **panel:** background: #fdfaf3; border: 3px solid #111111; border-radius: 0; padding: 32px; color: #111111; box-shadow: 3px 3px 0 #111111; — the panel's top-right corner may hold one 48px motif cluster (a yellow circle at 60% opacity with a blue quarter-arc crossing it) pinned with position: absolute and overflow: hidden, never overlapping text; headings inside are Montserrat 700 28px with 0.02em tracking, and a 12px #d62828 bar sits above the first line as a scored accent; below 640px drop the hard shadow and the motif, keep the 3px stroke.
- **card:** background:#fdfaf3;border:3px solid #111111;border-radius:0;padding:32px;color:#111111;box-shadow:3px 3px 0 #111111; a 48px motif cluster (yellow circle at 60% opacity crossed by a blue quarter-arc) pins to the top-right corner; title = Montserrat 700 28px with a 12px #d62828 scored bar above the first line; body = Montserrat 16px/1.6.
- **button:** font: 700 15px/1 'Montserrat', 'Archivo', system-ui, sans-serif; letter-spacing: 0.06em; text-transform: uppercase; padding: 16px 32px; border-radius: 0; background: #d62828; color: #fafafa; border: 3px solid #111111; box-shadow: 3px 3px 0 #111111; transition: transform 240ms cubic-bezier(.22,.61,.36,1), box-shadow 240ms cubic-bezier(.22,.61,.36,1), background-color 240ms linear; :hover { transform: translate(-1px, -1px); box-shadow: 4px 4px 0 #111111; } :active { transform: translate(3px, 3px); box-shadow: 0 0 0 #111111; } :focus-visible { outline: 3px solid #1d4ed8; outline-offset: 3px; } — secondary: background #fdfaf3, color #111111, with a 3px #1d4ed8 bar on the left edge; disabled: background #f7f2e8, color #6f6a60, border-color #6f6a60, shadow none, no transform.
- **input:** font: 15px/1.6 'IBM Plex Mono', ui-monospace, monospace; color: #111111; background: #fafafa; border: 3px solid #111111; border-radius: 0; padding: 12px 16px; box-shadow: inset 3px 0 0 #1d4ed8; caret-color: #d62828; :placeholder { color: #6f6a60; font: 400 16px 'Montserrat', system-ui, sans-serif; } :focus { background: #fdfaf3; outline: 3px solid #1d4ed8; outline-offset: 2px; } — invalid: border-color #a81f1f, a small red #d62828 circle with a 3px ink stroke beside the field, and a Montserrat 15px sentence below in #a81f1f ('This line cannot be read yet.') so the state never depends on color alone.
- **select:** A catalogue dropdown: trigger = IBM Plex Mono 15px field (background:#fafafa;border:3px solid #111111;border-radius:0;padding:12px 16px;box-shadow:inset 3px 0 0 #1d4ed8) with a red '▾'; the open list is a #fdfaf3 panel of Montserrat rows, the selected row fills #f4b400 with a 3px #111111 left bar and its index numeral turns #d62828; hover slides translate(4px,0) with a #1d4ed8 left bar.
- **checkbox:** A 24px square plate: background:#fafafa;border:3px solid #111111;border-radius:0; checked = a 12px #d62828 square inside; radio = a 10px #1d4ed8 circle; label = Montserrat 16px #111111 with 'On'/'Off'; focus-visible = 3px #1d4ed8 outline at 3px offset.
- **badge:** catalogue chip, 1–3 words: display: inline-flex; align-items: center; gap: 8px; height: 28px; padding: 0 12px; background: #fafafa; border: 3px solid #111111; border-radius: 0; font: 600 11px/1 'Montserrat', system-ui, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; color: #111111; the leading dot is a 10px circle filled #d62828 / #1d4ed8 / #f4b400 / #2a7d4f by role, struck with the same 3px ink stroke; motion is a 240ms fade on state change, never a pulse.
- **avatar:** A 40px square plate: background:#fafafa;border:3px solid #111111;border-radius:0;color:#111111;font:700 15px 'Montserrat'; initials or a small motif (circle/arc); image avatars get a 3px ink stroke and 0 radius.
- **nav:** A vertical catalogue rail (horizontal form allowed): items = Montserrat 500 17px uppercase #111111, letter-spacing 0.04em, padding 12px 16px, border-left 3px transparent; hover slides translate(4px,0) with a #1d4ed8 left bar; active = #f4b400 fill with a 3px #111111 left bar and red index numeral; group headers are Montserrat 700 12px #6f6a60 over a 3px #111111 rule spanning 48px.
- **table:** A scored data grid: header = Montserrat 700 13px uppercase #111111 over a 3px #111111 rule; body rows = Montserrat 16px #111111 separated by 1px #6f6a60 rules; hover = #1d4ed8 text, selected row = #f4b400 fill with a 3px #111111 left bar; numerals in tabular Plex Mono, radius 0.
- **dialog:** A museum-plate modal: panel recipe with a 3px ink border and a 48px motif cluster; scrim = color-mix(in srgb, var(--overlay) 50%, transparent); title = Montserrat 700 Title Case, body = Montserrat, actions = red primary + cream secondary with a blue left bar; entrance is a 480ms cubic-bezier(.22,.61,.36,1) fade.
- **toast:** A bottom-right plate: background:#fafafa;border:3px solid #111111;border-radius:0;padding:10px 14px;font:13px/1.4 'IBM Plex Mono'; a leading 9px outline circle in the role color (#2a7d4f/#f4b400/#a81f1f) plus the word (Signed, Pending, Failed); auto-dismisses with a 480ms fade; reduced motion keeps it static.
- **code:** A monospace block: background:#fafafa;border:3px solid #111111;border-radius:0;padding:16px;font:14px/1.5 'IBM Plex Mono';color:#111111; preserve whitespace; comments #6f6a60, strings #d62828, values #1d4ed8; no syntax gradients, and the block keeps the blue focus ring.
- **empty:** A centred panel: a small circles-and-arcs motif above one Montserrat message ('No studies yet') and a single red CTA; the motif is aria-hidden and the state is written in words.
- **statusbar:** height: 56px; display: flex; align-items: center; justify-content: space-between; gap: 32px; padding: 0 32px; background: #f7f2e8; border-top: 3px solid #111111; border-radius: 0; font: 13px/1.4 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: 0.04em; color: #111111; left side lists scored events, each prefixed by a 9px outline circle — #2a7d4f passing, #f4b400 pending, #a81f1f failing, #6f6a60 idle; right side holds a mono plate number ('№ 013') and the single primary button; the live event fades between 0.6 and 1 opacity over 900ms instead of blinking.
- **menu:** vertical catalogue, no bullets, 8px gap: item { display: flex; align-items: baseline; gap: 16px; padding: 12px 16px; font: 500 17px/1.4 'Montserrat', system-ui, sans-serif; letter-spacing: 0.04em; text-transform: uppercase; color: #111111; background: transparent; border: 0; border-left: 3px solid transparent; } selected row fills #f4b400, gains a 3px #111111 left bar, and its small index numeral turns #d62828; hover slides translate(4px, 0) over 240ms with the left bar in #1d4ed8; group headers are Montserrat 700 12px spaced 0.14em in #6f6a60 with a 3px #111111 rule beneath spanning 48px.

## Copywriting

- Voice: A studio voice — a painter annotating their own canvas in pencil. Quiet, precise, present tense, a little synesthetic: copy names the gesture and the material ('Sketch the outline. Paint the circle yellow. Frame it in black.') and treats the interface as a composition being built rather than a tool being used. Never chatty, never promotional; the reader is a visitor in a studio, not a customer.
- Case: headers=Title Case ('Colour Studies', 'Composition Notes'), commands=sentence case imperative ('Sketch a note', 'Frame the plate'), body=sentence case
- Prefixes: STUDY FIG. PLATE NOTE IN PREPARATION UNSIGNED
- Verb table: start→SKETCH; stop→SET DOWN; save→SIGN; load→UNROLL; delete→ERASE
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution', 'elevate'), exclamation marks, urgency timers, and pressure tactics, emoji, drop shadows on text, and gradient buttons, any painting title, museum wall text, or gallery copy reproduced from a real exhibition, calling the style 'synesthesia' as a gimmick or a feature name, sarcasm, apology loops, and deadpan errors ('That was not expected.'), all-caps sentences longer than three words

## Do

- Compose each screen as a picture: one dominant mass, one counterweight, one line travelling between them, with generous empty canvas around the ensemble.
- Strike every shape with the same 3px #111111 outline and fill it with one trio color — red, blue, or yellow — so shapes read as painted planes cut from paper, not as tinted UI.
- Keep the cream ground (#f7f2e8, cards #fdfaf3) visible; the empty space is the composition, so resist filling the corners with decoration.
- Build motifs from primitives: Circles are perfect, arcs are quarter to half segments, triangles are equilateral, lines are horizontal or diagonal at 30°/45° — and each motif must carry meaning (selection, status, sequence) rather than acting as confetti.
- Use stamped ink depth (3px 3px 0 #111111) plus angled or overlapping shapes to suggest layering, rather than blur, glow, or transparency stacks.
- Set display type in Montserrat 700/800 at 24px and up with 0.02em tracking, body in Montserrat 400/500 at 16–18px/1.6, and IBM Plex Mono only for catalogue data — plate numbers, dimensions, dates, durations.
- Move slowly: 240–900ms eased fades and 4–8px drifts, one 28–40s background drift, and no motion that competes with reading.

## Don't

- No reproduction of any Kandinsky painting: no scans, traces, crops, thumbnails, or close reconstructions of specific works — evocation only through palette, motif, and composition.
- No radius on rectangles, no pills, no soft cards: the only curves in the system are drawn circles and arcs, and the smallest line weight is 3px ink.
- No gradients, glassmorphism, backdrop-blur, or low-opacity overlays as decoration; a plane is one opaque fill inside one ink stroke.
- No neon glow, no CRT scanlines, no pixelation, no 8-bit type — those belong to the retro modes, and any of them collapses the fine-art register.
- No fourth fill hue in the trio: green exists only as the quiet success voice, and violet, teal, magenta, or pastel fills read as a modern app.
- No fast or playful motion: no springs, overshoots, spins, parallax bounces, or confetti — and no more than one drifting element in view at a time.

## Accessibility

- Ink #111111 on cream #f7f2e8 clears 4.5:1 comfortably, but trio red #d62828 (≈4.4:1), blue #1d4ed8 (≈5.6:1 at small sizes reads thin), and yellow #f4b400 on cream do not all pass — use them as fills, arcs, strokes, and dots, and set text inside yellow in ink rather than cream.
- Keep every canvas motif decorative but not informative on its own: any meaning carried by a circle's color or position must be repeated in a label, a numeral, or a table row, so nothing lives only in a picture.
- Montserrat stays at 16px minimum for body copy with 1.6 line-height; the all-caps tracked labels are limited to two or three words and never at sizes below 11px.
- Honor prefers-reduced-motion: stop the slow background drift and the drift-on-hover, and let the 240–900ms fades resolve instantly so the composition holds still like a hung painting.
- Keep a visible 3px #1d4ed8 focus ring at 3px offset on every focusable element, and never rely on the trio colors alone to mark a state.

## Attribution / sources

- Wassily Kandinsky (1866–1944) — aesthetic reference, Bauhaus and Der Blaue Reiter abstraction — https://en.wikipedia.org/wiki/Wassily_Kandinsky (evocation only, no artworks reproduced)
- Palette derived by eye (cream #f7f2e8, red #d62828, blue #1d4ed8, yellow #f4b400, ink #111111, white #fafafa) from Bauhaus color theory and Kandinsky's primary-trio writing, not sampled from any canvas file — https://en.wikipedia.org/wiki/Bauhaus (palette/CC0 — evocation only, no artworks reproduced)
- Montserrat (Julieta Ulanovsky) — https://github.com/google/fonts/tree/main/ofl/montserrat (OFL 1.1)
- Archivo (Omnibus-Type) — https://github.com/google/fonts/tree/main/ofl/archivo (OFL 1.1)
- IBM Plex Mono (IBM) — https://github.com/google/fonts/tree/main/ofl/ibmplexmono (OFL 1.1)
