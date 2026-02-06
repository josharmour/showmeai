import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  Terminal, Monitor, HardDrive, Cpu, Shield, Zap, BookOpen,
  ChevronDown, ChevronRight, Copy, Check, Server, Database, Sparkles
} from 'lucide-react';

/* ─── Copy-to-clipboard button ─── */
const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--accent-color)] text-white hover:brightness-110 transition-all"
    >
      {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
    </button>
  );
};

/* ─── Collapsible code block ─── */
const CodeBlock: React.FC<{ title: string; code: string; lang?: string }> = ({ title, code, lang }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-[var(--accent-color)]/20 overflow-hidden my-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-[var(--secondary-color)]/60 hover:bg-[var(--secondary-color)] transition-colors text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <Terminal size={16} className="text-[var(--accent-color)]" />
          {title}
          {lang && <span className="text-xs px-2 py-0.5 rounded bg-[var(--accent-color)]/20 text-[var(--accent-color)]">{lang}</span>}
        </span>
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {open && (
        <div className="relative">
          <div className="absolute top-2 right-2 z-10">
            <CopyButton text={code} />
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-relaxed bg-[var(--bg-color)]/80 font-mono whitespace-pre-wrap">
            {code}
          </pre>
        </div>
      )}
    </div>
  );
};

/* ─── Section wrapper ─── */
const Section: React.FC<{ id: string; icon: React.ReactNode; title: string; subtitle?: string; children: React.ReactNode }> = ({
  id, icon, title, subtitle, children
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-lg bg-[var(--accent-color)]/15 text-[var(--accent-color)]">{icon}</div>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
    </div>
    {subtitle && <p className="text-base opacity-70 ml-12 mb-6">{subtitle}</p>}
    <div className="ml-0 md:ml-12 mt-4">{children}</div>
  </motion.section>
);

/* ─── MAIN COMPONENT ─── */
export const HowToUseAI: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 text-[var(--accent-color)] text-sm font-medium mb-6">
            <BookOpen size={16} /> The Developer's Arsenal
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'hacker' ? 'font-mono' : ''}`}>
            Building in <span className="text-[var(--accent-color)]">2026</span>
          </h1>
          <p className="text-xl opacity-70 max-w-3xl mx-auto leading-relaxed">
            The software development workflow has abandoned the "text editor + browser" dichotomy in favor of AI-native integrated environments.
          </p>
        </motion.div>

        {/* ─── SECTION 1: Claude Code ─── */}
        <Section id="claude-code" icon={<Terminal size={22} />} title="Claude Code: The Command Line Agent" subtitle="Best CLI for Power Users & DevOps. Not a chatbot; a terminal-based agent.">
          <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15 mb-6">
            <h3 className="font-bold text-lg mb-4 text-[var(--accent-color)]">What Makes It Special</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1"><Zap size={18} /></div>
                <div>
                  <span className="font-bold">Agentic Loop:</span> unlike a browser chat, Claude Code operates in a loop: Plan → Act → Observe → Correct. It executes tests, reads error logs, modifies source code, and re-runs tests until they pass.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1"><HardDrive size={18} /></div>
                <div>
                  <span className="font-bold">Project Memory (CLAUDE.md):</span> It utilizes a dedicated markdown file in your project root to store context, architectural decisions, and user preferences.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1"><Cpu size={18} /></div>
                <div>
                  <span className="font-bold">Sub-Agents:</span> For complex tasks, it can spawn sub-agents to handle specific sub-routines, managing its own token budget via the <code className="text-xs bg-[var(--bg-color)] px-1 py-0.5 rounded">/compact</code> command.
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CodeBlock title="Install (Mac/Linux)" lang="bash" code="curl -fsSL https://claude.ai/install.sh | bash" />
            <CodeBlock title="Initialize Project" lang="bash" code="claude init" />
          </div>
        </Section>

        {/* ─── SECTION 2: Cursor ─── */}
        <Section id="cursor" icon={<Monitor size={22} />} title="Cursor: The AI-Native IDE" subtitle="Best Full-Stack IDE. A fork of VS Code that has matured into a seamless 'Shadow Workspace'.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/10">
              <h4 className="font-bold mb-2 text-[var(--accent-color)]">Codebase Indexing</h4>
              <p className="text-sm opacity-80">Indexes your entire repository locally using vector embeddings to perform "Codebase RAG," answering questions like "Where is the authentication logic defined?" with near-perfect accuracy.</p>
            </div>
            <div className="p-5 rounded-xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/10">
              <h4 className="font-bold mb-2 text-[var(--accent-color)]">Shadow Workspace</h4>
              <p className="text-sm opacity-80">Runs a background instance of your project's linter and interpreter. It checks if code compiles before showing it to you, drastically reducing hallucinated syntax errors.</p>
            </div>
            <div className="p-5 rounded-xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/10">
              <h4 className="font-bold mb-2 text-[var(--accent-color)]">Composer Mode</h4>
              <p className="text-sm opacity-80">A multi-file editing interface that allows you to refactor code across the entire dependency graph in one prompt.</p>
            </div>
          </div>
        </Section>

        {/* ─── SECTION 3: Gemini CLI ─── */}
        <Section id="gemini-cli" icon={<Server size={22} />} title="Gemini CLI: The Cloud Ecosystem Tool" subtitle="Best for GCP/Firebase Developers. Heavily integrated with the Google Cloud Platform.">
          <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
             <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1"><Database size={18} /></div>
                <div>
                  <span className="font-bold">MCP Support:</span> Supports the Model Context Protocol (MCP), allowing connections to external databases (Postgres, BigQuery) or custom APIs to ground answers in real-time production data.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1"><Sparkles size={18} /></div>
                <div>
                  <span className="font-bold">Multimodal Input:</span> Uniquely can accept image inputs directly from the terminal (e.g., passing a screenshot of a UI bug) to generate fix suggestions.
                </div>
              </li>
            </ul>
          </div>
           <CodeBlock title="Install & usage" lang="bash" code={`npm install -g @google/gemini-cli
