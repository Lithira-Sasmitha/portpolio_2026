import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "../../animations/variants";

export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
      className={`section py-24 md:py-32 relative ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({ badge, title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      variants={fadeInUp}
      className={`flex flex-col gap-4 mb-16 md:mb-20 ${alignClass}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium tracking-wider uppercase self-start">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="section-title gradient-text">{title}</h2>
      {subtitle && <p className="section-subtitle max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}
