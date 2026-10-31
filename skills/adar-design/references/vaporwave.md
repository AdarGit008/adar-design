# Vaporwave / Synthwave — reference

Synthwave sunset: deep purple night ground, hot pink/cyan/yellow neon, a striped sunset sun over a cyan perspective grid, and a chrome-gradient wordmark.

**When to use:** When the user asks for vaporwave, synthwave, outrun, retrowave, 80s Miami/neon, chrome wordmark, sunset gradient, or VHS-era retro-futurist aesthetics.

**Signature element:** The sunset grid horizon — striped sun disc half-sunk on the horizon above a cyan perspective grid plane — crowned by the chrome-gradient wordmark

## Design tokens

### Colors (all roles)

| Role | Value |
|---|---|
| `background` | `#1a1038` |
| `surface` | `#2a1b52` |
| `foreground` | `#f7ecff` |
| `muted` | `#9d8bd6` |
| `primary` | `#ff6ec7` |
| `accent` | `#00e5ff` |
| `danger` | `#ff3b6b` |
| `warning` | `#ffd300` |
| `success` | `#35f0b0` |
| `border` | `#f7ecff` |
| `divider` | `#9d8bd6` |
| `selection` | `#00e5ff` |
| `overlay` | `#1a1038` |
| `selection-text` | `#1a1038` |
| `color-scheme` | `dark` |

### Variant: `sunset`

| Key | Value |
|---|---|
| `sky` | `#1a1038` |
| `horizon` | `#3b1b6b` |
| `pink` | `#ff6ec7` |
| `orange` | `#ff8c42` |
| `yellow` | `#ffd300` |
| `sunCore` | `#ffe79a` |
| `grid` | `#00e5ff` |
| `fade` | `#6b3fa8` |

### Variant: `chrome`

| Key | Value |
|---|---|
| `cap` | `#ffffff` |
| `sky` | `#7fd4ff` |
| `band` | `#0b0620` |
| `crossing` | `#2a1b52` |
| `low` | `#c8a2ff` |
| `edge` | `#f7ecff` |
| `ink` | `#1a1038` |

### Variant: `neon`

| Key | Value |
|---|---|
| `pink` | `#ff6ec7` |
| `cyan` | `#00e5ff` |
| `yellow` | `#ffd300` |
| `orange` | `#ff8c42` |
| `purple` | `#7b3ff2` |
| `mint` | `#35f0b0` |
| `red` | `#ff3b6b` |
| `white` | `#ffffff` |

### Variant: `vhsRamp`

| Key | Value |
|---|---|
| `0` | `#1a1038` |
| `1` | `#2a1b52` |
| `2` | `#6b3fa8` |
| `3` | `#ff6ec7` |
| `4` | `#ff8c42` |
| `5` | `#ffd300` |
| `6` | `#00e5ff` |
| `7` | `#f7ecff` |


### Typography

- Display: "Audiowide", "Orbitron", "Michroma", "sans-serif"
- Body: "Space Mono", "IBM Plex Mono", "monospace"
- Mono: "Space Mono", "IBM Plex Mono", "monospace"

### Type scale

