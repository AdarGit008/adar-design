# BIOS / POST / Text-mode — reference

Award BIOS blue POST screen, VGA 16-color attributes, IBM 3270 mainframe fields, and DOS shell chrome — a hardware text-mode aesthetic.

**When to use:** When the user asks for BIOS, POST screen, DOS, text-mode, VGA/CGA, 3270 mainframe, or a hardware-boot/console aesthetic.

**Signature element:** The POST memory count-up (0000 → N KB) plus the bottom function-key strip (1Help 2Menu … 10Quit)

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#0000a8` |
| `surface` | `#0000aa` |
| `foreground` | `#a8a8a8` |
| `muted` | `#555555` |
| `primary` | `#fcfc54` |
| `accent` | `#00a8a8` |
| `danger` | `#fc5454` |
| `warning` | `#a85400` |
| `success` | `#00aa00` |

### Variant: `post`

| Key | Value |
|---|---|
| `background` | `#0000a8` |
| `foreground` | `#a8a8a8` |
| `bright` | `#fcfcfc` |
| `highlight` | `#fcfc54` |
| `info` | `#00a8a8` |
| `error` | `#aa0000` |
| `errorBright` | `#fc5454` |
| `warn` | `#a85400` |
| `black` | `#000000` |

### Variant: `vga16`

| Key | Value |
|---|---|
| `0` | `#000000` |
| `1` | `#0000aa` |
| `2` | `#00aa00` |
| `3` | `#00aaaa` |
| `4` | `#aa0000` |
| `5` | `#aa00aa` |
| `6` | `#aa5500` |
| `7` | `#aaaaaa` |
| `8` | `#555555` |
| `9` | `#5555ff` |
| `10` | `#55ff55` |
| `11` | `#55ffff` |
| `12` | `#ff5555` |
| `13` | `#ff55ff` |
| `14` | `#ffff55` |
| `15` | `#ffffff` |

### Variant: `dosShell`

| Key | Value |
|---|---|
| `bg` | `#000084` |
| `fg` | `#bbbbbb` |
| `accent` | `#fefe54` |
| `wash` | `#aa5500` |
| `hover` | `#555555` |
| `band` | `#00aaaa` |
| `magenta` | `#fe54fe` |
| `green` | `#00aa00` |

### Variant: `ibm3270`

| Key | Value |
|---|---|
| `bg` | `#000000` |
| `turquoise` | `#00d4d4` |
| `green` | `#00d400` |
| `white` | `#e4e4e4` |
| `red` | `#ff3030` |
| `yellow` | `#ffe84a` |
| `blue` | `#4a9cff` |
| `pink` | `#ff7aa8` |
| `dim` | `#005a5a` |


### Typography

- Display: "Web437 IBM VGA 9x16", "Px437 IBM VGA 9x16", "Perfect DOS VGA 437", "Fixedsys", "VT323", "Courier New", "monospace"
- Mono: "IBM Plex Mono", "Courier New", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=24px` `xl=32px` |
| shadow.hard | `10px 10px 0 #000000` |
| shadow.glow | `0 0 4px currentColor` |
| motion.easing | `steps(2, end)` |
| motion.cursor | `steps(2, jump-none) 1s infinite` |
| motion.durations | `0ms` `300ms` `1200ms` |
| effects.scanlines | `repeating-linear-gradient(to bottom, transparent 0 1px, rgba(0,0,0,.18) 1px 2px)` |
| effects.vignette | `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.6) 100%)` |
| effects.pixelate | `pixelated` |

## Work-style rules

- Inverse video is a first-class token: every color attribute ships with a swapped background/foreground pair, and selection, hover, focus, and active states are always rendered as that inverse — never as a tint, overlay, or alpha wash.
- Boxes are drawn with CP437 glyphs (╔ ═ ╗ ║ ╚ ╝) inside a <pre> at line-height:1; no CSS border, no border-radius, no inset/outset bevel, no gradient depth anywhere.
- De-emphasize with the palette, never with opacity: VGA dark gray #555555 or 3270 dim #005a5a replaces any rgba() or opacity:0.5 fade, because alpha produces colors outside the 16-color set.
- Font-size must stay an integer multiple of the 16px cell (16px, 32px, 48px); scale the whole terminal with transform:scale on a fixed-cell container and keep image-rendering:pixelated — never a fractional size like 14px or 1.2rem.
- Motion is steps() only: blinking block cursor, character-by-character print, and the 0000→N KB memory counter step at discrete values with 0ms/300ms/1200ms durations — no easing, no linear interpolation, no tweened color.
- Hot-keys are highlighted glyphs, not badges: the trigger letter inside a menubar label is drawn in #fc5454 (or #fcfc54 on blue), and the bottom strip lists 1Help 2Menu 3Save … 10Quit with each numeral in reverse video.
- Every screen carries chrome: a header line (product name, version, date, or 3270 panel id) and a footer/OIA line (instruction, status, row/column indicator, PF-key legend) — a bare content area is not a screen.
- Stay inside the palette: derive any new color from vga16, paletteVariants.post, dosShell, or ibm3270 rather than mixing a modern hex; backgrounds are solid attribute fills, never blended.

## Component recipes

