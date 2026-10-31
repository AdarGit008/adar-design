---
version: alpha
name: Game Boy LCD
colors:
  background: "#9bbc0f"
  surface: "#8bac0f"
  foreground: "#0f380f"
  muted: "#306230"
  primary: "#0f380f"
  accent: "#306230"
  danger: "#0f380f"
  warning: "#306230"
  success: "#306230"
  border: "#0f380f"
  divider: "#306230"
  selection: "#0f380f"
  overlay: "#306230"
  selectionText: "#9bbc0f"
typography:
  h1:
    fontFamily: "Press Start 2P"
    fontSize: 20px
    fontWeight: 700
  h2:
    fontFamily: "Press Start 2P"
    fontSize: 16px
    fontWeight: 700
  body:
    fontFamily: "VT323"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.2
  caption:
    fontFamily: "VT323"
    fontSize: 14px
    fontWeight: 400
rounded:
  none: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  select:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  checkbox:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.none}"
  avatar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  table:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  toast:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  code:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  empty:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
  statusbar:
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

Game Boy LCD renders the interface as a DMG handheld screen: a pale olive LCD field, four shades of green, a visible dot-matrix grid, and chunky 4px pixels that read as hardware output rather than drawn UI. Everything is quantized — a 4px pixel unit, an 8px layout grid, zero radius, stepped motion — and everything sits inside a #8bac0f bezel with a status line along the bottom. It should feel small, honest, and slightly grimy, like a screen viewed at an angle in daylight, never glossy or modern.

## Colors

The palette is the panel itself: #9bbc0f as the lit field, #8bac0f one step down for bezels and inset surfaces, #306230 for secondary text, rules, and shadow offsets, and #0f380f as the only ink. There is no fifth colour, so emphasis is structural — inversion, weight, position, and the pattern of the dot grid — instead of chromatic. The paletteVariants carry the alternates honestly: dmg names the four shades, shadeRamp indexes them 0–3 for sprite work, pocket swaps in the greyscale ramp of the Game Boy Pocket, and nightInvert flips the field dark for a dark-theme surface without inventing a new green.

## Typography

Press Start 2P is the cartridge voice — headings, buttons, HUD labels, menu rows, and the hero wordmark — always uppercase and tracked out 0.05em–0.15em, never longer than a few words. VT323 carries every sentence: body copy, table cells, help text, and input values at 20px/1.4 minimum, because the 8px pixel face shreds at paragraph length. Both faces are monospaced and grid-locked, so line-heights land on 4px increments and hierarchy comes from size and shade, never from faked italics or weights.

## Layout

The layout is a fixed sprite grid: 4px sub-steps inside an 8px grid, spacing tokens of 4/8/16/24/32px, and panels aligned to those columns instead of optically nudged. Content lives inside the handheld frame — title band on top, the LCD field in the middle, a 32px status line at the bottom — so the interface reads as a screen inside a device instead of a web page. Nothing floats outside the bezel, no gutter is smaller than the 4px border weight, and every text block starts on a grid line so the dot matrix stays continuous behind it.

## Elevation & Depth

Depth is drawn, not lit: elevation is a zero-blur hard offset shadow — 4px 4px 0 #306230 for buttons and rows, 8px 8px 0 #306230 for hero panels — and pressing an element translates it by that offset while the shadow collapses to nothing. Panels add an inset ring (inset 0 0 0 4px #8bac0f) so the field and its frame read as two LCD bezel steps. The only tolerated blur in the system is the 0 0 6px #8bac0f focus halo, used once per screen on the active control.

## Shapes

Every shape is a square-cornered rectangle: radius 0, 4px borders, no pills, no arcs, no circles except pixels drawn as boxes. Icons, sprites, and any illustration are pixel art rendered with image-rendering: pixelated at integer scale factors (2x, 3x, 4x) so no anti-aliased edge appears, and a corner is chamfered by deleting whole 4px blocks rather than rounding it. Dividers are 4px solid or 4px dashed rules in #306230, and the caret is a solid 8px block — the only oblong in the system.

## Components

Panels are the default container: 4px #0f380f border, inset #8bac0f ring, hard 4px offset drop, dot-matrix overlay at 100% cover with pointer-events none, and a 10px Press Start 2P title with a 4px underline. Buttons are 4px-bordered inverted plates (#0f380f fill, #9bbc0f label) whose offset shadow collapses on :active, and whose hover only moves them two pixels rather than changing shade. Inputs are VT323 wells in #8bac0f with an inset shade and a blinking block caret; the status bar is a 32px strip split by 4px rules where the live value inverts; menus are vertical Press Start 2P rows whose selected row inverts and prefixes a blinking ».

## Do's and Don'ts

Do keep to the four shades, do invert rather than tint, do snap every edge to 4px and every column to 8px, and do pair each inverted state with a marker glyph. Don't add a fifth green, don't blur a shadow, don't round a corner, don't set a paragraph in Press Start 2P, and don't reach for red or green status colour — the panel only has olive, so say ERROR in words.
