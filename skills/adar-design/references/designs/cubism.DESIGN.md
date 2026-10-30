---
version: alpha
name: Cubism
colors:
  background: "#efe9dc"
  surface: "#f5f1e8"
  foreground: "#2a2a28"
  muted: "#8a7f6f"
  primary: "#b08d57"
  accent: "#5b6b7a"
  danger: "#8f3b2f"
  warning: "#9a7b2e"
  success: "#6b6b3e"
typography:
  h1:
    fontFamily: Archivo Black
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
  xl: 40px
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

This mode stages the interface as an analytic-cubist canvas: a warm cream ground, ochre and olive planes cut across it at slight angles, charcoal edges, and one subject drawn from two viewpoints at once. Nothing floats and nothing glows — surfaces overlap, disagree at their edges, and still hold a strict grid underneath, so the page reads as a constructed picture rather than a stack of cards. It is muted, intellectual, and a little severe: the reward for looking is that the composition resolves, not that something shines. Use it when the work should feel studied, editorial, and hand-built rather than fast and frictionless.

## Colors

The ground is cream #efe9dc with cards one step lighter at #f5f1e8, and charcoal #2a2a28 draws every edge and carries nearly all text. The palette is deliberately narrow and earthen: ochre #b08d57 for the primary action, blue-gray #5b6b7a for links, focus, and secondary action, olive #6b6b3e for a settled or successful state, #8f3b2f for hard failure, sand #d9cfba for wells and paste shadows, and warm gray #8a7f6f for muted labels and lifted offsets. Every plane is one opaque fill — no alpha, no gradient, no directional light — because Cubist space is described by the shifting relationship of planes, not by a lamp. The earth ramps give each hue a light/base/dark triad for hover and pressed states, so shading happens through palette steps rather than through blur.

## Typography

Archivo Black leads at 20px and up in Title Case or uppercase, and the type is treated as part of the collage: headings break across two lines and offset 8–24px in x so they fracture the same way the planes do. Body copy drops to Archivo 400/500 at 16–18px with 1.55 line-height in charcoal, kept axis-aligned inside tilted containers so readability survives the composition. IBM Plex Mono is reserved for catalogue data — accession numbers, dimensions, dates, editions — where its fixed rhythm makes the numerals feel archival. No script, no humanist serif, and no decorative display face is admitted; the style's drama comes from scale and placement, not from letterform ornament.

## Layout

Layout is a 12-column editorial grid in a 4/8/16/24/40px scale, with 24px gutters and generous margins, over which planes are cut at 3–12° off the orthogonal. Composition is asymmetric by rule: a large subject plane holds two-thirds of the first viewport, a narrow column of text sits against it, and the remaining space is one quiet facet of ground rather than filler. Sections advance as plates in a catalogue — each has a mono plate number, a title, and a single dominant plane — and the left-to-right reading order is never broken even where facets overlap. On narrow screens the tilt reduces to 3° and the planes stack, but their chamfered corners and offset edges are kept so the construction is still legible.

## Elevation & Depth

Depth is collage depth, not light: planes overlap, each carrying a 2px #2a2a28 edge, and lift with a single hard 6px 6px 0 #8a7f6f offset that behaves like a pasted shadow rather than a cast one. There is no blur, no ambient occlusion, no glow, and no translucent veil anywhere in the system; internal depth is expressed by a filled inset block in sand #d9cfba or by an offset ::before plane in ochre. Pressing an element moves it into its offset (translate(4px,4px) with the shadow closing to 2px) so the gesture reads as a cut paper being pushed flat. Z-order is composition: the smallest plane is always on top, and the charcoal edge is what lets a viewer know where one facet ends.

## Shapes

Shapes are angular and asymmetric — chamfered quadrilaterals, chevrons, wedges, and skewed parallelograms made with clip-path — all at 0px radius, outlined at 2px charcoal, and tilted a few degrees so no two neighbours share an angle. Motifs are built from primitives: a disc for a face, a profile wedge for a nose, a cylinder stripe for a bottle, an offset trapezoid for a tabletop, a tape strip for a collage join, and a small triangle for a viewer's mark. Edges are visibly cut — a corner clipped 10–20px, a facet stepping out 4px — and a straight rectangle with a soft shadow is treated as a failure of the style. There are no circles except the motif disc, no curves in container geometry, and no ornament that does not derive from a plane.

## Components

Cards are cream facets with a 2px charcoal edge, a chamfered bottom-right corner, and a 6px hard warm-gray offset, often with a single ochre plane pinned behind them. Buttons are angular ochre cuts that lose their offset under the press, with a cream-stroked secondary that keeps a warm-gray shadow so it still reads as a plane rather than a ghost. Inputs are cream wells with a 10px thick left edge that turns blue-gray on focus and charcoal otherwise, set in IBM Plex Mono so values look catalogued, and toggles are faceted parallelogram knobs sliding along a skewed track. The status bar is a catalogue strip — mono labels split by 2px rules, each with an 8px state parallelogram, an edition counter, and the single primary action at the right.

## Do's and Don'ts

Do break every rectangle with a clip-path, show two viewpoints of any subject, keep one opaque earth fill per plane, and let headings and planes disagree by a few degrees. Don't reproduce any artwork, drawing, or signature, don't soften the construction with gradients or blur, don't tilt running text, and don't trade the grid for the collage — the tension between them is the entire effect.
