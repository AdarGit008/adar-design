# Cubism — reference

Analytic-cubist canvas: a warm cream ground broken into offset charcoal-edged planes of ochre, olive, warm gray, and blue-gray, one form drawn from several viewpoints at once, with flat papier collé cuts instead of shadows or gradients.

**When to use:** When the user asks for Cubism, Picasso/Braque, fragmented planes, multiple viewpoints, papier collé collage, muted modernist earth tones, angular editorial layouts, or a gallery/museum-catalogue aesthetic — and for any interface that should read as constructed from cut planes rather than floating cards.

**Signature element:** The fractured plane: a single form rebuilt from offset charcoal-edged quadrilaterals in ochre, olive, warm gray, and blue-gray, its facets showing two viewpoints at once and never resolving into one outline

## Design tokens

### Colors (all roles)

| Role | Value |
|---|---|
| `background` | `#efe9dc` |
| `surface` | `#f5f1e8` |
| `foreground` | `#2a2a28` |
| `muted` | `#8a7f6f` |
| `primary` | `#b08d57` |
| `accent` | `#5b6b7a` |
| `danger` | `#8f3b2f` |
| `warning` | `#9a7b2e` |
| `success` | `#6b6b3e` |
| `border` | `#2a2a28` |
| `divider` | `#8a7f6f` |
| `selection` | `#5b6b7a` |
| `overlay` | `#2a2a28` |
| `selection-text` | `#ffffff` |
| `color-scheme` | `light` |

### Variant: `cubism`

| Key | Value |
|---|---|
| `cream` | `#efe9dc` |
| `paper` | `#f5f1e8` |
| `warmGray` | `#8a7f6f` |
| `ochre` | `#b08d57` |
| `olive` | `#6b6b3e` |
| `charcoal` | `#2a2a28` |
| `blueGray` | `#5b6b7a` |
| `sienna` | `#8f3b2f` |
| `sand` | `#d9cfba` |

### Variant: `planes`

| Key | Value |
|---|---|
| `ground` | `#efe9dc` |
| `planeOchre` | `#b08d57` |
| `planeOlive` | `#6b6b3e` |
| `planeBlueGray` | `#5b6b7a` |
| `planeGray` | `#8a7f6f` |
| `planeSand` | `#d9cfba` |
| `planeCharcoal` | `#2a2a28` |
| `edge` | `#2a2a28` |
| `pasteShadow` | `#c4b9a4` |

### Variant: `earthRamps`

| Key | Value |
|---|---|
| `ochre` | `#cdb083/#b08d57/#8a6d3f` |
| `olive` | `#8d8d5c/#6b6b3e/#4c4c2b` |
| `warmGray` | `#a9a094/#8a7f6f/#665d50` |
| `blueGray` | `#7f8d9a/#5b6b7a/#3f4c58` |
| `sand` | `#e8e1d2/#d9cfba/#bcb098` |
| `charcoal` | `#4a4a46/#2a2a28/#111110` |

### Variant: `collage`

| Key | Value |
|---|---|
| `newsprint` | `#e8e2d4` |
| `kraft` | `#c4a878` |
| `ochrePaper` | `#b08d57` |
| `olivePaper` | `#6b6b3e` |
| `blueGrayPaper` | `#5b6b7a` |
| `charcoalCut` | `#2a2a28` |
| `tape` | `#d9cfba` |
| `chalk` | `#f5f1e8` |


### Typography

- Display: "Archivo Black", "Archivo", "Arial Narrow", "system-ui", "sans-serif"
- Body: "Archivo", "Arial Narrow", "system-ui", "sans-serif"
- Mono: "IBM Plex Mono", "ui-monospace", "monospace"

### Type scale

| Tier | Size | Line-height | Notes |
|---|---|---|---|
| h1 | `40px` | 1.1 | — |
| h2 | `24px` | 1.2 | — |
| body | `16px` | 1.5 | — |
| caption | `12px` | 1.4 | — |

### Spacing / radius / shadow / motion / effects

