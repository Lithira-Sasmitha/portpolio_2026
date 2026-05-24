import {
  SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiTypescript,
  SiJavascript, SiThreedotjs, SiTailwindcss, SiGraphql,
  SiMongodb, SiPostgresql, SiRedis, SiDocker, SiKubernetes,
  SiGooglecloud, SiFirebase, SiGit,
  SiSolidity, SiRust, SiGo, SiVuedotjs
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const skillCategories = [
  {
    name: "Frontend",
    color: "#00d4ff",
    skills: [
      { name: "React.js", icon: SiReact, level: 95 },
      { name: "Next.js", icon: SiNextdotjs, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 88 },
      { name: "JavaScript", icon: SiJavascript, level: 95 },
      { name: "Three.js", icon: SiThreedotjs, level: 82 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
      { name: "Vue.js", icon: SiVuedotjs, level: 78 },
    ],
  },
  {
    name: "Backend",
    color: "#7b2fff",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 90 },
      { name: "Python", icon: SiPython, level: 85 },
      { name: "Go", icon: SiGo, level: 75 },
      { name: "GraphQL", icon: SiGraphql, level: 82 },
      { name: "Rust", icon: SiRust, level: 65 },
    ],
  },
  {
    name: "Database & Cloud",
    color: "#00fff2",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 88 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
      { name: "Redis", icon: SiRedis, level: 80 },
      { name: "AWS", icon: FaAws, level: 83 },
      { name: "GCP", icon: SiGooglecloud, level: 75 },
      { name: "Firebase", icon: SiFirebase, level: 85 },
    ],
  },
  {
    name: "DevOps & Other",
    color: "#ff6b35",
    skills: [
      { name: "Docker", icon: SiDocker, level: 87 },
      { name: "Kubernetes", icon: SiKubernetes, level: 78 },
      { name: "Git", icon: SiGit, level: 95 },
      { name: "Solidity", icon: SiSolidity, level: 72 },
    ],
  },
];

export const techStack = [
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
  { name: "Python", icon: SiPython, color: "#ffd43b" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Three.js", icon: SiThreedotjs, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "GraphQL", icon: SiGraphql, color: "#e10098" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Redis", icon: SiRedis, color: "#dc382d" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
  { name: "AWS", icon: FaAws, color: "#ff9900" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285f4" },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "Go", icon: SiGo, color: "#00add8" },
  { name: "Solidity", icon: SiSolidity, color: "#7b2fff" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42b883" },
  { name: "Rust", icon: SiRust, color: "#ce422b" },
];
