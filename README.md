# adar-design

A **Pi skill** that applies a retro + fine-art design system to any website or UI. Twenty selectable visual modes:

| Mode | Aesthetic | Signature |
|------|-----------|-----------|
| `bios` | BIOS / POST / text-mode — Award BIOS blue, VGA 16-color, IBM 3270, DOS shell | The POST memory count-up + function-key strip |
| `arcade` | 80s Arcade — 8-bit neon, hard 4px pixel borders, Press Start 2P | The pixel-border panel + press-physics button |
| `terminal` | Terminal / CRT — phosphor green, scanlines, VT323 | The blinking block cursor at a `$` prompt |
| `vaporwave` | Synthwave / Outrun — sunset gradient, chrome wordmark | The sunset-grid horizon + chrome wordmark |
| `win95` | Windows 95 — teal desktop, gray bevels, navy title bars | The beveled button + title bar |
| `c64` | Commodore 64 — blue screen, light-blue PETSCII text | The blue PETSCII screen + border frame |
| `gameboy` | Game Boy LCD — 4-shade olive monochrome dot matrix | The 4-shade LCD dot-matrix screen |
| `cyberpunk` | Neon-noir — magenta/cyan neon, glitch, HUD | The glitchy neon HUD |
| `stranger-things` | Stranger Things title — red-neon serif on black | The red-neon serif wordmark |
| `atari-sierra` | Atari / Sierra logo — horizontal-slice thickness gradient | The horizontal-slice thickness-gradient divider |
| `tim` | The Incredible Machine — whimsical Rube-Goldberg, crayon colors | The machine-contraption motifs + crayon palette |
| `nasa80` | 80s NASA / space — worm red, starfield, blueprint grid | The red "worm" wordmark + starfield |
| `kandinsky` | Kandinsky — abstract circles/arcs, synesthetic color | The overlapping circles-and-arcs composition |
| `goya` | Goya — chiaroscuro, etched crosshatch | The bone-lit figure emerging from darkness |
| `bauhaus` | Bauhaus — geometric grid, red/blue/yellow | The circle + square + triangle on a strict grid |
| `cubism` | Cubism — fragmented planes, multiple viewpoints | The fractured plane showing two viewpoints |
| `expressionism` | Expressionism — emotional distortion, rough brushwork | The wavy brushstroke band + emotional color |
| `fauvism` | Fauvism — wild arbitrary color planes | The flat bold arbitrary-color plane |
| `folk-art` | Folk art — naive hand-painted charm | The hand-painted decorative border |
| `impressionism` | Impressionism — broken brushstrokes, dappled light | The broken-brushstroke dappled light |

Each mode ships a full token set (colors, fonts, spacing, radius, shadow, motion, effects), work-style rules, component recipes, copywriting voice, do/don't lists, and accessibility notes — plus a lint-clean Google [`DESIGN.md`](https://github.com/google-labs-code/design.md) schema file and machine-readable `tokens.json` / `tokens.css`.

## Mixing modes

A **mix** keeps one base mode and overrides whole token groups from other modes — two or more modes' tokens active on one surface. Precedence: **overrides > base > cross-cutting rules**. Override whole groups only (never half a group); the base supplies the copywriting voice unless `copywriting` is overridden.

Mixes are data, not code: add `data/mixes/<id>.json` (see `data/mixes/_template.json`) and rerun the generator. A mix may use another mix as its base (reuse). Named mixes get their own resolved `--adar-<id>-*` namespace in `tokens.css`, a `mixes` entry in `tokens.json`, and a `references/mixes/<id>.md` spec.

```text
/skill:adar-design arcade          # one mode
/skill:adar-design neon-console    # a named mix (arcade base + terminal type/effects)
```

## Install

```bash
pi install git:github.com/AdarGit008/adar-design
```

This loads the `adar-design` skill into Pi. Alternatively, copy the skill directory into any Pi skill location (`.pi/skills/`, `~/.pi/agent/skills/`, or `.agents/skills/`).

## Use

The skill auto-triggers when a task matches a retro/underground/80s/arcade/neon/terminal/hacker/CRT/BIOS/DOS/text-mode request. Force it (and pick a mode or mix) explicitly:

```text
/skill:adar-design bios
/skill:adar-design arcade
/skill:adar-design terminal
```

## File layout

```
skills/adar-design/
├── SKILL.md                      # the skill (routing description + mode index + mixing + work-style rules)
├── tokens.json / tokens.css      # machine-readable token registry (namespaced --adar-<mode|mix>-*)
└── references/
    ├── <mode>.md                 # full per-mode spec: tokens, rules, recipes, copywriting, a11y
    ├── mixes/<mix>.md            # resolved mix spec: base, overrides, resolved tokens
    ├── designs/<mode>.DESIGN.md  # Google-spec, lint-clean
    └── tokens.md                 # consolidated token registry
```

## Adding or editing a mode

Modes are **data, not code**. Edit `data/modes/<id>.json` (see `data/modes/_template.json`), then regenerate every file:

```bash
node scripts/generate.mjs
```

Add a new mode by dropping a new `data/modes/<id>.json` and rerunning.

## Verify

```bash
npx @google/design.md lint skills/adar-design/references/designs/*.DESIGN.md
```

## Sources & licensing

Skill code is **MIT**. Design tokens are sourced from: [NovusGFX/retro-design-system](https://github.com/NovusGFX/retro-design-system) (MIT), [BOOTSTRA.386](https://github.com/kristopolous/BOOTSTRA.386) (Apache-2.0), [NES.css](https://github.com/nostalgic-css/NES.css) (MIT), [retro-terminal](https://claude-design-skills.convoke.software/styles/retro-terminal) (MIT), [tui-designer](https://github.com/ckorhonen/claude-skills) (MIT), [neo-terminal](https://github.com/OneWave-AI/open-agent-stack) (MIT), the lospec ["Award BIOS" palette](https://lospec.com/palette-list/award-bios), and the [int10h.org Oldschool PC Font Pack](https://int10h.org/oldschool-pc-fonts/) (CC BY-SA 4.0). Fonts: Press Start 2P (OFL 1.1), VT323 (OFL), IBM Plex Mono (OFL). Pop-culture modes (`stranger-things`, `atari-sierra`, `tim`) and fine-art modes (Kandinsky through Impressionism) are evocations only — no trademarked or copyrighted assets are reproduced.
