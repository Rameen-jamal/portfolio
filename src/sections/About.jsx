import { motion } from "framer-motion";
import rameenPhoto from "../assets/rameen.png";

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden" aria-label="About me">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px] animate-pulse delay-300" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.4 }}>

          {/* Avatar — now your real photo */}
          <motion.div
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl border border-[#1CD8D2]/25 flex-shrink-0"
            whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
            <img
              src={rameenPhoto}
              alt="Syeda Rameen Jamal"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Name + Bio */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
              Syeda Rameen Jamal
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">Full-Stack Developer · FAST NUCES Karachi</p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl">
             Junior Software Engineer with experience in Full-Stack Development, AI/ML, and Systems Programming.
I build scalable web applications, intelligent software solutions, and low-level systems — working across React, Node.js, Django, Information Retrieval, Machine Learning, and C/C++.
Passionate about solving real-world problems through software, automation, and emerging AI technologies.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
              {[
                { label: "CGPA", value: "3.45 / 4.0" },
                { label: "Honors", value: "Dean's List ×4" },
                { label: "University", value: "FAST NUCES" },
              ].map((item, i) => (
                <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }} viewport={{ once: true }}>
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold text-white">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition">Get in Touch</a>
            </div>
          </div>
        </motion.div>

        {/* About body */}
        <motion.div className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.4 }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">About Me</h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
  I&apos;m a final-year Computer Science student at FAST NUCES Karachi with experience spanning
  Full-Stack Development, Artificial Intelligence, Information Retrieval, and Systems Programming.
  I enjoy building software that ranges from modern React applications and REST APIs to concurrent
  web servers and low-level systems in C/C++.
</p>

<p className="mt-4 text-gray-400 text-base sm:text-lg">
  Beyond academics, I work with clients on freelance projects involving web development,
  automation, and custom software solutions. My interests include Machine Learning, Retrieval Systems,
  scalable backend architectures, and AI-powered applications. I&apos;m currently seeking opportunities
  where I can contribute as a software engineer while continuing to grow across both traditional
  software development and emerging AI technologies.
</p>
          
        </motion.div>
      </div>
    </section>
  );
}