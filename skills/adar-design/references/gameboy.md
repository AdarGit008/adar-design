# Game Boy LCD — reference

Nintendo DMG handheld: a four-shade olive-green LCD, dot-matrix texture, chunky 4px pixels, hard edges, and Press Start 2P over VT323.

**When to use:** When the user asks for Game Boy, DMG, LCD, dot-matrix, monochrome-green, handheld console, or a 4-shade pixel-screen aesthetic.

**Signature element:** The four-shade LCD dot-matrix screen: an inverted-state HUD and hard-offset panels sitting under a repeating pixel grid inside the #8bac0f bezel

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#9bbc0f` |
| `surface` | `#8bac0f` |
| `foreground` | `#0f380f` |
| `muted` | `#306230` |
| `primary` | `#0f380f` |
| `accent` | `#306230` |
| `danger` | `#0f380f` |
| `warning` | `#306230` |
| `success` | `#306230` |

### Variant: `dmg`

| Key | Value |
|---|---|
| `lcdLightest` | `#9bbc0f` |
| `lcdLight` | `#8bac0f` |
| `lcdDark` | `#306230` |
| `lcdDarkest` | `#0f380f` |

### Variant: `shadeRamp`

| Key | Value |
|---|---|
| `0` | `#9bbc0f` |
| `1` | `#8bac0f` |
| `2` | `#306230` |
| `3` | `#0f380f` |

### Variant: `pocket`

| Key | Value |
|---|---|
| `background` | `#e8e8e0` |
| `surface` | `#d0d0c8` |
| `foreground` | `#181c14` |
| `muted` | `#585c50` |
| `mid` | `#b0b8a8` |

### Variant: `nightInvert`

| Key | Value |
|---|---|
| `background` | `#0f380f` |
| `surface` | `#306230` |
| `foreground` | `#9bbc0f` |
| `muted` | `#8bac0f` |
| `dim` | `#4a6b2a` |


### Typography

- Display: "Press Start 2P", "VT323", "monospace"
- Mono: "VT323", "IBM Plex Mono", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=24px` `xl=32px` |
| shadow.hard | `4px 4px 0 #306230` |
| shadow.glow | `0 0 6px #8bac0f` |
| motion.easing | `steps(4, end)` |
| motion.cursor | `steps(2, jump-none) 1s infinite` |
| motion.durations | `0ms` `120ms` `240ms` `1000ms` |
| effects.scanlines | `repeating-linear-gradient(to bottom, transparent 0 2px, rgba(15,56,15,0.10) 2px 4px)` |
| effects.vignette | `radial-gradient(ellipse at center, transparent 55%, rgba(15,56,15,0.28) 100%)` |
| effects.pixelate | `pixelated` |

## Work-style rules

