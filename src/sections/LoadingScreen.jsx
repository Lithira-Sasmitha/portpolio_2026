import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingPhrases = [
  "Initializing portfolio...",
  "Loading 3D assets...",
  "Compiling experiences...",
  "Rendering the universe...",
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 4 + 1;
      });
    }, 40);

    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % loadingPhrases.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(phraseInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark overflow-hidden"
        >
          {/* Background glow orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)" }}
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-2/3 left-1/3 w-[400px] h-[400px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(123,47,255,0.2) 0%, transparent 70%)" }}
            />
          </div>

          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-10 w-full max-w-sm px-8">
            {/* Logo glitch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="font-outfit font-black text-5xl gradient-text text-glow-blue mb-2">
                {"<Dev />"}
              </div>
              <div className="text-white/40 text-sm tracking-[0.3em] uppercase font-inter">
                Software Engineer
              </div>
            </motion.div>

            {/* Orbiting ring animation */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border border-primary/30"
                style={{ borderTopColor: "#00d4ff" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute w-16 h-16 rounded-full border border-secondary/30"
                style={{ borderTopColor: "#7b2fff" }}
              />
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_20px_#00d4ff]" />
            </div>

            {/* Phrase */}
            <AnimatePresence mode="wait">
              <motion.p
                key={phraseIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-white/50 text-sm font-inter tracking-widest text-center uppercase"
              >
                {loadingPhrases[phraseIndex]}
              </motion.p>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="w-full">
              <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full loading-bar rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-white/30 text-xs font-mono">Loading</span>
                <span className="text-primary text-xs font-mono">
                  {Math.round(Math.min(progress, 100))}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