| Tier | Size | Line-height | Notes |
|---|---|---|---|
| h1 | `32px` | 1.1 | — |
| h2 | `20px` | 1.2 | — |
| body | `15px` | 1.5 | — |
| caption | `12px` | 1.4 | — |

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `4px` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=24px` `xl=40px` |
| shadow.hard | `0 0 24px rgba(255,110,199,0.55), 0 0 64px rgba(255,140,66,0.25)` |
| shadow.glow | `0 0 12px rgba(0,229,255,0.65), 0 0 48px rgba(0,229,255,0.3)` |
| motion.easing | `cubic-bezier(0.22, 0.61, 0.36, 1)` |
| motion.cursor | `pulse 2.4s ease-in-out infinite` |
| motion.durations | `0ms` `240ms` `600ms` `2400ms` |
| effects.scanlines | `repeating-linear-gradient(to bottom, transparent 0 2px, rgba(255,110,199,0.05) 2px 3px, transparent 3px 4px)` |
| effects.vignette | `radial-gradient(ellipse at 50% 118%, rgba(255,140,66,0.35) 0%, transparent 52%), radial-gradient(ellipse at center, transparent 42%, rgba(11,6,32,0.78) 100%)` |
| effects.pixelate | `auto` |

## Work-style rules

- The sunset is the composition: one vertical pink→orange→yellow sky gradient (#ff6ec7 → #ff8c42 → #ffd300) anchored to the bottom of the hero surface, sitting on top of the deep purple night ground #1a1038 — never a full-page gradient behind body text, never inverted (yellow is always the low end).
- Draw the horizon as a real element: a striped sun (six to nine horizontal ink bands #1a1038 cutting the disc) half-sunk on the horizon line, over a perspective floor built from cyan repeating-linear-gradient lines in a transform: perspective(320px) rotateX(62deg) plane — the grid recedes, it never sits flat.
- Chrome is reserved for the wordmark and nothing else: a five-stop vertical gradient (#ffffff → #7fd4ff → #0b0620 → #c8a2ff → #ffffff) clipped to the text with a 1px #1a1038 text-shadow outline, tracking 0.04em–0.10em, uppercase — a second chrome element anywhere on the page cancels the first.
- Glow is depth: every raised surface carries a pink bloom (0 0 24px rgba(255,110,199,0.55)) and every focused or live element carries a cyan one (shadow.glow); soft dark drop shadows are still banned — the night sky is the dark, so elevation reads as emission, not as shadow.
- Spend one neon per surface: pink #ff6ec7 for primary action and the sun rim, cyan #00e5ff for focus, links, and grid lines, yellow #ffd300 for values and the sun's outer edge, orange #ff8c42 only as the gradient's middle stop.
- Set Audiowide or Orbitron for headings, buttons, wordmarks, and labels — uppercase, tracking 0.04em–0.12em, and never for a sentence; all running copy, table cells, and input values belong to Space Mono at 14px–16px/1.6.
- Gloss is allowed but must be flat-ish: 4px radius, 1px translucent edge (#f7ecff at 18%), inset top highlight — no glassmorphism blur, no backdrop-filter, no frost over the sunset.
- Motion is a slow drift, never a stutter: 600ms easing for state changes, a 2.4s pulse for live glow, and an optional 24s linear scroll on the grid or scanline overlay — always disabled under prefers-reduced-motion.

## Component recipes

- **panel:** background: linear-gradient(180deg, #2a1b52 0%, #1a1038 100%); color: #f7ecff; border: 1px solid rgba(247,236,255,0.18); border-radius: 4px; padding: 24px 40px; box-shadow: inset 0 1px 0 rgba(247,236,255,0.22), 0 0 24px rgba(255,110,199,0.35); backdrop-filter: none; — the top inset highlight is the glassy rim. Hero variant: give it a sunset footer strip (background: linear-gradient(180deg, #1a1038 0%, #3b1b6b 32%, #ff6ec7 62%, #ff8c42 82%, #ffd300 100%)) at least 160px tall with the striped sun centred and a cyan grid plane bleeding out below; overlay effects.scanlines at 100% cover with pointer-events: none, opacity 0.6.
- **card:** background:linear-gradient(180deg,#2a1b52 0%,#1a1038 100%);color:#f7ecff;border:1px solid rgba(247,236,255,0.18);border-radius:4px;padding:24px 40px;box-shadow:inset 0 1px 0 rgba(247,236,255,0.22),0 0 24px rgba(255,110,199,0.35); title = Audiowide 14px uppercase #ffd300, body = Space Mono 15px/1.6 #f7ecff; the optional sunset footer strip (linear-gradient(180deg,#3b1b6b,#ff6ec7,#ff8c42,#ffd300)) may sit below 160px with the striped sun centred; no chrome beyond the wordmark.
- **button:** font: 700 14px/1 'Audiowide', sans-serif; text-transform: uppercase; letter-spacing: 0.08em; background: linear-gradient(180deg, #ff6ec7 0%, #ff8c42 100%); color: #1a1038; border: 1px solid rgba(255,211,0,0.65); border-radius: 4px; padding: 12px 24px; box-shadow: 0 0 18px rgba(255,110,199,0.5), inset 0 1px 0 rgba(255,255,255,0.45); transition: box-shadow 240ms cubic-bezier(0.22,0.61,0.36,1), transform 240ms cubic-bezier(0.22,0.61,0.36,1); :hover { box-shadow: 0 0 28px rgba(255,110,199,0.75), 0 0 56px rgba(255,140,66,0.35), inset 0 1px 0 rgba(255,255,255,0.55); transform: translateY(-1px); } :active { transform: translateY(1px); box-shadow: 0 0 12px rgba(255,110,199,0.45), inset 0 2px 6px rgba(26,16,56,0.45); } :focus-visible { outline: 2px solid #00e5ff; outline-offset: 3px; } — secondary variant: transparent fill, 1px #00e5ff border, #00e5ff text, cyan glow on hover.
- **input:** background: rgba(26,16,56,0.85); color: #f7ecff; font: 15px/1.6 'Space Mono', monospace; border: 1px solid rgba(247,236,255,0.22); border-radius: 4px; padding: 10px 14px; caret-color: #00e5ff; box-shadow: inset 0 1px 0 rgba(247,236,255,0.12); transition: border-color 240ms, box-shadow 240ms; :placeholder { color: #9d8bd6; } :focus { border-color: #00e5ff; box-shadow: 0 0 12px rgba(0,229,255,0.65), 0 0 48px rgba(0,229,255,0.3), inset 0 1px 0 rgba(247,236,255,0.12); outline: none; } — invalid state: 1px #ff3b6b border plus a Space Mono message below prefixed 'SIGNAL LOST:', cyan caret retained so the field never goes fully red.
- **select:** A neon dropdown: trigger is a Space Mono 15px field (background:rgba(26,16,56,0.85);border:1px solid rgba(247,236,255,0.22);border-radius:4px;padding:10px 14px;color:#f7ecff) with a cyan '▾'; the open menu is a panel at 4px radius, 36px rows, active row = 2px #00e5ff left rule with #00e5ff text; hover glows text-shadow 0 0 12px rgba(0,229,255,0.75); no hard shadows.
- **checkbox:** A 22px square neon toggle: background:rgba(26,16,56,0.85);border:1px solid #9d8bd6;border-radius:4px; checked = solid #00e5ff fill with a 10px #1a1038 check, plus box-shadow:0 0 12px rgba(0,229,255,0.65); radio variant = a 10px #ff6ec7 dot inside the same well; label in Space Mono 15px #f7ecff with the state written 'ON'/'OFF'.
- **badge:** A 4px-radius neon chip: display:inline-flex;align-items:center;gap:8px;padding:4px 10px;background:#1a1038;border:1px solid;border-radius:4px;font:12px/1 'Space Mono',monospace;letter-spacing:0.14em;text-transform:uppercase; role = border+text (#35f0b0 success, #ffd300 warning, #ff3b6b danger, #00e5ff neutral) with the word spelled out; glow 0 0 12px in the role hue.
- **avatar:** A 40px square: background:linear-gradient(180deg,#2a1b52,#1a1038);border:1px solid rgba(247,236,255,0.18);border-radius:4px;color:#f7ecff;font:700 14px 'Audiowide'; initials or a two-letter wordmark; photo avatars get a 1px #ff6ec7 inner ring and no rounded crop beyond 4px.
- **nav:** Horizontal Audiowide rail: items 13px uppercase, letter-spacing 0.1em, color #9d8bd6, padding 10px 16px, border-radius 4px; hover = #f7ecff with cyan text-shadow; active = linear-gradient(180deg,#ff8c42,#ffd300) fill, #1a1038 text, box-shadow 0 0 18px rgba(255,140,66,0.6); the vertical form reuses the menu dropdown; separators are 1px rgba(255,110,199,0.35) rules.
- **table:** A neon grid on #1a1038: header row = Audiowide 12px uppercase #00e5ff over a 1px rgba(247,236,255,0.14) rule; body rows = Space Mono 14px/1.6 #f7ecff separated by 1px rgba(247,236,255,0.10) rules; hover warms to #ffd300, selected row = rgba(0,229,255,0.12) fill with a 2px #00e5ff left rule; values tabular, radius 4px, no zebra glow.
- **dialog:** A neon modal: panel recipe with an extra 0 0 24px rgba(255,110,199,0.55) bloom; scrim = color-mix(in srgb, var(--overlay) 60%, transparent); title = Audiowide uppercase #ffd300, body = Space Mono, actions = the gradient button plus a cyan-outline secondary; entrance is a 600ms cubic-bezier(0.22,0.61,0.36,1) fade with no slide past 4px.
- **toast:** A bottom-right neon alert: background:#1a1038;border:1px solid;border-radius:4px;padding:12px 16px;font:Space Mono 14px; a 4px left accent in the role color (#35f0b0/#ffd300/#ff3b6b) with its word (ARCHIVED/ON AIR/SIGNAL LOST); auto-dismisses with a 240ms fade and reduced motion keeps it static.
- **code:** A terminal-adjacent block: background:rgba(26,16,56,0.85);border:1px solid rgba(247,236,255,0.22);border-radius:4px;padding:16px;font:14px/1.6 'Space Mono',monospace;color:#f7ecff; preserve whitespace; comments #9d8bd6, strings #ffd300, errors #ff3b6b; a cyan caret line '>_' marks the prompt.
- **empty:** A centred panel with a small striped-sun glyph (circle cut by 1px #1a1038 bands) above one Space Mono message ('NO SIGNAL' / 'SIDE B IS EMPTY') and a single pink-to-orange CTA; the glyph is aria-hidden and the state is written in words.
- **statusbar:** height: 36px; display: flex; align-items: center; gap: 24px; padding: 0 16px; background: linear-gradient(90deg, #1a1038 0%, #2a1b52 55%, #3b1b6b 100%); border-top: 1px solid rgba(255,110,199,0.45); border-radius: 0; font: 12px/1 'Space Mono', monospace; letter-spacing: 0.14em; text-transform: uppercase; color: #9d8bd6; — live values in #ffd300, links and clock in #00e5ff, warnings in #ffd300, failures in #ff3b6b; segments separated by a 1px rgba(247,236,255,0.14) rule; the trailing 'ON AIR' dot is an 8px #ff6ec7 circle animated with motion.cursor (pulse 2.4s ease-in-out infinite), removed under reduced motion.
- **menu:** horizontal bar over the ground: item { display: inline-block; font: 700 13px/1 'Audiowide'; text-transform: uppercase; letter-spacing: 0.1em; padding: 10px 16px; color: #9d8bd6; border-radius: 4px; transition: color 240ms, box-shadow 240ms; } hover { color: #f7ecff; text-shadow: 0 0 12px rgba(0,229,255,0.75); } selected { color: #1a1038; background: linear-gradient(180deg, #ff8c42 0%, #ffd300 100%); box-shadow: 0 0 18px rgba(255,140,66,0.6); } — dropdown is a panel at 4px radius with a 1px rgba(247,236,255,0.18) border, 36px rows, and a 2px #00e5ff left rule on the active row; group separators are 1px rgba(255,110,199,0.35) rules, never dashed.

## Copywriting

- Voice: Late-night FM meets a 1984 car commercial: warm, confident, slightly wistful, addressed straight to the viewer as 'you'. Short declarative lines, present tense, one flourish per screen at most — it sells a feeling, not a feature list, and it never lapses into corporate SaaS voice.
- Case: headers=UPPERCASE with 0.08em tracking (Audiowide), or a single Title Case line when it carries the chrome gradient, commands=UPPERCASE on buttons and labels, body=sentence case
- Prefixes: SIDE A · SIDE B · [ONLINE] [OFFLINE] ⏵ //
- Verb table: start→TUNE IN; stop→SIGN OFF; save→ARCHIVE; load→CUE; delete→ERASE
- Avoid: corporate filler ('leverage', 'seamless', 'empower', 'solution', 'platform'), Please / Sorry / Oops and any apologetic loading copy, emoji, and more than one exclamation mark per screen, all-caps Space Mono paragraphs, ironic 80s misquotations and meme references, vaporwave text mangling (fullwidth ｖａｐｏｒ, zauberspruch) in body copy — accents only in decorative asides

## Do

- Anchor the sunset to the bottom of the hero surface and let the top of the page stay #1a1038, so the composition reads as a horizon rather than a wash.
- Build the signature scene from three layers in order: gradient sky, striped sun disc with horizontal ink bands, then the cyan perspective grid plane in front of the horizon line.
- Keep the chrome gradient on the wordmark alone, five stops with the dark #0b0620 band at 48%–52% for the reflective break, plus a 1px ink outline so it survives on light and dark grounds.
- Pair every glow with a real surface fill — pink bloom on #2a1b52 or #1a1038 — because neon on white reads as modern, not synthwave.
- Set headings in Audiowide/Orbitron uppercase with 0.04em–0.12em tracking, and put every sentence, value, and label longer than a few words in Space Mono.
- Use the scanline overlay and vignette at low opacity as a top layer with pointer-events: none, so type never loses contrast to the effect.

## Don't

- Don't run the sunset gradient behind body copy, buttons, or tables — the gradient lives in the sky band, the chrome wordmark, and one accent fill per screen.
- Don't mix chrome typography with a second chrome element: no chrome icons, no chrome buttons, no chrome panel headers.
- Don't add glassmorphism — no backdrop-filter, no 20px frosted blur, no translucent white cards over the sunset.
- Don't use sharp 0px corners or hard-offset block shadows; the system is 4px radius with 1px translucent edges and emissive glow, not brutalist pixel plates.
- Don't animate with steps(), stutter loops, or JPEG-crush/VHS jitter effects — drift and pulse only, and off entirely under reduced motion.
- Don't wash the palette toward pastel or white: keep the ground at #1a1038/#2a1b52 and let pink, cyan, and yellow stay saturated against it.

## Accessibility

- Keep body copy at #f7ecff on #1a1038 or #2a1b52 (both clear 4.5:1), and reserve #ff6ec7, #00e5ff, and #ffd300 for large bold type, borders, icons, and glow — a pink-on-purple 14px paragraph does not pass.
- Never place text directly on the sunset gradient; put it on a #1a1038 band or a panel with an opaque fill and use yellow #ffd300 or white #f7ecff above the orange, never ink #1a1038 on the dark end of the sky.
- Hold Space Mono body copy at 14px minimum with 1.6 line-height, and Audiowide headings at 20px+ with 0.08em tracking — the wide geometric caps shred at small sizes.
- Honor prefers-reduced-motion: stop the pulsing ON AIR dot, freeze the grid/scanline drift, and replace hover lift with a static glow change; keep a visible 2px #00e5ff focus outline at 3px offset on every focusable element.
- Never signal state by neon alone — pair each color with a word (ON AIR, SIGNAL LOST, ARCHIVED) and keep effect overlays below the type layer with pointer-events: none.

## Attribution / sources

- lospec vaporwave / synthwave palette collections — https://lospec.com/palette-list/tag/vaporwave (palette list (see individual palette pages))
- Audiowide (Astigmatic / Brian J. Bonislawsky) — https://github.com/google/fonts/tree/main/ofl/audiowide (OFL 1.1)
- Orbitron (Matt McInerney) — https://github.com/google/fonts/tree/main/ofl/orbitron (OFL 1.1)
- Space Mono (Colophon Foundry) — https://github.com/google/fonts/tree/main/ofl/spacemono (OFL 1.1)
- fontsource (self-hosted Google Fonts packaging) — https://github.com/fontsource/fontsource (MIT)
- NovusGFX retro-design-system — https://github.com/NovusGFX/retro-design-system (MIT)
