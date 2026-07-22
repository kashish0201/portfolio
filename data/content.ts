// All site copy lives here. Components read from this file — you shouldn't need to
// touch a component to change wording, add a project, or reorder a skill group.

export const profile = {
  name: "Kashish Phulwani",
  brand: "kashish",
  status: "OPEN TO SUMMER 2027 INTERNSHIPS",
  role: "Backend & Infrastructure Engineer",
  tagline: "Python • AWS • Distributed Systems • AI Retrieval",
  headline: [
    { text: "Somewhere between ", accent: false },
    { text: "\u201Cwhat if?\u201D", accent: true },
    { text: " and ", accent: false },
    { text: "\u201Cit works.\u201D", accent: true },
  ] as { text: string; accent: boolean }[],
  lede: "Software Engineer building reliable products across data, AI and distributed systems. I care about thoughtful architecture, sharp execution and technology that holds up beyond the demo.",
  email: "phulwanikashish@gmail.com",
  location: "Long Beach, CA · open to remote",
  github: "https://github.com/kashish0201",
  githubHandle: "@kashish0201",
  linkedin: "https://www.linkedin.com/in/kashishh-phulwani/",
  linkedinHandle: "@kashishh-phulwani",
  resumeUrl: "/Kashish_Phulwani_resume.pdf",
};

// Hero stat strip. `unit` renders after `value` — don't repeat it inside `value`
// or you get "2.5 yrsyrs".
export const stats = [
  { value: "2.5", unit: "yrs", label: "AT JPMORGAN" },
  { value: "6", unit: "", label: "PROD SERVICES" },
];

export const about = {
  eyebrow: "Introduction",
  title: "About",
  subtitle:
    "Two and a half years shipping production backends at a global bank, now deepening the theory behind them.",
  intro:
    "I'm a software engineer with a master's in progress at CSULB and two and a half years at JPMorgan Chase, where I built RESTful services and ETL pipelines that moved millions of client records — and owned the infrastructure and release path underneath them.",
  blocks: [
    {
      h: "Philosophy",
      p: "Anyone can get a service running. The interesting question is what happens when it fails at 3am. I care about observability, reproducible infrastructure, and knowing where a system breaks before it breaks on its own.",
    },
    {
      h: "Current focus",
      p: "Retrieval systems and LLM serving — adaptive RAG routing, streaming inference, and the guardrails that keep a model from answering confidently when it shouldn't. Alongside advanced algorithms and software engineering coursework.",
    },
  ],
};

export const skills = {
  eyebrow: "Capability",
  title: "Skills",
  subtitle:
    "A backend and infrastructure stack — from APIs and data pipelines to the monitoring that proves they work.",
  groups: [
    {
      name: "Languages",
      note: "Core programming and query languages.",
      items: ["Python", "Java", "SQL", "JavaScript"],
    },
    {
      name: "Backend & APIs",
      note: "Services and the contracts between them.",
      items: ["RESTful APIs", "FastAPI", "Spring Boot", "React", "Git"],
    },
    {
      name: "Cloud & Infrastructure",
      note: "Reproducible environments and zero-downtime releases.",
      items: [
        "AWS (EC2, S3, Lambda)",
        "Terraform",
        "Docker",
        "Jenkins",
        "GitHub Actions",
        "Blue-Green Deployments",
      ],
    },
    {
      name: "Observability & Reliability",
      note: "Knowing a system is healthy — and proving it survives failure.",
      items: [
        "Grafana",
        "Datadog",
        "Chaos Engineering (Gremlin)",
        "Latency Monitoring",
      ],
    },
    {
      name: "Databases",
      note: "Relational and vector data layers.",
      items: ["PostgreSQL", "MySQL", "ChromaDB"],
    },
    {
      name: "AI/ML & Data",
      note: "Retrieval systems and the data work underneath them.",
      items: [
        "RAG Pipelines",
        "LLM Orchestration",
        "Vector Embeddings",
        "Prompt Engineering",
        "Pandas",
        "NumPy",
        "Scikit-learn",
      ],
    },
  ],
};

export type Project = {
  title: string;
  badge: string;
  summary: string;
  body: string;
  features: string[];
  tech: string[];
  links: { label: string; href: string }[];
  viz: "rag" | "wave" | "placeholder";
  featured?: boolean;
};

export const work = {
  eyebrow: "Selected work",
  title: "Projects",
  subtitle:
    "Systems built end to end — retrieval pipelines, ML serving, and the architecture decisions behind them.",
};

export const projects: Project[] = [
  {
    title: "Academic Assistant — adaptive RAG pipeline",
    badge: "Featured",
    summary: "An LLM retrieval system that decides where to look before it answers.",
    body: "An end-to-end LLM inference and response-streaming pipeline built with Python async generators and server-sent events, delivering token-level streaming with traceable live URL citations. Queries are routed between ChromaDB vector retrieval over academic policy data and live web search based on intent — so time-sensitive questions hit the web and policy questions hit the index.",
    features: [
      "Token-level streaming over SSE with async generators",
      "Hybrid retrieval — vector search vs. live web, routed by query intent",
      "LLM query optimization layer converting conversational input to keyword strings",
      "Prompt guardrails with ambiguity detection and clarifying questions",
      "Traceable live URL citations on every response",
    ],
    tech: ["Python", "ChromaDB", "Async I/O", "SSE", "RAG", "LLM Orchestration"],
    links: [{ label: "GitHub", href: "https://github.com/kashish0201" }],
    viz: "rag",
    featured: true,
  },
  {
    title: "Music genre detection — end-to-end ML pipeline",
    badge: "Machine Learning",
    summary: "Audio in, genre out — plus a content-based recommender on top.",
    body: "A complete machine learning pipeline for music genre classification using KNN, covering audio feature extraction, data cleaning, model training, and evaluation. Model inference is served through a backend integrated with a responsive React interface, letting users upload audio and see real-time predictions.",
    features: [
      "Audio feature extraction and signal processing",
      "Data cleaning, model training, and evaluation loop",
      "KNN classification served through a backend API",
      "React interface with real-time genre prediction",
      "Content-based top-5 song recommender",
    ],
    tech: ["Python", "KNN", "Signal Processing", "React", "Scikit-learn"],
    links: [{ label: "GitHub", href: "https://github.com/kashish0201" }],
    viz: "wave",
  },
];

