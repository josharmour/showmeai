// LEGACY, OPEN-SOURCE, REGIONAL & SPECIALIZED AI MODELS
// Add these to src/data/models.ts

export const legacyModels = [
  // ─── LEGACY OPENAI MODELS ───
  {
    id: 'gpt-4-turbo',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['legacy', 'reasoning', 'coding', 'multimodal'],
    tagline: 'The 2023-2024 Workhorse',
    description: 'The precursor to GPT-5. Featured 128K context and faster/cheaper inference than original GPT-4. Retired March 2025.',
    essay: `GPT-4 Turbo, released in November 2023, was a significant optimization of the original GPT-4. It offered a 128K token context window (up from 8K/32K), faster inference, and 3x lower pricing. It powered ChatGPT through the first half of 2024 and was the default model for most enterprise applications.

Its knowledge cutoff was updated to April 2023, making it significantly more current than GPT-4. It also introduced JSON mode and function calling improvements that became standard in later models.

GPT-4 Turbo was officially retired from the OpenAI API in March 2025, replaced by GPT-4o and later GPT-5. However, it remains an important historical model as it represented the first major optimization breakthrough after GPT-4's release.`,
    strengths: ['128K Context Window', 'JSON Mode', 'Function Calling', 'Cost-Effective for its Time'],
    weaknesses: ['Deprecated/Retired', 'Knowledge Cutoff April 2023', 'Superseded by GPT-4o/GPT-5'],
    pricing: 'Legacy API pricing (retired)',
    releaseYear: 2023,
    icon: '🔄'
  },
  {
    id: 'gpt-4-original',
    name: 'GPT-4 (Original)',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['legacy', 'reasoning', 'coding'],
    tagline: 'The First Frontier',
    description: 'The original GPT-4 model from March 2023. The first model to demonstrate human-level performance on many benchmarks.',
    essay: `GPT-4, released in March 2023, was a watershed moment in AI. It was the first model to convincingly pass the Turing Test for most practical purposes and achieved human-level performance on professional and academic benchmarks.

The original GPT-4 had an 8K context window (later expanded to 32K). It introduced the concept of "emergent capabilities" - abilities that appeared at scale but weren't present in smaller models. It excelled at complex reasoning, coding, and creative writing.

While primitive by 2026 standards, GPT-4 established many of the patterns that would define the next generation of AI systems: few-shot learning, chain-of-thought prompting, and the assistant/chatbot paradigm.`,
    strengths: ['Historical Breakthrough', 'Established AI Patterns', 'Strong Reasoning for 2023'],
    weaknesses: ['Limited Context (8K)', 'Slow Inference', 'Expensive', 'Deprecated'],
    pricing: 'Legacy API pricing (retired)',
    releaseYear: 2023,
    icon: '🏛️'
  },
  {
    id: 'gpt-3-5-turbo',
    name: 'GPT-3.5 Turbo',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['legacy', 'speed', 'coding'],
    tagline: 'The Speed Demon of 2023',
    description: 'The workhorse model of early 2023. Fast, cheap, and capable enough for most tasks. Powered ChatGPT Free tier.',
    essay: `GPT-3.5 Turbo was released in January 2023 and quickly became the default model for ChatGPT's free tier. It was based on an improved version of GPT-3.5 with fine-tuning for chat interactions.

At 1/10th the price of GPT-4, it was the go-to model for high-volume applications. It excelled at quick tasks, simple coding, and conversational AI. While it lacked the deep reasoning of GPT-4, its speed and cost made it the "good enough" choice for many applications.

GPT-3.5 Turbo was officially retired from the OpenAI API in January 2025, replaced by GPT-4o-mini which offered better capabilities at similar pricing.`,
    strengths: ['Fast Inference', 'Low Cost', 'Adequate for Simple Tasks', 'Powered ChatGPT Free'],
    weaknesses: ['Limited Reasoning', 'Hallucinated More Than GPT-4', 'Deprecated'],
    pricing: 'Legacy API pricing (retired)',
    releaseYear: 2023,
    icon: '⚡'
  },
  {
    id: 'text-davinci-003',
    name: 'text-davinci-003',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['legacy', 'text'],
    tagline: 'The Last GPT-3 Model',
    description: 'The most capable GPT-3 model before GPT-4. Used for text completion and generation before the chat paradigm.',
    essay: `text-davinci-003 was the flagship of OpenAI's GPT-3 family, released in November 2022. It was the most capable text generation model before GPT-4's arrival.

Unlike the chat-tuned models that came after, text-davinci-003 was designed for text completion rather than conversation. It excelled at creative writing, code generation, and text transformation. It was the default model for early AI applications before ChatGPT popularized the chat interface.

The model was officially deprecated in January 2024 along with the entire GPT-3 family (ada, babbage, curie, davinci).`,
    strengths: ['Strong Text Generation', 'Creative Writing', 'Code Completion'],
    weaknesses: ['No Chat Optimization', 'Limited Context', 'Deprecated Jan 2024'],
    pricing: '$20.00 / 1M tokens (legacy)',
    releaseYear: 2022,
    icon: '📝'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['legacy', 'multimodal', 'reasoning'],
    tagline: 'The Multimodal Milestone',
    description: 'OpenAI\'s first natively multimodal flagship (May 2024). Unified text, vision, and audio in one model.',
    essay: `GPT-4o, announced in May 2024, was OpenAI's first natively multimodal flagship model. Unlike previous models that used separate vision and text models, GPT-4o was trained end-to-end on text, images, and audio.

The "o" stands for "omni" - reflecting its multimodal capabilities. It offered faster response times than GPT-4 Turbo and introduced voice mode with natural emotional expression. It became the default model for ChatGPT through late 2024 and early 2025.

GPT-4o represented a major step toward truly multimodal AI, setting the stage for GPT-5's unified architecture. It was officially retired from ChatGPT in February 2026 but remains available via legacy API access.`,
    strengths: ['Native Multimodal', 'Fast Response Times', 'Voice Mode', 'Unified Architecture'],
    weaknesses: ['Retired from ChatGPT (Feb 2026)', 'Superseded by GPT-5', 'Vision Not as Strong as Gemini'],
    pricing: 'Legacy API pricing',
    releaseYear: 2024,
    icon: '🌐'
  },
  {
    id: 'openai-o1-preview',
    name: 'o1-preview',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['legacy', 'reasoning', 'science'],
    tagline: 'First Preview Reasoning',
    description: 'OpenAI\'s first preview of chain-of-thought reasoning (September 2024). Later became the o3 series.',
    essay: `o1-preview, released in September 2024, was OpenAI's first public preview of their chain-of-thought reasoning approach. It represented a shift from immediate token generation to models that "think" before responding.

The model demonstrated that allowing AI to reason through problems step-by-step could dramatically improve performance on math, science, and coding tasks. It set the foundation for the o1, o3, and eventually GPT-5 Thinking modes.

While the o1-preview name was retired, the architecture it pioneered became central to OpenAI's approach to complex reasoning tasks.`,
    strengths: ['First Public Chain-of-Thought', 'Math/Science Improvement', 'Reasoning Foundation'],
    weaknesses: ['Slow Inference', 'Deprecated Name', 'Superseded by o1/o3'],
    pricing: 'Legacy API pricing',
    releaseYear: 2024,
    icon: '🧠'
  },

  // ─── LEGACY ANTHROPIC MODELS ───
  {
    id: 'claude-2',
    name: 'Claude 2',
    provider: 'Anthropic',
    providerSlug: 'anthropic',
    category: ['legacy', 'reasoning', 'coding'],
    tagline: 'The First Competitive Claude',
    description: 'Anthropic\'s 2023 model that first challenged GPT-4. Featured 100K context and constitutional AI principles.',
    essay: `Claude 2, released in July 2023, was Anthropic's first model to genuinely compete with GPT-4. It introduced several innovations that would define Claude's brand: constitutional AI (explicit principles governing behavior), a 100K token context window, and a more conversational, less robotic personality.

Claude 2 excelled at analysis, writing, and coding tasks. Its larger context window made it particularly useful for document analysis and code review. It was also notable for being more "refusal-prone" than GPT-4, reflecting Anthropic's safety-first approach.

Claude 2 was succeeded by Claude 2.1 in late 2023 and Claude 3 in 2024. It represents an important milestone as the first viable alternative to GPT-4's dominance.`,
    strengths: ['100K Context', 'Constitutional AI', 'Strong Analysis', 'Alternative to GPT-4'],
    weaknesses: ['Excessive Refusals', 'Slower than GPT-4', 'Superseded by Claude 3'],
    pricing: 'Legacy API pricing',
    releaseYear: 2023,
    icon: '📜'
  },
  {
    id: 'claude-2-1',
    name: 'Claude 2.1',
    provider: 'Anthropic',
    providerSlug: 'anthropic',
    category: ['legacy', 'reasoning', 'coding'],
    tagline: 'The Improved Claude 2',
    description: 'Late 2023 update to Claude 2 with reduced hallucinations and improved coding.',
    essay: `Claude 2.1, released in late 2023, was an incremental but significant improvement over Claude 2. It featured a 200K context window (up from 100K), reduced hallucination rates, and improved coding capabilities.

The model was particularly noted for its tool use capabilities—being able to interact with external APIs and databases. This made it popular for enterprise automation workflows.

Claude 2.1 represented Anthropic's commitment to continuous improvement. While it was soon superseded by Claude 3, it demonstrated the value of iterative model refinement based on user feedback.`,
    strengths: ['200K Context', 'Reduced Hallucinations', 'Tool Use', 'Improved Coding'],
    weaknesses: ['Superseded by Claude 3', 'Still Refusal-Prone', 'Behind GPT-4 Performance'],
    pricing: 'Legacy API pricing',
    releaseYear: 2023,
    icon: '📜'
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    providerSlug: 'anthropic',
    category: ['legacy', 'reasoning', 'coding', 'multimodal'],
    tagline: 'The 2024 Reasoning King',
    description: 'The most capable model of early 2024. Outperformed GPT-4 on many benchmarks before GPT-4o\'s release.',
    essay: `Claude 3 Opus, released in March 2024, was the first model to convincingly outperform GPT-4 on a broad set of benchmarks. It represented a significant leap forward for Anthropic, introducing multimodal capabilities and a 200K token context window.

Opus excelled at complex reasoning, nuanced writing, and coding tasks. It was particularly noted for its ability to follow complex instructions and its reduced tendency to refuse benign requests compared to Claude 2. For several months in early 2024, it was considered the "best" AI model available.

Claude 3 Opus was succeeded by Claude 3.5 Sonnet in June 2024 and the Claude 4 family in 2025. However, it remains an important historical model as proof that alternatives could surpass OpenAI's offerings.`,
    strengths: ['Beat GPT-4 on Benchmarks', '200K Context', 'Multimodal', 'Nuanced Writing'],
    weaknesses: ['Expensive', 'Slower Inference', 'Superseded by Claude 3.5/4'],
    pricing: '$15 / 1M input, $75 / 1M output (legacy)',
    releaseYear: 2024,
    icon: '👑'
  },
  {
    id: 'claude-3-5-sonnet-original',
    name: 'Claude 3.5 Sonnet (Original)',
    provider: 'Anthropic',
    providerSlug: 'anthropic',
    category: ['legacy', 'coding', 'reasoning'],
    tagline: 'The First Great Coding Model',
    description: 'The original Claude 3.5 Sonnet from June 2024 that revolutionized AI coding with SOTA SWE-bench performance.',
    essay: `The original Claude 3.5 Sonnet, released in June 2024, was a breakthrough model for coding. It achieved state-of-the-art performance on SWE-bench, surpassing much larger models and establishing the "Sonnet = Coding" brand identity.

This model proved that a mid-sized model could outperform frontier models on specific tasks with the right training. It introduced Artifacts (UI previews for code), improved Computer Use capabilities, and set the standard for coding assistants.

The original 3.5 Sonnet was later replaced by updated versions and ultimately by Claude 4.5 Sonnet, but its impact on the coding assistant market was profound.`,
    strengths: ['SOTA SWE-bench (for 2024)', 'Artifacts Feature', 'Computer Use', 'Great Value'],
    weaknesses: ['Superseded by Newer Versions', 'No Extended Thinking'],
    pricing: '$3 / 1M input, $15 / 1M output (legacy)',
    releaseYear: 2024,
    icon: '💻'
  },
  {
    id: 'claude-3-haiku',
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    providerSlug: 'anthropic',
    category: ['legacy', 'speed', 'production'],
    tagline: 'Speed First',
    description: 'The fastest Claude 3 model (March 2024). Optimized for speed and cost-efficiency with 200K context.',
    essay: `Claude 3 Haiku, released alongside Opus and Sonnet in March 2024, was Anthropic's speed-optimized offering. At just one-tenth the cost of Opus, it was designed for high-volume, latency-sensitive applications.

Despite its smaller size, Haiku retained impressive capabilities, particularly for tasks requiring quick responses rather than deep reasoning. It became popular for customer service bots, real-time transcription, and other applications where speed mattered more than maximum intelligence.

Claude 3 Haiku was succeeded by Haiku 4.5 in October 2025 but remains available as a cost-effective option for certain use cases.`,
    strengths: ['Fastest Inference', 'Low Cost', '200K Context', 'Good for Simple Tasks'],
    weaknesses: ['Limited Reasoning', 'Superseded by Haiku 4.5', 'Not for Complex Tasks'],
    pricing: '$0.25 / 1M input, $1.25 / 1M output',
    releaseYear: 2024,
    icon: '🌬️'
  },

  // ─── LEGACY GOOGLE MODELS ───
  {
    id: 'palm-2',
    name: 'PaLM 2',
    provider: 'Google',
    providerSlug: 'google',
    category: ['legacy', 'reasoning', 'multilingual'],
    tagline: 'Google\'s Pre-Gemini Flagship',
    description: 'Google\'s 2023 language model that powered Bard before Gemini. Featured strong multilingual capabilities.',
    essay: `PaLM 2 (Pathways Language Model 2), released in May 2023, was Google's flagship language model before the Gemini era. It powered Google Bard and was available via Google Cloud Vertex AI.

PaLM 2 was trained on 100+ languages and excelled at translation, reasoning, and coding tasks. It came in several sizes (Gecko, Otter, Bison, Unicorn) to optimize for different use cases. The model was particularly noted for its mathematical reasoning and its ability to write high-quality code.

PaLM 2 was officially deprecated in 2024 with the rise of Gemini models, but it represented an important stepping stone in Google's AI development and demonstrated Google's commitment to multilingual AI.`,
    strengths: ['100+ Languages', 'Strong Math', 'Good Coding', 'Multiple Sizes'],
    weaknesses: ['Not a Chat Model', 'Less Capable Than GPT-4', 'Deprecated'],
    pricing: 'Legacy Vertex AI pricing',
    releaseYear: 2023,
    icon: '🌴'
  },
  {
    id: 'bard',
    name: 'Bard (PaLM-powered)',
    provider: 'Google',
    providerSlug: 'google',
    category: ['legacy', 'chatbot'],
    tagline: 'Google\'s First Chatbot',
    description: 'Google\'s initial answer to ChatGPT, powered by PaLM 2. Launched March 2023, rebranded to Gemini in February 2024.',
    essay: `Bard was Google's first consumer-facing AI chatbot, launched in March 2023 as a direct response to ChatGPT's success. Initially powered by LaMDA and later by PaLM 2, Bard aimed to combine Google's search capabilities with conversational AI.

Bard's development was rocky, with an embarrassing demo showing incorrect information about the James Webb Space Telescope. Google took a cautious approach, rolling out features slowly and emphasizing accuracy over speed.

In February 2024, Bard was rebranded to Gemini with improved models and capabilities. The Bard name represents an important chapter in AI history as Google's entry into the consumer AI chatbot market.`,
    strengths: ['Google Search Integration', 'Free Access', 'Multilingual'],
    weaknesses: ['Inaccurate Launch Demo', 'Behind GPT-4 in Capabilities', 'Rebranded to Gemini'],
    pricing: 'Free',
    releaseYear: 2023,
    icon: '🎭'
  },
  {
    id: 'gemini-1-5-pro',
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    providerSlug: 'google',
    category: ['legacy', 'multimodal', 'reasoning'],
    tagline: 'The 1M Context Pioneer',
    description: 'Google\'s February 2024 model with revolutionary 1 million token context window and native multimodal understanding.',
    essay: `Gemini 1.5 Pro, released in February 2024, was a groundbreaking model that introduced a 1 million token context window—enough to process entire codebases, hour-long videos, or lengthy books in a single pass.

The model featured native multimodal understanding, able to process text, images, audio, and video seamlessly. Its Mixture-of-Experts architecture made it efficient despite its large capabilities.

Gemini 1.5 Pro remained Google's production flagship through 2024 and into early 2025 before being succeeded by the Gemini 2.0 family. Its context window capability set the standard that all frontier models now strive to match or exceed.`,
    strengths: ['1M Token Context', 'Native Multimodal', 'MoE Efficiency', 'Strong Benchmarks'],
    weaknesses: ['Superseded by Gemini 2+', 'API Rate Limits', 'Complex Pricing'],
    pricing: '$3.50 / 1M input tokens',
    releaseYear: 2024,
    icon: '💠'
  },
  {
    id: 'gemini-2-0-flash',
    name: 'Gemini 2.0 Flash',
    provider: 'Google',
    providerSlug: 'google',
    category: ['legacy', 'speed', 'multimodal'],
    tagline: 'Thinking at Speed',
    description: 'Google\'s late 2024 model combining Flash\'s speed with Deep Think reasoning capabilities.',
    essay: `Gemini 2.0 Flash, released in December 2024, combined the speed of the Flash series with Deep Think reasoning capabilities. It offered sub-second response times for simple queries while engaging multi-step reasoning for complex tasks.

The model featured native multimodal support and was optimized for real-time applications like voice assistants, live video analysis, and interactive chatbots. It became the workhorse model for many Google products in early 2025.

Gemini 2.0 Flash demonstrated that reasoning didn't have to be slow—it could selectively apply deep thinking only when needed.`,
    strengths: ['Fast with Reasoning', 'Native Multimodal', 'Selective Deep Think', 'Production-Ready'],
    weaknesses: ['Superseded by Gemini 2.5+', 'Less Capable Than Pro', 'Context Limits'],
    pricing: '$0.075 / 1M input tokens',
    releaseYear: 2024,
    icon: '⚡'
  },

  // ─── OPEN SOURCE & LOCAL MODELS ───
  {
    id: 'llama-2',
    name: 'Llama 2',
    provider: 'Meta',
    providerSlug: 'meta',
    category: ['open-source', 'local', 'legacy', 'coding'],
    tagline: 'The Open Source Revolution',
    description: 'The model that started the open-weight AI revolution. 7B, 13B, and 70B sizes available for commercial use.',
    essay: `Llama 2, released in July 2023, was a watershed moment for open AI. Unlike Llama 1 which was research-only, Llama 2 was licensed for commercial use. This decision unleashed a wave of innovation and democratized access to capable AI models.

Available in 7B, 13B, and 70B parameter sizes, Llama 2 proved that open models could compete with closed-source flagships. The 70B model in particular approached GPT-3.5 performance levels while being freely available for anyone to use, modify, and deploy.

Llama 2 sparked an ecosystem of fine-tunes, quantization tools, and deployment platforms. It established Meta as the leader in open AI and laid the groundwork for the entire Llama ecosystem that followed.`,
    strengths: ['Open Commercial License', '70B Approached GPT-3.5', 'Wide Ecosystem', 'Self-Hostable'],
    weaknesses: ['Superseded by Llama 3/4', 'Required Significant Hardware', 'No Official Multimodal'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '🦙'
  },
  {
    id: 'llama-3-70b',
    name: 'Llama 3 70B',
    provider: 'Meta',
    providerSlug: 'meta',
    category: ['open-source', 'local', 'reasoning', 'coding'],
    tagline: 'GPT-4 Class Open Source',
    description: 'Meta\'s 2024 model that achieved GPT-4-level performance with open weights. 8K context window.',
    essay: `Llama 3, released in April 2024, was a significant leap forward from Llama 2. The 70B parameter model in particular achieved performance that rivaled GPT-4 on many benchmarks while being completely open.

Llama 3 introduced a new tokenizer with a vocabulary of 128K tokens (up from 32K), improved efficiency, and better reasoning capabilities. The model was trained on 15 trillion tokens—7x more than Llama 2.

The 8B model also surprised many with its capabilities, offering near-GPT-3.5 performance at a fraction of the compute. Llama 3 cemented Meta's position as the leader in open AI and became the base for countless fine-tunes.`,
    strengths: ['GPT-4-Level Performance', 'Open Weights', '8B Model Surprisingly Capable', '15T Token Training'],
    weaknesses: ['Only 8K Context', 'Superseded by Llama 3.1/4', 'No Multimodal'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🦙'
  },
  {
    id: 'llama-3-1-405b',
    name: 'Llama 3.1 405B',
    provider: 'Meta',
    providerSlug: 'meta',
    category: ['open-source', 'local', 'reasoning', 'coding'],
    tagline: 'The First Open Frontier',
    description: 'The first open-weights model to compete at the true frontier level. 128K context, released July 2024.',
    essay: `Llama 3.1 405B, released in July 2024, was a landmark achievement—the first open-weights model to genuinely compete with the best closed-source models. With 405B parameters and 128K context, it matched GPT-4o and Claude 3.5 Sonnet on many benchmarks.

The model was notable not just for its capabilities but for Meta's distribution strategy. They hosted the weights directly and partnered with major cloud providers (AWS, Google Cloud, Azure) to make it easily accessible.

Llama 3.1 also introduced improved multilingual support and function calling capabilities. It proved that open models could reach the frontier, challenging the notion that only well-funded labs could build top-tier AI.`,
    strengths: ['Frontier-Level Performance', '128K Context', 'Open Weights', 'Major Cloud Support'],
    weaknesses: ['Massive Hardware Requirements', 'Expensive to Run', 'Superseded by Llama 4'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🏔️'
  },
  {
    id: 'llama-3-2',
    name: 'Llama 3.2',
    provider: 'Meta',
    providerSlug: 'meta',
    category: ['open-source', 'local', 'multimodal', 'edge'],
    tagline: 'Vision and Edge AI',
    description: 'Meta\'s first multimodal Llama with 1B, 3B (text) and 11B, 90B (vision) models for edge deployment.',
    essay: `Llama 3.2, released in September 2024, marked Llama's entry into multimodal AI. It included text-only 1B and 3B models optimized for edge devices, plus 11B and 90B vision-language models.

The 1B and 3B models were designed to run on mobile phones and laptops, bringing capable AI to consumer devices. The vision models could understand images and were competitive with much larger models on vision tasks.

Llama 3.2 represented Meta's push for "AI everywhere"—not just in the cloud, but on devices, in AR glasses, and in emerging form factors. It also featured improved safety guardrails and more permissive licensing.`,
    strengths: ['First Multimodal Llama', 'Edge-Optimized Sizes', 'Vision Understanding', 'Mobile-Friendly'],
    weaknesses: ['Less Capable Than 405B', 'Vision Still New', 'Edge Models Limited'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '👁️'
  },
  {
    id: 'mixtral-8x7b',
    name: 'Mixtral 8x7B',
    provider: 'Mistral AI',
    providerSlug: 'mistral',
    category: ['open-source', 'local', 'coding', 'reasoning'],
    tagline: 'The First Open MoE',
    description: 'Mistral\'s mixture-of-experts model that outperformed Llama 2 70B with only 47B total parameters.',
    essay: `Mixtral 8x7B, released in December 2023, was a breakthrough in efficient AI architecture. Using a Mixture-of-Experts (MoE) approach, it activates only 12-13B parameters per token while having 47B total parameters. This made it incredibly efficient while still outperforming much larger models.

Mixtral 8x7B matched or exceeded Llama 2 70B performance on most benchmarks while being much faster and cheaper to run. It supported a 32K context window and excelled at reasoning, coding, and multilingual tasks.

The model proved that MoE architectures could work at scale and inspired many copycats. Mixtral became the go-to choice for developers who wanted strong performance without the massive infrastructure requirements of 70B+ models.`,
    strengths: ['MoE Efficiency', 'Beat Llama 2 70B', '32K Context', 'Fast Inference'],
    weaknesses: ['Requires Significant RAM', 'Superseded by Mixtral 8x22B', 'Less Capable Than Frontier Models'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '🌀'
  },
  {
    id: 'mixtral-8x22b',
    name: 'Mixtral 8x22B',
    provider: 'Mistral AI',
    providerSlug: 'mistral',
    category: ['open-source', 'local', 'reasoning', 'coding'],
    tagline: 'Open Source Frontier',
    description: 'Mistral\'s 141B parameter MoE model that approaches GPT-4 performance with 64K context.',
    essay: `Mixtral 8x22B, released in April 2024, pushed the Mixtral architecture to its limits. With 141B total parameters and 64K context, it was one of the most capable open models of its time.

The model used a refined MoE approach that activated more experts per token than 8x7B, trading some efficiency for improved capability. It achieved GPT-4-level performance on many benchmarks while maintaining the cost benefits of the MoE architecture.

Mixtral 8x22B represented the peak of open-source capabilities before Llama 3.1 405B arrived. It showed that European AI companies could compete at the highest level and solidified Mistral's position as a major player.`,
    strengths: ['GPT-4-Level Performance', '64K Context', 'MoE Efficiency', 'Strong Coding'],
    weaknesses: ['Large Hardware Requirements', 'Superseded by Llama 3.1 405B', 'Not True Frontier'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🌪️'
  },
  {
    id: 'mistral-7b',
    name: 'Mistral 7B',
    provider: 'Mistral AI',
    providerSlug: 'mistral',
    category: ['open-source', 'local', 'edge', 'coding'],
    tagline: 'The Little Giant',
    description: 'The 7B model that started it all. Outperformed Llama 2 13B and launched Mistral as a major player.',
    essay: `Mistral 7B, released in September 2023, was the model that put Mistral AI on the map. Despite having only 7B parameters, it outperformed Llama 2 13B on most benchmarks and even approached Llama 2 70B on some tasks.

The model featured several technical innovations: grouped-query attention, sliding window attention, and a larger byte-fallback tokenizer. These made it remarkably efficient for its size.

Mistral 7B proved that smaller models with smart architecture could compete with much larger ones. It became the default choice for local deployments and inspired countless fine-tunes for specific use cases.`,
    strengths: ['Punches Above Weight', 'Efficient Architecture', '8K Context', 'Great for Edge'],
    weaknesses: ['Limited for Complex Tasks', 'Superseded by Newer Models', 'No Multimodal'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '🐻'
  },
  {
    id: 'qwen2-72b',
    name: 'Qwen2 72B',
    provider: 'Alibaba',
    providerSlug: 'alibaba',
    category: ['open-source', 'local', 'multilingual', 'coding'],
    tagline: 'The Eastern Powerhouse',
    description: 'Alibaba\'s 72B open model that dominates non-English benchmarks while remaining competitive in English.',
    essay: `Qwen2 72B, released in June 2024, established Alibaba's Qwen family as a serious contender in the open model space. While competitive with GPT-4-level models in English, Qwen2 truly shines in Asian languages.

The model achieves state-of-the-art performance on Chinese, Japanese, Korean, Arabic, and other non-English benchmarks. It's also surprisingly capable at coding, often beating much larger models on Python and JavaScript tasks.

Qwen2 72B is freely available under a permissive license and has been widely adopted in Asia for local deployments. It represents the globalization of AI development, proving that innovation isn't limited to Western companies.`,
    strengths: ['Best Asian Language Performance', 'Strong Coding', '128K Context', 'Permissive License'],
    weaknesses: ['Less Polished English Than GPT-4', 'Less Ecosystem Support Than Llama', 'Large Hardware Requirements'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🌏'
  },
  {
    id: 'qwen2-5-coder',
    name: 'Qwen2.5 Coder',
    provider: 'Alibaba',
    providerSlug: 'alibaba',
    category: ['open-source', 'coding', 'local'],
    tagline: 'Code from the East',
    description: 'Alibaba\'s code-specialized model family available in 0.5B to 32B sizes. Competitive with Codestral.',
    essay: `Qwen2.5 Coder is Alibaba's answer to code-specialized models like Codestral and StarCoder. Released in late 2024, it comes in sizes ranging from 0.5B to 32B parameters to suit different deployment scenarios.

The model was trained specifically on code and excels at generation, completion, and explanation tasks. It supports 90+ programming languages and has shown strong performance on the HumanEval and MBPP benchmarks.

Smaller variants like the 3B and 7B models are particularly popular for local development, offering good performance with reasonable hardware requirements. The 32B model approaches the performance of much larger closed-source coding models.`,
    strengths: ['Wide Size Range', '90+ Languages', 'Strong Benchmarks', 'Local-Friendly Smaller Models'],
    weaknesses: ['Less Ecosystem Than GitHub Copilot', 'Training Cutoff Issues', 'Documentation Mostly in Chinese'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🔧'
  },
  {
    id: 'deepseek-coder',
    name: 'DeepSeek Coder',
    provider: 'DeepSeek',
    providerSlug: 'deepseek',
    category: ['open-source', 'coding', 'local'],
    tagline: 'The Budget Coder',
    description: 'DeepSeek\'s code-specialized models known for exceptional performance at very low cost.',
    essay: `DeepSeek Coder is a series of code-specialized models from Chinese AI company DeepSeek. Known for extreme cost efficiency, these models have become popular for developers who want capable coding assistance without expensive API fees.

The models are available in sizes from 1.3B to 33B parameters, with the 6.7B and 33B models being particularly popular. DeepSeek Coder has achieved strong results on HumanEval and other coding benchmarks, often matching much larger models.

DeepSeek's approach emphasizes architectural efficiency over raw scale, allowing them to offer competitive performance at a fraction of the training and inference cost of Western models.`,
    strengths: ['Extreme Cost Efficiency', 'Good Benchmark Performance', 'Multiple Sizes', 'Open Weights'],
    weaknesses: ['Data Privacy Concerns', 'Less Polished Than GPT', 'Smaller Ecosystem'],
    pricing: 'Very Low / Free',
    releaseYear: 2024,
    icon: '🔓'
  },
  {
    id: 'phi-3',
    name: 'Phi-3',
    provider: 'Microsoft',
    providerSlug: 'microsoft',
    category: ['open-source', 'local', 'edge', 'reasoning'],
    tagline: 'Small but Mighty',
    description: 'Microsoft\'s family of small language models (3.8B) that punch far above their weight class.',
    essay: `Phi-3, released by Microsoft in April 2024, challenged the assumption that bigger is always better. The 3.8B parameter model achieves performance comparable to much larger models like GPT-3.5 and Llama 3 8B.

The key to Phi-3's performance is its training data. Instead of scaling parameters, Microsoft focused on curating extremely high-quality training data using techniques like "textbook quality" filtering. This resulted in a model that's remarkably efficient.

Phi-3 Mini (4K context) and Phi-3 Mini-128K (128K context) are designed to run on mobile devices and laptops. They represent Microsoft's push to bring capable AI to edge devices rather than relying solely on the cloud.`,
    strengths: ['3.8B with GPT-3.5 Performance', 'Mobile-Friendly', '128K Context Option', 'Microsoft Quality'],
    weaknesses: ['Limited for Complex Tasks', 'No Multimodal', 'Not Open Source (Open Weights)'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: 'Φ'
  },
  {
    id: 'gemma-2',
    name: 'Gemma 2',
    provider: 'Google',
    providerSlug: 'google',
    category: ['open-source', 'local', 'edge', 'multilingual'],
    tagline: 'Google\'s Open Contribution',
    description: 'Google\'s open models in 2B, 9B, and 27B sizes. Optimized for instruction following and safety.',
    essay: `Gemma 2, released in June 2024, is Google's contribution to the open model ecosystem. Unlike the closed Gemini models, Gemma weights are freely available for research and commercial use.

Available in 2B, 9B, and 27B parameter sizes, Gemma 2 is designed for responsible AI deployment. The models feature strong safety guardrails, excellent instruction following, and good performance across multiple tasks.

The 27B model in particular offers performance competitive with Llama 3 70B while being much smaller. The 2B model is optimized for edge deployment and can run on mobile devices. Gemma 2 represents Google's recognition that open models are essential for AI democratization.`,
    strengths: ['Open Weights', 'Strong Safety', 'Multiple Sizes', 'Google Quality'],
    weaknesses: ['Not True Frontier', 'Less Ecosystem Than Llama', 'Refusal-Prone'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '💎'
  },
  {
    id: 'starcoder2',
    name: 'StarCoder2',
    provider: 'BigCode',
    providerSlug: 'bigcode',
    category: ['open-source', 'coding', 'local'],
    tagline: 'Community-Powered Code',
    description: 'The BigCode project\'s open-source coding models in 3B, 7B, and 15B sizes. Trained on 600+ languages.',
    essay: `StarCoder2, released in February 2024, is the successor to the original StarCoder model. Developed by the BigCode collaboration (including Hugging Face, ServiceNow, and others), it represents the open-source community's answer to code models.

Available in 3B, 7B, and 15B parameter sizes, StarCoder2 was trained on 4.3 trillion tokens across 600+ programming languages. It uses a transparent training process and was developed with ethical considerations in mind.

The 15B model in particular achieves strong performance on coding benchmarks while remaining much smaller than closed-source alternatives. Smaller models are designed for consumer GPUs, making capable coding assistance accessible to individual developers.`,
    strengths: ['600+ Languages', 'Transparent Training', 'Multiple Sizes', 'Consumer GPU Friendly'],
    weaknesses: ['Less Polished Than GPT', 'Not Frontier Performance', 'Limited Context'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '⭐'
  },
  {
    id: 'tinyllama',
    name: 'TinyLlama',
    provider: 'Community',
    providerSlug: 'community',
    category: ['open-source', 'local', 'edge'],
    tagline: '1.1B for Everyone',
    description: 'A compact 1.1B parameter model that can run on virtually any hardware. Trained on 3 trillion tokens.',
    essay: `TinyLlama, released in January 2024, is a community project that proves useful AI doesn't require massive resources. With just 1.1B parameters, it was trained on 3 trillion tokens using Llama 2's architecture.

The model is designed to run on consumer hardware, including smartphones and Raspberry Pi-class devices. While it can't match the performance of larger models, it's surprisingly capable for simple tasks, basic chat, and light coding.

TinyLlama represents the democratization of AI—showing that with clever engineering and sufficient training, small models can be useful. It's popular for education, edge deployments, and as a base for further fine-tuning.`,
    strengths: ['Runs Anywhere', 'Surprisingly Capable', 'Great for Education', 'Open Source'],
    weaknesses: ['Limited Capabilities', 'Struggles with Complex Tasks', 'Not Production-Grade'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🐣'
  },
  {
    id: 'vicuna',
    name: 'Vicuna',
    provider: 'LMSYS',
    providerSlug: 'lmsys',
    category: ['open-source', 'legacy', 'chatbot'],
    tagline: 'The First Fine-Tune',
    description: 'An early LLaMA fine-tune trained on ShareGPT conversations that achieved 90% of GPT-4 quality.',
    essay: `Vicuna, released in March 2023, was one of the first successful fine-tunes of LLaMA. Trained on 70,000 conversations from ShareGPT (a site where users shared ChatGPT conversations), it achieved remarkable conversational quality.

The developers claimed Vicuna achieved 90% of GPT-4's quality in human evaluation—a bold claim that sparked significant interest. Vicuna proved that fine-tuning open models on conversational data could produce chatbot-quality outputs.

Vicuna went through several versions (1.0, 1.3, 1.5) and became the foundation for many other fine-tunes. While primitive by modern standards, it was an important proof-of-concept for the open-source chatbot ecosystem.`,
    strengths: ['Historical Significance', 'Good Conversational Quality', 'Inspired Many Fine-Tunes'],
    weaknesses: ['Based on LLaMA 1 (License Issues)', 'Primitive by Modern Standards', 'Limited Context'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '🦙'
  },
  {
    id: 'pythia',
    name: 'Pythia',
    provider: 'EleutherAI',
    providerSlug: 'eleutherai',
    category: ['open-source', 'research', 'legacy'],
    tagline: 'Research Standard',
    description: 'EleutherAI\'s research models ranging from 14M to 12B parameters. Used for interpretability research.',
    essay: `Pythia is a family of language models developed by EleutherAI, a grassroots AI research collective. Ranging from tiny 14M parameter models to 12B parameter workhorses, Pythia is designed primarily for research purposes.

The models were trained on the same data in the same order, with multiple checkpoints saved throughout training. This makes them ideal for studying how language models learn and develop capabilities over time. Pythia has been widely used in interpretability research and scaling law studies.

While not competitive with frontier models, Pythia serves an important role in the research community. Its transparency and extensive documentation make it a valuable tool for understanding how AI models work.`,
    strengths: ['Research-Focused Design', 'Extensive Checkpoints', 'Transparent Training', 'Good for Interpretability'],
    weaknesses: ['Not Competitive for Tasks', 'Designed for Research Not Use', 'Limited Context'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '🐍'
  },
  {
    id: 'alpaca',
    name: 'Alpaca',
    provider: 'Stanford',
    providerSlug: 'stanford',
    category: ['open-source', 'legacy', 'research'],
    tagline: 'The $600 Fine-Tune',
    description: 'Stanford\'s LLaMA fine-tune that proved useful models could be trained for under $600.',
    essay: `Alpaca, released by Stanford researchers in March 2023, was a landmark demonstration of efficient fine-tuning. Starting from Llama 7B, the team created a capable instruction-following model using just 52K examples and approximately $600 in compute costs.

The training data was generated by GPT-3.5—essentially using OpenAI's model to create training data for an open alternative. This "self-distillation" approach proved remarkably effective and inspired countless similar projects.

Alpaca demonstrated that the barrier to entry for creating useful AI models was much lower than expected. It kickstarted the open-source fine-tuning ecosystem and proved that good data could compensate for smaller model size.`,
    strengths: ['Historical Significance', 'Low Training Cost', 'Inspired Ecosystem', 'Proof of Concept'],
    weaknesses: ['Based on LLaMA 1 (License Issues)', 'Primitive by Modern Standards', 'No Longer Maintained'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '🦙'
  },
  {
    id: 'codellama',
    name: 'Code Llama',
    provider: 'Meta',
    providerSlug: 'meta',
    category: ['open-source', 'coding', 'legacy', 'local'],
    tagline: 'The First Open Code Model',
    description: 'Meta\'s code-specialized LLaMA models in 7B, 13B, and 34B sizes. Python-specialized variants.',
    essay: `Code Llama, released by Meta in August 2023, was one of the first open-source models specifically designed for code. Built on top of Llama 2, it came in 7B, 13B, and 34B parameter sizes with both general code and Python-specialized variants.

The models supported infilling (filling in the middle of code) and had a 16K context window for most variants. Python-specialized models were trained on additional Python data and excelled at Python-specific tasks.

Code Llama represented an important step for open-source code assistance. While it has since been surpassed by newer models like Codestral and StarCoder2, it paved the way for open code models and remains useful for certain applications.`,
    strengths: ['First Major Open Code Model', 'Python Specialization', '16K Context', 'Multiple Sizes'],
    weaknesses: ['Superseded by Newer Models', 'Limited to Code', 'Performance Behind Modern Models'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '🐍'
  },
  {
    id: 'mpt',
    name: 'MPT',
    provider: 'MosaicML',
    providerSlug: 'mosaicml',
    category: ['open-source', 'legacy', 'local'],
    tagline: 'The Efficient Alternative',
    description: 'MosaicML\'s family of efficient models (7B, 30B) before the Databricks acquisition.',
    essay: `MPT (MosaicML Pretrained Transformer) was MosaicML's family of open-source language models. Released in 2023, the series included MPT-7B, MPT-30B, and specialized variants for chat, instruct, and long-context tasks.

The models were notable for their training efficiency and strong performance relative to their size. MPT-30B in particular offered GPT-3-like performance with much smaller infrastructure requirements. The storywriter variant supported a 65K context window for long-form content.

MosaicML was acquired by Databricks in 2023, and the MPT series has been largely superseded by Databricks' foundation models. However, MPT remains an important part of AI history as a pioneer in efficient training.`,
    strengths: ['Training Efficiency', 'Good Performance/Size Ratio', 'Long Context Variants', 'Open Source'],
    weaknesses: ['Deprecated After Acquisition', 'Superseded by Newer Models', 'No Active Development'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '🧩'
  },

  // ─── REGIONAL & SOVEREIGN MODELS ───
  {
    id: 'yi-1-5-34b',
    name: 'Yi 1.5 34B',
    provider: '01.AI',
    providerSlug: '01-ai',
    category: ['open-source', 'local', 'multilingual', 'reasoning'],
    tagline: 'China\'s Open Contender',
    description: '01.AI\'s 34B model that ranked first among open-source models on key benchmarks.',
    essay: `Yi 1.5 34B, released by Chinese startup 01.AI in May 2024, quickly established itself as one of the top open-source models. It achieved state-of-the-art performance on several benchmarks, ranking first among open models.

Founded by Kai-Fu Lee, 01.AI has positioned Yi as a bilingual model strong in both English and Chinese. The 1.5 series improved upon the original Yi with better reasoning, coding, and multilingual capabilities.

Yi models are available in sizes from 6B to 34B, with the 34B model being the flagship. The series also includes vision-language models (Yi-VL) and code-specialized models (Yi-Coder).`,
    strengths: ['Top Open Benchmark Scores', 'Bilingual English/Chinese', 'Strong Coding', 'Multiple Variants'],
    weaknesses: ['Data Governance Concerns', 'Less Ecosystem Than Llama', 'Chinese Documentation Focus'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🇨🇳'
  },
  {
    id: 'yi-coder',
    name: 'Yi-Coder',
    provider: '01.AI',
    providerSlug: '01-ai',
    category: ['open-source', 'coding', 'local'],
    tagline: 'Bilingual Code Assistant',
    description: '01.AI\'s code-specialized models in 1.5B and 9B sizes supporting 52 languages.',
    essay: `Yi-Coder is 01.AI's family of code-specialized models, available in 1.5B and 9B parameter sizes. Trained on 52 programming languages, it represents China's answer to Western coding models.

The models excel particularly at bilingual code—projects that mix English and Chinese comments, documentation, and variable names. The 9B variant supports a 128K context window, allowing it to work with entire codebases.

Yi-Coder demonstrates that strong coding models can be developed outside of Western labs, bringing capable code assistance to Chinese developers and supporting multilingual development.`,
    strengths: ['52 Languages', '128K Context', 'Bilingual Optimization', 'Open Weights'],
    weaknesses: ['Less English Ecosystem', 'Documentation Mostly Chinese', 'Newer Than Established Models'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '💻'
  },
  {
    id: 'baichuan-2',
    name: 'Baichuan 2',
    provider: 'Baichuan AI',
    providerSlug: 'baichuan',
    category: ['open-source', 'local', 'multilingual'],
    tagline: 'Chinese Open Source',
    description: 'Baichuan AI\'s 7B and 13B models optimized for Chinese and English language tasks.',
    essay: `Baichuan 2, released in late 2023, is one of China's major open-source model families. Available in 7B and 13B parameter sizes, it's optimized for Chinese language understanding while maintaining competitive English capabilities.

The models were trained on 2.6 trillion tokens including Chinese, English, and multilingual data. Baichuan 2 improved upon the original Baichuan with better reasoning, coding, and instruction-following capabilities.

Baichuan AI also offers API access to larger proprietary models and has developed specialized versions for finance and other verticals. The company represents China's growing AI capabilities and commitment to open research.`,
    strengths: ['Strong Chinese Performance', 'Decent English', 'Open Weights', 'Multiple Sizes'],
    weaknesses: ['Less Capable Than Qwen/Yi', 'Limited English Ecosystem', 'Smaller Training Data Than Western Models'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '🏔️'
  },
  {
    id: 'glm-4',
    name: 'GLM-4',
    provider: 'Zhipu AI',
    providerSlug: 'zhipu',
    category: ['open-source', 'local', 'multilingual'],
    tagline: 'China\'s #1 Open Model',
    description: 'Zhipu AI\'s ChatGLM series. The top-ranked Chinese open model with strong English capabilities.',
    essay: `GLM-4, released by Zhipu AI in 2024, is currently ranked as the #1 open-source Chinese language model. The ChatGLM series has been under continuous development since 2022.

The GLM architecture is unique, using autoregressive blank infilling rather than standard causal language modeling. This allows for bidirectional context understanding similar to BERT while maintaining generative capabilities.

GLM-4 includes models from 6B (ChatGLM3-6B) up to larger proprietary variants. It excels at Chinese tasks, coding, and has surprisingly good English capabilities for a Chinese-developed model.`,
    strengths: ['#1 Chinese Open Model', 'Unique Architecture', 'Strong Coding', 'Free Tiers Available'],
    weaknesses: ['Less Polished English', 'Limited Western Ecosystem', 'Documentation Mostly Chinese'],
    pricing: 'Free tier / API',
    releaseYear: 2024,
    icon: '🎋'
  },
  {
    id: 'kimi',
    name: 'Kimi',
    provider: 'Moonshot AI',
    providerSlug: 'moonshot',
    category: ['sovereign', 'multilingual', 'context'],
    tagline: 'The Chinese Context King',
    description: 'Moonshot AI\'s models with up to 2M token context. Popular for long-document processing in China.',
    essay: `Kimi, developed by Beijing-based Moonshot AI, has gained popularity in China for its massive context window and strong Chinese language capabilities. The latest versions support up to 2 million tokens of context.

The model is particularly popular for document analysis, legal review, and other tasks that require processing large amounts of Chinese text. Kimi has been integrated into various Chinese applications and services.

Moonshot AI has raised significant funding and is considered one of China's more promising AI startups. The Kimi models represent China's focus on practical applications of AI for domestic markets.`,
    strengths: ['2M Token Context', 'Strong Chinese', 'Document Processing', 'Popular in China'],
    weaknesses: ['Limited English Capabilities', 'China-Only Focus', 'Data Privacy Concerns'],
    pricing: 'API / Freemium',
    releaseYear: 2024,
    icon: '🌙'
  },
  {
    id: 'falcon-2',
    name: 'Falcon 2',
    provider: 'TII',
    providerSlug: 'tii',
    category: ['open-source', 'local', 'multilingual'],
    tagline: 'Arabia\'s AI',
    description: 'The UAE\'s Technology Innovation Institute models. Strong multilingual performance with Apache 2.0 licensing.',
    essay: `Falcon 2, released by Abu Dhabi's Technology Innovation Institute (TII) in May 2024, continues the Falcon series of open models. Available in 11B parameter size with both text and vision-language variants.

Falcon models are notable for their Apache 2.0 licensing—among the most permissive for commercial use—and strong multilingual capabilities. Falcon 2 includes improved performance on Arabic and other low-resource languages.

The original Falcon 180B was one of the first truly capable open models, and the Falcon 2 series continues this tradition with more efficient architectures and better multilingual support.`,
    strengths: ['Apache 2.0 License', 'Strong Arabic', 'Multilingual', 'Vision Variants'],
    weaknesses: ['Less Capable Than Newer Models', 'Limited Ecosystem', 'Smaller Training Data'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🦅'
  },
  {
    id: 'gigachat',
    name: 'GigaChat',
    provider: 'Sber',
    providerSlug: 'sber',
    category: ['sovereign', 'multilingual'],
    tagline: 'Russia\'s Answer',
    description: 'Sberbank\'s AI assistant. Russia\'s largest open-source AI project with multimodal capabilities.',
    essay: `GigaChat is Russia's flagship AI assistant, developed by banking giant Sber. Launched in Q2 2023, it has grown to over 6 million users and 4,000+ business clients.

The latest versions, GigaChat 2 MAX and GigaChat Ultra, have achieved #1 ranking on Russia's MERA benchmark for Russian language models. Sber has open-sourced some model weights, making it Europe's largest open-source AI project.

GigaChat includes text, vision, and voice capabilities. It represents Russia's push for technological sovereignty and reduced dependence on Western AI systems. Sber has also developed the Kandinsky image generation family as part of the same ecosystem.`,
    strengths: ['#1 on Russian Benchmarks', 'Open Weights Available', 'Multimodal', 'Large User Base'],
    weaknesses: ['Russia-Focused', 'Limited International Appeal', 'Geopolitical Concerns'],
    pricing: 'Free tier / Enterprise',
    releaseYear: 2023,
    icon: '🇷🇺'
  },
  {
    id: 'yandexgpt',
    name: 'YandexGPT',
    provider: 'Yandex',
    providerSlug: 'yandex',
    category: ['sovereign', 'multilingual'],
    tagline: 'Russia\'s Search Giant AI',
    description: 'Yandex\'s language models powering Alice and other Yandex services. Specialized for Russian.',
    essay: `YandexGPT is the family of language models developed by Russian tech giant Yandex. Now in its 4th and 5th generations, it powers Yandex's Alice voice assistant, search, and other services.

The models are optimized for Russian language understanding while maintaining decent English capabilities. YandexGPT 3 and later versions include Pro variants with enhanced capabilities.

Yandex has integrated these models throughout its ecosystem, from search to smart home devices. They represent Russia's alternative to Western AI assistants and are continuously updated through Yandex Cloud.`,
    strengths: ['Deep Yandex Integration', 'Strong Russian', 'Voice Assistant', 'Continuously Updated'],
    weaknesses: ['Russia-Focused', 'Less Capable Than Global Leaders', 'Limited API Access Outside Russia'],
    pricing: 'Yandex Cloud',
    releaseYear: 2023,
    icon: '🔎'
  },
  {
    id: 'krutrim',
    name: 'Krutrim',
    provider: 'Ola',
    providerSlug: 'ola',
    category: ['sovereign', 'multilingual'],
    tagline: 'India\'s AI',
    description: 'India\'s first AI model focused on Indian languages and cultural context.',
    essay: `Krutrim, developed by Ola (an Indian ride-sharing company), is India's first homegrown AI model. It focuses on Indian languages and cultural context, addressing the gap in AI representation for South Asian languages.

The model is designed to understand and generate text in multiple Indian languages, including Hindi, Tamil, Telugu, and others. It incorporates cultural nuances and context that Western models often miss.

Krutrim represents India's push for AI sovereignty and the development of models that serve the country's diverse linguistic landscape. The project has received significant government backing.`,
    strengths: ['Indian Language Focus', 'Cultural Context', 'Government Support', 'Sovereign AI'],
    weaknesses: ['Newer Project', 'Less Capable Than Global Models', 'Limited Documentation'],
    pricing: 'API / Freemium',
    releaseYear: 2024,
    icon: '🇮🇳'
  },
  {
    id: 'sarvam-1',
    name: 'Sarvam 1',
    provider: 'Sarvam AI',
    providerSlug: 'sarvam',
    category: ['open-source', 'multilingual'],
    tagline: 'Indic Languages Specialist',
    description: 'Indian startup\'s model focused on 10 major Indic languages with efficient architecture.',
    essay: `Sarvam 1, developed by Indian startup Sarvam AI, focuses specifically on Indic languages. Unlike global models that treat Indian languages as an afterthought, Sarvam is designed from the ground up for languages like Hindi, Bengali, Tamil, and Telugu.

The model uses an efficient architecture that makes it accessible for deployment in India's cost-sensitive market. It's particularly popular for applications in education, governance, and local language content creation.

Sarvam AI has also developed smaller models (2B, OpenHathi, Shuka 1.0) for specific use cases, representing India's growing AI ecosystem.`,
    strengths: ['Indic Language Optimization', 'Efficient Architecture', 'Local Focus', 'Multiple Model Sizes'],
    weaknesses: ['Less Capable for English', 'Newer Company', 'Smaller Training Data'],
    pricing: 'API / Open Weights',
    releaseYear: 2024,
    icon: '🇮🇳'
  },

  // ─── SPECIALIZED MODELS ───
  {
    id: 'med-palm-2',
    name: 'Med-PaLM 2',
    provider: 'Google',
    providerSlug: 'google',
    category: ['specialized', 'medical', 'research'],
    tagline: 'Medical AI',
    description: 'Google\'s medical language models designed for healthcare applications and medical knowledge.',
    essay: `Med-PaLM 2 (Medical PaLM 2) is Google's family of language models specialized for medical knowledge and healthcare applications. Building on the PaLM 2 architecture, these models are fine-tuned on medical data and evaluated by healthcare professionals.

Med-PaLM 2 achieved "expert" level performance on US Medical Licensing Exam (USMLE) style questions, demonstrating that AI models could acquire sophisticated medical reasoning capabilities. It also showed strong performance on medical question answering and summarization.

The models are primarily used for research rather than clinical applications. They represent Google's exploration of domain-specialized AI and the potential for AI to assist in medical education, research, and eventually clinical decision support.`,
    strengths: ['Medical Knowledge', 'USMLE Performance', 'Research Quality', 'Domain Specialization'],
    weaknesses: ['Not for Clinical Use', 'Research Only', 'Hallucination Risks', 'Medical Liability Concerns'],
    pricing: 'Research access',
    releaseYear: 2023,
    icon: '🏥'
  },
  {
    id: 'alphafold-3',
    name: 'AlphaFold 3',
    provider: 'Google DeepMind',
    providerSlug: 'google',
    category: ['science', 'biology', 'research'],
    tagline: 'Molecular Prediction',
    description: 'DeepMind\'s protein structure prediction model that expanded to DNA, RNA, and ligand interactions.',
    essay: `AlphaFold 3, released in May 2024, expanded beyond proteins to predict the structure and interactions of DNA, RNA, ligands, and more. It represents a significant advance in computational biology.

The model can predict how proteins interact with other molecules—a crucial capability for drug discovery. Unlike AlphaFold 2 which focused on single protein structures, AlphaFold 3 models complex molecular systems.

DeepMind has made AlphaFold 3 predictions available through a public database while keeping the model itself proprietary. The technology has been licensed to Isomorphic Labs for drug discovery applications.`,
    strengths: ['Molecular Interactions', 'Drug Discovery Applications', 'Public Database', 'Scientific Breakthrough'],
    weaknesses: ['Proprietary Model', 'Specialized Use Only', 'Requires Domain Expertise', 'Not for General AI'],
    pricing: 'Free predictions / Enterprise licensing',
    releaseYear: 2024,
    icon: '🧬'
  },
  {
    id: 'stable-diffusion-3',
    name: 'Stable Diffusion 3',
    provider: 'Stability AI',
    providerSlug: 'stability',
    category: ['image', 'creative', 'open-source'],
    tagline: 'Open Image Generation',
    description: 'Stability AI\'s text-to-image models with improved photorealism and text rendering.',
    essay: `Stable Diffusion 3, released in 2024, represents the latest generation of Stability AI's flagship image generation models. Using a new MMDiT (Multimodal Diffusion Transformer) architecture, SD3 significantly improved photorealism and text rendering capabilities.

The model comes in multiple sizes from 800M to 8B parameters, with the SD 3.5 series (released late 2024) offering further improvements. Stability AI has maintained an open-weights philosophy while also offering commercial licensing options.

Stable Diffusion has become the standard for open-source image generation, powering countless applications and services. The SD3 series improves upon earlier versions with better understanding of complex prompts and more consistent outputs.`,
    strengths: ['Open Weights', 'Photorealism', 'Text Rendering', 'Multiple Sizes'],
    weaknesses: ['Behind Midjourney in Quality', 'Requires Prompt Engineering', 'Generation Speed'],
    pricing: 'Open weights / API',
    releaseYear: 2024,
    icon: '🖼️'
  },
  {
    id: 'stable-diffusion-xl',
    name: 'Stable Diffusion XL',
    provider: 'Stability AI',
    providerSlug: 'stability',
    category: ['image', 'creative', 'open-source'],
    tagline: 'Open Image Generation',
    description: 'Stability AI\'s popular image generation model with improved photorealism and composition.',
    essay: `Stable Diffusion XL (SDXL), released in 2023, represented a major leap forward for open-source image generation. With a base resolution of 1024x1024 (up from 512x512 in SD 1.5), it could create much more detailed and realistic images.

SDXL introduced native two-image composition, improved text understanding, and better handling of faces and text within images. It became the standard for open-source image generation, powering countless applications and services.

The model has been extensively fine-tuned by the community, with variants like SDXL Turbo offering faster generation. While newer models exist, SDXL remains popular due to its stability, quality, and extensive ecosystem.`,
    strengths: ['Open Source', '1024x1024 Native', 'Good Photorealism', 'Massive Ecosystem'],
    weaknesses: ['Behind SD3 and Midjourney', 'Requires Prompt Engineering', 'Generation Speed'],
    pricing: 'Open weights / API',
    releaseYear: 2023,
    icon: '🖼️'
  },
  {
    id: 'dall-e-2',
    name: 'DALL-E 2',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['legacy', 'image', 'creative'],
    tagline: 'The Original',
    description: 'OpenAI\'s 2022 image generation model that popularized AI art before DALL-E 3 and Midjourney.',
    essay: `DALL-E 2, released in April 2022, was the model that brought AI image generation to mainstream attention. Using CLIP-guided diffusion, it could create realistic images and art from natural language descriptions.

The model introduced key concepts like inpainting (editing part of an image) and variations (creating similar images). Its 1024x1024 resolution and artistic capabilities impressed users and sparked the AI art boom.

While superseded by DALL-E 3 and outperformed artistically by Midjourney, DALL-E 2 remains historically significant as the model that proved AI could understand and create visual art.`,
    strengths: ['Historical Breakthrough', 'Inpainting', 'Variations', 'Good Artistic Understanding'],
    weaknesses: ['Superseded by DALL-E 3', 'Behind Midjourney Quality', 'Limited Text in Images'],
    pricing: 'Deprecated (replaced by DALL-E 3)',
    releaseYear: 2022,
    icon: '🎨'
  },
  {
    id: 'whisper-large-v3',
    name: 'Whisper Large v3',
    provider: 'OpenAI',
    providerSlug: 'openai',
    category: ['audio', 'open-source', 'speech'],
    tagline: 'Open Speech Recognition',
    description: 'OpenAI\'s open-source speech recognition model with strong multilingual support.',
    essay: `Whisper, released by OpenAI in 2022 with Large v3 following in 2023, is an automatic speech recognition system trained on 680,000 hours of multilingual data. Despite being OpenAI, it's fully open-source and has become the standard for speech recognition.

The model excels at transcription, translation, and language identification. It handles multiple languages, accents, and even overlapping speech reasonably well. The Large v3 model offers the best accuracy while smaller models trade some quality for speed.

Whisper has been integrated into countless applications, from automatic captioning to meeting transcription to voice assistants. It represents one of OpenAI's most significant contributions to open-source AI.`,
    strengths: ['Open Source', 'Multilingual', 'High Accuracy', 'Multiple Model Sizes'],
    weaknesses: ['Can Be Slow on CPU', 'Hallucinates Rarely', 'Large Model Size'],
    pricing: 'Free (Open Source)',
    releaseYear: 2023,
    icon: '🎤'
  },
  {
    id: 'command-r-plus',
    name: 'Command R+',
    provider: 'Cohere',
    providerSlug: 'cohere',
    category: ['enterprise', 'rag', 'coding'],
    tagline: 'RAG Champion',
    description: 'Cohere\'s flagship model optimized for Retrieval Augmented Generation with strong citation accuracy.',
    essay: `Command R+, released in 2024, is Cohere's flagship model designed specifically for Retrieval Augmented Generation (RAG) use cases. Unlike general-purpose models, Command R+ is optimized to work with external knowledge sources and provide accurate citations.

The model excels at document analysis, question answering with sources, and enterprise knowledge tasks. Its "citation-first" approach makes it less prone to hallucination when working with provided documents.

Cohere has positioned Command R+ as the enterprise alternative to GPT-4, particularly for companies that need accurate, sourced answers from their own documents and data.`,
    strengths: ['RAG Optimization', 'Citation Accuracy', 'Document Analysis', 'Enterprise Focus'],
    weaknesses: ['Less Creative', 'Not Ideal for Chat', 'Behind GPT-4 General Capabilities'],
    pricing: '~$3.00 / 1M input, ~$15.00 / 1M output',
    releaseYear: 2024,
    icon: '📚'
  },
  {
    id: 'snowflake-arctic',
    name: 'Snowflake Arctic',
    provider: 'Snowflake',
    providerSlug: 'snowflake',
    category: ['enterprise', 'open-source'],
    tagline: 'Enterprise-Grade Open',
    description: 'Snowflake\'s dense-MoE hybrid LLM and embedding models integrated with Cortex AI.',
    essay: `Snowflake Arctic is a family of AI models developed by Snowflake for their Cortex AI platform. The flagship Arctic LLM uses a hybrid dense-MoE architecture, combining the strengths of both approaches.

The models are designed for enterprise use cases with Snowflake's data platform. Arctic Embed provides multilingual embedding capabilities, while Arctic-TILT focuses on document AI.

Snowflake has open-sourced the model weights while maintaining enterprise-grade support through their platform. This hybrid approach appeals to organizations who want open models with vendor backing.`,
    strengths: ['Open Weights', 'Enterprise Support', 'Snowflake Integration', 'Hybrid Architecture'],
    weaknesses: ['Platform Lock-in', 'Less Known Than Competitors', 'Smaller Ecosystem'],
    pricing: 'Snowflake Cortex pricing',
    releaseYear: 2024,
    icon: '❄️'
  },

  // ─── EMERGING AND PLATFORM MODELS ───
  {
    id: 'inflection-3',
    name: 'Inflection 3.0',
    provider: 'Inflection AI',
    providerSlug: 'inflection',
    category: ['chatbot', 'emotional', 'enterprise'],
    tagline: 'Empathetic AI',
    description: 'Inflection\'s models designed for empathetic conversation. Now focused on enterprise after restructuring.',
    essay: `Inflection 3.0, released in October 2024, represents the latest generation of Inflection AI's models. Initially famous for the Pi chatbot known for its empathetic personality, Inflection has pivoted toward enterprise offerings.

The models come in Pi (personal), Productivity, and Enterprise variants. They're designed to be engaging, emotionally intelligent, and capable of natural conversation. Inflection has emphasized safety and responsible AI deployment throughout their model development.

In 2024, Inflection underwent a major restructuring with much of the team joining Microsoft. The company continues to develop models but with a stronger focus on enterprise applications rather than consumer chatbots.`,
    strengths: ['Empathetic Personality', 'Safety Focus', 'Natural Conversation', 'Multiple Variants'],
    weaknesses: ['Not Frontier Performance', 'Company Restructuring', 'Less Capable Than Competitors'],
    pricing: '$2.50 / 1M input, $10.00 / 1M output',
    releaseYear: 2024,
    icon: '💜'
  },
  {
    id: 'character-ai',
    name: 'Character.ai Models',
    provider: 'Character.ai',
    providerSlug: 'character',
    category: ['chatbot', 'entertainment', 'roleplay'],
    tagline: 'Character RP',
    description: 'Specialized models for character roleplay and entertainment conversations.',
    essay: `Character.ai developed specialized models optimized for character roleplay and entertainment conversations. Their models excel at maintaining consistent character personalities, engaging in creative scenarios, and providing entertainment-focused interactions.

In August 2024, Character.ai's founders returned to Google in a $2.7B deal, with Google licensing the company's technology. The company continues to operate but with reduced independence.

Character.ai's models represent a niche approach to AI—focusing on entertainment and social interaction rather than productivity or reasoning. They've been particularly popular with younger users for creative roleplay scenarios.`,
    strengths: ['Character Consistency', 'Creative Roleplay', 'Entertainment Focus', 'User Engagement'],
    weaknesses: ['No Official API', 'Not for Productivity', 'Limited Utility Outside Entertainment'],
    pricing: 'Subscription (c.ai+)',
    releaseYear: 2022,
    icon: '🎭'
  },
  {
    id: 'perplexity-sonar',
    name: 'Perplexity Sonar',
    provider: 'Perplexity',
    providerSlug: 'perplexity',
    category: ['search', 'api', 'production'],
    tagline: 'Search API',
    description: 'Perplexity\'s API models combining search with generation for applications.',
    essay: `Perplexity Sonar is the API offering from Perplexity, combining their search capabilities with language model generation. It allows developers to add grounded, cited search-and-answer capabilities to their applications.

The Sonar models are optimized for web search integration, real-time information access, and citation accuracy. They power Perplexity's consumer product and are available via API for enterprise integration.

With pricing at $0.25/1M input tokens and $2.50/1M output tokens, Sonar offers a cost-effective solution for applications that need accurate, up-to-date information with proper citations.`,
    strengths: ['Web Search Integration', 'Citation Accuracy', 'Real-Time Info', 'Cost Effective'],
    weaknesses: ['Search-Dependent', 'Less Capable Offline', 'API Rate Limits'],
    pricing: '$0.25 / 1M input, $2.50 / 1M output',
    releaseYear: 2024,
    icon: '📡'
  },
  {
    id: 'together-models',
    name: 'Together AI Models',
    provider: 'Together AI',
    providerSlug: 'together',
    category: ['platform', 'open-source', 'enterprise'],
    tagline: 'The Open Model Platform',
    description: 'Platform offering 100+ open-source models via optimized inference. Popular for model access.',
    essay: `Together AI is not a single model but a platform offering access to 100+ open-source models via optimized serverless inference. They've become popular for developers who want to use open models without managing infrastructure.

Popular models on Together include DeepSeek-R1, various Llama variants, Mistral models, and countless community fine-tunes. Together's value proposition is fast, affordable inference for any open model.

The company has developed its own inference optimizations and offers both per-token pricing and dedicated throughput options. They've become a go-to platform for startups and enterprises looking to deploy open models at scale.`,
    strengths: ['100+ Models Available', 'Fast Inference', 'No Infrastructure Management', 'Competitive Pricing'],
    weaknesses: ['Platform Not Model', 'Vendor Lock-in Risk', 'Dependent on Upstream Models'],
    pricing: 'Per-model pricing',
    releaseYear: 2023,
    icon: '🔗'
  },
  {
    id: 'replicate-models',
    name: 'Replicate Models',
    provider: 'Replicate',
    providerSlug: 'replicate',
    category: ['platform', 'creative', 'open-source'],
    tagline: 'Run Any Model',
    description: 'Platform for running 100+ official models including image, video, audio, and text generation.',
    essay: `Replicate is a platform that makes it easy to run AI models without managing infrastructure. While Together AI focuses on language models, Replicate offers a wider variety including image generation (Stable Diffusion), video (SVD), audio, and text models.

Popular models on Replicate include Stable Diffusion XL, FLUX for images, and various Llama fine-tunes for text. The platform is known for its simple API—just POST a dictionary and get results.

Replicate has become particularly popular for creative applications where developers need access to multiple model types without building separate infrastructure for each. They also host custom models from the community.`,
    strengths: ['Simple API', 'Many Model Types', 'Community Models', 'Pay-Per-Use'],
    weaknesses: ['Platform Not Model', 'Can Be Expensive at Scale', 'Dependent on Upstream'],
    pricing: 'Pay-per-use per model',
    releaseYear: 2023,
    icon: '🔄'
  },
  {
    id: 'huggingface-inference',
    name: 'Hugging Face Inference',
    provider: 'Hugging Face',
    providerSlug: 'huggingface',
    category: ['platform', 'open-source', 'enterprise'],
    tagline: 'Model Hub Inference',
    description: 'Hugging Face\'s inference API for 200,000+ models from their model hub.',
    essay: `Hugging Face's Inference API provides access to over 200,000 models from their model hub. Instead of hosting models yourself, you can call their API to run inference on any model they host.

The service supports text generation, computer vision, audio, and multimodal models. It's particularly popular for trying new models without deployment and for production use of community models.

Hugging Face offers both serverless inference (pay-per-use) and dedicated inference endpoints for production workloads. The platform has become the de facto standard for sharing and deploying open-source AI models.`,
    strengths: ['200K+ Models', 'Simple API', 'Community Hub', 'Multiple Deployment Options'],
    weaknesses: ['Platform Not Model', 'Cold Start Issues', 'Variable Quality'],
    pricing: 'Pay-per-use',
    releaseYear: 2021,
    icon: '🤗'
  },
  {
    id: 'nomic-embed',
    name: 'Nomic Embed',
    provider: 'Nomic AI',
    providerSlug: 'nomic',
    category: ['open-source', 'embeddings', 'local'],
    tagline: 'Open Embeddings',
    description: 'Fully open-source embedding models with long context and strong performance.',
    essay: `Nomic Embed is a family of text embedding models from Nomic AI that are notable for being truly open source—open weights, open data, and open training code. This contrasts with many other "open" models that keep some components proprietary.

The models support long context (up to 8192 tokens in v1.5) and have achieved strong performance on benchmark tasks. Nomic Embed v1.5 outperforms OpenAI's text-embedding-ada-002 on many benchmarks while being fully open.

Nomic AI has emphasized reproducibility and transparency, publishing extensive details about their training process. This makes Nomic Embed popular for researchers and organizations that need embedding models without vendor lock-in.`,
    strengths: ['Fully Open Source', 'Long Context', 'Strong Benchmarks', 'No Vendor Lock-in'],
    weaknesses: ['Embedding Only (Not Generative)', 'Less Marketing Than Competitors', 'Smaller Company'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🎯'
  },
  {
    id: 'jamba',
    name: 'Jamba 1.5',
    provider: 'AI21 Labs',
    providerSlug: 'ai21',
    category: ['open-source', 'local', 'efficient'],
    tagline: 'The Hybrid Architecture',
    description: 'AI21\'s models combining Transformer and Mamba architectures for efficiency. 256K context.',
    essay: `Jamba 1.5, released by AI21 Labs, represents a novel hybrid architecture combining Transformer layers with Mamba's state space models. This approach aims to get the best of both—Transformer performance with Mamba efficiency.

The models feature a massive 256K context window and come in multiple sizes including a "Mini" variant. They're designed to be efficient at scale while maintaining strong capabilities across text, reasoning, and coding tasks.

AI21 Labs offers both open weights for self-hosting and API access. The company has been developing AI models since 2022, with Jamba representing their latest generation after the Jurassic series.`,
    strengths: ['256K Context', 'Hybrid Architecture', 'Multiple Sizes', 'Open Weights Available'],
    weaknesses: ['Less Known Than Competitors', 'Smaller Ecosystem', 'Newer Architecture'],
    pricing: '$0.20 / 1M input, $0.40 / 1M output (Mini)',
    releaseYear: 2024,
    icon: '🔀'
  },
  {
    id: 'olmo-2',
    name: 'OLMo 2',
    provider: 'AllenAI',
    providerSlug: 'allenai',
    category: ['open-source', 'research', 'local'],
    tagline: 'Fully Open Research',
    description: 'AllenAI\'s fully open models (7B, 13B, 32B) with open training data and code.',
    essay: `OLMo 2, released by AllenAI in November 2024, represents one of the most transparent language model projects. Unlike many "open" models that only release weights, OLMo 2 releases everything: training data, training code, evaluation code, and weights.

Available in 7B, 13B, and 32B parameter sizes, OLMo 2 is designed primarily for research. It allows researchers to study every aspect of how modern language models are trained and evaluated.

AllenAI has continued developing the OLMo family with OLMo 3 (November 2025) pushing transparency even further. For researchers who need fully reproducible models, OLMo is the gold standard.`,
    strengths: ['Fully Open (Data+Code+Weights)', 'Research-Focused', 'Multiple Sizes', 'Reproducible'],
    weaknesses: ['Not Optimized for Production', 'Less Performance Than Frontier', 'Research Focus'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🔬'
  },
  {
    id: 'dbrx',
    name: 'DBRX',
    provider: 'Databricks',
    providerSlug: 'databricks',
    category: ['open-source', 'enterprise', 'local'],
    tagline: 'Enterprise Open Source',
    description: 'Databricks\' Mixture-of-Experts model (132B) with fully open training code.',
    essay: `DBRX, released by Databricks in April 2024, is a Mixture-of-Experts language model with 132 billion total parameters (16B active per token). What makes DBRX notable is its fully open training code—Databricks released everything needed to reproduce the model.

The model was trained on 12 trillion tokens using a new MoE architecture called "DBRX Mixtral-style" that improves upon earlier designs. It achieved strong performance on benchmarks while being more efficient than dense models of similar capability.

DBRX represents Databricks' commitment to open AI after their acquisition of MosaicML. It's integrated with their Mosaic AI platform for enterprise customers while remaining fully open for the community.`,
    strengths: ['Open Training Code', 'MoE Efficiency', 'Strong Benchmarks', 'Enterprise Integration'],
    weaknesses: ['Large Hardware Requirements', 'Less Known Than Llama', 'Platform Focus'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🧱'
  },
  {
    id: 'smaug',
    name: 'Smaug',
    provider: 'ab',
    providerSlug: 'ab',
    category: ['open-source', 'reasoning', 'local'],
    tagline: 'First 70B Open Leader',
    description: 'ab\'s fine-tune of Qwen 72B that was first to top OpenAI leaderboard among open models.',
    essay: `Smaug, released by ab in January 2024, was a significant milestone for open-source AI. Based on Qwen 72B, it was the first open-weights model to reach the top of OpenAI's leaderboard, surpassing GPT-3.5-turbo-0125.

The model demonstrated that open-source fine-tuning could push models beyond their original capabilities. Smaug excelled at reasoning, math, and coding tasks, proving that the open-source community could compete with frontier labs.

While the model is less known today, it represented a turning point—proof that open models could reach and even surpass closed-source performance on key benchmarks.`,
    strengths: ['First Open Model to Top OpenAI Leaderboard', 'Strong Reasoning', 'Based on Solid Qwen Base'],
    weaknesses: ['Less Active Development', 'Superseded by Newer Models', 'Smaller Ecosystem'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2024,
    icon: '🐉'
  },
  {
    id: 'openchat-3-5',
    name: 'OpenChat 3.5',
    provider: 'Community',
    providerSlug: 'community',
    category: ['open-source', 'chatbot', 'coding'],
    tagline: 'C-RLFT Innovation',
    description: 'Community model using C-RLFT training that achieved GPT-4-level performance with 7B parameters.',
    essay: `OpenChat 3.5, released in December 2023, demonstrated that innovative training methods could compensate for smaller model size. Using C-RLFT (Conscious Reinforcement Learning from Feedback), the 7B parameter model achieved performance comparable to much larger models.

The model excelled particularly at coding tasks, where it often matched or exceeded the performance of models 10x its size. This efficiency made it popular for local deployments and edge applications.

OpenChat's training methodology influenced many subsequent projects, showing that clever training approaches could be as important as raw model scale.`,
    strengths: ['Efficient Training Method', 'Good for 7B Size', 'Strong Coding', 'Open Source'],
    weaknesses: ['7B Limited for Complex Tasks', 'Less Polished Than Commercial Models', 'Community Support Only'],
    pricing: 'Free (Open Weights)',
    releaseYear: 2023,
    icon: '💬'
  },
  {
    id: 'replit-code',
    name: 'Replit Code',
    provider: 'Replit',
    providerSlug: 'replit',
    category: ['coding', 'platform', 'education'],
    tagline: 'IDE Coding Assistant',
    description: 'Replit\'s code completion model integrated into their online IDE.',
    essay: `Replit Code is a code completion model specifically designed for Replit's online IDE. Unlike general-purpose coding models, it's optimized for Replit's environment and their users' workflows.

The model provides intelligent code completion, explanation, and generation within the Replit editor. It's particularly popular among beginners and educators due to its integration with Replit's learning-focused platform.

Replit has continued developing their AI capabilities, with newer models offering better performance and deeper IDE integration. It represents the trend of AI models being integrated directly into development tools.`,
    strengths: ['Deep IDE Integration', 'Educational Focus', 'Fast in Replit Environment', 'Beginner-Friendly'],
    weaknesses: ['Replit Platform Lock-in', 'Less Capable Than GitHub Copilot', 'Web-Based Only'],
    pricing: 'Included with Replit Core',
    releaseYear: 2023,
    icon: '💻'
  }
];

export const additionalProviders = [
  {
    id: '01-ai',
    name: '01.AI',
    description: 'Chinese AI startup founded by Kai-Fu Lee. Makers of Yi models.',
    essay: `01.AI is a Chinese AI startup founded by Kai-Fu Lee, focusing on open-source language models optimized for both English and Chinese. Their Yi series has achieved top rankings among open models.`,
    models: ['yi-1-5-34b', 'yi-coder'],
    website: 'https://01.ai',
    icon: '🇨🇳'
  },
  {
    id: 'baichuan',
    name: 'Baichuan AI',
    description: 'Chinese open-source AI models for Asian languages.',
    essay: `Baichuan AI develops open-source language models optimized for Chinese and other Asian languages. Their Baichuan 2 series is freely available for commercial use.`,
    models: ['baichuan-2'],
    website: 'https://baichuan-ai.com',
    icon: '🏔️'
  },
  {
    id: 'zhipu',
    name: 'Zhipu AI',
    description: 'China\'s leading open-source model developer. Makers of GLM/ChatGLM.',
    essay: `Zhipu AI develops the GLM and ChatGLM series of language models. Their GLM-4 is currently ranked as the #1 open-source Chinese language model.`,
    models: ['glm-4'],
    website: 'https://zhipuai.cn',
    icon: '🎋'
  },
  {
    id: 'moonshot',
    name: 'Moonshot AI',
    description: 'Chinese AI startup focused on long-context models. Makers of Kimi.',
    essay: `Moonshot AI develops the Kimi series of language models with massive context windows up to 2 million tokens. Popular in China for document processing.`,
    models: ['kimi'],
    website: 'https://moonshot.cn',
    icon: '🌙'
  },
  {
    id: 'tii',
    name: 'Technology Innovation Institute (TII)',
    description: 'UAE\'s AI research institute. Makers of Falcon models.',
    essay: `The Technology Innovation Institute in Abu Dhabi develops the Falcon series of open-source language models with strong multilingual capabilities and permissive licensing.`,
    models: ['falcon-2'],
    website: 'https://tii.ae',
    icon: '🦅'
  },
  {
    id: 'sber',
    name: 'Sber',
    description: 'Russian banking giant\'s AI division. Makers of GigaChat.',
    essay: `Sberbank's AI division develops GigaChat, Russia\'s largest open-source AI project. The models include text, vision, and voice capabilities.`,
    models: ['gigachat'],
    website: 'https://ai.sber',
    icon: '🇷🇺'
  },
  {
    id: 'yandex',
    name: 'Yandex',
    description: 'Russian tech giant. Makers of YandexGPT and Alice assistant.',
    essay: `Yandex develops YandexGPT language models that power their Alice voice assistant, search, and other services across the Russian-speaking world.`,
    models: ['yandexgpt'],
    website: 'https://yandex.com',
    icon: '🔎'
  },
  {
    id: 'ola',
    name: 'Ola',
    description: 'Indian ride-sharing company\'s AI division. Makers of Krutrim.',
    essay: `Ola develops Krutrim, India\'s first homegrown AI model focused on Indian languages and cultural context.`,
    models: ['krutrim'],
    website: 'https://olamojo.com',
    icon: '🇮🇳'
  },
  {
    id: 'sarvam',
    name: 'Sarvam AI',
    description: 'Indian AI startup for Indic languages. Makers of Sarvam models.',
    essay: `Sarvam AI develops language models optimized specifically for Indic languages like Hindi, Bengali, Tamil, and Telugu.`,
    models: ['sarvam-1'],
    website: 'https://sarvam.ai',
    icon: '🇮🇳'
  },
  {
    id: 'bigcode',
    name: 'BigCode',
    description: 'Open-source code generation collaboration. Makers of StarCoder.',
    essay: `The BigCode project is an open-source collaboration developing StarCoder, a family of code generation models trained on 600+ programming languages.`,
    models: ['starcoder2'],
    website: 'https://bigcode-project.org',
    icon: '⭐'
  },
  {
    id: 'eleutherai',
    name: 'EleutherAI',
    description: 'Grassroots AI research collective. Makers of Pythia.',
    essay: `EleutherAI is a grassroots collective focused on open AI research. Their Pythia models are widely used for interpretability research.`,
    models: ['pythia'],
    website: 'https://eleuther.ai',
    icon: '🐍'
  },
  {
    id: 'stanford',
    name: 'Stanford CRFM',
    description: 'Stanford\'s Center for Research on Foundation Models. Makers of Alpaca.',
    essay: `Stanford's Center for Research on Foundation Models developed Alpaca, a landmark demonstration of efficient fine-tuning.`,
    models: ['alpaca'],
    website: 'https://crfm.stanford.edu',
    icon: '🎓'
  },
  {
    id: 'mosaicml',
    name: 'MosaicML (Databricks)',
    description: 'Efficient AI training company acquired by Databricks. Makers of MPT.',
    essay: `MosaicML developed the MPT family of efficient language models before being acquired by Databricks in 2023.`,
    models: ['mpt', 'dbrx'],
    website: 'https://www.databricks.com',
    icon: '🧱'
  },
  {
    id: 'nomic',
    name: 'Nomic AI',
    description: 'Fully open-source AI company. Makers of Nomic Embed.',
    essay: `Nomic AI develops truly open-source embedding models with transparent training code and data.`,
    models: ['nomic-embed'],
    website: 'https://nomic.ai',
    icon: '🎯'
  },
  {
    id: 'lmsys',
    name: 'LMSYS',
    description: 'Large Model Systems Organization. Makers of Vicuna and Chatbot Arena.',
    essay: `LMSYS develops Vicuna and runs the Chatbot Arena, a crowdsourced platform for evaluating AI models through human preference voting.`,
    models: ['vicuna'],
    website: 'https://lmsys.org',
    icon: '🦙'
  },
  {
    id: 'allenai',
    name: 'AllenAI',
    description: 'AI research institute. Makers of OLMo fully open models.',
    essay: `AllenAI develops the OLMo family of fully open language models with transparent training data and code.`,
    models: ['olmo-2', 'alphafold-3'],
    website: 'https://allenai.org',
    icon: '🔬'
  },
  {
    id: 'stability',
    name: 'Stability AI',
    description: 'Open-source image generation pioneers. Makers of Stable Diffusion.',
    essay: `Stability AI develops the Stable Diffusion family of image generation models, maintaining an open-weights philosophy while also offering commercial licensing.`,
    models: ['stable-diffusion-3', 'stable-diffusion-xl'],
    website: 'https://stability.ai',
    icon: '🖼️'
  },
  {
    id: 'inflection',
    name: 'Inflection AI',
    description: 'Emotional intelligence AI. Makers of Pi chatbot and Inflection 3.0.',
    essay: `Inflection AI develops models optimized for empathetic conversation and emotional intelligence. Originally known for the Pi chatbot, now focused on enterprise.`,
    models: ['inflection-3'],
    website: 'https://inflection.ai',
    icon: '💜'
  },
  {
    id: 'character',
    name: 'Character.ai',
    description: 'Character roleplay AI platform.',
    essay: `Character.ai develops specialized models for character roleplay and entertainment conversations. Notable for creative applications and younger user base.`,
    models: ['character-ai'],
    website: 'https://character.ai',
    icon: '🎭'
  },
  {
    id: 'together',
    name: 'Together AI',
    description: 'Open model inference platform.',
    essay: `Together AI provides fast, affordable inference for 100+ open-source models without requiring infrastructure management.`,
    models: ['together-models'],
    website: 'https://together.ai',
    icon: '🔗'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Run any model platform.',
    essay: `Replicate makes it easy to run AI models via simple API, supporting image, video, audio, and text models.`,
    models: ['replicate-models'],
    website: 'https://replicate.com',
    icon: '🔄'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'The AI community hub with 200K+ models.',
    essay: `Hugging Face hosts the world\'s largest collection of AI models and provides inference APIs for running them.`,
    models: ['huggingface-inference'],
    website: 'https://huggingface.co',
    icon: '🤗'
  },
  {
    id: 'replit',
    name: 'Replit',
    description: 'Online IDE with AI code completion.',
    essay: `Replit develops code completion models integrated into their online development environment.`,
    models: ['replit-code'],
    website: 'https://replit.com',
    icon: '💻'
  },
  {
    id: 'community',
    name: 'Community Models',
    description: 'Various open-source community projects.',
    essay: `Community-developed models that don\'t fit into a single company portfolio, including fine-tunes and research projects.`,
    models: ['tinyllama', 'openchat-3-5'],
    website: '#',
    icon: '🌐'
  },
  {
    id: 'ab',
    name: 'ab',
    description: 'AI research collective.',
    essay: 'ab research community develops fine-tuned models that have achieved top rankings on leaderboards.',
    models: ['smaug'],
    website: 'https://ab.ai',
    icon: '🐉'
  },
  {
    id: 'ai21',
    name: 'AI21 Labs',
    description: 'Hybrid architecture AI company. Makers of Jamba and Jurassic models.',
    essay: `AI21 Labs develops language models using hybrid Transformer-Mamba architectures, including the Jamba series.`,
    models: ['jamba'],
    website: 'https://www.ai21.com',
    icon: '🔀'
  }
];
