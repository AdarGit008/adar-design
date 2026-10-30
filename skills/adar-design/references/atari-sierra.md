# Atari / Sierra Logo Treatment — reference

Sliced 80s publisher logos: a wordmark or divider cut into horizontal bands that step thick-to-thin, filled with a red/orange/yellow/green/blue rainbow over a near-black or silver field.

**When to use:** When the user asks for Atari/Sierra-era logo treatment, rainbow stripes, a sliced or thickness-gradient wordmark, a game title screen, or an 80s publisher-brand surface.

**Signature element:** The horizontal-slice thickness-gradient wordmark and divider: a title or rule cut into five stacked bands whose heights step thick-to-thin (8/6/4/3/2px) in red-orange-yellow-green-blue, each band plate-shifted 1px like slices off a printed logo.

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#0a0a0d` |
| `surface` | `#16171c` |
| `foreground` | `#ececee` |
| `muted` | `#86878f` |
| `primary` | `#e8402a` |
| `accent` | `#f5c518` |
| `danger` | `#ff4b3e` |
| `warning` | `#f08a24` |
| `success` | `#52b545` |

### Variant: `rainbowStripe`

| Key | Value |
|---|---|
| `red` | `#e8402a` |
| `orange` | `#f08a24` |
| `yellow` | `#f5c518` |
| `green` | `#52b545` |
| `blue` | `#2f7fe0` |
| `ink` | `#0a0a0d` |
| `paper` | `#ececee` |

### Variant: `sliceRamp`

| Key | Value |
|---|---|
| `band1` | `#e8402a/#f08a24/#f5c518/#52b545/#2f7fe0` |
| `thicknessPx` | `8/6/4/3/2` |
| `totalPx` | `23` |
| `scales` | `1x/2x/3x integer only` |
| `inverse` | `#0a0a0d on #ececee` |

### Variant: `silverField`

| Key | Value |
|---|---|
| `bg` | `#c9cbd1` |
| `surface` | `#dfe0e4` |
| `ink` | `#0a0a0d` |
| `muted` | `#5d5f67` |
| `red` | `#d4341f` |
| `orange` | `#e07a14` |
| `yellow` | `#e0ae0c` |
| `green` | `#3f9c36` |
| `blue` | `#2668c4` |

### Variant: `boxArt`

| Key | Value |
|---|---|
| `bg` | `#0a0a0d` |
| `panel` | `#16171c` |
| `rule` | `#2a2b33` |
| `highlight` | `#f5c518` |
| `shadow` | `#000000` |
| `glow` | `#2f7fe0` |


### Typography

- Display: "Audiowide", "Orbitron", "Space Grotesk", "sans-serif"
- Mono: "Space Mono", "IBM Plex Mono", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=24px` `xl=32px` |
| shadow.hard | `6px 6px 0 #000000` |
| shadow.glow | `0 0 6px rgba(47,127,224,0.45)` |
| motion.easing | `steps(5, end)` |
| motion.cursor | `steps(2, jump-none) 1s infinite` |
| motion.durations | `0ms` `120ms` `360ms` `900ms` |
| effects.scanlines | `repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,0,0,0.22) 2px 3px)` |
| effects.vignette | `radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(0,0,0,0.65) 100%)` |
| effects.pixelate | `pixelated` |

## Work-style rules

- The slice stack is the system: five horizontal bands of decreasing thickness — 8px red #e8402a, 6px orange #f08a24, 4px yellow #f5c518, 3px green #52b545, 2px blue #2f7fe0 (23px total). Never reorder, resample, or re-weight the bands; scale the whole 23px stack by integer factors only.
- A wordmark is built by slicing letterforms, not by outlining them: split the display text into the same five bands, give each band its own row height and a 1px horizontal plate shift, and let the changing band thickness carry the logo effect. Band spacing stays constant — the thickness is the only variable.
- Rainbow is structural, never decorative: it appears only as the banded slice stack (wordmark, divider, panel rule, statusbar chip) or as a legitimate 5-stop stripe. No rainbow gradients, no blurred rainbow glows, no rainbow background washes behind body copy.
- Field is either near-black #0a0a0d or silver #c9cbd1 — pick one per surface. The dark field carries the saturated rainbow; the silver field uses the desaturated silverField variant so the stripes stay legible against #c9cbd1.
- Type is uppercase geometric display: Audiowide (or Orbitron) for wordmarks, titles, buttons, and section heads at 0.02em–0.08em tracking; Space Mono for body, labels, table data, and numeric readouts at 0.12em tracking when uppercase.
- Geometry is orthogonal: radius 0, no diagonal cuts, no circles, no bevels. Every edge is a horizontal line, and every block of color is a rectangle whose only dimension that varies is its height.
- Elevation is a hard offset only — 6px 6px 0 #000000 for detached plates, none for slices. The slice stack itself provides the visual depth of the system, so slices never cast shadows and never sit on a blurred one.
- Motion is stepped in five beats: bands reveal top-to-bottom in rainbow order at steps(5, end) with 0/120/360/900ms durations. No eased fades, no rotations, no scaling wordmarks on hover — a band wipe or an instant state change only.

