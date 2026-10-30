# Expressionism — reference

Early-20th-century Expressionism as cloth: a near-black ground over deep blue, blood-red and acid-yellow emotional color, condensed display type, and wavy distorted brushstroke edges that make the whole surface feel strained.

**When to use:** When the user asks for Expressionism, Munch or Die Brücke, an anguished painterly aesthetic, emotional distortion, woodcut roughness, non-naturalistic color, or a tense art-historical skin for an editorial, cultural, or mental-health-adjacent product.

**Signature element:** The wavy, hand-distorted brushstroke band: a torn 2–3px edge (feTurbulence clip-path or wavering rule) that carries blood red into acid yellow across the deep blue field and quivers along section boundaries while the type inside stays straight

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#14141a` |
| `surface` | `#1b2a4a` |
| `foreground` | `#e8e4dc` |
| `muted` | `#9aa3b8` |
| `primary` | `#b22222` |
| `accent` | `#e6c229` |
| `danger` | `#c0392b` |
| `warning` | `#e6c229` |
| `success` | `#4f7a6f` |

### Variant: `brucke`

| Key | Value |
|---|---|
| `night` | `#14141a` |
| `deepBlue` | `#1b2a4a` |
| `fjord` | `#2e4468` |
| `blood` | `#b22222` |
| `rust` | `#8a1c1c` |
| `acid` | `#e6c229` |
| `bone` | `#e8e4dc` |
| `ash` | `#9aa3b8` |
| `moss` | `#4f7a6f` |

### Variant: `emotionalRamps`

| Key | Value |
|---|---|
| `blue` | `#2e4468/#1b2a4a/#0f1830` |
| `red` | `#d14434/#b22222/#8a1c1c` |
| `yellow` | `#f2d661/#e6c229/#b38f14` |
| `bone` | `#f4f1ea/#e8e4dc/#c9c2b4` |
| `ink` | `#3a3a45/#14141a/#000000` |

### Variant: `woodcut`

| Key | Value |
|---|---|
| `plate` | `#e8e4dc` |
| `ink` | `#14141a` |
| `bleed` | `#b22222` |
| `stain` | `#e6c229` |
| `sky` | `#1b2a4a` |


### Typography

- Display: "Oswald", "Archivo Black", "Anton", "system-ui", "sans-serif"
- Mono: "IBM Plex Mono", "ui-monospace", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `2px` |
| spacing | `xs=5px` `sm=11px` `md=19px` `lg=31px` `xl=47px` |
| shadow.hard | `8px 8px 0 #14141a` |
| shadow.glow | `0 0 0 3px #e6c229` |
| motion.easing | `cubic-bezier(.36,-.07,.64,1.37)` |
| motion.cursor | `crosshair` |
| motion.durations | `0ms` `90ms` `180ms` `420ms` |
| effects.scanlines | `none` |
| effects.vignette | `radial-gradient(ellipse at 50% 45%, transparent 18%, rgba(20,20,26,.78) 72%, rgba(20,20,26,.96) 100%)` |
| effects.pixelate | `none` |

## Work-style rules

