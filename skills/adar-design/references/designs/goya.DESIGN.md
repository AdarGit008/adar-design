---
version: alpha
name: Goya / Black Paintings
colors:
  background: "#0d0b09"
  surface: "#16120e"
  foreground: "#e8dcc8"
  muted: "#8a7a63"
  primary: "#a56a2e"
  accent: "#6e1414"
  danger: "#8f2222"
  warning: "#a56a2e"
  success: "#6b7f5e"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: 700
  body:
    fontFamily: IBM Plex Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 2px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 28px
  xl: 48px
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

This mode stages the interface as a late Goya canvas: a near-black ground, one bone-lit focal point, somber earth pigments, and the whole frame closing into shadow at the edges. It is dramatic but austere — the drama comes from where the light falls, not from ornament, so a page reads as a single lit subject in a dark room. Etching shows up as texture rather than imagery: 1px crosshatch rules, aquatint grain, hairline plate borders, and mono captions that behave like inscriptions. It should feel mounted and witnessed, never decorated, and never nostalgic for a retro screen.

## Colors

The void #0d0b09 is the ground and #16120e is the only surface that lifts off it; charcoal #2a2a28 draws every hairline and every unlit plane. Bone #e8dcc8 carries text and highlight, dimming to #b9a98f for secondary copy and #8a7a63 for labels and captions. Ochre #a56a2e is the working primary — candlelight on a warm earth — with sienna #7a3b1e for pressed and secondary states and blood #6e1414 held back for the one consequential action or true alert on a screen. Saturation stays low and value contrast stays extreme: the system reads as pigment mixed with lead white and bone black, so no hue is allowed to glow, and the earthRamps give each pigment a light/base/dark triad for hover, rest, and press.

## Typography

Playfair Display leads at 700–900 for display, with its high-contrast didone stress supplying the engraved feel; Cormorant and Cormorant Garamond are the softer fallbacks, and Georgia is the last resort before a generic serif. Headings run 32px and up with 1.05–1.2 line-height and slightly negative tracking at the largest sizes, body copy sits at 17–19px/1.6 in Playfair 400 or Cormorant 400, and italic is the register for asides, epigraphs, and placeholders. IBM Plex Mono is the inscription voice: 11–12px uppercase with 0.14–0.18em tracking for plate numbers, dates, states, and captions, never for paragraphs. Typography does the dramatic work here, so a neutral grotesque or a rounded sans would collapse the whole mode.

## Layout

Layout is a mounted plate: a 4px-derived scale of 4/8/16/28/48px, a 12-column grid at 28px gutters, and margins wide enough that the dark ground always frames the content. The reading column rarely exceeds 68 characters, because long light-on-dark lines smear; the composition is built around one focal block per view, positioned in the upper-left light and allowed to fall off toward the lower right. Rules are 1px hairlines, never boxes within boxes, and captions sit at the lower left like an inscription on a print. On narrow screens the plate keeps its margins and stacks vertically, preserving the masthead rule, the single focal block, and the caption order rather than collapsing into an edge-to-edge app shell.

## Elevation & Depth

There is no drop-shadow depth in the ordinary sense — light is the elevation model. A lit surface sits at #16120e with an inset bone highlight along its top edge (inset 0 1px 0 rgba(232,220,200,.05)) and a deep 0 24px 64px rgba(0,0,0,.72) falloff beneath it, so it appears to rise out of the void rather than float above a page. The single permitted glow is a 0 0 48px rgba(232,220,200,.05) halo around a focal element, and the page-level vignette darkens from 26% outward to near-black at the frame edge. Nothing is blurred, frosted, or glassy; recessed wells use inset shadow, and a modal is simply a plate on a darker ground with its own hairline border.

## Shapes

Geometry is severe and printed: 2px radii at most, 1px hairline borders, and right angles everywhere else, because the mode's softness belongs to paint handling rather than to corners. Texture replaces curvature — 45° and 135° crosshatch at 3–6% alpha, aquatint grain in flat fills, and occasional drypoint scratches drawn as single 1px lines that stop short of the edge. Icons are engraved marks built from hairlines and hatching, silhouetted against the ground, never filled with gradients or outlined at 3px cartoon weight. Circles are rare and deliberate: a candle flame, an eye, a seal — if a shape is round it is because the subject is round, not because the component is friendly.

## Components

Panels are near-black plates with a 1px charcoal border, 2px radius, a faint top-left light falloff, and a deep shadow beneath; alert panels may take a single 3px blood left edge. Buttons are ochre uppercase Playfair labels on a 2px-radius block whose hover brightens toward #c08a48 and whose press drops to #7a4a1c, with a transparent secondary that keeps a #8a7a63 hairline and bone text. Inputs are sunken wells at #0d0b09 with an inset 0 2px 10px rgba(0,0,0,.8), italic bone placeholders, and an ochre hairline on focus. Toggles are engraved switches whose square knob turns from charcoal to ochre, the status bar is an inscription strip of mono state separated by hairline rules, and menus are catalogue lists where the selected row gains a blood left bar and a mono index.

## Do's and Don'ts

Do light from one source, do keep the ground near-black and the text bone, do let 1px hairlines and crosshatch carry texture, do reserve blood red for the single consequential moment, and do keep motion slow enough to feel grave. Don't reproduce or trace any Goya work, don't pair pure white with pure black, don't round corners or add pill buttons, don't chase brightness with neon or glow, and don't undercut the mood with cheerful microcopy or fast springy animation.
