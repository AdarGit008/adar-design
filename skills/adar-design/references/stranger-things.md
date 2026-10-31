# Red-Neon Serif / 80s Synth-Horror — reference

80s synth-horror title card: a high-contrast serif wordmark burning in red neon on near-black #050505, off-white mono copy, faint film grain and a heavy vignette.

**When to use:** When the user asks for a Stranger Things-style title treatment, red-neon serif wordmark, 80s synth-horror poster, VHS title card, or a dark cinematic landing page with a single glowing headline.

**Signature element:** The red-neon serif wordmark: a high-contrast display serif in #ff1a1a with a four-stop red bloom on near-black #050505, under faint film grain and a heavy vignette

## Design tokens

### Colors (all roles)

| Role | Value |
|---|---|
| `background` | `#050505` |
| `surface` | `#120b0b` |
| `foreground` | `#e8e2d8` |
| `muted` | `#8a7f76` |
| `primary` | `#ff1a1a` |
| `accent` | `#b30000` |
| `danger` | `#ff4a3d` |
| `warning` | `#e0a83a` |
| `success` | `#6fbf8b` |
| `border` | `#8a7f76` |
| `divider` | `#8a7f76` |
| `selection` | `#ff1a1a` |
| `overlay` | `#050505` |
| `selection-text` | `#050505` |
| `color-scheme` | `dark` |

### Variant: `title`

| Key | Value |
|---|---|
| `void` | `#050505` |
| `ink` | `#120b0b` |
| `ember` | `#5c0a0a` |
| `red` | `#b30000` |
| `redGlow` | `#ff1a1a` |
| `redCore` | `#ff6f61` |
| `cream` | `#e8e2d8` |
| `dim` | `#8a7f76` |
| `coal` | `#1a0f0f` |

### Variant: `upsideDown`

| Key | Value |
|---|---|
| `void` | `#040404` |
| `rot` | `#1b0f12` |
| `vine` | `#2e1a1c` |
| `ember` | `#7a0c0c` |
| `blood` | `#b30000` |
| `glow` | `#ff1a1a` |
| `ash` | `#a3968c` |
| `cream` | `#e8e2d8` |
| `black` | `#000000` |

### Variant: `synthNight`

| Key | Value |
|---|---|
| `night` | `#0a0714` |
| `dusk` | `#16081f` |
| `magenta` | `#ff2d95` |
| `teal` | `#2ad4c8` |
| `red` | `#b30000` |
| `redGlow` | `#ff1a1a` |
| `cream` | `#e8e2d8` |
| `dim` | `#8a7f76` |
| `grid` | `#3a1a3f` |


### Typography

- Display: "Cinzel", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"
- Body: "Playfair Display", "Cormorant Garamond", "Georgia", "serif"
- Mono: "IBM Plex Mono", "JetBrains Mono", "Courier New", "monospace"

### Type scale

| Tier | Size | Line-height | Notes |
|---|---|---|---|
| h1 | `48px` | 1.1 | — |
| h2 | `28px` | 1.2 | — |
| body | `17px` | 1.6 | — |
| caption | `12px` | 1.4 | — |

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `2px` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=32px` `xl=56px` |
| shadow.hard | `6px 6px 0 #000000` |
| shadow.glow | `0 0 1px #ff6f61, 0 0 8px rgba(255, 26, 26, 0.9), 0 0 28px rgba(255, 26, 26, 0.6), 0 0 64px rgba(179, 0, 0, 0.45)` |
| motion.easing | `cubic-bezier(0.22, 0.61, 0.36, 1)` |
| motion.cursor | `steps(2, jump-none) 1.2s infinite` |
| motion.durations | `0ms` `240ms` `600ms` `2400ms` |
| effects.scanlines | `repeating-linear-gradient(to bottom, transparent 0 3px, rgba(0, 0, 0, 0.22) 3px 4px)` |
| effects.vignette | `radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.72) 100%)` |
| effects.pixelate | `auto` |

## Work-style rules