export const experience = {
  eyebrow: "Career",
  title: "Experience",
  subtitle:
    "Two and a half years owning backend services, data pipelines, and the infrastructure they run on.",
  jobs: [
    {
      badge: "Full-time",
      role: "Software Engineer",
      org: "JPMorgan Chase & Co.",
      meta: "Aug 2023 — Dec 2025",
      summary:
        "Built and operated enterprise backend services and data pipelines, owning everything from the API contract to the Terraform that provisioned the environment it ran in.",
      tech: ["Python", "Java", "AWS", "Terraform", "Docker", "Jenkins", "Grafana"],
      bullets: [
        "Designed and built RESTful APIs and backend services for enterprise data retrieval and transformation, consumed by multiple internal teams — while translating technical constraints for non-technical stakeholders.",
        "Built and maintained ETL and batch-processing workflows ingesting and transforming millions of client records for downstream validation and analytics.",
        "Improved observability across 6 production services with Grafana dashboards and Datadog monitors for latency, throughput, and error rates, cutting time-to-detection on incidents.",
        "Built CI/CD pipelines with Jenkins and GitHub Actions using Dockerized builds, enabling zero-downtime blue-green deployments across coordinated monthly releases of all 6 services.",
        "Automated AWS infrastructure provisioning with Terraform across EC2, S3, and Lambda, making every environment reproducible and auditable.",
        "Developed a Python synthetic data framework (Faker) generating thousands of records across 15–20 relational tables with PII masking, enabling safe lower-environment testing without production data.",
        "Helped establish the team's chaos engineering practice with Gremlin, simulating infrastructure failures to validate fault tolerance and improve service resiliency.",
      ],
    },
  ],
};

export const education = {
  eyebrow: "Academics",
  title: "Education",
  subtitle:
    "Computer science fundamentals, from a 9.34 CGPA undergrad to a 4.00 master's in progress.",
  entries: [
    {
      status: "Jan 2026 — Dec 2027",
      degree: "M.S. Computer Science",
      org: "California State University, Long Beach",
      score: "GPA · 4.00 / 4.00",
      coursework: [
        "Advanced Analysis of Algorithms",
        "Advanced Topics in Programming Languages",
        "Advanced Software Engineering",
      ],
      highlights: [
        "Perfect GPA across the first term",
        "Focused on distributed systems and retrieval architecture",
      ],
    },
    {
      status: "Aug 2019 — May 2023",
      degree: "B.E. Computer Engineering",
      org: "University of Mumbai",
      score: "CGPA · 9.34 / 10",
      coursework: [
        "Artificial Intelligence",
        "Machine Learning",
        "Advanced DBMS",
        "Data Structures & Algorithms",
        "Cloud Computing",
        "Object Oriented Programming",
        "Big Data Analytics",
        "System Security",
      ],
      highlights: [
        "Graduated with a 9.34/10 CGPA",
        "Built the systems and data foundation the JPMorgan work ran on",
      ],
    },
  ],
};

export const credentials = {
  eyebrow: "Recognition",
  title: "Certifications & Activities",
  subtitle:
    "Formal credentials, and the competitions where the fundamentals got tested under a clock.",
  certifications: [
    {
      name: "AWS Certified Developer — Associate",
      issuer: "Amazon Web Services",
      note: "Cloud-native application development, deployment, and debugging on AWS.",
    },
  ],
  hackathons: [
    { name: "24-Hour Hackathon", org: "JPMorgan Chase", year: "2023" },
    { name: "Rubix Hackathon", org: "CSI-TSEC", year: "2022" },
    { name: "BlindCode", org: "Ascent'22, TSEC", year: "2022" },
  ],
};

export const profiles = {
  eyebrow: "Activity",
  title: "Profiles",
  subtitle: "Where the code and the professional updates live.",
  cards: [
    {
      platform: "GitHub",
      handle: "@kashish0201",
      href: "https://github.com/kashish0201",
      note: "Retrieval pipelines, ML projects, and this site's source.",
      stats: [
        { v: "2", l: "Featured projects" },
        { v: "Python", l: "Primary language" },
      ],
    },
    {
      platform: "LinkedIn",
      handle: "@kashishh-phulwani",
      href: "https://www.linkedin.com/in/kashishh-phulwani/",
      note: "Experience, education, and what I'm working on now.",
      stats: [
        { v: "2.5y", l: "Experience" },
        { v: "JPMC", l: "Most recent" },
      ],
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Let's build something that stays up.",
  subtitle:
    "Open to Summer 2027 internships and backend, infrastructure, or AI platform roles. Send a short note about your team or the role — I answer everything.",
};

export const stack = [
  "Python", "Java", "SQL", "JavaScript", "FastAPI", "Spring Boot", "React",
  "AWS", "Terraform", "Docker", "Jenkins", "GitHub Actions", "PostgreSQL",
  "MySQL", "ChromaDB", "Grafana", "Datadog", "Gremlin", "RAG Pipelines",
  "Vector Embeddings", "Pandas", "NumPy", "Scikit-learn",
];
