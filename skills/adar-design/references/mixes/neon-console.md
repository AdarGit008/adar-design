# Neon Console — mix

Arcade neon geometry with terminal/CRT type, scanlines, and motion.

**Base:** `arcade`

**Overrides**

- `fonts` ← `terminal`
- `effects` ← `terminal`
- `motion` ← `terminal`

**Signature element:** Arcade pixel-border panels with a phosphor-green typewriter cursor.

## Resolved groups

| Group | Source |
|---|---|
| `colors` | `arcade` |
| `paletteVariants` | `arcade` |
| `fonts` | `terminal` |
| `radius` | `arcade` |
| `spacing` | `arcade` |
| `shadow` | `arcade` |
| `motion` | `terminal` |
| `effects` | `terminal` |
| `rules` | `arcade` |
| `componentRecipes` | `arcade` |
| `copywriting` | `arcade` |
| `accessibility` | `arcade` |
| `signatureElement` | `arcade` |

## Resolved tokens

### Colors

| Role | Value |
|---|---|
| `background` | `#0b0b1e` |
| `surface` | `#1a1440` |
| `foreground` | `#e9e9ff` |
| `muted` | `#adafbc` |
| `primary` | `#ffd300` |
| `accent` | `#ff2d95` |
| `danger` | `#ff3b3b` |
| `warning` | `#f7d51d` |
| `success` | `#2bff88` |

### Type & shape

- Display: "VT323", "Courier New", "monospace"
- Mono: "IBM Plex Mono", "Courier New", "monospace"
- Radius: `0`
- Shadow hard: `8px 8px 0 8px #7c1dfd`
- Shadow glow: `0 0 8px #00e5ff`
- Motion easing: `steps(20, end)`
