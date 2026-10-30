# Bauhaus / Functional Geometry — reference

Bauhaus school interface: cream ground, primary red/blue/yellow with black rules, radius 0, strict 4px grid, and a circle/square/triangle vocabulary that always does a job.

**When to use:** When the user asks for Bauhaus, Weimar/Dessau, functionalist or geometric-abstraction design, primary-color posters, a strict grid with circle/square/triangle motifs, or modernist 1920s print typography applied to a UI.

**Signature element:** The primary-shape composition: a red #e23c2e circle, a blue #1b5fa8 square, and a yellow #f2c014 equilateral triangle set on the same strict grid baseline — three flat shapes, no gradients, that alone identify the mode

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#f2efe6` |
| `surface` | `#ffffff` |
| `foreground` | `#141414` |
| `muted` | `#5f5a50` |
| `primary` | `#e23c2e` |
| `accent` | `#1b5fa8` |
| `danger` | `#b3241b` |
| `warning` | `#f2c014` |
| `success` | `#123f70` |

### Variant: `bauhaus`

| Key | Value |
|---|---|
| `cream` | `#f2efe6` |
| `paper` | `#ffffff` |
| `red` | `#e23c2e` |
| `blue` | `#1b5fa8` |
| `yellow` | `#f2c014` |
| `ink` | `#141414` |
| `muted` | `#5f5a50` |
| `shade` | `#d8d2c4` |

### Variant: `primaryRamps`

| Key | Value |
|---|---|
| `red` | `#f4a49d/#e23c2e/#b3241b` |
| `blue` | `#8fb4d9/#1b5fa8/#123f70` |
| `yellow` | `#f8dd8f/#f2c014/#c99a06` |
| `ink` | `#6b6b6b/#141414/#000000` |
| `cream` | `#ffffff/#f2efe6/#d8d2c4` |

### Variant: `geometry`

| Key | Value |
|---|---|
| `circle` | `#e23c2e` |
| `square` | `#1b5fa8` |
| `triangle` | `#f2c014` |
| `line` | `#141414` |
| `ground` | `#f2efe6` |
| `surface` | `#ffffff` |


### Typography

- Display: "Archivo", "Josefin Sans", "Helvetica Neue", "Arial", "system-ui", "sans-serif"
- Mono: "IBM Plex Mono", "ui-monospace", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=32px` `xl=64px` |
| shadow.hard | `8px 8px 0 #141414` |
| shadow.glow | `none` |
| motion.easing | `cubic-bezier(0.2, 0, 0, 1)` |
| motion.cursor | `default` |
| motion.durations | `0ms` `120ms` `200ms` `400ms` |
| effects.scanlines | `none` |
| effects.vignette | `none` |
| effects.pixelate | `none` |

## Work-style rules

- Every form must be a circle, a square, or an equilateral triangle — those three primitives carry all iconography, badges, markers, and decoration, and anything else must be a rule, a rectangle of text, or a block of flat color.
- Spend color by role, never by mood: red #e23c2e is action, blue #1b5fa8 is information, link, and focus, yellow #f2c014 is attention and warning, ink #141414 is structure and text, and cream #f2efe6 / #ffffff are the ground. A surface holds one accent plus ink.
- Everything lands on the 4px unit, which doubles to 8/16/32/64px — padding, gaps, rule weights, icon sizes, and grid line positions are all multiples, and nothing is optically nudged off the grid.
- Radius is 0 everywhere: panels, buttons, inputs, images, and avatars are rectangles. The only curves in the system are true circles used as shapes or iconography, and they are never used as a corner treatment.
- Elevation is one hard offset with zero blur — 4px 4px 0 #141414 for controls, 8px 8px 0 #141414 for panels — and pressing translates the element by exactly its offset with the shadow collapsed to 0 0 0. No glow, no gradient, no ambient blur, no vignette.
- Structure is drawn with 2px ink rules: a 2px #141414 rule under a heading, a 2px rule between rows, a 2px rule at the top of a status bar. Hairlines thinner than 1px and borders thicker than 2px are outside the system.
- Set display type lowercase — the Bayer-style all-lowercase geometric voice — in Archivo 700 from 20px up with letter-spacing 0.02em, use Josefin Sans only as a geometric accent face, and keep IBM Plex Mono strictly for data: labels, units, indices, and table cells.
- Motion is crisp and geometric: 120–200ms with cubic-bezier(0.2,0,0,1), translation and colour swap only, one 400ms reveal for a section that assembles. Nothing bounces, springs, overshoots, pulses, or loops.
- Asymmetry is composed, not accidental: balance a heavy ink block against a small saturated shape on the grid, and leave a full module of empty cream around a hero composition so the geometry can breathe.

