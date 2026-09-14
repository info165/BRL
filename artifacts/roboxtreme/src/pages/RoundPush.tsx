import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, Clock } from "lucide-react";
import Nav from "@/components/Nav";
import blockPushImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.00_1780570206668.jpeg";
import pushBlockArenaImg from "@assets/WhatsApp_Image_2026-06-04_at_16.55.42_1780572719510.jpeg";

const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const scoring = [
  { weight: "200 g", pts: 20 },
  { weight: "500 g", pts: 30 },
  { weight: "700 g", pts: 40 },
  { weight: "1 kg", pts: 60 },
  { weight: "2 kg", pts: 80 },
  { weight: "4 kg", pts: 100 },
];

const scoringRules = [
  { text: <>Block <strong className="text-white">completely inside</strong> the designated box</>, result: "Full points" },
  { text: <>Any part of the block <strong className="text-white">outside</strong> the box</>, result: "50% points" },
  { text: <>Total time per run</>, result: "120 sec" },
  { text: <>Time bonus for every <strong className="text-white">second left</strong> unused</>, result: "+1 pt / sec" },
];

type ExampleLine = { item: string; detail: string; pts: number; full?: number };

const example: { scenario: string; lines: ExampleLine[] } = {
  scenario: "A team pushes the 500 g and 1 kg blocks into the box and finishes the run in 40 seconds. The 1 kg block is completely inside, but part of the 500 g block ends up outside, so that block loses 50% of its points.",
  lines: [
    { item: "500 g block", detail: "Partly outside · 50% deducted", pts: 15, full: 30 },
    { item: "1 kg block", detail: "Completely inside", pts: 60 },
    { item: "Time bonus", detail: "120 s − 40 s = 80 s left", pts: 80 },
  ],
};
const exampleTotal = example.lines.reduce((sum, l) => sum + l.pts, 0);

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
          <p className="text-white font-display font-semibold text-lg">Push Weight Blocks into the designated areas to score points. Heavier blocks carry higher point values.</p>
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
                    <th className="text-center p-4 font-display font-bold uppercase tracking-wider text-[#00a8ff] text-xs">Full Points</th>
                  </tr>
                </thead>
                <tbody>
                  {scoring.map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                      <td className="p-4 font-display font-bold text-white">{row.weight}</td>
                      <td className="p-4 text-center">
                        <span className="font-display font-black text-2xl tabular-nums" style={{ color: "#00a8ff" }}>{row.pts}</span>
                        <span className="text-white/40 text-xs ml-1.5 font-display">pts</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-white/45 text-xs font-display">Half points if any part of the block is outside the box.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-md overflow-hidden border border-[#00a8ff]/20 relative">
            <img src={pushBlockArenaImg} alt="Block Push Arena" className="w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <span className="font-display font-bold text-white/60 text-xs tracking-widest uppercase">Arena Overview — Round 1</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scoring Rules */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Scoring Rules</motion.h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {scoringRules.map((rule, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-center gap-4 p-4 rounded-md border border-white/8 bg-card">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full border border-[#00a8ff]/40 bg-[#00a8ff]/10 font-display font-black text-sm text-[#00a8ff] tabular-nums">
                  {i + 1}
                </span>
                <p className="flex-1 text-white/70 text-sm leading-snug">{rule.text}</p>
                <span className="shrink-0 font-display font-black text-sm uppercase tracking-wide text-[#00a8ff] whitespace-nowrap">
                  {rule.result}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Worked Example */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="rounded-md overflow-hidden border border-[#00a8ff]/25 bg-card"
          style={{ boxShadow: "0 0 40px rgba(0,168,255,0.08)" }}>
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-white/8"
            style={{ background: "linear-gradient(90deg, rgba(0,168,255,0.14) 0%, rgba(0,168,255,0) 70%)" }}>
            <div>
              <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-[#00a8ff]">Worked Example</p>
              <h3 className="font-display font-black text-xl md:text-2xl uppercase text-white leading-tight">How a Run Is Scored</h3>
            </div>
            <span className="inline-flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider text-white/60 border border-white/10 px-3 py-1.5 rounded-sm">
              <Clock className="w-3.5 h-3.5 text-[#00a8ff]" /> 120 sec run
            </span>
          </div>

          <div className="grid md:grid-cols-[1fr_15rem]">
            <div className="p-6">
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5">{example.scenario}</p>
              <div className="divide-y divide-white/8 border-y border-white/8">
                {example.lines.map((line, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 py-3">
                    <div>
                      <p className="font-display font-bold text-white text-base">{line.item}</p>
                      <p className={`font-display text-xs ${line.full !== undefined ? "text-yellow-400/80" : "text-white/45"}`}>{line.detail}</p>
                    </div>
                    <span className="flex items-baseline gap-2 whitespace-nowrap">
                      {line.full !== undefined && (
                        <span className="font-display font-bold text-sm tabular-nums text-white/35 line-through">{line.full}</span>
                      )}
                      <span className={`font-display font-black text-xl tabular-nums ${line.full !== undefined ? "text-yellow-400" : "text-white"}`}>
                        +{line.pts}<span className="text-white/40 text-xs font-bold ml-1">pts</span>
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 p-6 text-center border-t md:border-t-0 md:border-l border-[#00a8ff]/20"
              style={{ background: "radial-gradient(circle at 50% 40%, rgba(0,168,255,0.16), rgba(0,168,255,0.03) 70%)" }}>
              <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-white/50">Total Score</p>
              <p className="font-display font-black text-6xl leading-none tabular-nums"
                style={{ color: "#00a8ff", textShadow: "0 0 30px rgba(0,168,255,0.45)" }}>
                {exampleTotal}
              </p>
              <p className="font-display font-bold text-sm text-white/55 tabular-nums">
                {example.lines.map((l) => l.pts).join(" + ")} = {exampleTotal}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
