# AI Masterclass — Roadmap 2026

> **Last Updated:** February 6, 2026  
> **Project:** React 19 + Vite 7 + TypeScript 5.9 + Tailwind 3 + Framer Motion 12

---

## ✅ Completed (Archive)

Everything below has been fully implemented and shipped:

- 7 themes (dark, light, rave, neon, hacker, toxic, candy) with unique canvas backgrounds
- 13 AI models + 12 providers with full essays and sub-pages
- Compare Models side-by-side feature (`/compare`)
- Interactive Playground with simulated responses (`/playground`)
- "How to Use AI" guide with OMEGA-SENTINEL preset + Claude Code setup
- Personal Picks (ranked recommendations) + Model Recommender (task-based)
- Dual sliders: Intensity (canvas effects) + Motion Level (UI animations)
- Per-theme animated slider tracks (rave rainbow, neon pulse, hacker scanline, etc.)
- Code-splitting with React.lazy + Suspense on all routes
- PWA with service worker, offline caching, and manifest
- SEO meta tags via react-helmet-async on every route
- Performance-optimized canvas (adaptive FPS, no shadowBlur, typed arrays, pool caps)
- Accessibility: prefers-reduced-motion, ARIA labels, keyboard nav
- ThemeContext optimization (useMemo, useCallback, reduced-motion auto-detect)
- Inter + JetBrains Mono local fonts via @fontsource
- Sitemap.xml with all routes

---

## ✅ Phase 1: Bug Fixes & Code Cleanup — COMPLETE

All items implemented:

- [x] **Deleted `dataService.ts`** — dead code, zero imports across codebase
- [x] **Added 404 page** — styled `NotFound.tsx` with theme-aware design, popular links, `Route path="*"` catch-all
- [x] **Fixed Hero scroll** — added `html { scroll-behavior: smooth }` with `prefers-reduced-motion` fallback
- [x] **Hero CTA gap** — added secondary buttons for Compare, Playground, and AI Guide
- [x] **Navbar mobile sliders** — added IntensitySlider + MotionSlider to mobile dropdown with labels
- [x] **ModelPage/ProviderPage navigation** — already had breadcrumbs + back buttons (audited ✅)
- [x] **Removed `clsx` + `tailwind-merge`** — unused packages uninstalled from package.json
- [x] **Audited `providerSlug`** — all 18 models verified with correct slugs
- [x] **Cleaned up dead code** — removed commented-out lucide imports in models.ts
- [x] **Fixed duplicate `y: 0`** — TypeScript error in useThemeAnimations.ts

---

## ✅ Phase 2: Theme Improvements — COMPLETE

All items implemented:

### New Themes (5)
- [x] **Cyberpunk** — chrome orange/cyan, perspective grid floor, floating particles, scanline overlay, glitch text effects
- [x] **Ocean** — deep blue, 3-layer wave animation, floating bubbles with highlights, calm gentle movement
- [x] **Sunset** — warm orange/purple, sun glow at horizon, floating embers, warm gradient backdrop
- [x] **Retro/Synthwave** — 80s aesthetic, synthwave sun with horizontal lines, perspective grid, twinkling stars
- [x] **Minimalist** — near-zero effects, subtle dots with connecting lines, clean typography focus

### Theme System Enhancements
- [x] **Theme persistence** — theme, intensity, motionLevel all saved to localStorage and restored on load
- [x] **Theme preview tooltips** — 3-color swatches shown next to each theme name in ThemeSwitcher dropdown
- [x] **Per-theme scrollbar colors** — rave rainbow, neon purple-teal, hacker green, ocean blue-cyan, etc.
- [x] **Per-theme text selection colors** — every theme has matching selection highlight colors
- [x] **Per-theme card hover effects** — unique hover glow/transform for all 12 themes
- [x] **Per-theme section accent lines** — cyberpunk glitch, ocean wave, sunset gradient, retro pulse, minimalist hairline
- [x] **Per-theme slider track animations** — both IntensitySlider and MotionSlider have unique effects for all 12 themes