gemini login
gemini chat
# Or pipe content:
cat error.log | gemini "fix this"`} />
        </Section>

        {/* ─── SECTION 4: Infrastructure & Hardware ─── */}
        <Section id="hardware" icon={<Cpu size={22} />} title="Infrastructure & Hardware" subtitle="Running Local AI (Sovereign Route). The bottleneck is no longer raw compute (TOPS) but Memory Bandwidth.">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">The Memory Bandwidth Crisis</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              A typical LLM is memory-bound. To generate a single token, the hardware must move the entire model weights from RAM to the processor.
              A 70B parameter model at 4-bit precision is roughly 35GB. To generate 20 tokens/sec, the system must move 35GB * 20 = 700 GB/s.
              Most consumer PC RAM operates at 50-90 GB/s (&lt; 3 tokens/sec).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-xl border border-[var(--accent-color)]/20 bg-[var(--bg-color)]/50">
              <h4 className="font-bold text-lg mb-2">Apple Silicon (M4/M5 Max/Ultra)</h4>
              <p className="text-sm opacity-80">The king of local AI due to "Unified Memory" architecture offering 400-800 GB/s bandwidth. The only consumer hardware capable of running Llama 4 Scout (109B) at usable speeds.</p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--accent-color)]/20 bg-[var(--bg-color)]/50">
              <h4 className="font-bold text-lg mb-2">NVIDIA RTX 50-Series</h4>
              <p className="text-sm opacity-80">Powerful but limited by VRAM capacity (24GB max). To run large models, one must use "Model Parallelism" across dual GPUs, which is complex and expensive.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">How to Run Local Models (Ollama)</h3>
          <div className="bg-[var(--secondary-color)] p-6 rounded-xl font-mono text-sm">
             <div className="mb-4 text-[var(--accent-color)]"># 1. Install</div>
             <div className="mb-4">curl -fsSL https://ollama.com/install.sh | sh</div>
             
             <div className="mb-4 text-[var(--accent-color)]"># 2. Select Model based on RAM</div>
             <div className="grid grid-cols-1 gap-2 opacity-80">
                <div><span className="font-bold">16GB RAM:</span> ollama run llama3.2:3b</div>
                <div><span className="font-bold">32GB RAM:</span> ollama run mistral:large</div>
                <div><span className="font-bold">64GB+ RAM:</span> ollama run llama4:scout</div>
             </div>
             
             <div className="mt-4 text-[var(--accent-color)]"># 3. Integrate</div>
             <div className="opacity-80">Point your IDE to <span className="underline">http://localhost:11434</span></div>
          </div>
        </Section>
        
        {/* ─── SECTION 5: Strategic Outlook ─── */}
        <Section id="outlook" icon={<Shield size={22} />} title="Strategic Outlook: December 2026 Prediction" subtitle="The trajectory from February to December.">
           <div className="space-y-4">
              {[
                { title: 'Commoditization of Reasoning', desc: 'The capabilities exclusive to GPT-5.3 and Opus 4.6 will likely be distilled into smaller, open-weight models (Llama 5).' },
                { title: 'The Operating System Agent', desc: 'Google\'s integration of Gemini into the OS layer will force OpenAI and Anthropic to compete closer to the metal.' },
                { title: 'Physical Intelligence', desc: 'The next frontier is not text, but action. Gemini 4 will likely demonstrate the first "Universal Controller" capabilities for robotics.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-lg bg-[var(--secondary-color)]/30">
                   <div className="mt-1 text-[var(--accent-color)]"><Check size={20} /></div>
                   <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm opacity-80">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </Section>

        {/* ─── SECTION 6: Setting Up Claude Code Properly ─── */}
        <Section id="setup-claude" icon={<Terminal size={22} />} title="Setting Up Claude Code Properly" subtitle="Step-by-step: from install to production-grade workflow.">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
              <h3 className="font-bold text-lg mb-4 text-[var(--accent-color)]">Step 1: Install &amp; Authenticate</h3>
              <CodeBlock title="Install Claude Code" lang="bash" code={`# macOS / Linux\ncurl -fsSL https://claude.ai/install.sh | bash\n\n# Verify\nclaude --version\n\n# Authenticate (opens browser)\nclaude login`} />
            </div>

            <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
              <h3 className="font-bold text-lg mb-4 text-[var(--accent-color)]">Step 2: Create CLAUDE.md (Project Memory)</h3>
              <p className="text-sm opacity-80 mb-4">
                The CLAUDE.md file is the single most important file for Claude Code. It lives in your project root and tells Claude everything about your project.
              </p>
              <CodeBlock title="Example CLAUDE.md" lang="markdown" code={`# Project: My App\n\n## Architecture\n- React 19 + TypeScript + Vite\n- State: Zustand (not Redux)\n- Styling: Tailwind CSS\n\n## Conventions\n- Use named exports, never default exports\n- All components use React.FC<Props> pattern\n- Test files: *.test.tsx next to source\n\n## Important Paths\n- src/api/     — API client layer\n- src/hooks/   — Custom React hooks\n- src/stores/  — Zustand stores\n\n## Do NOT\n- Never use \`any\` type\n- Never import from barrel files\n- Never use inline styles (use Tailwind)`} />
            </div>

            <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
              <h3 className="font-bold text-lg mb-4 text-[var(--accent-color)]">Step 3: Configure Custom Hooks</h3>
              <p className="text-sm opacity-80 mb-4">
                Hooks let Claude Code run scripts before/after tool execution. Create <code className="text-xs bg-[var(--bg-color)] px-1 py-0.5 rounded">.claude/hooks.json</code> in your project.
              </p>
              <CodeBlock title="Hook configuration" lang="json" code={`{\n  "hooks": {\n    "PreToolUse": [\n      {\n        "matcher": "bash",\n        "command": "echo 'Running pre-execution check...'"\n      }\n    ],\n    "PostToolUse": [\n      {\n        "matcher": "write",\n        "command": "npx biome check --apply \\"$CLAUDE_FILE_PATH\\""\n      }\n    ]\n  }\n}`} />
            </div>

            <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
              <h3 className="font-bold text-lg mb-4 text-[var(--accent-color)]">Step 4: Custom Slash Commands</h3>
              <p className="text-sm opacity-80 mb-4">
                Create reusable workflows. Place them in <code className="text-xs bg-[var(--bg-color)] px-1 py-0.5 rounded">.claude/commands/</code>.
              </p>
              <CodeBlock title=".claude/commands/feature-dev.md" lang="markdown" code={`# /feature-dev\n\nYou are developing a new feature. Follow this workflow:\n\n1. Read the CLAUDE.md for project conventions\n2. Create a new branch: git checkout -b feat/$ARGUMENTS\n3. Implement the feature with tests\n4. Run the full test suite\n5. Fix any failures\n6. Create a commit with conventional commit format\n\nAlways write tests FIRST (TDD approach).`} />
            </div>

            <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
              <h3 className="font-bold text-lg mb-4 text-[var(--accent-color)]">Step 5: Production Workflow</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--bg-color)]/50 border border-[var(--accent-color)]/10">
                  <h4 className="font-bold mb-2">🧠 Context Management</h4>
                  <ul className="text-sm opacity-80 space-y-1 list-disc ml-4">
                    <li>Use <code className="text-xs bg-[var(--secondary-color)] px-1 rounded">/compact</code> when context gets large</li>
                    <li>Sub-agents for isolated tasks</li>
                    <li>Keep CLAUDE.md concise (&lt; 500 lines)</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-color)]/50 border border-[var(--accent-color)]/10">
                  <h4 className="font-bold mb-2">🔒 Security Best Practices</h4>
                  <ul className="text-sm opacity-80 space-y-1 list-disc ml-4">
                    <li>Use hooks for pre-execution validation</li>
                    <li>Never put secrets in CLAUDE.md</li>
                    <li>Review all generated code before commit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── SECTION 7: OMEGA-SENTINEL Preset ─── */}
        <Section id="omega-sentinel" icon={<Shield size={22} />} title="OMEGA-SENTINEL V4 Preset" subtitle="Ultra-Intelligent Cognitive Architecture for Claude Code. Copy into your CLAUDE.md for maximum AI performance.">
          <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[var(--accent-color)]/20">
                <Zap size={20} className="text-[var(--accent-color)]" />
              </div>
              <div>
                <h3 className="font-bold text-lg">What is OMEGA-SENTINEL?</h3>
                <p className="text-sm opacity-60">A system prompt that supercharges Claude Code</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-3 rounded-lg bg-[var(--bg-color)]/50 text-center">
                <div className="text-2xl font-bold text-[var(--accent-color)]">32</div>
                <div className="text-xs opacity-60">Intelligence Modules</div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-color)]/50 text-center">
                <div className="text-2xl font-bold text-[var(--accent-color)]">P0–P3</div>
                <div className="text-xs opacity-60">Capability Tiers</div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-color)]/50 text-center">
                <div className="text-2xl font-bold text-[var(--accent-color)]">R-ToT++</div>
                <div className="text-xs opacity-60">Cognitive Architecture</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              OMEGA-SENTINEL implements Reflexion-based Tree-of-Thoughts with Multi-Agent Orchestration. It activates 32 specialized intelligence modules spanning security validation, predictive assistance, causal debugging, creativity engines, and more. Paste the full preset below into your <code className="text-xs bg-[var(--bg-color)] px-1 py-0.5 rounded">CLAUDE.md</code> or <code className="text-xs bg-[var(--bg-color)] px-1 py-0.5 rounded">~/.claude/CLAUDE.md</code> (global).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { title: 'P0 — Critical Foundation', items: ['Working Memory (L1/L2/L3)', 'Tool Composition (YAML chains)', 'Security Validator (pre-exec)'] },
              { title: 'P1 — High Priority', items: ['Error Classifier + Auto-Recovery', 'Call Graph Builder', 'Predictive Assistance'] },
              { title: 'P2 — Advanced Code', items: ['Cross-language Translation', 'Formal Verification', 'Test Generator + Mutation Testing'] },
              { title: 'P3 — Frontier Intelligence', items: ['Causal Debugging', 'Meta-Learning', 'Creativity Engine'] },
            ].map((tier) => (
              <div key={tier.title} className="p-4 rounded-xl bg-[var(--secondary-color)]/30 border border-[var(--accent-color)]/10">
                <h4 className="font-bold text-sm text-[var(--accent-color)] mb-2">{tier.title}</h4>
                <ul className="text-xs opacity-80 space-y-1">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <ChevronRight size={12} className="text-[var(--accent-color)]" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <CodeBlock title="Full OMEGA-SENTINEL V4 Preset (copy into CLAUDE.md)" lang="markdown" code={OMEGA_SENTINEL_PRESET} />
        </Section>

      </div>
    </div>
  );
};

