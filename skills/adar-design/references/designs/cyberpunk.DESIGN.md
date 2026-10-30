---
version: alpha
name: Cyberpunk / Neon Noir
colors:
  background: "#0a0a0f"
  surface: "#14141f"
  foreground: "#e8e8f0"
  muted: "#6b6b85"
  primary: "#ff00ff"
  accent: "#00ffff"
  danger: "#ff0055"
  warning: "#ffe600"
  success: "#00ff9c"
typography:
  h1:
    fontFamily: Orbitron
    fontSize: 32px
    fontWeight: 700
  body:
    fontFamily: Space Mono
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

Cyberpunk / Neon Noir renders the interface as a HUD on a dying machine: a near-black #0a0a0f field, a 1px magenta or cyan outline, and a glow that behaves like light spilling off the frame. Nothing is soft — corners are chamfered, hairlines are 1px, state changes land in 80ms flashes — so the surface reads as military-industrial hardware that happens to be beautiful. It should feel cold, dense, and faintly surveilled, never playful and never glossy.

## Colors

The ground is black with a violet cast (#0a0a0f) and panels one step up at #14141f, separated by #2a2a3d rules; #e8e8f0 carries body text and #6b6b85 is the only muted tone. Neon is reserved for signal: magenta #ff00ff for primary action and active state, cyan #00ffff for focus and live telemetry, acid #00ff9c for success and data flow, yellow #ffe600 for warnings and scan labels, red #ff0055 for failure. The paletteVariants add the working sets — neonNoir for roles, glitchRgb for RGB-split channels, acidTerminal for terminal fragments, hudChrome for panel, bar, and rule values — and each stays inside the same compressed dark range so screens feel lit by the same source.

## Typography

Orbitron is the loud voice — hero titles, section headers, and big numbers, always uppercase with 0.08em–0.16em tracking, because the geometric face needs air to read as engineered rather than cramped; Rajdhani is the quieter display alternative when a condensed, more human shape is wanted. Space Mono carries every sentence, table cell, and help text, and Share Tech Mono owns HUD labels, ids, coordinates, and terminal fragments at 11px–13px with tabular numerals. Two weights maximum, no italics, no faux-bold, and no display face at paragraph length.

## Layout

Layout is a dashboard grid: a fixed HUD header at the top, a fixed telemetry footer at the bottom, and content in a 12-column field on the 4/8/16/32/64 spacing scale with 16px gutters as the floor. Panels butt against grid lines behind 1px borders rather than floating on gaps, corners are chamfered 12px on two opposite corners, and dense readouts align to monospace columns so numbers stack in real vertical rules. On narrow screens the chamfer and wrapper glow drop first, then panels collapse to a single column — the header/footer chrome never disappears.

## Elevation & Depth

Depth is light plus hard shadow: a component sits flat on the black field, is outlined by a 1px neon border, emits a 0 0 12px glow of its own hue, and casts a 4px 4px 0 #000000 offset so it still reads as a physical object. Hover and focus widen the glow to 24px–32px rather than lifting or blurring the element, and pressing translates it 4px into its shadow. Atmosphere layers are the upper planes: 3px-pitch scanlines at 6%, film grain at 4%–8%, and an elliptical vignette darken the edges, all fixed and pointer-events: none, with modals above everything.

## Shapes

Shapes are rectangles with a 2px radius and a 12px chamfer cut on two opposite corners, so corners look milled rather than rounded. Line weights are 1px hairlines and 2px emphasis rails — no 4px chunky borders, no pills, no circles except 6px status dots and 4px–6px legend squares. Icons are thin single-weight strokes with a 2px terminal cap, and any imagery gets image-rendering: pixelated or a duotone magenta/cyan pass so no photographic softness enters the frame.

## Components

Panels are chamfered #14141f slabs with a 1px magenta border, cyan inset top highlight, hard black offset, and a 32px header bar of Share Tech Mono labels plus a pulsing dot; the glow lives on a wrapper because clip-path clips shadows. Buttons are Orbitron plates on solid magenta with a 4px 4px 0 black shadow that translates away on :active and a 2px cyan focus ring, with cyan-outline secondary and dim ghost variants. Inputs are black wells with a 2px cyan left rail that flares on focus and turn red with an 'ERR:' prefix when invalid, the status bar is a 28px strip of Share Tech Mono telemetry, and menus are Rajdhani rows with index numbers, a magenta left rail, and a gradient wash on the selected item.

## Do's and Don'ts

Do keep the field near-black, do outline every glowing thing with a 1px border, do carry header and telemetry chrome on every screen, and do fire glitch as a short 80ms–160ms state instead of a permanent effect. Don't lift the ground toward gray, don't put neon on light backgrounds, don't stack three neon hues on one component, don't round past 2px, don't blur a shadow, and don't set a paragraph in Orbitron.
