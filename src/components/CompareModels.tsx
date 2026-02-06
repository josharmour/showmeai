import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useThemeAnimations } from '../hooks/useThemeAnimations';
import { aiModels } from '../data/models';
import { ArrowLeft, Scale, ChevronDown, Check, X, Minus, ArrowRight } from 'lucide-react';

/* ─── helpers ─── */

/** Rough benchmark proxy: more strengths → higher score, capped at 100 */
function benchmarkScore(strengthsCount: number): number {
  return Math.min(100, Math.round((strengthsCount / 6) * 100));
}

/** Auto-generated verdict comparing two models */
function generateVerdict(a: typeof aiModels[number], b: typeof aiModels[number]): string {
  const scoreA = benchmarkScore(a.strengths.length);
  const scoreB = benchmarkScore(b.strengths.length);
  if (scoreA > scoreB) {
    return `${a.name} edges ahead with ${a.strengths.length} key strengths and broader ${a.category.join('/')} coverage, while ${b.name} counters with ${b.pricing}.`;
  }
  if (scoreB > scoreA) {
    return `${b.name} leads with ${b.strengths.length} key strengths and a focus on ${b.category.join('/')}, whereas ${a.name} offers ${a.pricing}.`;
  }
  return `Both models are evenly matched — ${a.name} and ${b.name} each bring ${a.strengths.length} key strengths. Your choice depends on ecosystem preference and pricing.`;
}

/* ─── Dropdown component ─── */

interface ModelDropdownProps {
  selected: number;
  onChange: (idx: number) => void;
  disabledIdx?: number;
  label: string;
}

