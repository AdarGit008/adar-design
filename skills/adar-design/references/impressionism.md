# Impressionism — Light & Color — reference

Plein-air light study: cream canvas, five low-saturation pastels behaving like mixed pigment, broken brushstroke rules, dissolved edges, and a soft dappled-light overlay drifting across a strict underlying grid.

**When to use:** When the user asks for Impressionism, Monet/Renoir light and color, a plein-air or painterly aesthetic, soft pastel dapple, broken brushstrokes, gallery-calm fine-art atmosphere, or a romantic garden-light interface that still has to stay readable and well-gridded.

**Signature element:** Sun-dappled light: broken brushstroke bands of sky, blush, leaf, lavender, and sunlight layered over a cream canvas, crossed by a soft warm dapple overlay that drifts like light through leaves — with every edge dissolved and every rule left visibly brushy

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#f7f2e6` |
| `surface` | `#fdfaf2` |
| `foreground` | `#3a3a3a` |
| `muted` | `#8a8478` |
| `primary` | `#a8d0e6` |
| `accent` | `#b8a7d6` |
| `danger` | `#b5546a` |
| `warning` | `#d9a441` |
| `success` | `#6f9f78` |

### Variant: `impressionist`

| Key | Value |
|---|---|
| `canvas` | `#f7f2e6` |
| `panel` | `#fdfaf2` |
| `sky` | `#a8d0e6` |
| `blush` | `#f6c6c0` |
| `leaf` | `#a3c9a8` |
| `lavender` | `#b8a7d6` |
| `sunlight` | `#f6e7b2` |
| `ink` | `#3a3a3a` |
| `muted` | `#8a8478` |

### Variant: `dappleRamps`

| Key | Value |
|---|---|
| `sky` | `#cfe4f0/#a8d0e6/#7fa8c9` |
| `blush` | `#fbe0dc/#f6c6c0/#e2a29c` |
| `leaf` | `#c8ddcc/#a3c9a8/#7fa885` |
| `lavender` | `#d4cae7/#b8a7d6/#8f7cb5` |
| `sunlight` | `#fbf3d4/#f6e7b2/#e7cf82` |
| `ink` | `#6b6b6b/#3a3a3a/#242424` |

### Variant: `surfaceWash`

| Key | Value |
|---|---|
| `canvas` | `#f7f2e6` |
| `panel` | `#fdfaf2` |
| `washSky` | `#dfeef6` |
| `washLeaf` | `#e2eee5` |
| `washBlush` | `#fbe8e5` |
| `washLavender` | `#eae4f2` |
| `sun` | `#f6e7b2` |
| `ink` | `#3a3a3a` |
| `softShadow` | `rgba(90,120,150,.18)` |


### Typography

