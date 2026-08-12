import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress, useActiveSection } from "../../hooks/useScrollProgress";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { id: "hero",         label: "Home" },
  { id: "about",        label: "About" },
  { id: "skills",       label: "Skills" },
  { id: "projects",     label: "Projects" },
  { id: "experience",   label: "Experience" },
  { id: "contact",      label: "Contact" },
];

export default function Navbar() {
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(navLinks.map((n) => n.id));
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 font-outfit font-bold text-xl tracking-tight gradient-text-blue text-glow-blue cursor-pointer"
            data-hover
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/30 p-[1px] bg-dark flex-shrink-0">
              <img src="profile.png" alt="Lithira Sasmitha" className="w-full h-full object-cover object-top rounded-full" />
            </div>
            <span>{"Lithira Sasmitha"}</span>
          </motion.button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  data-hover
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold glow-blue transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
            data-hover
          >
            <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            Hire Me
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors p-2"
            data-hover
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 glass border-b border-white/5 md:hidden"
          >
            <ul className="flex flex-col py-4 px-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left py-3 text-sm font-medium border-b border-white/5 last:border-0 transition-colors ${
                      activeSection === link.id ? "text-primary" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="pt-4">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