## Component recipes

- **panel:** background: #ffffff; border: 2px solid #141414; border-radius: 0; padding: 32px; color: #141414; box-shadow: 8px 8px 0 #141414; — the heading sits above a 2px #141414 bottom rule with 16px of space beneath it, and one 24px primary shape (red #e23c2e circle, blue #1b5fa8 square, or yellow #f2c014 triangle) is pinned at the top-left as the panel's index mark, no more than one shape per panel; the panel rests on the cream ground #f2efe6 rather than floating, and there is no inner shadow, gradient, or rounded corner anywhere in it.
- **button:** font: 700 14px/1 'Archivo', 'Josefin Sans', system-ui, sans-serif; text-transform: lowercase; letter-spacing: 0.02em; background: #e23c2e; color: #f2efe6; border: 2px solid #141414; border-radius: 0; padding: 16px 24px; box-shadow: 4px 4px 0 #141414; transition: transform 120ms cubic-bezier(0.2,0,0,1), box-shadow 120ms cubic-bezier(0.2,0,0,1), background-color 120ms linear; :hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #141414; } :active { transform: translate(4px, 4px); box-shadow: 0 0 0 #141414; } :focus-visible { outline: 2px solid #1b5fa8; outline-offset: 3px; } — secondary variant: background #ffffff, color #141414, box-shadow 4px 4px 0 #1b5fa8; disabled: background #f2efe6, color #5f5a50, border-color #5f5a50, box-shadow none, and no transform on press.
- **input:** background: #ffffff; color: #141414; font: 16px/1.5 'IBM Plex Mono', ui-monospace, monospace; border: 2px solid #141414; border-radius: 0; padding: 12px 16px; caret-color: #e23c2e; box-shadow: inset 0 0 0 1px #f2efe6; :placeholder { color: #5f5a50; text-transform: lowercase; font: 14px/1.5 'Archivo', system-ui, sans-serif; } :focus { outline: 2px solid #1b5fa8; outline-offset: 2px; } — label above in 11px 'IBM Plex Mono' lowercase at 0.16em letter-spacing in #5f5a50, plus a 4px blue #1b5fa8 square before it as the field mark; invalid state sets border-color #b3241b and pairs a small solid triangle glyph with a sentence below ('this field needs a value.') in #b3241b, so the error never rests on the red border alone.
- **statusbar:** height: 40px; display: flex; align-items: center; justify-content: space-between; gap: 32px; padding: 0 24px; background: #f2efe6; border-top: 2px solid #141414; border-radius: 0; font: 12px/1 'IBM Plex Mono', monospace; text-transform: lowercase; letter-spacing: 0.04em; color: #141414; leading segment is the mode label prefixed by a 12px red #e23c2e circle; state is printed as shape plus word — filled ink square 'saved', blue square 'running', yellow triangle 'review', red circle 'live' — and numerals are tabular; segments are separated by 1px rules of rgba(20,20,20,.2), the only sub-2px line permitted and only inside this bar.
- **menu:** vertical list, no bullets, no radius: item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; font: 600 16px/1.3 'Archivo', system-ui, sans-serif; text-transform: lowercase; color: #141414; background: #f2efe6; border-bottom: 2px solid #141414; } each row leads with a 12px shape that names its section; the selected row fills #141414 with #f2efe6 text and its leading shape switches to yellow #f2c014, and hover only steps the shape 4px right instead of lifting the row — no shadow, no translate, no rounded highlight; group headers are 11px 'IBM Plex Mono' lowercase at 0.16em in #5f5a50 over a 2px #1b5fa8 left rule.
- **toggle:** square switch, 48px x 48px: plate { background: #ffffff; border: 2px solid #141414; border-radius: 0; display: grid; place-items: center; } the inner 24px square is empty (background #f2efe6, 2px #141414 stroke) when off and fills solid #1b5fa8 when on, sliding 0 → 12px inline-start over 120ms cubic-bezier(0.2,0,0,1) with no spring or overshoot; the label sits to the right in 14px 'Archivo' lowercase and the state is repeated as text ('on'/'off') for screen readers — no rounded track, no knob, no glow.

## Copywriting

- Voice: Functional and geometric: the interface states what a thing is and what it does, in the fewest lowercase words that stay clear. Sentences are short, declarative, and unadorned, nouns are concrete, and every label reads like a caption on a well-built object rather than marketing copy. Nothing is decorative, nothing is cute, and nothing apologises.
- Case: headers=lowercase, Bayer-style (no capitals in display type), commands=lowercase imperative ('make', 'add', 'send'), body=sentence case with lowercase display headings
- Prefixes: 01 02 03 04 05
- Verb table: start→begin; stop→end; save→set; load→open; delete→remove
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution'), decorative adjectives and superlatives ('stunning', 'amazing', 'revolutionary'), emoji, mascots, and illustrated characters, apologetic or chatty system copy ('Oops!', 'Sorry about that', 'Just a moment'), all-caps headings, italics, and exclamation marks, ornamental rules, flourishes, and dividers with no structural job, slogans or manifesto lines in product chrome

## Do

- Build every composition from three primitives — circle, square, triangle — plus flat rules, and give each shape exactly one meaning on a screen (action, state, or attention).
- Run one accent color per surface against cream and ink: red for action, blue for information and focus, yellow for attention, never all three as equal-weight decoration.
- Snap everything to the 4px unit and its doubling scale (4/8/16/32/64), including rule weights, icon sizes, and grid lines, so the page reads as constructed rather than arranged.
- Keep radius 0 on every rectangle, 2px ink borders, and a single hard offset shadow per element that collapses when the element is pressed.
- Set display type lowercase in Archivo 700 at 20px and up with 1.1–1.2 line-height, and let Josefin Sans carry small geometric accent words only.
- Put all numeric and label data in IBM Plex Mono at 12–13px with tabular numerals and 0.04em–0.16em letter-spacing, always paired with a 4px square or 12px circle mark.
- Leave a full module of cream empty around the signature composition, and balance mass with asymmetry — a heavy ink block against a single saturated shape.

## Don't

- No non-primitive shapes: no stars, blobs, squiggles, arrows drawn as curves, or organic illustration — the vocabulary is circle, square, triangle, line, rectangle.
- No gradients, glassmorphism, backdrop-blur, neon glow, or blurred shadows; depth is one hard zero-blur offset or nothing at all.
- No scanlines, pixelation, grain, or vignette — this is a printed poster surface, not a screen simulation, so keep effects none and image-rendering auto.
- No rounded corners anywhere, and no circles used as a corner or pill treatment — a circle is a shape, not a border-radius.
- No bounce, spring, overshoot, pulse, or looping animation; motion is a 120–200ms translation or colour swap with a crisp ease-out.
- No all-caps headings, italics, letter-spaced body copy, or paragraphs set in IBM Plex Mono.
- No decoration without a job: remove any line, dot, or colour that cannot explain what it communicates.

## Accessibility

- Ink #141414 on cream #f2efe6 and on white #ffffff clears 4.5:1 comfortably and carries all body copy; blue #1b5fa8 on cream reads about 5.7:1 and is safe for links. Red #e23c2e (≈3.7:1 on cream) and yellow #f2c014 fail for text, so they are fills, 2px strokes, shape marks, and 20px+ bold display words only — never paragraph or form-value text.
- Set body copy at 16px minimum with 1.5 line-height in Archivo 400/500 or 16px/1.5 in IBM Plex Mono; lowercase display headings keep 1.1–1.2 line-height and stay at 20px or above, and no synthetic bold or italic is used to fake hierarchy.
- Never encode state with colour or shape alone: every red/yellow/blue signal carries a word ('live', 'review', 'saved', 'error') and, where a shape is the marker, a text label beside it — the yellow triangle warning always ships with its sentence.
- Keep a visible 2px #1b5fa8 focus ring at 3px offset on every focusable element, give shape-only icon buttons an accessible name, and honour prefers-reduced-motion by rendering all translations as instant state changes and dropping the 400ms section reveal.

## Attribution / sources

- Bauhaus (Staatliches Bauhaus, Weimar/Dessau, 1919–1933) — aesthetic reference — https://en.wikipedia.org/wiki/Bauhaus (evocation only, no artworks reproduced)
- Bauhaus primary palette (cream #f2efe6, red #e23c2e, blue #1b5fa8, yellow #f2c014, black #141414, white #ffffff) — derived by eye from Bauhaus-era print and signage, not sampled from any artwork file — https://www.bauhaus.de/ (palette — evocation only, no artworks reproduced)
- Archivo (Omnibus-Type) — https://github.com/google/fonts/tree/main/ofl/archivo (OFL 1.1)
- Josefin Sans (Santiago Orozco) — https://github.com/google/fonts/tree/main/ofl/josefinsans (OFL 1.1)
- IBM Plex Mono (IBM) — https://github.com/google/fonts/tree/main/ofl/ibmplexmono (OFL 1.1)
