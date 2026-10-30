---
name: adar-design
description: "Apply the Adar Design retro design system when building, theming, or restyling websites and UI. Selectable visual modes — retro: BIOS/POST/text-mode, 80s Arcade, Terminal/CRT, Vaporwave, Windows 95, Commodore 64, Game Boy, Cyberpunk, Stranger Things, Atari/Sierra, The Incredible Machine, 80s NASA; fine art: Kandinsky, Goya, Bauhaus, Cubism, Expressionism, Fauvism, Folk-art, Impressionism — plus composable mixes that override whole token groups. Use when the user asks for a retro, underground, 80s, arcade, neon, terminal, hacker, CRT, BIOS, DOS, VGA, text-mode, vaporwave, synthwave, win95, C64, gameboy, cyberpunk, 80s, space, 90s-game, or fine-art / art-movement (Kandinsky, Goya, Bauhaus, Cubism, Expressionism, Fauvism, folk art, Impressionism) look. Invoke /skill:adar-design <mode> to force a mode."
license: MIT
metadata:
  version: 0.3.0
  modes: arcade, atari-sierra, bauhaus, bios, c64, cubism, cyberpunk, expressionism, fauvism, folk-art, gameboy, goya, impressionism, kandinsky, nasa80, stranger-things, terminal, tim, vaporwave, win95
---

# adar-design

Apply the Adar Design retro design system when building, theming, or restyling websites and UI. Selectable visual modes — retro: BIOS/POST/text-mode, 80s Arcade, Terminal/CRT, Vaporwave, Windows 95, Commodore 64, Game Boy, Cyberpunk, Stranger Things, Atari/Sierra, The Incredible Machine, 80s NASA; fine art: Kandinsky, Goya, Bauhaus, Cubism, Expressionism, Fauvism, Folk-art, Impressionism — plus composable mixes that override whole token groups. Use when the user asks for a retro, underground, 80s, arcade, neon, terminal, hacker, CRT, BIOS, DOS, VGA, text-mode, vaporwave, synthwave, win95, C64, gameboy, cyberpunk, 80s, space, 90s-game, or fine-art / art-movement (Kandinsky, Goya, Bauhaus, Cubism, Expressionism, Fauvism, folk art, Impressionism) look. Invoke /skill:adar-design <mode> to force a mode.

## When to use

- The user asks for a retro / underground / 80s / arcade / neon / terminal / hacker / CRT / BIOS / DOS / text-mode look
- The user asks to build, theme, restyle, or 'make it look like' a retro computing aesthetic
- The user names BIOS, POST screen, VGA, CGA, 3270 mainframe, DOS shell, NES/8-bit arcade, phosphor terminal, vaporwave, Windows 95, Commodore 64, Game Boy, cyberpunk, or a 90s game explicitly
- The user asks for a fine-art / art-movement look (Kandinsky, Goya, Bauhaus, Cubism, Expressionism, Fauvism, folk art, Impressionism)
- The user asks to mix two or more of the modes' token groups on one surface

## Choose a mode

This skill implements 20 visual modes. Pick one base mode per surface, or mix modes (see "Mixing modes").

