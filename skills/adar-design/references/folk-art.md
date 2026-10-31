# Folk Art — reference

Naive hand-painted folk art: warm cream ground, flat red/blue/green/yellow fills, ink brush strokes, decorative floral and geometric borders, and lettering that looks painted by a careful amateur.

**When to use:** When the user asks for folk art, naive or hand-painted charm, decorative floral/geometric borders, warm primary colors with a flat finish, a heartfelt handmade craft or heirloom aesthetic, or a warm painted alternative to flat corporate UI.

**Signature element:** The hand-painted decorative border: a 3px ink rule with an inset cream ring, an optional dashed echo, and small painted petal/leaf/berry motifs stopping at the rounded corners — the frame that makes every panel read as a made object rather than a div

## Design tokens

### Colors (all roles)

| Role | Value |
|---|---|
| `background` | `#f7f0e1` |
| `surface` | `#fffcf3` |
| `foreground` | `#2b2b2b` |
| `muted` | `#8b7c66` |
| `primary` | `#c0392b` |
| `accent` | `#2c5f8a` |
| `danger` | `#a32e22` |
| `warning` | `#e8b32a` |
| `success` | `#4f7a4a` |
| `border` | `#2b2b2b` |
| `divider` | `#8b7c66` |
| `selection` | `#e8b32a` |
| `overlay` | `#2b2b2b` |
| `selection-text` | `#2b2b2b` |
| `color-scheme` | `light` |

### Variant: `painted`

| Key | Value |
|---|---|
| `cream` | `#f7f0e1` |
| `paper` | `#fffcf3` |
| `red` | `#c0392b` |
| `blue` | `#2c5f8a` |
| `green` | `#4f7a4a` |
| `yellow` | `#e8b32a` |
| `ink` | `#2b2b2b` |
| `muted` | `#8b7c66` |
| `shadow` | `#2b2b2b` |

### Variant: `pigmentRamps`

| Key | Value |
|---|---|
| `red` | `#e8a59b/#c0392b/#8e2a1f` |
| `blue` | `#9dbcd2/#2c5f8a/#1d405e` |
| `green` | `#a9c19c/#4f7a4a/#345232` |
| `yellow` | `#f5dfa2/#e8b32a/#b98a17` |
| `ink` | `#6b6559/#2b2b2b/#141312` |

### Variant: `motifs`

| Key | Value |
|---|---|
| `ground` | `#f7f0e1` |
| `petal` | `#c0392b` |
| `leaf` | `#4f7a4a` |
| `berry` | `#2c5f8a` |
| `center` | `#e8b32a` |
| `stroke` | `#2b2b2b` |
| `wash` | `#efe4cd` |


### Typography

- Display: "Fredoka", "Baloo 2", "Chewy", "system-ui", "sans-serif"
- Body: "Fredoka", "Baloo 2", "system-ui", "sans-serif"
- Mono: "IBM Plex Mono", "ui-monospace", "monospace"

### Type scale

| Tier | Size | Line-height | Notes |
|---|---|---|---|
| h1 | `40px` | 1.1 | — |
| h2 | `24px` | 1.2 | — |
| body | `17px` | 1.5 | — |
| caption | `13px` | 1.4 | — |

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `18px` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=28px` `xl=44px` |
| shadow.hard | `4px 4px 0 #2b2b2b` |
| shadow.glow | `0 0 0 4px #e8b32a` |
| motion.easing | `cubic-bezier(.22,.61,.36,1)` |
| motion.cursor | `pointer` |
| motion.durations | `0ms` `160ms` `280ms` `700ms` |
| effects.scanlines | `none` |
| effects.vignette | `radial-gradient(ellipse at 50% 40%, rgba(255,252,243,0) 55%, rgba(239,228,205,.55) 100%)` |
| effects.pixelate | `auto` |

## Work-style rules

