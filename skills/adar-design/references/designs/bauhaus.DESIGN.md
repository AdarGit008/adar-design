---
version: alpha
name: Bauhaus / Functional Geometry
colors:
  background: "#f2efe6"
  surface: "#ffffff"
  foreground: "#141414"
  muted: "#5f5a50"
  primary: "#e23c2e"
  accent: "#1b5fa8"
  danger: "#b3241b"
  warning: "#f2c014"
  success: "#123f70"
  border: "#141414"
  divider: "#5f5a50"
  selection: "#1b5fa8"
  overlay: "#141414"
  selectionText: "#ffffff"
typography:
  h1:
    fontFamily: "Archivo"
    fontSize: 48px
    fontWeight: 700
  h2:
    fontFamily: "Archivo"
    fontSize: 28px
    fontWeight: 700
  body:
    fontFamily: "Archivo"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Archivo"
    fontSize: 12px
    fontWeight: 400
rounded:
  none: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
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

This mode is the Bauhaus school turned into an interface: functional geometric abstraction, primary red/blue/yellow on cream, black rules, and a strict grid that nothing is allowed to escape. Every element earns its place by doing a job — a square is a control, a circle is a state, a triangle is attention — so ornament never appears without a function attached to it. The result is bright, calm, and legible at a glance: a print system that happens to be clickable.

## Colors

The ground is cream #f2efe6 with cards one step lighter at #ffffff, and ink #141414 carries every rule, border, and nearly all text. Three primaries do the signal work: red #e23c2e for action, blue #1b5fa8 for information, links, and focus, yellow #f2c014 for attention and warning, with #b3241b as the darker red of failure and #5f5a50 for muted labels. Nothing is tinted, blended, or set at partial alpha on a surface — a shape is one flat fill inside one ink stroke, the way a poster is printed in solid inks — and the primaryRamps give each hue a light/base/dark triad for pressed and disabled states.

## Typography

Archivo is the geometric grotesque that leads the system, at 700 weight in lowercase for headings from 20px up with 0.02em tracking; its near-circular bowls are the point, so a humanist or serif substitute breaks the mode. Josefin Sans is the accent face for small geometric words — eyebrow labels, index numbers, wordmarks — never for a paragraph or a form value. Body copy is Archivo 400/500 at 16–18px with 1.5 line-height, and IBM Plex Mono appears only where data lives: field labels, units, timestamps, counters, and table cells, at 12–13px with tabular numerals and 0.04em–0.16em tracking. The all-lowercase display setting is a deliberate nod to Bayer's universal alphabet, so hierarchy comes from size and weight rather than capitals.

## Layout

Layout is a construction, not an arrangement: a 4px unit doubling to 8/16/32/64px spacing tokens, a 12-column grid with 24px gutters, and 2px ink rules that divide the page into modules the way a poster is divided into fields. Compositions are asymmetric but balanced — a large ink text block off-centre against one small saturated shape — and every box, gap, and rule lands exactly on a grid line with no optical nudging. Reading order still runs top-left to bottom-right at a comfortable 60–75 characters per line even though the visual mass sits off-axis, and nothing floats: surfaces butt against grid edges behind their 2px borders.

## Elevation & Depth

The system is flat with one exception: a hard, zero-blur offset shadow — 4px 4px 0 #141414 on controls, 8px 8px 0 #141414 on panels — that reads as a printed shape dropped onto paper rather than a lit surface. Pressing an element translates it by exactly its own offset and collapses the shadow to 0 0 0, so the interaction is a physical shift of position, not a lighting change. There is no inner shadow except a 1px cream inset that keeps input wells from bleeding into their borders, no gradient, no ambient blur, no glow, and no vignette. Separation between modules is achieved with 2px ink rules and empty cream space, which is why the page can stay entirely flat.

## Shapes

The vocabulary is exactly three forms: the circle, the square, and the equilateral triangle, each flat-filled in one primary and stroked with 2px ink when it needs to hold an edge. Radius is always 0 — panels, buttons, inputs, images, and avatars are rectangles — because a rounded corner would turn a constructed shape into a soft UI affordance. Icons are built from the same primitives at 12/24/32px and never drawn as bespoke curves, so a status marker is a literal circle, square, or triangle rather than a stylised glyph. The only permitted curve in the entire system is a true circle used as a shape or an index mark, and it is never used to round something else.

## Components

Panels are white rectangles with a 2px ink border, 32px padding, an 8px hard shadow, a heading over a 2px ink rule, and one 24px primary shape as their index mark. Buttons are flat red rectangles with an ink label, a 2px ink border, and a 4px hard shadow that collapses on press; the secondary variant flips to white with a blue shadow so it still looks built rather than ghosted. Inputs are white wells with a 2px ink border, values set in IBM Plex Mono, label and state mark above, and a blue focus outline that replaces the border emphasis. The status bar is a 40px strip of mono lowercase separated by rules, printing state as shape plus word, and menus are bottom-ruled rows where the selected row inverts to solid ink with its leading shape turning yellow.

## Do's and Don'ts

Do restrict every form to a circle, a square, or a triangle, do keep radius 0 and 2px ink rules, do give each surface one accent against cream and ink, and do snap every measurement to the 4px grid and its doubling scale. Don't copy a Bauhaus poster, artwork, or logo, don't use gradients, blur, glow, scanlines, or vignette, don't round a corner or animate with a bounce, and don't let a shape or a colour appear on screen unless it is communicating something.
