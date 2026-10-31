---
version: alpha
name: Folk Art
colors:
  background: "#f7f0e1"
  surface: "#fffcf3"
  foreground: "#2b2b2b"
  muted: "#8b7c66"
  primary: "#c0392b"
  accent: "#2c5f8a"
  danger: "#a32e22"
  warning: "#e8b32a"
  success: "#4f7a4a"
  border: "#2b2b2b"
  divider: "#8b7c66"
  selection: "#e8b32a"
  overlay: "#2b2b2b"
  selectionText: "#2b2b2b"
typography:
  h1:
    fontFamily: "Fredoka"
    fontSize: 40px
    fontWeight: 700
  h2:
    fontFamily: "Fredoka"
    fontSize: 24px
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
  none: 18px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 28px
  xl: 44px
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

Folk Art paints the interface as something made by hand and meant to be kept: a warm cream ground, flat reds and blues and greens, ink brush strokes, and a decorative border around every panel. The charm is naive on purpose — corners are round, spacing breathes, motifs are simple petals and leaves — while the grid underneath stays disciplined so the page still reads cleanly. It should feel heartfelt, domestic, and unhurried, like a painted plate or a stitched sampler hung where everyone can see it, never like a folk-pattern skin stamped onto a dashboard.

## Colors

The ground is warm cream #f7f0e1 with cards a shade brighter at #fffcf3, and ink #2b2b2b draws every stroke and carries nearly all text, with #8b7c66 as the only muted tone. Five pigments do the talking: red #c0392b for the primary action and the painted frame, blue #2c5f8a for the secondary action, links, and focus, green #4f7a4a for leaves and confirmation, yellow #e8b32a for highlights and attention, and the deeper #a32e22 held back for failure. Nothing is blended — a shape is one flat fill inside one ink stroke, exactly like paint laid down once — and the pigment ramps give each hue a light/base/dark triad for pressed and wash states rather than a gradient.

## Typography

Fredoka leads with its soft, slightly irregular terminals, backed by Baloo 2 and Chewy as the friendly fallbacks, at 700 weight in Title Case from 20px up with a touch of positive letter-spacing so headings feel painted rather than tightened. Body copy drops to Fredoka 400/500 at 16–18px with 1.6 line-height — generous, because a hand-lettered page is never dense. IBM Plex Mono appears only where numbers must line up, such as quantities, dates, and ledger rows, and never for prose; italics and faux weights are avoided because a brush has one voice.

## Layout

Layout rides a calm scale of 4/8/16/28/44px on a 12-column grid with 28px gutters, and every major region sits inside its own painted container instead of bleeding into the next. Content is centred with real margins and a visible outer frame, so the page reads like a bordered panel or a framed print rather than a full-bleed canvas; borders are inset 4–8px from the container edge and echo its 18px radius at the corners. Sequences stack vertically with a small motif instead of a numbered rail, and nothing is optically nudged: the warmth lives in the border and the motif, never in a misaligned box.

## Elevation & Depth

Depth is minimal and physical: a 4px 4px 0 #2b2b2b ink drop under cards, buttons, and rows, which collapses to 0 0 0 as the element translates into it on press, plus one low soft lift (0 6px 14px rgba(43,43,43,.10)) allowed only for a floating dialog or drag ghost. Inside containers the only depth is a single inset rule, inset 0 3px 0 rgba(43,43,43,.10), for wells like inputs, and a soft radial vignette darkening the outer edge of the page by a few percent. There are no gloss highlights, no layered blurred shadows, no glass, and no glow — light is a wash, not a light source.

## Shapes

Shapes are round and generous: 18px radius on cards, wells, media, and fieldsets, full pills on buttons, badges, and legends, and a consistent 3px #2b2b2b stroke around every shape so each element looks drawn around rather than filled to an edge. Motifs come from primitives — three arcs for a petal, a pointed oval for a leaf, a circle for a berry, a sine path for a vine, four diamonds for a star — and appear at borders, corners, dividers, and empty states with decorative meaning, not as confetti in the middle of text. Sharp 0-radius cards, 1px hairlines, and machined square corners have no place here; the smallest line weight in the system is 3px ink.

## Components

Panels are cream cards with a 3px ink stroke, an inset cream ring, an optional dashed echo 8px inside, and a 4px hard drop, with the heading sitting on a yellow highlight block. Buttons are ink-stroked pills in red whose drop shrinks under the press, with a cream secondary that keeps a blue drop so it still reads as a made object. Inputs are sunken cream wells with an ink stroke that brighten to #fffcf3 and take a blue outline on focus, fieldsets wear a painted vine behind their pill legend, and the status bar is a friendly ledger — dot plus a written state word on the left, a mono count and the single primary button on the right.

## Do's and Don'ts

Do frame every container with a painted border, do fill flat with one pigment per shape inside one ink stroke, do keep the cream ground and the five-pigment palette, and do let the voice stay warm, plain, and forgiving. Don't reproduce any actual artwork, sampler, or motif set, don't reach for gradients, glass, glow, scanlines, or pixelation, don't sharpen a corner or drop to a 1px hairline, and don't copy the charm with cutesy baby talk or shout it in all caps.
