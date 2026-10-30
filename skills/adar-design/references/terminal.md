# Terminal / CRT — reference

Phosphor-green CRT terminal: green monospace on near-black green-cast glass, scanlines, blinking block cursor, prompt-driven chrome.

**When to use:** When the user asks for terminal, CRT, phosphor green, hacker, CLI, or console aesthetic.

**Signature element:** The blinking block cursor at a $ prompt, and the typewriter hero reveal

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#0a0e0a` |
| `surface` | `#101710` |
| `foreground` | `#33ff66` |
| `muted` | `#1e9944` |
| `primary` | `#ffb000` |
| `accent` | `#33ff66` |
| `danger` | `#ff3030` |
| `warning` | `#ffb000` |
| `success` | `#33ff66` |

### Variant: `phosphorGreen`

| Key | Value |
|---|---|
| `green` | `#00ff00` |
| `greenMid` | `#00cc00` |
| `greenDim` | `#009900` |
| `bg` | `#001100` |
| `deepBg` | `#000800` |

### Variant: `cyberpunkNeon`

| Key | Value |
|---|---|
| `cyan` | `#00ffff` |
| `magenta` | `#ff00ff` |
| `blue` | `#0066ff` |
| `pink` | `#ff1493` |
| `bg` | `#0a0a1a` |

### Variant: `amberCrt`

| Key | Value |
|---|---|
| `amber` | `#ffb000` |
| `amberMid` | `#cc8800` |
| `amberDim` | `#996600` |
| `bg` | `#1a1000` |

### Variant: `neoterminal`

| Key | Value |
|---|---|
| `bg` | `#05080a` |
| `raised` | `#0a1014` |
| `surface` | `#0e161b` |
| `text` | `#d6f5e3` |
| `muted` | `#7fa394` |
| `accent` | `#39ff8b` |
| `amber` | `#ffb627` |
| `danger` | `#ff5c5c` |
| `border` | `#1d3a2f` |
| `divider` | `#16302a` |


### Typography

