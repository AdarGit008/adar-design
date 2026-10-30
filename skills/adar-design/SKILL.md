---
name: adar-design
description: "Apply the Adar Design retro design system when building, theming, or restyling websites and UI. Three selectable visual modes: (1) BIOS / POST / text-mode — Award BIOS blue, VGA 16-color, IBM 3270 mainframe, DOS shell; (2) 80s Arcade — 8-bit neon, hard pixel borders, Press Start 2P; (3) Terminal / CRT — phosphor green, scanlines, VT323. Use when the user asks for a retro, underground, 80s, arcade, neon, terminal, hacker, CRT, BIOS, POST, DOS, VGA, or text-mode look. Invoke /skill:adar-design <bios|arcade|terminal> to force a mode."
license: MIT
metadata:
  version: 0.1.0
  modes: arcade, bios, terminal
---

# adar-design

Apply the Adar Design retro design system when building, theming, or restyling websites and UI. Three selectable visual modes: (1) BIOS / POST / text-mode — Award BIOS blue, VGA 16-color, IBM 3270 mainframe, DOS shell; (2) 80s Arcade — 8-bit neon, hard pixel borders, Press Start 2P; (3) Terminal / CRT — phosphor green, scanlines, VT323. Use when the user asks for a retro, underground, 80s, arcade, neon, terminal, hacker, CRT, BIOS, POST, DOS, VGA, or text-mode look. Invoke /skill:adar-design <bios|arcade|terminal> to force a mode.

## When to use

- The user asks for a retro / underground / 80s / arcade / neon / terminal / hacker / CRT / BIOS / DOS / text-mode look
- The user asks to build, theme, restyle, or 'make it look like' a retro computing aesthetic
- The user names BIOS, POST screen, VGA, CGA, 3270 mainframe, DOS shell, NES/8-bit arcade, or phosphor terminal explicitly

## Choose a mode

This skill implements three visual modes. Pick exactly one per surface.

| Mode | Name | Summary |
|---|---|---|
| `bios` | BIOS / POST / Text-mode | Award BIOS blue POST screen, VGA 16-color attributes, IBM 3270 mainframe fields, and DOS shell chrome — a hardware text-mode aesthetic. |
| `arcade` | 80s Arcade | 8-bit arcade cabinet: deep indigo ground, neon pink/cyan/yellow, hard 4px pixel borders, and Press Start 2P display type. |
| `terminal` | Terminal / CRT | Phosphor-green CRT terminal: green monospace on near-black green-cast glass, scanlines, blinking block cursor, prompt-driven chrome. |

To implement a mode, read its reference file: `references/<mode>.md` (full spec: tokens, rules, component recipes, copywriting, accessibility) and `references/designs/<mode>.DESIGN.md` (Google DESIGN.md schema, lintable). The machine-readable registries are `tokens.json` and `tokens.css` (all modes, namespaced `--adar-<mode>-*`).

## Work-style rules (all modes)

- Pick exactly ONE mode per surface. Never blend modes (no arcade neon on a BIOS screen, no BIOS blue on a CRT terminal) unless the user explicitly asks to combine them.
- Tokens are the source of truth. Read references/<mode>.md and tokens.json for exact values; never substitute a 'close enough' modern default (no rounded-2xl, no Inter, no ease-in-out, no soft drop shadows).
- Where a spec is silent, derive the treatment from the mode's tokens and Do/Don't rules — never fall back to generic Tailwind/Web defaults.
- Every output must state which mode it is implementing.

## Adding or editing a mode

Modes are data, not code. Edit `data/modes/<id>.json` (see `data/modes/_template.json`) and run `node scripts/generate.mjs` to regenerate every file below. Add a new mode by dropping a new `data/modes/<id>.json` and rerunning.