### Canvas Background Improvements
- [x] **Interactive mouse-follow** — Dark theme: particles gravitate toward cursor + soft glow aura; Neon theme: dual-color glow aura follows mouse
- [x] **Parallax depth** — Ocean has 3-layer wave depth; Retro has sky/grid separation; Sunset has horizon layers

### Hero & Animation Improvements
- [x] **Per-theme icon animations** — unique Hero icon effects for all 12 themes (cyberpunk glitch, ocean wave bob, sunset warm pulse, retro synthwave pulse, minimalist gentle float)
- [x] **Per-theme title text effects** — cyberpunk glitch text, retro neon text, sunset warm glow text
- [x] **Per-theme Framer Motion variants** — all 12 themes have unique containerVariants, panelVariants, and getItemVariants in useThemeAnimations

---

## 🖥️ Phase 3: UI Improvements

### Navigation & Layout
- [ ] **Sticky section navigation** — on long pages (HowToUseAI, ModelPage), add a floating table-of-contents sidebar
- [ ] **Breadcrumbs** — show `Home > Models > Claude Opus 4.6` on all detail pages
- [ ] **Footer redesign** — add sitemap links, theme selector, social links, "Built with" credits, last-updated date
- [ ] **Search bar** — global search in Navbar that searches across models, providers, and guide sections (client-side fuzzy search)
- [ ] **Keyboard shortcuts** — `Ctrl+K` for search, `T` to cycle themes, `←/→` to navigate between models

### Cards & Grids
- [ ] **Sort models** — add sort dropdown (by name, release date, provider, category) to ModelsGrid
- [ ] **Favorites/bookmarks** — let users star models and see them in a "My Picks" section (localStorage)
- [ ] **Card size toggle** — compact list view vs. current grid cards on ModelsGrid and ProvidersGrid
- [ ] **Infinite scroll or pagination** — for when model count grows beyond 20+
- [ ] **Model comparison badges** — show "⚡ Fastest", "🧠 Smartest", "💰 Cheapest" badges on cards

### Animations & Polish
- [ ] **Page transition animations** — use Framer Motion `AnimatePresence` on route changes (fade/slide between pages)
- [ ] **Scroll progress bar** — thin accent-colored bar at top of viewport showing read progress
- [ ] **Hover micro-interactions** — add subtle icon animations on nav links (rotate, bounce, pulse)
- [ ] **Loading skeleton screens** — replace spinner with themed skeleton placeholders during lazy load
- [ ] **Toast notifications** — themed toast when user copies code, bookmarks a model, or changes theme
- [ ] **Confetti burst** — candy theme: trigger confetti animation on certain user actions

---

## ✨ Phase 4: New Features

### Content Features
- [ ] **AI News Feed** — curated timeline of latest AI developments (static data with dates, expandable cards)
- [ ] **Model changelog** — version history for each model (e.g., "Opus 4.5 → 4.6: +1M context, agent teams")
- [ ] **Benchmark dashboard** — visual chart page comparing models on SWE-bench, MMLU, HumanEval, Terminal-Bench
- [ ] **Pricing calculator** — interactive tool: "I need X tokens/day for Y task" → shows cost comparison across providers
- [ ] **AI Glossary** — searchable glossary of AI terms (MoE, RLHF, CoT, RAG, MCP, etc.) with hover definitions
- [ ] **Community picks** — voting system where visitors can upvote their favorite models (localStorage-based)

### Interactive Features
- [ ] **Quiz mode** — "Which AI model should I use?" interactive questionnaire with branching logic → recommendation
- [ ] **Playground enhancements** — multiple conversation tabs, prompt library, export conversations
- [ ] **Model DNA comparison** — radar/spider chart visualizing model capabilities (reasoning, speed, multimodal, cost, context)
- [ ] **Code sandbox** — embeddable code editor (Monaco) where users can test prompts against different model APIs
- [ ] **Dark/light mode per-component** — let users mix themes (e.g., dark navbar + light content area)