- **panel:** background:#0000aa; color:#a8a8a8; font:16px/16px 'Web437 IBM VGA 9x16',monospace; padding:16px; frame it in a <pre> at line-height:1 using ╔═╗║╚╝ drawn in #a8a8a8; the title sits in the top frame line as reverse video: background:#a8a8a8;color:#0000aa; text ' SYS CONFIG ' with one space of padding each side; no border property, no radius, no shadow.
- **button:** height:32px (two 16px cells); background:#0000aa; color:#a8a8a8; border:0; border-radius:0; padding:0 8px; font:16px/16px mono; text-transform:uppercase; the trigger letter is a separate span in #fc5454; hover and active are inverse video (background:#a8a8a8;color:#0000aa); focus prefixes a solid one-cell block █ in #fcfc54; state changes land in 0ms, never transitioned.
- **input:** The field is CP437 cells, not a CSS box: render in <pre> at line-height:1 as 'NAME....: [ value______ ]' with background:#0000a8, label in #a8a8a8, entered value in #fcfc54; the caret is a one-cell solid block █ with animation:steps(2,jump-none) 1s infinite; invalid input keeps the value in #fc5454 and appends ' << INVALID'; the active field runs a reverse-video band behind the value and no underline or outline exists.
- **statusbar:** A fixed footer strip exactly 16px tall: background:#a8a8a8; color:#0000a8; font:16px/16px mono; padding:0 4px; items separated by two spaces — '1Help  2Menu  3Save  4Load  10Quit' with each numeral in reverse video (#0000aa on #a8a8a8); on the 3270 variant swap to an OIA line: background:#000000; color:#00d4d4; 'X SYSTEM  SYS1  READY  24/80' with the X in #ff3030.
- **menu:** A horizontal menubar of reverse-video words: background:#a8a8a8; color:#0000aa; font:16px/16px mono; padding:0 4px; each label prefixes its trigger glyph in #fc5454 ('F'ile, 'O'ptions); the active item flips back to background:#0000aa;color:#fcfc54; its dropdown is a single-line-double CP437 frame at line-height:1 with exactly one row in inverse video, no shadow, no radius, no open/close animation beyond 0ms.

## Copywriting

- Voice: Machine-issued and terse. The system reports state in present tense, names the device or subsystem, and stops — no greeting, no apology, no marketing adjective, no second-person chit-chat. A technician reading under time pressure should get the fact from the first five words.
- Case: headers=UPPERCASE, commands=lowercase, body=sentence case
- Prefixes: [SYS] [USR] [INF] [ERR] [WRN] [NET]
- Verb table: start→INITIALIZE; stop→HALT; save→COMMIT; load→READ; delete→PURGE
- Avoid: Please, Sorry, Oops, Just, Maybe, emoji and icon fonts, exclamation marks

## Do

- Pair every color with its inverse and use inversion for selection, hover, focus, and active states — a highlighted row is always fg/bg swapped, never a lighter shade.
- Draw frames and dividers with CP437 glyphs in a <pre> at line-height:1 so the box characters join without gaps at every size.
- Keep every font-size at 16px or a whole multiple, and scale the terminal container with transform:scale plus image-rendering:pixelated to support small and large displays.
- Animate only in steps(): blink the block cursor at steps(2,jump-none) 1s infinite, print text character by character, count memory up from 0000 to N KB.
- Carry chrome on every screen — a header line with product/version/date or panel id, and a footer line of instructions, status, and the 1Help … 10Quit strip.
- Show hot-keys as highlighted glyphs: red trigger letter in the menubar, reverse-video numeral in the function-key strip, matching underlines off.

## Don't

- Don't add border-radius, box-shadow bevels, inset highlights, or gradient depth — cells are flat attribute fills, and the only shadow in the system is the hard offset 10px 10px 0 #000000 for detached black boxes.
- Don't de-emphasize with opacity, rgba(), or filter:grayscale — reach for #555555 or #005a5a, which are real entries in the color set.
- Don't use CSS borders, `border:1px solid`, or SVG strokes to build a box when the frame should be ╔═╗║╚╝ glyphs.
- Don't animate with ease, ease-in-out, cubic-bezier, or transitions — a tweened intermediate color cannot exist in 16 colors.
- Don't set fractional font sizes (14px, 13.5px, 1.2rem) or rely on browser text zoom; cell geometry breaks and the box glyphs no longer meet.
- Don't soften the voice with greetings, apologies, conversational fillers, emoji, or exclamation marks — the console states, it doesn't chat.

## Accessibility

- Keep body text on the tested pairings (#a8a8a8 on #0000a8, #fcfcfc on #0000a8, #00d4d4 on #000000); #555555 and #005a5a are for large or non-essential text only, since they sit near the contrast floor against blue.
- Never let inverse video be the only carrier of state: pair the swapped row with a textual marker such as `>` or `[ACTIVE]` and keep a real focus ring equivalent (a one-cell block or reverse band) that is visible at 16px.
- Respect prefers-reduced-motion: stop the cursor blink, print text instantly, and let the memory counter jump to its final value — the screen must remain readable with all steps() animation removed.
- Keep all UI text at 16px or larger, ensure glyphs come from the monospace stack so CP437 frames don't shift, and provide an accessible name for glyph-only controls (the `X` close, `█` cursor, function-key numerals).

## Attribution / sources

- lospec Award BIOS palette (rafik) — https://lospec.com/palette-list/award-bios (palette/CC0)
- NovusGFX retro-design-system — https://github.com/NovusGFX/retro-design-system (MIT)
- BOOTSTRA.386 — https://github.com/kristopolous/BOOTSTRA.386 (Apache-2.0)
- int10h.org Oldschool PC Font Pack (VileR) — https://int10h.org/oldschool-pc-fonts/ (CC BY-SA 4.0)
