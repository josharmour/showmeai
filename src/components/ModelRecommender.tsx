import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Brain, Eye, Shield, Globe, ArrowRight, Code, Video, Music } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useThemeAnimations } from '../hooks/useThemeAnimations';
import { aiModels } from '../data/models';

const tasks = [
  {
    id: 'autonomous',
    label: 'Autonomous Labor',
    icon: Bot,
    bestModel: 'GPT-5.3-Codex',
    bestModelId: 'gpt-5-codex',
    alternatives: ['Claude Opus 4.6', 'Llama 4 Scout'],
    desc: "The industry standard for unsupervised execution. It operates on a 'human-on-the-loop' basis, capable of recursive self-improvement, managing deployment pipelines, and executing long-horizon tasks without constant oversight."
  },
  {
    id: 'reasoning',
    label: 'Deep Reasoning',
    icon: Brain,
    bestModel: 'Claude Opus 4.6',
    bestModelId: 'claude-opus-4-6',
    alternatives: ['Gemini 3 Thinking', 'GPT-5.3-Codex'],
    desc: "The pinnacle of 'System 2' thinking. Features Adaptive Thinking to toggle between instant responses and extended deliberation. It is the entity you consult for deep nuance, complex logical deduction, and architectural design."
  },
  {
    id: 'multimodal',
    label: 'Multimodal / Vision',
    icon: Eye,
    bestModel: 'Gemini 3 Pro',
    bestModelId: 'gemini-3-pro',
    alternatives: ['GPT-5.3-Codex', 'Llama 4'],
    desc: "The Multimodal Mastermind. Trained natively on text, code, audio, 4K video, and images. It powers deep Workspace integration, allowing you to 'Ctrl+F' the real world through video and audio understanding."
  },
  {
    id: 'coding',
    label: 'Coding / Memory',
    icon: Code,
    bestModel: 'Magic LFM-10M',
    bestModelId: 'magic-10m',
    alternatives: ['Claude Opus 4.6', 'GPT-5.3-Codex'],
    desc: "The Infinite Context Coder. With a 10-million token active context, Magic LFM-10M can hold your entire repo, dependencies, and documentation in working memory, perfect for 'needle-in-a-haystack' debugging."
  },
  {
    id: 'creative',
    label: 'Creative / Video',
    icon: Video,
    bestModel: 'Sora 2.0',
    bestModelId: 'sora-2',
    alternatives: ['Midjourney v7', 'Runway Gen-4'],
    desc: "Reality Simulation. Sora 2.0 generates minute-long, 4K, sound-synced video with consistent physics. It is the ultimate pre-visualization tool for filmmakers and advertisers."
  },
  {
    id: 'audio',
    label: 'Voice / Audio',
    icon: Music,
    bestModel: 'ElevenLabs V4',
    bestModelId: 'elevenlabs-v4',
    alternatives: ['Suno V5', 'Gemini 3 Flash'],
    desc: "Universal Voice. Indistinguishable human speech generation with emotional control and real-time dubbing. Solves the 'Turing Test' for voice."
  },
  {
    id: 'sovereign',
    label: 'Sovereign / Local',
    icon: Shield,
    bestModel: 'Llama 4 Scout',
    bestModelId: 'llama-4-scout',
    alternatives: ['Mistral Large 3', 'Ministral'],
    desc: "The open-weight standard for privacy and sovereignty. Runs entirely on your own infrastructure (e.g., Apple Silicon) ensuring zero data exfiltration. Ideal for defense, government, and privacy-conscious enterprises."
  },
  {
    id: 'compliance',
    label: 'Compliance / Edge',
    icon: Globe,
    bestModel: 'Mistral Large 3',
    bestModelId: 'mistral-large-3',
    alternatives: ['Llama 4 Scout', 'Ministral'],
    desc: "The European Shield. Optimized for function calling and edge deployment. Provides a compliant, transparent alternative to American models, strictly adhering to GDPR and the EU AI Act."
  }
];

export const ModelRecommender: React.FC = () => {
  const { theme } = useTheme();
  const { containerVariants, panelVariants } = useThemeAnimations();
  const [selectedTask, setSelectedTask] = useState(tasks[0]);

  return (
    <div className="py-20 px-8 bg-[var(--secondary-color)]/30 relative z-10 theme-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'hacker' ? 'font-mono' : ''}`}>
            Best Models for <span className="text-[var(--accent-color)]">Every Vertical</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Select a specialized vertical to see our 2026 strategic recommendation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            {tasks.map((task) => (
              <button
                key={task.id}
                onClick={() => setSelectedTask(task)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all text-left ${
                  selectedTask.id === task.id
                    ? 'bg-[var(--accent-color)] text-white shadow-lg scale-105'
                    : 'bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)]/80'
                }`}
              >
                <task.icon size={24} />
                <span className="font-bold text-lg">{task.label}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={selectedTask.id}
                layout
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full bg-[var(--bg-color)] p-8 rounded-2xl border-2 border-[var(--accent-color)] shadow-2xl relative overflow-hidden"
                style={{ contain: 'layout' }}
              >
                <div className="relative z-10">
                  <div className="text-[var(--accent-color)] mb-4">
                    <selectedTask.icon size={48} />
                  </div>

                  <h3 className="text-3xl font-bold mb-2">Top Pick: {selectedTask.bestModel}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-sm opacity-60 uppercase tracking-wider font-semibold">Alternatives:</span>
                    {selectedTask.alternatives.map((alt, i) => (
                      <span key={i} className="text-sm px-2 py-1 rounded bg-[var(--secondary-color)] border border-[var(--text-color)]/20">
                        {alt}
                      </span>
                    ))}
                  </div>

                  <p className="text-lg leading-relaxed opacity-90 mb-6">
                    {selectedTask.desc}
                  </p>

                  <Link
                    to={`/models/${selectedTask.bestModelId}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent-color)] text-white rounded-lg hover:brightness-110 transition-all text-sm font-medium"
                  >
                    Read full essay <ArrowRight size={14} />
                  </Link>
                </div>

                <selectedTask.icon
                  size={300}
                  className="absolute -bottom-10 -right-10 opacity-5 text-[var(--accent-color)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA to see all models */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="text-center mt-12"
        >
          <Link
            to="/models"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--secondary-color)] border-2 border-[var(--accent-color)] rounded-full font-bold text-lg hover:bg-[var(--accent-color)]/10 transition-all"
          >
            View All {aiModels.length} Models <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
