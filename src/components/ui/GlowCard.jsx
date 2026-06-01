import { motion } from "framer-motion";
import { cardHover } from "../../animations/variants";

export default function GlowCard({
  children,
  className = "",
  glowColor = "#00d4ff",
  onClick,
  ...props
}) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative glass rounded-2xl overflow-hidden group cursor-pointer neon-border ${className}`}
      style={{
        "--glow-color": glowColor,
      }}
      {...props}
    >
      {/* Glow overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}15 0%, transparent 70%)`,
        }}
      />
      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
