import React from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

import imgApiBlitzAdmin from "../assets/proj-apiblitz-admin.png";
import imgApiBlitzLeader from "../assets/proj-apiblitz-leaderboard.png";
import imgSMS from "../assets/proj-sms.png";
import imgEcomHome from "../assets/proj-ecommerce-home.png";
import imgEcomProducts from "../assets/proj-ecommerce-products.png";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener?.("change", handler) || mql.addListener(handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener?.("change", handler) || mql.removeListener(handler);
  }, [query]);
  return isMobile;
};

const MH3 = motion.h3;

// ── Browser frame wrapper ──────────────────────────────────────────────────
function BrowserFrame({ url, accent, children }) {
  return (
    <div className="w-full h-full flex flex-col rounded-xl overflow-hidden"
      style={{ border: `1px solid ${accent}30`, boxShadow: `0 0 60px ${accent}18, 0 25px 50px rgba(0,0,0,0.5)` }}>
      {/* browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 shrink-0"
        style={{ background: "rgba(15,15,25,0.95)", borderBottom: `1px solid ${accent}20` }}>
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-3 px-3 py-1 rounded-md text-xs font-mono truncate"
          style={{ background: "rgba(255,255,255,0.05)", color: `${accent}99`, border: `1px solid ${accent}15` }}>
          {url}
        </div>
        <div className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: accent }} />
      </div>
      {/* screenshot */}
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}

// ── Dual screenshot display (shows 2 images with tab switcher) ─────────────
function DualShot({ images, accent }) {
  const [active, setActive] = React.useState(0);
  return (
    <div className="w-full h-full flex flex-col">
      {/* tab switcher */}
      <div className="flex gap-1 px-2 pt-1 shrink-0" style={{ background: "rgba(15,15,25,0.95)" }}>
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)}
            className="text-xs px-3 py-1.5 rounded-t-md transition-all font-mono"
            style={{
              background: active === i ? "rgba(255,255,255,0.08)" : "transparent",
              color: active === i ? accent : "rgba(255,255,255,0.35)",
              borderBottom: active === i ? `2px solid ${accent}` : "2px solid transparent"
            }}>
            {img.label}
          </button>
        ))}
      </div>
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img key={active}
            src={images[active].src} alt={images[active].label}
            className="w-full h-full object-cover object-top"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Projects() {
  const isMobile = useIsMobile();

  const projects = React.useMemo(() => [
    {
      title: "API Blitz",
      bgColor: "#08050f",
      accent: "#a855f7",
      status: "Live",
      statusColor: "#a855f7",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      desc: "Tactical API competition platform built for Dev Day at FAST NUCES. Features live leaderboard, round management, challenge submissions, and a full admin command center.",
      links: [
        { label: "Student Portal ↗", href: "https://api-blitz-five.vercel.app" },
        { label: "Admin Panel ↗", href: "https://api-blitz-admin-panel.vercel.app" },
      ],
      screenshots: [
        { label: "Leaderboard", src: imgApiBlitzLeader },
        { label: "Admin Panel", src: imgApiBlitzAdmin },
      ],
    },
    {
      title: "E-Commerce Platform",
      bgColor: "#06050f",
      accent: "#7c3aed",
      status: "Live",
      statusColor: "#7c3aed",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      desc: "Full MERN stack e-commerce store with role-based auth, product catalog with categories, cart, orders, inventory tracking, and search/filtering. VR visualization in progress.",
      links: [
        { label: "Live Demo ↗", href: "https://e-commerce-store-viv4.vercel.app/" },
      ],
      screenshots: [
        { label: "Home", src: imgEcomHome },
        { label: "Products", src: imgEcomProducts },
      ],
    },
    {
      title: "Student Management System",
      bgColor: "#080510",
      accent: "#818cf8",
      status: "Live",
      statusColor: "#818cf8",
      tech: ["Django", "React", "SQLite", "REST API"],
      desc: "Full-stack academic portal inspired by FAST LMS. Role-based access for students, teachers, TAs & admins. Features attendance tracking, marks, slides, resources, and course management.",
      links: [
        { label: "Live App ↗", href: "https://student-management-system-gray-three.vercel.app" },
      ],
      screenshots: [
        { label: "TA Dashboard", src: imgSMS },
      ],
    },
    {
      title: "Linux Web Server",
      bgColor: "#020a04",
      accent: "#22c55e",
      status: "Completed",
      statusColor: "#22c55e",
      tech: ["C", "Linux", "Multithreading", "IPC", "Synchronization"],
      desc: "HTTP web server built from scratch in C using fork(), POSIX threads, shared memory, and pipes. Handles concurrent client requests with scheduling and memory management.",
      links: [
        { label: "GitHub ↗", href: "https://github.com/Rameen-jamal" },
      ],
      mockup: "terminal",
    },
    {
      title: "Semantic Text Clustering",
      bgColor: "#07050f",
      accent: "#c084fc",
      status: "Completed",
      statusColor: "#c084fc",
      tech: ["Python", "NLTK", "Scikit-learn", "WordNet", "K-Means", "TF-IDF"],
      desc: "NLP research project using WordNet WSD, Lexical Chains, and K-Means clustering on the 20 Newsgroups dataset. Achieved F1-Score: 0.847, NMI: 0.731, ARI: 0.692.",
      links: [
        { label: "GitHub ↗", href: "https://github.com/Rameen-jamal" },
      ],
      mockup: "nlp",
    },
  ], []);

  const sceneRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ["start start", "end end"] });
  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const idx = thresholds.findIndex((t) => v <= t);
      setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress, thresholds]);

  const activeProject = projects[activeIndex];

  // ── Right side visual ──────────────────────────────────────────────────
  function ProjectVisual({ project }) {
    if (project.screenshots) {
      return (
        <BrowserFrame url={project.links[0].href.replace("https://", "")} accent={project.accent}>
          {project.screenshots.length > 1
            ? <DualShot images={project.screenshots} accent={project.accent} />
            : <img src={project.screenshots[0].src} alt={project.title} className="w-full h-full object-cover object-top" />
          }
        </BrowserFrame>
      );
    }
    // Terminal mockup for Linux server
    if (project.mockup === "terminal") {
      return (
        <BrowserFrame url="terminal — http_server.c" accent={project.accent}>
          <div className="w-full h-full bg-[#0d0d0d] p-4 font-mono text-xs leading-relaxed overflow-hidden">
            {[
              ["$ gcc -pthread -o server http_server.c", "text-green-400"],
              ["$ ./server 8080", "text-green-400"],
              ["[INFO] Server listening on port 8080", "text-blue-400"],
              ["[INFO] Worker threads: 8 | IPC: shared memory", "text-gray-400"],
              ["[REQ]  GET /index.html — 200 OK  (2ms)", "text-emerald-400"],
              ["[REQ]  GET /style.css  — 200 OK  (1ms)", "text-emerald-400"],
              ["[REQ]  POST /api/data  — 201 Created (4ms)", "text-emerald-400"],
              ["[INFO] Fork: child PID 4821 handling client", "text-yellow-400"],
              ["[INFO] Semaphore acquired — writing shm", "text-gray-400"],
              ["[REQ]  GET /api/users  — 200 OK  (3ms)", "text-emerald-400"],
              ["[INFO] 1000 req served · 0 errors ✓", "text-green-300"],
            ].map(([t, c], i) => <div key={i} className={c}>{t}</div>)}
            <div className="flex items-center gap-1 mt-1">
              <span className="text-green-400">$</span>
              <span className="w-2 h-4 bg-green-400 animate-pulse ml-1 inline-block" />
            </div>
          </div>
        </BrowserFrame>
      );
    }
    // NLP mockup
    return (
      <BrowserFrame url="semantic_clustering.py" accent={project.accent}>
        <div className="w-full h-full bg-[#0a0514] p-4 flex flex-col gap-3 overflow-hidden">
          <div className="text-sm text-violet-300 font-semibold">Semantic Text Clustering — Results</div>
          <div className="grid grid-cols-3 gap-2">
            {[{ l: "F1-Score", v: "0.847", c: "#8b5cf6" }, { l: "NMI", v: "0.731", c: "#06b6d4" }, { l: "ARI", v: "0.692", c: "#10b981" }].map(m => (
              <div key={m.l} className="rounded-lg p-2 text-center" style={{ background: `${m.c}12`, border: `1px solid ${m.c}25` }}>
                <div className="text-lg font-bold" style={{ color: m.c }}>{m.v}</div>
                <div className="text-xs text-gray-400">{m.l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-white/5 border border-violet-500/20 p-3 flex flex-col gap-2">
            <div className="text-xs text-gray-400 mb-1">Cluster Distribution (K=20)</div>
            {[["Politics", "▓▓▓▓▓▓▓▓░░", "78%", "#8b5cf6"], ["Tech", "▓▓▓▓▓▓░░░░", "61%", "#06b6d4"], ["Sports", "▓▓▓▓▓░░░░░", "52%", "#10b981"], ["Religion", "▓▓▓▓░░░░░░", "43%", "#f59e0b"]].map(([l, b, p, c]) => (
              <div key={l} className="flex items-center gap-2 text-xs">
                <span className="text-gray-400 w-16 shrink-0">{l}</span>
                <span style={{ color: c }} className="font-mono">{b}</span>
                <span className="text-gray-500">{p}</span>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500 font-mono mt-auto">Dataset: 20 Newsgroups · WordNet WSD · TF-IDF · K-Means</div>
        </div>
      </BrowserFrame>
    );
  }

  return (
    <section id="projects" ref={sceneRef} className="relative text-white"
      style={{ height: `${100 * projects.length}vh`, backgroundColor: activeProject.bgColor, transition: "background-color 600ms ease" }}>
      <div className="sticky top-0 h-screen flex flex-col">

        {/* Header */}
        <div className="shrink-0 pt-6 pb-2 text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
            My Projects
          </h2>
          {/* progress dots */}
          <div className="flex gap-2 justify-center mt-3">
            {projects.map((p, i) => (
              <div key={i} className="h-1.5 rounded-full transition-all duration-500"
                style={{ width: i === activeIndex ? "28px" : "6px", background: i === activeIndex ? activeProject.accent : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-12 pb-6 overflow-hidden">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">

            {/* Left — info */}
            <div className="w-full lg:w-[38%] shrink-0 flex flex-col gap-4 text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div key={activeProject.title}
                  initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col gap-3">

                  {/* status */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono self-center lg:self-start"
                    style={{ background: `${activeProject.statusColor}12`, border: `1px solid ${activeProject.statusColor}35`, color: activeProject.statusColor }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: activeProject.statusColor }} />
                    {activeProject.status}
                  </div>

                  <MH3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                    {activeProject.title}
                  </MH3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {activeProject.desc}
                  </p>

                  {/* tech */}
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {activeProject.tech.map(t => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md"
                        style={{ background: `${activeProject.accent}10`, border: `1px solid ${activeProject.accent}28`, color: activeProject.accent }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* links */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-1">
                    {activeProject.links.map(link => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 hover:brightness-110"
                        style={{ background: `${activeProject.accent}18`, border: `1px solid ${activeProject.accent}45`, color: activeProject.accent }}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — screenshot */}
            <AnimatePresence mode="wait">
              <motion.div key={activeProject.title + "-visual"}
                className="w-full lg:flex-1"
                style={{ height: isMobile ? "36vh" : "60vh" }}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.45, ease: "easeOut" }}>
                <ProjectVisual project={activeProject} />
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* scroll hint */}
        <div className="shrink-0 pb-4 flex justify-center">
          <motion.div className="text-xs text-white/20 font-mono flex items-center gap-2"
            animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            scroll to explore ↓
          </motion.div>
        </div>
      </div>
    </section>
  );
}