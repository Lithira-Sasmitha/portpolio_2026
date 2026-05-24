import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { techStack } from "../data/skills";
import { fadeInUp, staggerContainerFast } from "../animations/variants";

export default function TechStack() {
  return (
    <SectionWrapper id="techstack" className="bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Arsenal"
          title="Tech Stack"
          subtitle="The technologies I wield to build production-ready software."
        />

        <motion.div
          variants={staggerContainerFast}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -8, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-3 p-4 glass rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300 cursor-default group"
            >
              <div
                className="text-3xl transition-all duration-300 group-hover:drop-shadow-lg"
                style={{
                  filter: `drop-shadow(0 0 12px ${tech.color}60)`,
                }}
              >
                <tech.icon style={{ color: tech.color }} />
              </div>
              <span className="text-white/40 text-xs font-inter text-center leading-tight group-hover:text-white/70 transition-colors">
                {tech.name}
              </span>

              {/* Hover glow bottom line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-px transition-all duration-500"
                style={{ background: tech.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee strip */}
        <div className="mt-16 overflow-hidden">
          <p className="text-center text-white/20 text-xs font-mono tracking-widest uppercase mb-6">
            Trusted by engineers worldwide
          </p>
          <div className="flex gap-8 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 flex-shrink-0"
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="flex items-center gap-2 text-white/20 whitespace-nowrap text-sm font-inter"
                >
                  <tech.icon style={{ color: tech.color, opacity: 0.4 }} size={16} />
                  {tech.name}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