- Display: "VT323", "Courier New", "monospace"
- Mono: "IBM Plex Mono", "Courier New", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=8px` `sm=16px` `md=24px` `lg=32px` `xl=48px` |
| shadow.hard | `0 0 8px rgba(51,255,102,0.6)` |
| shadow.glow | `inset 0 0 120px rgba(51,255,102,0.08)` |
| motion.easing | `steps(20, end)` |
| motion.cursor | `steps(2, jump-none) 1s infinite` |
| motion.durations | `0ms` `300ms` `1200ms` |
| effects.scanlines | `repeating-linear-gradient(to bottom, transparent 0 2px, rgba(51,255,102,0.04) 2px 3px)` |
| effects.vignette | `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)` |
| effects.pixelate | `none` |

## Work-style rules

- Set every surface in monospace: VT323 for display and hero type, IBM Plex Mono for body, labels, and commands — no sans or serif fallback anywhere.
- Glow all bright text with text-shadow: 0 0 8px rgba(51,255,102,0.6) and keep the faint inset screen glow (inset 0 0 120px rgba(51,255,102,0.08)) on full-page surfaces.
- Frame containers with ASCII box-drawing characters (┌─┐│└┘ for light, ╔═╗ for emphasis) and use a 1px solid #33ff66 border only where the glyphs cannot render.
- Keep amber #ffb000 as the only non-green hue, reserved for warnings, attention prompts, and one highlight per view.
- Set radius 0 on every panel, input, button, badge, and chip — no rounded corners in the mode.
- Make state changes instant (0ms); the only motion is the blinking block cursor at steps(2, jump-none) 1s infinite and the typewriter reveal at steps(20, end).
- Overlay scanlines at ~4% opacity on a 3px period using the provided gradient — texture stays subtle, never a heavy flicker.
- Express chrome as a prompt rather than a button: user@host:~/dir$ followed by a blinking block cursor █ stands in for actions and section headers.

## Component recipes

- **panel:** background: #101710; border: 1px solid #33ff66; box-shadow: inset 0 0 120px rgba(51,255,102,0.08); border-radius: 0; padding: 24px; color: #33ff66; font: 16px/1.6 "IBM Plex Mono", "Courier New", monospace; and title it inside an ASCII frame in the same mono face, e.g. ┌─ NETWORK ─────────┐ / │ … │ / └───────────────────┘.
- **button:** font: 16px/1 "IBM Plex Mono", monospace; text-transform: lowercase; background: transparent; color: #33ff66; border: 1px solid #33ff66; border-radius: 0; padding: 8px 16px; text-shadow: 0 0 8px rgba(51,255,102,0.6); transition: none; label it as a bracketed command ([ run ], [ exit ]); :hover/:focus-visible { background: #33ff66; color: #0a0e0a; text-shadow: none; } with outline: 1px solid #ffb000; outline-offset: 2px.
- **input:** background: #0a0e0a; border: 1px solid #1e9944; border-radius: 0; color: #33ff66; caret-color: #33ff66; font: 16px/1.4 "IBM Plex Mono", monospace; padding: 8px 16px; text-shadow: 0 0 8px rgba(51,255,102,0.6); prefix the field with a literal prompt glyph (user@host:~/dir$ or >) in #1e9944; ::placeholder { color: #1e9944; } :focus { border-color: #33ff66; box-shadow: 0 0 8px rgba(51,255,102,0.6); outline: none; }.
- **statusbar:** position: fixed; bottom: 0; left: 0; right: 0; z-index: 10; display: flex; justify-content: space-between; gap: 16px; background: #0a0e0a; border-top: 1px solid #1e9944; color: #1e9944; font: 14px/1 "IBM Plex Mono", monospace; padding: 8px 16px; content: user@host:~/dir on the left, connection/mode and clock on the right; escalate to #ffb000 for warnings and #ff3030 for failures.
- **menu:** list-style: none; margin: 0; padding: 0; border: 1px solid #1e9944; border-radius: 0; background: #0a0e0a; each item: font: 16px/1.2 "IBM Plex Mono", monospace; padding: 8px 16px; color: #33ff66; prefixed with a two-space indent and "│" so the list reads as an ASCII column; [aria-selected="true"] { background: #33ff66; color: #0a0e0a; text-shadow: none; } with the shortcut hint right-aligned in #1e9944; no underlines, no chevrons.
- **hero:** h1 { font: 400 clamp(32px, 6vw, 72px)/1.1 "VT323", "Courier New", monospace; color: #33ff66; letter-spacing: 0.02em; text-shadow: 0 0 8px rgba(51,255,102,0.6); margin: 0; } preceded by a prompt line (user@host:~/dir$ in #1e9944) and closed with a block cursor ::after { content: "\2588"; animation: blink steps(2, jump-none) 1s infinite; } reveal the line with a typewriter clip: width 0 → 100%, animation steps(20, end) 1200ms, overflow: hidden; white-space: nowrap.

## Copywriting

- Voice: terse, literal, machine-voiced — an operator reading state off a console, never a marketer selling a product
- Case: headers=UPPERCASE, commands=lowercase, body=sentence case
- Prefixes: $ > user@host:~/ [ok] [warn] [err]
- Verb table: start→run; stop→exit; save→write; load→cat; delete→rm
- Avoid: Please, Sorry, Oops, Just, Maybe, emoji, exclamation marks

## Do

- Set everything in monospace: VT323 for headlines and hero, IBM Plex Mono for body, labels, tables, and commands.
- Frame panels with ASCII box-drawing first (┌─┐│└┘) and fall back to a 1px solid #33ff66 border only when the glyphs cannot render.
- Use amber #ffb000 for warnings, attention prompts, and a single highlight per view; keep everything else on the green ramp.
- Report state as text — [ok], [warn], exit 0, [████░░░░] 40% — instead of color alone or icon-only indicators.
- Keep corners square (radius 0) and state changes instant (0ms), so hover and focus land as a hard character-cell swap.
- Open hero, form, and command areas with a prompt line and a blinking block cursor: user@host:~/dir$ █.

## Don't

- Don't use a sans-serif, serif, or proportional font — the console illusion collapses without monospace.
- Don't round corners, add blurred drop shadows, or introduce pill-shaped chips and cards.
- Don't add hues beyond the green ramp and amber #ffb000 in the default phosphor-green palette (no blue, purple, or cyan).
- Don't animate transitions, page loads, or hover fades; only the cursor blink and the typewriter reveal move.
- Don't raise the scanline opacity or add flicker, jitter, or chromatic aberration — 4% on a 3px period, always readable.
- Don't render filled rounded CTAs or icon buttons; chrome is a prompt or a bracketed command like [ run ].

## Accessibility

- Hold body text at #33ff66 or lighter on #0a0e0a (contrast ≥ 4.5:1); #1e9944 is for secondary or large text only — measure contrast before shipping on #101710.
- Never let glow carry legibility: the text-shadow is decoration, and every glyph pair must pass contrast with the glow removed.
- Under prefers-reduced-motion, disable the typewriter reveal and render the block cursor solid (no blink) while keeping the prompt visible.
- Pair the cursor with a non-visual cue — outline: 1px solid #ffb000 with offset 2px on :focus-visible — so keyboard users can locate the active line.

## Attribution / sources

- retro-terminal (claude-design-skills.convoke.software) — https://claude-design-skills.convoke.software/styles/retro-terminal (MIT)
- tui-designer (ckorhonen/claude-skills) — https://github.com/ckorhonen/claude-skills (MIT)
- neo-terminal (OneWave-AI/open-agent-stack) — https://github.com/OneWave-AI/open-agent-stack (MIT)
- VT323 (Peter Hull) — https://github.com/google/fonts/tree/main/ofl/vt323 (OFL)
- IBM Plex Mono (IBM) — https://github.com/IBM/plex (OFL)
