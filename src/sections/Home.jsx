import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import ParticleBackground from "../components/ParticlesBackground";
import rameenPhoto from "../assets/rameen.png";

const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/rameen-jamal/" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Rameen-jamal" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

const Home = React.forwardRef((props, ref) => {
  const roles = useMemo(() => ["Full-Stack Developer", "MERN Stack Developer", "React & Node.js Dev"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) { setDeleting(false); setIndex((p) => (p + 1) % roles.length); }
    }, deleting ? 40 : 60);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section ref={ref} id="home" className="h-screen w-full relative overflow-hidden bg-black">
      <ParticleBackground />
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-40 sm:opacity-30 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500" />
      </div>

      {/* MAIN LAYOUT — left text + right photo */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center lg:justify-between gap-8">

        {/* LEFT — all text content */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left w-full lg:max-w-[54rem]"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Available badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#1CD8D2]/30 bg-[#1CD8D2]/08 text-[#1CD8D2] text-sm font-medium self-center lg:self-start"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#1CD8D2] animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Typing role */}
          <motion.div
            className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide min-h-[1.6em]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span>{roles[index].substring(0, subIndex)}</span>
            <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle" style={{ height: "1em" }} />
          </motion.div>

          {/* Name — FIXED: Hello I'm smaller, name on its own line */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
              Hello, I&apos;m
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-1 leading-tight">
              Syeda Rameen Jamal
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          >
            CS student at FAST NUCES Karachi · CGPA 3.45 · Dean&apos;s List ×4 · Building
            scalable full-stack apps with the MERN stack, Django, and everything in between.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a href="#projects" className="px-6 py-3 rounded-full text-lg font-medium text-white bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all">
              Contact Me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="mt-8 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }}
          >
            {socials.map(({ Icon, label, href }) => (
              <motion.a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                variants={glowVariants} initial="initial" whileHover="hover" whileTap="tap" className="text-gray-300">
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-8 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.8 }}
          >
            {[{ num: "3.45", label: "CGPA / 4.0" }, { num: "4×", label: "Dean's List" }, { num: "5+", label: "Projects Built" }].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1CD8D2] to-[#00bf8f]">{s.num}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — photo (desktop only) */}
        <motion.div
          className="hidden lg:flex items-center justify-center shrink-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="relative">
            {/* aurora glow behind photo */}
            <div className="absolute inset-0 rounded-2xl"
              style={{
                background: "conic-gradient(from 0deg, #1CD8D2, #00bf8f, #302b63, #1CD8D2)",
                filter: "blur(55px)",
                opacity: 0.28,
                transform: "scale(1.15)"
              }}
            />
            {/* photo card */}
            <motion.div
              className="relative w-[260px] h-[320px] xl:w-[300px] xl:h-[370px] rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(28,216,210,0.3)",
                boxShadow: "0 0 50px rgba(28,216,210,0.12), 0 25px 50px rgba(0,0,0,0.6)"
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={rameenPhoto}
                alt="Syeda Rameen Jamal"
                className="w-full h-full object-cover object-top"
              />
              {/* subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </motion.div>

            {/* floating badge — bottom right */}
            <motion.div
              className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl text-xs font-mono text-white"
              style={{
                background: "rgba(28,216,210,0.1)",
                border: "1px solid rgba(28,216,210,0.3)",
                backdropFilter: "blur(10px)"
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ⚡ Open to work
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
});

export default Home;