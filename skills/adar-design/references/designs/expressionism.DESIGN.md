---
version: alpha
name: Expressionism
colors:
  background: "#14141a"
  surface: "#1b2a4a"
  foreground: "#e8e4dc"
  muted: "#9aa3b8"
  primary: "#b22222"
  accent: "#e6c229"
  danger: "#c0392b"
  warning: "#e6c229"
  success: "#4f7a6f"
  border: "#e8e4dc"
  divider: "#9aa3b8"
  selection: "#e6c229"
  overlay: "#14141a"
  selectionText: "#14141a"
typography:
  h1:
    fontFamily: "Oswald"
    fontSize: 48px
    fontWeight: 700
  h2:
    fontFamily: "Oswald"
    fontSize: 28px
    fontWeight: 700
  body:
    fontFamily: "Oswald"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Oswald"
    fontSize: 12px
    fontWeight: 400
rounded:
  none: 2px
spacing:
  xs: 5px
  sm: 11px
  md: 19px
  lg: 31px
  xl: 47px
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

This mode dresses the interface in early-twentieth-century Expressionism: a near-black ground, deep blue panels, and blood red colliding with acid yellow until the surface feels strained rather than calm. Everything structural stays on a strict grid, and the anxiety is carried by palette pressure, torn brushstroke edges, condensed woodcut display type, and a heavy closing vignette. It is meant for editorial, cultural, and interior-facing work that can bear an uncomfortable mood, not for a checkout flow. The feeling is Munch and Die Brücke, but the execution is clean CSS — distortion at the border, order in the content.

## Colors

The ground is near-black #14141a with panels one step up in deep blue #1b2a4a, bone #e8e4dc carries text, and #9aa3b8 is the only muted tone. Feeling is carried by two colliding colors: blood red #b22222 for primary action, left-edge bands, and heat, acid yellow #e6c229 for accent, focus rings, and the sharp high note, with #c0392b for danger, #4f7a6f for the rare settled success, and #2e4468 as the shading step inside panels. Nothing is naturalistic — a sky is red, a road is yellow — and the emotional ramps give each hue a light/base/dark triad so pressed and disabled states stay inside the same family instead of sliding toward grey.

## Typography

Oswald 700 leads, with Archivo Black and Anton as the heavier fallbacks, set uppercase in one- or two-word headings from 26px up with slightly negative tracking and a per-line offset of a pixel or two so the stack looks pressed by hand. Body copy never joins the distortion: it sits upright in IBM Plex Mono at 15px/1.55, which is what keeps a tense skin usable at length and gives numbers and labels a woodcut, letterpress feel. There is no italic fakery and no letter-spacing past 0.04em, because the tension is meant to come from weight, color, and edge rather than from shredded tracking.

## Layout

Layout is asymmetric but rigid: a 4px-derived spacing scale stepping 5/11/19/31/47px, a twelve-column grid, and compositions built from imbalance — an off-centre column, a tall narrow color band, a low horizon line pushing the eye upward. The asymmetry lives in the macro composition, while every baseline, column edge, and tap target snaps to the grid so nothing feels broken, only weighted. Wavy brushstroke boundaries move between sections and take the tremor; content blocks behind them stay square.

## Elevation & Depth

Depth is smeared rather than lit: an 8px 8px 0 #14141a hard offset for lifted panels and a -6px 4px 18px rgba(20,20,26,.55) side smear for focus surfaces, both landing off-axis so the light feels wrong on purpose. The heavy radial vignette closes the corners from 18% transparency to near-black and belongs to the page shell only, never over text. There is no neon glow, no glass blur, and no gradient bevel — the only bright ring in the system is the 3px acid #e6c229 focus outline, which is drawn on a straight edge so it can never be mistaken for brushwork.

## Shapes

Shapes are near-square — radius 2px — with edges that read as cut or torn rather than drawn: an SVG feTurbulence clip-path at 2–4px amplitude or a hand-sketch 2px stroke, plus rules and underlines that visibly waver ±2px. Bands of color run tall and narrow with torn lower ends, and the occasional 1–2px per-line offset in display type repeats that tremble at the typographic level. Perfect circles, glassy translucency, and pixel-perfect pixel art have no place here; circles appear only as rough strokes that fail to close.

## Components

Panels are deep blue #1b2a4a on near-black with a 2px #14141a stroke, a torn clip-path edge, an 8px hard shadow, and a red band down the left side; their headings are Oswald uppercase with a wavering acid underline. Buttons are blood-red plates rotated fractionally, pressing moves them into their own shadow, and the secondary keeps a bone stroke on the blue field. Inputs are near-black mono wells that shift to a hot border and an acid focus ring, toggles are woodcut switches with a red knob and an acid score line that shortens as it travels, and the status bar is a mono line of state notes with a deliberately wavering top border and one blood-red action on the right.

## Do's and Don'ts

Do let two emotional colors collide per screen, do distort the border and keep the text straight, do keep the ground near-black with blue panels, and do stop every jitter under prefers-reduced-motion. Don't reproduce or imitate any actual painting or print, don't scanline or pixelate the surface, don't set a paragraph in a skewed condensed face, don't encode state in red alone, and don't let the vignette sit over content.
