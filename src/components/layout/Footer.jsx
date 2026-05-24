import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from "react-icons/fi";

const footerLinks = {
  Navigate: ["About", "Skills", "Projects", "Experience", "Contact"],
  Services: ["Full Stack Dev", "3D Experiences", "AI Integration", "Cloud Arch", "Consulting"],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-dark border-t border-white/5 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-outfit font-black text-3xl gradient-text-blue mb-4">{"Lithira Sasmitha"}</div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              Crafting immersive digital experiences at the intersection of technology and creativity. Based in
              San Francisco, working with clients worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FiGithub,   href: "https://github.com" },
                { icon: FiLinkedin, href: "https://linkedin.com" },
                { icon: FiTwitter,  href: "https://twitter.com" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all"
                  data-hover
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-outfit font-semibold text-white text-sm mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-primary transition-colors duration-200"
                      data-hover
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-inter">
            © {new Date().getFullYear()} Lithira Sasmitha. Built with React, Three.js & ❤️
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-primary transition-colors"
            data-hover
          >
            Back to top <FiArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