### Technical Features
- [ ] **i18n** — internationalization support (English, Spanish, French, Japanese, Chinese at minimum)
- [ ] **RSS feed** — auto-generated RSS for model updates
- [ ] **API endpoint** — expose model data via a simple JSON API (`/api/models`, `/api/providers`) for external consumption
- [ ] **Analytics dashboard** — track which models and pages get the most views (privacy-friendly, no cookies)
- [ ] **Content CMS** — move model/provider essays from hardcoded TypeScript to a markdown/MDX content layer for easier editing
- [ ] **Error boundaries** — wrap lazy routes in `<ErrorBoundary>` with themed error pages
- [ ] **E2E tests** — add Playwright tests for critical user flows (theme switching, navigation, compare feature)
- [ ] **Bundle analysis** — integrate `rollup-plugin-visualizer` to monitor chunk sizes

---

## 🚀 Phase 5: Growth & Polish

### Performance
- [ ] **Image optimization** — replace SVG PWA icons with real optimized PNGs; add WebP model provider logos
- [ ] **Font subsetting** — subset Inter and JetBrains Mono to Latin-only to cut ~400KB of woff files
- [ ] **Preload critical chunks** — add `<link rel="modulepreload">` for the most-visited route chunks
- [ ] **Virtual scrolling** — implement `react-window` or `@tanstack/virtual` for model lists >50 items

### Deployment
- [ ] **CI/CD pipeline** — GitHub Actions: lint → type-check → build → deploy on push to main
- [ ] **Staging environment** — preview deployments for PRs (Vercel/Netlify)
- [ ] **Lighthouse CI** — automated Lighthouse audits on every PR (target: 95+ on all categories)
- [ ] **Custom domain + SSL** — deploy to `ai-masterclass.dev` with Cloudflare CDN

### Community
- [ ] **Open-source the project** — clean up README, add contributing guide, MIT license
- [ ] **Blog section** — `/blog` with markdown-powered posts about AI developments
- [ ] **Newsletter signup** — email capture for weekly AI model updates
- [ ] **Discord/community link** — add social proof and community engagement

---

## 📊 Current Architecture

```
src/
├── App.tsx              # Router + lazy routes + SEO + Suspense
├── main.tsx             # React 19 entry point
├── index.css            # Tailwind + 7 theme CSS variables + per-theme effects
├── components/
│   ├── backgrounds/
│   │   └── ThemeBackground.tsx  # 7 optimized canvas backgrounds
│   ├── Hero.tsx                 # Landing section with theme-aware animations
│   ├── AiGuide.tsx              # 6-card guide overview (homepage section)
│   ├── ModelRecommender.tsx     # Task-based recommendation tabs
│   ├── PersonalPicks.tsx        # Ranked personal recommendations
│   ├── ModelsGrid.tsx           # Filterable model directory with layout animations
│   ├── ModelPage.tsx            # Individual model essay page
│   ├── ProvidersGrid.tsx        # Provider directory
│   ├── ProviderPage.tsx         # Individual provider essay page
│   ├── CompareModels.tsx        # Side-by-side model comparison
│   ├── Playground.tsx           # Simulated AI chat playground
│   ├── HowToUseAI.tsx           # 7-section AI guide + OMEGA-SENTINEL preset
│   ├── Navbar.tsx               # Fixed nav with links + sliders + theme picker
│   ├── IntensitySlider.tsx      # Canvas intensity (per-theme animated track)
│   ├── MotionSlider.tsx         # Motion level (per-theme animated track)
│   ├── ThemeSwitcher.tsx        # Theme dropdown picker
│   ├── ScrollToTop.tsx          # Route-change scroll reset
│   └── SEO.tsx                  # Helmet wrapper for meta tags
├── context/
│   └── ThemeContext.tsx          # Theme + intensity + motionLevel (memoized)
├── hooks/
│   └── useThemeAnimations.ts    # Per-theme Framer Motion variants (3 variant sets)
├── data/
│   └── models.ts                # 13 models + 12 providers (static data)
└── services/
    └── dataService.ts           # Data abstraction layer (currently unused)
```

**Stack:** React 19.2 · Vite 7.3 · TypeScript 5.9 · Tailwind 3.4 · Framer Motion 12.33 · react-router-dom 7 · react-helmet-async · vite-plugin-pwa · lucide-react

**Routes:** `/` · `/models` · `/models/:id` · `/providers` · `/providers/:id` · `/compare` · `/playground` · `/ai-guide`

**Themes:** dark · light · rave · neon · hacker · toxic · candy
