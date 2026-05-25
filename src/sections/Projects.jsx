import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { projects, categories } from "../data/projects";
import { fadeInUp, staggerContainer } from "../animations/variants";
import MagneticButton from "../components/ui/MagneticButton";

function TiltCard({ project, onClick }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      variants={fadeInUp}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 cursor-pointer group relative"
      style={{ transition: "transform 0.15s ease, box-shadow 0.3s ease" }}
    >
      {/* Top glow on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      {/* Project preview area */}
      <div
        className="h-44 relative flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}18 0%, #030308 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent 70%)` }}
        />
        {/* Mock UI wireframe */}
        <div className="relative z-10 w-52 glass rounded-lg p-3 border border-white/10">
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="w-2 h-2 rounded-full bg-red-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
            <div className="flex-1 h-1.5 rounded bg-white/10 ml-2" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-white/10 w-3/4" />
            <div className="h-2 rounded bg-white/5 w-full" />
            <div className="h-2 rounded bg-white/5 w-5/6" />
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              <div className="h-8 rounded" style={{ background: `${project.color}30` }} />
              <div className="h-8 rounded bg-white/5" />
            </div>
          </div>
        </div>

        {/* Category badge */}
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium"
          style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-outfit font-bold text-white text-lg mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs text-white/50 border border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs text-white/30">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
            data-hover
          >
            <FiGithub size={14} /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs hover:opacity-80 transition-opacity"
            style={{ color: project.color }}
            data-hover
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
          <span className="ml-auto text-xs text-white/30 group-hover:text-white/50 transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative glass rounded-3xl p-8 max-w-2xl w-full border border-white/10 max-h-[90vh] overflow-y-auto no-scrollbar"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          data-hover
        >
          <FiX size={16} />
        </button>

        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
          style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
        >
          {project.category}
        </div>

        <h2 className="font-outfit font-black text-3xl text-white mb-4">{project.title}</h2>
        <p className="text-white/60 leading-relaxed mb-6">{project.longDescription}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm text-white/60 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <MagneticButton href={project.github} target="_blank" variant="glass" className="flex-1 justify-center">
            <FiGithub size={16} /> View Code
          </MagneticButton>
          <MagneticButton href={project.live} target="_blank" variant="primary" className="flex-1 justify-center">
            <FiExternalLink size={16} /> Live Demo
          </MagneticButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SectionWrapper id="projects" className="bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Portfolio"
            title="Featured Projects"
            subtitle="A showcase of projects that demonstrate my passion for solving complex problems with elegant solutions."
          />

          {/* Filter tabs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-hover
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-dark font-bold shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                    : "glass border border-white/10 text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <TiltCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
