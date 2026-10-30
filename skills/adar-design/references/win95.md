# Windows 95 Desktop — reference

Windows 95 classic desktop GUI: teal #008080 field, silver #c0c0c0 chrome, navy #000080 title bars, black 11px system type, and the only beveled depth model in the system — 2px outset/inset, radius 0, no glow.

**When to use:** When the user asks for Windows 95, classic Windows, Win9x, mid-90s office software, a silver-and-teal desktop GUI, or beveled/embossed skeuomorphic chrome.

**Signature element:** The beveled 2px button inside a navy #000080 title bar, sitting on the teal #008080 desktop

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#008080` |
| `surface` | `#c0c0c0` |
| `foreground` | `#000000` |
| `muted` | `#808080` |
| `primary` | `#000080` |
| `accent` | `#008080` |
| `danger` | `#ff0000` |
| `warning` | `#808000` |
| `success` | `#008000` |

### Variant: `win95`

| Key | Value |
|---|---|
| `desktop` | `#008080` |
| `face` | `#c0c0c0` |
| `faceLight` | `#dfdfdf` |
| `highlight` | `#ffffff` |
| `shadow` | `#808080` |
| `dark` | `#000000` |
| `titleActive` | `#000080` |
| `titleActiveText` | `#ffffff` |
| `titleInactive` | `#808080` |
| `titleInactiveText` | `#c0c0c0` |
| `selection` | `#000080` |
| `selectionText` | `#ffffff` |
| `field` | `#ffffff` |
| `fieldText` | `#000000` |
| `disabledText` | `#808080` |
| `tooltip` | `#ffffe1` |
| `info` | `#ffffe1` |
| `link` | `#0000ff` |

### Variant: `system16`

| Key | Value |
|---|---|
| `black` | `#000000` |
| `maroon` | `#800000` |
| `green` | `#008000` |
| `olive` | `#808000` |
| `navy` | `#000080` |
| `purple` | `#800080` |
| `teal` | `#008080` |
| `silver` | `#c0c0c0` |
| `gray` | `#808080` |
| `red` | `#ff0000` |
| `lime` | `#00ff00` |
| `yellow` | `#ffff00` |
| `blue` | `#0000ff` |
| `fuchsia` | `#ff00ff` |
| `aqua` | `#00ffff` |
| `white` | `#ffffff` |

### Variant: `highContrast`

| Key | Value |
|---|---|
| `desktop` | `#000000` |
| `face` | `#000000` |
| `foreground` | `#ffffff` |
| `titleActive` | `#000080` |
| `titleActiveText` | `#ffffff` |
| `titleInactive` | `#808080` |
| `titleInactiveText` | `#000000` |
| `highlight` | `#ffffff` |
| `shadow` | `#808080` |
| `selection` | `#000080` |
| `selectionText` | `#ffffff` |
| `field` | `#000000` |
| `fieldText` | `#ffffff` |
| `link` | `#00ffff` |


### Typography

- Display: "W95FA", "MS Sans Serif", "Tahoma", "Verdana", "sans-serif"
- Mono: "Courier New", "Lucida Console", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=2px` `sm=4px` `md=8px` `lg=12px` `xl=16px` |
| shadow.hard | `2px 2px 0 #000000` |
| shadow.glow | `none` |
| motion.easing | `linear` |
| motion.cursor | `default` |
| motion.durations | `0ms` `100ms` `200ms` |
| effects.scanlines | `none` |
| effects.vignette | `none` |
| effects.pixelate | `none — keep image-rendering: auto and scale icons by integer factors only (16/32/48px)` |

## Work-style rules

- Bevel is the only depth in the system: every raised surface is a 2px outset — border-color: #ffffff #000000 #000000 #ffffff with box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080 — and every sunken well is the exact inverse (#808080/#ffffff/#000000 plus inset #000000 and #dfdfdf). There is no blur, no glow, and no other elevation token.
- Press by swapping the bevel, not by translating: :active reverses highlight and shadow and shifts the label 1px right and 1px down via padding, so the control reads as physically depressed rather than animated.
- Silver #c0c0c0 is the only chrome color — windows, toolbars, menus, buttons, scrollbars, and statusbars are all #c0c0c0 lit by #ffffff/#dfdfdf and shaded by #808080/#000000. Teal #008080 is the desktop field only and never appears inside a window.
- Text is #000000 on #c0c0c0 or #ffffff, or #ffffff on #000080 navy — never grey body copy. Reserve #808080 for disabled labels, bevel shading, and grooves, and always flatten the bevel of a disabled control so grey means off.
- Corners are square (radius 0) and type is 11px: hierarchy comes from bold, from the 18px title bar, and from 1px grooves, ridges, and group-box frames — never from tracking, italics, or large size jumps.
- Window focus is a color swap: the active title bar is #000080 with #ffffff bold text, the inactive one #808080 with #c0c0c0 text. Never signal focus with a shadow, glow, or elevation change.
- Selection and focus share the navy token: a selected row or run inverts to #000080 with #ffffff text, and the focused control adds a 1px dotted #000000 marquee inset 4px from its inner edge.
- Layout is a packed 2px grid on 4/8/12/16 steps: 3px window edges, 18px title bars, 20px menu bars, 23px buttons, 21px inputs, 19px menu rows, 2px gaps, and never more than 8px of padding — the faintly cramped rhythm is the look.

