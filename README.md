# Portfolio

A personal developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Migrated from a static HTML/CSS/JS site into a fully componentized, animated, and SEO-optimized application.

---

## Features

- **Layered hero section** with a mouse-reactive 3D wireframe shape (React Three Fiber), a giant faded name in the background, and entrance animations on load
- **Glowing dark theme** built on CSS custom properties, a single accent color drives the background glow, card hover states, buttons, scrollbar, and the 3D shape's color
- **Ambient background layer** with a subtle grid pattern and slowly drifting floating shapes, visible behind every section
- **Scroll reveal animations** on every section via Motion (`whileInView`), respecting `prefers-reduced-motion`
- **Animated preloader** with a live progress counter on first load
- **Infinite tech stack marquee** generated from the skills data file
- **Filterable projects grid** (All / MERN / DevOps / Frontend / Python) with category-aware routing
- **Dynamic case study pages** (`/case-study/[slug]`) with live-rendered Mermaid diagrams (architecture, ERD, sequence, deployment), tabbed diagram viewer, feature grids, stats, and a challenges-and-solutions table
- **Live LeetCode stats** (total solved, difficulty breakdown, badges) fetched server-side via LeetCode's GraphQL API, with a graceful fallback if the request fails
- **Contact form** wired to EmailJS with a notification email to the site owner and an automated confirmation email back to the sender
- **Full SEO setup**: dynamic metadata per page, Open Graph and Twitter card images, JSON-LD structured data (`Person` schema), auto-generated `sitemap.xml` and `robots.txt`
- **Accessible by default**: decorative icons marked `aria-hidden`, meaningful alt text on content images, keyboard-reachable nav
- **Fully responsive**, including a dedicated mobile nav with a hash-free smooth-scroll router

---

## Tech stack

| Category | Technologies |
|---|---|
| Framework | Next.js (App Router), TypeScript |
| Styling | Tailwind CSS v4, custom CSS design tokens |
| Animation | Motion (`motion/react`), React Three Fiber, Drei |
| Diagrams | Mermaid |
| Forms & email | EmailJS |
| Icons | React Icons |
| Hosting | Vercel |

---

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/devByWaleed/portfolio.git
cd portfolio
npm install
```

### 2. Environment variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These power the contact form. See the [EmailJS dashboard](https://www.emailjs.com/) to generate a service, two templates, and a public key.

### 3. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx              # Root layout, metadata, preloader, structured data
│  ├─ page.tsx                 # Homepage, assembles every section
│  ├─ globals.css              # Design tokens, theme, shared utility classes
│  ├─ sitemap.ts                # Auto-generated sitemap.xml
│  ├─ robots.ts                 # Auto-generated robots.txt
│  └─ case-study/[slug]/
│     └─ page.tsx               # Dynamic case study route
│
├─ components/
│  ├─ layout/                   # Header, MobileNav, Footer, Preloader,
│  │                             ScrollLink, StructuredData, AmbientBackground
│  ├─ sections/                 # Hero, About, Skills, Journey, Projects,
│  │                             Achievements, Contact, TechMarquee
│  ├─ projects/                 # ProjectCard, ProjectFilter
│  ├─ contact/                  # ContactForm, ContactInfo
│  ├─ achievements/              # CertificateCard, CodingStats
│  ├─ case-study/                # Highlight, FeatureGrid, StatsRow,
│  │                             DiagramGallery, MermaidDiagram,
│  │                             ChallengesTable, BestPractices
│  ├─ three/                     # Scene, HeroScene (3D wireframe shape)
│  └─ ui/                        # Section (shared scroll-reveal wrapper)
│
├─ data/
│  ├─ site.ts                    # Name, role, contact info, social links
│  ├─ skills.ts                  # Grouped tech stack for the Skills section
│  ├─ journey.ts                  # Timeline entries
│  ├─ projects.ts                 # Project cards
│  ├─ achievements.ts              # Certificates and coding stats config
│  └─ case-studies/                # One file per project's case study data
│
├─ lib/
│  └─ leetcode.ts                  # Server-side LeetCode GraphQL fetcher
│
└─ types/
   └─ index.ts                      # Shared TypeScript interfaces
```

---

## Customizing the theme

Every glowing element on the site, background glow, card hover shadows, buttons, the scrollbar, and the 3D shape's wireframe color, derives from a single CSS custom property.

`src/app/globals.css`:

```css
@theme inline {
  --color-accent: hsl(158 84% 48%);
  --color-glow: hsl(158 84% 48%);
}
```

Changing these two lines updates the entire site's color scheme.

---

## Deployment

This project is built for [Vercel](https://vercel.com):

1. Push the repository to GitHub
2. Import it into Vercel
3. Add the four `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel project settings
4. Deploy

---

## Contact

- **Email:** your-email@example.com
- **GitHub:** [github.com/devByWaleed](https://github.com/devByWaleed)
- **LinkedIn:** [linkedin.com/in/waleed-webdev](https://linkedin.com/in/waleed-webdev)
- **LeetCode:** [leetcode.com/u/solveWithWaleed](https://leetcode.com/u/solveWithWaleed)

---

## License

This project is for personal portfolio use. Feel free to reference the structure, but please don't copy the content or case studies directly.