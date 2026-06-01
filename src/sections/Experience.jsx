import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { experiences } from "../data/experience";
import { fadeInLeft, fadeInRight } from "../animations/variants";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-dark-2">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          badge="Career"
          title="Experience Timeline"
          subtitle="A journey through the companies, challenges, and milestones that shaped me as an engineer."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.id} className="relative flex items-start md:gap-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10 mt-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: i * 0.1 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                      style={{
                        background: `${exp.color}20`,
                        borderColor: exp.color,
                        boxShadow: `0 0 20px ${exp.color}50`,
                      }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ background: exp.color }} />
                    </motion.div>
                  </div>

                  {/* Card — alternating sides on desktop */}
                  <motion.div
                    variants={isLeft ? fadeInLeft : fadeInRight}
                    className={`w-full pl-14 md:pl-0 md:w-[calc(50%-40px)] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div
                      className="glass rounded-2xl p-6 border group hover:border-white/15 transition-all duration-300 relative overflow-hidden"
                      style={{ borderColor: `${exp.color}20` }}
                    >
                      {/* Glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(circle at 0 0, ${exp.color}08, transparent 60%)` }}
                      />

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-outfit font-bold text-white text-lg leading-tight">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-medium text-sm" style={{ color: exp.color }}>
                              {exp.company}
                            </span>
                            <span className="text-white/20">·</span>
                            <span className="text-xs text-white/40">{exp.type}</span>
                          </div>
                        </div>
                        <span
                          className="self-start sm:self-auto flex-shrink-0 text-xs px-3 py-1 rounded-full font-mono whitespace-nowrap"
                          style={{
                            background: `${exp.color}15`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                          }}
                        >
                          {exp.duration}
                        </span>
                      </div>

                      <p className="text-white/50 text-sm leading-relaxed mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((ach, ai) => (
                          <motion.li
                            key={ai}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: ai * 0.1 }}
                            className="flex items-start gap-2 text-xs text-white/60"
                          >
                            <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: exp.color }} />
                            {ach}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-xs text-white/40 border border-white/8"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
