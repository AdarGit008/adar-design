---
version: alpha
name: The Incredible Machine
colors:
  background: "#f5efe0"
  surface: "#fffaf0"
  foreground: "#2b2b2b"
  muted: "#8a8175"
  primary: "#e63946"
  accent: "#2d7dd2"
  danger: "#c1121f"
  warning: "#ffd23f"
  success: "#52b788"
  border: "#2b2b2b"
  divider: "#8a8175"
  selection: "#ffd23f"
  overlay: "#2b2b2b"
  selectionText: "#2b2b2b"
typography:
  h1:
    fontFamily: "Fredoka"
    fontSize: 32px
    fontWeight: 700
  h2:
    fontFamily: "Fredoka"
    fontSize: 22px
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
  none: 14px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
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

This mode stages the interface as a Rube Goldberg workbench: a warm cream canvas, crayon-bright parts, ink outlines, and a visible chain of cause and effect running left to right. Every panel is a step in the machine, every action throws a lever, and the reward for clicking is that something else moves. It is whimsical and hand-drawn-feeling, but the grid underneath is strict — the playfulness lives in color, motif, and springy motion, never in sloppy alignment. It should feel like a toy you are allowed to take apart, not a cartoon skin on a dashboard.

## Colors

The ground is warm cream #f5efe0 with cards one shade lighter at #fffaf0, and ink #2b2b2b carries every outline and nearly all text. Six crayon colors do the talking: red #e63946 is the primary lever and the only color for the main call to action, blue #2d7dd2 is the secondary action, link, and focus ring, yellow #ffd23f is highlight and warning, green #52b788 means the test run passed, with #c1121f for hard failure and #8a8175 for muted labels and chutes. Nothing is layered with alpha or gradient — a part is one flat fill inside one ink stroke, exactly like a shape coloured in with a crayon, and the crayon ramps give each hue a light/base/dark triad for pressed and shaded states.

## Typography

Fredoka leads, with Baloo 2 and Chewy as the playful fallbacks, at 700 weight in Title Case for headings from 20px up; its rounded terminals are the whole point, so a neutral grotesque is never a substitute. Body copy drops to Fredoka 400/500 at 16–18px with 1.5 line-height, and long paragraphs are rare by design — this is a machine, so most text is a part label, a step name, or a shout. IBM Plex Mono appears only for machine data: part counts, coordinates, step logs, and build ids, where its monospace rhythm makes the numbers feel instrument-like.

## Layout

Layout is a workbench rail: a 4px spacing scale stepping 4/8/16/24/40px, a 12-column grid at 24px gutters, and a left-to-right flow with the trigger at the start and the outcome at the end, joined by visible connectors — a dashed rule, a chute, a pulley cord. Sequences stack vertically on narrow screens but keep their step numbers and dotted rail, so the order of operations never disappears. Every container snaps to the grid, and the whimsy is allowed in the motif that sits on the grid, never in a nudged box or an optical cheat.

## Elevation & Depth

Depth is stamped on like rubber: 6px 6px 0 #2b2b2b hard offsets for cards, buttons, and tray rows, with no blur and no ambient shadow, plus one low soft lift (0 8px 16px rgba(43,43,43,.10)) permitted only for a floating tray or drag ghost. Pressing an element moves it into its own shadow — translate(6px,6px) with the offset collapsed to 0 0 0 — so interaction reads as a physical part being pushed rather than a button being styled. Internal depth is a single inset rule, inset 0 3px 0 rgba(43,43,43,.12), for wells like inputs; there are no glossy highlights, no bevel gradients, and no neon glow anywhere in the system.

## Shapes

Everything is rounded and chunky: 14px radius on cards, media, and inputs, full pills on buttons, badges, and lever tracks, and a consistent 3px #2b2b2b ink stroke around every shape so parts look cut out and drawn around. Motif shapes are built from primitives — circles for balls and pulleys, wedges for ramps, a bar with a ball knob for levers, arcs for chutes, coils for springs — and are used as iconography with meaning, not as confetti. Square 0-radius cards, sub-3px hairlines, and glassy translucency have no place here, and the only perfect circles allowed to float free are the crayon status dots.

## Components

Cards are cream panels with a 3px ink stroke, 14px radius, and a 6px hard shadow; when a card is a step in a sequence, an 8px dotted rail runs down its left edge and a yellow circle carries the step number. Buttons are ink-stroked pills in crayon red whose shadow collapses under the press, with a cream-filled secondary that keeps a yellow shadow so it still looks like a part rather than a ghost. Inputs are sunken cream wells set in IBM Plex Mono that switch to a lighter fill and a blue outline on focus, toggles are lever tracks with an ink-stroked ball knob that turns from blue to green, and the status bar is a machine log — mono, dot-prefixed green/yellow/red, with a part counter and the single 'Test run' button on the right.

## Do's and Don'ts

Do give every action a visible consequence elsewhere on the screen, do outline every shape in the same 3px ink, do keep one crayon per role, and do let motion overshoot exactly once before it settles. Don't copy the game's art, logo, character, or level layouts, don't put two crayon colors in one component as decoration, don't reach for neon, glass, or gradient depth, and don't trade grid alignment for a hand-drawn look.
