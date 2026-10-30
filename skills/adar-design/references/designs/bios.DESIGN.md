---
version: alpha
name: BIOS / POST / Text-mode
colors:
  background: "#0000a8"
  surface: "#0000aa"
  foreground: "#a8a8a8"
  muted: "#555555"
  primary: "#fcfc54"
  accent: "#00a8a8"
  danger: "#fc5454"
  warning: "#a85400"
  success: "#00aa00"
typography:
  h1:
    fontFamily: Web437 IBM VGA 9x16
    fontSize: 32px
    fontWeight: 700
  body:
    fontFamily: IBM Plex Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.none}"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  text-muted:
    textColor: "{colors.muted}"
  accent:
    textColor: "{colors.accent}"
  danger:
    textColor: "{colors.danger}"
  warning:
    textColor: "{colors.warning}"
  success:
    textColor: "{colors.success}"
---

## Overview

This mode is the machine before the operating system: an Award BIOS POST screen, a DOS prompt, an IBM 3270 terminal session. Its surface is not a document but a grid of character cells, each one carrying a foreground attribute and a background attribute from a fixed 16-color hardware set. Everything the interface can say, it says by choosing which of those cells to set to which attribute — and every screen opens with chrome and closes with a function-key line.

## Colors

The default field is Award BIOS blue #0000a8 with #a8a8a8 body text, #fcfc54 for values that need attention, #00a8a8 for informational labels, and #fc5454 for failure. Emphasis is structural, not chromatic: the same color pair inverted carries selection, hover, and active state, so a highlighted menu row is #0000aa on #a8a8a8 rather than a brighter blue. Nothing is blended — de-emphasis comes from the dark gray #555555 (or #005a5a in a 3270 session), and depth comes from black, never from a shadow gradient.

## Typography

Type is the display itself, so the font is a 9x16 bitmap: Web437 IBM VGA 9x16 with Px437, Perfect DOS VGA 437, Fixedsys, and VT323 as fallbacks for CP437 coverage. Every size is an integer multiple of the 16px cell, one cell for labels, two for headings, three for a POST banner, and the container is scaled with transform:scale plus image-rendering:pixelated instead of fractional type. Case is load-bearing: headers and device names in UPPERCASE, typed input in lowercase, messages in sentence case.

## Layout

Layout is a character grid, 80 columns by 25 rows at native size, with a header line at row 1 and an OIA or function-key line at row 80 of the last row. Content fills cells in whole units of the 4/8/16/24/32 spacing scale, and alignment is done with literal spaces and CP437 padding inside a <pre> rather than flexbox gaps. Two-column BIOS screens use a fixed label field (`Primary Master`), a colon, then the value field, so values stack in a clean vertical rule.

## Elevation & Depth

There is no depth: no bevels, no inset highlights, no drop shadows on panels, and no z-axis implied by blur. A detached object can only be separated by the hard 10px 10px 0 #000000 offset or by moving it to the black field, exactly as a BIOS dialog floats as a black box over blue. The glow token, 0 0 4px currentColor, is reserved for phosphor-style emphasis on a single selected glyph, never for shadowing containers.

## Shapes

Shapes are glyphs, not geometry, so the radius token is 0 and CSS borders are off the table. A frame is drawn with ╔ ═ ╗ ║ ╚ ╝ at line-height:1, a divider is ─ or │, and a menu group is bounded by double lines the way a 3270 field is. Buttons, inputs, and rows are rectangles of attribute color whose only edge is the end of the fill, and the block character █ is the sole oblong in the system.

## Components

Panels are CP437 frames with reverse-video titles; buttons are two-cell-tall attribute rectangles whose trigger letter is red; inputs are dotted-leader label runs ending in an underscore field with a solid block caret; status and function-key strips run along the bottom in full inverse video. Menus are a reverse-video horizontal bar whose open dropdown is a double-line frame with one inverted row, and modal prompts appear as a black box with a ─ confirm line. Every component owns exactly two color attributes and swaps them for state.

## Do's and Don'ts

Do invert rather than tint, do use glyph frames instead of CSS borders, do keep the cursor and every transition on steps(), and do keep the header and function-key chrome on screen at all times. Don't add rounded corners or bevels, don't fade with opacity, don't set a 14px font, don't animate with ease-in-out, and don't soften system copy with greetings or emoji — the console reports, it never chats.
