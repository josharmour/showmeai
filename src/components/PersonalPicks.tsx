import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useThemeAnimations } from '../hooks/useThemeAnimations';
import { Trophy, ArrowRight, Star } from 'lucide-react';
import { RevealCard } from './RevealCard';

const picks = [
  {
    rank: '🥇',
    title: 'Best for Autonomous Labor',
    model: 'GPT-5.3-Codex',
    modelId: 'gpt-5-codex',
    provider: 'OpenAI',
    reason: 'The industry standard for unsupervised execution. GPT-5.3-Codex operates on a "human-on-the-loop" basis, capable of recursive self-improvement and managing its own deployment pipelines. It is the engine you trust to do the work when you are asleep.',
  },
  {
    rank: '🥈',
    title: 'Best for High-Fidelity Reasoning',
    model: 'Claude Opus 4.6',
    modelId: 'claude-opus-4-6',
    provider: 'Anthropic',
    reason: 'The "System 2" thinker. With Adaptive Thinking and a massive context window, Claude Opus 4.6 is the entity you consult for deep nuance, complex logical deduction, and architectural software design where accuracy is paramount.',
  },
  {
    rank: '🥉',
    title: 'Best for Multimodal Integration',
    model: 'Gemini 3 Pro',
    modelId: 'gemini-3-pro',
    provider: 'Google',
    reason: 'The "Multimodal Mastermind." Trained natively on text, code, audio, and video. It understands temporal flow in video and powers deep Workspace integration, making it the only choice for "sensing" the world.',
  },
  {
    rank: '🛡️',
    title: 'Best for Sovereign Deployment',
    model: 'Llama 4 Scout',
    modelId: 'llama-4-scout',
    provider: 'Meta',
    reason: 'For privacy-conscious enterprises and local development, Llama 4 is the open-weight standard. It allows you to run frontier-level intelligence entirely on your own infrastructure (like a MacBook Pro), ensuring zero data exfiltration.',
  },
  {
    rank: '⚡',
    title: 'Best for Speed & Production',
    model: 'Gemini 3 Flash',
    modelId: 'gemini-3-flash',
    provider: 'Google',
    reason: 'The workhorse of the AI economy. At sub-100ms latency and 1/4th the cost of Pro, it powers real-time voice and video agents. If you need speed and volume, this is the engine.',
  },
];

export const PersonalPicks: React.FC = () => {
  const { theme } = useTheme();
  const { containerVariants, getItemVariants } = useThemeAnimations();

  return (
    <div className="py-20 px-8 relative z-10 theme-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 text-[var(--accent-color)] text-sm font-medium mb-6">
            <Star size={16} /> 2026 Strategic Taxonomy
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'hacker' ? 'font-mono' : ''}`}>
            Use-Case Driven <span className="text-[var(--accent-color)]">Recommendations</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            We reject a singular "winner." Instead, we analyze the "Best" AI based on specific specialized verticals.
          </p>
        </motion.div>

        <div className="space-y-6">
          {picks.map((pick, index) => (
            <RevealCard
              key={pick.modelId}
              variants={getItemVariants(index)}
            >
              <Link
                to={`/models/${pick.modelId}`}
                className="theme-card block p-6 md:p-8 rounded-2xl bg-[var(--secondary-color)]/70 backdrop-blur border border-[var(--accent-color)]/15 hover:border-[var(--accent-color)] transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex items-center gap-3 md:flex-col md:items-center md:min-w-[100px]">
                    <span className="text-4xl">{pick.rank}</span>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-50 text-center">{pick.title}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-[var(--accent-color)] transition-colors">
                        {pick.model}
                      </h3>
                      <span className="text-sm opacity-50">by {pick.provider}</span>
                    </div>
                    <p className="opacity-75 leading-relaxed text-sm md:text-base">
                      {pick.reason}
                    </p>
                  </div>
                  <div className="flex items-center text-[var(--accent-color)] opacity-0 group-hover:opacity-100 transition-opacity self-center">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </RevealCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-12"
        >
          <p className="text-sm opacity-50 mb-4">
            The strategic advice for December 2026 is to diversify. Do not rely on a single provider.
          </p>
          <Link
            to="/models"
            className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:underline font-medium"
          >
            <Trophy size={16} /> Explore the full landscape <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
