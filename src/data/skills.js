import {
  SiReact, SiNodedotjs, SiPython, SiJavascript, SiTailwindcss,
  SiMongodb, SiFirebase, SiGit, SiGithub, SiFlutter,
  SiKotlin, SiNestjs, SiExpress, SiMysql, SiC, SiCplusplus, SiFigma, SiSupabase
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const skillCategories = [
  {
    name: "Frontend Developing",
    color: "#00d4ff",
    skills: [
      { name: "Flutter", icon: SiFlutter, level: 90 },
      { name: "React Native", icon: SiReact, level: 85 },
      { name: "JavaScript", icon: SiJavascript, level: 92 },
      { name: "React JS", icon: SiReact, level: 88 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "Kotlin", icon: SiKotlin, level: 75 },
    ],
  },
  {
    name: "Backend Developing",
    color: "#7b2fff",
    skills: [
      { name: "Nest.js", icon: SiNestjs, level: 85 },
      { name: "Node.js", icon: SiNodedotjs, level: 88 },
      { name: "Java", icon: FaJava, level: 80 },
      { name: "Express.js", icon: SiExpress, level: 82 },
    ],
  },
  {
    name: "Database",
    color: "#00fff2",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "MySQL", icon: SiMysql, level: 82 },
      { name: "Supabase", icon: SiSupabase, level: 85 },
      { name: "Firebase", icon: SiFirebase, level: 88 },
    ],
  },
  {
    name: "Others",
    color: "#ff6b35",
    skills: [
      { name: "Python", icon: SiPython, level: 78 },
      { name: "C", icon: SiC, level: 70 },
      { name: "C++", icon: SiCplusplus, level: 72 },
      { name: "Figma", icon: SiFigma, level: 75 },
      { name: "GitHub", icon: SiGithub, level: 88 },
    ],
  },
];

export const techStack = [
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "React Native", icon: SiReact, color: "#61dafb" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React JS", icon: SiReact, color: "#61dafb" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "Python", icon: SiPython, color: "#ffd43b" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
];