- Display: "Cormorant", "Playfair Display", "EB Garamond", "Georgia", "serif"
- Mono: "IBM Plex Mono", "ui-monospace", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `10px` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=24px` `xl=40px` |
| shadow.hard | `undefined` |
| shadow.glow | `inset 0 0 32px rgba(246,231,178,.35)` |
| motion.easing | `cubic-bezier(.4,.14,.3,1)` |
| motion.cursor | `default` |
| motion.durations | `0ms` `240ms` `420ms` `900ms` |
| effects.scanlines | `none` |
| effects.vignette | `radial-gradient(ellipse at 28% 8%, rgba(246,231,178,.38) 0%, rgba(247,242,230,0) 58%), radial-gradient(ellipse at 100% 100%, rgba(168,208,230,.28) 0%, rgba(247,242,230,0) 62%)` |
| effects.pixelate | `none` |

## Work-style rules

- Paint in layers, not in fills: every panel is a 2–3 stop gradient of near-neighbour pastels (background → surface → the lightest wash) so the surface looks brushed rather than vector-flat, and no large area is ever one solid hex.
- Dapple before you decorate: the sun-dappled light layer is this mode's signature — one warm sunlight ellipse from the upper left plus broken circles of #f6e7b2, #a3c9a8, and #b8a7d6 at 20–40% alpha drifting across it, applied as an overlay at mix-blend-mode: soft-light, never as a repeating hard pattern and never on top of small text.
- Break the stroke: dividers, underlines, and selected-state markers are short dashes (10–18px on, 6–10px off) or a hand-wobbled 2px rule at 40–70% opacity — no full-width 1px hairline ever runs edge to edge.
- Keep the palette in the light: sky #a8d0e6, blush #f6c6c0, leaf #a3c9a8, lavender #b8a7d6, and sunlight #f6e7b2 on a cream #f7f2e6 canvas, with ink #3a3a3a reserved for text and thin accents. Every hue stays under roughly 35% saturation and none of them glow.
- Text goes in ink, color goes behind it: pastels are fills, washes, borders, and daubs only — any label sitting on a pastel is #3a3a3a, and any pastel used as text must be the deep ramp (#7fa8c9, #7fa885, #8f7cb5) at 18px bold or larger.
- Set type quiet and generous: Cormorant or Playfair Display at 500–600 for headings from 28px up with 1.15 line-height and Title Case — never all caps, never wide tracking — EB Garamond 400 at 17–19px/1.65 for body, and IBM Plex Mono at 13px with 0.02em tracking for data only.
- Edges dissolve, they never blur: 10px radius on cards, 16px on media, full pills on buttons, and where a panel must fade into the canvas use a gradient or mask-image dissolve over 24–40px — never backdrop-filter, glass, or a Gaussian halo.
- Move like weather: 240–420ms on cubic-bezier(.4,.14,.3,1) ease-out only; hover lifts 2px and warms 3–5% in brightness, focus breathes the sunlight glow in and out once, and nothing springs, bounces, blinks, or slides further than 4px.
- Leave the brushmarks visible: let the dapple overlay, broken rules, and gradient banding cross component boundaries so the page reads as one painted surface — while the layout grid underneath stays strict, because the softness is in the pigment, never in the alignment.

## Component recipes

- **panel:** background: linear-gradient(160deg, #fdfaf2 0%, #f7f2e6 58%, #f2ece0 100%); border: 1px solid rgba(58,58,58,.10); border-radius: 10px; padding: 28px 32px; color: #3a3a3a; box-shadow: 0 18px 40px -24px rgba(127,168,201,.45), inset 0 0 32px rgba(246,231,178,.35); position: relative; overflow: hidden; — a ::after layer paints effects.dapple at opacity .55 and mix-blend-mode: soft-light with pointer-events: none; the heading inside is 'Cormorant', 'Playfair Display', Georgia, serif 600 30px/1.15 in #3a3a3a with a 3px #f6c6c0 underline masked to 14px-on/8px-off dashes; below 640px drop the outer shadow and the inset glow and keep the gradient and the broken underline.
- **button:** font: 500 17px/1 'Cormorant', 'Playfair Display', Georgia, serif; letter-spacing: 0.01em; padding: 13px 26px; border-radius: 999px; background: linear-gradient(135deg, #a8d0e6 0%, #b6cfd9 62%, #f6e7b2 138%); color: #3a3a3a; border: 1px solid rgba(58,58,58,.10); box-shadow: 0 10px 24px -14px rgba(90,120,150,.55); transition: transform 240ms cubic-bezier(.4,.14,.3,1), box-shadow 240ms cubic-bezier(.4,.14,.3,1), filter 240ms linear; :hover { transform: translateY(-2px); filter: brightness(1.03) saturate(1.06); box-shadow: 0 16px 30px -16px rgba(90,120,150,.55); } :active { transform: translateY(0); box-shadow: 0 6px 14px -10px rgba(90,120,150,.50); } :focus-visible { outline: 2px solid #3a3a3a; outline-offset: 3px; } — secondary variant: background #fdfaf2, border 1px solid rgba(58,58,58,.14), color #3a3a3a with a lavender #b8a7d6 wash on hover; disabled: background #f2ece0, color #8a8478, no transform, no shadow, cursor default.
- **input:** font: 400 17px/1.6 'EB Garamond', Georgia, serif; color: #3a3a3a; background: #fdfaf2; border: 1px solid rgba(58,58,58,.14); border-radius: 10px; padding: 13px 16px; box-shadow: inset 0 1px 0 rgba(255,255,255,.60), inset 0 0 20px rgba(168,208,230,.12); :placeholder { color: #8a8478; font-style: italic; } :focus { border-color: rgba(90,120,150,.45); box-shadow: inset 0 0 20px rgba(246,231,178,.35), 0 0 0 3px rgba(168,208,230,.35); outline: none; } — invalid: border-color #b5546a plus an italic EB Garamond sentence below in #b5546a, 'This line is still wet — try again.', so the error never relies on hue alone; the field never turns a saturated red.
- **statusbar:** height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 0 24px; background: linear-gradient(90deg, #f7f2e6 0%, #f2ece0 100%); border-top: 2px solid rgba(58,58,58,.10); border-image: repeating-linear-gradient(90deg, #f6c6c0 0 14px, transparent 14px 22px) 1; font: 13px/1.4 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: 0.02em; color: #3a3a3a; — the left side is a studio note in italic EB Garamond 15px #8a8478 ('Study in morning light, 09:40'), the right side is mono data (canvas size, revision, drying time) in #3a3a3a; a fresh change is prefixed by an 8px pastel daub — #a3c9a8 saved, #f6e7b2 still wet, #b5546a failed — and the daub brightens 6% over 420ms when its state changes.
- **menu:** vertical studio list, no bullets, 6px gap: item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; font: 400 19px/1.4 'EB Garamond', Georgia, serif; color: #3a3a3a; background: transparent; border-radius: 10px; border-left: 3px solid transparent; transition: background-color 240ms cubic-bezier(.4,.14,.3,1), color 240ms linear; } hover fills rgba(168,208,230,.18) with no transform; the selected row fills rgba(246,231,178,.34), keeps ink text, and paints its left edge with a 3px blush #f6c6c0 dashed brushstroke (12px on / 7px off) instead of a solid bar; group headers are Cormorant 600 14px Title Case in #8a8478 with a 24px broken rule trailing to the right, and item icons are single-color daubs, never emoji.
- **toggle:** a sun dial, 76px x 40px: track { background: linear-gradient(90deg, #dfeef6 0%, #f6e7b2 100%); border: 1px solid rgba(58,58,58,.10); border-radius: 999px; padding: 3px; box-shadow: inset 0 0 18px rgba(246,231,178,.45); } the 30px knob is a soft blob (border-radius: 48% 52% 55% 45% / 52% 46% 54% 48%) in #fdfaf2 with a 1px rgba(58,58,58,.10) edge and a 0 6px 14px -10px rgba(90,120,150,.55) contact shadow, translating 36px over 240ms cubic-bezier(.4,.14,.3,1); the track's warm half brightens 5% when the knob is on, the label sits above in EB Garamond italic 15px ('Dappled'), and the state is repeated as text ('On'/'Off') for screen readers.

## Copywriting

- Voice: A painter thinking out loud at the easel: unhurried, concrete, sensory, quietly delighted. Copy names the light and the color before it names the action ('The light is moving — 400 saved strokes.'), prefers one clean clause to three modifiers, and never sells, never jokes at the reader's expense, and never raises its voice. Instructions stay plain and short so the poetry lives in the framing, not in the labels.
- Case: headers=Title Case, commands=sentence case imperative ('Begin the study', 'Pin it to the wall'), body=sentence case
- Prefixes: Morning light — Afternoon light — Low sun — A note from the easel: Still wet: Drying:
- Verb table: start→BEGIN THE STUDY; stop→SET IT ASIDE TO DRY; save→PIN IT TO THE WALL; load→BRING IT TO THE EASEL; delete→SCRAPE THE PALETTE
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution'), growth language ('unlock', 'level up', 'supercharge', 'maximize'), deadpan system errors ('Invalid input.', 'An error occurred'), stacked exclamation marks, all-caps sentences, and loud urgency ('Hurry!', 'Last chance!'), emoji, mascots, and playful arrows used as bullets, art-historical jargon in user-facing labels ('impasto', 'scumbling', 'en plein air' as a button), any artist signature, artwork title, or painted image reproduced or imitated

## Do

- Build every large surface from two or three near-neighbour pastels in a gentle gradient, and let the dapple overlay fall across panels, headers, and empty space so the light looks like it is on one continuous canvas.
- Use the five pastels for fills, washes, borders, and daubs — and put all text in ink #3a3a3a, or in a deep ramp hue at 18px bold and up when color is unavoidable.
- Break every rule you draw: dashes of 10–18px, a wobbled 2px underline, an 8px daub instead of a bullet; nothing should look like a vector hairline pulled end to end.
- Dissolve edges with a 24–40px gradient or mask rather than blurring them, so softness reads as paint meeting canvas instead of a photographic depth of field.
- Set headings in Cormorant or Playfair Display 500–600 Title Case from 28px up with 1.15 line-height, body in EB Garamond 400 at 17–19px/1.65, and keep IBM Plex Mono to 13px data only.
- Animate like shifting light: 240–420ms ease-out, a 2px lift on hover, a warmth or brightness shift of a few percent, one breathing glow on focus — then rest.
- Draw decorative daubs from primitives (soft blob, broken dash, radial dapple, vignette wash) rather than shipping any painting, poster, or museum image.

## Don't

- No artworks, reproductions, crops, textures sampled from paintings, artist signatures, or museum wall labels — evocation comes from palette, edge, and light only.
- No neon, no high-saturation accent above roughly 35% saturation, no pure white cards, and no pure black text — the darkest value in the system is ink #3a3a3a.
- No hard offset shadows, no glow rings, no glassmorphism or backdrop-blur, and no more than one soft warm shadow per component.
- No 0-radius rectangles, no 1px full-width hairlines, and no crisp geometric dividers — a hard edge stops the surface reading as painted.
- No all-caps headings, no wide letter-spacing on display type, no script or handwriting fonts, and no mono type in running paragraphs.
- No springy or bouncy easing, no loops, no parallax that moves more than a few pixels, and no animation longer than 900ms.
- No saturated red error states, no color-only status (always add the word), and no small pastel text — it will fail contrast on cream every time.

## Accessibility

- Ink #3a3a3a on canvas #f7f2e6 clears AAA for body text, but sky #a8d0e6, blush #f6c6c0, leaf #a3c9a8, lavender #b8a7d6, and sunlight #f6e7b2 all fail as small text on cream — use them as fills and borders with ink on top, or step down to the deep ramp (#7fa8c9, #7fa885, #8f7cb5) at 18px semibold or larger.
- Danger #b5546a on cream sits near 4.3:1: keep error copy at 16px bold or larger, always pair the hue with the words and a visible border change rather than a red fill alone, and never communicate state by color only.
- Cormorant and Playfair Display are light-coloured at small sizes: hold display at 28px and up with weight 500 or higher, keep body at 17px/1.65 minimum, avoid long strings of italic, and never place body copy directly over the dapple overlay without raising the panel background toward #fdfaf2.
- Honor prefers-reduced-motion: stop the dapple drift, the hover lift, and the focus breathing, and swap them for instant brightness or border changes so nothing moves but state stays fully legible.
- Give every focusable element a visible 2px ink #3a3a3a focus ring with 3px offset, since pastel-on-pastel bounds are too low-contrast to act as a focus indicator on their own; keep the dapple overlay pointer-events: none so it never intercepts input.
- Keep body measure between 60 and 72 characters and paragraph spacing at 1.2em so the soft palette and generous leading never force a reader to re-find their place.

## Attribution / sources

- Impressionism — Monet, Renoir, Morisot, Pissarro, Sisley (aesthetic and technical reference for light and broken color) — https://en.wikipedia.org/wiki/Impressionism (evocation only, no artworks reproduced)
- Impressionist palette (canvas #f7f2e6, sky #a8d0e6, blush #f6c6c0, leaf #a3c9a8, lavender #b8a7d6, sunlight #f6e7b2, ink #3a3a3a) — mixed by eye toward low-saturation plein-air color, not sampled from any artwork — https://lospec.com/palette-list (palette/CC0 — evocation only, no artworks reproduced)
- Cormorant (Christian Thalmann, Catharsis Fonts) — https://github.com/google/fonts/tree/main/ofl/cormorant (OFL 1.1)
- Playfair Display (Claus Eggers Sørensen) — https://github.com/google/fonts/tree/main/ofl/playfairdisplay (OFL 1.1)
- EB Garamond (Georg Duffner, Octavio Pardo) — https://github.com/google/fonts/tree/main/ofl/ebgaramond (OFL 1.1)
- IBM Plex Mono (IBM / Mike Abbink, Bold Monday) — https://github.com/google/fonts/tree/main/ofl/ibmplexmono (OFL 1.1)
