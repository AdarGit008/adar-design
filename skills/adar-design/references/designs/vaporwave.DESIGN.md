---
version: alpha
name: Vaporwave / Synthwave
colors:
  background: "#1a1038"
  surface: "#2a1b52"
  foreground: "#f7ecff"
  muted: "#9d8bd6"
  primary: "#ff6ec7"
  accent: "#00e5ff"
  danger: "#ff3b6b"
  warning: "#ffd300"
  success: "#35f0b0"
typography:
  h1:
    fontFamily: Audiowide
    fontSize: 32px
    fontWeight: 700
  body:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 4px
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

Vaporwave / Synthwave is a horizon, not a texture: a deep purple night above, a pink-to-yellow sunset below, and a cyan grid floor receding into it. The interface borrows the visual grammar of a 1984 arcade flyer and a late-night car commercial — glow instead of shadow, gradient sky instead of flat fill, chrome lettering instead of a plain wordmark. It is allowed to be glossy and sentimental, but it is assembled from a fixed set of parts: sunset band, striped sun, grid plane, chrome wordmark, neon signals, and Space Mono body copy.

## Colors

The night ground is #1a1038 with surfaces one step up at #2a1b52, body text in #f7ecff, and #9d8bd6 as the only muted tone. The sunset gradient supplies the emotional color — #ff6ec7 into #ff8c42 into #ffd300, always bottom-anchored and never behind text — while the working neons are pink #ff6ec7 for primary action and sun rim, cyan #00e5ff for focus, links, and grid lines, and yellow #ffd300 for values and the sun's edge. Orange #ff8c42 exists only as a gradient stop, danger #ff3b6b and success #35f0b0 stay rare, and no color is ever desaturated toward white.

## Typography

Audiowide carries the display voice — wordmark, headings, buttons, menu labels — uppercase with 0.04em–0.12em tracking, with Orbitron and Michroma as substitutes when a squarer or wider cut is needed. Space Mono carries everything else at 14px–16px/1.6, which keeps the technical, terminal-adjacent undertone that stops the look from becoming a poster. The chrome gradient belongs to the wordmark alone, clipped to the glyphs with a 1px #1a1038 outline, and hierarchy comes from size, tracking, and case rather than from extra weights or italics.

## Layout

Layout is a staged horizon with three horizontal bands: night sky at the top holding the wordmark and navigation, a mid field of panels on #2a1b52, and the sunset band with the striped sun and perspective grid closing the page. Panels sit on the 4/8/16/24/40 spacing scale with 24px–40px padding and generous vertical rhythm, because the aesthetic needs air around the glow. The grid plane is drawn with repeating-linear-gradient in a transform: perspective(320px) rotateX(62deg) element masked to fade out at the far edge, and it is decoration behind content — never a background for readable text.

## Elevation & Depth

Elevation is emission: a raised surface glows pink (0 0 24px rgba(255,110,199,0.55)) and a focused or live one glows cyan, so nothing needs a dark drop shadow — the sky already is the dark. Panels get a 1px translucent #f7ecff edge at 18% plus an inset top highlight for the glassy rim, and buttons add a gradient fill that lightens on hover while the bloom widens. Depth is layered by z-order on the horizon (sky, sun, grid, content) rather than by blur, and backdrop-filter stays off so the sunset behind a panel is never frosted.

## Shapes

Shapes are soft rectangles: 4px radius on panels, buttons, inputs, and dropdowns, 1px translucent edges instead of heavy borders, and circular geometry reserved for two things — the sun disc and status dots. The sun is a circle clipped by horizontal ink bands (#1a1038) whose spacing widens toward the bottom, imitating the classic striped sunset, and the grid is a single plane of 1px cyan lines at 96px spacing that scale with perspective. Icons are 1.5px–2px line strokes with rounded caps, never pixel art and never filled grey.

## Components

The hero panel is the signature: a #2a1b52-to-#1a1038 body with the sunset footer band, striped sun, and cyan grid bleeding below, plus a chrome-gradient wordmark above it. Standard panels are quieter — gradient fill, translucent edge, pink bloom — and carry tables, forms, and cards. Buttons are pink-to-orange gradient plates with a pink bloom that widens on hover and a cyan 2px focus outline; inputs are dark wells in Space Mono that switch to a cyan border and glow on focus; the status bar is a 36px gradient strip with tracked Space Mono labels and a pulsing pink ON AIR dot; menus are Audiowide labels that invert into an orange-to-yellow gradient for the selected item, with a cyan left rule marking the active row in the dropdown.

## Do's and Don'ts

Do anchor the sunset to the bottom, do keep chrome for the wordmark alone, do let glow replace shadow, and do keep every paragraph in Space Mono on an opaque ground. Don't run gradients behind body copy, don't add a second chrome element, don't frost panels with backdrop-filter, don't use hard 0px pixel corners or block shadows, and don't drift toward pastel — the night has to stay dark for the neon to mean anything.
