---
version: alpha
name: Red-Neon Serif / 80s Synth-Horror
colors:
  background: "#050505"
  surface: "#120b0b"
  foreground: "#e8e2d8"
  muted: "#8a7f76"
  primary: "#ff1a1a"
  accent: "#b30000"
  danger: "#ff4a3d"
  warning: "#e0a83a"
  success: "#6fbf8b"
typography:
  h1:
    fontFamily: Cinzel
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
  lg: 32px
  xl: 56px
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

This mode is the title card before the show: a near-black #050505 field, a high-contrast serif wordmark burning in red, and a faint film grain over everything. It dresses an interface in 80s synth-horror — hushed, analog, lit from inside the letters — instead of in chrome or pixel hardware. The result should feel like a transmission arriving at night: calm layout, one glowing line, and a great deal of dark around it.

## Colors

The field is #050505 with surfaces one step up at #120b0b and never lighter than #1a0f0f; body text is off-white #e8e2d8 and the single muted tone is #8a7f76. Red carries the light: #b30000 is the structural red used for hairlines, borders, and flat marks, while #ff1a1a is the emitted red reserved for the wordmark, the one primary action, and live signal. Warm accents — amber #e0a83a, muted green #6fbf8b, alert coral #ff4a3d — appear only in status chrome and never as surfaces. The variants preserve that hierarchy: title lists the wordmark ramp, upsideDown darkens toward #7a0c0c and ash, and synthNight adds magenta and teal for a rare secondary glow that never covers more than a sliver of the page.

## Typography

Display type is a high-contrast serif — Cinzel or Playfair Display for the uppercase wordmark and hero headings, Cormorant Garamond when a lighter editorial line is wanted — always 40px and up, line-height 0.95–1.05, tracked 0.02–0.08em. IBM Plex Mono carries everything else: paragraphs at 15–17px/1.6, labels and buttons at 12–14px uppercase with 0.14em tracking, values in tabular figures with a red caret. The serif is never asked to set running text and the mono never carries the hero, so the contrast between burning letterform and quiet machine text stays absolute. Georgia and serif, then Courier New and monospace, are honest fallbacks — no fake italic, weight, or glow is used to invent hierarchy the type cannot hold.

## Layout

Layout is widescreen and central: a narrow measure of 60–72 mono characters, generous 32–56px breathing room, and one dominant wordmark or headline in the upper third of the view. Content is anchored to a 4/8/16/32/56 spacing scale and centred in a max-width column, with a persistent 44px signal strip along the bottom. Panels are film frames rather than cards — full-width dark rectangles with a 1px red hairline — so the layout reads as a frame around the glow instead of a stack of floating boxes. Nothing is crowded: a second focal point, if the screen truly needs one, is a mid-size serif subtitle, not another bloom.

## Elevation & Depth

Depth is ambient darkness plus emitted light: a panel sits on the field behind a 1px rgba(179,0,0,.45) hairline and a deep 0 24px 60px rgba(0,0,0,.75) drop, while glowing elements add a layered bloom with a tight #ff6f61 core, an 8px #ff1a1a mid, and 28px and 64px falloff. Nothing floats with glass or backdrop-blur; separation comes from the hairline and the black gap. The glow scale is fixed — 0 0 12px interactive, 0 0 28px wordmark, 0 0 64px hero — so two elements never compete at the same intensity. The only hard offset in the system is the 6px 6px 0 #000000 used for a rare detached dialog.

## Shapes

Shapes stay rectilinear and nearly sharp: radius 2px on panels, buttons, and inputs so edges read as film-frame corners rather than app pills, with hairline weights of exactly 1px. Rules and dividers are 1px deep-red or 12%-opacity off-white lines, never 2px bars or filled red bands. Icons are thin 1.5px strokes in #e8e2d8 or #b30000, and the glow is the only soft geometry allowed — it is light, so it may fall off. Nothing is rounded past 2px, and the sole circle in the system is the 6px live-signal dot.

## Components

Panels are #120b0b frames with a 1px red hairline, 24–32px padding, and a deep ambient drop, optionally under a 4% grain layer. The wordmark is the hero: uppercase serif at clamp(48px, 9vw, 120px) in #ff1a1a with a four-stop bloom and quiet mono copy beneath it. Buttons are 1px #b30000 outlined mono labels that brighten to #ff6f61 and gain a 12px bloom on hover, while the single filled variant — #b30000 with #e8e2d8 text and a 24px glow — is allowed once per screen. Inputs are black wells with a #b30000 bottom rule, a red caret, and a 'SIGNAL FAULT' message on error, and the status bar is a 44px strip of tracked uppercase mono whose pulsing dot always carries the word LIVE.

## Do's and Don'ts

Do keep the ground at #050505 and let red only glow, do set the wordmark large and all paragraphs in IBM Plex Mono, do layer a tight core with a wide bloom instead of one blurred shadow, and do animate slowly — 240ms fades, 2400ms pulses, one flicker. Don't fill surfaces with red, don't add pill radii or glassmorphism, don't glow body text, don't lift the ground toward gray, and don't borrow the series' logos, names, or artwork — this mode evokes the treatment and reproduces none of it.
