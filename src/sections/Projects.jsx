import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { projects, categories } from "../data/projects";
import { fadeInUp, staggerContainer } from "../animations/variants";
import MagneticButton from "../components/ui/MagneticButton";

function TiltCard({ project, onClick, onPrivateClick }) {
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
          {project.image ? (
            <div className="h-20 rounded-md overflow-hidden relative border border-white/5 bg-dark">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="space-y-1.5">
              <div className="h-2 rounded bg-white/10 w-3/4" />
              <div className="h-2 rounded bg-white/5 w-full" />
              <div className="h-2 rounded bg-white/5 w-5/6" />
              <div className="mt-3 grid grid-cols-2 gap-1.5">
                <div className="h-8 rounded" style={{ background: `${project.color}30` }} />
                <div className="h-8 rounded bg-white/5" />
              </div>
            </div>
          )}
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
          {project.isPrivate ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrivateClick(project.title);
              }}
              className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
              data-hover
            >
              <FiGithub size={14} /> Code (Private)
            </button>
          ) : (
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
          )}
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

function ProjectModal({ project, onClose, onPrivateClick }) {
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
          {project.isPrivate ? (
            <MagneticButton
              onClick={() => onPrivateClick(project.title)}
              variant="glass"
              className="flex-1 justify-center"
            >
              <FiGithub size={16} /> Code (Private)
            </MagneticButton>
          ) : (
            <MagneticButton href={project.github} target="_blank" variant="glass" className="flex-1 justify-center">
              <FiGithub size={16} /> View Code
            </MagneticButton>
          )}
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
  const [privateToast, setPrivateToast] = useState(null);

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
                  onPrivateClick={(title) => setPrivateToast(title)}
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
            onPrivateClick={(title) => setPrivateToast(title)}
          />
        )}
      </AnimatePresence>

      {/* Private Project Code Alert Toast */}
      <AnimatePresence>
        {privateToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[200] max-w-sm w-full"
          >
            <div className="glass p-5 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex gap-4 items-start relative overflow-hidden">
              {/* Radial gradient background to match theme */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 100% 100%, #a855f7, transparent 70%)`,
                }}
              />
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-outfit font-bold text-white text-sm mb-1">Confidential Project</h5>
                <p className="text-white/60 text-xs leading-relaxed">
                  The source code for <strong className="text-white font-semibold">{privateToast}</strong> belongs to the client and cannot be shared publicly.
                </p>
              </div>
              <button
                onClick={() => setPrivateToast(null)}
                className="text-white/40 hover:text-white text-xs p-1"
              >
                <FiX size={14} />
              </button>
              {/* Auto progress bar to close the toast */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4.5, ease: "linear" }}
                onAnimationComplete={() => setPrivateToast(null)}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