- Red is light, not fill: #ff1a1a appears only as glow, glyph, 1px rule, or mark on near-black — never as a large plate behind text and never on more than one primary action per screen.
- Layer the bloom: every neon element carries a tight core plus wide falloff (0 0 1px #ff6f61, 0 0 8px rgba(255,26,26,.9), 0 0 28px rgba(255,26,26,.6), 0 0 64px rgba(179,0,0,.45)); a single blurred drop shadow reads as a smudge, not neon.
- Scale type cinematically: display serif at 40px+ with line-height 0.95–1.05 and 0.02–0.08em tracking, IBM Plex Mono at 15–17px/1.6 for every paragraph, label, and value — the serif never sets running text below 24px.
- Keep the ground near-black: surfaces live between #050505 and #1a0f0f and are separated by a 1px rgba(179,0,0,.45) hairline or a bloom — never by a lighter gray card or a white border.
- Use off-white #e8e2d8 for type and #ffffff only for a 1px specular highlight; de-emphasize with #8a7f76 rather than opacity, so the grain layer never washes text out.
- Texture is film, not noise: grain at 3–5% opacity and a 30%→black vignette sit above the background and below content with pointer-events: none, and switch off for print and reduced-motion.
- Move slowly and analog: 240ms color fades, 600ms panel reveals, 2400ms glow pulses on cubic-bezier(0.22,0.61,0.36,1); the wordmark flicker is the only stutter and only when motion is allowed.
- One glow per view: the wordmark or the single primary action owns the bloom, and everything else stays flat deep red #b30000 so the hierarchy never collapses into a red blur.

## Component recipes

- **panel:** background: #120b0b; color: #e8e2d8; border: 1px solid rgba(179, 0, 0, 0.45); border-radius: 2px; padding: 24px 32px; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75), 0 0 40px rgba(255, 26, 26, 0.06); — the red hairline plus the deep ambient drop is the entire container. Optional grain layer from effects.grain at 4% opacity, positioned above the panel background and below its content, pointer-events: none. No backdrop-blur, no white border, no large red fill, no radius above 2px.
- **card:** background:#120b0b;color:#e8e2d8;border:1px solid rgba(179,0,0,0.45);border-radius:2px;padding:24px 32px;box-shadow:0 24px 60px rgba(0,0,0,0.75); title = Cinzel 24px uppercase #e8e2d8, body = IBM Plex Mono 15px/1.6 #e8e2d8; an optional 4% grain layer sits behind content; no white border, no red fill, radius ≤2px.
- **button:** font: 600 14px/1 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: 0.14em; background: transparent; color: #ff1a1a; border: 1px solid #b30000; border-radius: 2px; padding: 14px 24px; text-shadow: 0 0 6px rgba(255, 26, 26, 0.55); transition: color 240ms cubic-bezier(0.22, 0.61, 0.36, 1), border-color 240ms, box-shadow 240ms; :hover { color: #ff6f61; border-color: #ff1a1a; box-shadow: 0 0 12px rgba(255, 26, 26, 0.45), inset 0 0 18px rgba(255, 26, 26, 0.12); } :active { transform: translateY(1px); box-shadow: inset 0 0 24px rgba(255, 26, 26, 0.3); } :focus-visible { outline: 1px solid #e8e2d8; outline-offset: 3px; } — primary variant: background #b30000, color #e8e2d8, box-shadow 0 0 24px rgba(255, 26, 26, 0.4); it is the only element allowed a red fill, and only once per screen.
- **input:** background: #050505; color: #e8e2d8; font: 16px/1.6 'IBM Plex Mono', monospace; border: 1px solid rgba(179, 0, 0, 0.5); border-bottom-color: #b30000; border-radius: 2px; padding: 12px 16px; caret-color: #ff1a1a; box-shadow: inset 0 0 24px rgba(0, 0, 0, 0.9); :placeholder { color: #8a7f76; text-transform: uppercase; letter-spacing: 0.06em; font-size: 13px; } :focus { border-color: #ff1a1a; box-shadow: inset 0 0 24px rgba(0, 0, 0, 0.9), 0 0 16px rgba(255, 26, 26, 0.3); outline: none; } — invalid state: border-color #ff4a3d plus a Plex Mono message prefixed 'SIGNAL FAULT' below; a red border alone is never the error signal.
- **select:** A signal-window dropdown: trigger = IBM Plex Mono 16px field (background:#050505;border:1px solid rgba(179,0,0,0.5);border-bottom-color:#b30000;padding:12px 16px;color:#e8e2d8) with a red caret; the open list is a #050505 panel with 1px rgba(179,0,0,0.35) separators; active row = #e8e2d8 text with a 2px #ff1a1a left rule and 0 0 12px red bloom; hover fades to #e8e2d8 over 240ms.
- **checkbox:** A 20px square signal toggle: background:#050505;border:1px solid rgba(179,0,0,0.5);border-radius:2px; checked = 10px #ff1a1a core with text-shadow 0 0 6px rgba(255,26,26,0.55); radio = 8px #ff1a1a dot; label in IBM Plex Mono 14px uppercase #8a7f76 with 'ON'/'OFF'; focus-visible = 1px #e8e2d8 outline at 3px offset.
- **badge:** A 2px-radius signal chip: display:inline-flex;gap:8px;padding:4px 10px;background:#050505;border:1px solid;border-radius:2px;font:12px/1 'IBM Plex Mono';text-transform:uppercase;letter-spacing:0.14em; role = border+text (#6fbf8b success, #e0a83a warning, #ff4a3d danger, #b30000 neutral) with the word spelled out; a 0 0 10px bloom in the role hue; never a filled red bar.
- **avatar:** A 40px square film-frame tile: background:#120b0b;border:1px solid rgba(179,0,0,0.45);border-radius:2px;color:#e8e2d8;font:700 16px 'Cinzel',serif; initials or a two-letter mark; photo avatars get a 1px red hairline and no rounding past 2px; no bloom on the avatar itself.
- **nav:** A vertical signal rail (horizontal form also allowed): IBM Plex Mono 13px uppercase #8a7f76, letter-spacing 0.14em, padding 12px 16px; hover fades to #e8e2d8; active = #e8e2d8 with a 2px #ff1a1a left rule and 0 0 12px rgba(255,26,26,0.35) bloom on the rule only; group separators are 1px rgba(179,0,0,0.35) rules; the dropdown form reuses the existing menu.
- **table:** A signal grid: header = IBM Plex Mono 12px uppercase #8a7f76 over a 1px rgba(179,0,0,0.45) rule; body rows = IBM Plex Mono 15px #e8e2d8 separated by 1px rgba(232,226,216,0.12) rules; hover = #e8e2d8, selected row = rgba(179,0,0,0.18) fill with a 2px #ff1a1a left rule; values tabular, radius 2px.
- **dialog:** A film-frame modal: background:#120b0b;border:1px solid rgba(179,0,0,0.45);border-radius:2px;box-shadow:0 24px 60px rgba(0,0,0,0.75),0 0 40px rgba(255,26,26,0.06); scrim = color-mix(in srgb, var(--overlay) 70%, transparent); title = Cinzel uppercase #ff1a1a (no bloom on body), body = Plex Mono; actions = outlined red primary + secondary; entrance is a 600ms reveal.
- **toast:** A bottom-right signal line: background:#050505;border:1px solid rgba(179,0,0,0.45);padding:12px 16px;font:12px/1 'IBM Plex Mono';text-transform:uppercase;letter-spacing:0.14em; prefix 'LIVE'/'WARNING'/'SIGNAL LOST' in #6fbf8b/#e0a83a/#ff4a3d; auto-dismisses with a 240ms fade; reduced motion keeps it static.
- **code:** A monospace transmission block: background:#050505;border:1px solid rgba(179,0,0,0.5);border-radius:2px;padding:16px;font:14px/1.6 'IBM Plex Mono';color:#e8e2d8; preserve whitespace; comments #8a7f76, strings #b30000, errors #ff4a3d; no syntax gradients, no bloom on body text.
- **empty:** A centred film-frame panel: a faint red-neon glyph (a 1px outlined shape, no bloom) above one IBM Plex Mono message ('NO SIGNAL' / 'TAPE IS EMPTY') and a single outlined red CTA; the glyph is aria-hidden and the state is written in words.
- **statusbar:** height: 44px; display: flex; align-items: center; gap: 32px; padding: 0 24px; background: #050505; border-top: 1px solid rgba(179, 0, 0, 0.45); font: 12px/1 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: 0.16em; color: #8a7f76; live value in #e8e2d8, alert in #ff1a1a with 0 0 10px rgba(255, 26, 26, 0.5); segments split by 1px rgba(232, 226, 216, 0.12) rules; the live indicator is a 6px #ff1a1a dot pulsing at 2400ms and it always carries the word LIVE beside it.
- **wordmark:** The signature: font: 700 clamp(48px, 9vw, 120px)/0.95 'Cinzel', 'Playfair Display', 'Cormorant Garamond', Georgia, serif; text-transform: uppercase; letter-spacing: 0.06em; color: #ff1a1a; background: #050505; text-shadow: 0 0 1px #ff6f61, 0 0 8px rgba(255, 26, 26, 0.9), 0 0 28px rgba(255, 26, 26, 0.6), 0 0 64px rgba(179, 0, 0, 0.45); — sit it in the upper third with 32–56px beneath and a caption line in 13px #8a7f76 Plex Mono. The flicker keyframe dips opacity to 0.92 twice per 2400ms cycle, never below 0.9, and is disabled under prefers-reduced-motion.
- **menu:** A vertical rail of links, no bullets: item { display: block; font: 13px/1 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: 0.14em; padding: 12px 16px; color: #8a7f76; border-radius: 2px; } selected item turns #e8e2d8 with a 2px #ff1a1a left rule and a 0 0 12px rgba(255, 26, 26, 0.35) bloom on the rule only; hover fades to #e8e2d8 over 240ms; group separators are a 1px rgba(179, 0, 0, 0.35) rule with 24px margin — never a filled red bar.

## Copywriting

- Voice: Late-night small-town radio: hushed, present tense, second person, a little ominous. The interface speaks like a transmission that knows more than it says — short declarative lines, one idea per sentence, and no jokes.
- Case: headers=UPPERCASE with 0.14em tracking, commands=lowercase, body=sentence case
- Prefixes: [SIGNAL] [TUNING] [NIGHT] [STATIC] [SIGNAL LOST] [WARNING] [CH 04]
- Verb table: start→BEGIN TRANSMISSION; stop→SIGNAL LOST; save→RECORD; load→TUNE IN; delete→ERASE TAPE
- Avoid: exclamation marks and stacked punctuation, emoji and modern flat iconography, series character, place, or brand names, corporate filler ('seamless', 'leverage', 'empower', 'solution'), cutesy or apologetic loading copy ('Oops', 'just a moment'), pure white body text and neon-red paragraphs, hashtags, memes, and fourth-wall jokes

## Do

- Put the red on black: hold every surface between #050505 and #1a0f0f and let #ff1a1a exist only as glow, glyph, or a 1px mark.
- Set the wordmark in the display serif at 48px or larger, uppercase, with the four-stop red bloom and 32–56px of dark breathing room beneath it.
- Set every paragraph, label, and value in IBM Plex Mono at 15–17px, and reserve the serif for display lines at 24px and up.
- Separate surfaces with a 1px deep-red hairline plus a deep ambient drop shadow, and keep radius at 0–2px so panels read as film frames.
- Animate slowly and once: 240ms color fades, 600ms reveals, 2400ms glow pulses, and a single 0.92-opacity flicker on the wordmark.
- Cap film grain at 4–5% opacity and a 30%-to-black vignette, layered over the background and under all content with pointer-events: none.
- Pair every glowing signal with a word — LIVE, WARNING, SIGNAL LOST — so state never rides on red alone.

## Don't

- Don't fill large areas with #ff1a1a or #b30000 — red is light, not a background, and one filled primary button per screen is the ceiling.
- Don't blur depth: no soft gray drop shadows, no backdrop-blur, no glassmorphism cards — depth is a red bloom or a 1px hairline.
- Don't set body copy in the display serif, don't take the serif below 24px, and don't apply the bloom to paragraphs.
- Don't use #ffffff for text or fade text with opacity — muted copy is #8a7f76, never rgba(232,226,216,.5).
- Don't add bouncy, springy, spinning, or parallax motion; nothing should feel like a modern app landing page.
- Don't reproduce series logos, character or place names, or episode artwork — evoke the treatment, not the assets.
- Don't round into pills, add 12px radii, or stack more than one glow in the same viewport.

## Accessibility

- Body copy #e8e2d8 on #050505 clears 4.5:1 by a wide margin and muted #8a7f76 lands near 5:1; #ff1a1a on #050505 is roughly 5.2:1 raw, but bloom and grain eat into that, so keep red text runs short and push the glow to display sizes.
- Honor prefers-reduced-motion: stop the wordmark flicker and glow pulses, freeze the scanline and grain overlays, and leave the emblem at full opacity — still red, just steady.
- Keep grain, vignette, and haze off the text layer and off focus rings: max 5% opacity, pointer-events: none, and disabled under forced-colors and print.
- Never encode state by red alone — pair it with LIVE / WARNING / SIGNAL LOST labels, and keep a 1px #e8e2d8 outline at 3px offset on every focusable element, never on a flickering element.

## Attribution / sources

- Stranger Things (Netflix, 2016) title treatment — visual reference — https://www.netflix.com/title/80057281 (evocation only, no trademarked assets reproduced)
- Lospec palette list — curated dark-red / near-black ramps — https://lospec.com/palette-list (palette/CC0)
- Cinzel (Natanael Gama) — https://github.com/google/fonts/tree/main/ofl/cinzel (OFL 1.1)
- Playfair Display (Claus Eggers Sørensen) — https://github.com/google/fonts/tree/main/ofl/playfairdisplay (OFL 1.1)
- Cormorant Garamond (Christian Thalmann) — https://github.com/google/fonts/tree/main/ofl/cormorantgaramond (OFL 1.1)
- IBM Plex Mono (IBM) — https://github.com/IBM/plex (OFL 1.1)