| Token | Value |
|---|---|
| radius | `0` |
| spacing | `xs=4px` `sm=8px` `md=16px` `lg=24px` `xl=40px` |
| shadow.hard | `6px 6px 0 #8a7f6f` |
| shadow.glow | `none` |
| motion.easing | `cubic-bezier(.4,0,.2,1)` |
| motion.cursor | `default` |
| motion.durations | `0ms` `160ms` `240ms` `480ms` |
| effects.scanlines | `none` |
| effects.vignette | `radial-gradient(ellipse at 30% 15%, transparent 55%, rgba(42,42,40,.06) 100%)` |
| effects.pixelate | `auto` |

## Work-style rules

- Compose in planes, not boxes: every surface is an irregular quadrilateral or a chevron cut from the cream ground, sitting at a 3–12° tilt off the orthogonal so the page reads as a constructed picture rather than a stack of rectangles.
- Show more than one viewpoint: give any hero form, illustration, or subject two overlapping readings (a front profile plus a side edge, a disc plus its rim), because simultaneity is the whole argument of the style.
- Zero radius, zero blur: corners are 0px and hard-edged, depth comes from overlapping opaque planes with a 2px #2a2a28 edge and a 6px 6px 0 #8a7f6f offset, and no shadow, glow, gradient, or translucent wash is ever allowed — Cubist light is even, not directional.
- Spend one earth tone per plane and one role color per component: ochre #b08d57 for primary action, blue-gray #5b6b7a for links, focus, and secondary action, olive #6b6b3e for confirmed/success, #8f3b2f for failure, warm gray #8a7f6f for muted labels and paste shadows.
- Set display type in Archivo Black, uppercase or Title Case, 20px and up, tracking 0 to 0.04em, with headings broken across two lines and offset in x by 8–24px so the typography itself fractures; never let a heading sit in a perfect single-line block.
- Body copy is Archivo 400/500 at 16–18px/1.55 in charcoal; IBM Plex Mono is reserved for catalogue data — accession numbers, dimensions, dates, editions — and is the only place numerals get a fixed-width grid.
- Keep text in charcoal #2a2a28 or cream #efe9dc on the earth fills; ochre, olive, warm gray, and blue-gray carry text only at 18px and up with a 700 weight, otherwise they are fields, edges, and cut shapes.
- Animate as re-cutting, not as movement: 160–240ms cubic-bezier(.4,0,.2,1) transforms that shift one facet's clip-path or offset by 4–8px, one overshoot-free settle, and never a fade, spin, parallax, or floating loop.
- Stay evocation-only: no reproduced painting, sketch, or museum artwork, no signature, no logo — the style is carried by palette, planar composition, collage edges, and multiple-viewpoint drawing made from primitives.

## Component recipes

