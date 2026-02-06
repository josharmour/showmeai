import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useThemeAnimations } from '../hooks/useThemeAnimations';
import { Home, Search, BookOpen, ArrowRight } from 'lucide-react';

export const NotFound: React.FC = () => {
  const { theme } = useTheme();
  const { panelVariants } = useThemeAnimations();

  const glitchText = theme === 'hacker' || theme === 'rave' || theme === 'neon';

  return (
    <div className="min-h-screen flex items-center justify-center p-8 pt-24 relative">
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl z-10"
      >
        {/* Big 404 */}
        <motion.div
          className="relative mb-8"
          animate={glitchText ? {
            textShadow: [
              '2px 2px var(--accent-color), -2px -2px var(--secondary-color)',
              '-2px 2px var(--accent-color), 2px -2px var(--secondary-color)',
              '2px 2px var(--accent-color), -2px -2px var(--secondary-color)',
            ],
          } : undefined}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h1 className={`text-[10rem] md:text-[14rem] font-black leading-none opacity-10 select-none ${theme === 'hacker' ? 'font-mono' : ''}`}>
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-bold text-[var(--accent-color)]">404</span>
          </div>
        </motion.div>

        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'hacker' ? 'font-mono' : ''}`}>
          {theme === 'hacker' ? '> PAGE_NOT_FOUND' : 'Page Not Found'}
        </h2>

        <p className="text-lg opacity-70 mb-10 max-w-md mx-auto leading-relaxed">
          {theme === 'hacker'
            ? 'ERR: The requested resource does not exist on this server. Reroute recommended.'
            : "The page you're looking for doesn't exist or has been moved. Let's get you back on track."}
        </p>

        {/* Quick nav buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 bg-[var(--accent-color)] text-white rounded-full font-bold flex items-center gap-2 justify-center hover:brightness-110 transition-all shadow-lg"
            >
              <Home size={18} />
              Go Home
            </motion.button>
          </Link>
          <Link to="/models">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 bg-[var(--secondary-color)] border-2 border-[var(--accent-color)]/40 rounded-full font-bold flex items-center gap-2 justify-center hover:border-[var(--accent-color)] transition-all"
            >
              <Search size={18} />
              Browse Models
            </motion.button>
          </Link>
          <Link to="/ai-guide">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 bg-[var(--secondary-color)] border-2 border-[var(--accent-color)]/40 rounded-full font-bold flex items-center gap-2 justify-center hover:border-[var(--accent-color)] transition-all"
            >
              <BookOpen size={18} />
              AI Guide
            </motion.button>
          </Link>
        </div>

        {/* Suggested links */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--secondary-color)]/60 backdrop-blur border border-[var(--accent-color)]/10">
          <p className="text-sm font-semibold opacity-60 uppercase tracking-wider mb-4">Popular Pages</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { to: '/compare', label: 'Compare Models' },
              { to: '/playground', label: 'AI Playground' },
              { to: '/providers', label: 'AI Providers' },
              { to: '/ai-guide', label: 'How to Use AI' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[var(--accent-color)]/10 transition-colors group"
              >
                <span className="text-sm font-medium">{link.label}</span>
                <ArrowRight size={14} className="opacity-30 group-hover:opacity-100 group-hover:text-[var(--accent-color)] transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
