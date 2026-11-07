# 🦃 Turkey in Disguise - Free Printable Coloring Pages Landing Page

A fast, single-page, mobile-first landing page designed for Pinterest visitors, parents, and elementary teachers to browse and download **30 free printable "Turkey in Disguise" coloring craft pages**.

---

## 🌟 Key Highlights & Design

- **Goal**: Optimized for high conversions from Pinterest visitors looking for Thanksgiving craft printables.
- **Palette**: Warm autumn colors:
  - Terracotta Orange (`#E76F51`)
  - Mustard Gold (`#E9C46A`)
  - Deep Earth Brown (`#3D2314`)
  - Gentle Cream Background (`#FAF5EB`)
- **Typography**: 
  - Playful rounded headings: **Fredoka** (Google Fonts)
  - Ultra-clean body text: **Plus Jakarta Sans** (Google Fonts)
- **Zero Frameworks**: Pure HTML5, modern CSS3 (custom properties, flexbox, CSS grid), and lightweight vanilla JavaScript.
- **Mobile-First**: Fully responsive and tested starting from 375px mobile width up to 4K desktop screens.
- **SEO & Social**: Rich Open Graph tags, Pinterest rich-pin metadata, and JSON-LD structured data (`WebPage`, `HowTo`, `FAQPage`).

---

## 🔗 Download Link Configuration

