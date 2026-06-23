import { motion } from "framer-motion";
import smithPhoto from "../assets/smith.jpg";

const MH2 = motion.h2;
const MDiv = motion.div;

const testimonials = [
  {
    name: "Smith M.",
    role: "GoMining · United States",
    review: "From concept to execution, Rameen handled everything flawlessly. Her work ethic and innovation are unmatched.",
    image: smithPhoto,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials"
      className="relative bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-10 blur-[120px] animate-pulse" />
      </div>

      <MH2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
      >
        What Clients Say
      </MH2>

      <MDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center"
      >
        <img
          src={smithPhoto}
          alt="Smith M."
          className="w-20 h-20 rounded-full border-2 border-[#1CD8D2]/40 mb-5 object-cover"
        />
        <p className="text-gray-200 italic text-lg mb-5 leading-relaxed">
          &ldquo;From concept to execution, Rameen handled everything flawlessly. Her work ethic and innovation are unmatched.&rdquo;
        </p>
        <h3 className="text-lg font-semibold text-white">Smith M.</h3>
        <p className="text-sm text-[#1CD8D2] mt-1">GoMining · United States</p>
        <div className="flex gap-1 mt-3 text-yellow-400 text-lg">
          {"★★★★★"}
        </div>
      </MDiv>
    </section>
  );
}