## Component recipes

- **panel:** background: #c0c0c0; border: 2px solid; border-color: #dfdfdf #000000 #000000 #dfdfdf; box-shadow: inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080; border-radius: 0; padding: 3px; color: #000000; font: 11px/1.4 'W95FA', 'MS Sans Serif', Tahoma, Verdana, sans-serif; — title bar: height: 18px; display: flex; align-items: center; justify-content: space-between; padding: 0 2px 0 4px; background: #000080; color: #ffffff; font-weight: 700; with 16px beveled Minimize/Maximize/Close buttons at the right (each: background: #c0c0c0; border: 1px solid; border-color: #ffffff #000000 #000000 #ffffff; box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080;); client area: margin: 2px; background: #ffffff; border: 2px solid; border-color: #808080 #ffffff #ffffff #808080; box-shadow: inset 1px 1px 0 #000000, inset -1px -1px 0 #dfdfdf; — inactive window: title bar #808080 with #c0c0c0 text, nothing else changes.
- **button:** height: 23px; min-width: 75px; padding: 0 12px; background: #c0c0c0; color: #000000; font: 11px/1 'W95FA', 'MS Sans Serif', Tahoma, Verdana, sans-serif; border: 2px solid; border-color: #ffffff #000000 #000000 #ffffff; box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080; border-radius: 0; :active { border-color: #000000 #ffffff #ffffff #000000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #dfdfdf; padding: 1px 11px 0 13px; } :focus-visible { outline: 1px dotted #000000; outline-offset: -4px; } :disabled { color: #808080; text-shadow: 1px 1px 0 #ffffff; cursor: not-allowed; } — default button: repeat the same bevel inside a 1px #000000 outline at 1px offset.
- **input:** height: 21px; background: #ffffff; color: #000000; font: 11px/1.4 'W95FA', 'MS Sans Serif', Tahoma, Verdana, sans-serif; padding: 1px 3px; border: 2px solid; border-color: #808080 #ffffff #ffffff #808080; box-shadow: inset 1px 1px 0 #000000, inset -1px -1px 0 #dfdfdf; border-radius: 0; caret-color: #000000; :focus { outline: none; } ::selection { background: #000080; color: #ffffff; } — read-only and disabled: background: #c0c0c0; color: #808080; the sunken bevel stays; there are no placeholders in this era — put a static black label to the left of the field instead.
- **statusbar:** a 22px strip docked at the bottom of the client area with three sunken segments: display: flex; gap: 2px; padding: 2px; background: #c0c0c0; font: 11px/1.4 'W95FA', 'MS Sans Serif', Tahoma, Verdana, sans-serif; color: #000000; each segment { height: 18px; padding: 1px 4px; border: 1px solid; border-color: #808080 #ffffff #ffffff #808080; } — content is static status text ('3 object(s)', '1.44MB free'), and the trailing 20px CAPS/NUM/SCRL indicator cells are sunken squares that show their 3-letter label in #000000 when on and #808080 when off.
- **menu:** menu bar: 20px strip directly under the title bar, background: #c0c0c0; display: flex; font: 11px/1.4 'W95FA', 'MS Sans Serif', Tahoma, Verdana, sans-serif; item { padding: 3px 6px; color: #000000; } with the mnemonic letter underlined (text-decoration: underline); hover or open inverts to background: #000080; color: #ffffff; the dropdown is a #c0c0c0 popup with the raised bevel (border: 2px solid; border-color: #dfdfdf #000000 #000000 #dfdfdf; box-shadow: inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080; padding: 2px), 19px rows, a 20px gutter for the bitmap check/radio glyph, accelerator keys right-aligned in #000000, submenu parents showing a right-pointing arrow, and separators as a groove (border-top: 1px solid #808080; border-bottom: 1px solid #ffffff).