- Color is feeling, not description: never use a calm or naturalistic fill — a sky is blood red, a road is acid yellow, skin is deep blue — and let exactly two emotional colors collide per screen (blood #b22222 against acid #e6c229 on the deep blue field) while everything structural stays #14141a or #e8e4dc.
- Distort the edge, not the grid: container edges are drawn with an SVG turbulence/clip-path wave (feTurbulence baseFrequency .012–.03, 2–4px amplitude) or a hand-torn 2px stroke, but text baselines, columns, and tap targets stay on the 4px grid so anxiety reads as style and never as broken layout.
- Keep the ground dark and the light hot: page background is near-black #14141a, panels are deep blue #1b2a4a, and the only bright values are bone #e8e4dc text and acid #e6c229 accents — no light or pastel page backgrounds, ever.
- Set display type in Oswald 700 / Archivo Black uppercase with negative tracking (-0.01em to -0.02em) and slight per-line offsets (±1–2px translate, alternate skew of -0.6deg/0.4deg) so headings look pressed by hand; body copy stays upright, unstretched, and legible.
- Shadows are smeared, not lit: use the 8px 8px 0 #14141a hard offset for lifted panels and the -6px 4px 18px rgba(20,20,26,.55) smear for focus surfaces; never add a neon glow, glass blur, or gradient bevel.
- Heavy anxious vignette is part of the frame (radial gradient closing to #14141a at the corners) and applies to the page shell only — never over body text, form values, or any interactive target.
- Motion is tense and brief: 90–180ms with cubic-bezier(.36,-.07,.64,1.37) overshoot, occasional 1–2px jitter on hover, no long crossfades, and no looping tremor anywhere; under prefers-reduced-motion every jitter, skew, and entrance collapse to 0ms with no motion.
- No artwork: expressionist feeling comes from palette pressure, brushstroke edges, condensed woodcut type, and collision — never from a painting, print, or brush texture file lifted from Munch or Die Brücke.

## Component recipes

- **panel:** background: #1b2a4a; color: #e8e4dc; border: 2px solid #14141a; border-radius: 2px; padding: 31px; box-shadow: 8px 8px 0 #14141a; clip-path: url(#brushEdge) /* feTurbulence baseFrequency='.018 .026' numOctaves='2' displacement scale 4, applied to the panel's ::before stroke layer, never to the content box */; — a 6px #b22222 band sits on the panel's left edge at 60% opacity with a torn lower end, and the heading inside is Oswald 700 uppercase 26px with a 3px #e6c229 underline that visibly wavers ±2px; below 640px the hard shadow drops to 4px 4px 0 and the brush distortion stays.
- **button:** font: 700 17px/1 'Oswald', 'Archivo Black', system-ui, sans-serif; text-transform: uppercase; letter-spacing: -0.01em; padding: 15px 27px; border-radius: 2px; background: #b22222; color: #e8e4dc; border: 2px solid #14141a; box-shadow: 6px 6px 0 #14141a; transform: rotate(-0.6deg); transition: transform 90ms cubic-bezier(.36,-.07,.64,1.37), box-shadow 90ms cubic-bezier(.36,-.07,.64,1.37), background-color 90ms linear; :hover { transform: rotate(-0.6deg) translate(-1px,-2px); box-shadow: 8px 8px 0 #14141a; background: #c22a24; } :active { transform: rotate(-0.6deg) translate(6px,6px); box-shadow: 0 0 0 #14141a; } :focus-visible { outline: 3px solid #e6c229; outline-offset: 3px; } — secondary: transparent-on-#1b2a4a with #e8e4dc text and a 2px #e8e4dc stroke; disabled: #2e4468 fill, #9aa3b8 label, shadow collapsed, rotate(0); under prefers-reduced-motion the rotation and jitter are removed.
- **input:** font: 15px/1.55 'IBM Plex Mono', ui-monospace, monospace; color: #e8e4dc; background: #14141a; border: 2px solid #9aa3b8; border-radius: 2px; padding: 13px 15px; box-shadow: inset 0 0 0 1px rgba(20,20,26,.9), -6px 4px 18px rgba(20,20,26,.55); :placeholder { color: #9aa3b8; font: 400 15px 'IBM Plex Mono', monospace; } :focus { border-color: #e6c229; outline: 3px solid #e6c229; outline-offset: 2px; background: #101018; } — invalid: border-color #c0392b plus a 15px sentence below in #c0392b ('This will not hold. Say it again, plainly.') so the error never rests on the red stroke alone; the field's edge may waver 1px, the text inside never does.
- **statusbar:** height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 19px; padding: 0 19px; background: #14141a; border-top: 3px solid #b22222; border-radius: 0; font: 13px/1.4 'IBM Plex Mono', monospace; letter-spacing: 0.03em; color: #e8e4dc; left side carries a running mono line of state notes each led by a 9px block — #4f7a6f settled, #e6c229 unresolved, #c0392b failed, #9aa3b8 dormant — with the newest note fading in over 180ms; the right side holds a single mono counter and one blood-red primary action; the border-top deliberately wavers 1–2px so the bar looks drawn rather than ruled.
- **menu:** vertical list, no bullets, 6px gap: item { display: flex; align-items: center; gap: 13px; padding: 11px 19px; font: 600 17px/1.3 'Oswald', system-ui, sans-serif; text-transform: uppercase; letter-spacing: 0.01em; color: #e8e4dc; background: #1b2a4a; border: 2px solid #14141a; border-radius: 2px; box-shadow: 4px 4px 0 #14141a; } selected row fills #b22222 with #e8e4dc text and gains a 3px #e6c229 left band that runs 88% of the row height with a torn bottom edge; hover lifts transform: translate(-1px,-2px) with box-shadow 6px 6px 0 #14141a; group headers are Oswald 700 12px uppercase with 0.14em tracking in #9aa3b8 on the near-black ground, no stroke.
- **toggle:** woodcut switch, 74px x 40px: track { background: #14141a; border: 2px solid #14141a; border-radius: 2px; padding: 3px; box-shadow: inset 0 0 0 2px #2e4468; } knob is a 28px block, radius 2px, #2e4468 when off and #b22222 when on, translating 34px over 180ms cubic-bezier(.36,-.07,.64,1.37) with a 1px vertical wobble at the midpoint; the track carries a 3px acid #e6c229 score line that shortens as the knob travels; label sits above in Oswald 700 13px uppercase and the state is repeated as text ('Open'/'Shut') for screen readers.

## Copywriting

- Voice: An anguished first-person voice that speaks in short, pressured, present-tense lines — the interface is not describing software, it is enduring it. Copy names the feeling and the fact in the same breath ('The night is loud. I cannot close it.'), prefers concrete nouns over abstractions, and never softens the sentence with a smile. It is never cruel to the user: the anguish belongs to the surface and the sky, never to a person who mistyped a field.
- Case: headers=UPPERCASE, Oswald or Archivo Black, often two words or fewer, commands=sentence case imperative, short and hot ('Hold it', 'Say it plain', 'Stop the noise'), body=sentence case, short lines, no exclamation stacking
- Prefixes: [NIGHT] [BLOOD] [ACID] [TREMOR] [ECHO] [STILL]
- Verb table: start→BREAK OPEN; stop→GO QUIET; save→BURY IT HERE; load→DIG IT BACK UP; delete→ERASE THE ROOM
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution'), cheerful reassurance ('You're all set!', 'No worries!', 'Hurray'), emoji, exclamation stacks, and all-caps sentences over three words, clinical or diagnostic language about the reader's mental state, shaming error copy ('Invalid input.', 'Wrong.') and self-deprecating product jokes, naming or quoting a real painting, or reproducing its title as a decoration

## Do

- Let exactly two emotional colors collide per screen — blood #b22222 against acid #e6c229 over the deep blue #1b2a4a field — and keep every structural element on #14141a or #e8e4dc.
- Distort edges with feTurbulence clip-paths, torn 2px strokes, and ±2px wavering rules while leaving text baselines, columns, and hit areas perfectly straight.
- Set headings in Oswald 700 or Archivo Black uppercase with slight negative tracking and a per-line offset of ±1–2px so type looks pressed by hand.
- Keep the heavy vignette on the page shell only, so the corners close in without ever dimming body copy or a focus ring.
- Animate in 90–180ms bursts with one overshoot, add a 1–2px hover jitter at most, and stop everything dead under prefers-reduced-motion.
- Compose with asymmetry: an off-centre column, a tall narrow band of color, a low horizon line — imbalance carried by the layout, never by broken alignment.

## Don't

- No artworks: never embed, trace, crop, or imitate a Munch or Die Brücke painting, print, or brush texture file — the evocation lives in palette, edge, and type only.
- No scanlines, no pixelation, no CRT effects, no glassmorphism, no neon glow, and no smooth gradient bevels; roughness comes from edges and smear shadow.
- No pastel, cream, or white page backgrounds — the ground stays near-black #14141a with #1b2a4a panels.
- No wavy, skewed, or rotated body text: distortion is structural decoration, and any paragraph, form value, or table cell stays upright.
- No looping tremor, pulsing, or infinite jitter animations, and no motion that ignores prefers-reduced-motion.
- No third or fourth emotional color mixed into one component as decoration, and no mood-coded color as the only signal of state.

## Accessibility

- Bone #e8e4dc on #14141a and on #1b2a4a both clear 4.5:1; blood #b22222 and acid #e6c229 on the dark grounds do not — use them for fills, bands, borders, and large bold type only, and set text inside a red fill in bone rather than in black.
- Oswald and Archivo Black condensed faces stay at 17px minimum with 1.2–1.3 line-height and short lines, and never carry paragraphs; IBM Plex Mono handles every running sentence, form value, and table cell at 15px/1.55 minimum.
- Honour prefers-reduced-motion: remove the hover jitter, the type skew and per-line offsets, the toggle wobble, and all 90–180ms overshoot, presenting state changes instantly with no motion at all.
- Never encode state in red or acid alone — pair every band, dot, and border with a word ('Unresolved', 'Failed', 'Settled', 'Open'/'Shut') and keep a visible 3px #e6c229 focus ring on every focusable element, drawn on a straight edge so it cannot be mistaken for decoration.
- The vignette must never sit above content: keep it in the page shell with pointer-events: none and a hard floor on its inner transparency so contrast measured at the corners still passes.

## Attribution / sources

- Expressionism — Edvard Munch, Die Brücke, Der Blaue Reiter (c. 1905–1925) — aesthetic reference — https://www.moma.org/collection/terms/expressionism (evocation only, no artworks reproduced)
- Expressionist palette (deep blue #1b2a4a, blood red #b22222, acid yellow #e6c229, near-black #14141a, bone #e8e4dc) — derived by eye from early-20th-century print and canvas color, not sampled from any artwork file — https://lospec.com/palette-list (palette/CC0 — evocation only, no artworks reproduced)
- Oswald (Vernon Adams / Google Fonts) — https://github.com/google/fonts/tree/main/ofl/oswald (OFL 1.1)
- Archivo Black (Omnibus-Type) — https://github.com/google/fonts/tree/main/ofl/archivoblack (OFL 1.1)
- IBM Plex Mono (IBM) — https://github.com/google/fonts/tree/main/ofl/ibmplexmono (OFL 1.1)
