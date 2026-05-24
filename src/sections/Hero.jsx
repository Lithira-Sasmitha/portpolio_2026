import { useRef, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useMousePosition } from "../hooks/useMousePosition";
import GalaxyScene from "../components/three/GalaxyScene";
import FloatingObjects from "../components/three/FloatingObjects";
import MagneticButton from "../components/ui/MagneticButton";
import { fadeInUp, blurIn, staggerContainer, viewportOptions } from "../animations/variants";

function HeroCanvas({ mouseX, mouseY }) {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      className="absolute inset-0"
    >
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
      <Suspense fallback={null}>
        <Stars radius={80} depth={60} count={3000} factor={4} saturation={0} fade speed={1} />
        <GalaxyScene />
        <FloatingObjects mouseX={mouseX} mouseY={mouseY} />
      </Suspense>
    </Canvas>
  );
}

export default function Hero() {
  const { mousePosition } = useMousePosition();
  const heroRef = useRef();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FiGithub,   href: "https://github.com",   label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com",  label: "LinkedIn" },
    { icon: FiTwitter,  href: "https://twitter.com",   label: "Twitter" },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <HeroCanvas mouseX={mousePosition.x} mouseY={mousePosition.y} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60 pointer-events-none" />

      {/* Mouse parallax light */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-200"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,212,255,0.04), transparent 40%)`,
        }}
      />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left — Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 text-center lg:text-left"
        >
          {/* Available badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-8">
            <span className="px-4 py-2 rounded-full glass border border-green-400/30 text-green-400 text-sm font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2" />
              Available for hire
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div variants={blurIn} className="mb-4">
            <span className="text-white/50 font-inter text-lg md:text-xl tracking-wider">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            variants={blurIn}
            className="font-outfit font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6"
          >
            <span className="gradient-text">Alex</span>
            <br />
            <span className="text-white">Morgan</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="font-outfit text-xl md:text-2xl lg:text-3xl font-medium">
              <span className="text-white/60">A </span>
              <TypeAnimation
                sequence={[
                  "Full Stack Engineer",   2000,
                  "3D Web Developer",      2000,
                  "AI Integration Expert", 2000,
                  "Cloud Architect",       2000,
                  "Creative Coder",        2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text-blue text-glow-blue"
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-white/60 font-inter text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
          >
            I craft immersive digital experiences at the intersection of{" "}
            <span className="text-primary">cutting-edge technology</span> and{" "}
            <span className="text-secondary">creative design</span>. From 3D web
            worlds to scalable cloud systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <MagneticButton
              variant="primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base px-8 py-4"
            >
              View My Work ✨
            </MagneticButton>
            <MagneticButton
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base px-8 py-4"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center lg:justify-start">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 transition-colors duration-300"
                aria-label={label}
                data-hover
              >
                <Icon size={18} />
              </motion.a>
            ))}

            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent ml-2" />

            <div className="text-white/40 text-sm font-inter">6+ Years Experience</div>
          </motion.div>
        </motion.div>

        {/* Right — Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="hidden lg:flex flex-col gap-4 min-w-[220px]"
        >
          {[
            { value: "50+", label: "Projects Delivered", color: "#00d4ff" },
            { value: "30+", label: "Happy Clients", color: "#7b2fff" },
            { value: "6+",  label: "Years Experience", color: "#00fff2" },
            { value: "99%", label: "Client Satisfaction", color: "#ff6b35" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              custom={i}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div
                className="font-outfit font-black text-3xl mb-1 transition-all duration-300 group-hover:scale-110 origin-left"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-white/50 text-sm font-inter">{stat.label}</div>
              <div
                className="mt-3 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-primary transition-colors duration-300 group"
        data-hover
      >
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
