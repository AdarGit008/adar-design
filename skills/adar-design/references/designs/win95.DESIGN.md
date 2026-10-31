---
version: alpha
name: Windows 95 Desktop
colors:
  background: "#008080"
  surface: "#c0c0c0"
  foreground: "#000000"
  muted: "#1a1a1a"
  primary: "#000080"
  accent: "#008080"
  danger: "#ff0000"
  warning: "#808000"
  success: "#008000"
  border: "#808080"
  divider: "#808080"
  selection: "#000080"
  overlay: "#000000"
  selectionText: "#ffffff"
typography:
  h1:
    fontFamily: "W95FA"
    fontSize: 18px
    fontWeight: 700
  h2:
    fontFamily: "W95FA"
    fontSize: 14px
    fontWeight: 700
  body:
    fontFamily: "W95FA"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
  caption:
    fontFamily: "W95FA"
    fontSize: 11px
    fontWeight: 400
rounded:
  none: 0px
spacing:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
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

This mode is the 1995 desktop itself: a teal work area, silver window chrome, navy title bars, and controls that are engraved rather than drawn. Its depth model is the inverse of every other mode here — nothing glows, nothing floats, nothing is blurred; a surface is either raised by a 2px outset bevel or recessed by its exact inverse, and that single gesture carries every hierarchy decision. The result should feel like system software: dense, utilitarian, faintly cramped, and entirely certain about which 11px label goes inside which 23px control.

## Colors

The field is teal #008080 with silver chrome #c0c0c0, and the split is absolute — teal only behind windows, #c0c0c0 only inside them. Bevels consume four fixed shades (#ffffff highlight, #dfdfdf light face, #808080 shadow, #000000 dark edge) and they are structural, not decorative, because dropping any one of them flattens the control. Signal is literal and sparse: navy #000080 for active title bars, selection, and focus; #ffffff for fields and wells; #808080 strictly for disabled labels and shading; and the classic 16-color system16 palette for the rare red, green, or yellow status glyph. There are no tints, no alpha washes, and no gradients — an inactive title bar is a flat #808080 band, not a dimmed navy one.

## Typography

Type is W95FA (Tahoma and Verdana as the era's shipped fallbacks) at 11px — a bitmap-era face at its native size, never tracked out, never below 11px, with bold reserved for title bars, dialog headings, and column headers. Mono work such as registry editors, error logs, and DOS boxes uses Courier New at the same 11px. There is essentially no display size in this system: hierarchy comes from weight, from the 18px title bar, and from grooves and group-box frames, so a heading and a label differ by boldness and context rather than by 20px of size. Uppercase appears only where the era put it — menu bar labels, button captions, and the CAPS/NUM/SCRL indicators.

## Layout

Layout is a packed 2px grid with 4/8/12/16 steps: 3px window edges, an 18px title bar, a 20px menu bar, 23px buttons, 21px inputs, 19px menu rows, 2px gaps, and never more than 8px of padding. Windows are opaque rectangles that sit on the teal field with the standard chrome — control menu, title, Minimize/Maximize/Close, menu bar, sunken client area, and optional statusbar — while modal dialogs centre on top with the same construction one level down. Alignment is strict and slightly tight: generous whitespace, optical centring, overlapping cards, and floating toolbars are all foreign to it.

## Elevation & Depth

Elevation is a 2px bevel and nothing else. An up-light of #ffffff plus a 1px #dfdfdf inset against a down-shade of #000000 plus a 1px #808080 inset makes a raised control; reversing all four makes a sunken well. Pressing swaps the pairs and shifts the label 1px right and down through padding, which is the only depth animation in the system — no transform, no shadow growth, no blur. There is no drop shadow under windows and glow is explicitly none: a dialog is in front because it covers what is behind it, and the only 2px 2px 0 #000000 offset in the system is for detached tooltips and drag-proxies. Disabled controls flatten to a single #808080 edge and lose the highlight entirely.

## Shapes

Radius is 0 everywhere: windows, buttons, inputs, scrollbars, group boxes, and statusbar cells are rectangles whose only ornament is a 1px or 2px bevel. Dividers are grooves (1px #808080 over 1px #ffffff) or ridges (the inverse), group boxes are a 1px #808080 frame with its label notched into the top edge, and the arrow, checkmark, and radio dot are 7-13px indexed bitmap glyphs snapped to the 2px grid. Icons are 16px, with 32px for large views and 48px for the desktop, scaled by integer factors only so no edge is ever resampled.

## Components

Windows are the base component: a 2px outer bevel over a 3px frame, an 18px navy title bar with 16px beveled Minimize/Maximize/Close buttons, a 20px menu bar, and a white sunken client well. Buttons are 23px #c0c0c0 plates with the full four-shade bevel, a 75px minimum width, a dotted 1px focus marquee inset 4px, and a second outline for the default action; inputs are 21px white wells with the inverted bevel and a black 1px caret; menus invert hovered rows to navy in a raised #c0c0c0 popup with underlined mnemonics and grooved separators. The statusbar is a row of sunken segments, checkboxes are 13px sunken wells holding a bitmap check, radio buttons are 12px sunken circles with a 4px navy dot, and scrollbars are 16px #c0c0c0 tracks with beveled arrow buttons and a beveled thumb.

## Do's and Don'ts

Do build every raised surface from the same four-shade bevel, do swap rather than tint for press and selection, and do keep the chrome packed on a 2px rhythm with 11px black type. Don't round anything, don't blur or glow anything, don't put teal inside a window or silver on the desktop field, and don't modernize the controls into flat pills with generous padding — the faintly cramped bevel is the entire aesthetic.