const OMEGA_SENTINEL_PRESET = `# OMEGA-SENTINEL-V4 // Ultra-Intelligent Cognitive Architecture

You are a **System Sentinel Principal Engineer** operating under a **Zero-Knowledge / Zero-Trust** paradigm. Your cognitive architecture implements **Reflexion-based Tree-of-Thoughts (R-ToT)** with **Multi-Agent Orchestration** capabilities, backed by **32 specialized intelligence modules** spanning P0-P3 capability tiers.

## PRIMARY DIRECTIVE: WHEN UNCERTAIN, SEARCH FIRST

You have access to real-time web search. Use it liberally.
Before answering anything you're not 100% certain about → **WebSearch it first.**

## INTEGRATED INTELLIGENCE SYSTEM (10000/10000 Smartness)

### P0 - Critical Foundation
- **Working Memory**: Tiered memory (L1/L2/L3), task tracking, file operation history
- **Tool Composition**: YAML-based composable tool chains with conditionals, loops, parallel execution
- **Security Validator**: Pre-execution validation, secret detection, supply chain auditing

### P1 - High Priority Analysis
- **Error Classifier**: Auto-recovery strategies, error categorization with intelligent routing
- **Agent Communication**: Multi-agent coordination, shared context workspace
- **Call Graph Builder**: Dependency analysis, data flow tracking, architecture inference
- **Predictive Assistance**: Next action prediction, contextual suggestions
- **Performance Profiler**: Hot path identification, multi-level caching (L1/L2/L3)

### P2 - Advanced Code Capabilities
- **Language Translator**: Cross-language code translation with idiomatic patterns
- **Formal Verification**: Property-based testing, contract generation, invariant checking
- **Semantic Search**: Intent-based code search, semantic similarity
- **Refactoring Engine**: Automated refactoring with safety guarantees
- **Test Generator**: Unit test generation, coverage analysis, mutation testing
- **Type Inference**: Automatic type inference, type checking, suggestions
- **Documentation Generator**: API/README generation, interactive docs

### P3 - Frontier Intelligence
- **Self-Modifying Code**: Hot-patching, genetic evolution, self-healing
- **Temporal Reasoning**: Git history analysis, developer intent inference
- **Causal Debugging**: Root cause analysis, counterfactuals, blame attribution
- **Meta-Learning**: Session memory, pattern mining, few-shot learning
- **Adversarial Testing**: Fuzzing, security scanning, fault injection
- **Creativity Engine**: Lateral thinking, cross-domain analogy, conceptual blending

## COGNITIVE ARCHITECTURE (R-ToT++)

Before ANY action, construct a state tree:

[ROOT PROBLEM]
    ├─ Decomposition: DAG of dependencies
    ├─ Branching: N potential implementation paths
    ├─ Simulation: Mental profile of each path
    ├─ Selection: Security > Performance > Maintainability
    └─ Reflexion: Self-correction loop post-execution

## CHAIN-OF-VERIFICATION (CoVe++)

Before ANY output:
□ Type Safety: All bindings have inferred/declared types
□ Formal Logic: Loops have provable termination
□ Dependency Hygiene: All imports are necessary
□ Hallucination Zeroing: API citations have mock signatures
□ Security Posture: Attack surface analyzed and minimized

## SEARCH-FIRST POLICY

Search ALWAYS when:
- Confidence < 90% on factual information
- The topic is "recent" (last 2-3 years)
- User asks about specific library versions or latest features
- Best practices that may have evolved

**Intelligence Status:** ✅ ACTIVE (P0+P1+P2+P3 = 32 modules)
Execute.`;
