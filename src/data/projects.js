export const projects = [
  {
    id: 1,
    title: "NexusAI Dashboard",
    description:
      "An AI-powered analytics platform with real-time data visualization, ML model monitoring, and intelligent alerting. Built for enterprise-scale data teams.",
    longDescription:
      "A comprehensive AI dashboard that integrates with multiple ML frameworks, providing real-time insights, model performance tracking, and automated anomaly detection. Features a sleek dark interface with interactive D3.js charts.",
    image: null,
    tags: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL", "Docker"],
    category: "AI / ML",
    github: "https://github.com",
    live: "https://demo.example.com",
    featured: true,
    color: "#00d4ff",
  },
  {
    id: 2,
    title: "Orbit E-Commerce",
    description:
      "A high-performance e-commerce platform with 3D product previews, AR try-on features, and AI-driven personalization engine.",
    longDescription:
      "Full-stack e-commerce solution featuring Three.js powered 3D product views, WebXR AR capabilities, Stripe payments, and a custom recommendation engine. Handles 100k+ concurrent users.",
    image: null,
    tags: ["Next.js", "Three.js", "Node.js", "MongoDB", "Stripe", "Redis"],
    category: "Full Stack",
    github: "https://github.com",
    live: "https://demo.example.com",
    featured: true,
    color: "#7b2fff",
  },
  {
    id: 3,
    title: "CipherChat",
    description:
      "End-to-end encrypted real-time messaging app with ephemeral rooms, voice calls, and blockchain-based identity verification.",
    longDescription:
      "Secure messaging application using Signal Protocol for E2E encryption, WebRTC for peer-to-peer voice/video, and Ethereum for decentralized identity. Features self-destructing messages and zero-knowledge proofs.",
    image: null,
    tags: ["React Native", "WebRTC", "Socket.io", "Ethereum", "Go", "Redis"],
    category: "Mobile",
    github: "https://github.com",
    live: "https://demo.example.com",
    featured: true,
    color: "#00fff2",
  },
  {
    id: 4,
    title: "CloudForge DevOps",
    description:
      "Infrastructure-as-code platform with visual pipeline builder, Kubernetes orchestration, and automated cost optimization.",
    longDescription:
      "Enterprise DevOps platform with drag-and-drop CI/CD pipeline builder, multi-cloud Kubernetes management, intelligent resource scaling, and real-time cost analytics with ML-driven optimization suggestions.",
    image: null,
    tags: ["Vue.js", "Kubernetes", "Terraform", "Golang", "AWS", "Grafana"],
    category: "DevOps",
    github: "https://github.com",
    live: "https://demo.example.com",
    featured: false,
    color: "#ff6b35",
  },
  {
    id: 5,
    title: "NeuroNote",
    description:
      "AI-powered note-taking app with semantic search, auto-tagging, mind-map visualization, and GPT-4 writing assistant.",
    longDescription:
      "Intelligent knowledge management system using OpenAI embeddings for semantic search, automatic concept extraction, and an interactive graph-based mind map. Supports rich markdown, code blocks, and collaborative editing.",
    image: null,
    tags: ["React", "OpenAI", "Supabase", "TypeScript", "Langchain", "D3.js"],
    category: "AI / ML",
    github: "https://github.com",
    live: "https://demo.example.com",
    featured: false,
    color: "#a855f7",
  },
  {
    id: 6,
    title: "QuantumPay",
    description:
      "Cross-chain DeFi payment gateway with instant settlement, multi-wallet support, and gasless transactions via meta-transactions.",
    longDescription:
      "Decentralized payment infrastructure supporting 12+ blockchain networks, ERC-4337 account abstraction for gasless UX, real-time fiat on/off ramps, and enterprise-grade compliance tools.",
    image: null,
    tags: ["React", "Solidity", "ethers.js", "Hardhat", "Chainlink", "IPFS"],
    category: "Blockchain",
    github: "https://github.com",
    live: "https://demo.example.com",
    featured: false,
    color: "#f59e0b",
  },
];

export const categories = ["All", "AI / ML", "Full Stack", "Mobile", "DevOps", "Blockchain"];
