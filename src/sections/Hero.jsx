import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { useMousePosition } from "../hooks/useMousePosition";
import GalaxyScene from "../components/three/GalaxyScene";
import FloatingObjects from "../components/three/FloatingObjects";
import MagneticButton from "../components/ui/MagneticButton";
import { fadeInUp, blurIn, staggerContainer } from "../animations/variants";

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

/* ── Creative Profile Image Component ─────────────────────────────── */
function HeroProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 60 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Outer animated rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full"
        style={{
          background: "conic-gradient(from 0deg, transparent, #00d4ff, transparent, #7b2fff, transparent)",
          maskImage: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
          WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
        }}
      />

      {/* Second counter-rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full"
        style={{
          background: "conic-gradient(from 180deg, transparent, #00fff2, transparent, #ff6b35, transparent)",
          maskImage: "radial-gradient(farthest-side, transparent calc(100% - 1px), #fff calc(100% - 1px))",
          WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 1px), #fff calc(100% - 1px))",
          opacity: 0.6,
        }}
      />

      {/* Pulsing glow behind the image */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[280px] h-[280px] md:w-[330px] md:h-[330px] rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.3), rgba(123,47,255,0.2), transparent)" }}
      />

      {/* Image container with gradient border */}
      <div className="relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] rounded-full p-[3px]"
        style={{ background: "linear-gradient(135deg, #00d4ff, #7b2fff, #00fff2, #ff6b35)" }}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-dark">
          <img
            src="/profile.png"
            alt="Lithira Sasmitha – Software Engineer"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>
      </div>

      {/* Floating orbital dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-[370px] h-[370px] md:w-[440px] md:h-[440px]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_#00d4ff]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#7b2fff]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute w-[370px] h-[370px] md:w-[440px] md:h-[440px]"
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#00fff2]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ff6b35] shadow-[0_0_10px_#ff6b35]" />
      </motion.div>

      {/* Floating stat badge — top right */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 -right-4 md:-right-8 glass rounded-xl px-4 py-3 border border-primary/30 shadow-[0_8px_30px_rgba(0,212,255,0.15)]"
      >
        <div className="text-xl font-outfit font-black text-primary">10+</div>
        <div className="text-[10px] text-white/50 font-inter">Projects</div>
      </motion.div>

      {/* Floating stat badge — bottom left */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-2 -left-4 md:-left-8 glass rounded-xl px-4 py-3 border border-secondary/30 shadow-[0_8px_30px_rgba(123,47,255,0.15)]"
      >
        <div className="text-xl font-outfit font-black text-secondary">1+</div>
        <div className="text-[10px] text-white/50 font-inter">Years Exp.</div>
      </motion.div>

      {/* Tech tag — floating */}
      <motion.div
        animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-12 -left-6 md:-left-12 glass rounded-lg px-3 py-1.5 border border-accent/20"
      >
        <span className="text-xs font-mono text-accent">{"<Dev />"}</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { mousePosition } = useMousePosition();
  const heroRef = useRef();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FiGithub,   href: "https://github.com/Lithira-Sasmitha",   label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/lithira-sasmitha",  label: "LinkedIn" },
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left — Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 text-center lg:text-left"
        >
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
            <span className="gradient-text">Lithira</span>
            <br />
            <span className="text-white">Sasmitha</span>
          </motion.h1>

          {/* Cyberpunk Code Terminal Typewriter */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -4 }}
            className="mb-10 w-full max-w-md glass rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden self-center lg:self-start group transition-all duration-300 hover:border-primary/30 hover:shadow-[0_25px_60px_rgba(0,212,255,0.15)] cursor-default"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/5">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              {/* Fake Tab Title */}
              <div className="text-[10px] font-mono tracking-widest text-white/30 uppercase flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                sasmitha.sh
              </div>
              {/* Fake Branch badge */}
              <div className="text-[9px] font-mono text-primary/60 px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 select-none">
                main
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs leading-relaxed text-left relative z-10 select-none">
              {/* Directory prompt */}
              <div className="flex items-center gap-1.5 mb-2 text-white/30 text-[11px] flex-wrap">
                <span>lithira-sasmitha</span>
                <span className="text-secondary font-bold">in</span>
                <span className="text-primary font-semibold">~/portfolio</span>
                <span className="text-accent font-bold">on</span>
                <span className="text-green-400">git:main</span>
              </div>
              
              {/* Command input prompt */}
              <div className="flex items-start gap-2.5 mt-3">
                <span className="text-primary font-black text-sm select-none">{">"}</span>
                <div className="font-outfit font-black text-lg md:text-xl lg:text-2xl tracking-wide flex-1 min-h-[36px]">
                  <span className="text-white/80">A </span>
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
                    className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-fill-transparent text-glow-blue"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Futuristic glowing bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
            <MagneticButton
              variant="glass"
              href="/lithira_sasmitha_cv.pdf"
              download="Lithira_Sasmitha_CV.pdf"
              className="text-base px-8 py-4"
            >
              Download CV 📥
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

            <div className="text-white/40 text-sm font-inter">1+ Years Experience</div>
          </motion.div>
        </motion.div>

        {/* Right — Creative Profile Image */}
        <div className="hidden lg:flex flex-shrink-0">
          <HeroProfileImage />
        </div>
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
