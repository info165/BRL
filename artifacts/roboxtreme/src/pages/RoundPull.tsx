import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import Nav from "@/components/Nav";
import blockPullImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.01_1780570206668.jpeg";
import arenaOverviewImg from "@assets/WhatsApp_Image_2026-06-04_at_15.57.36_1780570231360.jpeg";

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
  { text: <>Two members per team: one <strong className="text-white">hooks the block</strong>, one <strong className="text-white">drives the robot</strong> from Point A to the finish line</>, result: "2 members" },
  { text: <>Each block pulled scores the points shown in the <strong className="text-white">Block Points Table</strong> above</>, result: "20–100 pts" },
  { text: <>Total time per run</>, result: "120 sec" },
  { text: <>Time bonus for every <strong className="text-white">second left</strong> unused</>, result: "+1 pt / sec" },
];

const penaltyRule = {
  text: <>Negative marking: the robot <strong className="text-white">touches the boundary</strong> or goes outside the boundary line</>,
  result: "−5 pts / touch",
};

type ExampleLine = { item: string; detail: string; pts: number; penalty?: boolean };

const example: { scenario: string; lines: ExampleLine[] } = {
  scenario: "A team pulls the 1 kg and 2 kg blocks to the finish line in 60 seconds, but the robot touches the boundary once along the way.",
  lines: [
    { item: "1 kg block", detail: "Pulled to the finish line", pts: 60 },
    { item: "2 kg block", detail: "Pulled to the finish line", pts: 80 },
    { item: "Time bonus", detail: "120 s − 60 s = 60 s left", pts: 60 },
    { item: "Boundary penalty", detail: "1 touch × −5", pts: -5, penalty: true },
  ],
};
const exampleTotal = example.lines.reduce((sum, l) => sum + l.pts, 0);
const formatPts = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : "0");
const exampleSum = example.lines
  .map((l, i) => (i === 0 ? `${l.pts}` : l.pts < 0 ? `− ${Math.abs(l.pts)}` : `+ ${l.pts}`))
  .join(" ");

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function RoundPull() {
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
        <img src={blockPullImg} alt="Block Pull Challenge" className="w-full object-cover object-center" style={{ maxHeight: "560px" }} />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="absolute inset-0 flex items-center justify-end">
          <div className="max-w-5xl mx-auto px-6 w-full flex justify-end">
            <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-lg text-right">
              <motion.div variants={fadeUp} className="mb-4">
                <Link href="/" className="inline-flex items-center gap-2 justify-end text-white/40 hover:text-white text-sm font-display transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="flex justify-end">
                <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-red-500 text-white px-3 py-1.5 rounded-sm">Round 2</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-display font-black uppercase leading-none mt-3 mb-2">
                <span className="block text-5xl md:text-7xl text-white">BLOCK</span>
                <span className="block text-5xl md:text-7xl text-red-500" style={{ textShadow: "0 0 30px rgba(255,60,60,0.5)" }}>PULL</span>
                <span className="block text-3xl md:text-4xl text-yellow-400 font-bold tracking-wider">CHALLENGE</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/55 font-display text-lg mt-2">Pull with Strength. Score with Strategy.</motion.p>
              <motion.div variants={fadeUp} className="flex items-center justify-end gap-2 text-white/40 font-display text-sm mt-2">
                <Clock className="w-4 h-4 text-red-400" /> 120 seconds match duration
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

        {/* Objective */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="p-6 rounded-md border border-red-500/20 bg-red-500/5">
          <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-red-400 mb-2">Objective</p>
          <p className="text-white font-display font-semibold text-lg">Hook and pull Weight Blocks to the finish line. One team member hooks the block while the other drives the robot from Point A to the finish line.</p>
        </motion.div>

        {/* Scoring + Arena */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={fadeUp}>
            <h2 className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Block Points Table</h2>
            <div className="rounded-md overflow-hidden border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-500/15 border-b border-white/10">
                    <th className="text-left p-4 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Block Weight</th>
                    <th className="text-center p-4 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {scoring.map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                      <td className="p-4 font-display font-bold text-white">{row.weight}</td>
                      <td className="p-4 text-center">
                        <span className="font-display font-black text-2xl text-red-400 tabular-nums">{row.pts}</span>
                        <span className="text-white/40 text-xs ml-1.5 font-display">pts</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-md overflow-hidden border border-red-500/20 relative">
            <img src={arenaOverviewImg} alt="Block Pull Arena" className="w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <span className="font-display font-bold text-white/60 text-xs tracking-widest uppercase">Arena Overview — Round 2</span>
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
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full border border-red-500/40 bg-red-500/10 font-display font-black text-sm text-red-400 tabular-nums">
                  {i + 1}
                </span>
                <p className="flex-1 text-white/70 text-sm leading-snug">{rule.text}</p>
                <span className="shrink-0 font-display font-black text-sm uppercase tracking-wide text-red-400 whitespace-nowrap">
                  {rule.result}
                </span>
              </motion.div>
            ))}
            <motion.div variants={fadeUp}
              className="sm:col-span-2 flex items-center gap-4 p-4 rounded-md border border-yellow-400/30 bg-yellow-400/[0.06]">
              <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full border border-yellow-400/50 bg-yellow-400/10 font-display font-black text-sm text-yellow-400 tabular-nums">
                {scoringRules.length + 1}
              </span>
              <p className="flex-1 text-white/70 text-sm leading-snug">{penaltyRule.text}</p>
              <span className="shrink-0 font-display font-black text-base uppercase tracking-wide text-yellow-400 whitespace-nowrap">
                {penaltyRule.result}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Worked Example */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="rounded-md overflow-hidden border border-red-500/25 bg-card"
          style={{ boxShadow: "0 0 40px rgba(255,60,60,0.07)" }}>
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-white/8"
            style={{ background: "linear-gradient(90deg, rgba(255,60,60,0.14) 0%, rgba(255,60,60,0) 70%)" }}>
            <div>
              <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-red-400">Worked Example</p>
              <h3 className="font-display font-black text-xl md:text-2xl uppercase text-white leading-tight">How a Run Is Scored</h3>
            </div>
            <span className="inline-flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider text-white/60 border border-white/10 px-3 py-1.5 rounded-sm">
              <Clock className="w-3.5 h-3.5 text-red-400" /> 120 sec run
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
                      <p className={`font-display text-xs ${line.penalty ? "text-yellow-400/80" : "text-white/45"}`}>{line.detail}</p>
                    </div>
                    <span className={`font-display font-black text-xl tabular-nums whitespace-nowrap ${line.penalty ? "text-yellow-400" : "text-white"}`}>
                      {formatPts(line.pts)}<span className="text-white/40 text-xs font-bold ml-1">pts</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 p-6 text-center border-t md:border-t-0 md:border-l border-red-500/20"
              style={{ background: "radial-gradient(circle at 50% 40%, rgba(255,60,60,0.16), rgba(255,60,60,0.03) 70%)" }}>
              <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-white/50">Total Score</p>
              <p className="font-display font-black text-6xl leading-none tabular-nums text-red-400"
                style={{ textShadow: "0 0 30px rgba(255,60,60,0.45)" }}>
                {exampleTotal}
              </p>
              <p className="font-display font-bold text-sm text-white/55 tabular-nums">
                {exampleSum} = {exampleTotal}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Rules */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Equipment Rules</motion.h2>
          <div className="space-y-3">
            {[
              "Blocks are tied with ropes having hooks at the other end.",
              "Every robot must have a hook hole (diameter: 10 mm) in the back-center of the chassis, as specified in the Technical Robot Specifications.",
              "Hooks are manually placed by participants at the start of each attempt.",
            ].map((rule, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 p-4 rounded-md border border-white/8 bg-card">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="mt-4 p-4 rounded-md border border-yellow-400/20 bg-yellow-400/5">
            <p className="text-yellow-300/80 text-sm font-display">
              <span className="font-bold text-yellow-400">Note:</span> For wired robots, the hook hole must be on the same side from which the wire exits.
            </p>
          </motion.div>
        </motion.div>

        {/* Link to robot specs */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="text-center pt-2">
          <p className="text-white/40 text-sm font-display mb-3">Need to check the chassis modification requirements?</p>
          <Link href="/robot-specs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#00a8ff]/40 text-[#00a8ff] hover:bg-[#00a8ff]/10 transition-all font-display font-bold text-sm uppercase tracking-wider">
            View Robot Specifications →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