- Four shades only: #9bbc0f, #8bac0f, #306230, #0f380f. Any new tone must come from paletteVariants (dmg, shadeRamp, pocket, nightInvert) — no opacity fades, no rgba() tints, no fifth green, because the LCD panel physically cannot render one.
- Treat 4px as the pixel unit and 8px as the layout grid: borders, insets, rings, gaps, and icon strokes all snap to 4/8/12/16px — never 1px hairlines, 2px borders, or 3px insets.
- The screen is a dot-matrix panel: overlay effects.dotMatrix at 100% cover with pointer-events: none, and render any imagery with image-rendering: pixelated at integer scale factors (2x, 3x, 4x) so no anti-aliased edge appears.
- Elevate with hard offset shadows only, zero blur (4px 4px 0 #306230 for buttons and rows, 8px 8px 0 #306230 for hero panels); pressing an element translates it by the offset and collapses the shadow to 0 — the only tolerated blur is the 0 0 6px #8bac0f focus glow.
- Use Press Start 2P for headings, buttons, and HUD labels only, uppercase and tracked 0.05em–0.15em, a few words per string; set all body copy, table cells, and input values in VT323 at 20px/1.4 minimum — the 8px pixel face collapses at paragraph length.
- Encode state by inversion and position, not by hue: a selected row swaps to background #0f380f with text #9bbc0f, and every swapped state also carries a visible marker (a » caret, a bold label, or the word ACTIVE).
- Animate discretely in steps(): steps(4, end) for sprite nudges, steps(2, jump-none) 1s infinite for the caret, and 0ms/120ms/240ms/1000ms durations — no ease, no linear tween, no animated blur.
- Keep the handheld frame: content lives inside a #8bac0f bezel with the four-shade screen inset, a status line runs along the bottom, and nothing floats outside that bezel or overlaps its edge.

## Component recipes

- **panel:** background: #9bbc0f; border: 4px solid #0f380f; border-radius: 0; padding: 16px 24px; color: #0f380f; box-shadow: inset 0 0 0 4px #8bac0f, 4px 4px 0 #306230; — the inset ring is the LCD bezel step that separates the panel field from its frame; the dotMatrix overlay sits absolutely inside at 100% cover with pointer-events: none. Titles sit in the top-left corner as a Press Start 2P 10px uppercase label with a 4px #306230 underline rule that stops one grid step short of the right edge.
- **button:** font: 700 12px/1.4 'Press Start 2P'; text-transform: uppercase; letter-spacing: 0.08em; background: #0f380f; color: #9bbc0f; border: 4px solid #0f380f; border-radius: 0; padding: 12px 16px; box-shadow: 4px 4px 0 #306230; transition: none; :hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #306230; } :active { transform: translate(4px, 4px); box-shadow: 0 0 0 #306230; } :focus-visible { outline: 4px solid #306230; outline-offset: 4px; } — secondary variant: #8bac0f background, #0f380f text, 4px #0f380f border; pressed buttons may not change hue, only position.
- **input:** background: #8bac0f; color: #0f380f; font: 20px/1.4 'VT323'; border: 4px solid #306230; border-radius: 0; padding: 8px 12px; caret-color: #0f380f; box-shadow: inset 4px 4px 0 rgba(15,56,15,0.12); :placeholder { color: #306230; text-transform: uppercase; letter-spacing: 0.05em; font-family: 'Press Start 2P'; font-size: 10px; } :focus { border-color: #0f380f; box-shadow: inset 4px 4px 0 rgba(15,56,15,0.16), 0 0 6px #8bac0f; outline: none; } — invalid state inverts the field to background #0f380f / color #9bbc0f and appends the literal text '!ERROR' in VT323, never a red border.
- **statusbar:** height: 32px; display: flex; align-items: center; gap: 24px; padding: 0 16px; background: #8bac0f; border-top: 4px solid #0f380f; border-radius: 0; font: 10px/1 'Press Start 2P'; text-transform: uppercase; letter-spacing: 0.08em; color: #0f380f; segments split by border-left: 4px solid #306230; the live value inverts to a #0f380f block with #9bbc0f text, and the trailing state cell is an 8px wide #0f380f block animated with steps(2, jump-none) 1s infinite.
- **menu:** vertical list, no radius, no bullets: item { display: block; font: 12px/1.5 'Press Start 2P'; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 16px 8px 32px; color: #0f380f; } selected item inverts to background #0f380f / color #9bbc0f and prefixes a blinking '»' in the same inverted field at steps(2, jump-none) 1s infinite; hover shifts translate(-4px, -4px) with box-shadow 4px 4px 0 #306230; group separators are 4px dashed #306230, never 1px hairlines, and no menu row may use a third shade.

## Copywriting

- Voice: Handheld cartridge manual: short, plain, quietly instructive. The machine names the action, shows the four-shade screen doing it, and stops — one instruction per line, present tense, no marketing adjective, no exclamation, and never a sentence a 1990s one-line LCD could not have shown.
- Case: headers=UPPERCASE, commands=UPPERCASE, body=sentence case in VT323 body copy; UPPERCASE for HUD labels, buttons, and menu rows
- Prefixes: ▶ ■ ▲ × —
- Verb table: start→PRESS START; stop→POWER OFF; save→SAVE FILE; load→LOAD FILE; delete→ERASE FILE
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution'), exclamation marks and stacked punctuation (!!!, ???), emoji and modern flat icon sets — signals are 8px pixel glyphs only, sentences longer than one LCD line in headings, buttons, or menus, apologetic or chatty system copy ('Oops', 'Sorry, one moment'), colour-coded status wording (green means good, red means bad) — say ERROR or OK in words, Press Start 2P for any string longer than a few words

## Do

- Quantize every border, padding step, divider, and grid line to 4px or 8px so the pixel unit stays honest across components.
- Keep the whole surface inside the four DMG shades and de-emphasize by swapping shades (#306230 for secondary text) rather than by opacity or rgba().
- Give every interactive element a hard 4px offset shadow plus an instant pressed state that translates by the offset and collapses the shadow.
- Overlay the dotMatrix pattern on large LCD fields and keep it off small text containers so 10px display type stays legible.
- Set headings, buttons, and HUD labels in Press Start 2P uppercase at 0.05em–0.15em tracking, a few words per string; put every sentence in VT323.
- Pair each inverted state with a glyph or word marker (», ACTIVE, !ERROR) so state never depends on shade alone.
- Keep a persistent 32px status line with battery/level-style readouts so the screen always reads as a handheld device with chrome.

## Don't

- No border-radius anywhere — 0 on buttons, inputs, panels, images, and avatars; corners are chamfered by removing whole 4px blocks, never rounded.
- No fifth colour, no gradients on surfaces, no glow beyond the single 0 0 6px #8bac0f focus halo, and no blurred drop shadows.
- No smooth motion: no ease-in-out, no cubic-bezier fades, no tweened colour or opacity transitions.
- No Press Start 2P body copy: paragraphs, table cells, help text, and long values belong to VT323.
- No modern colour signals (red danger, green success, blue links) — in a 4-shade panel those hues do not exist.
- No 1px hairlines, 2px borders, or 3px insets; the smallest line weight in the system is 4px.
- No anti-aliased or photographic imagery — every bitmap is pixel art scaled by an integer factor with image-rendering: pixelated.

## Accessibility

- #0f380f on #9bbc0f clears 4.5:1 comfortably for body text, but #306230 on #8bac0f sits near the floor — reserve the mid shade for 16px-and-up secondary text, borders, and non-text signal, and never for a paragraph.
- Press Start 2P only reads from 10px up with 1.4–1.6 line-height and a few words per line; VT323 carries all running text at 20px/1.4 minimum, with no fake bold, italic, or condensed weights.
- Never encode state by shade or inversion alone — pair every swapped row, error field, and live value with a marker word or glyph (», ACTIVE, !ERROR) and keep a 4px focus ring visible at 4px offset on every focusable element.
- Hold the mid-shade pairs at the same perceptual weight as the extremes: do not place #306230 text on #8bac0f panels, and keep the dotMatrix overlay under 16% opacity so glyph edges survive.
- Honor prefers-reduced-motion: stop the blinking caret and status pulse, render the :active shadow collapse as an instant state change, and drop the dotMatrix drift — the screen must stay fully readable with all animation removed.

## Attribution / sources

- Nintendo Game Boy (DMG-01) four-shade LCD palette — community reference — https://lospec.com/palette-list/nintendo-gameboy-dmg (palette/CC0)
- NovusGFX retro-design-system (8bit handheld variants) — https://github.com/NovusGFX/retro-design-system (MIT)
- nostalgic-css/NES.css (pixel-border patterns) — https://github.com/nostalgic-css/NES.css (MIT)
- Press Start 2P (CodeMan38) — https://github.com/google/fonts/tree/main/ofl/pressstart2p (OFL 1.1)
- VT323 (Peter Hull) — https://github.com/google/fonts/tree/main/ofl/vt323 (OFL)