- **panel:** position: relative; background: #f5f1e8; color: #2a2a28; border: 2px solid #2a2a28; border-radius: 0; padding: 24px; clip-path: polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%); box-shadow: 6px 6px 0 #8a7f6f; — add one offset ::before plane behind it: background #b08d57, clip-path: polygon(0 0, 100% 0, 100% 100%, 24% 100%, 0 62%), transform: translate(-12px, 10px), z-index: -1, opacity 1 (never translucent); a panel that is the catalogue subject gets a second blue-gray #5b6b7a facet pinned to its top-right corner at 18% width; heading inside is Archivo Black 24px/1.05 Title Case with the first word shifted left 8px; below 640px keep the 2px edge and drop the hard offset.
- **card:** A fractured card: position:relative;background:#f5f1e8;border:2px solid #2a2a28;border-radius:0;padding:24px;clip-path:polygon(0 10px,10px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%);box-shadow:6px 6px 0 #8a7f6f; an offset ::before plane in #b08d57 (clip-path polygon(0 0,100% 0,100% 100%,24% 100%,0 62%), translate(-12px,10px)) sits behind; title = Archivo Black 24px Title Case with the first word shifted left 8px; body = Archivo 16px/1.55.
- **button:** font: 700 16px/1 'Archivo Black', 'Archivo', system-ui, sans-serif; text-transform: uppercase; letter-spacing: 0.04em; padding: 14px 24px 14px 20px; background: #b08d57; color: #2a2a28; border: 2px solid #2a2a28; border-radius: 0; clip-path: polygon(0 0, 100% 0, 100% 100%, 14px 100%, 0 calc(100% - 14px)); box-shadow: 6px 6px 0 #2a2a28; transition: transform 160ms cubic-bezier(.4,0,.2,1), background-color 160ms linear; :hover { background: #c19a63; transform: translate(-2px, -2px); box-shadow: 8px 8px 0 #2a2a28; } :active { background: #9a7a49; transform: translate(4px, 4px); box-shadow: 2px 2px 0 #2a2a28; } :focus-visible { outline: 2px solid #5b6b7a; outline-offset: 4px; } — secondary variant: background #efe9dc, color #2a2a28, box-shadow 6px 6px 0 #8a7f6f; disabled: background #d9cfba, color #8a7f6f, border-color #8a7f6f, box-shadow 0 0 0, no clip-path change and no transform.
- **input:** font: 16px/1.5 'IBM Plex Mono', ui-monospace, monospace; color: #2a2a28; background: #efe9dc; border: 2px solid #2a2a28; border-left-width: 10px; border-left-color: #8a7f6f; border-radius: 0; padding: 12px 16px; clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px)); box-shadow: none; :placeholder { color: #8a7f6f; font: 400 14px 'Archivo', system-ui, sans-serif; letter-spacing: 0.02em; } :focus { background: #f5f1e8; border-left-color: #5b6b7a; outline: 2px solid #5b6b7a; outline-offset: 2px; } — invalid: border-color #8f3b2f with a 16px Archivo sentence below in #8f3b2f ('This field needs a value.') plus a 2px #8f3b2f edge, so the error never depends on color alone.
- **select:** A faceted dropdown: trigger = IBM Plex Mono 16px field (background:#efe9dc;border:2px solid #2a2a28;border-left-width:10px;border-left-color:#8a7f6f;clip-path) with a charcoal '▾'; the open list is a faceted panel where the selected row fills #b08d57 with a 10px charcoal triangle marker and hover shifts background to #e8e1d2; no radius.
- **checkbox:** A 24px faceted toggle: background:#d9cfba;border:2px solid #2a2a28;clip-path:polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%); checked = 12px #6b6b3e parallelogram inside; radio = 10px #5b6b7a triangle; label = Archivo 14px Title Case with 'Off'/'On'; focus-visible = 2px #5b6b7a outline at 4px offset.
- **badge:** A faceted chip: display:inline-flex;gap:8px;padding:4px 10px;background:#d9cfba;border:2px solid #2a2a28;border-radius:0;clip-path:polygon(0 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%);font:700 12px 'Archivo';text-transform:uppercase; role color = the leading 8px parallelogram (#6b6b3e/#9a7b2e/#8f3b2f/#5b6b7a) plus the word in charcoal.
- **avatar:** A 40px faceted tile: background:#d9cfba;border:2px solid #2a2a28;border-radius:0;clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%);color:#2a2a28;font:700 16px 'Archivo Black'; initials or a two-viewpoint glyph; image avatars get a charcoal edge and an offset #b08d57 plane.
- **nav:** A vertical facet list: items = Archivo Black 17px #2a2a28, padding 12px 20px, background #f5f1e8, border 2px #2a2a28, clip-path chamfer; active = #b08d57 fill with a 10px charcoal triangle marker on the left edge; hover = #e8e1d2 background and translate(-4px,0); group headers = IBM Plex Mono 12px uppercase #8a7f6f with a 2px underline stopping at 40% width.
- **table:** A fractured grid: header = Archivo Black 14px Title Case #2a2a28 over a 2px #2a2a28 rule; body rows = Archivo 16px #2a2a28 separated by 1px #8a7f6f rules; hover = #e8e1d2 wash, selected row = #b08d57 fill with a 10px charcoal left triangle; numerals in tabular Plex Mono, radius 0.
- **dialog:** A split-plane modal: panel recipe with an offset ::before plane and a second blue-gray facet at the top-right; scrim = color-mix(in srgb, var(--overlay) 40%, transparent); title = Archivo Black Title Case split across two lines, body = Archivo; actions = ochre primary + cream secondary; entrance is a 240ms cubic-bezier(.4,0,.2,1) re-cut.
- **toast:** A bottom-right facet: background:#f5f1e8;border:2px solid #2a2a28;border-radius:0;clip-path chamfer;padding:10px 14px;font:13px/1.4 'IBM Plex Mono'; leading 8px parallelogram in the role color (#6b6b3e/#9a7b2e/#8f3b2f) plus the word (Settled, In progress, Failed); auto-dismisses with a 240ms fade; reduced motion keeps it static.
- **code:** A monospace block: background:#efe9dc;border:2px solid #2a2a28;border-left-width:10px;border-left-color:#8a7f6f;border-radius:0;padding:16px;font:14px/1.5 'IBM Plex Mono';color:#2a2a28; preserve whitespace; comments #8a7f6f, strings #8f3b2f, values #5b6b7a; no syntax gradients.
- **empty:** A centred faceted panel: a two-viewpoint glyph (disc plus its rim) above one Archivo message ('This study is empty.') and a single ochre CTA; the motif is aria-hidden and the state is written in words.
- **statusbar:** height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 0 24px; background: #efe9dc; border-top: 2px solid #2a2a28; border-radius: 0; font: 13px/1.4 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: 0.04em; color: #2a2a28; the left block is a row of mono labels separated by 2px #2a2a28 vertical rules and each preceded by an 8px clip-path parallelogram in the state color — #6b6b3e settled, #b08d57 in progress, #8f3b2f failed, #8a7f6f idle; the right block is a catalogue counter (e.g. 'PL. 014 / 038') plus the single primary action; the in-progress marker shifts its clip-path 3° over 240ms cubic-bezier(.4,0,.2,1) once, no looping pulse.
- **menu:** vertical facet list, no bullets, 4px gap: item { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 20px; font: 700 17px/1.3 'Archivo Black', 'Archivo Narrow', system-ui, sans-serif; letter-spacing: 0.02em; color: #2a2a28; background: #f5f1e8; border: 2px solid #2a2a28; border-radius: 0; clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%); } the selected item fills #b08d57 and gains a 10px charcoal triangle marker in clip-path on its left edge, hover shifts background to #e8e1d2 and translates the row translate(-4px, 0); group headers are IBM Plex Mono 12px uppercase with letter-spacing 0.16em on the cream ground with a 2px #8a7f6f underline that stops at 40% width.
- **toggle:** faceted switch, 76px x 36px: track { background: #d9cfba; border: 2px solid #2a2a28; border-radius: 0; padding: 0; clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%); } knob is a 30px tall parallelogram with a 2px #2a2a28 edge, #5b6b7a when off and #6b6b3e when on, sliding 34px over 240ms cubic-bezier(.4,0,.2,1) with a 3° skew that stays constant so the knob reads as a cut facet; label sits above in Archivo 700 14px Title Case and the state is repeated as text ('Off'/'On') beside the track for screen readers.

## Copywriting

- Voice: Atelier-notebook voice with a gallery wall label's precision: observant, declarative, a little analytical, never precious. Copy describes what is seen and what is being built ('Two viewpoints, one object. We kept the edge that disagreed.') rather than selling a product — the reader is a collaborator in a studio, not a customer in a funnel.
- Case: headers=Title Case, commands=sentence case imperative ('Pin the plane', 'Show the second view'), body=sentence case
- Prefixes: [PLANE] [FACET] [VIEW] [COLLAGE] [STUDY] [ATELIER]
- Verb table: start→COMPOSE; stop→STEP BACK; save→MOUNT; load→UNMOUNT; delete→DISCARD STUDY
- Avoid: corporate filler ('seamless', 'leverage', 'empower', 'solution', 'unlock'), gallery gatekeeping jargon used to exclude ('problematic', 'praxis', 'liminal') and untranslated art-history name-dropping, hype punctuation ('!!', '🔥', 'revolutionary'), deadpan system errors ('Invalid input.', 'An error occurred'), emoji as bullets, icons, or inside headings, all-caps sentences longer than three words, any claim that the work is by, after, or in the style of a named living artist

## Do

- Break the rectangle: give each major surface a tilted or chamfered clip-path so no two adjacent containers share a parallel edge angle.
- Draw every subject from at least two viewpoints — a profile plus its side, a disc plus its rim — and let the planes overlap rather than reconcile.
- Keep the ground warm cream #efe9dc with cards at #f5f1e8, and let only the earth palette (ochre, olive, warm gray, blue-gray, sand, charcoal) sit on it.
- Edge every plane with 2px #2a2a28 and lift it with a single hard 6px 6px 0 #8a7f6f offset; nothing in the system is blurred.
- Fracture the type: split headings across two lines and offset them 8–24px so the text participates in the composition instead of captioning it.
- Hold one strict 12-column grid under the chaos — the planes cut across columns, but the columns never move — so the collision looks constructed, not accidental.

## Don't

- No artworks: no reproduced painting, drawing, print, sketch, signature, or museum image — evocation comes from palette, planar composition, and collage primitives only.
- No gradients, glows, blurs, backdrop-filter, or semi-transparent overlays; Cubist light is flat and even, one opaque fill per plane.
- No rounded corners, no pills, no 1px hairlines — radius is 0 and the minimum edge weight is 2px #2a2a28.
- No floating-card dashboard: if every element is a horizontal rectangle with a soft shadow, the style has collapsed into generic minimalism.
- No decorative second earth tone inside one component; one role color per plane, plus charcoal for the edge and the text.
- No bounce, parallax, spin, shimmer, or infinite loops; motion is a single 160–240ms re-cut and then stillness.
- No faux-old-paper texture over photographs or illustrations, and no sepia filter applied to real imagery — the palette is drawn, not aged.

## Accessibility

- Charcoal #2a2a28 on cream #efe9dc clears 4.5:1 and cream on charcoal is stronger still; ochre #b08d57, olive #6b6b3e, warm gray #8a7f6f, and blue-gray #5b6b7a do not carry small text — use them as fields, edges, and cut shapes, or set text inside them at 18px+ in charcoal (ochre) or cream (blue-gray, olive).
- Archivo Black is display-only: 20px minimum for headings, never a paragraph, and never a form value; body copy stays Archivo 400/500 at 16px+ with 1.5 line-height, and IBM Plex Mono stays at 13px+ for catalogue data.
- Tilted planes must not tilt text: keep every text block axis-aligned and horizontal inside its rotated or clipped facet, and cap container tilt at 12° so line-length and baseline stay predictable.
- Honor prefers-reduced-motion: replace the facet re-cut with an instant state change and remove the clip-path shift entirely — the state must remain readable with zero animation.
- Never signal state with earth color alone — pair each plane, edge, and marker with a word ('Settled', 'In progress', 'Failed') and a visible 2px #5b6b7a focus ring offset 4px on every focusable element.
- Keep scroll order equal to visual order when planes overlap; if a facet is decorative, mark it aria-hidden so screen readers get the text, not the collage.

## Attribution / sources

- Cubism (Picasso, Braque, Gris, 1907–1914) — aesthetic and art-historical reference — https://en.wikipedia.org/wiki/Cubism (evocation only, no artworks reproduced)
- Earth palette (warm gray #8a7f6f, ochre #b08d57, olive #6b6b3e, charcoal #2a2a28, cream #efe9dc, blue-gray #5b6b7a) — derived by eye from muted period painting and collage paper, not sampled from any artwork file — https://lospec.com/palette-list (palette/CC0 — evocation only, no artworks reproduced)
- Archivo Black (Omnibus-Type) — https://github.com/google/fonts/tree/main/ofl/archivoblack (OFL 1.1)
- Archivo (Omnibus-Type) — https://github.com/google/fonts/tree/main/ofl/archivo (OFL 1.1)
- IBM Plex Mono (IBM) — https://github.com/google/fonts/tree/main/ofl/ibmplexmono (OFL 1.1)
