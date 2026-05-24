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
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}10, transparent 70%)` }}
      />
      <div className="text-3xl mb-3">{cert.icon}</div>
      <h4 className="font-outfit font-semibold text-white text-sm mb-1 leading-snug">{cert.title}</h4>
      <p className="text-xs mb-2" style={{ color: cert.color }}>{cert.issuer}</p>
      <div className="flex items-center justify-between">
        <span className="text-white/30 text-xs">{cert.date}</span>
        <span className="text-white/20 text-xs font-mono">#{cert.credentialId.slice(-6)}</span>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
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
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
