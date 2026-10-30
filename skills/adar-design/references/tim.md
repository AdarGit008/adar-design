# The Incredible Machine — reference

90s puzzle-game workbench: warm cream canvas, crayon red/yellow/blue/green parts, 3px ink outlines, chunky pills, and a visible chain of cause and effect that runs left to right.

**When to use:** When the user asks for The Incredible Machine, a 90s puzzle-game look, Rube Goldberg contraptions, whimsical machine motifs, cartoon crayon colors, a bright hand-drawn toy aesthetic, or a playful build-and-test sandbox UI.

**Signature element:** The contraption canvas: a dashed-rail workbench where cream cards, 3px ink-stroked crayon parts, and lever/ramp/ball/pulley motifs show one action visibly cranking the next

## Design tokens

### Colors (primary roles)

| Role | Value |
|---|---|
| `background` | `#f5efe0` |
| `surface` | `#fffaf0` |
| `foreground` | `#2b2b2b` |
| `muted` | `#8a8175` |
| `primary` | `#e63946` |
| `accent` | `#2d7dd2` |
| `danger` | `#c1121f` |
| `warning` | `#ffd23f` |
| `success` | `#52b788` |

### Variant: `crayon`

| Key | Value |
|---|---|
| `cream` | `#f5efe0` |
| `paper` | `#fffaf0` |
| `red` | `#e63946` |
| `yellow` | `#ffd23f` |
| `blue` | `#2d7dd2` |
| `green` | `#52b788` |
| `ink` | `#2b2b2b` |
| `muted` | `#8a8175` |
| `shadow` | `#2b2b2b` |

### Variant: `crayonRamps`

| Key | Value |
|---|---|
| `red` | `#f4a3a9/#e63946/#c1121f` |
| `yellow` | `#ffe89a/#ffd23f/#e0a800` |
| `blue` | `#93c1ee/#2d7dd2/#1b5591` |
| `green` | `#a6dcbf/#52b788/#2d8059` |
| `ink` | `#6b6b6b/#2b2b2b/#000000` |

### Variant: `machineParts`

| Key | Value |
|---|---|
| `canvas` | `#f5efe0` |
| `ball` | `#e63946` |
| `ramp` | `#2d7dd2` |
| `lever` | `#ffd23f` |
| `pulley` | `#52b788` |
| `chute` | `#8a8175` |
| `spring` | `#c1121f` |
| `outline` | `#2b2b2b` |


### Typography

- Display: "Fredoka", "Baloo 2", "Chewy", "system-ui", "sans-serif"
- Mono: "IBM Plex Mono", "ui-monospace", "monospace"

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `14px` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=24px` `xl=40px` |
| shadow.hard | `6px 6px 0 #2b2b2b` |
| shadow.glow | `0 0 0 4px #ffd23f` |
| motion.easing | `cubic-bezier(.34,1.56,.64,1)` |
| motion.cursor | `grab` |
| motion.durations | `0ms` `120ms` `240ms` `600ms` |
| effects.scanlines | `repeating-linear-gradient(45deg, rgba(43,43,43,.045) 0 2px, transparent 2px 6px)` |
| effects.vignette | `radial-gradient(ellipse at 50% 0%, #fffaf0 0%, #f5efe0 70%)` |
| effects.pixelate | `auto` |

## Work-style rules

- Rig before you style: every screen is a small machine — put the trigger at the start, the outcome at the end, and draw one visible connector (dashed rail, chute, pulley line) that shows the path between them.
- Crayon, not neon: fills come from the six-color crayon set only, every shape carries a 3px #2b2b2b ink stroke, and emphasis is a solid color block or a hand-drawn ring — never a gradient, blur, or glow.
- Round the geometry: 14px radius on cards, wells, and media, full pills on buttons, badges, and lever tracks, because square corners read as modern minimalism rather than as a cut-out puzzle part.
- Depth is stamped, not lit: 6px 6px 0 #2b2b2b hard offsets on cards and buttons, and pressing moves the element into its own shadow (translate(6px,6px) with the offset collapsed to 0 0 0) so clicks feel like pushing a physical part.
- Set headings in Fredoka 700 Title Case at 20px and up with 1.2 line-height; body copy is Fredoka 400/500 at 16–18px/1.5 in sentence case, and IBM Plex Mono is reserved for machine data — part counts, coordinates, step logs, build ids.
- Spend one crayon per role: red #e63946 for primary action, blue #2d7dd2 for links, secondary action, and focus ring, yellow #ffd23f for highlight and warning, green #52b788 for a passing test run, #c1121f for hard failure.
- Animate short and springy: 120–240ms with cubic-bezier(.34,1.56,.64,1) so hover and press overshoot once before settling, and stagger chained machine steps by 120ms each so cause visibly precedes effect.
- Stay evocation-only: no sprites, screenshots, logo, or copied level layouts from the game — the whimsy comes from the crayon palette and motif icons drawn from primitives (ball, ramp, lever, pulley, chute, spring).