## Copywriting

- Voice: Clerical, plain, and bureaucratic-polite: short noun labels, one sentence of helper text per dialog, and exactly one imperative verb on the primary button. The software states what happened and what to press; it never sells, jokes, or exclaims.
- Case: headers=Title Case for window, dialog, and group-box titles, commands=Title Case (Save As…, Restart, Shut Down, OK, Cancel) with an ellipsis when a dialog follows, body=sentence case
- Prefixes: Windows Warning Error Confirm Tip of the Day
- Verb table: start→Start; stop→Shut Down; save→Save As…; load→Open; delete→Delete
- Avoid: exclamation marks and ALL-CAPS sentences in body copy, emoji, icon fonts, and modern flat glyph sets, marketing adjectives ('seamless', 'next-gen', 'delight', 'empower'), multi-paragraph helper text — one sentence per dialog, flat-modern verb labels ('Submit', 'Get Started', 'Continue') instead of OK/Save/Open, apologies and chatty asides ('Oops!', 'Hang tight')

## Do

- Build every raised surface from the same four-shade bevel (#ffffff, #dfdfdf, #808080, #000000) and every recessed surface from its exact inverse, so all depth in the product comes from one gesture.
- Give each window the full chrome: 2px outer bevel, 3px frame, 18px navy title bar with 16px beveled Minimize/Maximize/Close, 20px menu bar, white sunken client well, optional statusbar — a bare beveled panel is not a window.
- Hold the era's fixed control heights (23px buttons, 21px inputs, 19px menu rows, 18px title bars, 2px gaps) and let the tight rhythm do the work.
- Keep type at 11px black on silver or white, with bold reserved for title bars and dialog headings; put runnable or registry-style content in Courier New.
- Signal focus twice: the 1px dotted #000000 marquee inside the control and the navy #000080 title bar or selection band — never a colored glow or shadow growth.
- Stay inside integer px and the system16 palette; every color is #RRGGBB drawn from the classic 16, with no gradients, alpha washes, or fractional sizes.

## Don't

- No border-radius anywhere: buttons, inputs, windows, scrollbars, group boxes, and avatars are square-cornered.
- No blur, glow, soft drop shadow, or layered z-depth — the 2px bevel and the opaque window edge are the entire elevation model.
- No easing curves, scale or opacity fades, or slide transitions; state changes land in 0ms and the only motion is the 1px pressed shift and the blinking caret.
- No grey or navy running text: body copy is #000000 on #c0c0c0/#ffffff, and navy is confined to title bars, selection, and focus.
- No modern chrome: no flat icon sets, 16px+ body type, pill buttons, 8px+ breathing room, or dark mode as the default surface.
- No teal inside a window and no silver on the desktop field — the #008080 / #c0c0c0 split is the identity of the mode.

## Accessibility

- #000000 on #c0c0c0 is about 9.4:1 and on #ffffff about 21:1, while #ffffff on #000080 is about 13:1 — keep those three pairings. #808080 on #c0c0c0 sits near 3.9:1, so it is for disabled labels and non-essential bevel shading only, and disabled controls must also say 'unavailable' rather than relying on grey.
- Disabled and inactive states must change more than color: flatten the bevel, grey the label, set cursor: not-allowed, and add aria-disabled so the state survives greyscale and forced-colors.
- Keep a real focus indicator: a 1px dotted #000000 outline at outline-offset: -4px inside buttons, inputs, and menu rows. The navy selection band alone is not sufficient, and outlines must never be removed without a 1:1 replacement.
- Do not go below 11px, do not fake small caps or tight tracking, and honor prefers-reduced-motion by stopping the caret blink and rendering the pressed bevel swap as an instant state change.

## Attribution / sources

- 98.css (Jordan Scales) — Windows 9x UI recreated in CSS — https://github.com/jdan/98.css (MIT)
- Microsoft Windows 95 classic theme — desktop, chrome, and title-bar colors — https://en.wikipedia.org/wiki/Windows_95 (reference (classic desktop color values))
- System 16 palette (Windows 16-color VGA UI palette) — https://en.wikipedia.org/wiki/List_of_software_palettes (reference (factual palette values))
- W95FA — MS Sans Serif bitmap-era recreation (FontLibrary) — https://fontlibrary.org/en/font/w95fa (free font, see source page for terms)
- Tahoma and Verdana (Microsoft Typography) — https://learn.microsoft.com/en-us/typography/font-list/verdana (proprietary Microsoft system fonts)
