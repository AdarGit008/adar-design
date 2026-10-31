---
version: alpha
name: Fauvism / Wild Colour / Cut-Paper Planes
colors:
  background: "#f5efe2"
  surface: "#fbf6ec"
  foreground: "#221e1b"
  muted: "#6f6a63"
  primary: "#d7263d"
  accent: "#26408b"
  danger: "#a4161a"
  warning: "#f2c14e"
  success: "#2a9d8f"
  border: "#221e1b"
  divider: "#6f6a63"
  selection: "#d7263d"
  overlay: "#221e1b"
  selectionText: "#ffffff"
typography:
  h1:
    fontFamily: "Fredoka"
    fontSize: 44px
    fontWeight: 700
  h2:
    fontFamily: "Fredoka"
    fontSize: 26px
    fontWeight: 700
  body:
    fontFamily: "Fredoka"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Fredoka"
    fontSize: 13px
    fontWeight: 400
rounded:
  none: 6px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 48px
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

This mode paints the interface as a Fauve canvas: a warm cream ground, colour chosen for its own loudness, and shapes simplified until only the silhouette is left. Every surface is a flat opaque plane inside a 3px ink contour, with depth coming from a second colour block set down behind the first rather than from any shadow. The result is decorative and confident — poster-like — while the grid underneath stays strict, so the wildness lives in hue and placement and never in sloppy alignment. It should feel like a gallery wall you are allowed to rearrange, not a painting reproduced as a skin.

## Colors

Cream #f5efe2 is the only neutral, with cards one step lighter at #fbf6ec and ink #221e1b carrying every contour and nearly all text. Five hues do the shouting — red #d7263d as primary, blue #26408b as accent, orange #f46036, yellow #f2c14e, and green #2a9d8f — with #a4161a for hard failure and #6f6a63 for muted labels. Colour here is deliberately non-literal: it is assigned by what a plane needs beside its neighbour, not by what the object is, and each hue is used at one full-opacity value rather than as a tint series. The ramps in the palette only exist to supply a pressed or hover step; they are never stacked inside one shape to fake light.

## Typography

Fredoka sets the voice — a bold geometric face with generous counters that holds up as flat cut-out lettering at 24px and above, tightened to -0.01em so headings read as blocks of colour-adjacent shape. Montserrat carries every sentence at 400/500 in 17–18px with 1.6 line-height, because a neutral geometric grotesque stays quiet under a loud palette instead of competing with it. IBM Plex Mono appears only where a number needs to feel measured — figure counts, dates, dimensions, catalogue numbers — and its stiffness is the point: it reads as the wall label, not the artwork. No script faces, no faux-italic, no condensed display squeezing, and uppercase only for tracked micro-labels.

## Layout

Layout is a hung composition: a 12-column grid on a 4/8/16/32/48px spacing scale, usually carrying two or three large blocks rather than many small ones, with the dominant plane placed off-centre to leave cream breathing room around it. Margins run 32–48px and are treated as part of the picture, so colour never presses against the viewport edge; a plane may bleed up to 32px past its container, but the cream gutter beside it always survives. Sequences stack vertically on narrow screens and keep their colour bands, numbers, and contour so the rhythm of planes survives the reflow. Decorative cut-paper shapes are parked in the margins and in negative space, never behind paragraphs.

## Elevation & Depth

There is no light model: box-shadow is none across the system, and nothing in the interface ever blurs. Elevation is a second plane — a solid colour rectangle offset by translate(10px, 10px) behind a card, or a 3px ink rule that separates two grounds — so a raised element looks glued down rather than lit. Interaction is signalled by the plane moving rather than by illumination: hover nudges the element two pixels off its plane, press sets it back flush, and the offset shrinks below 640px where space is tight. The single tolerated gradient is the optional sub-10% saffron vignette behind a hero, which may sit under text only after the type clears to #fbf6ec.

## Shapes

Forms reduce to their loudest readable silhouette: blocks for walls and panels, circles for suns and fruit, arcs for backs and waves, wedges for leaves, and a few large organic cut-out blobs for decoration. Hard-edged elements take a 6px radius and a 3px ink contour; decorative shapes may take a pair of 64px corners so they read as scissors-cut rather than as a rounded card. Border weight is constant at 3px and is the smallest line in the system — there are no hairlines, no pills, no 1px dividers, and no icon set that imitates a modern line library. Nothing is bevelled, embossed, or given an inner highlight.

## Components

Cards are cream panels with a 3px ink contour and one offset colour plane behind them, and the plane's hue is the card's role: blue for informational, red for primary, green for success. Buttons are ink-contoured red rectangles with cream labels that shift two pixels off their plane on hover and sit flush on press, with cream secondaries outlined in blue and quiet actions marked by a 5px ink underline. Inputs are cream wells set in IBM Plex Mono whose contour thickens into a blue focus ring and whose error state adds a written sentence rather than leaning on red alone. The status bar is a blue strip of mono label-and-value pairs with the live figure in yellow and a colour square plus a word for state, and menus are flat rows where selection paints the row yellow with an ink bar on its left edge while hover only draws a blue outline.

## Do's and Don'ts

Do choose colour by adjacency rather than by subject, do keep every fill flat and every shape inside a 3px ink contour, and do build depth from an offset colour plane instead of a shadow. Don't reproduce a painting, poster, or signature, don't reintroduce gradients, glass, or soft glow, and don't let the wildness leak into alignment — the palette shouts, the grid does not.
