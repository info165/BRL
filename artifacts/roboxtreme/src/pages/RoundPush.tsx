import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import Nav from "@/components/Nav";
import blockPushImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.00_1780570206668.jpeg";
import pushBlockArenaImg from "@assets/WhatsApp_Image_2026-06-04_at_16.55.42_1780572719510.jpeg";

const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const scoring = [
  { weight: "200 gm", pts: 10 },
  { weight: "500 gm", pts: 20 },
  { weight: "750 gm", pts: 30 },
  { weight: "1 kg", pts: 40 },
  { weight: "1.5 kg", pts: 50 },
  { weight: "2 kg", pts: 60 },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function RoundPush() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl transition-all hover:scale-110"
        style={{ boxShadow: "0 0 20px rgba(37,211,102,0.4)" }} title="Chat on WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Cinematic hero image */}
      <div className="relative pt-16 overflow-hidden">
        <img src={blockPushImg} alt="Block Push Challenge" className="w-full object-cover object-center" style={{ maxHeight: "560px" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 w-full">
            <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-lg">
              <motion.div variants={fadeUp} className="mb-4">
                <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-display mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
              </motion.div>
              <motion.div variants={fadeUp}>
                <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-[#00a8ff] text-[#030912] px-3 py-1.5 rounded-sm">Round 1</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-display font-black uppercase leading-none mt-3 mb-2">
                <span className="block text-5xl md:text-7xl text-white">BLOCK</span>
                <span className="block text-5xl md:text-7xl" style={{ color: "#00a8ff", textShadow: "0 0 30px rgba(0,168,255,0.5)" }}>PUSH</span>
                <span className="block text-3xl md:text-4xl text-yellow-400 font-bold tracking-wider">CHALLENGE</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/55 font-display text-lg mt-2">Push the Blocks. Score the Points.</motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-white/40 font-display text-sm mt-2">
                <Clock className="w-4 h-4 text-[#00a8ff]" /> 120 seconds match duration
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

        {/* Objective */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="p-6 rounded-md border border-[#00a8ff]/20 bg-[#00a8ff]/5">
          <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-[#00a8ff] mb-2">Objective</p>
          <p className="text-white font-display font-semibold text-lg">Push wooden blocks out of the arena to score points. Heavier blocks carry higher point values.</p>
        </motion.div>

        {/* Scoring + Arena */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={fadeUp}>
            <h2 className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Block Points Table</h2>
            <div className="rounded-md overflow-hidden border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#00a8ff]/15 border-b border-white/10">
                    <th className="text-left p-4 font-display font-bold uppercase tracking-wider text-[#00a8ff] text-xs">Block Weight</th>
                    <th className="text-center p-4 font-display font-bold uppercase tracking-wider text-[#00a8ff] text-xs">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {scoring.map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                      <td className="p-4 font-display font-bold text-white">{row.weight}</td>
                      <td className="p-4 text-center">
                        <span className="font-display font-black text-2xl" style={{ color: "#00a8ff" }}>{row.pts}</span>
                        <span className="text-white/40 text-xs ml-1.5 font-display">pts</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-md overflow-hidden border border-[#00a8ff]/20 relative">
            <img src={pushBlockArenaImg} alt="Block Push Arena" className="w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <span className="font-display font-bold text-white/60 text-xs tracking-widest uppercase">Arena Overview — Round 1</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Rules */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Round Rules</motion.h2>
          <div className="space-y-3">
            {[
              "Different blocks have different weights — heavier blocks carry higher points.",
              "Teams attempt to score as many points as possible within the allotted time.",
              "Highest cumulative score wins the round.",
            ].map((rule, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 p-4 rounded-md border border-white/8 bg-card">
                <CheckCircle2 className="w-4 h-4 text-[#00a8ff] shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
