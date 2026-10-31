---
version: alpha
name: Impressionism — Light & Color
colors:
  background: "#f7f2e6"
  surface: "#fdfaf2"
  foreground: "#3a3a3a"
  muted: "#8a8478"
  primary: "#a8d0e6"
  accent: "#b8a7d6"
  danger: "#b5546a"
  warning: "#d9a441"
  success: "#6f9f78"
  border: "#8a8478"
  divider: "#8a8478"
  selection: "#3a3a3a"
  overlay: "#3a3a3a"
  selectionText: "#f7f2e6"
typography:
  h1:
    fontFamily: "Cormorant"
    fontSize: 44px
    fontWeight: 700
  h2:
    fontFamily: "Cormorant"
    fontSize: 26px
    fontWeight: 700
  body:
    fontFamily: "Cormorant"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Cormorant"
    fontSize: 13px
    fontWeight: 400
rounded:
  none: 10px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
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

This mode paints the interface as a sunlit plein-air study: a warm cream canvas, five low-saturation pastels that behave like mixed pigment, and a dappled light overlay that falls across the whole page as if through moving leaves. Nothing is outlined hard or filled flat — panels are built from two or three near-neighbours of one hue, edges dissolve over 24–40px, and rules break into short brushstrokes instead of drawing hairlines. The result should read as one painted surface with a strict grid underneath: the softness lives in color, edge, and light, never in sloppy alignment. It is calm, airy, and quietly romantic — a morning in a garden rather than a museum wall.

## Colors

The canvas is warm cream #f7f2e6 with panels a shade lighter at #fdfaf2, and ink #3a3a3a carries every piece of text plus the thinnest edges. Five pastels do the painting: sky #a8d0e6 for primary action and water-cool calm, blush #f6c6c0 for warm accents and selected states, leaf #a3c9a8 for success and growing things, lavender #b8a7d6 for secondary accents and quiet highlights, and sunlight #f6e7b2 for the dapple, focus warmth, and warning. No area is one solid hex — every large surface is a two- or three-stop gradient of near-neighbours, so the color shifts the way wet pigment does. Each hue carries a light/base/dark ramp, and only the deep ramp is allowed to become text, because a pastel on cream will always lose the contrast fight.

## Typography

Cormorant leads at 500–600 for headings from 28px up, with Playfair Display and EB Garamond as the graceful fallbacks; its high-contrast strokes and open apertures set the period tone, so a geometric or grotesque face is never a substitute. Body copy is EB Garamond 400 at 17–19px with 1.65 line-height and a measure of 60–72 characters, which gives the text the unhurried pace the palette promises. Headings are Title Case and never tracked out — letter-spacing on a serif this fine simply looks broken — and italics are used for asides, captions, and placeholders. IBM Plex Mono appears only at 13px for data: dimensions, revisions, timings, coordinates, the small instrument readings that let a painting be a working surface.

## Layout

Layout is an easel composition on a strict 12-column grid: a 4px spacing scale stepping 4/8/16/24/40px, wide 40px margins, and generous vertical air so no panel touches another. Blocks are allowed to sit asymmetrically the way a composition does — a wide panel with a small note card floating to one side — but every edge snaps to the grid and every column stays true. Readers move left to right through a study: subject, then detail, then the small caption underneath the way a title card hangs below a canvas. Softness is spent on edges, gradients, and the dapple overlay; it is never an excuse to nudge a box, and 24px gaps never become 22px because it looked nicer.

## Elevation & Depth

Depth is light, not shadow: a single wide, warm, low-opacity shadow (0 18px 40px -24px rgba(127,168,201,.45)) lifts a panel a few millimetres off the canvas, and a soft 0 6px 14px -10px contact shadow holds small controls down when pressed. Internal depth is a sunlight glaze — inset 0 0 32px rgba(246,231,178,.35) — which reads as warm light pooling inside a frame rather than as a bevel. Nothing casts a hard offset, nothing glows neon, and where a surface must recede it fades into the canvas through a gradient or mask-image dissolve instead of blurring. Layers stack like glazes: each one is thinner and more transparent than the one beneath, and none of them is glass.

## Shapes

Everything is soft-edged: 10px radius on cards, inputs, and menu rows, 16px on media and large washes, full pills on buttons, and a deliberately uneven blob radius (48% 52% 55% 45% / 52% 46% 54% 48%) for decorative daubs and the toggle knob. Rules break into 10–18px dashes with 6–10px gaps, or wobble as a 2px underline, so no line runs as a clean hairline from edge to edge. Shapes are simple — soft rectangle, soft pill, soft circle — with interest coming from color shift and dapple rather than from ornament, bevels, or geometric flourishes. Perfect squares, 0-radius cards, and hard 1px boxes have no place on a painted surface.

## Components

Panels are cream gradients with a 1px ink-alpha edge, a 10px radius, one warm outer shadow, an inner sunlight glaze, and a dapple overlay at 55% in soft-light; headings inside get a broken blush underline. Buttons are pills painted with a sky-to-sunlight gradient and ink labels, which lift 2px and warm on hover, settle on press, and show a 2px ink focus ring instead of a bright outline. Inputs are near-white wells with an inset cool wash that turns warm and rings softly in sky on focus, and errors switch the border to a muted rose with an italic sentence rather than a saturated red. The status bar is a studio note — italic Garamond on the left, 13px mono data on the right, pastel daubs marking saved, still wet, and failed — and the toggle is a sun dial whose cream blob knob travels across a cool-to-warm track in 240ms. Menus are quiet lists where the selected row is a sunlight wash with a dashed blush brushstroke down its left edge, never a solid bar.

## Do's and Don'ts

Do build surfaces from layered pastels, do let the dapple fall across component boundaries, do break every rule into brushstrokes, do keep ink text on pastel fills, and do let motion feel like light shifting rather than elements sliding. Don't reproduce any painting, detail, signature, or museum image, don't push a hue past roughly 35% saturation, don't reach for hard offsets, glass, or neon, and don't trade a strict grid for a painterly look — the calm only works when the arrangement is exact.