## Component recipes

- **panel:** background: #fffaf0; border: 3px solid #2b2b2b; border-radius: 14px; padding: 24px; color: #2b2b2b; box-shadow: 6px 6px 0 #2b2b2b; — panels that are steps in a sequence get border-left: 8px dotted #2b2b2b and a 32px yellow #ffd23f circle holding the step number; the heading inside is Fredoka 700 24px Title Case with a 6px #ffd23f highlight block behind its last word; drop the hard shadow below 640px and keep the 3px ink border.
- **button:** font: 700 18px/1 'Fredoka', 'Baloo 2', system-ui, sans-serif; padding: 14px 24px; border-radius: 999px; background: #e63946; color: #f5efe0; border: 3px solid #2b2b2b; box-shadow: 6px 6px 0 #2b2b2b; transition: transform 120ms cubic-bezier(.34,1.56,.64,1), box-shadow 120ms cubic-bezier(.34,1.56,.64,1), background-color 120ms linear; :hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 #2b2b2b; } :active { transform: translate(6px, 6px); box-shadow: 0 0 0 #2b2b2b; } :focus-visible { outline: 3px solid #2d7dd2; outline-offset: 3px; } — secondary variant: background #fffaf0, color #2b2b2b, box-shadow 6px 6px 0 #ffd23f; disabled: background #f5efe0, color #8a8175, shadow 0 0 0, no transform.
- **input:** font: 16px/1.5 'IBM Plex Mono', ui-monospace, monospace; color: #2b2b2b; background: #f5efe0; border: 3px solid #2b2b2b; border-radius: 14px; padding: 12px 16px; box-shadow: inset 0 3px 0 rgba(43,43,43,.12); :placeholder { color: #8a8175; font: 400 16px 'Fredoka', system-ui, sans-serif; } :focus { background: #fffaf0; outline: 3px solid #2d7dd2; outline-offset: 2px; } — invalid: border-color #c1121f plus a 16px Fredoka sentence below in #c1121f ('That part does not fit here.') so the error never relies on the red stroke alone.
- **statusbar:** height: 56px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 0 24px; background: #f5efe0; border-top: 3px solid #2b2b2b; border-radius: 14px 14px 0 0; font: 14px/1.4 'IBM Plex Mono', monospace; letter-spacing: 0.04em; color: #2b2b2b; left side is a machine log of entries each prefixed by a 10px crayon dot — #52b788 passed, #ffd23f warning, #c1121f failed, #8a8175 idle; right side holds a mono part counter and the single primary 'Test run' button; the entry currently executing pulses scale(1) → scale(1.08) over 600ms with cubic-bezier(.34,1.56,.64,1).
- **menu:** vertical part tray, no bullets, 8px gap: item { display: flex; align-items: center; gap: 12px; padding: 10px 16px; font: 600 18px/1.3 'Fredoka', system-ui, sans-serif; color: #2b2b2b; background: #fffaf0; border: 3px solid #2b2b2b; border-radius: 14px; box-shadow: 4px 4px 0 #2b2b2b; } selected row fills #ffd23f with ink text, its drag-handle dots turn #e63946, and its icon swaps to the filled part; hover lifts transform: translate(-2px, -2px) with box-shadow 6px 6px 0 #2b2b2b; group headers are Fredoka 700 13px uppercase with letter-spacing 0.12em on the cream ground with no stroke.
- **toggle:** lever switch, 72px x 40px: track { background: #f5efe0; border: 3px solid #2b2b2b; border-radius: 999px; padding: 3px; box-shadow: inset 0 3px 0 rgba(43,43,43,.12); } knob is a 28px ball with a 3px ink stroke, #2d7dd2 when off and #52b788 when on, translating 32px over 240ms cubic-bezier(.34,1.56,.64,1); the track carries two 4px dotted #8a8175 rail marks so it reads as a machine part instead of a phone switch; label sits above in Fredoka 700 14px Title Case and the state is repeated as text ('On'/'Off') for screen readers.

## Copywriting

- Voice: An enthusiastic tinkerer narrating the machine out loud: short, concrete, present tense, faintly absurd. Copy names the part and the consequence ('Drop the ball. The seesaw flips the ramp.') and celebrates the chain reaction rather than the software, so the reader feels they are rigging a contraption, not filing a ticket.
- Case: headers=Title Case, commands=sentence case imperative ('Add a ramp', 'Run the test'), body=sentence case
- Prefixes: [RIG] [RUN] [CLUNK] [SPROING] [NICE] [OOPS]
- Verb table: start→ASSEMBLE; stop→STOP THE MACHINE; save→SAVE THE CONTRAPTION; load→LOAD THE CONTRAPTION; delete→SCRAP IT
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution'), deadpan system errors ('Invalid input.', 'An error occurred'), sarcasm, insults, or scolding the user for a broken rig, ticket ids, hex hashes, and log noise in user-facing copy, emoji as bullets or inside headings, all-caps sentences longer than three words, any image, sprite, logo, character, or level name copied from the original game

## Do

- Give every action a visible consequence somewhere else on the screen — a counter moves, a part drops, a line of the log turns green — so the interface always feels like a rigged machine.
- Outline every shape with the same 3px #2b2b2b ink stroke and fill it with one flat crayon color, the way a shape is coloured in and cut out.
- Keep the cream ground (#f5efe0, cards at #fffaf0) and let only the six crayon colors appear on top of it; a crayon color on white stops reading as crayon.
- Use chunky pills and 14px radii with 6px hard ink shadows, and depress elements by exactly their own offset on :active.
- Set headings in Fredoka 700 Title Case from 20px up and body in Fredoka 400/500 at 16–18px/1.5; keep IBM Plex Mono for machine data only.
- Draw motif icons from primitives (ball = circle, ramp = wedge, lever = bar plus knob, pulley = circle plus cord, chute = arc, spring = coil) rather than shipping artwork from any existing game.

## Don't

- No game assets: no sprites, screenshots, logo, character art, or recreated level layouts — evocation through palette, motif, and layout only.
- No gradients, glassmorphism, backdrop-blur, or semi-transparent overlays; a part is one opaque fill inside one ink stroke.
- No blurred shadows beyond the single 0 8px 16px rgba(43,43,43,.10) floating-tray lift, and no neon glow on anything.
- No 0-radius cards, no 1px hairlines, no hairline dividers — the smallest line weight in the system is 3px ink.
- No second crayon color inside one component as decoration; one role color per part, plus ink for the stroke and text.
- No long ease-in-out fades, no infinite bouncing, no more than one overshoot per interaction; and no more than three all-caps words in a row.

## Accessibility

- Ink #2b2b2b on cream #f5efe0 clears 4.5:1 comfortably, but red #e63946, yellow #ffd23f, and green #52b788 on cream do not — use those only as fills, borders, dots, or large bold labels, and set text inside them in ink rather than cream.
- Fredoka and Baloo 2 stay at 16px minimum for body and 20px for headings with 1.4–1.5 line-height; Chewy is a display-only fallback and must never carry a paragraph or a form value.
- Honor prefers-reduced-motion: drop the spring overshoot and the log-pulse, and advance chained machine steps as instant state changes so cause and effect remain legible without animation.
- Never signal state with crayon color alone — pair each dot, lever, and border with a word ('Passed', 'Warning', 'Failed', 'On'/'Off') plus a visible 3px #2d7dd2 focus ring on every focusable element, and give motif-only buttons an accessible name.

## Attribution / sources

- The Incredible Machine (Dynamix / Sierra, 1993) — aesthetic reference — https://en.wikipedia.org/wiki/The_Incredible_Machine_(series) (evocation only, no game assets reproduced)
- Crayon palette (cream #f5efe0, red #e63946, yellow #ffd23f, blue #2d7dd2, green #52b788, ink #2b2b2b) — derived by eye from 90s box art, not sampled from any game file — https://lospec.com/palette-list (palette/CC0 — evocation only, no game assets reproduced)
- Fredoka (Hafontia / Milena Brandão) — https://github.com/google/fonts/tree/main/ofl/fredoka (OFL 1.1)
- Baloo 2 (Ek Type) — https://github.com/google/fonts/tree/main/ofl/baloo2 (OFL 1.1)
- Chewy (Sideshow) — https://github.com/google/fonts/tree/main/apache/chewy (Apache-2.0)
- IBM Plex Mono (IBM) — https://github.com/google/fonts/tree/main/ofl/ibmplexmono (OFL 1.1)
