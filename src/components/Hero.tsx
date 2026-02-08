import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useThemeAnimations } from '../hooks/useThemeAnimations';
import { Bot, Sparkles, BookOpen, GitCompare, Play, GraduationCap } from 'lucide-react';

const HERO_VIDEOS = [
  '/AI_Neural_Core_Visualization.mp4',
  '/AI_Logos_in_Space_Animation.mp4',
];

export const Hero: React.FC = () => {
  const { theme } = useTheme();
  const { containerVariants } = useThemeAnimations();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Single effect: play the active video, pause & reset the other
  useEffect(() => {
    const active = videoRefs.current[activeIndex];
    const inactiveIdx = activeIndex === 0 ? 1 : 0;
    const inactive = videoRefs.current[inactiveIdx];

    // Ensure inactive video is paused immediately
    if (inactive) {
      inactive.pause();
      inactive.currentTime = 0;
      inactive.muted = true;
    }

    // Play the active video
    if (active) {
      active.muted = true;
      active.currentTime = 0;
      active.play().catch(() => {
        const tryPlay = () => {
          active.play().catch(() => { });
          document.removeEventListener('click', tryPlay);
          document.removeEventListener('scroll', tryPlay);
        };
        document.addEventListener('click', tryPlay, { once: true });
        document.addEventListener('scroll', tryPlay, { once: true });
      });
    }
  }, [activeIndex]);

  // When a video ends, crossfade to the next one
  const handleVideoEnd = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % HERO_VIDEOS.length);
  }, []);

  const getIconAnimation = () => {
    switch (theme) {
      case 'rave':
        return {
          animate: {
            scale: [1, 1.15, 0.95, 1.1, 1],
            rotate: [0, 10, -10, 5, 0],
            filter: [
              'drop-shadow(0 0 8px #ff00ff)',
              'drop-shadow(0 0 20px #00ffff)',
              'drop-shadow(0 0 20px #ffff00)',
              'drop-shadow(0 0 20px #ff00ff)',
              'drop-shadow(0 0 8px #ff00ff)',
            ],
          },
          transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const },
        };
      case 'hacker':
        return {
          animate: {
            x: [0, -3, 3, -2, 2, 0],
            opacity: [1, 0.6, 1, 0.7, 1],
            filter: [
              'drop-shadow(0 0 5px #00ff00)',
              'drop-shadow(0 0 15px #00ff00)',
              'drop-shadow(0 0 5px #00ff00)',
            ],
          },
          transition: { duration: 0.3, repeat: Infinity, repeatDelay: 2 },
        };
      case 'neon':
        return {
          animate: {
            filter: [
              'drop-shadow(0 0 10px #d946ef) drop-shadow(0 0 20px #d946ef)',
              'drop-shadow(0 0 15px #00ffcc) drop-shadow(0 0 30px #00ffcc)',
              'drop-shadow(0 0 10px #d946ef) drop-shadow(0 0 20px #d946ef)',
            ],
            scale: [1, 1.05, 1],
          },
          transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
        };
      case 'toxic':
        return {
          animate: {
            scale: [1, 1.08, 0.98, 1.04, 1],
            filter: [
              'drop-shadow(0 0 8px #9333ea)',
              'drop-shadow(0 0 15px #b8ff00)',
              'drop-shadow(0 0 8px #9333ea)',
            ],
          },
          transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
        };
      case 'candy':
        return {
          animate: {
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.08, 1],
          },
          transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
        };
      case 'cyberpunk':
        return {
          animate: {
            x: [0, -2, 3, -1, 0],
            opacity: [1, 0.7, 1, 0.8, 1],
            filter: [
              'drop-shadow(0 0 8px #ff6b2b)',
              'drop-shadow(0 0 15px #00f0ff)',
              'drop-shadow(0 0 8px #ff6b2b)',
            ],
          },
          transition: { duration: 0.5, repeat: Infinity, repeatDelay: 3 },
        };
      case 'ocean':
        return {
          animate: {
            y: [0, -6, 2, -4, 0],
            filter: [
              'drop-shadow(0 0 8px #0ea5e9)',
              'drop-shadow(0 0 18px #06b6d4)',
              'drop-shadow(0 0 8px #0ea5e9)',
            ],
          },
          transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const },
        };
      case 'sunset':
        return {
          animate: {
            scale: [1, 1.04, 1],
            filter: [
              'drop-shadow(0 0 8px #f97316)',
              'drop-shadow(0 0 20px #f97316) drop-shadow(0 0 40px #a855f7)',
              'drop-shadow(0 0 8px #f97316)',
            ],
          },
          transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
        };
      case 'retro':
        return {
          animate: {
            scale: [1, 1.1, 0.95, 1.05, 1],
            filter: [
              'drop-shadow(0 0 8px #ff2975)',
              'drop-shadow(0 0 20px #00f0ff)',
              'drop-shadow(0 0 15px #ff2975)',
              'drop-shadow(0 0 8px #ff2975)',
            ],
          },
          transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const },
        };
      case 'minimalist':
        return {
          animate: {
            y: [0, -4, 0],
          },
          transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
        };
      case 'light':
        return {
          animate: {
            y: [0, -8, 0],
            rotate: [0, 3, -3, 0],
          },
          transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const },
        };
      default:
        return {
          animate: {
            y: [0, -12, 0],
            filter: [
              'drop-shadow(0 0 5px rgba(59,130,246,0.3))',
              'drop-shadow(0 0 15px rgba(59,130,246,0.6))',
              'drop-shadow(0 0 5px rgba(59,130,246,0.3))',
            ],
          },
          transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
        };
    }
  };

  const getTitleAnimation = () => {
    if (theme === 'rave') {
      return {
        animate: {
          textShadow: [
            '2px 2px #ff00de, -2px -2px #00ffff',
            '3px 3px #00ffff, -3px -3px #ff00de',
            '-2px 2px #ffff00, 2px -2px #ff00ff',
            '2px 2px #ff00de, -2px -2px #00ffff',
          ],
        },
        transition: { duration: 3, repeat: Infinity },
      };
    }
    if (theme === 'neon') {
      return {
        animate: {
          textShadow: [
            '0 0 10px var(--accent-color), 0 0 20px var(--accent-color)',
            '0 0 20px var(--accent-color), 0 0 40px var(--accent-color)',
            '0 0 10px var(--accent-color), 0 0 20px var(--accent-color)',
          ],
        },
        transition: { duration: 2, repeat: Infinity },
      };
    }
    if (theme === 'cyberpunk') {
      return {
        animate: {
          textShadow: [
            '2px 0 #ff6b2b, -2px 0 #00f0ff',
            '-2px 0 #ff6b2b, 2px 0 #00f0ff',
            '2px 0 #ff6b2b, -2px 0 #00f0ff',
          ],
        },
        transition: { duration: 0.15, repeat: Infinity, repeatDelay: 4 },
      };
    }
    if (theme === 'retro') {
      return {
        animate: {
          textShadow: [
            '0 0 10px #ff2975, 0 0 20px #ff2975',
            '0 0 15px #00f0ff, 0 0 30px #00f0ff',
            '0 0 10px #ff2975, 0 0 20px #ff2975',
          ],
        },
        transition: { duration: 3, repeat: Infinity },
      };
    }
    if (theme === 'sunset') {
      return {
        animate: {
          textShadow: [
            '0 0 10px rgba(249,115,22,0.4)',
            '0 0 20px rgba(249,115,22,0.6), 0 0 40px rgba(168,85,247,0.3)',
            '0 0 10px rgba(249,115,22,0.4)',
          ],
        },
        transition: { duration: 4, repeat: Infinity },
      };
    }
    return {};
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pt-24 text-center relative overflow-hidden">

      {/* Full-screen Background Video Crossfade */}
      <div className="hero-video-bg">
        {HERO_VIDEOS.map((src, i) => (
          <video
            key={src}
            ref={el => { videoRefs.current[i] = el; }}
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            className={`hero-video-fullscreen hero-video-crossfade ${i === activeIndex ? 'hero-video-active' : 'hero-video-inactive'
              }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="hero-video-overlay" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="z-10 max-w-5xl"
      >
        <motion.div
          className="mb-8 inline-block p-6 rounded-full bg-[var(--secondary-color)]/80 backdrop-blur border-2 border-[var(--accent-color)]"
          {...getIconAnimation()}
        >
          <Bot size={64} className="text-[var(--accent-color)]" />
        </motion.div>

        <motion.h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${theme === 'hacker' ? 'font-mono' : ''}`}
          {...getTitleAnimation()}
        >
          State of the Art Intelligence
        </motion.h1>

        <p className="text-xl md:text-2xl mb-4 font-semibold text-[var(--accent-color)]">
          The Strategic Landscape of AI in Late 2026
        </p>

        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Gemini 3 Pro, Flash, and Thinking have arrived. Welcome to the <span className="font-bold">Year of the Autonomous Agent</span>.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[var(--accent-color)] text-white rounded-full font-bold text-lg shadow-lg flex items-center gap-2 mx-auto sm:mx-0 hover:brightness-110 transition-all"
            onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles size={20} />
            Read the Report
          </motion.button>

          <Link to="/models">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--secondary-color)] border-2 border-[var(--accent-color)] rounded-full font-bold text-lg shadow-lg flex items-center gap-2 mx-auto sm:mx-0 hover:bg-[var(--accent-color)]/10 transition-all"
            >
              <BookOpen size={20} />
              Explore Models
            </motion.button>
          </Link>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/compare">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-[var(--secondary-color)]/80 border border-[var(--accent-color)]/30 rounded-full text-sm font-medium flex items-center gap-2 hover:border-[var(--accent-color)] transition-all"
            >
              <GitCompare size={16} />
              Compare Models
            </motion.button>
          </Link>
          <Link to="/playground">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-[var(--secondary-color)]/80 border border-[var(--accent-color)]/30 rounded-full text-sm font-medium flex items-center gap-2 hover:border-[var(--accent-color)] transition-all"
            >
              <Play size={16} />
              Playground
            </motion.button>
          </Link>
          <Link to="/ai-guide">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-[var(--secondary-color)]/80 border border-[var(--accent-color)]/30 rounded-full text-sm font-medium flex items-center gap-2 hover:border-[var(--accent-color)] transition-all"
            >
              <GraduationCap size={16} />
              AI Guide
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