All download buttons across the site (the **Download All 30 Pages (Free)** hero button, each gallery card's **Download PDF** button, and the Lightbox modal download button) are configured to link directly to:

```
https://trkoffer.net/fl/3prd1
```

### How to customize or point to local files:
1. In `app.js`, line 10:
   ```javascript
   const DOWNLOAD_URL = 'https://trkoffer.net/fl/3prd1';
   ```
2. In `index.html`, all download anchor tags have `href="https://trkoffer.net/fl/3prd1"`. If you wish to serve local PDF downloads instead, replace the `href` with the respective `downloads/turkey-XX.pdf` or `downloads/turkey-in-disguise-all.zip`.

---

## 📁 Project Directory Structure

```
.
├── index.html                   # Main landing page with all 30 pre-rendered cards & SEO schema
├── styles.css                   # Mobile-first CSS with autumn palette & responsive breakpoints
├── app.js                       # Vanilla JavaScript for lightbox, filters, FAQ, and Pinterest links
├── README.md                    # Project documentation & deployment guide
│
├── images/                      # Coloring page previews & hero mockup
│   ├── hero-preview.png         # Transparent hero mockup collage
│   ├── hero-preview.jpg         # High-resolution hero image
│   ├── turkey-01.jpg            # Pirate Turkey (Original Ideogram Photo)
│   ├── turkey-02.jpg            # Astronaut Turkey (Original Ideogram Photo)
│   ├── turkey-03.jpg            # Chef Turkey (Original Ideogram Photo)
│   ├── turkey-04.jpg            # Veterinarian Turkey (Original Ideogram Photo)
│   ├── turkey-05.jpg            # Cowboy Turkey (Original Ideogram Photo)
│   ├── turkey-06.jpg            # Ninja Turkey (Original Ideogram Photo)
│   ├── turkey-07.jpg            # Mermaid Turkey (Original Ideogram Photo)
│   ├── turkey-08.jpg            # Unicorn Turkey (Original Ideogram Photo)
│   ├── turkey-09.jpg            # Dinosaur Turkey (Original Ideogram Photo)
│   ├── turkey-10.jpg            # Fairy Turkey (Original Ideogram Photo)
│   ├── turkey-11.jpg            # Wizard Turkey (Original Ideogram Photo)
│   ├── turkey-12.jpg            # Knight Turkey (Original Ideogram Photo)
│   ├── turkey-13.jpg            # Scarecrow Turkey (Original Ideogram Photo)
│   ├── turkey-14.jpg            # Pumpkin Turkey (Original Ideogram Photo)
│   ├── turkey-15.jpg            # Sheep Turkey (Original Ideogram Photo)
│   ├── turkey-16.jpg            # Penguin Turkey (Original Ideogram Photo)
│   ├── turkey-17.jpg            # Firefighter Turkey (Original Ideogram Photo)
│   └── turkey-18.jpg ... 30.jpg # Custom coloring templates (Cat, Dog, Cow, Pig, Shark, Robot, etc.)
│
└── downloads/                   # Downloadable printable files
    ├── turkey-01.pdf ... 30.pdf # Individual print-ready PDFs
    └── turkey-in-disguise-all.zip # Complete 30-design printable bundle
```

---

## 🖼️ Where to Put Images and PDFs

### 1. Images (`/images/`)
- Place all card images in the `images/` directory.
- Files must be named `turkey-01.jpg` through `turkey-30.jpg`.
- Recommended resolution: 1200x1200px or 800x800px JPG at 85% quality for crisp retina display and fast loading.
- `hero-preview.png` and `hero-preview.jpg` are used in the hero section and as the Open Graph / Pinterest preview images.

### 2. PDFs (`/downloads/`)
- Place individual printable PDFs in `downloads/turkey-01.pdf` through `downloads/turkey-30.pdf`.
- Place the all-in-one zip file in `downloads/turkey-in-disguise-all.zip`.
- All pages are formatted for standard 8.5" x 11" US Letter paper (also prints cleanly on A4 with "Fit to page").

---

## 🎨 List of All 30 Disguises Included

| # | Disguise Name | Category | Description |
|---|---|---|---|
| **01** | Pirate | Action & Adventure | Captain Tom with pirate tricorn hat, eye patch & map |
| **02** | Astronaut | Action & Adventure | Space suit with helmet floating among planets |
| **03** | Chef | Community Helpers | Master baker chef with toque hat and wooden spoon |
| **04** | Veterinarian | Community Helpers | Doctor turkey with stethoscope caring for pets |
| **05** | Cowboy | Action & Adventure | Wild west sheriff with ten-gallon hat and boots |
| **06** | Ninja | Action & Adventure | Stealth martial arts ninja with headband |
| **07** | Mermaid | Fantasy & Magic | Enchanted mermaid turkey with sparkling scales |
| **08** | Unicorn | Fantasy & Magic | Magical unicorn horn with flowers and star dust |
| **09** | Dinosaur | Animals & Nature | Prehistoric roaring T-Rex with back plates |
| **10** | Fairy | Fantasy & Magic | Woodland fairy with delicate wings and magic wand |
| **11** | Wizard | Fantasy & Magic | Wise spellcaster with starry pointy hat and crystal staff |
| **12** | Knight | Fantasy & Magic | Brave medieval knight with helmet, shield & sword |
| **13** | Scarecrow | Silly & Holiday | Autumn garden scarecrow in overalls and straw hat |
| **14** | Pumpkin | Silly & Holiday | Harvest pumpkin disguise surrounded by autumn leaves |
| **15** | Sheep | Animals & Nature | Fluffy woolly sheep grazing in the clover meadow |
| **16** | Penguin | Animals & Nature | Antarctic penguin with winter knit scarf |
| **17** | Firefighter | Community Helpers | Hero firefighter with helmet and hose |
| **18** | Cat | Animals & Nature | Playful kitty cat with ears, whiskers and yarn |
| **19** | Dog | Animals & Nature | Friendly puppy with floppy ears and bone collar |
| **20** | Cow | Animals & Nature | Spotted dairy cow with horns and ringing cowbell |
| **21** | Pig | Animals & Nature | Cute piggy with snout, curly tail, and mud puddle |
| **22** | Shark | Animals & Nature | Ocean shark with dorsal fin and water ripples |
| **23** | Robot | Silly & Holiday | High-tech mechanical robot with antenna and dials |
| **24** | Farmer | Community Helpers | Autumn harvest farmer in denim overalls |
| **25** | Scientist | Community Helpers | Lab professor with safety goggles and bubbling flask |
| **26** | Bee | Animals & Nature | Busy bumblebee with stripes and honey pot |
| **27** | Snowman | Silly & Holiday | Winter snowman with top hat and coal buttons |
| **28** | Santa | Silly & Holiday | Santa Claus with fluffy beard, red hat, and gift sack |
| **29** | Detective | Action & Adventure | Clever detective with fedora and magnifying glass |
| **30** | Superhero | Action & Adventure | Flying superhero with cape, mask, and star chest shield |

---

## 🚀 Deployment Instructions

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop this whole folder into **Netlify Drop** (`app.netlify.com/drop`).
3. Your site is live immediately with free SSL!

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel` (or connect your GitHub repository in the Vercel dashboard).
2. Run `vercel` in this directory and accept the defaults.

### Deploy to GitHub Pages
1. Push this folder to a GitHub repository.
2. In repository **Settings** -> **Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` or `master` / `/ (root)`
3. Save. GitHub Pages will publish your site in under 60 seconds.

---

## 📌 Pinterest Optimization Tips

- Every image card has a dedicated **"Save"** button pre-configured with Pinterest pin creation URL.
- To maximize Pinterest traffic:
  - Pin the high-resolution images (`images/turkey-01.jpg` to `30.jpg`) directly to group boards under categories like *Thanksgiving Crafts for Kids*, *Kindergarten Printables*, and *Free Coloring Pages*.
  - Link each pin directly to your live landing page or tracking link.

---

## 📄 License
Coloring pages are provided free for personal, family, and educational classroom use. Commercial resale or redistribution of digital files is prohibited.
