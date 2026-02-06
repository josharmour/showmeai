import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Trophy, ArrowRight, Star } from 'lucide-react';

const picks = [
  {
    rank: '🥇',
    title: 'Best Overall AI Model',
    model: 'Claude Opus 4.5',
    modelId: 'claude-opus-4',
    provider: 'Anthropic',
    reason: 'Claude Opus 4.5 is my #1 recommendation for 2026. It combines the deepest reasoning capabilities, the best coding performance, and the most reliable safety-aligned outputs of any model. Whether you\'re writing code, analyzing documents, or working through complex problems, Claude Opus delivers consistently thoughtful, accurate results. It thinks before it speaks — and that makes all the difference.',
  },
  {
    rank: '🥈',
    title: 'Best for Everyday Use',
    model: 'GPT-5.2',
    modelId: 'gpt-5',
    provider: 'OpenAI',
    reason: 'GPT-5.2 is the Swiss Army knife of AI. Its 2M token context window is unmatched, its multimodal capabilities are the most mature, and it handles virtually any task you throw at it with impressive quality. If you could only use one AI model for everything, this would be the safest bet. It\'s slightly less precise than Claude for deep coding, but more versatile overall.',
  },
  {
    rank: '🥉',
    title: 'Best for Developers',
    model: 'GitHub Copilot',
    modelId: 'github-copilot',
    provider: 'GitHub',
    reason: 'For developers specifically, nothing beats having AI woven directly into your IDE. Copilot\'s autonomous coding agent, multi-model backend, and seamless GitHub integration make it the most practical AI tool for shipping code faster. It\'s not just a model — it\'s a complete development workflow upgrade.',
  },
  {
    rank: '🔍',
    title: 'Best for Research',
    model: 'Perplexity Pro',
    modelId: 'perplexity-pro',
    provider: 'Perplexity AI',
    reason: 'If you need to find accurate, up-to-date information with sources you can actually verify, Perplexity Pro is unbeatable. Every claim comes with a clickable citation. It searches the live web using multiple frontier models. For students, researchers, journalists, and anyone who values truth over confidence, this is the tool.',
  },
  {
    rank: '🎨',
    title: 'Best for Image Generation',
    model: 'Midjourney v7',
    modelId: 'midjourney-v7',
    provider: 'Midjourney',
    reason: 'For pure visual quality, nothing touches Midjourney v7. The images it produces are genuinely stunning — cinematic lighting, perfect composition, and an artistic sensibility that makes every generation feel intentional. If you need images that make people stop and stare, this is the only choice.',
  },
  {
    rank: '💰',
    title: 'Best Budget Pick',
    model: 'DeepSeek V3 / R1',
    modelId: 'deepseek-v3',
    provider: 'DeepSeek',
    reason: 'DeepSeek proves you don\'t need an expensive subscription for frontier-quality AI. Its math and coding capabilities rival models costing 10x more, and it\'s free or near-free for most use cases. If you\'re cost-conscious but still want serious AI power, start here.',
  },
];

export const PersonalPicks: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="py-20 px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 text-[var(--accent-color)] text-sm font-medium mb-6">
            <Star size={16} /> Editor's Picks
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'hacker' ? 'font-mono' : ''}`}>
            My <span className="text-[var(--accent-color)]">Personal Recommendations</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            After extensively testing every major AI model in 2026, here are my honest picks for each category.
          </p>
        </motion.div>

        <div className="space-y-6">
          {picks.map((pick, index) => (
            <motion.div
              key={pick.modelId}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={`/models/${pick.modelId}`}
                className="block p-6 md:p-8 rounded-2xl bg-[var(--secondary-color)]/70 backdrop-blur border border-[var(--accent-color)]/15 hover:border-[var(--accent-color)] transition-all group hover:shadow-lg hover:shadow-[var(--accent-color)]/10"
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
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm opacity-50 mb-4">
            These are personal opinions based on extensive real-world testing. Your ideal model depends on your specific use case.
          </p>
          <Link
            to="/models"
            className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:underline font-medium"
          >
            <Trophy size={16} /> Compare all 13 models yourself <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
