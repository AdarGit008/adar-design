# adar-design

A **Pi skill** that applies a retro design system to any website or UI. Three selectable visual modes:

| Mode | Aesthetic | Signature |
|------|-----------|-----------|
| `bios` | BIOS / POST / text-mode — Award BIOS blue, VGA 16-color, IBM 3270, DOS shell | The POST memory count-up + function-key strip |
| `arcade` | 80s Arcade — 8-bit neon, hard 4px pixel borders, Press Start 2P | The pixel-border panel + press-physics button |
| `terminal` | Terminal / CRT — phosphor green, scanlines, VT323 | The blinking block cursor at a `$` prompt |

Each mode ships a full token set (colors, fonts, spacing, radius, shadow, motion, effects), work-style rules, component recipes, copywriting voice, do/don't lists, and accessibility notes — plus a lint-clean Google [`DESIGN.md`](https://github.com/google-labs-code/design.md) schema file and machine-readable `tokens.json` / `tokens.css`.

## Install

```bash
pi install git:github.com/AdarGit008/adar-design
```

This loads the `adar-design` skill into Pi. Alternatively, copy the skill directory into any Pi skill location (`.pi/skills/`, `~/.pi/agent/skills/`, or `.agents/skills/`).

## Use

The skill auto-triggers when a task matches a retro/underground/80s/arcade/neon/terminal/hacker/CRT/BIOS/DOS/text-mode request. Force it (and pick a mode) explicitly:

```text
/skill:adar-design bios
/skill:adar-design arcade
/skill:adar-design terminal
```

## File layout

```
skills/adar-design/
├── SKILL.md                      # the skill (routing description + mode index + work-style rules)
├── DESIGN.md reference files     # references/designs/<mode>.DESIGN.md — Google-spec, lint-clean
├── tokens.json / tokens.css      # machine-readable token registry (namespaced --adar-<mode>-*)
└── references/
    ├── <mode>.md                 # full per-mode spec: tokens, rules, recipes, copywriting, a11y
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

Skill code is **MIT**. Design tokens are sourced from: [NovusGFX/retro-design-system](https://github.com/NovusGFX/retro-design-system) (MIT), [BOOTSTRA.386](https://github.com/kristopolous/BOOTSTRA.386) (Apache-2.0), [NES.css](https://github.com/nostalgic-css/NES.css) (MIT), [retro-terminal](https://claude-design-skills.convoke.software/styles/retro-terminal) (MIT), [tui-designer](https://github.com/ckorhonen/claude-skills) (MIT), [neo-terminal](https://github.com/OneWave-AI/open-agent-stack) (MIT), the lospec ["Award BIOS" palette](https://lospec.com/palette-list/award-bios), and the [int10h.org Oldschool PC Font Pack](https://int10h.org/oldschool-pc-fonts/) (CC BY-SA 4.0). Fonts: Press Start 2P (OFL 1.1), VT323 (OFL), IBM Plex Mono (OFL).