## Component recipes

- **panel:** background: #16171c; color: #ececee; border: 0; border-radius: 0; padding: 24px 32px; box-shadow: 6px 6px 0 #000000; — the frame is a 23px slice stack pinned to the top edge: background-image: linear-gradient(to bottom, #e8402a 0 8px, #f08a24 8px 14px, #f5c518 14px 18px, #52b545 18px 21px, #2f7fe0 21px 23px); background-repeat: no-repeat; background-size: 100% 23px; second line uses background-position: top; the body fill is a separate element below the 23px band so the band never repeats behind text. Optional scanline overlay from effects.scanlines at 100% cover with pointer-events: none; below 640px drop the shadow and keep the band.
- **button:** font: 400 14px/1 'Audiowide'; text-transform: uppercase; letter-spacing: 0.06em; background: #f5c518; color: #0a0a0d; border: 0; border-radius: 0; padding: 12px 20px; box-shadow: 4px 4px 0 #000000; transition: none; :hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000000; background-image: effects.sliceStackHairline; background-size: 100% 12px; background-repeat: no-repeat; padding-top: 24px; } :active { transform: translate(4px, 4px); box-shadow: 0 0 0 #000000; } :focus-visible { outline: 3px solid #2f7fe0; outline-offset: 3px; } — secondary: #16171c fill, #ececee text, 23px slice stack as a 5px left column instead of the top band; destructive swaps fill to #ff4b3e with #0a0a0d text and never uses the rainbow.
- **input:** background: #0a0a0d; color: #ececee; font: 16px/1.5 'Space Mono'; border: 0; border-bottom: 3px solid #2a2b33; border-radius: 0; padding: 8px 12px; caret-color: #f5c518; :placeholder { color: #86878f; text-transform: uppercase; letter-spacing: 0.12em; font-size: 12px; } :focus { border-bottom: 0; background-image: linear-gradient(to bottom, #e8402a 0 5px, #f08a24 5px 8px, #f5c518 8px 10px, #52b545 10px 11px, #2f7fe0 11px 12px); background-repeat: no-repeat; background-position: bottom; background-size: 100% 12px; padding-bottom: 17px; outline: none; } — the focus state swaps the hairline for the full 12px micro-slice; invalid state keeps a 3px #ff4b3e underline plus a Space Mono sentence-case message, never color alone.
- **statusbar:** height: 28px; display: flex; align-items: center; gap: 24px; padding: 0 16px; background: #0a0a0d; border-top: 1px solid #2a2b33; font: 12px/1 'Space Mono'; text-transform: uppercase; letter-spacing: 0.12em; color: #ececee; the leading cell is a 23px wide vertical slice stack (columns rotate the rainbow: #e8402a 0 8px, #f08a24 8px 14px, #f5c518 14px 18px, #52b545 18px 21px, #2f7fe0 21px 23px) with no label inside; segments separated by 1px #2a2b33 rules; live value in #f5c518, warning #f08a24, critical #ff4b3e; the blinking block cursor is 8px wide and animates steps(2, jump-none) 1s infinite.
- **menu:** horizontal rail: item { display: inline-block; font: 400 13px/1 'Audiowide'; text-transform: uppercase; letter-spacing: 0.08em; padding: 12px 16px 15px; color: #ececee; border-radius: 0; } the selected item keeps its plate #16171c, turns #f5c518, and gains the 12px hairline slice stack as an under-rule (background-position: bottom, background-size: 100% 12px, no-repeat) plus box-shadow 4px 4px 0 #000000; hover only lightens the label to #ffffff and never animates; group separators are 1px #2a2b33 vertical rules, and dropdowns are 1px #2a2b33 frames on #16171c with the selected row carrying the full 23px band on its left edge.

## Copywriting

- Voice: Publisher catalog and game-box label: confident, second-person, short declarative lines that name the thing and invite the action. It reads like the front of a 1983 box — a title, a one-line promise, three feature bullets — never like a SaaS landing page and never with a joke the machine is winking at.
- Case: headers=UPPERCASE, commands=UPPERCASE, body=sentence case for Space Mono running text; UPPERCASE for labels, buttons, and numeric readouts
- Prefixes: ▶ [SELECT] [OPTION] [PLAY] [SYS]
- Verb table: start→PRESS START / BEGIN; stop→END SESSION; save→SAVE GAME; load→CONTINUE; delete→ERASE SAVE
- Avoid: corporate filler ('seamless', 'empower', 'solution', 'leverage'), soft hedges ('maybe', 'perhaps', 'might want to'), emoji and modern flat iconography, stacked punctuation (!!!, ???) and exclamation-heavy body copy, Audiowide for paragraph text or below 14px, reproducing or approximating a real trademarked logo or wordmark, more than two rainbow bands on one component as decoration

## Do

- Build every hero wordmark as a five-band horizontal slice: the same text split into red 8px, orange 6px, yellow 4px, green 3px, blue 2px rows with a 1px plate shift per band, so the thickness gradient is the logo.
- Keep the 23px slice stack ratio (8/6/4/3/2) everywhere it appears — divider, panel rule, button hover, input focus, statusbar chip — and scale it only by whole multiples.
- Choose one field per surface: #0a0a0d with the saturated rainbow, or #c9cbd1 with the desaturated silverField variant.
- Set wordmarks, headings, and buttons in Audiowide or Orbitron uppercase at 0.02em–0.08em tracking, and keep the display strings to one to four words.
- Use Space Mono for all running text, labels, and numeric readouts, uppercase at 0.12em tracking for labels and sentence case for paragraphs.
- Treat the slice stack as the only depth cue: slices are flat and shadowless, and detached plates take the single hard 6px 6px 0 #000000 offset.
- Pair every rainbow signal with a label so band order never carries meaning alone, and keep a solid 3px #2f7fe0 focus ring at 3px offset on every focusable element.
- Animate only as five-beat stepped wipes or instant state changes at 0/120/360/900ms, and keep the effect purely horizontal.

## Don't

- Don't reproduce, trace, or approximate any real Atari or Sierra wordmark, Fuji mark, or logo — the mode evokes a treatment, not a brand.
- No smooth rainbow gradients, gradient blends between bands, or blurred rainbow glows; the bands are hard-edged stacked rectangles with a single color each.
- No border-radius, diagonal cuts, chamfers, circles, or skewed letterforms — every edge in the system is horizontal and orthogonal.
- No reordered, re-weighted, or randomly sampled bands: no thin-then-thick reverse stacks, no four-band or six-band variants, no pastel versions of the five rainbow colors.
- No Audiowide or Orbitron below 14px or in paragraph copy, and no fake bold, italic, or outlined display type.
- No eased fades, rotating logos, scaling wordmarks on hover, parallax, or backdrop-blur — motion is stepped or absent.
- No pastel, cream, or mid-gray page fields: the ground is #0a0a0d or #c9cbd1, never a tint between them.

## Accessibility

- Verify every pairing against the field you chose: #ececee on #0a0a0d passes easily, but #52b545 and #2f7fe0 do not pass on #0a0a0d or on #c9cbd1 — use those bands as fills, rules, and non-text signal only, and set text in #ececee, #0a0a0d, or #f5c518.
- The rainbow never carries meaning alone: pair each band or stripe state with a text label (SELECTED, ACTIVE, ERROR, SAVED) so color-vision deficiency cannot hide the state.
- Audiowide and Orbitron read from 14px up and Space Mono from 12px up; keep line-height at 1.5 or greater for running text, and never set a sliced band through the middle of a glyph's x-height where legibility collapses.
- Honor prefers-reduced-motion: replace the five-beat band wipe with the final composed stack and the blinking block cursor with a static one — the sliced wordmark must read correctly with all animation removed.
- Keep a visible 3px #2f7fe0 focus ring at 3px offset with no rainbow inside it, and give sliced decorative wordmarks a plain-text accessible name instead of exposing the band spans to assistive tech.
- Never run a glyph across a slice edge or inside a thin band: labels sit on solid #16171c or #ececee fields beside the stack, and where a band must hold text it is 16px minimum in #0a0a0d on #f5c518 only.

## Attribution / sources

- Lospec palette lists — rainbow-stripe and 80s home-computer references — https://lospec.com/palette-list (palette/CC0)
- NovusGFX retro-design-system — https://github.com/NovusGFX/retro-design-system (MIT)
- Audiowide (Astigmatic) — https://github.com/google/fonts/tree/main/ofl/audiowide (OFL 1.1)
- Orbitron (Matt McInerney) — https://github.com/google/fonts/tree/main/ofl/orbitron (OFL 1.1)
- Space Mono (Colophon Foundry) — https://github.com/google/fonts/tree/main/ofl/spacemono (OFL 1.1)
- evocation only, no trademarked logos reproduced — https://en.wikipedia.org/wiki/Sierra_Entertainment (n/a — design reference only)
