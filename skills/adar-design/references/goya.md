# Goya / Black Paintings — reference

Goya's dark late period as an interface: near-black grounds, bone-white highlights, somber earth pigments, blood-red accents, and figures emerging from shadow under etched crosshatch.

**When to use:** When the user asks for Goya, the Black Paintings, Los Caprichos, a chiaroscuro or old-master look, dark-academia fine-art styling, etching/aquatint texture, somber museum or gallery presentation, or a dramatic near-black interface with bone and earth tones.

**Signature element:** A chiaroscuro figure emerging from a near-black ground: one bone-lit focal shape cut by etched crosshatch, with the heavy vignette closing the frame around it

## Design tokens

### Colors (all roles)

| Role | Value |
|---|---|
| `background` | `#0d0b09` |
| `surface` | `#16120e` |
| `foreground` | `#e8dcc8` |
| `muted` | `#8a7a63` |
| `primary` | `#a56a2e` |
| `accent` | `#6e1414` |
| `danger` | `#8f2222` |
| `warning` | `#a56a2e` |
| `success` | `#6b7f5e` |
| `border` | `#8a7a63` |
| `divider` | `#2a2a28` |
| `selection` | `#a56a2e` |
| `overlay` | `#0d0b09` |
| `selection-text` | `#e8dcc8` |
| `color-scheme` | `dark` |

### Variant: `blackPaintings`

| Key | Value |
|---|---|
| `void` | `#0d0b09` |
| `ground` | `#16120e` |
| `umber` | `#2a2a28` |
| `bone` | `#e8dcc8` |
| `boneDim` | `#b9a98f` |
| `ochre` | `#a56a2e` |
| `sienna` | `#7a3b1e` |
| `blood` | `#6e1414` |
| `lead` | `#8a7a63` |

### Variant: `caprichos`

| Key | Value |
|---|---|
| `paper` | `#e8dcc8` |
| `plate` | `#d6c7ad` |
| `ink` | `#1b1714` |
| `wash` | `#6b5946` |
| `aquatint` | `#8a7a63` |
| `rouge` | `#7a3b1e` |

### Variant: `earthRamps`

| Key | Value |
|---|---|
| `bone` | `#f3ecdf/#e8dcc8/#b9a98f` |
| `ochre` | `#c08a48/#a56a2e/#7a4a1c` |
| `sienna` | `#9a5228/#7a3b1e/#4f2412` |
| `blood` | `#8f2222/#6e1414/#440c0c` |
| `charcoal` | `#3a3a36/#2a2a28/#0d0b09` |


### Typography

- Display: "Playfair Display", "Cormorant", "Cormorant Garamond", "Georgia", "serif"
- Body: "Playfair Display", "Cormorant", "Georgia", "serif"
- Mono: "IBM Plex Mono", "ui-monospace", "monospace"

### Type scale

| Tier | Size | Line-height | Notes |
|---|---|---|---|
| h1 | `56px` | 1.1 | — |
| h2 | `32px` | 1.2 | — |
| body | `19px` | 1.6 | — |
| caption | `13px` | 1.4 | — |

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `2px` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=28px` `xl=48px` |
| shadow.hard | `0 0 0 1px #2a2a28` |
| shadow.glow | `0 0 48px rgba(232,220,200,.05)` |
| motion.easing | `cubic-bezier(.22,.08,.18,1)` |
| motion.cursor | `default` |
| motion.durations | `0ms` `480ms` `1200ms` `2400ms` |
| effects.scanlines | `none` |
| effects.vignette | `radial-gradient(ellipse at 50% 42%, transparent 0%, transparent 26%, rgba(13,11,9,.55) 62%, rgba(0,0,0,.94) 100%)` |
| effects.pixelate | `auto` |

## Work-style rules

- Light is the layout: every surface is lit from one direction, a single bone #e8dcc8 highlight climbs out of a near-black ground #0d0b09, and everything the light does not reach falls to #2a2a28 or darker — no evenly lit cards, no ambient fill.
- Pigment, not neon: the palette is bone #e8dcc8, ochre #a56a2e, sienna #7a3b1e, blood #6e1414, and charcoal #2a2a28 on the void; saturation stays low, contrast stays extreme, and pure white or pure black never sits next to a mid-tone.
- Red is a wound, not a brand: blood #6e1414 is reserved for the single most consequential action or the one true alert on a screen, never for decoration, secondary buttons, or hover tints.
- Etched edges: borders are 1px hairlines in #2a2a28 or #8a7a63, corners stay at 2px, and texture arrives through crosshatch rules and aquatint grain rather than rounded cards, glow, or glass.
- Set display type in Playfair Display 700–900 at 32px and up with tight 0.02em tracking and a slight negative letter-spacing at large sizes; body is Playfair 400 or Cormorant 400 at 17–19px/1.6, and IBM Plex Mono carries labels, dates, catalogue numbers, and captions in uppercase with 0.14em tracking.
- Motion is slow and ominous: 480–2400ms, one-way easing that settles without bounce, opacity and luminance changes instead of slides, and nothing that loops faster than 12 seconds or flickers.
- Frame like a plate: give content a generous dark margin, a single hairline rule under the masthead, and a small mono caption in the lower left that names the state — the composition should feel printed and mounted rather than scrolled.
- Stay evocation-only: no Goya painting, etching, or detail is cropped, traced, recoloured, or shipped as a background image — the mood comes from palette, light behaviour, and drawn crosshatch.

