# Fauvism / Wild Colour / Cut-Paper Planes — reference

Early-modernist gallery surface: warm cream canvas, wild arbitrary red/orange/yellow/green/blue set down as flat opaque planes inside 3px ink contours, simplified silhouettes, and depth made from a second colour block instead of a shadow.

**When to use:** When the user asks for Fauvism, Matisse or Derain, a wild-colour fine-art look, flat bold colour planes, cut-paper composition, a gallery or exhibition or museum site, poster-like flat colour, or an expressive painterly design system that is decorative without being skeuomorphic.

**Signature element:** The flat offset colour plane: one bold arbitrary Fauve hue set down as an opaque rectangle behind or beside the content and cut by a 3px ink contour — the block, not a shadow, is what gives the page its depth

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#f5efe2` |
| `surface` | `#fbf6ec` |
| `foreground` | `#221e1b` |
| `muted` | `#6f6a63` |
| `primary` | `#d7263d` |
| `accent` | `#26408b` |
| `danger` | `#a4161a` |
| `warning` | `#f2c14e` |
| `success` | `#2a9d8f` |

### Variant: `fauve`

| Key | Value |
|---|---|
| `cream` | `#f5efe2` |
| `paper` | `#fbf6ec` |
| `cinnabar` | `#d7263d` |
| `orange` | `#f46036` |
| `saffron` | `#f2c14e` |
| `viridian` | `#2a9d8f` |
| `ultramarine` | `#26408b` |
| `ink` | `#221e1b` |
| `muted` | `#6f6a63` |

### Variant: `fauveRamps`

| Key | Value |
|---|---|
| `red` | `#f0a6ae/#d7263d/#9e1b2e` |
| `orange` | `#fbd0b7/#f46036/#bf3f18` |
| `yellow` | `#f9e5b4/#f2c14e/#c99a26` |
| `green` | `#a9d9d1/#2a9d8f/#1c6f66` |
| `blue` | `#9fadd4/#26408b/#16285c` |
| `cream` | `#fffdf7/#f5efe2/#e3d8c3` |
| `ink` | `#5d5751/#221e1b/#000000` |

### Variant: `planes`

| Key | Value |
|---|---|
| `canvas` | `#f5efe2` |
| `dominant` | `#26408b` |
| `counter` | `#d7263d` |
| `accent` | `#f2c14e` |
| `ground` | `#2a9d8f` |
| `wash` | `#f46036` |
| `contour` | `#221e1b` |


### Typography

