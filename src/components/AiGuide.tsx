import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Brain, Target, ShieldCheck, Layers, Cpu, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useThemeAnimations } from '../hooks/useThemeAnimations';

const steps = [
  {
    icon: MessageSquare,
    title: "The Agentic Shift",
    desc: "We have moved beyond the Chatbot Era. Success in 2026 isn't about prompting; it's about orchestrating reliable agents like GPT-5.3 that can pursue multi-step goals for hours without oversight."
  },
  {
    icon: Brain,
    title: "Adaptive Reasoning",
    desc: "Don't treat all queries equally. Use Claude Opus 4.6's 'Extended Thinking' mode for complex architectural problems, and faster models for routine tasks. Balance cost against cognitive depth."
  },
  {
    icon: Target,
    title: "Use-Case Selection",
    desc: "Reject the 'one model fits all' myth. Use OpenAI for autonomy, Anthropic for reasoning, Gemini for physical sensing, and Llama/Mistral for sovereign privacy."
  },
  {
    icon: ShieldCheck,
    title: "Sovereignty & Privacy",
    desc: "For sensitive data, go Sovereign. Running Llama 4 locally on Apple Silicon ensures zero data exfiltration while maintaining frontier-class intelligence on your own hardware."
  },
  {
    icon: Layers,
    title: "The Developer's Arsenal",
    desc: "Abandon the text editor. Embrace AI-native environments like Cursor and Claude Code that index your codebase and run 'Shadow Workspaces' to validate code before you even see it."
  },
  {
    icon: Cpu,
    title: "Memory Bandwidth",
    desc: "Understand your hardware. Local AI is bottlenecked by memory bandwidth, not compute. Know why Apple Silicon's Unified Memory is the king of local inference in 2026."
  }
];

export const AiGuide: React.FC = () => {
  const { theme } = useTheme();
  const { getItemVariants, containerVariants } = useThemeAnimations();

  return (
    <div id="guide" className="py-20 px-8 relative z-10 theme-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'hacker' ? 'font-mono' : ''}`}>
            Core Principles of <span className="text-[var(--accent-color)]">2026</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            The rules of engagement have changed. Here is how to navigate the new landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={getItemVariants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4 }}
              className="theme-card p-6 rounded-2xl bg-[var(--secondary-color)] border border-[var(--accent-color)]/20 hover:border-[var(--accent-color)] transition-all group"
            >
              <div className="p-3 rounded-lg bg-[var(--accent-color)]/10 text-[var(--accent-color)] group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors w-fit mb-4">
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="opacity-75 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/ai-guide"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-color)] text-white rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-[var(--accent-color)]/20"
          >
            Read the Developer's Arsenal Guide <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