const ModelDropdown: React.FC<ModelDropdownProps> = ({ selected, onChange, disabledIdx, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const model = aiModels[selected];

  return (
    <div className="relative w-full" ref={ref}>
      <label className="block text-xs uppercase tracking-wider opacity-50 mb-1.5">{label}</label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="theme-card w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left cursor-pointer"
        style={{ background: 'var(--secondary-color)', color: 'var(--text-color)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <span className="text-2xl">{model.icon}</span>
        <span className="flex-1 font-semibold truncate">{model.name}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: 'var(--accent-color)' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 mt-2 w-full rounded-xl overflow-hidden shadow-2xl max-h-80 overflow-y-auto"
            style={{ background: 'var(--bg-color)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {aiModels.map((m, i) => (
              <li key={m.id}>
                <button
                  type="button"
                  disabled={i === disabledIdx}
                  onClick={() => { onChange(i); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === disabledIdx ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[var(--accent-color)]/10 cursor-pointer'
                  } ${i === selected ? 'bg-[var(--accent-color)]/15 font-semibold' : ''}`}
                  style={{ color: 'var(--text-color)' }}
                >
                  <span className="text-xl">{m.icon}</span>
                  <span className="truncate">{m.name}</span>
                  {i === selected && <Check size={14} className="ml-auto" style={{ color: 'var(--accent-color)' }} />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Main component ─── */

export const CompareModels: React.FC = () => {
  const { theme } = useTheme();
  const { panelVariants } = useThemeAnimations();

  const [idxA, setIdxA] = useState(0);
  const [idxB, setIdxB] = useState(1);

  const modelA = aiModels[idxA];
  const modelB = aiModels[idxB];
  const scoreA = benchmarkScore(modelA.strengths.length);
  const scoreB = benchmarkScore(modelB.strengths.length);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 relative" style={{ color: 'var(--text-color)' }}>
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm opacity-60 mb-8">
          <Link to="/" className="hover:text-[var(--accent-color)] transition-colors">Home</Link>
          <ArrowRight size={14} />
          <span className="text-[var(--accent-color)]">Compare Models</span>
        </div>

        <motion.div variants={panelVariants} initial="hidden" animate="visible" exit="exit">

          {/* Page title */}
          <div className="flex items-center gap-3 mb-10">
            <Link to="/models" className="p-2 rounded-lg hover:bg-[var(--accent-color)]/10 transition-colors">
              <ArrowLeft size={22} style={{ color: 'var(--accent-color)' }} />
            </Link>
            <Scale size={28} style={{ color: 'var(--accent-color)' }} />
            <h1 className={`text-3xl md:text-4xl font-bold ${theme === 'hacker' ? 'font-mono' : ''}`}>
              Compare Models
            </h1>
          </div>

          {/* ── Selectors ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ModelDropdown selected={idxA} onChange={setIdxA} disabledIdx={idxB} label="Model A" />
            <ModelDropdown selected={idxB} onChange={setIdxB} disabledIdx={idxA} label="Model B" />
          </div>

          {/* ── Comparison content ── */}
          <motion.div
            key={`${modelA.id}-${modelB.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >

            {/* Header cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[modelA, modelB].map((m) => (
                <div key={m.id} className="theme-card rounded-2xl p-6" style={{ background: 'var(--secondary-color)' }}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-5xl">{m.icon}</span>
                    <div>
                      <h2 className={`text-xl font-bold ${theme === 'hacker' ? 'font-mono' : ''}`}>{m.name}</h2>
                      <p className="text-sm opacity-60">{m.provider}</p>
                    </div>
                  </div>
                  <p className="text-sm italic opacity-70">{m.tagline}</p>
                </div>
              ))}
            </div>

            {/* Key Specs table */}
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 opacity-80">
              <Minus size={16} style={{ color: 'var(--accent-color)' }} /> Key Specs
            </h3>
            <div className="theme-card rounded-2xl overflow-hidden mb-10" style={{ background: 'var(--secondary-color)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th className="text-left px-5 py-3 font-medium opacity-50 w-1/3">Spec</th>
                    <th className="text-left px-5 py-3 font-medium opacity-50 w-1/3">{modelA.name}</th>
                    <th className="text-left px-5 py-3 font-medium opacity-50 w-1/3">{modelB.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {([
                    ['Category', modelA.category.join(', '), modelB.category.join(', ')],
                    ['Release Year', String(modelA.releaseYear), String(modelB.releaseYear)],
                    ['Pricing', modelA.pricing, modelB.pricing],
                  ] as [string, string, string][]).map(([label, valA, valB], i) => (
                    <tr key={label} style={i < 2 ? { borderBottom: '1px solid rgba(255,255,255,0.05)' } : undefined}>
                      <td className="px-5 py-3 font-medium opacity-70">{label}</td>
                      <td className="px-5 py-3">{valA}</td>
                      <td className="px-5 py-3">{valB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Strengths */}
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 opacity-80">
              <Check size={16} className="text-green-400" /> Strengths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[modelA, modelB].map((m) => (
                <div key={m.id} className="theme-card rounded-2xl p-5" style={{ background: 'var(--secondary-color)' }}>
                  <ul className="space-y-2">
                    {m.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check size={15} className="mt-0.5 shrink-0 text-green-400" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Weaknesses */}
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 opacity-80">
              <X size={16} className="text-red-400" /> Weaknesses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[modelA, modelB].map((m) => (
                <div key={m.id} className="theme-card rounded-2xl p-5" style={{ background: 'var(--secondary-color)' }}>
                  <ul className="space-y-2">
                    {m.weaknesses.map((w, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <X size={15} className="mt-0.5 shrink-0 text-red-400" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Benchmark Bars */}
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 opacity-80">
              <Scale size={16} style={{ color: 'var(--accent-color)' }} /> Benchmark Score (proxy)
            </h3>
            <div className="theme-card rounded-2xl p-6 mb-10 space-y-5" style={{ background: 'var(--secondary-color)' }}>
              {[
                { model: modelA, score: scoreA },
                { model: modelB, score: scoreB },
              ].map(({ model, score }) => (
                <div key={model.id}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="font-medium">{model.icon} {model.name}</span>
                    <span className="font-bold" style={{ color: 'var(--accent-color)' }}>{score}</span>
                  </div>
                  <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'var(--accent-color)' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Verdict */}
            <div className="theme-card rounded-2xl p-6" style={{ background: 'var(--secondary-color)', borderLeft: '4px solid var(--accent-color)' }}>
              <h3 className={`text-lg font-bold mb-2 ${theme === 'hacker' ? 'font-mono' : ''}`}>Verdict</h3>
              <p className="text-sm leading-relaxed opacity-80">{generateVerdict(modelA, modelB)}</p>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