## Component recipes

- **panel:** background: #16120e; border: 1px solid #2a2a28; border-radius: 2px; padding: 28px; color: #e8dcc8; box-shadow: inset 0 1px 0 rgba(232,220,200,.05), 0 24px 64px rgba(0,0,0,.72); — the panel is a lit object in a dark room: add a top-left falloff with a pseudo-element using radial-gradient(120% 100% at 0% 0%, rgba(232,220,200,.055), transparent 58%) and let the lower right stay near-black; headings are Playfair Display 700 26px with a 1px #8a7a63 rule 12px beneath, and a card that holds an alert may take border-left: 3px solid #6e1414 with no other colour change.
- **card:** background:#16120e;border:1px solid #2a2a28;border-radius:2px;padding:28px;color:#e8dcc8;box-shadow:inset 0 1px 0 rgba(232,220,200,0.05),0 24px 64px rgba(0,0,0,0.72); a top-left radial falloff (rgba(232,220,200,0.055) → transparent 58%) lights one corner; title = Playfair Display 700 26px with a 1px #8a7a63 rule 12px beneath; body = Playfair/Cormorant 17px/1.6; a card holding an alert may take border-left:3px solid #6e1414.
- **button:** font: 700 15px/1 'Playfair Display', 'Cormorant', Georgia, serif; letter-spacing: 0.06em; text-transform: uppercase; padding: 14px 26px; border-radius: 2px; background: #a56a2e; color: #0d0b09; border: 1px solid #c08a48; box-shadow: inset 0 1px 0 rgba(232,220,200,.22), 0 8px 24px rgba(0,0,0,.55); transition: background-color 480ms cubic-bezier(.22,.08,.18,1), box-shadow 480ms cubic-bezier(.22,.08,.18,1), color 480ms linear; :hover { background: #c08a48; box-shadow: inset 0 1px 0 rgba(232,220,200,.28), 0 10px 32px rgba(0,0,0,.6); } :active { background: #7a4a1c; } :focus-visible { outline: 1px solid #e8dcc8; outline-offset: 3px; } — primary reads as candlelight on ochre; the destructive variant is #6e1414 with a #f3ecdf label and appears once per view at most; secondary is transparent with a 1px #8a7a63 border and bone text.
- **input:** font: 400 17px/1.6 'Playfair Display', 'Cormorant', Georgia, serif; color: #e8dcc8; background: #0d0b09; border: 1px solid #2a2a28; border-radius: 2px; padding: 13px 16px; box-shadow: inset 0 2px 10px rgba(0,0,0,.8); :placeholder { color: #8a7a63; font-style: italic; } :focus { border-color: #a56a2e; box-shadow: inset 0 2px 10px rgba(0,0,0,.8), 0 0 0 1px #a56a2e; outline: none; } — label above in 11px IBM Plex Mono uppercase, letter-spacing 0.14em, colour #8a7a63; invalid inputs take border-color #8f2222 plus a 14px italic sentence beneath in #b9a98f that states what is wrong, so the error never depends on the red line alone.
- **select:** A catalogue dropdown: trigger = Playfair 17px field (background:#0d0b09;border:1px solid #2a2a28;padding:13px 16px;color:#e8dcc8) with an ochre '▾'; the open list is a #0d0b09 panel of Playfair rows separated by 1px #2a2a28 rules; the selected row turns #e8dcc8 with a 3px #6e1414 left bar and a mono index; hover lightens to #e8dcc8 over 480ms.
- **checkbox:** An engraved plate toggle: 22px square, background:#0d0b09;border:1px solid #2a2a28;border-radius:2px;box-shadow:inset 0 2px 8px rgba(0,0,0,0.85); checked = a 10px #a56a2e square with a bone top highlight; radio = 8px #a56a2e dot; label = IBM Plex Mono 11px uppercase #8a7a63 with 'Off'/'On'; focus-visible = 1px #e8dcc8 outline at 3px offset.
- **badge:** An inscription chip: display:inline-flex;gap:8px;padding:2px 8px;background:#0d0b09;border:1px solid #2a2a28;border-radius:2px;font:11px/1.4 'IBM Plex Mono';text-transform:uppercase;letter-spacing:0.14em; role = text color (#6b7f5e success, #a56a2e warning, #8f2222 danger, #8a7a63 neutral) with the word spelled out; no fill, no glow.
- **avatar:** A 40px square plate: background:#16120e;border:1px solid #2a2a28;border-radius:2px;color:#e8dcc8;font:700 18px 'Playfair Display'; initials or an etched glyph; image avatars get a 1px #8a7a63 frame and a faint crosshatch overlay.
- **nav:** A vertical catalogue rail: items = Playfair 17px/1.4 #b9a98f, padding 12px 16px, border-bottom 1px #2a2a28; hover lightens to #e8dcc8 over 480ms; active = #e8dcc8 with a 3px #6e1414 left bar and a right-aligned mono index; group headers = IBM Plex Mono 11px uppercase #8a7a63 with a full-width hairline above; the horizontal form is allowed.
- **table:** An etched grid: header = IBM Plex Mono 11px uppercase #8a7a63 over a 1px #2a2a28 rule; body rows = Playfair 17px/1.6 #e8dcc8 separated by 1px #2a2a28 rules; hover = #e8dcc8, selected row = rgba(165,106,46,0.12) wash with a 3px #6e1414 left bar; values in tabular Plex Mono, radius 2px.
- **dialog:** A chiaroscuro modal: panel recipe with a top-left light falloff and a deep 0 24px 64px shadow; scrim = color-mix(in srgb, var(--overlay) 70%, transparent); title = Playfair Display 700, body = Cormorant 17px/1.6; actions = ochre primary + transparent 1px #8a7a63 secondary; entrance is a 1200ms luminance fade, reduced motion = instant.
- **toast:** A bottom-right inscription: background:#0d0b09;border:1px solid #2a2a28;padding:10px 14px;font:11px/1.4 'IBM Plex Mono';text-transform:uppercase;letter-spacing:0.14em; prefix the word 'Saved'/'Open'/'Failed' in #6b7f5e/#a56a2e/#8f2222; auto-dismisses with a 1200ms fade; reduced motion keeps it static.
- **code:** An etched block: background:#0d0b09;border:1px solid #2a2a28;border-radius:2px;padding:16px;font:13px/1.6 'IBM Plex Mono';color:#e8dcc8; preserve whitespace; comments #8a7a63, strings #a56a2e, errors #8f2222; a faint crosshatch may sit behind the block at 3% alpha.
- **empty:** A centred plate: a single bone-lit focal glyph (a crosshatched circle) above one Cormorant message ('The register is empty.') and a single ochre CTA; the glyph is aria-hidden and the state is written in words.
- **statusbar:** height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 28px; padding: 0 28px; background: #0d0b09; border-top: 1px solid #2a2a28; font: 500 11px/1.4 'IBM Plex Mono', ui-monospace, monospace; text-transform: uppercase; letter-spacing: 0.14em; color: #8a7a63; left side is a single engraved line of state — plate number, state, timestamp — separated by 1px #2a2a28 rules rather than dots; the right side holds one quiet text action in bone #e8dcc8; the active entry brightens to #e8dcc8 over 1200ms, and any failure word alone turns #8f2222 with a 1px #6e1414 underline.
- **menu:** a vertical catalogue, no bullets, 2px gap on a #0d0b09 ground: item { display: flex; justify-content: space-between; align-items: baseline; padding: 12px 16px; font: 400 17px/1.4 'Playfair Display', Georgia, serif; color: #b9a98f; border-bottom: 1px solid #2a2a28; } selected row turns #e8dcc8 with a 3px #6e1414 bar on its left edge and a mono index at the right; hover lightens the text to #e8dcc8 over 480ms and draws a 1px #8a7a63 rule under the label; group headers are 11px IBM Plex Mono uppercase, letter-spacing 0.18em, #8a7a63, with a full-width hairline above.
- **toggle:** engraved plate switch, 64px x 34px: track { background: #0d0b09; border: 1px solid #2a2a28; border-radius: 2px; box-shadow: inset 0 2px 8px rgba(0,0,0,.85); } knob is a 26px square with 1px #8a7a63 border and 2px radius, #2a2a28 when off and #a56a2e when on, translating 30px over 1200ms cubic-bezier(.22,.08,.18,1); when off a faint crosshatch fills the knob, when on the knob takes a bone #e8dcc8 top highlight so it reads as catching light; the state is also written out to the right in 11px Plex Mono uppercase ('Off'/'On', #8a7a63 / #e8dcc8).

## Copywriting

- Voice: A museum wall label crossed with a plate inscription: grave, exact, and a little theatrical. Copy names what is seen and what it costs ('The register is closed. No names were taken.') in the present tense, prefers nouns to adjectives, and lets one short sentence carry the weight where a paragraph would dissipate it. Never cheerful, never chatty, never scolding — the reader is a witness, not a customer.
- Case: headers=Title Case for section heads; ALL CAPS only for 1–3 word plate labels, commands=sentence case imperative ('Enter the name', 'Close the register'), body=sentence case
- Prefixes: PLATE STATE NOTE ERRATA WARNING CLOSED
- Verb table: start→BEGIN THE SITTING; stop→CLOSE THE REGISTER; save→SET THE PLATE; load→RETRIEVE THE PLATE; delete→STRIKE FROM THE RECORD
- Avoid: exclamation marks and uplift ('Great job!', 'You're all set!'), cute or forgiving error copy ('Oops', 'Uh-oh', 'No worries'), modern product filler ('seamless', 'leverage', 'empower', 'delight'), emoji, sparkles, and decorative punctuation, quoting Goya's capricho captions or reproducing any work's title as UI copy, long all-caps sentences; all-caps is for labels of three words or fewer

## Do

- Light every screen from one source: a bone highlight that fades into charcoal and void, so the eye is led to the single most important element first.
- Keep the ground at #0d0b09 and surfaces at #16120e, and let bone #e8dcc8 text carry the reading load at 17–19px with 1.6 line-height.
- Reserve blood #6e1414 for one consequential action or one true alert per view, and treat ochre #a56a2e as the working primary.
- Draw texture with 1px crosshatch rules, 45°/135° repeating-linear-gradients at low alpha, and aquatint grain — never with bitmap artwork or a photographic background.
- Mount content like a plate: generous dark margins, a hairline rule under the masthead, and a small Plex Mono caption that states place, state, and date.
- Let type do the drama — Playfair Display at 700–900 for display, italic Cormorant for asides, Plex Mono uppercase for catalogue data — and keep body copy quiet.
- Move slowly: 480–1200ms luminance and opacity transitions that settle in one direction, with no bounce and no looping shimmer.

## Don't

- No Goya artwork, etching, or detail — no crops, traces, recolours, or AI pastiche — as imagery, texture, or hero background; evocation comes from palette, light, and drawn hatching only.
- No pure white #ffffff on pure black #000000 as a text pair; bone on void is the contract, and the vignette may reach black only at the frame edge.
- No second red, no neon, no gradient mesh, no glassmorphism, no backdrop-blur, and no glow stronger than the single 0 0 48px rgba(232,220,200,.05) halo.
- No rounded 12–24px cards, no pill buttons, no soft ambient drop shadows, and no 2px+ decorative strokes — 1px hairlines and 2px radii are the whole vocabulary.
- No cheerful microcopy, no confetti, no success emoji, and no green brighter than #6b7f5e; celebration is off-mode.
- No fast motion: no 120ms hovers, no spring overshoot, no infinite spinners, and no flicker that could be mistaken for a CRT effect.

## Accessibility

- Bone #e8dcc8 on #0d0b09 clears 13:1 and #8a7a63 on #0d0b09 clears about 4.6:1 — hold muted text at 14px or larger, and never dim body copy below #b9a98f.
- Blood #6e1414 and ochre #a56a2e are for fills, rules, and large bold labels only; text on top of them is bone #e8dcc8 and must be checked against the fill, not the ground.
- The heavy vignette must never sit over text or focus rings — apply it to the page frame at 26% and beyond so the readable field stays clear, and keep a visible 1px bone focus outline with 3px offset on every focusable element.
- Honour prefers-reduced-motion: replace the 480–2400ms luminance transitions with instant state changes and keep the crosshatch and vignette static, since neither carries meaning on its own.
- Never signal state with pigment alone — pair every red rule, ochre fill, and crosshatch change with a word in Plex Mono ('Failed', 'Open', 'Closed') so colour is confirmation rather than the message.

## Attribution / sources

- Francisco Goya — late works (Black Paintings, 1819–1823; Los Caprichos, 1799) — aesthetic reference — https://www.museodelprado.es/en/the-collection/artist/goya-y-lucientes-francisco-de (public domain works — evocation only, no artworks reproduced)
- Earth palette (void #0d0b09, bone #e8dcc8, ochre #a56a2e, sienna #7a3b1e, blood #6e1414, charcoal #2a2a28) — derived by eye from Goya's late works, not sampled from any image file — https://lospec.com/palette-list (evocation only, no artworks reproduced)
- Playfair Display (Claus Eggers Sørensen) — https://github.com/google/fonts/tree/main/ofl/playfairdisplay (OFL 1.1)
- Cormorant (Christian Thalmann, Catharsis Fonts) — https://github.com/google/fonts/tree/main/ofl/cormorant (OFL 1.1)
- IBM Plex Mono (IBM) — https://github.com/google/fonts/tree/main/ofl/ibmplexmono (OFL 1.1)
