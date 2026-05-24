import { motion } from "framer-motion";
import { buttonHover } from "../../animations/variants";

export default function MagneticButton({
  children,
  className = "",
  variant = "primary",
  onClick,
  href,
  target,
  type = "button",
  ...props
}) {
  const variants = {
    primary: `bg-gradient-to-r from-primary to-secondary text-white glow-blue hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] border border-primary/20`,
    outline: `bg-transparent border border-primary/50 text-primary hover:border-primary hover:bg-primary/10 hover:glow-blue`,
    ghost: `bg-transparent text-white/70 hover:text-white hover:bg-white/5`,
    glass: `glass border border-white/10 text-white hover:border-primary/40 hover:bg-primary/5`,
  };

  const baseClass = `relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold font-inter text-sm tracking-wide transition-all duration-300 overflow-hidden group ${variants[variant]} ${className}`;

  const ButtonContent = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className={baseClass}
        data-hover
        {...props}
      >
        {ButtonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={baseClass}
      data-hover
      {...props}
    >
      {ButtonContent}
    </motion.button>
  );
}