- Paint flat, never shade: every shape is one opaque pigment fill inside one 3px ink stroke — no gradients, no gloss, no airbrushed highlight, no alpha layers for depth.
- Keep the cream ground honest (#f7f0e1 body, #fffcf3 cards) and let only the five pigments — red #c0392b, blue #2c5f8a, green #4f7a4a, yellow #e8b32a, ink #2b2b2b — sit on top of it.
- Draw a decorative border around the work: a 3px ink rule echoing the container radius, 4–8px inset from the edge, optionally doubled by a spaced ring of small painted motifs (petal, leaf, berry) that stops at the corners rather than cutting through them.
- Round generously — 18px on cards, wells, and media, full pills on buttons and badges — because naive brushwork never produces a sharp machined corner.
- Set headings in Fredoka 700 Title Case at 20px and up with slight positive letter-spacing (0.01em), body in Fredoka 400/500 at 16–18px/1.6, and reserve IBM Plex Mono for quantities, dates, and ledger-like data.
- Spend one pigment per role: red #c0392b is the primary stroke and action, blue #2c5f8a is the secondary action, link, and focus ring, yellow #e8b32a is highlight and attention, green #4f7a4a is confirmation, #a32e22 is reserved for failure.
- Move like a hand, not a machine: 160–280ms easing with a single soft overshoot at most, a gentle 2px lift on hover, and no shimmering, blinking, parallax, or looping animation.
- Stay evocation-only: motifs are drawn from primitives (petal = three arcs, leaf = pointed oval, berry = circle, vine = sine path, star = four diamonds) — never copy a specific artwork, plate, canvas, or motif set from any painter or museum collection.
- Label with words before color: every pigment-coded state also carries a short human sentence ('Saved', 'Needs a look', 'That went wrong') so the warmth never costs clarity.

## Component recipes

- **panel:** background: #fffcf3; border: 3px solid #2b2b2b; border-radius: 18px; padding: 28px; color: #2b2b2b; box-shadow: 4px 4px 0 #2b2b2b, inset 0 0 0 3px #f7f0e1; position: relative; — the inset cream ring is the painted border; add ::before with inset: 8px; border: 1px dashed #8b7c66; border-radius: 14px; pointer-events: none for a double painted rule, and a heading that sits on a 10px #e8b32a highlight block behind its last word; below 640px drop the 4px 4px 0 ink drop and keep both rules.
- **card:** background:#fffcf3;border:3px solid #2b2b2b;border-radius:18px;padding:28px;color:#2b2b2b;box-shadow:4px 4px 0 #2b2b2b,inset 0 0 0 3px #f7f0e1; a ::before dashed #8b7c66 echo sits 8px inset; title = Fredoka 700 20px Title Case with a 10px #e8b32a highlight behind the last word; body = Fredoka 16px/1.6; small petal/leaf motifs stop at the corners.
- **button:** font: 700 18px/1 'Fredoka', 'Baloo 2', system-ui, sans-serif; padding: 14px 26px; border-radius: 999px; background: #c0392b; color: #fffcf3; border: 3px solid #2b2b2b; box-shadow: 4px 4px 0 #2b2b2b; transition: transform 160ms cubic-bezier(.22,.61,.36,1), box-shadow 160ms cubic-bezier(.22,.61,.36,1), background-color 160ms linear; :hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #2b2b2b; } :active { transform: translate(4px, 4px); box-shadow: 0 0 0 #2b2b2b; } :focus-visible { outline: 3px solid #2c5f8a; outline-offset: 3px; } — secondary variant: background #fffcf3, color #2b2b2b, box-shadow 4px 4px 0 #2c5f8a; disabled: background #efe4cd, color #8b7c66, border-color #8b7c66, shadow 0 0 0, no transform, cursor not-allowed.
- **input:** font: 16px/1.6 'Fredoka', system-ui, sans-serif; color: #2b2b2b; background: #f7f0e1; border: 3px solid #2b2b2b; border-radius: 18px; padding: 12px 18px; box-shadow: inset 0 3px 0 rgba(43,43,43,.10); :placeholder { color: #8b7c66; font-style: normal; } :focus { background: #fffcf3; outline: 3px solid #2c5f8a; outline-offset: 2px; } — numeric fields use 'IBM Plex Mono', ui-monospace, monospace at 16px so ledgers align; invalid: border-color #a32e22 plus a 16px Fredoka sentence below in #a32e22 ('That needs a number here.') and a 6px red painted underline, so the error never depends on hue alone.
- **select:** A painted dropdown: trigger = Fredoka 16px field (background:#f7f0e1;border:3px solid #2b2b2b;border-radius:18px;padding:12px 18px) with a red '▾'; the open list is a #fffcf3 panel of Fredoka rows with 3px ink borders and 18px radius; the selected row fills #e8b32a with ink text, a 4px #c0392b check, and a petal motif at the left; hover lifts translate(-2px,-2px) with box-shadow 6px 6px 0.
- **checkbox:** A 26px round well: background:#f7f0e1;border:3px solid #2b2b2b;border-radius:18px;box-shadow:inset 0 3px 0 rgba(43,43,43,0.10); checked = a 12px #4f7a4a painted check inside; radio = a 10px #c0392b dot; label = Fredoka 16px #2b2b2b with 'Yes'/'No'; focus-visible = 3px #2c5f8a outline at 2px offset.
- **badge:** display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px; border: 3px solid #2b2b2b; background: #f7f0e1; color: #2b2b2b; font: 600 14px/1.2 'Fredoka', system-ui, sans-serif; a leading 10px painted dot carries the pigment (#4f7a4a / #e8b32a / #a32e22 / #2c5f8a) and the label always spells the state out — badges never rely on their dot to communicate.
- **avatar:** A 40px round tile: background:#fffcf3;border:3px solid #2b2b2b;border-radius:999px;color:#2b2b2b;font:700 16px 'Fredoka'; initials or a painted glyph; image avatars get a 3px ink contour and 999px radius.
- **nav:** A vertical painted rail: items = Fredoka 600 18px #2b2b2b, padding 10px 18px, background #fffcf3, border 3px #2b2b2b, border-radius 18px, box-shadow 4px 4px 0 #2b2b2b; active = #e8b32a fill with a 4px #c0392b check and a petal motif; hover lifts translate(-2px,-2px) with box-shadow 6px 6px 0; group headers = Fredoka 700 13px uppercase #8b7c66 between two 3px dotted rules.
- **table:** A painted grid: header = Fredoka 700 14px Title Case #2b2b2b over a 3px #2b2b2b rule; body rows = Fredoka 16px #2b2b2b separated by 1px dashed #8b7c66 rules; hover = #fffcf3 lift, selected row = #e8b32a fill with a 4px #c0392b left check and ink text; radius 18px.
- **dialog:** A painted-border modal: panel recipe with the inset cream ring and dashed echo; scrim = color-mix(in srgb, var(--overlay) 40%, transparent); title = Fredoka 700 Title Case, body = Fredoka; actions = red pill + cream secondary with a blue drop; entrance is a 280ms cubic-bezier(.22,.61,.36,1) lift.
- **toast:** A bottom-right painted note: background:#fffcf3;border:3px solid #2b2b2b;border-radius:18px;padding:12px 16px;font:15px/1.4 'Fredoka'; leading 10px painted dot in the role color (#4f7a4a/#e8b32a/#a32e22) plus the word (Saved, Needs attention, Failed); auto-dismisses with a 280ms fade; reduced motion keeps it static.
- **code:** A monospace block: background:#f7f0e1;border:3px solid #2b2b2b;border-radius:18px;padding:16px;font:14px/1.6 'IBM Plex Mono';color:#2b2b2b; preserve whitespace; comments #8b7c66, strings #c0392b, values #2c5f8a; no syntax gradients, and the block keeps the blue focus ring.
- **empty:** A centred painted panel: a small petal/leaf motif above one Fredoka message ('Nothing painted here yet.') and a single red 'Paint it' CTA; the motif is aria-hidden and the state is written in words.
- **statusbar:** height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 0 28px; background: #f7f0e1; border-top: 3px solid #2b2b2b; border-radius: 18px 18px 0 0; font: 15px/1.4 'Fredoka', system-ui, sans-serif; color: #2b2b2b; a 3px dashed #8b7c66 rule runs just under the top border as a painted trim; left side lists states each led by a 10px painted dot — #4f7a4a saved, #e8b32a needs attention, #a32e22 failed, #8b7c66 idle — with the state word beside it; right side pairs the mono count ('12 of 40') with the one primary button.
- **menu:** vertical list, no bullets, 6px gap: item { display: flex; align-items: center; gap: 12px; padding: 10px 18px; font: 600 18px/1.3 'Fredoka', system-ui, sans-serif; color: #2b2b2b; background: #fffcf3; border: 3px solid #2b2b2b; border-radius: 18px; box-shadow: 4px 4px 0 #2b2b2b; } selected row fills #e8b32a with ink text, gains a 4px #c0392b check mark and a small painted petal motif at its left edge; hover lifts translate(-2px, -2px) to box-shadow 6px 6px 0 #2b2b2b; group headers are Fredoka 700 13px uppercase with letter-spacing 0.14em in #8b7c66 between two 3px dotted rules.
- **fieldset:** the signature framed block: border: 3px solid #2b2b2b; border-radius: 18px; padding: 24px 28px; background: #fffcf3; legend { font: 700 18px/1 'Fredoka', system-ui, sans-serif; padding: 0 12px; color: #2b2b2b; background: #fffcf3; border: 3px solid #2b2b2b; border-radius: 999px; } with a painted vine drawn behind the legend on the top rule (3px solid #4f7a4a, two 8px #c0392b petal arcs flanking the legend) so the border reads as hand-embellished rather than machine-drawn.

## Copywriting

- Voice: A warm, naive, gently earnest maker talking to a neighbour across a kitchen table: plain sentences, second person, present tense, no jargon, and quiet pride in the work. Copy names the object and the feeling ('Your border is painted.', 'This page is not saved yet — shall we keep it?') rather than reporting system state, and it never scolds: a mistake is described kindly and followed by the next small step.
- Case: headers=Title Case, commands=sentence case imperative ('Paint the border', 'Keep this page'), body=sentence case
- Prefixes: A note: Your page: Nearly there — All done — A small thing — Let's try again —
- Verb table: start→PAINT; stop→SET IT DOWN; save→KEEP; load→OPEN; delete→CLEAR THE BRUSH
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution', 'delightful'), deadpan system errors ('Invalid input.', 'An error occurred.', 'Error 422'), sarcasm, blame, or scolding the user ('You broke it', 'Wrong again'), cutesy diminutives and baby talk ('oopsie', 'whoopsie-doodle', 'aw shucks'), emoji, ASCII art, and decorative dingbats inside headings or buttons, ticket ids, hex hashes, stack traces, and log noise in user-facing copy, all-caps sentences of any length — the voice is quiet, not shouted

## Do

- Frame the content: give every major container a painted border — 3px ink rule plus a 4–8px inset cream ring or dashed echo — so the interface looks bordered and cared for, like a painted plate or a sampler.
- Fill flat with one pigment per shape inside one ink stroke, and let flatness be the style; a single soft paper-grain overlay may sit on the ground, but never on top of type.
- Keep the cream ground (#f7f0e1, cards #fffcf3) and treat the five pigments as the whole palette; muted text is #8b7c66, not a grey.
- Round generously (18px containers, full pills on buttons and badges) and give interactive elements a 4px ink drop that shrinks as the element presses in.
- Set headings in Fredoka 700 Title Case from 20px up and body in Fredoka 400/500 at 16–18px/1.6; use IBM Plex Mono only for quantities, dates, and ledger data.
- Draw motifs from primitives — petal (three arcs), leaf (pointed oval), berry (circle), vine (sine path), star (four diamonds) — and place them at borders, corners, and empty states, never as decoration in the middle of a sentence.
- Speak kindly and plainly: describe what happened and the next small step ('This page is not saved yet — shall we keep it?').
- Animate like a hand: one gentle 160–280ms transition and at most a 2px hover lift; every state change must remain legible with motion turned off.

## Don't

- No reproduced artworks: no painting, sampler, plate, pattern, or motif set copied from any folk artist, museum, or archive — evocation through palette, border, and naive geometry only.
- No gradients, glassmorphism, backdrop-blur, semi-transparent overlays, or airbrushed shading; a shape is one flat fill inside one ink stroke.
- No blurred shadow stacks, glow, or neon; the only permitted softness is the single 0 6px 14px rgba(43,43,43,.10) floating-panel lift and the soft edge vignette.
- No sharp 0-radius cards, no hairline 1px rules, no machined grid lines — the smallest line weight in the system is 3px ink, and corners are round.
- No pixelation, scanlines, CRT effects, or dithering; this aesthetic is painted, not rendered.
- No second pigment inside one component as pure decoration; one role color plus ink, and never more than three pigments in a single card.
- No fast, bouncy, springy, looping, blinking, or parallax motion — nothing that reads as a toy or a game cabinet.
- No snark, no shouting, no cutesy baby talk, and no emoji standing in for a label.

## Accessibility

- Ink #2b2b2b on cream #f7f0e1 clears 4.5:1 easily, and white #fffcf3 on red #c0392b is about 5:1, but yellow #e8b32a, green #4f7a4a, and blue #2c5f8a mostly do not carry cream text — use those as fills, borders, dots, and large bold labels, and set any text inside them in ink #2b2b2b.
- Fredoka and Baloo 2 stay at 16px minimum for body and 20px for headings with 1.5–1.6 line-height; Chewy is a display fallback only and must never carry a paragraph, a form value, or a navigation label.
- Honor prefers-reduced-motion: remove the hover lift, the press translate, and every transition duration, keeping only instant state changes, and replace any soft vignette drift with a static background.
- Never signal state with pigment alone — pair each dot, badge, and border with a written state ('Saved', 'Needs attention', 'Failed', 'Idle'), and keep a visible 3px #2c5f8a focus ring at 3px offset on every focusable element.
- Decorative borders, vines, and motif glyphs are aria-hidden and carry no meaning; if a motif is the only content of a control, give that control an accessible name.

## Attribution / sources

- Folk-art palette (cream #f7f0e1, red #c0392b, blue #2c5f8a, green #4f7a4a, yellow #e8b32a, ink #2b2b2b) — derived by eye from painted folk plates, chests, and stitched samplers, not sampled from any single artwork — https://lospec.com/palette-list (palette/CC0 — evocation only, no artworks reproduced)
- Folk art (traditional, attribution: anonymous makers) — aesthetic reference — https://en.wikipedia.org/wiki/Folk_art (evocation only, no artworks reproduced)
- Fredoka (Hafontia / Milena Brandão) — https://github.com/google/fonts/tree/main/ofl/fredoka (OFL 1.1)
- Baloo 2 (Ek Type) — https://github.com/google/fonts/tree/main/ofl/baloo2 (OFL 1.1)
- Chewy (Sideshow) — https://github.com/google/fonts/tree/main/apache/chewy (Apache-2.0)
- IBM Plex Mono (IBM) — https://github.com/google/fonts/tree/main/ofl/ibmplexmono (OFL 1.1)
