import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { fadeInLeft, fadeInRight } from "../animations/variants";


const codeSnippet = `const developer = {
  name: "Lithira Sasmitha",
  role: "Full Stack Engineer",
  passion: ["3D Web", "AI", "Cloud"],
  superpower: "Turning coffee
    into scalable software",
  available: true,
};`;

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="About Me"
          title="Crafting Digital Realities"
          subtitle="I'm a software engineer passionate about building extraordinary digital experiences that push the boundaries of what's possible on the web."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Profile visual */}
          <motion.div variants={fadeInLeft} className="relative flex justify-center">
            <div className="relative">
              {/* Glow orbs */}
              <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }} />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, #7b2fff, transparent)" }} />

              {/* Profile card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative glass rounded-3xl p-8 border border-white/10 w-full max-w-sm"
              >
                {/* Avatar */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="w-32 h-32 rounded-2xl p-[2px] overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #00d4ff, #7b2fff, #00fff2)" }}
                  >
                    <img
                      src="profile.png"
                      alt="Lithira Sasmitha"
                      className="w-full h-full object-cover object-top rounded-[14px]"
                    />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-dark animate-pulse" />
                </div>

                <div className="text-center">
                  <h3 className="font-outfit font-bold text-xl text-white mb-1">Lithira Sasmitha</h3>
                  <p className="text-primary text-sm mb-4">Full Stack Engineer</p>

                  <div className="flex justify-center gap-3 mb-6">
                    {["React", "Node", "Flutter"].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="glass rounded-xl p-4 text-left">
                    <pre className="text-xs text-green-400 font-mono leading-relaxed overflow-hidden">
                      {codeSnippet}
                    </pre>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -right-2 md:-right-8 glass rounded-xl p-4 border border-primary/20"
              >
                <div className="text-2xl font-outfit font-black text-primary">10+</div>
                <div className="text-white/50 text-xs">Projects Done</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-2 md:-left-8 glass rounded-xl p-4 border border-secondary/20"
              >
                <div className="text-2xl font-outfit font-black text-secondary">1+</div>
                <div className="text-white/50 text-xs">Years Exp.</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Story */}
          <motion.div variants={fadeInRight} className="space-y-8">
            <div className="space-y-5 text-white/70 font-inter leading-relaxed">
              <p className="text-lg">
                With over <span className="text-primary font-semibold">1+ years of experience</span> crafting
                production-grade software, I specialize in building systems that scale, interfaces that delight,
                and experiences that leave an impression.
              </p>
              <p>
                My journey spans from early days hacking together{" "}
                <span className="text-secondary">React frontends</span> to architecting{" "}
                <span className="text-accent">cloud-native platforms</span> serving hundreds of thousands of users.
                Along the way, I've fallen in love with 3D web development and AI integration.
              </p>
              <p>
                When I'm not writing code, I'm exploring the latest in machine learning, contributing to open
                source, or mentoring the next generation of developers. I believe great software is the marriage of{" "}
                <span className="text-primary">technical excellence</span> and{" "}
                <span className="text-secondary">human empathy</span>.
              </p>
            </div>



            {/* Timeline highlights */}
            <div className="space-y-4">
              <h4 className="font-outfit font-semibold text-white text-lg">My Journey</h4>
              {[
                { year: "2014", event: "Entered Walasmulla National School, beginning physical science path", color: "#ff6b35" },
                { year: "2023", event: "Joined SLIIT to pursue B.Sc. (Hons) in Software Engineering", color: "#7b2fff" },
                { year: "2025", event: "Began Software Engineering internship at Hastiyait (PVT) Ltd", color: "#00d4ff" },
                { year: "Now",  event: "Building responsive, modern IoT & full stack solutions", color: "#00fff2" },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-4 group">
                  <div
                    className="flex-shrink-0 w-14 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono mt-0.5"
                    style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}
                  >
                    {item.year}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
