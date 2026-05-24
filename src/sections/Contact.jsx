import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiPhone } from "react-icons/fi";
import SectionWrapper, { SectionHeader } from "../components/ui/SectionWrapper";
import { fadeInLeft, fadeInRight, fadeInUp } from "../animations/variants";
import MagneticButton from "../components/ui/MagneticButton";

const contactInfo = [
  { icon: FiMail, label: "Email", value: "alex.morgan@email.com", color: "#00d4ff" },
  { icon: FiPhone, label: "Phone", value: "+1 (555) 123-4567", color: "#7b2fff" },
  { icon: FiMapPin, label: "Location", value: "San Francisco, CA", color: "#00fff2" },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub", color: "#ffffff" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0077b5" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter", color: "#1da1f2" },
];

function GlowInput({ label, id, type = "text", placeholder, textarea, value, onChange }) {
  return (
    <div className="space-y-2 group">
      <label htmlFor={id} className="block text-xs font-medium text-white/50 uppercase tracking-wider group-focus-within:text-primary transition-colors">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-white/20 text-sm font-inter focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 resize-none bg-transparent"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-white/20 text-sm font-inter focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 bg-transparent"
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" className="bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Contact"
          title="Let's Build Something"
          subtitle="Have a project in mind? Let's collaborate and create something extraordinary together."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <motion.div variants={fadeInLeft} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-outfit font-bold text-white text-xl mb-2">Get in Touch</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                I'm always open to discussing new opportunities, creative collaborations, or just a friendly chat
                about tech. My inbox is always open.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-wider">{label}</div>
                    <div className="text-white/80 text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-white/25"
                    style={{ "--hover-color": color }}
                    data-hover
                  >
                    <Icon size={18} className="text-white/60" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 border border-green-400/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                <span className="font-medium text-green-400 text-sm">Available for Projects</span>
              </div>
              <p className="text-white/40 text-xs">
                Currently accepting new clients. Typical response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={fadeInRight} className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 border border-white/5 relative overflow-hidden">
              {/* Glow top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="font-outfit font-bold text-white text-2xl mb-2">Message Sent!</h3>
                  <p className="text-white/50 text-sm mb-6">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <MagneticButton variant="outline" onClick={() => setSent(false)}>
                    Send Another
                  </MagneticButton>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <GlowInput id="name" label="Your Name" placeholder="Alex Morgan" value={form.name} onChange={update("name")} />
                    <GlowInput id="email" type="email" label="Email Address" placeholder="alex@email.com" value={form.email} onChange={update("email")} />
                  </div>
                  <GlowInput id="subject" label="Subject" placeholder="Let's build something amazing..." value={form.subject} onChange={update("subject")} />
                  <GlowInput id="message" label="Message" placeholder="Tell me about your project..." textarea value={form.message} onChange={update("message")} />

                  <MagneticButton
                    type="submit"
                    variant="primary"
                    className="w-full py-4 text-base"
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </MagneticButton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
