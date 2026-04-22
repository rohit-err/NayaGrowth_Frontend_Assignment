# Sere Innovations — Landing Page

A responsive landing page built for **Sere Innovations**, an agri-tech brand that makes affordable smart incubation systems for small poultry farmers in rural and semi-urban India.

Built as part of the **NayaGrowth Frontend Developer Intern** candidate assessment.

---

## Live Demo

> Add your deployment link here after deploying to Vercel / Netlify.

---

## About the Project

Sere Innovations helps small poultry farmers hatch their own eggs without depending on external hatcheries. The landing page communicates the product, builds trust with the target audience, and encourages inquiry or demo intent.

**Brand slogan:** *Helping farmers hatch their own future*

---

## Sections

| # | Section | Purpose |
|---|---|---|
| 1 | Hero | Brand name, slogan, value proposition, primary CTA |
| 2 | Problem | Hatchery dependency, high costs, loss of control |
| 3 | Solution | What Sere Innovations offers and how it helps |
| 4 | Features | Temperature control, humidity control, auto egg turning, ease of use, affordability |
| 5 | Benefits | Full control, independence, cost efficiency, simpler operations, income potential |
| 6 | Trust | Field-grounded credibility, built from real farmer needs |
| 7 | Who It's For | Smallholder farmers, poultry owners, agri-entrepreneurs, rural youth |
| 8 | CTA | Book a demo / Enquire for pricing |
| 9 | Footer | Brand name, slogan, contact placeholders |

---

## Tech Stack

- **React 19** — component-based UI
- **Vite 8** — build tool and dev server
- **Tailwind CSS v4** — utility-first styling with custom design tokens
- **Framer Motion** — animations and micro-interactions
- **Lenis** — smooth scroll

---

## Design Decisions

- **Palette:** Deep forest green (`#1B4332`) as primary, warm terracotta (`#904C31`) as secondary, warm neutral surfaces — grounded and agri-appropriate
- **Typography:** Public Sans — clean, legible, practical
- **Tone:** Simple, trustworthy, human — no startup jargon, no corporate distance
- **Layout:** Mobile-first, single page, intentional whitespace, clear message hierarchy
- **Animations:** Subtle entrance animations and hover micro-interactions via Framer Motion — purposeful, not decorative

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Fixed nav with mobile hamburger menu
│   ├── Hero.jsx           # Hero section with CTA
│   ├── Problem.jsx        # Problem statement cards
│   ├── Solution.jsx       # Solution overview with images
│   ├── Features.jsx       # Feature cards grid
│   ├── Benefits.jsx       # Benefits list
│   ├── Trust.jsx          # Trust / credibility section
│   ├── TargetAudience.jsx # Who it's for section
│   ├── CTA.jsx            # Final call-to-action
│   └── Footer.jsx         # Footer with contact placeholders
├── App.jsx                # Root component with Lenis smooth scroll
├── index.css              # Tailwind + custom design tokens
└── main.jsx               # React entry point
```

---

## Implementation Note

**Approach:** Read the brief end-to-end before writing a single line. Prioritised content hierarchy and brand alignment over visual complexity. Every section maps directly to a brief requirement.

**Assumptions made:**
- No real contact details available — footer uses placeholder links
- No actual product images available — used contextually relevant stock imagery
- CTA buttons are UI-complete but have no backend; the brief does not require one

**What I'd improve given more time:**
- Add a simple lead capture form with basic validation in the CTA section
- Swap stock images for actual product photography
- Add Hindi language toggle for rural accessibility
- Improve performance with lazy-loaded images

---

*Submitted for NayaGrowth — Frontend Developer Intern Assessment, April 2026*
