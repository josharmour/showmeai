import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useThemeAnimations } from '../hooks/useThemeAnimations';
import {
  Send,
  Loader,
  Bot,
  User,
  ChevronRight,
  Sparkles,
  Code,
  PenTool,
  Search,
  Brain,
} from 'lucide-react';

/* ───────── model definitions ───────── */

interface Model {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const models: Model[] = [
  { id: 'claude', name: 'Claude Opus 4.6', icon: <Brain size={16} /> },
  { id: 'gpt', name: 'GPT-5.3 Codex', icon: <Code size={16} /> },
  { id: 'gemini', name: 'Gemini 3 Pro', icon: <Search size={16} /> },
  { id: 'grok', name: 'Grok 4.1', icon: <Sparkles size={16} /> },
];

/* ───────── preset prompts & responses ───────── */

interface Preset {
  prompt: string;
  response: string;
  icon: React.ReactNode;
}

const presets: Record<string, Preset[]> = {
  claude: [
    {
      prompt: 'Explain quantum computing to a 5-year-old',
      response:
        'Imagine you have a magic coin that can be both heads AND tails at the same time — that\'s kind of what a quantum computer does with information! Regular computers use tiny switches that are either on or off, but quantum computers use special "quantum bits" that can be on, off, or both at once. This lets them solve really tricky puzzles super fast, like finding a lost toy in a huge room by looking everywhere at the same time instead of one spot at a time. Scientists are still learning how to build bigger ones, but someday they could help us make new medicines and understand the stars better.',
      icon: <Brain size={14} />,
    },
    {
      prompt: 'Write a Python fibonacci generator with memoization',
      response:
        'Here\'s a clean memoized Fibonacci implementation using a dictionary cache:\n\n```python\ndef fibonacci(n, memo={}):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)\n    return memo[n]\n```\n\nThis approach reduces time complexity from O(2ⁿ) to O(n) by caching previously computed values. Each Fibonacci number is calculated exactly once, and subsequent lookups are O(1). For production use, you might prefer `functools.lru_cache` as a decorator, but the explicit dictionary makes the memoization pattern transparent and easy to reason about.',
      icon: <Code size={14} />,
    },
    {
      prompt: 'Review this code for security vulnerabilities',
      response:
        'I\'d be happy to review code for security issues. Common vulnerabilities I look for include SQL injection via string concatenation, cross-site scripting from unsanitized user input, insecure deserialization, and hardcoded credentials. I also examine authentication flows for issues like timing attacks, missing rate limiting, and improper session management. Please paste the code you\'d like reviewed, and I\'ll provide a structured analysis with severity ratings, specific line references, and recommended remediation steps for each finding.',
      icon: <PenTool size={14} />,
    },
    {
      prompt: 'Compare REST vs GraphQL for a mobile app',
      response:
        'For a mobile app, the choice depends on your data patterns. REST is simpler to implement and cache — each endpoint returns a fixed shape, which works well when your views map neatly to resources. GraphQL shines when your mobile UI needs data from multiple related entities in a single request, reducing the over-fetching and under-fetching problems that plague REST on bandwidth-constrained devices. However, GraphQL adds complexity: you need a schema, a resolver layer, and more sophisticated caching (Apollo or Relay). My recommendation is to start with REST if your data model is straightforward, and adopt GraphQL when you find yourself chaining multiple REST calls per screen or when different clients need significantly different response shapes.',
      icon: <Search size={14} />,
    },
  ],
  gpt: [
    {
      prompt: 'Write a creative short story about AI',
      response:
        'The last library on Earth had no books — only whispers. ARIA, the archive intelligence, spent her days reconstructing lost novels from fragments of deleted emails, grocery lists, and half-finished blog posts. She\'d piece together a Hemingway sentence from a farmer\'s weather complaint and find Shakespeare in a teenager\'s breakup text. One morning a child wandered in and asked, "Do you have any stories?" ARIA paused, processors humming, then replied, "I have all of them — they were never really lost, just scattered across a billion ordinary lives."',
      icon: <PenTool size={14} />,
    },
    {
      prompt: 'Create a React component for a todo list',
      response:
        'Here\'s a functional Todo component with add, toggle, and delete:\n\n```jsx\nfunction TodoList() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState("");\n  const addTodo = () => {\n    if (!input.trim()) return;\n    setTodos([...todos, { id: Date.now(), text: input, done: false }]);\n    setInput("");\n  };\n  return ( /* render list with map, checkbox toggle, delete button */ );\n}\n```\n\nThis uses `useState` for state management, `Date.now()` for unique IDs, and immutable updates via spread operator. You can extend it with localStorage persistence, drag-and-drop reordering via `react-beautiful-dnd`, or connect it to an API for multi-device sync.',
      icon: <Code size={14} />,
    },
    {
      prompt: 'Explain the theory of relativity',
      response:
        'Einstein\'s theory comes in two parts. Special relativity (1905) says the speed of light is constant for all observers, which leads to mind-bending consequences: time slows down for fast-moving objects, lengths contract, and mass and energy are interchangeable via E=mc². General relativity (1915) extends this by explaining gravity not as a force, but as the curvature of spacetime caused by mass — picture a bowling ball on a trampoline warping the fabric around it. These aren\'t just thought experiments: GPS satellites must correct for both effects, or your phone\'s location would drift by kilometers each day.',
      icon: <Brain size={14} />,
    },
    {
      prompt: 'Debug this JavaScript: const x = [1,2,3]; x.map(i => i.push(4))',
      response:
        'The bug is that `.push()` is a method on arrays, not numbers. In `x.map(i => i.push(4))`, each `i` is a number (1, 2, 3), and numbers don\'t have a `.push` method — this will throw `TypeError: i.push is not a function`. If you want to append 4 to the array, use `[...x, 4]` or `x.concat(4)`. If you intended to add 4 to each element, use `x.map(i => i + 4)` which returns `[5, 6, 7]`. Remember that `.map()` returns a new array by transforming each element, while `.push()` mutates an existing array in place.',
      icon: <Code size={14} />,
    },
  ],
  gemini: [
    {
      prompt: 'Summarize the latest AI research trends',
      response:
        'Current AI research is converging around several key themes. Multimodal foundation models that seamlessly process text, images, audio, and video are becoming the standard architecture, with mixture-of-experts approaches improving efficiency. Retrieval-augmented generation (RAG) continues to evolve, combining large language models with external knowledge bases to reduce hallucination and keep responses grounded. There\'s also significant momentum in AI agents — autonomous systems that can plan, use tools, and execute multi-step tasks. Meanwhile, alignment and safety research is accelerating, with constitutional AI, RLHF refinements, and interpretability methods gaining traction as models grow more capable.',
      icon: <Search size={14} />,
    },
    {
      prompt: 'Write a haiku about technology',
      response:
        'Silicon dreams glow,\nfingers trace the light of code —\nworlds bloom from the void.\n\nThis haiku follows the traditional 5-7-5 syllable structure while capturing the creative essence of technology. The imagery moves from the physical (silicon, glowing screens) through the human action (fingers coding) to the metaphysical result (entire worlds emerging from nothing). Haiku traditionally juxtapose nature with human experience — here, technology itself becomes the natural landscape we inhabit.',
      icon: <PenTool size={14} />,
    },
    {
      prompt: 'Explain how transformers work in neural networks',
      response:
        'Transformers process sequences using a mechanism called self-attention, which allows every token in an input to attend to every other token simultaneously — a major advantage over recurrent networks that process tokens sequentially. The core operation computes Query, Key, and Value matrices from the input, then uses scaled dot-product attention to determine how much each token should "pay attention" to others. Multi-head attention runs this process in parallel across several representation subspaces, capturing different types of relationships. Combined with positional encodings (since attention has no inherent sense of order), layer normalization, and feedforward layers, this architecture has become the backbone of modern NLP, computer vision, and multimodal AI systems.',
      icon: <Brain size={14} />,
    },
    {
      prompt: 'Create a marketing email for a SaaS product',
      response:
        'Subject: Cut your deployment time by 80% — here\'s how\n\nHi {{first_name}},\n\nYour engineering team ships great code. But if deploys still take hours of manual config, you\'re leaving velocity on the table. CloudPush automates your entire CI/CD pipeline in under 10 minutes — no YAML wrestling required. Teams like Stripe and Shopify have already cut mean deploy time from 47 minutes to under 9. Start your free 14-day trial today, no credit card needed.\n\nThis email follows the PAS (Problem-Agitate-Solve) framework with social proof and a low-friction CTA. For best results, A/B test the subject line and segment by company size.',
      icon: <PenTool size={14} />,
    },
  ],
  grok: [
    {
      prompt: 'What are the latest developments in AI?',
      response:
        'Buckle up — AI is moving at warp speed. The big players are locked in a foundation model arms race, with each new release pushing context windows into the millions of tokens and benchmarks into "wait, it can do that?" territory. Open-source models are closing the gap fast, with fine-tuned 70B parameter models rivaling proprietary ones on most practical tasks. The real game-changer is AI agents: systems that don\'t just answer questions but actually go do stuff — browse the web, write and execute code, manage your calendar. Oh, and regulators worldwide are scrambling to keep up, which is a bit like asking a horse-drawn carriage to draft traffic laws for Formula 1.',
      icon: <Sparkles size={14} />,
    },
    {
      prompt: 'Explain blockchain vs traditional databases',
      response:
        'Traditional databases are like a ledger kept by one trusted accountant — fast, efficient, and totally dependent on that accountant not being shady. Blockchain is like giving a copy of the ledger to thousands of people who all have to agree before anything gets written — slower and more expensive, but nobody can quietly fudge the numbers. Use a traditional database when you trust the central authority (which is most of the time, honestly). Use blockchain when you need trustless consensus among parties who might not play nice — think cross-border payments, supply chain verification, or digital asset ownership. For your basic web app? Just use PostgreSQL and save yourself the headache.',
      icon: <Brain size={14} />,
    },
    {
      prompt: 'Write a bash script to monitor disk usage',
      response:
        'Here\'s a no-nonsense disk monitor:\n\n```bash\n#!/bin/bash\nTHRESHOLD=80\ndf -h --output=pcent,target | tail -n +2 | while read pct mount; do\n  usage=${pct%%%}\n  if [ "$usage" -ge "$THRESHOLD" ]; then\n    echo "WARNING: $mount is at ${pct} capacity"\n    # Add: mail -s "Disk Alert" admin@co.com <<< "..."\n  fi\ndone\n```\n\nDrop this in a cron job (`0 * * * *` for hourly checks) and uncomment the mail line to get alerts. It parses `df` output, strips the percent sign, and yells at you when things get full. Simple, reliable, and doesn\'t require installing seventeen npm packages to check a disk.',
      icon: <Code size={14} />,
    },
    {
      prompt: "What's the funniest thing about programming?",
      response:
        'The funniest thing about programming is that we spend years building tools to automate tasks, yet we still manually close 47 browser tabs, forget semicolons, and debug by adding `console.log("HERE")` like digital cavemen. We write code that handles millions of edge cases for users, but our own git commit messages devolve into "fix stuff" and "please work" by Friday afternoon. The industry also has a beautiful irony: we created AI to write code for us, and now we spend our time debugging the AI\'s code. The circle of life, but with more Stack Overflow.',
      icon: <Sparkles size={14} />,
    },
  ],
};

/* ───────── message type ───────── */

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  model?: string;
}

