import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { testimonials } from "../data/content";
import { fadeInUp } from "../animations/variants";


export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <SectionWrapper id="testimonials" className="bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="References"
          title="Academic References"
          subtitle="Contact details and academic guidance from professors and lecturers at SLIIT."
        />

        <div className="max-w-3xl mx-auto">
          {/* Main testimonial carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-3xl p-8 md:p-10 border relative overflow-hidden"
                style={{ borderColor: `${t.color}20` }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 10% 10%, ${t.color}, transparent 60%)` }}
                />

                <div className="font-mono text-primary text-sm md:text-base leading-relaxed mt-2 mb-8 relative z-10 flex flex-col gap-3">
                  {t.text.split("•").map((info, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-primary/70">⚡</span>
                      <span className="text-white/80 font-inter">{info.trim()}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-outfit font-bold text-sm"
                    style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-outfit font-bold text-white">{t.name}</div>
                    <div className="text-sm" style={{ color: t.color }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    data-hover
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-primary" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prev}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/40 transition-all"
                  data-hover
                >
                  <FiChevronLeft size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={next}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/40 transition-all"
                  data-hover
                >
                  <FiChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* All avatar strip */}
          <motion.div variants={fadeInUp} className="flex justify-center gap-4 mt-10">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => setCurrent(i)}
                whileHover={{ scale: 1.2, y: -4 }}
                data-hover
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold font-outfit transition-all duration-300 ${
                  i === current ? "scale-110 shadow-[0_0_15px_rgba(0,212,255,0.4)]" : "opacity-50"
                }`}
                style={{
                  background: `${t.color}20`,
                  color: t.color,
                  border: `1px solid ${i === current ? t.color : t.color + "30"}`,
                }}
              >
                {t.avatar}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
