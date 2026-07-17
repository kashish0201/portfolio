// Everything you'll want to edit lives here. Components read from this file.

export const profile = {
  name: "Kashish Phulwani",
  brand: "kashish",
  status: "OPEN TO SUMMER 2027 INTERNSHIPS",
  headline: {
    before: "I build backends that ",
    accent: "don't fall over.",
  },
  lede: "Backend and infrastructure engineer. I ship data pipelines, RESTful services and AI retrieval systems — then I make them observable, reproducible, and deliberately hard to break.",
  email: "phulwanikashish@gmail.com",
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  resumeUrl: "/resume.pdf", // drop your PDF in /public
};

export const stats = [
  { value: "2.5 yrs", unit: "yrs", label: "AT JPMORGAN" },
  { value: "6", unit: "", label: "PROD SERVICES" },
  { value: "4.00", unit: "", label: "MS GPA" },
];

export const stack = [
  "Python", "Java", "SQL", "JavaScript", "FastAPI", "SpringBoot", "React",
  "AWS", "Terraform", "Docker", "Jenkins", "GitHub Actions", "PostgreSQL",
  "MySQL", "ChromaDB", "Grafana", "Datadog", "Gremlin", "RAG Pipelines",
  "Vector Embeddings", "Pandas", "NumPy", "Scikit-learn",
];

export type Project = {
  title: string;
  tags: string[];
  body: string;
  linkLabel: string;
  href: string;
  viz: "rag" | "wave" | "placeholder";
};

export const featured: Project = {
  title: "Academic Assistant — adaptive RAG pipeline",
  tags: ["Python", "ChromaDB", "Async I/O", "RAG", "SSE"],
  body: "An LLM system that decides where to look. Queries get routed between vector retrieval over academic policy data and live web search based on intent, then stream back token-by-token over server-sent events with traceable citations. Prompt guardrails detect ambiguity — an unspecified campus triggers a clarifying question instead of a confident wrong answer.",
  linkLabel: "Read the case study",
  href: "#",
  viz: "rag",
};

export const projects: Project[] = [
  {
    title: "Music genre detection",
    tags: ["Python", "KNN", "React"],
    body: "End-to-end ML pipeline: audio feature extraction, cleaning, training, evaluation — served through a React interface with real-time predictions and a content-based top-5 recommender.",
    linkLabel: "View on GitHub",
    href: "#",
    viz: "wave",
  },
  {
    title: "An infrastructure piece",
    tags: ["Terraform", "Docker", "Grafana"],
    body: "Placeholder. Your strongest signal is infra and reliability — one visibly Terraform/observability project, with a real dashboard screenshot, would make this site match the engineer.",
    linkLabel: "Coming soon",
    href: "#",
    viz: "placeholder",
  },
];

export const experience = [
  {
    role: "Software Engineer — JPMorgan Chase & Co.",
    meta: "AUG 2023 — DEC 2025",
    paragraphs: [
      "Built RESTful APIs and backend services for enterprise data retrieval, consumed by multiple internal teams. Ran ETL and batch workflows over millions of client records. Owned the release path: Jenkins and GitHub Actions pipelines with Dockerized builds and blue-green deploys across six coordinated services and their AWS infrastructure — provisioned with Terraform so every environment was reproducible and auditable.",
      "Two things I'm proudest of: a Python synthetic data framework that generated thousands of records across 15–20 relational tables with PII masking, so we could test in lower environments without touching production data — and helping start the team's chaos engineering practice with Gremlin, breaking things on purpose to find out what actually survives.",
    ],
    chips: [
      "Observability across 6 services",
      "Grafana + Datadog",
      "Terraform · EC2 · S3 · Lambda",
      "Blue-green deploys",
      "Chaos engineering",
    ],
    marker: true,
  },
  {
    role: "MS Computer Science — CSULB",
    meta: "JAN 2026 — DEC 2027 · GPA 4.00",
    paragraphs: [
      "Advanced algorithms, programming languages, and software engineering. B.E. Computer Engineering, University of Mumbai (CGPA 9.34) before that. AWS Certified Developer – Associate.",
    ],
    chips: [],
    marker: false,
  },
];