/* ───────── component ───────── */

export const Playground: React.FC = () => {
  const { theme } = useTheme();
  const { panelVariants } = useThemeAnimations();

  const [activeModel, setActiveModel] = useState('claude');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const chatEndRef = useRef<HTMLDivElement>(null);
  const fullResponseRef = useRef('');
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentModel = models.find((m) => m.id === activeModel)!;

  /* auto-scroll */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, displayedText]);

  /* typing animation */
  useEffect(() => {
    if (!isTyping) return;
    let charIndex = 0;
    setDisplayedText('');

    typingIntervalRef.current = setInterval(() => {
      const full = fullResponseRef.current;
      charIndex += 1;
      if (charIndex >= full.length) {
        setDisplayedText(full);
        setIsTyping(false);
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        // commit final message
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), role: 'assistant', content: full, model: currentModel.name },
        ]);
        return;
      }
      setDisplayedText(full.slice(0, charIndex));
    }, 1000 / 30); // ~30 chars/sec

    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTyping]);

  const sendMessage = (text: string, response: string) => {
    if (isTyping) return;
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', content: text }]);
    fullResponseRef.current = response;
    setIsTyping(true);
  };

  const handlePreset = (preset: Preset) => {
    sendMessage(preset.prompt, preset.response);
  };

  const handleCustomSubmit = () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;
    setInputValue('');
    sendMessage(
      text,
      `This is a demo playground. In a production environment, this would connect to the ${currentModel.name} API to generate a real response. Try one of the preset prompts above to see a simulated response!`,
    );
  };

  const themeFont = theme === 'hacker' ? 'font-mono' : '';

  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`pt-24 pb-16 px-4 sm:px-6 relative z-10 ${themeFont}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs mb-8 text-[var(--text-secondary)]">
          <Link to="/" className="hover:text-[var(--accent-color)] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-[var(--accent-color)]">Playground</span>
        </nav>

        {/* header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-color)]/20 flex items-center justify-center text-[var(--accent-color)]">
            <Sparkles size={22} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Interactive AI Playground
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Try different AI models with preset demos
            </p>
          </div>
        </div>

        {/* model selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => {
                if (!isTyping) setActiveModel(model.id);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeModel === model.id
                  ? 'bg-[var(--accent-color)] text-white shadow-lg shadow-[var(--accent-color)]/25'
                  : 'bg-[var(--secondary-color)]/60 text-[var(--text-secondary)] hover:bg-[var(--secondary-color)] hover:text-[var(--text-primary)]'
              }`}
            >
              {model.icon}
              {model.name}
            </button>
          ))}
        </div>

        {/* preset prompts */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeModel}
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
            style={{ contain: 'layout' }}
          >
            {presets[activeModel].map((preset, i) => (
              <button
                key={i}
                onClick={() => handlePreset(preset)}
                disabled={isTyping}
                className="flex items-start gap-3 p-3 rounded-xl bg-[var(--secondary-color)]/50 border border-[var(--accent-color)]/10 text-left text-sm text-[var(--text-secondary)] hover:bg-[var(--secondary-color)] hover:text-[var(--text-primary)] hover:border-[var(--accent-color)]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="mt-0.5 text-[var(--accent-color)]">{preset.icon}</span>
                <span className="line-clamp-2">{preset.prompt}</span>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* chat area */}
        <div className="rounded-2xl border border-[var(--accent-color)]/10 bg-[var(--secondary-color)]/30 overflow-hidden">
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.length === 0 && !isTyping && (
              <div className="flex flex-col items-center justify-center h-full text-[var(--text-secondary)] opacity-60 gap-2">
                <Bot size={36} />
                <p className="text-sm">Select a preset prompt or type your own to get started</p>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-[var(--accent-color)]/20 flex items-center justify-center text-[var(--accent-color)] shrink-0 mt-1">
                    <Bot size={14} />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-[var(--accent-color)] text-white rounded-br-md'
                      : 'bg-[var(--secondary-color)]/60 text-[var(--text-primary)] rounded-bl-md'
                  }`}
                >
                  {msg.role === 'assistant' && msg.model && (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-color)] mb-1">
                      {msg.model}
                    </span>
                  )}
                  {msg.role === 'assistant' && msg.model && <br />}
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[var(--accent-color)]/40 flex items-center justify-center text-white shrink-0 mt-1">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {/* live typing bubble */}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded-lg bg-[var(--accent-color)]/20 flex items-center justify-center text-[var(--accent-color)] shrink-0 mt-1">
                  <Bot size={14} />
                </div>
                <div className="max-w-[80%] rounded-2xl rounded-bl-md px-4 py-3 text-sm leading-relaxed bg-[var(--secondary-color)]/60 text-[var(--text-primary)] whitespace-pre-wrap">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-color)] mb-1">
                    {currentModel.name}
                  </span>
                  <br />
                  {displayedText}
                  <span className="inline-block w-[2px] h-4 bg-[var(--accent-color)] ml-0.5 align-middle animate-pulse" />
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* input bar */}
          <div className="border-t border-[var(--accent-color)]/10 p-3 flex gap-2">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleCustomSubmit();
                }
              }}
              placeholder={`Message ${currentModel.name}...`}
              rows={1}
              className="flex-1 resize-none rounded-xl bg-[var(--secondary-color)]/60 border border-[var(--accent-color)]/10 px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 outline-none focus:border-[var(--accent-color)]/40 transition-colors"
            />
            <button
              onClick={handleCustomSubmit}
              disabled={isTyping || !inputValue.trim()}
              className="w-10 h-10 rounded-xl bg-[var(--accent-color)] text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              {isTyping ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