| Mode | Name | Summary |
|---|---|---|
| `bios` | BIOS / POST / Text-mode | Award BIOS blue POST screen, VGA 16-color attributes, IBM 3270 mainframe fields, and DOS shell chrome — a hardware text-mode aesthetic. |
| `arcade` | 80s Arcade | 8-bit arcade cabinet: deep indigo ground, neon pink/cyan/yellow, hard 4px pixel borders, and Press Start 2P display type. |
| `terminal` | Terminal / CRT | Phosphor-green CRT terminal: green monospace on near-black green-cast glass, scanlines, blinking block cursor, prompt-driven chrome. |
| `vaporwave` | Vaporwave / Synthwave | Synthwave sunset: deep purple night ground, hot pink/cyan/yellow neon, a striped sunset sun over a cyan perspective grid, and a chrome-gradient wordmark. |
| `win95` | Windows 95 Desktop | Windows 95 classic desktop GUI: teal #008080 field, silver #c0c0c0 chrome, navy #000080 title bars, black 11px system type, and the only beveled depth model in the system — 2px outset/inset, radius 0, no glow. |
| `c64` | Commodore 64 / PETSCII | Commodore 64 home computer: a chunky 40x25 PETSCII screen of light-blue bitmap type on deep blue, wrapped in the bright blue border frame, with a locked 16-color hardware palette. |
| `gameboy` | Game Boy LCD | Nintendo DMG handheld: a four-shade olive-green LCD, dot-matrix texture, chunky 4px pixels, hard edges, and Press Start 2P over VT323. |
| `cyberpunk` | Cyberpunk / Neon Noir | Neon-noir cyberpunk: a near-black #0a0a0f field under hot magenta and cyan glow, 1px HUD chrome with chamfered corners, glitch/RGB-split states, scanlines, film grain, and terminal fragments. |
| `stranger-things` | Red-Neon Serif / 80s Synth-Horror | 80s synth-horror title card: a high-contrast serif wordmark burning in red neon on near-black #050505, off-white mono copy, faint film grain and a heavy vignette. |
| `atari-sierra` | Atari / Sierra Logo Treatment | Sliced 80s publisher logos: a wordmark or divider cut into horizontal bands that step thick-to-thin, filled with a red/orange/yellow/green/blue rainbow over a near-black or silver field. |
| `tim` | The Incredible Machine | 90s puzzle-game workbench: warm cream canvas, crayon red/yellow/blue/green parts, 3px ink outlines, chunky pills, and a visible chain of cause and effect that runs left to right. |
| `nasa80` | NASA 80s / Worm / Space | Deep-space interface: starfield black, a red worm wordmark, thin geometric type, and blueprint grid lines borrowed from mission documentation. |
| `kandinsky` | Kandinsky / Synesthetic Abstraction | Fine-art canvas UI after Kandinsky: warm cream ground, overlapping circles, quarter-arcs, and ruled line-segments in red/yellow/blue struck with 3px black outlines, arranged like a musical score and moving only in slow, contemplative drift. |
| `goya` | Goya / Black Paintings | Goya's dark late period as an interface: near-black grounds, bone-white highlights, somber earth pigments, blood-red accents, and figures emerging from shadow under etched crosshatch. |
| `bauhaus` | Bauhaus / Functional Geometry | Bauhaus school interface: cream ground, primary red/blue/yellow with black rules, radius 0, strict 4px grid, and a circle/square/triangle vocabulary that always does a job. |
| `cubism` | Cubism | Analytic-cubist canvas: a warm cream ground broken into offset charcoal-edged planes of ochre, olive, warm gray, and blue-gray, one form drawn from several viewpoints at once, with flat papier collé cuts instead of shadows or gradients. |
| `expressionism` | Expressionism | Early-20th-century Expressionism as cloth: a near-black ground over deep blue, blood-red and acid-yellow emotional color, condensed display type, and wavy distorted brushstroke edges that make the whole surface feel strained. |
| `fauvism` | Fauvism / Wild Colour / Cut-Paper Planes | Early-modernist gallery surface: warm cream canvas, wild arbitrary red/orange/yellow/green/blue set down as flat opaque planes inside 3px ink contours, simplified silhouettes, and depth made from a second colour block instead of a shadow. |
| `folk-art` | Folk Art | Naive hand-painted folk art: warm cream ground, flat red/blue/green/yellow fills, ink brush strokes, decorative floral and geometric borders, and lettering that looks painted by a careful amateur. |
| `impressionism` | Impressionism — Light & Color | Plein-air light study: cream canvas, five low-saturation pastels behaving like mixed pigment, broken brushstroke rules, dissolved edges, and a soft dappled-light overlay drifting across a strict underlying grid. |

To implement a mode, read its reference file: `references/<mode>.md` (full spec: tokens, rules, component recipes, copywriting, accessibility) and `references/designs/<mode>.DESIGN.md` (Google DESIGN.md schema, lintable). The machine-readable registries are `tokens.json` and `tokens.css` (all modes, namespaced `--adar-<mode>-*`).

## Work-style rules (all modes)

- Pick one base mode per surface. Mix modes only through whole-group overrides (see the Mixing section) — never blend half a group.
- Tokens are the source of truth. Read references/<mode>.md and tokens.json for exact values; never substitute a 'close enough' modern default (no rounded-2xl, no Inter, no ease-in-out, no soft drop shadows).
- Where a spec is silent, derive the treatment from the mode's tokens and Do/Don't rules — never fall back to generic Tailwind/Web defaults.
- Every output must state which mode (or mix) it is implementing.

## Mixing modes

A mix keeps one base mode and overrides whole token groups from other modes — two or more modes' tokens active on one surface.

Precedence: **overrides > base > cross-cutting rules**. Override whole groups only — never half a group. The base supplies the copywriting voice unless `copywriting` is overridden; one `signatureElement` wins (the base's, unless overridden). Every output states its mix (base + overrides). A mix may use another mix as its `base` (reuse); bases resolve transitively, cycles are invalid.

**Override-able groups**

- `colors` → `colors`
- `paletteVariants` → `paletteVariants`
- `fonts` → `fonts`
- `radius` → `radius`
- `spacing` → `spacing`
- `shadow` → `shadow`
- `motion` → `motion`
- `effects` → `effects`
- `rules` → `rules`, `do`, `dont`
- `componentRecipes` → `componentRecipes`
- `copywriting` → `copywriting`
- `accessibility` → `accessibility`
- `signatureElement` → `signatureElement`

**Mixing rules**

- A mix has exactly one base mode and zero or more group overrides, written group: mode.
- Override whole groups only; never blend within a group (no taking colors.primary from one mode and colors.accent from another).
- Precedence: overrides > base > cross-cutting rules.
- The base supplies the copywriting voice unless copywriting is overridden.
- One signatureElement wins: the base's, unless the mix overrides it.
- State the mix explicitly in every output: base plus each override.
- A mix may use another mix as its base (reuse); bases resolve transitively, and cycles are invalid.

**Named mixes**

| Mix | Base | Overrides | Summary |
|---|---|---|---|
| `neon-console` | `arcade` | `fonts`→`terminal`, `effects`→`terminal`, `motion`→`terminal` | Arcade neon geometry with terminal/CRT type, scanlines, and motion. |


## Adding or editing a mode

Modes are data, not code. Edit `data/modes/<id>.json` (see `data/modes/_template.json`) and run `node scripts/generate.mjs` to regenerate every file below. Add a new mode by dropping a new `data/modes/<id>.json` and rerunning.

