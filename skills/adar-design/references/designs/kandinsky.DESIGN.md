---
version: alpha
name: Kandinsky / Synesthetic Abstraction
colors:
  background: "#f7f2e8"
  surface: "#fdfaf3"
  foreground: "#111111"
  muted: "#6f6a60"
  primary: "#d62828"
  accent: "#1d4ed8"
  danger: "#a81f1f"
  warning: "#f4b400"
  success: "#2a7d4f"
typography:
  h1:
    fontFamily: Montserrat
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
  lg: 32px
  xl: 64px
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

This mode builds the interface as a painted composition: a warm cream canvas, ink-stroked circles, quarter-arcs, triangles, and ruled lines in red, yellow, and blue, arranged with the pacing of a musical score. Every screen is composed rather than populated — one dominant mass, one counterweight, one travelling line — and the empty cream around the ensemble is treated as material, not as wasted space. Kandinsky's synesthetic premise, color heard as sound, becomes the system's hierarchy: red sounds loudly and leads, blue sounds deep and structures, yellow sounds bright and warns. It should feel like standing in front of a hanging canvas that happens to be interactive, never like a retro screen or a gradient-heavy modern dashboard.

## Colors

The ground is warm cream #f7f2e8 with cards lifted only one step to #fdfaf3 and pure white #fafafa reserved for input wells and badges; ink #111111 carries every outline and nearly all text, with #6f6a60 for muted annotations. Three colors do the talking: red #d62828 is the primary action and the percussive emphasis, blue #1d4ed8 is structure, links, and focus, yellow #f4b400 is highlight and warning, with a darker #a81f1f for hard failure and a quiet green #2a7d4f for success — a fourth voice used sparingly, because a chord of four equally loud colors stops sounding like a composition. Each hue ships with a light/base/dark triad in trioRamps for hover, press, and shadow-step use, and no fill is ever a gradient, a blend, or an alpha composite.

## Typography

Montserrat leads as the geometric sans — its circular bowls echo the motif vocabulary — set at 700/800 for headings from 24px up with 0.02em tracking, in Title Case for editorial labels and UPPERCASE only for short tracked captions of two or three words. Body copy drops to Montserrat 400/500 at 16–18px with 1.6 line-height, giving paragraphs the airiness of gallery wall text without copying any. IBM Plex Mono appears only for catalogue data: plate numbers, dimensions, dates, durations, and figure references, where its fixed rhythm makes the metadata feel labelled rather than written. No script, no blackletter, no italic pseudo-handwriting: the type stays as ruled and impersonal as the geometry it sits beside.

## Layout

Layout follows a composition grid: an 8px base with a 4/8/16/32/64px spacing scale, a 12-column field at 32px gutters, and asymmetric placement that gives the eye a dominant mass at roughly two-thirds left and a counterweight circle or arc small and high at the right. Text blocks stay on the column edges — the geometry is allowed to float, the paragraphs are not — so the interface never trades legibility for painting-like balance. Generous margins (64px at desktop, 32px at tablet, 16px at mobile) keep the cream visible, and every motif group is anchored to a grid intersection so the drift animation returns it to exactly where it began.

## Elevation & Depth

Depth is stamped, never lit: 3px 3px 0 #111111 ink offsets lift cards, buttons, and plates, and pressing an element moves it into its own offset (translate(3px,3px) with the shadow collapsed to 0 0 0) so the interaction reads as a paper plane being laid flat. One soft shadow is permitted, 0 16px 40px rgba(17,17,17,.08), for a single floating plate such as a modal or a dragged catalogue card, and it must never stack with a second soft shadow. Layering is otherwise expressed by overlap — a circle crossing a rectangle's edge, an arc sliding under a line — which is how the composition itself creates depth. There are no glossy highlights, no glass panels, no neon glow, and no alpha stacks used as elevation.

## Shapes

The vocabulary is Euclid's: perfect circles, quarter and half arcs, equilateral triangles, and single ruled line-segments, all struck with the same 3px #111111 outline so every shape looks drawn onto the canvas rather than filled by a UI kit. Rectangles keep radius 0 — a panel is a ruled plane, and rounding it would soften the geometry that carries the whole style. Circles are the signature and may overlap freely, with a smaller circle nested inside a larger one to imply sound or echo; arcs bracket content like a half-frame; triangles point at whatever the page wants read next. Nothing is hand-wobbled, nothing is sketched with a texture brush: the shapes are drafted, and the only organic element allowed is the cream ground itself.

## Components

Panels are ruled cream planes (#fdfaf3) with a 3px ink border, 32px padding, and one 48px motif cluster clipped into a corner; a 12px red bar scores the top of the first heading. Buttons are ink-struck red rectangles in tracked uppercase Montserrat that translate into their shadow on press, with a cream secondary carrying a blue left bar so it still reads as a plane rather than a ghost. Inputs are white #fafafa wells in IBM Plex Mono with an inset blue spine, turning to paper fill and a blue outline on focus, and errors add both a red dot and a written sentence. The status bar is a scored strip of mono entries each prefixed by an outline circle in green, yellow, or red, closed by a plate number ('№ 013') and the single primary action; menus are catalogue lists whose selected row fills yellow and gains an ink bar, and badges are square ink-struck chips whose leading dot is the role's voice.

## Do's and Don'ts

Do compose each screen as a picture with one dominant mass and visible cream, do strike every shape with the same 3px ink outline, do keep color to the trio plus a quiet green, and do let motion drift slowly or not at all. Don't reproduce, trace, or crop any Kandinsky painting or its title, don't round a rectangle or reach for gradients and glass, don't import scanlines or pixel fonts from the retro modes, and don't let motifs become decoration with no meaning to carry.
