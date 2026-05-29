import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { skillCategories } from "../data/skills";
import { fadeInUp, staggerContainer } from "../animations/variants";

function SkillBar({ name, level, icon: Icon, color, index }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ scale: 1.02, x: 4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg transition-transform group-hover:scale-125 duration-300">
            <Icon style={{ color }} />
          </span>
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        >
          <span className="absolute inset-0 shimmer opacity-50" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Expertise"
          title="Skills & Technologies"
          subtitle="A curated arsenal of tools and technologies I've mastered to build extraordinary digital products."
        />

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.name}
              variants={fadeInUp}
              custom={ci}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Category glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{ background: category.color, transform: "translate(30%, -30%)" }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: `linear-gradient(180deg, ${category.color}, transparent)` }}
                />
                <h3 className="font-outfit font-bold text-lg text-white">{category.name}</h3>
                <span
                  className="ml-auto text-xs px-2 py-1 rounded-full font-mono"
                  style={{
                    background: `${category.color}15`,
                    color: category.color,
                    border: `1px solid ${category.color}30`,
                  }}
                >
                  {category.skills.length} skills
                </span>
              </div>

              <motion.div variants={staggerContainer} className="space-y-4">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={category.color}
                    index={si}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 glass rounded-2xl p-6 border border-primary/10 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="text-4xl">💡</div>
          <div>
            <h4 className="font-outfit font-semibold text-white mb-1">Always Learning</h4>
            <p className="text-white/50 text-sm">
              Currently exploring: <span className="text-orange-400">LLM Fine-tuning</span>.
            </p>
          </div>
          <div className="sm:ml-auto flex gap-2 flex-wrap justify-center">
            {["LLMs"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full glass border border-white/10 text-white/60 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
