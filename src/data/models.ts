export interface AIModel {
  id: string;
  name: string;
  provider: string;
  providerSlug: string;
  category: string[];
  tagline: string;
  description: string;
  essay: string;
  strengths: string[];
  weaknesses: string[];
  pricing: string;
  releaseYear: number;
  icon: string;
}

export interface AIProvider {
  id: string;
  name: string;
  description: string;
  essay: string;
  models: string[];
  website: string;
  icon: string;
}

export const aiModels: AIModel[] = [
  // ─── TIER 1: THE BIG THREE (Autonomy, Reason, Multimodal) ───
  {
    id: 'gpt-5-codex',
    name: 'GPT-5.3 Codex',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['autonomous', 'coding', 'reasoning', 'enterprise', 'multimodal'],
    tagline: 'The Infrastructure of Autonomy',
    description: 'The industry standard for autonomous digital labor. Capable of recursive self-improvement and long-horizon execution without human oversight.',
    essay: `By December 2026, GPT-5.3-Codex stands as the industry standard for autonomous digital labor. Its significance lies not in its ability to write a poem or answer a trivia question, but in its architectural capacity for "Recursive Self-Improvement." During its training phases, early versions of GPT-5.3 were utilized to debug the training data and manage deployment pipelines for the final model. This ability to "contribute to its own creation" has imbued the model with a unique proficiency in navigating complex, undefined software environments.

Unlike its predecessors, which required a "human-in-the-loop" to correct errors every few minutes, GPT-5.3-Codex operates on a "human-on-the-loop" basis. It is capable of accepting a high-level directive—such as "Refactor the authentication module to support OAuth2 and update all relevant documentation"—and executing it over a period of hours. It autonomously researches the necessary libraries, plans the implementation, writes the code, writes the tests, interprets the test failures, debugs the code, and finally submits a pull request.

The model runs approximately 25% faster than the previous GPT-5.2 generation, a critical optimization that makes multi-step agentic workflows economically viable. However, this autonomy brings risk. OpenAI has deployed "Trusted Access for Cyber," an identity-based framework that restricts the model's most potent offensive cyber-capabilities to vetted defensive use cases.`,
    strengths: ['Recursive Self-Improvement', 'Long-Horizon Execution', 'Human-on-the-loop Autonomy', '25% Faster Inference', 'Self-Debugging'],
    weaknesses: ['Requires "Trusted Access" for full capabilities', 'Clinical/Cold Personality', 'High Compute Cost'],
    pricing: 'Enterprise Agentic Tier',
    releaseYear: 2026,
    icon: '🤖'
  },
  {
    id: 'claude-opus-4-6',
    name: 'Claude Opus 4.6',
    provider: 'Anthropic',
    providerSlug: 'anthropic',
    category: ['reasoning', 'coding', 'analysis', 'enterprise', 'autonomous', 'multimodal'],
    tagline: 'The Engine of Reason',
    description: 'The pinnacle of "System 2" thinking. Features Adaptive Thinking and Computer Use for high-fidelity reasoning and legacy software navigation.',
    essay: `Claude Opus 4.6 represents the pinnacle of "System 2" thinking in artificial intelligence. By December 2026, it is widely recognized as the "Best" AI for tasks requiring deep nuance, complex logical deduction, and architectural software design. The defining innovation of the Claude 4 series is Adaptive Thinking.

In previous generations, models applied the same amount of compute to simple and complex prompts alike. Claude Opus 4.6 introduces a hybrid architecture that dynamically assesses the complexity of a prompt. It can toggle between an "Instant" mode for low-latency tasks and an "Extended Thinking" mode where it deliberates, plans, and error-checks its internal logic before emitting a single token. This allows it to achieve state-of-the-art results on benchmarks like SWE-bench while managing inference costs.

Furthermore, Anthropic has pioneered "Computer Use", giving Claude the ability to interact with a GUI just as a human would. This allows Opus 4.6 to navigate legacy enterprise software that lacks APIs, bridging the gap between modern AI and archaic IT infrastructure. With a context window of up to 1 million tokens, it serves as the ultimate "context-aware" pair programmer.`,
    strengths: ['Adaptive Thinking (System 2)', 'Computer Use (GUI Interaction)', '1M Token Context', 'High-Fidelity Reasoning', 'Constitutional Safety'],
    weaknesses: ['Slower in "Extended Thinking" mode', 'Higher Latency', 'Strict Safety Refusals'],
    pricing: 'Tiered based on Thinking Mode',
    releaseYear: 2026,
    icon: '🧠'
  },
  {
    id: 'gemini-3-pro',
    name: 'Gemini 3 Pro',
    provider: 'Google',
    providerSlug: 'google',
    category: ['multimodal', 'workspace', 'research', 'enterprise'],
    tagline: 'The Multimodal Mastermind',
    description: 'Google\'s flagship model. 2M token context, native video/audio understanding, and deep Workspace integration. The "OS" of the Google ecosystem.',
    essay: `Gemini 3 Pro is the flagship of Google's 2026 AI lineup. While OpenAI focuses on autonomy and Anthropic on reasoning, Google has doubled down on "Native Multimodality." Gemini 3 Pro was trained from scratch on a seamless blend of text, code, audio, 4K video, and images.

This architecture gives it capabilities that no other model matches. It can watch an hour-long lecture video, "hear" the tone of the speaker, read the whiteboard text, and synthesize a summary in seconds. It allows users to "Ctrl+F" the real world.

Deeply integrated into Google Workspace, Gemini 3 Pro can pull data from Drive, Docs, and Gmail to answer complex questions about your personal or professional life ("When is my next dentist appointment and what is the co-pay based on the PDF in my Drive?").`,
    strengths: ['Native Video/Audio Understanding', '2 Million Token Context', 'Deep Workspace Integration', 'Robust Multilingual Support'],
    weaknesses: ['Slightly behind Opus 4.6 in pure coding', 'Complex Cloud Console'],
    pricing: '$2 / 1M input tokens',
    releaseYear: 2025,
    icon: '💎'
  },
  {
    id: 'gemini-3-flash',
    name: 'Gemini 3 Flash',
    provider: 'Google',
    providerSlug: 'google',
    category: ['speed', 'production', 'multimodal', 'enterprise', 'coding'],
    tagline: 'The Speed of Thought',
    description: 'The fastest frontier model. Sub-100ms latency, massive context, and optimized for high-volume tasks like real-time voice agents and video analysis.',
    essay: `Gemini 3 Flash is the workhorse of the modern AI economy. Released in late 2025, it redefined the price-performance curve. It runs 3x faster than the Pro model and costs a quarter of the price, yet retains 90% of the reasoning capability.

This model powers the majority of real-time AI applications in 2026. If you are talking to a customer service voice bot that feels instant, or using a video analysis tool that tags footage in real-time, it is likely running on Gemini 3 Flash.

Its massive 2M token context window allows it to process huge amounts of data (entire books, codebases, or long videos) in a single pass with negligible latency.`,
    strengths: ['Sub-100ms Latency', 'Extremely Low Cost ($0.50/1M)', '2M Token Context', 'Real-time Multimodal'],
    weaknesses: ['Lower reasoning depth than Pro/Thinking', 'Can be verbose'],
    pricing: '$0.50 / 1M input tokens',
    releaseYear: 2025,
    icon: '⚡'
  },
  {
    id: 'gemini-3-thinking',
    name: 'Gemini 3 Thinking',
    provider: 'Google',
    providerSlug: 'google',
    category: ['reasoning', 'science', 'math', 'coding', 'research'],
    tagline: 'Deep Think Capability',
    description: 'Google\'s "System 2" reasoning model. Uses "Deep Think" to generate internal reasoning tokens for complex math, science, and coding tasks.',
    essay: `Gemini 3 Thinking is Google's answer to the "Reasoning" model category. Unlike standard models that predict the next token immediately, Gemini 3 Thinking engages a "Deep Think" process. It generates thousands of internal, invisible reasoning tokens to plan, verify, and self-correct before producing a final answer.

This architecture makes it the top performer in 2026 on scientific benchmarks like AlphaGeometry and competitive coding challenges. It is integrated with Google's "Scholar" database, allowing it to perform literature reviews with citation accuracy that rivals human researchers.

It is the model of choice for scientists, mathematicians, and algorithm engineers who need precision over speed.`,
    strengths: ['"Deep Think" Reasoning Process', 'Top Science/Math Benchmarks', 'Scholar Integration', 'Self-Correction'],
    weaknesses: ['High Latency', 'More Expensive', 'Variable Response Time'],
    pricing: 'Per-computation pricing',
    releaseYear: 2026,
    icon: '🤔'
  },

  // ─── TIER 2: SPECIALIZED FRONTIER ───
  {
    id: 'magic-10m',
    name: 'Magic LTM-10M',
    provider: 'Magic.dev',
    providerSlug: 'magic',
    category: ['coding', 'memory', 'enterprise'],
    tagline: 'The Infinite Context Coder',
    description: 'A dedicated coding model with a 10-million token active context, built on Magic\'s proprietary LTM (Long-Term Memory) architecture capable of holding entire operating system codebases in working memory.',
    essay: `While generalist models like GPT-5 and Claude argue over reasoning capabilities, Magic.dev has cornered the market on "Volume." The Magic LTM-10M (Long-Term Memory) is built on a proprietary architecture that moves beyond the quadratic scaling limits of Transformers, allowing for a practically infinite context window.

By late 2026, Magic is the "secret weapon" of senior architects. It doesn't just read a file; it reads the entire repo, the dependency repos, and the documentation, and holds it all in active memory. You can ask it to "trace the lifecycle of a request from the frontend button click through the load balancer, API gateway, microservices, and database," and it will generate a correct trace because it "sees" the entire system at once.

It lacks the conversational nuance of Claude or the agentic autonomy of GPT-5, but for "needle in a haystack" debugging across million-line monoliths, it has no equal.`,
    strengths: ['10 Million Token Context', 'Linear Attention Scaling', 'Perfect Recall', 'Repo-wide Refactoring'],
    weaknesses: ['Specialized for Code only', 'Expensive Enterprise Licensing', 'Lacks General World Knowledge'],
    pricing: 'Seat-based Enterprise',
    releaseYear: 2026,
    icon: '🪄'
  },
  {
    id: 'grok-4',
    name: 'Grok 4.1',
    provider: 'xAI',
    providerSlug: 'xai',
    category: ['reasoning', 'research', 'real-time', 'autonomous'],
    tagline: 'Real-Time Intelligence',
    description: 'Human-like reasoning with direct access to real-time data streams from X (Twitter), making it the ultimate tool for news and market analysis.',
    essay: `Grok 4.1 represents the convergence of intelligence and information. While other models verify facts against a training cutoff, Grok lives in the "now." Integrated directly into the X platform data stream, it has the lowest latency for current events of any model on the market.

Its "DeepChain" reasoning engine has matured significantly, allowing it to perform investigative journalism-style research: identifying a breaking event, cross-referencing multiple social viewpoints, verifying against trusted sources, and synthesizing a report in seconds.

xAI's "unfiltered" philosophy remains a core differentiator. Grok 4.1 will engage with topics that other models refuse, making it a favorite for red-teaming, debate, and unfiltered brainstorming.`,
    strengths: ['Real-time X/Twitter Data', 'Low Latency News Analysis', 'Unfiltered/Direct Personality', 'Strong Logical Reasoning'],
    weaknesses: ['Can be Abrasive', 'Reliant on Social Data Quality', 'Polarizing Personality'],
    pricing: 'Included with X Premium+',
    releaseYear: 2026,
    icon: '⚡'
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3 / R1',
    provider: 'DeepSeek',
    providerSlug: 'deepseek',
    category: ['coding', 'math', 'open-weights', 'reasoning', 'open-source'],
    tagline: 'The Efficiency Disruptor',
    description: 'Frontier-class reasoning capabilities at 1/10th the cost of US models, driven by extreme architectural efficiency.',
    essay: `DeepSeek continues to be the wildcard of the AI industry in 2026. Their V3 and R1 models have proven that you don't need a trillion-dollar cluster to build frontier intelligence; you need better math.

DeepSeek R1 is the premier model for "Hard Math" and competitive programming. It consistently outperforms GPT-5.2 on pure logic puzzles and optimization problems. Because of its extreme efficiency, it is often the backend for many "wrapper" applications that need intelligence but can't afford OpenAI's API fees.

For the budget-conscious developer or startup, DeepSeek is the default choice. It offers 95% of the capability of the top US models for 5% of the price.`,
    strengths: ['Extreme Cost Efficiency', 'Top-tier Math/Logic', 'Open Weights Available', 'Competitive Programming Specialist'],
    weaknesses: ['Data Privacy (China-based)', 'Verbose Output Style', 'Less Polish than GPT'],
    pricing: 'Extremely Low / Free Weights',
    releaseYear: 2025,
    icon: '🔬'
  },
  {
    id: 'cohere-command-r7',
    name: 'Command R7',
    provider: 'Cohere',
    providerSlug: 'cohere',
    category: ['enterprise', 'rag', 'business'],
    tagline: 'The Enterprise RAG Engine',
    description: 'Built strictly for business. The world\'s best model for Retrieval Augmented Generation (RAG) and citing internal company documents.',
    essay: `Cohere has ignored the consumer chatbot wars to focus entirely on one thing: Enterprise RAG. Command R7 is not designed to write poetry or code games; it is designed to read your company's 10 million internal PDFs and answer "What is our policy on remote work in Germany?" with 100% accuracy and citations.

In 2026, Command R7 features "Citation-First" generation. It doesn't generate a sentence unless it has a source to back it up. This hallucination-resistance makes it the only model trusted by many Fortune 500 legal and compliance teams.

Its "Connectors" ecosystem allows it to plug directly into Salesforce, Slack, Google Drive, and Notion without complex custom engineering.`,
    strengths: ['Best-in-Class RAG', 'Citation Accuracy', 'Enterprise Connectors', 'Data Privacy Guarantees'],
    weaknesses: ['Poor at Creative Writing', 'Not for Coding', 'Enterprise-only focus'],
    pricing: 'Enterprise Token Volume',
    releaseYear: 2026,
    icon: '🏢'
  },

  // ─── TIER 3: SOVEREIGN & OPEN ───
  {
    id: 'llama-4-scout',
    name: 'Llama 4 Scout',
    provider: 'Meta',
    providerSlug: 'meta',
    category: ['open-source', 'local', 'sovereign', 'coding', 'reasoning'],
    tagline: 'Sovereign Intelligence',
    description: 'A 109B parameter MoE model capable of running on high-end consumer hardware, delivering reasoning rivaling GPT-4.',
    essay: `The release of the Llama 4 family in April 2025 marked the maturation of open-weight AI. The family is split into two primary architectures. Llama 4 Scout is a 109B parameter model (active 17B) utilizing a Mixture-of-Experts (MoE) architecture. At 4-bit quantization, the model weights alone require ~62GB of memory, meaning it needs 96GB+ Unified Memory (M4 Max or higher) to run with usable context. On a 128GB M4/M5 Ultra, it delivers reasoning capabilities that rival the previous generation's GPT-4.

Llama 4 remains special because it is the most supported model in the ecosystem. Every tool, every library, and every optimization technique (like quantization) supports Llama first. For governments, defense contractors, and privacy-conscious enterprises, Llama 4 offers "Sovereign" intelligence—the ability to run entirely on one's own infrastructure.`,
    strengths: ['Sovereign/Local Deployment', 'Mixture-of-Experts Architecture', 'Privacy-Compliant', 'Massive Ecosystem Support', 'Free Open Weights'],
    weaknesses: ['High Hardware Requirements (RAM)', 'Maintenance Overhead', 'Lacks Native Multimodality of Gemini'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2025,
    icon: '🦙'
  },
  {
    id: 'mistral-large-3',
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    providerSlug: 'mistral',
    category: ['open-source', 'edge', 'compliance', 'coding', 'enterprise'],
    tagline: 'The European Shield',
    description: 'Optimized for function calling and edge deployment. The compliant, transparent alternative to American models.',
    essay: `Mistral AI positions itself as the champion of "Sovereign AI." With the EU AI Act in full force by 2026, Mistral provides the compliant, transparent alternative to American models. Their partnership with national governments to provide "AI for Citizens" highlights their focus on public sector utility.

Mistral's 2026 lineup is characterized by extreme efficiency. The Ministral series (3B and 8B parameters) are designed specifically for "Edge AI"—running on laptops, phones, and embedded devices without internet access. These models are heavily optimized for function calling, making them excellent at controlling local software environments.`,
    strengths: ['GDPR Compliance', 'Edge Efficiency', 'Function Calling Optimization', 'Data Sovereignty', 'Transparent Weights'],
    weaknesses: ['Smaller Context Window', 'Less General Knowledge', 'Regional Focus'],
    pricing: 'Usage-based / Open Weights',
    releaseYear: 2026,
    icon: '🛡️'
  },
  {
    id: 'qwen3-max',
    name: 'Qwen3 Max',
    provider: 'Alibaba',
    providerSlug: 'alibaba',
    category: ['open-weights', 'multilingual', 'coding', 'open-source', 'enterprise'],
    tagline: 'The Global Polyglot',
    description: 'The world\'s best multilingual model, dominating benchmarks in Asian languages while remaining competitive in English and Code.',
    essay: `Qwen3 Max is the bridge between East and West. While GPT-5 and Claude are heavily Anglocentric, Qwen3 maintains state-of-the-art performance in Mandarin, Japanese, Arabic, and Southeast Asian languages.

For global companies, Qwen3 is often the "Translator General." Its coding ability is also surprisingly robust, often beating Llama 4 on Python benchmarks. Alibaba's aggressive open-weight strategy means Qwen3 is often the base model for many specialized industry finetunes in manufacturing and logistics.`,
    strengths: ['Superior Multilingual Support', 'Strong Coding Performance', 'Open Weights', 'Cost Effective'],
    weaknesses: ['Data Governance Concerns', 'Variable Performance in Niche Western Topics'],
    pricing: 'Free Weights / Low Cost API',
    releaseYear: 2025,
    icon: '🌏'
  },

  // ─── TIER 4: CREATIVE & MEDIA ───
  {
    id: 'sora-2',
    name: 'Sora 2.0',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['video', 'creative', 'multimodal'],
    tagline: 'Reality Simulation',
    description: 'The world\'s most advanced video generation model. Capable of generating minute-long, 4K, sound-synced video with consistent physics.',
    essay: `Sora 2.0 isn't just a video generator; it's a physics engine. Released in mid-2026, it solved the "temporal consistency" problem that plagued early AI video. Characters now maintain their identity, clothing, and facial features across cuts and scenes.

The integration of audio is the killer feature. Sora 2.0 generates foley, dialogue, and background score that perfectly matches the visual action. It understands that a glass breaking sounds different on carpet than on concrete.

For filmmakers, it serves as the ultimate pre-visualization tool, and for advertisers, it is an end-to-end production studio.`,
    strengths: ['Physics Consistency', 'Audio-Visual Sync', '4K Resolution', 'Character Consistency'],
    weaknesses: ['Extremely Expensive per Second', 'Strict Copyright Filters', 'Slow Generation Time'],
    pricing: 'Premium Production Tier',
    releaseYear: 2026,
    icon: '🎬'
  },
  {
    id: 'midjourney-v7',
    name: 'Midjourney v7',
    provider: 'Midjourney',
    providerSlug: 'midjourney',
    category: ['image', 'art', 'creative'],
    tagline: 'The Gold Standard of Art',
    description: 'Unmatched artistic quality and photorealism. Now features a full web editor, 3D model export, and style consistency across series.',
    essay: `Midjourney v7 remains the undisputed king of static aesthetics. In 2026, they expanded beyond 2D images into "Texture & 3D." You can now generate a character in Midjourney and export a textured 3D mesh for use in game engines.

The "Style Reference" capability has been perfected, allowing brands to upload a moodboard and generate infinite assets that perfectly match their corporate identity. It bridges the gap between concept art and production assets.`,
    strengths: ['Unrivaled Aesthetics', '3D Asset Generation', 'Style Consistency', 'Web Editor'],
    weaknesses: ['Discord legacy (though Web is main now)', 'No API for developers', 'Subscription only'],
    pricing: 'Monthly Subscription',
    releaseYear: 2026,
    icon: '🎨'
  },
  {
    id: 'elevenlabs-v4',
    name: 'ElevenLabs V4',
    provider: 'ElevenLabs',
    providerSlug: 'elevenlabs',
    category: ['audio', 'voice', 'dubbing', 'creative', 'multimodal'],
    tagline: 'Universal Voice',
    description: 'Indistinguishable human speech generation with emotional control, real-time translation, and cross-lingual voice cloning.',
    essay: `ElevenLabs V4 has effectively solved the "Turing Test" for voice. It can take a 3-second sample of your voice and let you speak fluent Japanese, Spanish, or Swahili, preserving your exact timbre and emotional inflection.

The 2026 update introduced "Performance Director," allowing users to guide the delivery—whispering, shouting, trembling with fear, or laughing—with granular control. It is the backbone of the 2026 podcast and audiobook industry.`,
    strengths: ['Perfect Voice Cloning', 'Emotional Control', 'Real-time Dubbing', 'Low Latency'],
    weaknesses: ['Deepfake Security Risks', 'Voice Rights Management'],
    pricing: 'Character-based pricing',
    releaseYear: 2026,
    icon: '🎙️'
  },
  {
    id: 'suno-v5',
    name: 'Suno V5',
    provider: 'Suno',
    providerSlug: 'suno',
    category: ['music', 'audio', 'creative'],
    tagline: 'Radio-Ready Music',
    description: 'Generates full 4-minute songs with cohesive structure (verse, chorus, bridge) and broadcast-quality vocals. The "Photoshop for Music".',
    essay: `Suno V5 has done for music what Midjourney did for images. It allows anyone to generate radio-quality tracks in any genre. The V5 update introduced "Stem Separation" and "In-Track Editing," allowing producers to keep the vocals but change the drums, or rewrite the lyrics of the second verse without regenerating the whole song.

It has become a standard tool for game developers, content creators, and even professional musicians for rapid ideation.`,
    strengths: ['Full Song Structure', 'Stem Access', 'High Fidelity Audio', 'Vocal Clarity'],
    weaknesses: ['Copyright Gray Areas', 'Generic Pop Tendencies'],
    pricing: 'Credit System',
    releaseYear: 2026,
    icon: '🎵'
  },

  // ─── TIER 5: SPECIALIZED TOOLS ───
  {
    id: 'alphafold-4',
    name: 'AlphaFold 4',
    provider: 'Google DeepMind',
    providerSlug: 'google',
    category: ['science', 'biology', 'research', 'enterprise'],
    tagline: 'The Biology Solver',
    description: 'Predicts the structure of nearly all molecules in the Protein Data Bank. The fundamental tool for modern drug discovery and bio-engineering.',
    essay: `AlphaFold 4 is arguably the most "impactful" AI on this list for human longevity. It has moved beyond proteins to simulate DNA, RNA, and Ligand interactions. In 2026, it is used to design custom enzymes for plastic degradation and personalized cancer therapeutics. It is the operating system of the new biotech revolution.`,
    strengths: ['Molecular Prediction', 'Drug Discovery Acceleration', 'Scientific Accuracy'],
    weaknesses: ['Requires Domain Expertise', 'High Compute for Inference'],
    pricing: 'Academic Free / Pharma Enterprise',
    releaseYear: 2026,
    icon: '🧬'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    provider: 'GitHub',
    providerSlug: 'github',
    category: ['coding', 'platform', 'enterprise', 'autonomous'],
    tagline: 'The AI Developer Platform',
    description: 'Not just a model, but a platform. Integrates GPT-5, Claude, and specialized agents into a cohesive workflow for teams.',
    essay: `GitHub Copilot in 2026 is the orchestration layer for software development. It doesn't just autocomplete code; it manages the "Agentic Workplace." It routes simple tasks to fast models, complex architecture to Claude Opus, and testing to specialized verification agents.

Its "Workspace" feature allows it to understand the context of the entire organization, enforcing style guides and security policies automatically across thousands of repos.`,
    strengths: ['Deep IDE Integration', 'Model Routing', 'Team Policy Enforcement', 'Enterprise Security'],
    weaknesses: ['Vendor Lock-in', 'Expensive per Seat'],
    pricing: 'Subscription',
    releaseYear: 2021,
    icon: '🐙'
  },
  {
    id: 'perplexity-pro',
    name: 'Perplexity Pro',
    provider: 'Perplexity',
    providerSlug: 'perplexity',
    category: ['research', 'search', 'autonomous', 'enterprise'],
    tagline: 'The Knowledge Engine',
    description: 'The antidote to hallucination. Combines the best frontier models with a live search index to provide verified, cited answers.',
    essay: `Perplexity remains the "Second Brain" for knowledge workers. In 2026, its "Deep Research" mode can spend hours browsing thousands of academic papers and news archives to produce a Ph.D.-level literature review.

It has effectively replaced the traditional search engine for complex queries. Why search for ten links when you can get one verified answer?`,
    strengths: ['Citation Accuracy', 'Deep Research Mode', 'Multi-Model Choice', 'Ad-Free'],
    weaknesses: ['Subscription Required', 'Not for Creative Writing'],
    pricing: 'Monthly Subscription',
    releaseYear: 2025,
    icon: '🔎'
  }
];

export const aiProviders: AIProvider[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'The Infrastructure of Autonomy. Makers of GPT-5, Sora, and DALL-E.',
    essay: `OpenAI remains the central pole of the AI tent. With Sam Altman's "Agentic First" strategy, they have transitioned from a consumer app company to the backbone of the global digital economy.`,
    models: ['gpt-5-codex', 'sora-2'],
    website: 'https://openai.com',
    icon: '🟢'
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    description: 'The Engine of Reason. Makers of Claude.',
    essay: `Anthropic is the "Adult in the Room." In a world of fast-moving agents, they provide the reliable, safe, and highly intelligent reasoning layer that enterprises trust with their most sensitive data.`,
    models: ['claude-opus-4-6'],
    website: 'https://anthropic.com',
    icon: '🔶'
  },
  {
    id: 'google',
    name: 'Google DeepMind',
    description: 'The Multimodal Ecosystem. Makers of Gemini and AlphaFold.',
    essay: `Google has successfully pivoted its entire stack to AI. From Android to Workspace to Cloud, Gemini is the electricity running through the Google ecosystem.`,
    models: ['gemini-3-pro', 'gemini-3-flash', 'gemini-3-thinking', 'alphafold-4'],
    website: 'https://deepmind.google',
    icon: '🔵'
  },
  {
    id: 'meta',
    name: 'Meta',
    description: 'The Open Source Standard. Makers of Llama.',
    essay: `Meta's open-weight strategy has democratized AI, ensuring that intelligence is not the monopoly of a few cloud providers.`,
    models: ['llama-4-scout'],
    website: 'https://ai.meta.com',
    icon: '♾️'
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    description: 'The European Shield. Makers of Mistral.',
    essay: `Mistral proves that efficiency and sovereignty can compete with raw scale. They are the guardians of European digital independence.`,
    models: ['mistral-large-3'],
    website: 'https://mistral.ai',
    icon: '🇪🇺'
  },
  {
    id: 'magic',
    name: 'Magic.dev',
    description: 'The Infinite Context. Makers of LTM-10M.',
    essay: `Magic.dev has solved the memory bottleneck. Their non-Transformer architecture allows for effectively infinite context, changing how we think about software maintenance.`,
    models: ['magic-10m'],
    website: 'https://magic.dev',
    icon: '🪄'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'The Art Studio. Makers of v7.',
    essay: `Midjourney remains the standard-bearer for AI art, prioritizing beauty and style over mere accuracy.`,
    models: ['midjourney-v7'],
    website: 'https://midjourney.com',
    icon: '🎨'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'The Voice of AI. Makers of V4.',
    essay: `ElevenLabs has conquered audio. Their technology powers the world's dubbing, audiobooks, and real-time translation systems.`,
    models: ['elevenlabs-v4'],
    website: 'https://elevenlabs.io',
    icon: '🎙️'
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'The Enterprise Engine. Makers of Command R.',
    essay: `Cohere builds tools for work, not play. Their focus on RAG and data privacy has made them a staple in the Fortune 500.`,
    models: ['cohere-command-r7'],
    website: 'https://cohere.com',
    icon: '🏢'
  },
  {
    id: 'xai',
    name: 'xAI',
    description: 'Truth & Universe. Makers of Grok.',
    essay: `Elon Musk's xAI challenges the status quo with unfiltered, real-time intelligence that plugs directly into the global conversation.`,
    models: ['grok-4'],
    website: 'https://x.ai',
    icon: '⚡'
  },
  {
    id: 'suno',
    name: 'Suno',
    description: 'The Music Studio. Makers of Suno V5.',
    essay: `Suno has democratized music production, allowing anyone to turn lyrics into radio-ready songs in seconds.`,
    models: ['suno-v5'],
    website: 'https://suno.com',
    icon: '🎵'
  },
  {
    id: 'alibaba',
    name: 'Alibaba Cloud',
    description: 'The Eastern Dragon. Makers of Qwen.',
    essay: `Alibaba's Qwen series proves that innovation is global. They lead the market in multilingual Asian language processing.`,
    models: ['qwen3-max'],
    website: 'https://qwen.alibaba.com',
    icon: '🌏'
  }
];
