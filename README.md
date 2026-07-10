# Deekshitha — Portfolio

A single-page animated portfolio. Black + burgundy theme, animated starfield, scroll-spy nav, typewriter hero text, and reveal-on-scroll sections.

## File layout

```
portfolio-project/
├── index.html          → page structure (nav, hero, about, projects, contact)
├── css/
│   └── style.css        → all styling (theme colors, layout, animations)
├── js/
│   └── script.js        → starfield canvas, scroll progress, nav scroll-spy,
│                          typewriter effect, toolkit/language rendering,
│                          scroll reveal animations
└── assets/
    └── character.png    → hero character image
```

## How to run it

No build step, no dependencies. Just open `index.html` in a browser, or serve the folder locally:

```bash
cd portfolio-project
python3 -m http.server 8000
# then visit http://localhost:8000
```

You can also drag the folder into any static host (Netlify, Vercel, GitHub Pages) — it's plain HTML/CSS/JS.

## Where things live if you want to change them

| Want to change...              | Go to                                      |
|---------------------------------|---------------------------------------------|
| Colors (burgundy/crimson/black) | `css/style.css` → `:root` variables at top |
| Hero character image            | `assets/character.png` (swap the file, same name) |
| Hero float/glow animation       | `css/style.css` → `.char-img`, `.char-glow`, `@keyframes floatChar` |
| Name, tagline, roles typed out  | `index.html` hero section + `js/script.js` → `roles` array |
| Toolkit / skills list           | `js/script.js` → `tools` array |
| Language bars                   | `js/script.js` → `langs` array |
| Projects                        | `index.html` → `.proj-card` blocks in `#projects` |
| Contact email / socials         | `index.html` → `#contact` section |
| Star density / warm tint color  | `js/script.js` → `initStars()` and the `rgba(245, 230, 198, ...)` fill color |

## Theme tokens (css/style.css `:root`)

```css
--bg:#0a0a0a;            /* page background */
--card:#140809;          /* card backgrounds */
--burgundy:#800020;      /* primary accent */
--burgundy-bright:#a3002b;
--crimson:#c41e3a;       /* secondary accent / highlights */
--gold:#f2e3c6;          /* warm star tint */
```

## Notes on the hero image

`assets/character.png` is already cropped to sit on a near-black background,
so it blends into the page automatically. In `style.css`, `.char-img` uses a
CSS `mask-image` (soft radial fade) to dissolve the image's edges into the
page background rather than showing a hard rectangle — if you swap in a new
photo with a different background color, you may need to adjust or remove
that mask.
