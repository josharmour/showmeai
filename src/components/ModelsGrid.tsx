import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useThemeAnimations } from '../hooks/useThemeAnimations';
import { aiModels } from '../data/models';
import { ArrowRight } from 'lucide-react';

export const ModelsGrid: React.FC = () => {
  const { theme } = useTheme();
  const { panelVariants, getItemVariants } = useThemeAnimations();

  const categories = [
    { id: 'all', label: 'All Models' },
    { id: 'autonomous', label: 'Autonomous' },
    { id: 'reasoning', label: 'Reasoning' },
    { id: 'multimodal', label: 'Multimodal' },
    { id: 'coding', label: 'Coding' },
    { id: 'creative', label: 'Creative (Art/Video/Music)' },
    { id: 'enterprise', label: 'Enterprise/RAG' },
    { id: 'open-source', label: 'Sovereign/Open' },
    { id: 'science', label: 'Science' },
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const filtered = activeCategory === 'all' 
    ? aiModels 
    : activeCategory === 'creative' 
      ? aiModels.filter(m => m.category.some(c => ['image', 'video', 'music', 'audio', 'art'].includes(c)))
      : aiModels.filter(m => m.category.includes(activeCategory));

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h1 className={`text-5xl font-bold mb-4 ${theme === 'hacker' ? 'font-mono' : ''}`}>
            State of the Art <span className="text-[var(--accent-color)]">Intelligence</span>
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            The Strategic Landscape of AI in Late 2026. A use-case-driven analysis.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[var(--accent-color)] text-white shadow-lg'
                  : 'bg-[var(--secondary-color)] hover:bg-[var(--accent-color)]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Models Grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((model, index) => (
                <motion.div
                  key={model.id}
                  variants={getItemVariants(index % 10)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  layout
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                >
                  <Link
                    to={`/models/${model.id}`}
                    className="theme-card block h-full p-6 rounded-2xl bg-[var(--secondary-color)]/80 backdrop-blur border border-[var(--accent-color)]/20 hover:border-[var(--accent-color)] transition-all group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl">{model.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold group-hover:text-[var(--accent-color)] transition-colors">
                          {model.name}
                        </h3>
                        <p className="text-sm opacity-60">{model.provider}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-[var(--accent-color)] mb-2">{model.tagline}</p>
                    <p className="text-sm opacity-70 mb-4 line-clamp-2">{model.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {model.category.slice(0, 3).map((cat) => (
                        <span key={cat} className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)]">
                          {cat}
                        </span>
                      ))}
                      {model.category.length > 3 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)]">
                          +{model.category.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm font-medium text-[var(--accent-color)] opacity-0 group-hover:opacity-100 transition-opacity">
                      Read full essay <ArrowRight size={14} className="ml-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
};
