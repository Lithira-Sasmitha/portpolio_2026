import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { services } from "../data/content";
import { fadeInUp, staggerContainer } from "../animations/variants";

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="What I Do"
          title="Services I Offer"
          subtitle="From concept to deployment, I provide end-to-end solutions tailored to your unique challenges."
        />

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative glass rounded-2xl p-6 border border-white/5 group overflow-hidden cursor-default transition-all duration-300 hover:border-white/10"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.color}12 0%, transparent 60%)`,
                }}
              />

              {/* Top border on hover */}
              <div
                className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-outfit font-bold text-white text-lg mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-white/40">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: service.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
