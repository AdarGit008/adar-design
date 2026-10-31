---
version: alpha
name: NASA 80s / Worm / Space
colors:
  background: "#050510"
  surface: "#0a1128"
  foreground: "#e6e8f0"
  muted: "#7d89a6"
  primary: "#ff2038"
  accent: "#2a6f97"
  danger: "#ff2038"
  warning: "#e8b23a"
  success: "#4ec7a4"
  border: "#2a6f97"
  divider: "#7d89a6"
  selection: "#ff2038"
  overlay: "#050510"
  selectionText: "#050510"
typography:
  h1:
    fontFamily: "Space Grotesk"
    fontSize: 32px
    fontWeight: 700
  h2:
    fontFamily: "Space Grotesk"
    fontSize: 20px
    fontWeight: 700
  body:
    fontFamily: "Space Grotesk"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Space Grotesk"
    fontSize: 12px
    fontWeight: 400
rounded:
  none: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 64px
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

NASA 80s renders the interface as a mission-documentation plate viewed through a window: a near-black void, a fine blueprint grid, and starlight type arranged with flight-manual calm. Its loudest element is also its smallest gesture — the red worm wordmark, sitting alone in a large field of space. The result should read as technical, weightless, and institutional rather than nostalgic sci-fi.

## Colors

The ground is deep space black #050510 with panels one step up at the deep navy #0a1128, and #e6e8f0 starlight carries all primary text while #7d89a6 is the muted annotation tone. Blueprint blue #2a6f97 is a line color: it draws the 24px grid, panel rules, and diagram paths at 18–30% alpha, and it fails as body text. The worm red #ff2038 (#c11428 as its deep shade) appears once per screen — wordmark, primary action, or active row — with #4ec7a4 for nominal telemetry, #e8b23a for caution, and #02030a as the hard shadow ink, so the palette stays three tones of space plus one signal red.

## Typography

Two faces, two jobs. Space Grotesk — with Orbitron as the alternate geometric display — sets the wordmark, headings, and section labels thin at 300–400 weight, uppercase, tracked out 0.08em–0.28em, and never below 20px; IBM Plex Mono sets every value, unit, coordinate, timestamp, caption, and button label at 11–14px uppercase with 0.16em tracking and tabular numerals so telemetry columns align. Hierarchy comes from size, tracking, and color temperature, not from weight or italics, and no string is set in either face at a weight heavy enough to feel like a poster.

## Layout

The page is a blueprint sheet: a 24px grid module, 4/8/16/24/32/64px spacing steps, and content pinned to that grid with 1px lines rather than containers. Heroes are centred with 64px or more of void above and below the wordmark; data sections are left-aligned mono tables with a fixed label column and a right-aligned value-and-unit column separated by a hairline rule. Every panel carries a mono uppercase callout caption in its corner naming the subsystem, sequence, or timestamp, so the page reads as annotated documentation and nothing floats free of the grid.

## Elevation & Depth

Depth is minimal and drawn: a single hard offset (8px 8px 0 #02030a) lifts panels and buttons off the void, a 1px #2a6f97 rule separates stacked regions, and the only bloom in the system is the red glow (0 0 12px rgba(255,32,56,0.45)) around the wordmark and the 6px starlight sparkle on star dots. There are no blurred drop shadows, no glass layers, and no backdrop filters — layering is communicated by the density of stars behind a surface, not by a simulated light source.

## Shapes

Everything is a right angle: radius 0 on buttons, inputs, panels, images, and avatars, with 1px lines forming the only edges. Ornament arrives as line work instead of geometry — the 24px grid, dashed trajectory rules, corner registration ticks, and small circular star dots the size of a hair. Nothing is a pill, nothing is a card with a soft corner, and emphatic shapes are achieved by adding a rule or an offset rather than a rounding.

## Components

Panels are navy plates with a 1px blueprint border, a hard 8px ink offset, and a corner callout caption; the hero is the worm wordmark at 48–96px in #ff2038 with a #c11428 lower shade and a 64px clear field. Buttons are flat red plates in mono uppercase that translate by their offset on :active, with a 2px blueprint-blue focus outline at 4px offset; inputs are void-black wells with a 1px blue border that turns starlight with a red caret on focus, labeled by 11px tracked mono. The status bar is a 40px navy strip of tracked uppercase mono segments split by hairlines, and menus are tracked mono item lists where the active row gains a 2px red left rule and a blue numeric index.

## Do's and Don'ts

Do keep the void black, do spend the worm red once, do let 1px blueprint lines carry all structure, and do set every number in mono with its unit. Don't flood the page with red, don't round a corner, don't set Orbitron in body copy, don't blur a shadow, and don't dress the system in sci-fi clichés — this is a flight manual, not a movie.
