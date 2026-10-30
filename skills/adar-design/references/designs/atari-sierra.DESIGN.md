---
version: alpha
name: Atari / Sierra Logo Treatment
colors:
  background: "#0a0a0d"
  surface: "#16171c"
  foreground: "#ececee"
  muted: "#86878f"
  primary: "#e8402a"
  accent: "#f5c518"
  danger: "#ff4b3e"
  warning: "#f08a24"
  success: "#52b545"
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
  none: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
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

Atari / Sierra Logo Treatment takes the one move that made 80s publisher branding recognizable and turns it into an interface system: a wordmark or divider sliced into horizontal bands, each band a slightly different thickness, each band a different rainbow color. The stack steps thick to thin — 8, 6, 4, 3, 2 pixels — so the mark reads as a printed logo cut apart on a light table and reassembled with a one-pixel offset per slice. Everything else stays quiet so the slice stays loud: dark or silver ground, geometric display type, orthogonal geometry, hard edges. It should feel like the front of a game box or a title screen, never like a retro filter applied to a modern layout.

## Colors

The five rainbow bands are the palette — red #e8402a, orange #f08a24, yellow #f5c518, green #52b545, blue #2f7fe0 — and they are used in that order at those weights, always as a stack rather than a blend. The field is either near-black #0a0a0d with panels at #16171c, or silver #c9cbd1 with surfaces at #dfe0e4 so the same five hues drop to the desaturated silverField values and stay readable. #ececee carries text on the dark field, #0a0a0d carries it on silver, and #86878f or #5d5f67 is the only muted tone. Rainbow is never a wash behind copy: it lives in the banded stack, the divider, the chip, and the under-rule.

## Typography

Audiowide is the wordmark voice — geometric, wide, logo-like — with Orbitron as its fallback and Space Grotesk behind that, always uppercase at 0.02em–0.08em tracking and never below 14px. The slice effect works on that broad, even-stroke letterform because the horizontal cuts land inside thick stems instead of across thin hairlines. Space Mono carries every sentence, label, and numeric readout: uppercase at 0.12em tracking for tags and status cells, sentence case for running text. Hierarchy comes from scale, case, and band weight, never from fake bold, italics, or outlined display type.

## Layout

Layout is a poster grid: a full-width hero band holding the sliced wordmark, a content field beneath it, and a low status rail — anchored by 4/8/16/24/32px spacing steps and a 23px slice module that repeats as rule, divider, or chip. Alignment is strictly left and center; nothing is rotated, staggered, or optically nudged off the horizontal. The slice stack may span the full bleed at the top of a panel, or appear as a narrow vertical chip at the start of a rail, but it never runs at an angle. Long content sits in single columns of 60–72 characters so the display type stays a punctuation mark, not a wall.

## Elevation & Depth

There is one depth cue and it is drawn, not lit: a hard 6px 6px 0 #000000 offset on detached plates such as buttons, cards, and dropdowns, with no blur anywhere. The slice stack supplies the system's other sense of depth — the bands appear to step back as they thin, which is the illusion that makes the wordmark read as sliced rather than striped. Slices and dividers are therefore always flat and shadowless, and the only glow in the system is a 6px blue halo reserved for focus-adjacent emphasis on the dark field, never on a rainbow element.

## Shapes

Shapes are rectangles: radius 0, no chamfers, no diagonals, no circles except an avatar or a play dot when content demands one. The single expressive geometry is band height — a divider is a 23px stack, a panel rule is the same stack at the top edge, a micro-rule is the 12px hairline version, and a wordmark is the same five bands applied to letterform slices with a 1px plate shift. Corners are cut square by ending a fill, and imagery is flat two-or-three-color art with hard edges and image-rendering: pixelated when scaled.

## Components

Panels are #16171c plates with the 23px slice stack pinned to the top edge and a 6px hard offset shadow; hero wordmarks apply the five bands to the display text itself. Buttons are yellow #f5c518 Audiowide plates on #0a0a0d text that lift by their shadow on hover and reveal the 12px hairline slice; inputs are Space Mono wells on a 3px rule that swaps to the micro-slice on focus; the status bar is a 28px rail led by a vertical rainbow chip; menus are horizontal rails where the selected item turns #f5c518 and gains the hairline under-rule. Every component owns at most one rainbow element — two is noise.

## Do's and Don'ts

Do build marks from the 8/6/4/3/2 slice stack, do keep one field per surface (near-black or silver), do set wordmarks in Audiowide uppercase and everything else in Space Mono, and do keep bands hard-edged and uninterpolated. Don't trace a real Atari or Sierra logo, don't blur or gradient the rainbow, don't round or skew a corner, don't reorder or re-weight the bands, and don't animate anything but a five-beat stepped wipe. The attribution note applies literally: evocation only, no trademarked logos reproduced.
