---
version: alpha
name: 80s Arcade
colors:
  background: "#0b0b1e"
  surface: "#1a1440"
  foreground: "#e9e9ff"
  muted: "#adafbc"
  primary: "#ffd300"
  accent: "#ff2d95"
  danger: "#ff3b3b"
  warning: "#f7d51d"
  success: "#2bff88"
  border: "#e9e9ff"
  divider: "#adafbc"
  selection: "#ff2d95"
  overlay: "#0b0b1e"
  selectionText: "#0b0b1e"
typography:
  h1:
    fontFamily: "Press Start 2P"
    fontSize: 24px
    fontWeight: 700
  h2:
    fontFamily: "Press Start 2P"
    fontSize: 16px
    fontWeight: 700
  body:
    fontFamily: "VT323"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
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

80s Arcade renders the interface as a coin-op cabinet: a deep indigo ground, neon pink/cyan/yellow signals, and hard 4px pixel borders that read as sprite work rather than drawn UI. Everything is quantized — a 4px pixel unit, an 8px layout grid, zero radius, stepped motion — so the surface looks emitted by hardware instead of styled by a designer. It should feel loud, dense, and playable, never glossy.

## Colors

The ground is near-black indigo (#0b0b1e) with panels one step up at #1a1440; #e9e9ff carries body text and #adafbc is the only muted tone. Neon is signal, not decoration: pink #ff2d95 for primary action and selection, cyan #00e5ff for focus, glow, and HUD trim, yellow #ffd300 for highlights and score values, with green #2bff88, red #ff3b3b, and purple #7c1dfd reserved for success, danger, and shadow rings. The nested NES ramps (default/primary/success/warning/error triads) and the 64-entry NES palette provide shading steps for sprites and are consumed as ramps, not as flat replacements for the role colors.

## Typography

Press Start 2P is the cabinet voice — headings, buttons, HUD labels, scores, and the hero wordmark — always uppercase and tracked out 0.05em–0.15em. VT323 carries every sentence: body copy, table cells, help text, and input values, because the 8px pixel face collapses at paragraph length. Both are monospaced and grid-locked, so line-heights land on 4px increments (16px, 24px) and no italic, weight, or letter-spacing variation is faked to create hierarchy.

## Layout

The layout is a fixed sprite grid: an 8px grid with 4px sub-steps, spacing tokens of 4/8/16/24/32px, and panels aligned to those columns instead of optically nudged. Content sits inside centred HUD frames with a persistent status bar and menu rail, so the interface reads like a screen with a bezel — title band on top, play field in the middle, score and controls at the bottom. Nothing floats: panels butt against grid edges behind 4px borders, and no gutter is ever smaller than the border weight.

## Elevation & Depth

Depth is drawn, not lit: elevation is a zero-blur hard offset shadow — 4px 4px 0 for buttons and rows, 8px 8px 0 8px #7c1dfd for hero panels — and pressing an element translates it by that offset while the shadow collapses to nothing. Panels stack a dark ring then a neon ring around their border (0 0 0 4px #0b0b1e, 0 0 0 8px #ff2d95) before the drop, which is what produces the chunky pixel-border look. The only tolerated blur in the system is the 8px cyan HUD glow, used for focus and live readouts.

## Shapes

Every shape is a square-cornered rectangle: radius 0, 4px borders, no pills, no arcs, no circles except sprites drawn as boxes. Icons and imagery are pixel art rendered with image-rendering: pixelated and scaled by integer factors (2x, 3x, 4x) so no anti-aliased edge ever appears. Corners are chamfered by removing whole 4px blocks from a border, never by rounding it.

## Components

Panels use the stacked-ring recipe — 4px solid border, dark ring, neon ring, hard offset drop — and are the default container; hero headings are the same recipe at 32px padding with a Press Start 2P wordmark at 24–32px and a 4px #ffd300 underline rule. Buttons are 4px-bordered Press Start 2P plates on #ffd300 with a 4px 4px 0 purple shadow that translates away on :active. Inputs are square 4px-bordered wells set in VT323 that switch to a cyan border and HUD glow on focus, the status bar is a 32px strip of uppercase Press Start 2P segments split by 4px rules, and menus are vertical item lists where the selected row inverts to pink and shows a blinking '>' marker.

## Do's and Don'ts

Do quantize everything to 4px and 8px, do invert selected rows instead of outlining them, and do give every interactive element an instant pressed state. Don't round a corner, don't blur a shadow, don't set a paragraph in Press Start 2P, and don't lift the indigo ground toward white — neon only works against the dark.