- Display: "Fredoka", "Montserrat", "system-ui", "sans-serif"
- Mono: "IBM Plex Mono", "ui-monospace", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `6px` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=32px` `xl=48px` |
| shadow.hard | `none — elevation is an offset colour plane (transform: translate(10px, 10px) on a ::before block), never a box-shadow` |
| shadow.glow | `none` |
| motion.easing | `cubic-bezier(.22, 1, .36, 1)` |
| motion.cursor | `default` |
| motion.durations | `0ms` `160ms` `280ms` `480ms` |
| effects.scanlines | `none` |
| effects.vignette | `radial-gradient(ellipse at 50% 0%, rgba(242,193,78,.08) 0%, rgba(245,239,226,0) 55%)` |
| effects.pixelate | `none` |

## Work-style rules

- Colour is arbitrary, never literal: a plane takes the hue that sings against its neighbour — a wall can be red, a field blue-green — but the palette never leaves the six Fauve hues plus cream and ink.
- One idea per plane: every block is a single colour at full opacity, flat and unmodulated. No gradients inside a shape, no alpha tints, no two shades of one hue layered as if they were light.
- Draw the contour: every plane and every interactive element carries the same 3px #221e1b ink stroke, so colour sits inside a drawn line the way gouache sits inside a charcoal outline.
- Depth is a second plane, not a shadow: elevation is an offset colour rectangle behind the surface (transform: translate(10px, 10px), 3px ink border) or a 3px ink rule — box-shadow stays none and nothing in the system blurs.
- Keep the cream canvas #f5efe2 exposed and let colour take at most about 40% of the viewport; 32–48px margins and one dominant plane per screen make the colour look placed rather than poured.
- Set display copy in Fredoka 700 at 24px and up with tracking tightened to -0.01em, body copy in Montserrat 400/500 at 17–18px/1.6, and reserve IBM Plex Mono for figures, dates, dimensions, and catalogue numbers.
- Simplify the form to its loudest readable silhouette — circle, arc, wedge, block — and keep decorative cut-paper shapes in the margins where they carry no words.
- Move with confident, slow hands: 160–480ms on cubic-bezier(.22, 1, .36, 1), planes wiping in with clip-path or cross-fading in place. No bounce, no spring overshoot, no infinite shimmer.
- Stay evocation-only: borrow palette logic, flatness, and decorative rhythm from Fauvism — never a painting, poster, signature, or museum image.

## Component recipes

- **panel:** background: #fbf6ec; border: 3px solid #221e1b; border-radius: 6px; padding: 32px; color: #221e1b; box-shadow: none; position: relative; — depth is a ::before plane: content: ''; position: absolute; inset: 0; transform: translate(10px, 10px); background: #f2c14e; border: 3px solid #221e1b; border-radius: inherit; z-index: -1; swap the plane colour by role (#26408b informational, #d7263d primary, #2a9d8f success) and allow exactly one plane per panel; a full-bleed 12px colour band across the panel's top edge may carry the section hue; headings inside are Fredoka 700 26px/1.15 Title Case in #221e1b, and below 640px the offset plane drops to 6px and loses its border so it never crowds the text.
- **button:** font: 700 17px/1 'Fredoka', 'Montserrat', system-ui, sans-serif; letter-spacing: 0.01em; padding: 15px 28px; border-radius: 6px; background: #d7263d; color: #f5efe2; border: 3px solid #221e1b; box-shadow: none; transition: transform 160ms cubic-bezier(.22,1,.36,1), background-color 160ms linear; :hover { background: #b91c31; transform: translate(-2px, -2px); } :active { transform: translate(1px, 1px); } :focus-visible { outline: 3px solid #26408b; outline-offset: 3px; } — secondary: background #f5efe2, color #221e1b, border 3px solid #26408b, hover fills #26408b with cream text; quiet/tertiary: no fill, 3px ink underline at 4px offset that thickens to 5px on hover; disabled: background #e3d8c3, color #6f6a63, border-color #6f6a63, no transform and no hover.
- **input:** font: 16px/1.6 'IBM Plex Mono', ui-monospace, monospace; color: #221e1b; background: #fdf9f0; border: 3px solid #221e1b; border-radius: 6px; padding: 13px 16px; box-shadow: none; caret-color: #d7263d; :placeholder { color: #6f6a63; font: 400 16px 'Montserrat', system-ui, sans-serif; } :focus { border-color: #26408b; outline: 3px solid #26408b; outline-offset: 2px; background: #fffdf7; } — the 3px stroke never thins on focus; invalid state keeps the 3px weight, sets border-color #a4161a and adds a 16px Montserrat sentence below in #a4161a ('That is not a number we can use.'), so the error never rests on colour alone; every field carries a Montserrat 600 14px ink label above it instead of using the placeholder as the label.
- **statusbar:** height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 32px; padding: 0 24px; background: #26408b; color: #f5efe2; border-top: 3px solid #221e1b; border-radius: 6px 6px 0 0; font: 13px/1.4 'IBM Plex Mono', monospace; letter-spacing: 0.04em; segments are split by border-left: 3px solid rgba(245,239,226,.45) and each reads label-then-value ('PLANES 04', 'PIGMENT 06'); the live value is #f2c14e (5.7:1 on the blue), and state is a 10px colour square plus a cream word ('Saved', 'Unsaved', 'Error') — never colour alone; the trailing slot holds one cream-outlined secondary button at 40px height.
- **menu:** no bullets, 4px gap, rows are flat planes rather than boxes: item { display: flex; align-items: center; gap: 14px; padding: 12px 18px; font: 600 17px/1.3 'Fredoka', 'Montserrat', system-ui, sans-serif; color: #221e1b; background: transparent; border: 3px solid transparent; border-radius: 6px; } selected row fills #f2c14e with a 3px #221e1b border and a 6px ink bar flush to its left edge; hover shows only the 3px #26408b border and no fill, so selection always outranks hover; section headers are Montserrat 700 12px uppercase at letter-spacing 0.14em in #6f6a63 with no stroke; keep one column of cream gutter beside the rail so colour never presses against the page edge.
- **plane:** the signature block: position: relative; background: #f5efe2; border: 3px solid #221e1b; border-radius: 6px; a solid second-hue rectangle sits either behind it (::before, transform: translate(10px, 10px)) or beside it as a full-height 8px–48px vertical band; planes may bleed past the container edge by up to 32px and may be clipped by an organic border-radius (64px 6px 64px 6px) when the shape is decorative; a plane never sits behind running text without first clearing to #fbf6ec, and two planes never overlap a third colour except where a contour separates them.

## Copywriting

- Voice: Vivid and plain-spoken, like a confident studio hand talking across the room: short declarative sentences, one bright modifier each, and colour words used as verbs ('paint the panel red', 'strip it back to cream'). Numbers are quoted like a wall label — height, year, count — and the reader is treated as someone who came to look, not to be lectured. Warm, opinionated, never precious, and never art-history name-dropping for its own sake.
- Case: headers=Title Case, commands=sentence case imperative ('Paint the plane', 'Set the figure down'), body=sentence case
- Prefixes: [SALON] [STUDIO] [COLOUR] [NOTE] [WILD]
- Verb table: start→PAINT; stop→PUT DOWN THE BRUSH; save→PIN IT TO THE WALL; load→LIFT IT FROM THE STACK; delete→STRIP THE CANVAS
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution', 'elevate your brand'), deadpan system errors ('Invalid input.', 'An error occurred', 'Something went wrong'), art-history jargon dumps and wall-text padding that explains the painting instead of the page, apologetic loading copy ('Sorry, just a moment') and hedges ('maybe', 'perhaps', 'might want to'), emoji, and dialogue or slogans lifted from any existing artwork or exhibition, stacked punctuation (!!!, ???) and all-caps sentences longer than three words, titles of real paintings cited as if the interface owned them

## Do

- Choose each plane's colour by what it does to its neighbour, not by what the object is — red beside green, blue under orange — and keep every fill at full opacity.
- Wrap every shape in the same 3px #221e1b ink contour so blocks read as drawn and cut out rather than rendered.
- Build depth from an offset colour plane or a 3px ink rule; leave box-shadow at none and never blur an edge.
- Leave the cream ground #f5efe2 plainly visible between planes, and give the composition 32–48px margins plus one dominant block per screen.
- Set headings in Fredoka 700 Title Case from 24px up with -0.01em tracking and body in Montserrat 400/500 at 17–18px/1.6; keep IBM Plex Mono for figures and catalogue data only.
- Simplify every motif to one silhouette — a circle for a sun or fruit, an arc for a back or a wave, a wedge for a leaf, a block for a wall — so the shape survives at 24px.
- Animate one plane at a time: a clip-path wipe or an in-place cross-fade over 160–480ms, settled on cubic-bezier(.22, 1, .36, 1), then hold still.
- Pair every colour-coded state with a word, and put ink or cream text on a plane only where the measured contrast allows it.

## Don't

- No real artworks: no painting, poster, drawing, signature, logo, or museum photograph, and no traced copy of a Fauvist composition — evocation through palette, flatness, and layout only.
- No gradients, alpha washes, glassmorphism, backdrop-blur, or tinted overlays; a plane is one opaque colour inside one ink line.
- No box-shadows, no blurred or glowing depth, no bevels, no embossing, no inner highlights — any soft edge reads as rendered UI and kills the gouache flatness.
- No literal colour: never make a sky blue just because it is a sky, and never reduce the palette to a pastel or muted scheme.
- No hairline borders, pill buttons, or 1px dividers — the smallest line weight in the system is 3px ink, and 6px is the only radius.
- No more than one second colour in a single component (the offset plane), and no third hue used as decoration inside it.
- No spring bounce, infinite shimmer, parallax drift, or slow ease-in-out fades over 480ms, and no texture overlays that imitate canvas or paper grain at scale.

## Accessibility

- Ink #221e1b on cream #f5efe2 is roughly 14.6:1 and blue #26408b on cream about 8.4:1, so those carry body copy; red #d7263d on cream measures about 4.3:1 and green #2a9d8f about 2.8:1, so red is limited to 19px-plus bold or bigger type and green to fills, contours, and large labels with ink #221e1b text on top (ink on green is about 5.1:1).
- Yellow #f2c14e and orange #f46036 on cream are 1.5:1 and 2.8:1 — strictly decorative fills; any word set on them is ink #221e1b (about 10:1 on yellow), and never place cream text on either.
- Fredoka stays at 20px and up for headings with 1.15–1.25 line-height, Montserrat carries all body text at 17–18px/1.6, and IBM Plex Mono never goes below 13px; widened tracking is for uppercase micro-labels only, never for paragraphs.
- Honor prefers-reduced-motion: swap every plane wipe and cross-fade for an instant state change, and keep hover feedback as a border or colour shift rather than a transform so nothing slides.
- Never let colour alone carry meaning — pair each plane and status square with a written label, give decorative cut-paper shapes aria-hidden with no text on them, and keep a visible 3px #26408b focus ring at 3px offset on every focusable element, including rows and links inside a selected yellow menu item.

## Attribution / sources

- Fauvism (Henri Matisse, André Derain, Maurice de Vlaminck; Salon d'Automne, 1905) — aesthetic reference — https://en.wikipedia.org/wiki/Fauvism (evocation only, no artworks reproduced)
- Fauve palette (red #d7263d, orange #f46036, yellow #f2c14e, green #2a9d8f, blue #26408b, cream #f5efe2) — derived by eye from Fauvist canvases, not sampled from any artwork file — https://lospec.com/palette-list (palette/CC0 — evocation only, no artworks reproduced)
- Henri Matisse cut-paper technique (gouaches découpés / cut-outs, Jazz, 1947) — technique reference — https://en.wikipedia.org/wiki/Cut-out_(art) (evocation only, no artworks reproduced)
- Fredoka (Hafontia / Milena Brandão) — https://github.com/google/fonts/tree/main/ofl/fredoka (OFL 1.1)
- Montserrat (Julieta Ulanovsky) — https://github.com/google/fonts/tree/main/ofl/montserrat (OFL 1.1)
- IBM Plex Mono (IBM) — https://github.com/google/fonts/tree/main/ofl/ibmplexmono (OFL 1.1)
