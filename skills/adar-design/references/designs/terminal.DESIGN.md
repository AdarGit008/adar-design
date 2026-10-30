---
version: alpha
name: Terminal / CRT
colors:
  background: "#0a0e0a"
  surface: "#101710"
  foreground: "#33ff66"
  muted: "#1e9944"
  primary: "#ffb000"
  accent: "#33ff66"
  danger: "#ff3030"
  warning: "#ffb000"
  success: "#33ff66"
typography:
  h1:
    fontFamily: VT323
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
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
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

Terminal / CRT is a phosphor-green console printed on near-black, green-cast glass: monospace type, bloomed glyphs, scanlines at four percent, and a shell prompt standing in for interface chrome. It reads as an operator's view into a running machine — dense, literal, and made entirely of text. Reach for it when the surface should feel like a CLI session or a CRT terminal rather than a web page.

## Colors

Two hues carry the whole mode: the green ramp (foreground #33ff66, muted #1e9944, surface #101710 over background #0a0e0a) builds structure and body text, while amber #ffb000 is the single permitted accent for warnings and attention. Danger red #ff3030 appears only for destructive confirmation. Backgrounds sit within a few points of black with a green cast so bright glyphs appear to bloom rather than sit flat.

## Typography

Everything is monospace. VT323 sets display type and hero headlines at large sizes where its 8-bit stroke stays crisp; IBM Plex Mono carries body copy, labels, commands, and tables at 14–18px with 1.5–1.6 line height. Weights never drift above regular, and bright text always carries text-shadow 0 0 8px to simulate phosphor bloom.

## Layout

Layout is a grid of framed rectangles separated by 16–32px of empty dark space, aligned to a monospace character grid so text columns line up across panels. Screens read top to bottom like terminal output: a prompt line, output blocks, then a status bar pinned to the bottom edge. Density runs high but ordered — line height is the only breathing room, and neither radius nor padding ever softens an edge.

## Elevation & Depth

There is no z-axis: depth comes from glow and frames, never blur. Panels lie flat on the background with a 1px #33ff66 border and an inset screen glow of inset 0 0 120px rgba(51,255,102,0.08); foreground text emits a tight 0 0 8px halo. Nothing casts a drop shadow and nothing lifts on hover — the entire interface shares one plane.

## Shapes

Square everything: radius 0 on panels, inputs, buttons, badges, and avatars. Framing is ASCII first — ┌─┐│└┘ for light frames, ╔═╗ for emphasis — with a 1px solid border only as fallback when the glyphs cannot render. Icons give way to glyphs, brackets, and block characters: [x], █, ░▒▓.

## Components

Panels are bordered rectangles titled inside their own frame (┌─ NETWORK ─┐). Buttons read as bracketed commands — [ run ], [ exit ] — inverting to a solid #33ff66 fill with dark text on hover and carrying an amber focus outline; inputs show a $ or > prompt prefix and a green caret. The status bar is one line of dim mono type pinned to the bottom (user@host left, mode and clock right), and heroes open with a prompt line plus a blinking block cursor.

## Do's and Don'ts

Do keep the two-family monospace pair (VT323 display, IBM Plex Mono body), frame with ASCII before borders, reserve amber for warnings, and make every state change instant. Don't introduce a second hue family, rounded corners, animated transitions, a loud scanline flicker, or button-shaped CTAs — this mode is a prompt, not a dashboard.
