import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, Clock, Swords } from "lucide-react";
import Nav from "@/components/Nav";
import robotWarImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.01_(1)_1780570206668.jpeg";
import roboWarArenaImg from "@assets/WhatsApp_Image_2026-06-04_at_16.59.04_1780572747087.jpeg";

const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const scoring = [
  { time: "Win in 10 seconds", formula: "(60−10)×3", pts: 150, top: true },
  { time: "Win in 20 seconds", formula: "(60−20)×3", pts: 120, top: false },
  { time: "Win in 35 seconds", formula: "(60−35)×3", pts: 75, top: false },
  { time: "Win in 50 seconds", formula: "(60−50)×3", pts: 30, top: false },
  { time: "Tie (no winner in 60s)", formula: "20×3", pts: 60, top: false },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function RoundWar() {
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
        <img src={robotWarImg} alt="Robot War" className="w-full object-cover object-center" style={{ maxHeight: "580px" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center px-6">
            <motion.div variants={fadeUp} className="mb-3">
              <Link href="/" className="inline-flex items-center gap-2 justify-center text-white/40 hover:text-white text-sm font-display transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mb-4">
              <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-yellow-400 text-black px-3 py-1.5 rounded-sm">Round 3</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display font-black uppercase leading-none">
              <span className="block text-6xl md:text-8xl text-white">ROBOT</span>
              <span className="block text-7xl md:text-9xl" style={{ color: "#ff3333", textShadow: "0 0 40px rgba(255,50,50,0.7)" }}>WAR</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-display font-bold text-2xl text-white/75 mt-2">
              Push. Outlast. <span className="text-yellow-400">WIN!</span>
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/40 font-display text-sm mt-2">
              <Clock className="w-4 h-4 text-yellow-400" /> 60 seconds match duration
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

        {/* Objective */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="p-6 rounded-md border border-red-500/20 bg-red-500/5">
          <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-red-400 mb-2">Objective</p>
          <p className="text-white font-display font-semibold text-lg">Push the opponent's robot completely out of the arena within 60 seconds. Faster victories earn higher points.</p>
        </motion.div>

        {/* Scoring formula callout */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="p-5 rounded-md border border-yellow-400/25 bg-yellow-400/5 text-center">
          <p className="font-display font-black text-sm uppercase tracking-widest text-yellow-400 mb-1">Scoring Formula</p>
          <p className="font-display font-black text-2xl md:text-3xl text-white">
            Points = (60 − Win Time) × 3
          </p>
          <p className="text-white/40 text-sm font-display mt-1">Example: win at 20 seconds → (60−20)×3 = <strong className="text-yellow-400">120 points</strong></p>
        </motion.div>

        {/* Scoring table + Arena */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={fadeUp}>
            <h2 className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Speed Bonus Scoring</h2>
            <div className="rounded-md overflow-hidden border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-500/15 border-b border-white/10">
                    <th className="text-left p-4 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Win Time</th>
                    <th className="text-center p-4 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Formula</th>
                    <th className="text-center p-4 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {scoring.map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${row.top ? "bg-yellow-400/10" : i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                      <td className="p-4 font-display font-bold text-white text-sm">{row.time}</td>
                      <td className="p-4 text-center font-display text-white/40 text-xs">{row.formula}</td>
                      <td className="p-4 text-center">
                        <span className={`font-display font-black text-2xl ${row.top ? "text-yellow-400" : "text-red-400"}`}>{row.pts}</span>
                        <span className="text-white/40 text-xs ml-1 font-display">pts</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-white/35 text-xs font-display mt-3">
              Tie rule: Both teams receive 20×3 = 60 points each when no robot is pushed out in 60s.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-md overflow-hidden border border-red-500/20 relative">
            <img src={roboWarArenaImg} alt="Robot War Arena" className="w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <span className="font-display font-bold text-white/60 text-xs tracking-widest uppercase">Arena Overview — Round 3 · Diameter: 3.0m</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Rules */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Round Rules &amp; Arena Details</motion.h2>
          <div className="space-y-3">
            {[
              "Two robots enter the arena — the last robot remaining inside wins.",
              "Circular arena with no walls or fencing. Flat flex surface. Diameter: 3.0 metres.",
              "Points = (60 − Win Time in seconds) × 3. Faster wins earn more points.",
              "In case of a tie, both teams receive 20 × 3 = 60 points each.",
            ].map((rule, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 p-4 rounded-md border border-white/8 bg-card">
                <Swords className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
