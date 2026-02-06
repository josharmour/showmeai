# ShowMeAI - AI Masterclass

<div align="center">

**Welcome to AI Masterclass** — a comprehensive, interactive guide to mastering AI in 2026

[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.33-ff69b4)](https://www.framer.com/motion/)

[Live Demo](https://your-demo-url.com) · [Report](#) · [Features](#-key-features)

</div>

---

## 🌟 Overview

**AI Masterclass** is a sophisticated, production-ready React application that serves as the definitive guide to AI models and tools in 2026. It combines comprehensive, expertly-written content with an immersive theming system featuring **12 unique themes**, each with custom animations, backgrounds, and personalities.

This isn't just another AI directory — it's a complete educational platform with detailed model essays, provider profiles, task-based recommendations, an advanced prompt engineering guide, and a library of 50+ professional prompt templates.

---

## ✨ What Makes It Special

### 🎨 Unmatched Theming System
- **12 complete themes** — not just color swaps, but entirely unique visual identities
- Each theme has: custom canvas animation, unique card hover effects, per-section accent lines, animated slider tracks, custom scrollbars, and unique Framer Motion variants
- Themes include: Dark, Light, Rave, Neon, Hacker, Toxic, Candy, Cyberpunk, Ocean, Sunset, Retro/Synthwave, and Minimalist

### ⚡ Dual Control System
- **Intensity Slider** — Control background animation speed and density (particles, rain speed, wave intensity)
- **Motion Slider** — Scale all UI animations from disabled (accessibility) to dramatic effects
- Both sliders feature **per-theme animated tracks** that respond in real-time
- Auto-detects `prefers-reduced-motion` for accessibility

### 🚀 Performance-First Canvas
- Industry-leading optimizations achieving **5-10x performance gains**
- Double-draw glow technique instead of expensive shadowBlur
- Typed arrays (Float32Array) for particle data
- Adaptive frame rate (15fps → native refresh rate based on intensity)
- Particle pool caps prevent garbage collection pressure

### 📚 Comprehensive AI Content
- **18 detailed model essays** covering GPT-5.3, Claude Opus 4.6, Gemini 3 Pro, DeepSeek V3, and more
- **12 provider profiles** with deep dives into OpenAI, Anthropic, Google, xAI, etc.
- **Task-based recommendations** for 8 verticals (Autonomous Labor, Deep Reasoning, Multimodal, Coding, Creative, Voice, Sovereign, Compliance)
- **7-section how-to guide** covering Claude Code, Cursor, Gemini CLI, infrastructure, and strategic outlook

### 🔧 Advanced Prompt Engineering
- **OMEGA-SENTINEL V4** system prompt with 32 intelligence modules across P0-P3 tiers
- Reflexion-based Tree-of-Thoughts (R-ToT++) and Chain-of-Verification (CoVe++) methodologies
- **Prompt Library** with 50+ professional templates across 9 categories with real-time search

### ♿ Accessibility-First Design
- Automatic reduced-motion detection and adaptation
- ARIA labels throughout
- Full keyboard navigation
- Semantic HTML structure
- Screen reader friendly

---

## 🎯 Key Features

### 1. Immersive Theme System

| Theme | Visual Style | Background | Special Effects |
|-------|--------------|------------|-----------------|
| 🌙 **Dark** | Professional blue accents | Floating particles with mouse gravitation | Soft glow aura follows cursor |
| ☀️ **Light** | Clean, minimal | Vibrant gradient blobs | Gentle color shifts |
| 🎉 **Rave** | Vibrant rainbow | Bouncy particles | Comic Sans font, scale/rotate icons, multi-layer text shadows |
| 🌃 **Neon** | Cyberpunk glow | Glowing lines | Dual-color glow effects, pulsing animations |
| 💻 **Hacker** | Matrix green | Digital rain | Monospace font, glitch shake animations, scanlines |
| ☢️ **Toxic** | Radioactive green/purple | Dripping bubbles | Toxic gradient effects |
| 🍬 **Candy** | Pink/purple sweet | Soft glowing orbs | Glowing dots on gradient |
| 🤖 **Cyberpunk** | Chrome orange/cyan | Perspective grid floor | Scanlines, dystopian aesthetic |
| 🌊 **Ocean** | Deep blue | 3-layer wave animation | Floating bubbles |
| 🌅 **Sunset** | Warm orange/purple | Sun glow at horizon | Floating embers |
| 📼 **Retro** | 80s synthwave | Synthwave sun + perspective grid | Twinkling stars, neon pulse |
| 🎯 **Minimalist** | Near-zero effects | Subtle dots with connecting lines | Clean, distraction-free |

**Each theme features:**
- Unique color palette via CSS variables
- Custom canvas background simulation
- Per-theme card hover animations
- Animated section accent lines
- Custom scrollbar colors
- Custom text selection colors
- Per-theme slider track animations
- Unique icon animations
- Special title text effects
- Custom Framer Motion variants

### 2. Interactive Sliders

**Intensity Slider** (`IntensitySlider.tsx`)
- Controls canvas background animation intensity (0-100)
- Visual feedback: Snowflake icon → Flame icon
- Per-theme animated canvas tracks:
  - Rave: Rainbow gradient with sparkle dots
  - Neon: Pulsing dual-color glow
  - Hacker: Scanline effect
  - Ocean: Wave animation
  - And 8 more unique effects

**Motion Slider** (`MotionSlider.tsx`)
- Controls UI animation speed (0-100)
- Scales all Framer Motion animations
- At 0: Animations disabled (accessibility mode)
- At 100: Full dramatic entrance effects
- Also features per-theme track animations

### 3. Homepage Sections

**Hero** ([`Hero.tsx`](src/components/Hero.tsx))
- Per-theme animated icons (e.g., Rave: scale/rotate/rainbow glow, Hacker: glitch shake)
- Per-theme title text effects (e.g., Retro: neon pulse, Rave: multi-layer text shadow)
- Primary CTAs: "Read the Report" + "Explore Models"
- Secondary CTAs: "Compare Models", "Playground", "AI Guide"
- Smooth scroll-to-section on click

**AI Guide** ([`AiGuide.tsx`](src/components/AiGuide.tsx))
- 6-card grid showcasing "Core Principles of 2026"
- Topics: Agentic Shift, Adaptive Reasoning, Use-Case Selection, Sovereignty, Developer's Arsenal, Memory Bandwidth
- Smooth scroll-reveal animations using `RevealCard` wrapper
- Links to Omega Prompt and Prompt Library

**Model Recommender** ([`ModelRecommender.tsx`](src/components/ModelRecommender.tsx))
- Task-based recommendation system with 8 verticals
- Interactive tab selection with animated panel transitions
- Verticals: Autonomous Labor, Deep Reasoning, Multimodal/Vision, Coding/Memory, Creative/Video, Voice/Audio, Sovereign/Local, Compliance/Edge
- Shows: Best Model, Alternatives, Description, "Read full essay" link

**Personal Picks** ([`PersonalPicks.tsx`](src/components/PersonalPicks.tsx))
- Ranked "Editor's Choice" recommendations (5 picks)
- Medal rankings (🥇🥈🥉🛡️⚡)
- Detailed reasoning for each pick
- Fully clickable cards linking to model detail pages

### 4. Model Directory

**Models Grid** ([`ModelsGrid.tsx`](src/components/ModelsGrid.tsx))
- Filterable grid with **12 category tabs**
- Categories: All Models, Autonomous, Reasoning, Multimodal, Coding, Creative, Enterprise, Research, Open Source, Science, Speed
- Smart category aliases (e.g., "creative" matches creative, image, video, music, audio, art, voice)
- Live count of models per category
- Layout animations with Framer Motion `AnimatePresence`

**Data Structure** ([`models.ts`](src/data/models.ts))
- **18 AI models** with detailed essays:
  - **Tier 1:** GPT-5.3 Codex, Claude Opus 4.6, Gemini 3 Pro/Flash/Thinking
  - **Tier 2:** Magic LTM-10M, Grok 4.1, DeepSeek V3/R1, Command R7
  - **Tier 3:** Llama 4 Scout, Mistral Large 3, Qwen3 Max
  - **Tier 4:** Sora 2.0, Midjourney v7, ElevenLabs V4, Suno V5
  - **Tier 5:** AlphaFold 4, GitHub Copilot, Perplexity Pro
- Each model includes: icon, name, provider, categories, tagline, description, essay, strengths[], weaknesses[], pricing, releaseYear

- **12 AI providers** with essays: OpenAI, Anthropic, Google DeepMind, xAI, Magic, Mistral AI, Meta, DeepSeek, Cohere, Midjourney, ElevenLabs, DeepMind

**Model Detail Page** ([`ModelPage.tsx`](src/components/ModelPage.tsx))
- Full model essay with rich formatting
- Strengths and weaknesses checklists
- Pricing information
- Release year
- Provider link
- Breadcrumb navigation

### 5. Comparison Feature

**Compare Models** ([`CompareModels.tsx`](src/components/CompareModels.tsx))
- Side-by-side model comparison with dual dropdowns
- Auto-generated verdict based on strengths comparison
- Comparison table: Category, Release Year, Pricing
- Strengths/weaknesses lists with check/X icons
- Animated benchmark score bars
- Breadcrumb navigation with back button

### 6. Provider Directory

**Providers Grid** ([`ProvidersGrid.tsx`](src/components/ProvidersGrid.tsx))
- Grid of all 12 AI providers
- Shows icon, name, description, model count
- Link to detailed provider page

**Provider Detail Page** ([`ProviderPage.tsx`](src/components/ProviderPage.tsx))
- Full provider essay
- List of all models
- Website link
- Breadcrumb navigation

### 7. AI Guide Section

**How To Use AI** ([`HowToUseAI.tsx`](src/components/HowToUseAI.tsx))
- Comprehensive 7-section guide on building with AI in 2026
- **Collapsible code blocks** with copy buttons
- Topics:
  1. **Claude Code** — CLI agent for software engineering
  2. **Cursor** — AI-native IDE
  3. **Gemini CLI** — Cloud ecosystem tool
  4. **Infrastructure & Hardware** — Memory bandwidth crisis
  5. **Strategic Outlook** — December 2026 predictions
  6. **Setting Up Claude Code Properly** — Configuration guide
  7. **OMEGA-SENTINEL V4 Preset** — Advanced system prompt

### 8. Omega Prompt Setup

**Omega Prompt** ([`OmegaPrompt.tsx`](src/components/OmegaPrompt.tsx))
- Dedicated page for the "OMEGA-SENTINEL V4" system prompt
- Explains the cognitive architecture (R-ToT++)
- Details the **32 intelligence modules** across P0-P3 tiers:
  - **P0 (Critical):** CoVe++, R-ToT++, Graph of Thoughts, Beam Search ToT, Chain of Verification
  - **P1 (Core):** Dynamic Reasoning, Recursive ToT, Security Analysis, Performance Optimization
  - **P2 (Enhanced):** TDD Protocol, Architecture Design, API Design, Testing, Data Processing
  - **P3 (Support):** Explanation modes (analogy, step-by-step, examples)
- Copy-ready system prompt for global CLAUDE.md
- Rich formatting with collapsible code blocks
- Sections: Philosophy, Search-First Policy, Intelligence Tiers, Setup, Best Practices

### 9. Prompt Library

**Prompt Library** ([`PromptLibrary.tsx`](src/components/PromptLibrary.tsx))
- **50+ curated prompt templates** across 9 categories
- Categories: Coding, Writing, Research, Business, Learning, Ideas, Automation, Communication, Analysis
- Real-time search across titles, descriptions, tags, and templates
- Category filtering with visual tabs and counts
- One-click copy-to-clipboard with visual feedback
- Highlighted bracket variables like `[topic]`
- Scroll-to-top button

### 10. Playground

**AI Playground** ([`Playground.tsx`](src/components/Playground.tsx))
- Simulated AI chat interface
- Theme-aware styling
- Demonstrates conversational AI concepts

---

## 🎬 Animation System

### Theme-Aware Animations

**useThemeAnimations** ([`useThemeAnimations.ts`](src/hooks/useThemeAnimations.ts))
- Per-theme Framer Motion variant sets
- Three variant types:
  - `containerVariants` — Scroll-reveal for section headings
  - `panelVariants` — Instant page/tab transitions
  - `getItemVariants` — Staggered grid cards
- Scales all properties by `motionLevel` (0-100)
- At low motion: Simple, fast animations
- At high motion: Dramatic effects with longer durations
- 12 theme profiles with unique easing curves and durations

**RevealCard** ([`RevealCard.tsx`](src/components/RevealCard.tsx))
- Wrapper component for reliable scroll-reveal
- Uses native IntersectionObserver (via `useOnScreen` hook)
- More reliable than Framer Motion's `whileInView`
- Prevents animation reversals during fast scrolling
- One-time trigger (doesn't reverse on scroll up)

---

## 🧭 Navigation & Routing

**Navbar** ([`Navbar.tsx`](src/components/Navbar.tsx))
- Fixed top nav with backdrop blur
- Desktop: Horizontal links with active state highlighting
- Mobile: Hamburger menu with animated dropdown
- Integrates both sliders with labels on mobile
- Theme switcher dropdown with all 12 themes
- Links: Home, AI Models, Providers, Compare, Playground, Prompt Library, AI Guide

**Routing** ([`App.tsx`](src/App.tsx))
- Code-split routes with React.lazy + Suspense
- Loading spinner with theme-aware styling
- SEO meta tags on every route via react-helmet-async
- Scroll-to-top on route change

**All Routes:**
- `/` — Homepage with all sections
- `/models` — Model directory
- `/models/:id` — Individual model detail page
- `/providers` — Provider directory
- `/providers/:id` — Individual provider detail page
- `/compare` — Side-by-side comparison
- `/playground` — Simulated AI chat
- `/ai-guide` — Full how-to guide
- `/omega-prompt` — Omega prompt setup
- `/prompt-library` — 50+ prompt templates

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 19.2 |
| **TypeScript** | Type Safety | 5.9 |
| **Vite** | Build Tool | 7.3 |
| **Tailwind CSS** | Styling | 3.4 |
| **Framer Motion** | Animations | 12.33 |
| **React Router** | Routing | 7.x |
| **react-helmet-async** | SEO | 2.x |
| **Lucide React** | Icons | Latest |

---

## 📂 Project Structure

```
src/
├── App.tsx                          # Router + lazy loading + SEO
├── main.tsx                         # React 19 entry point
├── index.css                        # Tailwind + 12 theme CSS variables
│
├── components/
│   ├── backgrounds/
│   │   └── ThemeBackground.tsx      # 12 optimized canvas animations
│   ├── Hero.tsx                     # Landing with per-theme animations
│   ├── AiGuide.tsx                  # 6-card principles grid
│   ├── ModelRecommender.tsx         # Task-based recommendations
│   ├── PersonalPicks.tsx            # Ranked editor's choices
│   ├── ModelsGrid.tsx               # Filterable model directory
│   ├── ModelPage.tsx                # Individual model essay
│   ├── ProvidersGrid.tsx            # Provider directory
│   ├── ProviderPage.tsx             # Provider essay
│   ├── CompareModels.tsx            # Side-by-side comparison
│   ├── Playground.tsx               # Simulated AI chat
│   ├── HowToUseAI.tsx               # 7-section comprehensive guide
│   ├── OmegaPrompt.tsx              # Omega prompt setup guide
│   ├── PromptLibrary.tsx            # 50+ prompt templates
│   ├── Navbar.tsx                   # Nav with sliders + theme picker
│   ├── IntensitySlider.tsx          # Canvas intensity control
│   ├── MotionSlider.tsx             # Animation speed control
│   ├── ThemeSwitcher.tsx            # Theme dropdown picker
│   ├── RevealCard.tsx               # Scroll-reveal wrapper
│   ├── ScrollToTop.tsx              # Route-change scroll reset
│   └── SEO.tsx                      # Meta tag wrapper
│
├── context/
│   └── ThemeContext.tsx             # Theme + intensity + motionLevel state
│
├── hooks/
│   ├── useThemeAnimations.ts        # Per-theme Framer variants
│   └── useOnScreen.ts               # IntersectionObserver hook
│
└── data/
    └── models.ts                    # 18 models + 12 providers data
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AcerThyRacer/ShowMeAI.git
   cd ShowMeAI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5555`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Configuration

### Adding a New Theme

1. **Add CSS variables** in [`index.css`](src/index.css):
   ```css
   .theme-yourtheme {
     --bg-primary: #...;
     --text-primary: #...;
     /* etc */
   }
   ```

2. **Add canvas animation** in [`ThemeBackground.tsx`](src/components/backgrounds/ThemeBackground.tsx)

3. **Add animation variants** in [`useThemeAnimations.ts`](src/hooks/useThemeAnimations.ts)

4. **Add theme option** to [`ThemeContext.tsx`](src/context/ThemeContext.tsx)

### Adding a New Model

Edit [`models.ts`](src/data/models.ts):

```typescript
{
  id: "your-model",
  name: "Your Model",
  provider: "Provider Name",
  providerSlug: "provider-name",
  category: ["category1", "category2"],
  tagline: "Short description",
  description: " Longer description...",
  essay: "Full essay content...",
  strengths: ["strength1", "strength2"],
  weaknesses: ["weakness1", "weakness2"],
  pricing: "$X/month",
  releaseYear: 2026,
  icon: "🤖"
}
```

---

## 🔬 Technical Highlights

### Performance Optimizations

**Canvas Backgrounds:**
- Double-draw glow technique instead of shadowBlur (5-10x faster)
- Typed arrays (Float32Array) for particle data
- Batch path drawing operations
- Adaptive frame rate throttling (15fps → native refresh rate)
- Particle pool caps prevent GC pressure
- DPR-aware sizing for retina displays

**React:**
- React.lazy code-splitting for all routes
- useMemo for expensive computations
- useCallback for stable function references
- Context value memoization

**CSS:**
- CSS variables for instant theme switching
- Hardware-accelerated transforms (translate3d)
- Containment for layout stability
- Prefers-reduced-motion media queries

### Architecture Patterns

- **Context API** for global theme state
- **Custom hooks** for reusable logic
- **Composition pattern** for animation variants
- **Higher-order components** (RevealCard wrapper)
- **Separation of concerns** (backgrounds, components, data, hooks)
- **TypeScript interfaces** for type safety

---

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

### About GPL v3

The GNU General Public License is a free, copyleft license for software. The GPL ensures that:
- Users have the freedom to use, study, share, and modify the software
- All derivative works must also be licensed under GPL v3
- Source code must be made available when distributing the software
- Any distributed copies must include the same license and copyright notice

**Key implications:**
- ✅ You can freely use, modify, and distribute this software
- ✅ You can charge for distributing the software
- ❌ You cannot close the source or make it proprietary
- ❌ You cannot sublicense or impose additional restrictions

For more information, visit: [https://www.gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html)

---

## 👤 Author

**AcerThyRacer**

- GitHub: [@AcerThyRacer](https://github.com/AcerThyRacer)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- AI models and providers data based on 2026 landscape research
- Theme inspirations from various design movements
- Built with modern web technologies and best practices

---

<div align="center">

**Built with AI, for AI.** 🤖✨

[⬆ Back to Top](#showmeai---ai-masterclass)

</div>
