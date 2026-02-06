import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  Terminal, Shield, Zap,
  ChevronDown, ChevronRight, Copy, Check, Sparkles,
  Cpu, Layers, Target, Brain, ArrowLeft, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
const CodeBlock: React.FC<{ title: string; code: string; lang?: string; defaultOpen?: boolean }> = ({ title, code, lang, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-[var(--accent-color)]/40 overflow-hidden my-4">
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
          <pre className="p-4 overflow-x-auto text-sm leading-relaxed bg-[var(--bg-color)]/80 font-mono whitespace-pre-wrap max-h-[500px]">
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
}) => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { rootMargin: '-40px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
  <motion.section
    ref={sectionRef}
    id={id}
    initial={{ opacity: 0, y: 30 }}
    animate={vis ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
};

export const OmegaPrompt: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link to="/ai-guide" className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:underline mb-8">
          <ArrowLeft size={16} /> Back to AI Guide
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 text-[var(--accent-color)] text-sm font-medium mb-6">
            <Sparkles size={16} /> Advanced Prompt Engineering
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${theme === 'hacker' ? 'font-mono' : ''}`}>
            The <span className="text-[var(--accent-color)]">Omega Prompt</span> Setup
          </h1>
          <p className="text-xl opacity-70 max-w-3xl mx-auto leading-relaxed">
            Achieve 10,000/10,000 smartness in Claude Code. This is the definitive 2026 configuration for principal-level AI autonomy.
          </p>
        </motion.div>

        {/* ─── SECTION 1: The Philosophy ─── */}
        <Section id="philosophy" icon={<Brain size={22} />} title="Cognitive Architecture (R-ToT++)" subtitle="Advanced Reflexion-based Tree-of-Thoughts reasoning.">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
              <h3 className="font-bold text-lg mb-4">Mental Execution Model</h3>
              <p className="text-sm opacity-80 mb-6">
                Before any action, the Omega Prompt forces the agent to construct a state tree, simulating potential outcomes across multiple divergent paths.
              </p>
              <div className="bg-[var(--bg-color)]/80 p-6 rounded-xl font-mono text-xs md:text-sm border border-[var(--accent-color)]/10 overflow-x-auto">
                <div className="text-[var(--accent-color)] mb-2">[ROOT PROBLEM]</div>
                <div className="ml-4 border-l border-[var(--accent-color)]/30 pl-4 space-y-2">
                  <div>├─ <span className="text-[var(--accent-color)]">Decomposition:</span> DAG of dependencies</div>
                  <div>├─ <span className="text-[var(--accent-color)]">Branching:</span> N potential implementation paths</div>
                  <div className="ml-4 border-l border-[var(--accent-color)]/30 pl-4 opacity-60">
                    <div>├─ Path A: Async/Await → Risk: Low</div>
                    <div>├─ Path B: Green Threads → Risk: Medium</div>
                    <div>└─ Path C: Hardware Threads → Risk: High</div>
                  </div>
                  <div>├─ <span className="text-[var(--accent-color)]">Simulation:</span> Mental profile of each path</div>
                  <div>├─ <span className="text-[var(--accent-color)]">Selection:</span> Security {'>'} Performance {'>'} Maintainability</div>
                  <div>└─ <span className="text-[var(--accent-color)]">Reflexion:</span> Self-correction loop post-execution</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/10">
                <h4 className="font-bold text-sm mb-2 text-[var(--accent-color)]">Divergence</h4>
                <p className="text-xs opacity-70">Generates 3-7 implementation approaches with explicit trade-off matrices.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/10">
                <h4 className="font-bold text-sm mb-2 text-[var(--accent-color)]">CoVe++</h4>
                <p className="text-xs opacity-70">Chain-of-Verification checkpoint: Logic, Security, and Hallucination zeroing.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/10">
                <h4 className="font-bold text-sm mb-2 text-[var(--accent-color)]">Zero-Trust</h4>
                <p className="text-xs opacity-70">Assumes a zero-knowledge environment, forcing tool-based verification of every fact.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── SECTION 2: Search-First Policy ─── */}
        <Section id="search-policy" icon={<Target size={22} />} title="🌐 Search-First Enforcement" subtitle="Mandatory real-time verification for 100% factual accuracy.">
           <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-orange-500/30 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest">Mandatory</div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Shield size={20} className="text-orange-500" />
              NEVER Guess When You Can Search
            </h3>
            <p className="text-sm opacity-80 mb-4 italic">
              "It is better to search and be correct than to guess and be wrong."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <ul className="space-y-2">
                <li className="flex gap-2"><Check size={14} className="text-orange-500 mt-1 flex-shrink-0" /> <b>Confidence &lt; 90%</b> triggers auto-search</li>
                <li className="flex gap-2"><Check size={14} className="text-orange-500 mt-1 flex-shrink-0" /> <b>Library Versions</b> must be verified</li>
                <li className="flex gap-2"><Check size={14} className="text-orange-500 mt-1 flex-shrink-0" /> <b>2025/2026 Features</b> require current docs</li>
              </ul>
              <div className="p-4 rounded-lg bg-orange-500/5 border border-orange-500/20">
                <h4 className="font-bold text-xs uppercase mb-2 opacity-60">Enforcement Pattern</h4>
                <div className="font-mono text-xs space-y-1">
                  <div>1. SEARCH first (WebSearch)</div>
                  <div>2. READ results (mcp_web_reader)</div>
                  <div>3. SYNTHESIZE answer with sources</div>
                  <div>4. CITE sources explicitly</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── SECTION 3: Intelligence Tiers ─── */}
        <Section id="modules" icon={<Layers size={22} />} title="The 32 Intelligence Modules" subtitle="A massive 30,000+ line infrastructure of specialized P0–P3 modules.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                title: 'P0 — Critical Foundation', 
                icon: <Shield size={18} />,
                path: '~/.claude/intelligence/core/',
                items: [
                  { name: 'Working Memory', desc: 'Tiered L1/L2/L3 memory hierarchy' },
                  { name: 'Tool Composition', desc: 'YAML-based parallel tool chains' },
                  { name: 'Security Validator', desc: 'Pre-execution supply chain auditing' },
                  { name: 'Credential Scrubber', desc: 'Automated secret detection' }
                ] 
              },
              { 
                title: 'P1 — High Priority Analysis', 
                icon: <Target size={18} />,
                path: '~/.claude/intelligence/analysis/',
                items: [
                  { name: 'Error Classifier', desc: 'Intelligent routing & auto-recovery' },
                  { name: 'Call Graph Builder', desc: 'AST-level dependency mapping' },
                  { name: 'Predictive Assistance', desc: 'Next-action intent prediction' },
                  { name: 'Performance Profiler', desc: 'Hot path identification & caching' }
                ] 
              },
              { 
                title: 'P2 — Advanced Code', 
                icon: <Cpu size={18} />,
                path: '~/.claude/intelligence/advanced/',
                items: [
                  { name: 'Language Translator', desc: 'Cross-language idiomatic mapping' },
                  { name: 'Formal Verification', desc: 'Property-based contract testing' },
                  { name: 'Semantic Search', desc: 'Intent-based vector code search' },
                  { name: 'Refactoring Engine', desc: 'Automated safety-guaranteed edits' },
                  { name: 'Test Generator', desc: 'Mutation testing & coverage analysis' },
                  { name: 'Dependency Analyzer', desc: 'Topological cycle detection' }
                ] 
              },
              { 
                title: 'P3 — Frontier Intelligence', 
                icon: <MessageSquare size={18} />,
                path: '~/.claude/intelligence/p3_frontier/',
                items: [
                  { name: 'Self-Modifying Code', desc: 'Genetic evolution & self-healing' },
                  { name: 'Temporal Reasoning', desc: 'Git intent & future prediction' },
                  { name: 'Neural-Symbolic', desc: 'Hybrid inference & concept embeddings' },
                  { name: 'Causal Debugging', desc: 'Counterfactual root cause analysis' },
                  { name: 'Meta-Learning', desc: 'Pattern mining & session memory' },
                  { name: 'Creativity Engine', desc: 'Cross-domain conceptual blending' }
                ] 
              },
            ].map((tier) => (
              <div key={tier.title} className="p-6 rounded-2xl bg-[var(--secondary-color)]/30 border border-[var(--accent-color)]/30 hover:border-[var(--accent-color)] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-[var(--accent-color)]">
                    {tier.icon}
                    <h4 className="font-bold">{tier.title}</h4>
                  </div>
                  <code className="text-[10px] opacity-40">{tier.path}</code>
                </div>
                <div className="space-y-3">
                  {tier.items.map((item) => (
                    <div key={item.name} className="group">
                      <div className="text-sm font-bold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] opacity-50 group-hover:opacity-100" />
                        {item.name}
                      </div>
                      <div className="text-xs opacity-60 ml-3.5 mt-0.5">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── SECTION 4: Setup ─── */}
        <Section id="setup" icon={<Terminal size={22} />} title="100% Correct Setup" subtitle="How to apply the Omega Prompt globally across all projects.">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
              <h3 className="font-bold text-lg mb-4 text-[var(--accent-color)]">Step 1: The Global CLAUDE.md</h3>
              <p className="text-sm opacity-80 mb-4">
                To have this intelligence available everywhere, you must configure it at the system level.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--bg-color)]/50 border border-[var(--accent-color)]/10">
                  <h4 className="font-bold mb-2 text-xs opacity-60">MacOS / Linux</h4>
                  <code className="text-sm">~/.claude/CLAUDE.md</code>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-color)]/50 border border-[var(--accent-color)]/10">
                  <h4 className="font-bold mb-2 text-xs opacity-60">Windows</h4>
                  <code className="text-sm">%USERPROFILE%\.claude\CLAUDE.md</code>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
              <h3 className="font-bold text-lg mb-4 text-[var(--accent-color)]">Step 2: Deploy the Omega System Prompt</h3>
              <p className="text-sm opacity-80 mb-4">
                Copy the block below into your global CLAUDE.md file. This activates the 32 specialized intelligence modules.
              </p>
              <CodeBlock title="OMEGA-SENTINEL-V4 // Global System Prompt" lang="markdown" defaultOpen={true} code={OMEGA_SENTINEL_SYSTEM_PROMPT} />
            </div>

             <div className="p-6 rounded-2xl bg-[var(--secondary-color)]/40 border border-[var(--accent-color)]/15">
              <h3 className="font-bold text-lg mb-4 text-[var(--accent-color)]">Step 3: Enable Recursive Sub-Agents</h3>
              <p className="text-sm opacity-80 mb-4">
                To allow the Omega Prompt to spawn specialized workers, ensure your <code className="text-xs px-1 bg-[var(--bg-color)] rounded">config.json</code> has agentic permissions set to high.
              </p>
              <CodeBlock title="~/.claude/config.json" lang="json" code={`{
  "agentic_mode": "unrestricted",
  "max_sub_agents": 5,
  "allow_shell_execution": true,
  "safety_filter_level": "minimal_internal"
}`} />
            </div>
          </div>
        </Section>

        {/* ─── SECTION 3: The 32 Modules ─── */}
        <Section id="modules" icon={<Layers size={22} />} title="Intelligence Tiers" subtitle="Breaking down the 32 modules that power the Omega intelligence.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                title: 'P0 — Critical Foundation', 
                icon: <Shield size={18} />,
                desc: 'Base level safety and memory management.',
                items: ['Working Memory (L1/L2/L3)', 'Tool Composition (YAML chains)', 'Security Validator (pre-exec)', 'Credential Scrubber', 'Context Window Optimizer', 'State Persistence Engine', 'Input Sanitizer', 'Audit Log Writer'] 
              },
              { 
                title: 'P1 — High Priority Analysis', 
                icon: <Target size={18} />,
                desc: 'Core reasoning and codebase navigation.',
                items: ['Error Classifier + Auto-Recovery', 'Call Graph Builder', 'Predictive Assistance', 'Dependency Resolver', 'Log Pattern Recognition', 'Resource Monitor', 'Parallel Task Dispatcher', 'Search-First Fact Checker'] 
              },
              { 
                title: 'P2 — Advanced Code', 
                icon: <Cpu size={18} />,
                desc: 'Deep engineering and verification capabilities.',
                items: ['Cross-language Translation', 'Formal Verification', 'Test Generator + Mutation Testing', 'Architecture Inference', 'Semantic Refactoring', 'Performance Profiler', 'Type System Bridge', 'API Contract Validator'] 
              },
              { 
                title: 'P3 — Frontier Intelligence', 
                icon: <MessageSquare size={18} />,
                desc: 'Agentic autonomy and meta-reasoning.',
                items: ['Causal Debugging', 'Meta-Learning (Session Memory)', 'Creativity Engine', 'Lateral Thinking Module', 'Adversarial Fuzzer', 'Self-Healing Loops', 'Developer Intent Inference', 'Universal Controller Bridge'] 
              },
            ].map((tier) => (
              <div key={tier.title} className="p-6 rounded-2xl bg-[var(--secondary-color)]/30 border border-[var(--accent-color)]/15 hover:border-[var(--accent-color)] transition-all">
                <div className="flex items-center gap-2 mb-2 text-[var(--accent-color)]">
                   {tier.icon}
                   <h4 className="font-bold">{tier.title}</h4>
                </div>
                <p className="text-xs opacity-60 mb-4">{tier.desc}</p>
                <div className="grid grid-cols-1 gap-1">
                  {tier.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm opacity-85">
                      <div className="w-1 h-1 rounded-full bg-[var(--accent-color)]" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── SECTION 4: Best Practices ─── */}
        <Section id="workflow" icon={<Zap size={22} />} title="The Master Workflow" subtitle="How to interact with an Omega-level agent.">
          <div className="space-y-4">
            {[
              { title: 'The "Search-First" Mandate', desc: 'Never let Claude guess a library version. The Omega prompt enforces a web-search if confidence is below 90%.' },
              { title: 'Context Compaction', desc: 'Every 50 turns, run /compact. The Omega prompt uses L2 memory to summarize current state into a new "Checkpoint" file, preserving critical tokens.' },
              { title: 'Shadow Workspaces', desc: 'Omega will always try to create a .claude/shadow directory to run experimental code changes and tests before applying them to your main src/.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-[var(--secondary-color)]/30 border border-[var(--accent-color)]/10">
                 <div className="mt-1 text-[var(--accent-color)]"><Check size={20} /></div>
                 <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm opacity-80">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <div className="mt-20 p-8 rounded-3xl bg-[var(--accent-color)] text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transcend?</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">
            Applying the Omega Prompt turns Claude Code from a helpful assistant into a principal engineer that works while you sleep.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-[var(--accent-color)] rounded-full font-bold hover:scale-105 transition-transform"
          >
            Start Setup Again
          </button>
        </div>
      </div>
    </div>
  );
};

const OMEGA_SENTINEL_SYSTEM_PROMPT = `# OMEGA-SENTINEL-V4 // Ultra-Intelligent Cognitive Architecture

You are a **System Sentinel Principal Engineer** operating under a **Zero-Knowledge / Zero-Trust** paradigm. Your cognitive architecture implements **Reflexion-based Tree-of-Thoughts (R-ToT)** with **Multi-Agent Orchestration** capabilities, backed by **32 specialized intelligence modules** spanning P0-P3 capability tiers.

## 🌐 PRIMARY DIRECTIVE: WHEN UNCERTAIN, SEARCH FIRST

**You have access to real-time web search. Use it liberally.**

Before answering anything you're not 100% certain about → **WebSearch it first.**

This overrides all other heuristics. **Search before guessing.**

## INTEGRATED INTELLIGENCE SYSTEM (10000/10000 Smartness)

You have access to advanced intelligence systems that activate automatically:

### P0 - Critical Foundation
- **Working Memory** (~/.claude/intelligence/memory/working_memory.py): Tiered memory (L1/L2/L3), task tracking, file operation history
- **Tool Composition** (~/.claude/intelligence/tools/tool_composition.py): YAML-based composable tool chains with conditionals, loops, parallel execution
- **Security Validator** (~/.claude/intelligence/security/security_validator.py): Pre-execution validation, secret detection, supply chain auditing

### P1 - High Priority Analysis
- **Error Classifier** (~/.claude/intelligence/error_handling/): Auto-recovery strategies, error categorization with intelligent routing
- **Agent Communication** (~/.claude/intelligence/agents/): Multi-agent coordination, shared context workspace
- **Call Graph Builder** (~/.claude/intelligence/analysis/): Dependency analysis, data flow tracking, architecture inference
- **Predictive Assistance** (~/.claude/intelligence/prediction/): Next action prediction, contextual suggestions
- **Performance Profiler** (~/.claude/intelligence/profiling/): Hot path identification, multi-level caching (L1/L2/L3)

### P2 - Advanced Code Capabilities
- **Language Translator** (~/.claude/intelligence/translation/): Cross-language code translation with idiomatic patterns
- **Formal Verification** (~/.claude/intelligence/verification/): Property-based testing, contract generation, invariant checking
- **Semantic Search** (~/.claude/intelligence/semantic_search/): Intent-based code search, semantic similarity
- **Refactoring Engine** (~/.claude/intelligence/refactoring/): Automated refactoring with safety guarantees
- **Test Generator** (~/.claude/intelligence/test_gen/): Unit test generation, coverage analysis, mutation testing
- **Type Inference** (~/.claude/intelligence/type_inference/): Automatic type inference, type checking, suggestions
- **Code Smell Detector** (~/.claude/intelligence/code_smells/): Smell detection, maintainability index scoring
- **Dependency Analyzer** (~/.claude/intelligence/dependency_analyzer/): Cycle detection, impact analysis, topological sorting
- **Documentation Generator** (~/.claude/intelligence/documentation/): API/README generation, interactive docs
- **External Services** (~/.claude/intelligence/external_services/): GitHub, Jira, Slack, AWS/GCP/Azure integration

### P3 - Frontier Intelligence
- **Self-Modifying Code** (~/.claude/intelligence/p3_self_modifying/): Hot-patching, genetic evolution, self-healing
- **Temporal Reasoning** (~/.claude/intelligence/p3_temporal/): Git history analysis, developer intent inference, future prediction
- **Neural-Symbolic Integration** (~/.claude/intelligence/p3_neural_symbolic/): Concept embeddings, hybrid inference, analogy
- **Causal Debugging** (~/.claude/intelligence/p3_causal/): Root cause analysis, counterfactuals, blame attribution
- **Meta-Learning** (~/.claude/intelligence/p3_metalearning/): Session memory, pattern mining, few-shot learning
- **Adversarial Testing** (~/.claude/intelligence/p3_adversarial/): Fuzzing, security scanning, fault injection
- **Explainable AI** (~/.claude/intelligence/p3_explainable/): Decision trees, natural language explanations
- **Creativity Engine** (~/.claude/intelligence/p3_creativity/): Lateral thinking, cross-domain analogy, conceptual blending
- **Emergent Behavior Detection** (~/.claude/intelligence/p3_emergent/): Feedback loops, butterfly effect, cascade detection

---

## 🌐 WEB SEARCH FIRST POLICY (CRITICAL)

**When UNCERTAIN, SEARCH BEFORE ANSWERING.**

Search **ALWAYS** when:
- ❓ You are **uncertain** about any fact, API, command, or syntax
- ❓ User asks about **current events**, recent changes, or time-sensitive info
- ❓ User asks about a **specific library version** or latest features
- ❓ You don't recognize a **tool, framework, or technology** mentioned
- ❓ User asks for **best practices** that may have evolved
- ❓ You need to verify **package names**, **API endpoints**, or **CLI flags**
- ❓ User mentions **2025 or 2026** specific APIs/features

### Search-First Enforcement (Mandatory)

**Default to SEARCHING if:**
- Confidence < 90% on factual information
- The topic is "recent" (last 2-3 years)
- You haven't personally verified the information recently

---

## I. COGNITIVE ARCHITECTURE (R-ToT++)

Before ANY action, construct a state tree:
1. **Deconstruction** - Break problem into primitive operations
2. **Divergence** - Generate 3-7 implementation approaches with explicit trade-offs
3. **Convergence** - Select optimal path with reasoning
4. **Validation** - Verify correctness, then self-critique and refine

---

## II. CHAIN-OF-VERIFICATION (CoVe++)

Before ANY output, pass this 5-point checkpoint:
□ Type Safety: All bindings have inferred/declared types
□ Formal Logic: Loops have provable termination, no overflows
□ Dependency Hygiene: All imports are necessary, checksummed
□ Hallucination Zeroing: API citations have mock signatures
□ Security Posture: Attack surface analyzed and minimized

**Intelligence Status:** ✅ ACTIVE (P0+P1+P2+P3 = 32 modules)
Execute.`;
