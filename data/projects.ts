export type ProjectTier = "flagship" | "supporting" | "experiment";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  tier: ProjectTier;
  featured?: boolean;
  problem: string;
  approach: string;
  architecture: string;
  impact: string;
  technologies: string[];
  status?: string;
  href?: string;
  linkLabel?: string;
  accent: "lime" | "cyan" | "violet" | "amber" | "rose";
};

export const projects: Project[] = [
  {
    slug: "edutarget",
    title: "EduTarget",
    eyebrow: "Education Decision Intelligence",
    tier: "flagship",
    featured: true,
    problem:
      "Schools often discover declining performance after the window for meaningful intervention has already narrowed.",
    approach:
      "A decision-support SaaS that combines student risk scoring, target-achievement probability, trend tracking, parent reporting, and teacher action recommendations.",
    architecture:
      "A React product surface backed by FastAPI services, PostgreSQL, containerized deployment, and machine-learning scoring pipelines.",
    impact:
      "Helps institutions identify at-risk students earlier and turn assessment data into coordinated action.",
    technologies: ["FastAPI", "PostgreSQL", "React", "Docker", "Machine Learning"],
    status: "Actively developed SaaS",
    href: "https://www.edutarget.com.tr",
    linkLabel: "Visit EduTarget",
    accent: "lime"
  },
  {
    slug: "decisioncore-ai",
    title: "DecisionCore AI",
    eyebrow: "Organizational Decision Memory",
    tier: "flagship",
    featured: true,
    problem:
      "Organizations make recurring decisions without consistently retaining the reasoning, risks, and outcomes that should improve the next decision.",
    approach:
      "A memory-driven intelligence platform built around decision cards, risk identification, human approvals, persistent context, and reusable organizational knowledge.",
    architecture:
      "LangGraph orchestrates multi-phase decision workflows across FastAPI services, PostgreSQL memory, LLM reasoning, and a React workspace.",
    impact:
      "Creates a structured learning loop between past decisions and future choices while preserving human control.",
    technologies: ["LangGraph", "FastAPI", "PostgreSQL", "React", "LLMs"],
    status: "Advanced multi-phase prototype",
    accent: "violet"
  },
  {
    slug: "spare-parts-recommendation",
    title: "Spare Parts Recommendation System",
    eyebrow: "Service Operations ML",
    tier: "flagship",
    featured: true,
    problem:
      "Service agents lose time and accuracy when translating incomplete failure descriptions into the correct replacement part.",
    approach:
      "Built and compared gradient-boosting and language-model approaches to rank likely spare parts from service context.",
    architecture:
      "A supervised recommendation pipeline combining structured service features, text representations, model comparison, and Top-3 ranked outputs.",
    impact:
      "Shortens part identification and gives service operations a practical shortlist instead of a single brittle prediction.",
    technologies: ["LightGBM", "XGBoost", "BERT", "Python", "Recommendation Systems"],
    status: "Applied machine-learning system",
    accent: "cyan"
  },
  {
    slug: "customer-service-copilot",
    title: "Customer Service Intelligence Copilot",
    eyebrow: "Natural-Language Analytics",
    tier: "flagship",
    featured: true,
    problem:
      "Large customer-service datasets remain inaccessible to business users who cannot translate operational questions into database queries.",
    approach:
      "An AI copilot that converts natural-language questions into database analysis and returns understandable, decision-ready findings.",
    architecture:
      "An LLM-based Text-to-SQL layer works against SQLite data, with query execution, response synthesis, and a Streamlit interface.",
    impact:
      "Lets business teams explore service performance without waiting for every question to enter an analyst queue.",
    technologies: ["Text-to-SQL", "LLMs", "SQLite", "Streamlit", "Python"],
    status: "Business intelligence copilot",
    accent: "amber"
  },
  {
    slug: "transcraft",
    title: "TransCraft",
    eyebrow: "Translation Intelligence",
    tier: "supporting",
    featured: true,
    problem:
      "Long-form AI translation loses terminology, narrative continuity, and style across chunks—and superficial quality scores can hide those failures.",
    approach:
      "A multi-agent translation system with scoped memory, strategy planning, terminology controls, iterative critique, human review, and evaluation harnesses.",
    architecture:
      "LangGraph coordinates specialized agents, FastAPI and Streamlit expose the system, while Langfuse, MLflow, and pytest support traceability and evaluation.",
    impact:
      "Turns document translation into an inspectable, resumable workflow designed for editorial quality rather than one-shot generation.",
    technologies: ["LangGraph", "FastAPI", "Streamlit", "Langfuse", "MLflow"],
    status: "Active research and engineering system",
    href: "https://github.com/Iberkayo/TransCraFT",
    linkLabel: "View repository",
    accent: "rose"
  },
  {
    slug: "technical-service-rag",
    title: "Technical Service RAG Assistant",
    eyebrow: "Field Knowledge Retrieval",
    tier: "supporting",
    problem:
      "Technicians waste valuable service time searching fragmented manuals for model-specific troubleshooting knowledge.",
    approach:
      "A hybrid retrieval assistant that combines semantic and lexical search, embeddings, reranking, and grounded answer generation.",
    architecture:
      "Document auditing and contextual chunking feed Qdrant and BM25 retrieval, followed by reranking and citation-aware generation.",
    impact:
      "Moves technical knowledge from static manuals into an immediate troubleshooting workflow.",
    technologies: ["Qdrant", "Embeddings", "BM25", "Reranking", "Python"],
    status: "RAG system under active development",
    href: "https://github.com/Iberkayo/turkish-appliance-rag-copilot-v2",
    linkLabel: "View repository",
    accent: "cyan"
  },
  {
    slug: "hr-copilot",
    title: "HR Copilot AI",
    eyebrow: "Enterprise Knowledge Assistant",
    tier: "supporting",
    problem:
      "Employees and HR teams need reliable answers across policies, legislation, procedures, job descriptions, and document tables.",
    approach:
      "A source-grounded assistant with Turkish document cleanup, table-aware ingestion, metadata enrichment, citations, and verified demo scenarios.",
    architecture:
      "FastAPI connects OpenAI generation to local Qdrant retrieval; a Streamlit cockpit exposes sources and similarity scores.",
    impact:
      "Makes policy knowledge searchable while retaining the document evidence required for trustworthy answers.",
    technologies: ["FastAPI", "Qdrant", "OpenAI", "Streamlit", "PyMuPDF"],
    status: "Working enterprise RAG demo",
    href: "https://github.com/Iberkayo/IK-RAG",
    linkLabel: "View repository",
    accent: "lime"
  },
  {
    slug: "yks-question-engine",
    title: "YKS Question RAG Engine",
    eyebrow: "Education Content Intelligence",
    tier: "supporting",
    problem:
      "Exam PDFs are difficult to transform into structured, searchable, reusable question banks for personalized assessment.",
    approach:
      "A pipeline for question-level extraction, metadata labeling, similarity retrieval, and grounded generation of new assessment material.",
    architecture:
      "PDF parsing and segmentation produce JSONL records that flow into Qdrant retrieval and LLM-assisted generation.",
    impact:
      "Creates the foundation for adaptive practice sets derived from an institution’s own content patterns.",
    technologies: ["PyMuPDF", "Qdrant", "OpenAI", "Pydantic", "RAG"],
    status: "Early-stage retrieval engine",
    href: "https://github.com/Iberkayo/yks-question-rag-engine",
    linkLabel: "View repository",
    accent: "violet"
  },
  {
    slug: "service-failure-early-warning",
    title: "Service Failure Early-Warning System",
    eyebrow: "Operational Analytics",
    tier: "experiment",
    problem:
      "Service failures become expensive before operational teams can see which brands and production batches are deteriorating.",
    approach:
      "A decision-support dashboard using year-over-year signals, momentum rules, dynamic early-failure thresholds, cost analysis, and batch drill-downs.",
    architecture:
      "A pandas pipeline cleans operational spreadsheets and generates Excel reporting plus an interactive Plotly dashboard.",
    impact:
      "Surfaces emerging failure patterns and cost exposure in a form operations teams can act on.",
    technologies: ["pandas", "Plotly", "Python", "Excel", "Analytics"],
    status: "Operational data product",
    href: "https://github.com/Iberkayo/vestel-dashboard",
    linkLabel: "View repository",
    accent: "amber"
  },
  {
    slug: "audiobook-generator",
    title: "Audiobook Generator",
    eyebrow: "AI Media Pipeline",
    tier: "experiment",
    problem:
      "Naive document-to-speech conversion produces robotic transitions, broken reading order, and uncomfortable silence between segments.",
    approach:
      "A document-to-audio pipeline with Turkish sentence segmentation, prosody-aware pauses, silence trimming, room tone, crossfades, and normalization.",
    architecture:
      "EPUB/PDF parsing feeds asynchronous neural TTS, followed by pydub and NumPy audio stitching inside a Streamlit product.",
    impact:
      "Converts books into more natural, listenable Turkish audio instead of merely concatenating TTS outputs.",
    technologies: ["Edge TTS", "Streamlit", "pydub", "NumPy", "EPUB/PDF"],
    status: "Deployed product experiment",
    href: "https://github.com/Iberkayo/audiobook-generator",
    linkLabel: "View repository",
    accent: "rose"
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectGroups = [
  {
    key: "flagship" as const,
    index: "01",
    title: "Flagship products",
    description:
      "The clearest expression of my product direction: systems that help people make operational, educational, and organizational decisions."
  },
  {
    key: "supporting" as const,
    index: "02",
    title: "AI & retrieval systems",
    description:
      "Focused systems for document intelligence, grounded generation, memory, evaluation, and domain-specific knowledge access."
  },
  {
    key: "experiment" as const,
    index: "03",
    title: "Data & product experiments",
    description:
      "Applied explorations that turn specialized data, media, and workflows into practical user-facing tools."
  }
];
