import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { education, certifications } from "../data/content";
import { fadeInUp, staggerContainer } from "../animations/variants";

function EducationCard({ edu }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${edu.color}, transparent)` }}
      />
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
        >
          🎓
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="font-outfit font-bold text-white text-base">{edu.degree}</h3>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-mono"
              style={{ background: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}30` }}
            >
              {edu.duration}
            </span>
          </div>
          <p className="text-sm font-medium mb-1" style={{ color: edu.color }}>{edu.institution}</p>
          <p className="text-xs text-white/40 mb-3">{edu.grade}</p>
          <p className="text-white/50 text-sm leading-relaxed mb-3">{edu.description}</p>
          <div className="flex flex-wrap gap-2">
            {edu.achievements.map((a) => (
              <span key={a} className="px-2 py-0.5 rounded text-xs text-white/50 border border-white/8">
                🏆 {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CertCard({ cert }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden flex items-center gap-5"
    >
      {/* Radial Hover Gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 10% 50%, ${cert.color}15, transparent 60%)`,
        }}
      />

      {/* Left Icon Badge */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-300"
        style={{
          background: `linear-gradient(135deg, ${cert.color}25, ${cert.color}05)`,
          border: `1px solid ${cert.color}40`,
          boxShadow: `0 8px 24px -10px ${cert.color}40`,
        }}
      >
        <span className="relative z-10">{cert.icon}</span>
        {/* Pulsing ring inside the icon */}
        <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500" />
      </div>

      {/* Middle/Right Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <h4 className="font-outfit font-bold text-white text-base md:text-lg tracking-wide leading-snug">
            {cert.title}
          </h4>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Verified
          </span>
        </div>

        <p className="text-xs md:text-sm font-semibold mb-2.5" style={{ color: cert.color }}>
          {cert.issuer}
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-2">
          <span className="text-white/40 text-xs font-medium flex items-center gap-1">
            📅 {cert.date}
          </span>
          <span className="text-white/30 text-[11px] font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">
            ID: {cert.credentialId}
          </span>
        </div>
      </div>

      {/* Bottom Animated Border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-75 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Education */}
        <SectionHeader
          badge="Education"
          title="Academic Background"
          subtitle="The foundations that shaped my engineering mindset."
        />
        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6 mb-24">
          {education.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </motion.div>

        {/* Certifications */}
        <SectionHeader
          badge="Certifications"
          title="Licenses & Certs"
          subtitle="Continuous learning through industry-recognized certifications."
        />
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
