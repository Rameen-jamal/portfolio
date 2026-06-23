import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/rameen-jamal/" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Rameen-jamal" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: { scale: 1.2, y: -3, filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))", transition: { type: "spring", stiffness: 300, damping: 15 } },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

const Footer = () => (
  <footer className="relative overflow-hidden bg-black">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,204,0.35),transparent_70%)]" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]" />
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
      className="relative z-10 px-4 sm:px-6 md:px-8 py-16 md:py-20 flex flex-col items-center text-center space-y-6">
      <div className="w-full">
        <h1 className="font-bold leading-none text-white text-center select-none"
          style={{ fontSize: "clamp(2.5rem, 5vw, 10rem)", letterSpacing: "0.02em", lineHeight: 0.9, whiteSpace: "nowrap" }}>
          Syeda Rameen Jamal
        </h1>
      </div>
      <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0D58CC] via-cyan-300 to-emerald-400" />
      <div className="flex gap-5 text-2xl md:text-3xl">
        {socials.map(({ Icon, label, href }) => (
          <motion.a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
            variants={glowVariants} initial="initial" whileHover="hover" whileTap="tap"
            className="text-gray-300 transition-colors duration-200 inline-flex items-center justify-center">
            <Icon />
          </motion.a>
        ))}
      </div>
      <p className="text-gray-300 italic max-w-xl">&ldquo;Build things. Learn constantly. Ship often.&rdquo;</p>
      <p className="text-gray-500 text-sm font-mono">rameenjamal30@gmail.com · Karachi, Pakistan</p>
    </motion.div>
  </footer>
);

export default Footer;