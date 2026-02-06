import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeBackground } from './components/backgrounds/ThemeBackground';
import { SEO } from './components/SEO';

// Eagerly loaded homepage components (above the fold)
import { Hero } from './components/Hero';
import { AiGuide } from './components/AiGuide';
import { ModelRecommender } from './components/ModelRecommender';
import { PersonalPicks } from './components/PersonalPicks';

// Code-split route components
const ModelsGrid = lazy(() => import('./components/ModelsGrid').then(m => ({ default: m.ModelsGrid })));
const ModelPage = lazy(() => import('./components/ModelPage').then(m => ({ default: m.ModelPage })));
const ProvidersGrid = lazy(() => import('./components/ProvidersGrid').then(m => ({ default: m.ProvidersGrid })));
const ProviderPage = lazy(() => import('./components/ProviderPage').then(m => ({ default: m.ProviderPage })));
const HowToUseAI = lazy(() => import('./components/HowToUseAI').then(m => ({ default: m.HowToUseAI })));
const CompareModels = lazy(() => import('./components/CompareModels').then(m => ({ default: m.CompareModels })));
const Playground = lazy(() => import('./components/Playground').then(m => ({ default: m.Playground })));
const NotFound = lazy(() => import('./components/NotFound').then(m => ({ default: m.NotFound })));

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[var(--accent-color)]/20 border-t-[var(--accent-color)] rounded-full animate-spin" />
        <p className="text-sm opacity-60">Loading…</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <AiGuide />
      <ModelRecommender />
      <PersonalPicks />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <div className="min-h-screen relative">
            <ThemeBackground />
            <ScrollToTop />
            <Navbar />
            <div className="relative z-10">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/models" element={<><SEO title="AI Models Directory" description="Browse every major AI model in 2026 with in-depth essays and comparisons." path="/models" /><ModelsGrid /></>} />
                  <Route path="/models/:id" element={<ModelPage />} />
                  <Route path="/providers" element={<><SEO title="AI Providers" description="Explore the companies building the future of AI — from OpenAI to Anthropic to Meta." path="/providers" /><ProvidersGrid /></>} />
                  <Route path="/providers/:id" element={<ProviderPage />} />
                  <Route path="/ai-guide" element={<><SEO title="How to Use AI Correctly" description="Master AI with custom prompts, hooks, presets, and the OMEGA-SENTINEL configuration." path="/ai-guide" /><HowToUseAI /></>} />
                  <Route path="/compare" element={<><SEO title="Compare AI Models" description="Side-by-side comparison of any two AI models — benchmarks, pricing, strengths, and weaknesses." path="/compare" /><CompareModels /></>} />
                  <Route path="/playground" element={<><SEO title="AI Playground" description="Try out AI models with preset prompts and see simulated responses in real time." path="/playground" /><Playground /></>} />
                  <Route path="*" element={<><SEO title="Page Not Found" description="The page you're looking for doesn't exist." /><NotFound /></>} />
                </Routes>
              </Suspense>
              <footer className="py-8 text-center opacity-50 text-sm">
                <p>© 2026 AI Masterclass. Built with React & Tailwind CSS.</p>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
