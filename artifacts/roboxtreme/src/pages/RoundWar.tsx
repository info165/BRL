import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, Clock } from "lucide-react";
import Nav from "@/components/Nav";
import robotWarImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.01_(1)_1780570206668.jpeg";
import roboWarArenaImg from "@assets/WhatsApp_Image_2026-06-04_at_16.59.04_1780572747087.jpeg";

const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const FIGHT_SECONDS = 90;
const DRAW_POINTS = 50;

// Score = time left × multiplier. In-pit is the central hollow, out-pit the outer pit.
const pits = [
  { key: "in", name: "In-pit", where: "Central hollow", multiplier: 3 },
  { key: "out", name: "Out-pit", where: "Outer pit", multiplier: 2 },
];

const scoring = [10, 20, 40, 60, 80].map((winAt) => ({
  winAt,
  timeLeft: FIGHT_SECONDS - winAt,
}));

const scoringRules = [
  { text: <>One-on-one fight between <strong className="text-white">two teams</strong></>, result: "1 vs 1" },
  { text: <>Total time per fight</>, result: `${FIGHT_SECONDS} sec` },
  { text: <>Opponent pushed into the <strong className="text-white">in-pit</strong> (central hollow)</>, result: "Time left × 3" },
  { text: <>Opponent pushed into the <strong className="text-white">out-pit</strong> (outer pit)</>, result: "Time left × 2" },
];

const highlightRules = [
  { text: <>When there is a winner, only the <strong className="text-white">winning team</strong> gets points</>, result: "Winner only" },
  { text: <>If the fight ends in a <strong className="text-white">draw</strong>, both teams get points</>, result: `${DRAW_POINTS} pts each` },
];

const examples = [
  { pit: pits[0], winAt: 20 },
  { pit: pits[1], winAt: 40 },
].map((e) => ({ ...e, timeLeft: FIGHT_SECONDS - e.winAt, score: (FIGHT_SECONDS - e.winAt) * e.pit.multiplier }));

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
              <Clock className="w-4 h-4 text-yellow-400" /> {FIGHT_SECONDS} seconds match duration
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

        {/* Objective */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="p-6 rounded-md border border-red-500/20 bg-red-500/5">
          <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-red-400 mb-2">Objective</p>
          <p className="text-white font-display font-semibold text-lg">Knock the opponent into the pit! Push the opponent&apos;s robot into the in-pit or the out-pit within {FIGHT_SECONDS} seconds. The faster you win, the more time is left and the higher you score.</p>
        </motion.div>

        {/* Scoring formula callout */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="font-display font-black text-sm uppercase tracking-widest text-yellow-400 mb-3 text-center">Scoring Formula</motion.p>
          <div className="grid sm:grid-cols-2 gap-4">
            {pits.map((pit) => (
              <motion.div key={pit.key} variants={fadeUp}
                className={`p-5 rounded-md text-center border ${pit.multiplier === 3 ? "border-yellow-400/35 bg-yellow-400/[0.07]" : "border-red-500/30 bg-red-500/[0.06]"}`}>
                <p className={`font-display font-black text-xs uppercase tracking-[0.2em] ${pit.multiplier === 3 ? "text-yellow-400" : "text-red-400"}`}>
                  {pit.name} <span className="text-white/40">· {pit.where}</span>
                </p>
                <p className="font-display font-black text-2xl md:text-3xl text-white mt-1">
                  Score = Time left × <span className={pit.multiplier === 3 ? "text-yellow-400" : "text-red-400"}>{pit.multiplier}</span>
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeUp} className="text-white/40 text-sm font-display mt-3 text-center">
            Time left = {FIGHT_SECONDS} seconds − the second the opponent goes into the pit
          </motion.p>
        </motion.div>

        {/* Scoring table + Arena */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={fadeUp}>
            <h2 className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Points by Win Time</h2>
            <div className="rounded-md overflow-hidden border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-500/15 border-b border-white/10">
                    <th className="text-left p-4 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Win At</th>
                    <th className="text-center p-4 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Time Left</th>
                    <th className="text-center p-4 font-display font-bold uppercase tracking-wider text-yellow-400 text-xs">In-pit ×3</th>
                    <th className="text-center p-4 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Out-pit ×2</th>
                  </tr>
                </thead>
                <tbody>
                  {scoring.map((row, i) => (
                    <tr key={row.winAt} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                      <td className="p-4 font-display font-bold text-white text-sm tabular-nums">{row.winAt} sec</td>
                      <td className="p-4 text-center font-display text-white/50 text-sm tabular-nums">{row.timeLeft} sec</td>
                      <td className="p-4 text-center">
                        <span className="font-display font-black text-2xl text-yellow-400 tabular-nums">{row.timeLeft * 3}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="font-display font-black text-2xl text-red-400 tabular-nums">{row.timeLeft * 2}</span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-yellow-400/10">
                    <td className="p-4 font-display font-bold text-yellow-400 text-sm uppercase tracking-wide">Draw</td>
                    <td className="p-4 text-center font-display text-white/40 text-sm">—</td>
                    <td colSpan={2} className="p-4 text-center">
                      <span className="font-display font-black text-2xl text-yellow-400 tabular-nums">{DRAW_POINTS}</span>
                      <span className="text-white/60 text-xs font-display font-bold uppercase tracking-wider ml-2">pts each team</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/35 text-xs font-display mt-3">
              With a winner, only the winning team scores. In a draw, both teams get {DRAW_POINTS} points each.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-md overflow-hidden border border-red-500/20 relative">
            <img src={roboWarArenaImg} alt="Robot War Arena" className="w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <span className="font-display font-bold text-white/60 text-xs tracking-widest uppercase">Arena Overview — Round 3 · Diameter: 3.0m</span>
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
            {highlightRules.map((rule, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-center gap-4 p-4 rounded-md border border-yellow-400/30 bg-yellow-400/[0.06]">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full border border-yellow-400/50 bg-yellow-400/10 font-display font-black text-sm text-yellow-400 tabular-nums">
                  {scoringRules.length + i + 1}
                </span>
                <p className="flex-1 text-white/70 text-sm leading-snug">{rule.text}</p>
                <span className="shrink-0 font-display font-black text-sm uppercase tracking-wide text-yellow-400 whitespace-nowrap">
                  {rule.result}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Worked Examples */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-4">
            <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-red-400">Worked Examples</p>
            <h3 className="font-display font-black text-xl md:text-2xl uppercase text-white leading-tight">How a Fight Is Scored</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {examples.map((ex) => {
              const accent = ex.pit.multiplier === 3 ? "text-yellow-400" : "text-red-400";
              const glow = ex.pit.multiplier === 3 ? "rgba(250,204,21," : "rgba(255,60,60,";
              return (
                <motion.div key={ex.pit.key} variants={fadeUp}
                  className={`rounded-md overflow-hidden border bg-card ${ex.pit.multiplier === 3 ? "border-yellow-400/30" : "border-red-500/25"}`}
                  style={{ boxShadow: `0 0 40px ${glow}0.07)` }}>
                  <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-white/8"
                    style={{ background: `linear-gradient(90deg, ${glow}0.14) 0%, ${glow}0) 75%)` }}>
                    <span className={`font-display font-black text-sm uppercase tracking-[0.15em] ${accent}`}>{ex.pit.name}</span>
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-white/50">{ex.pit.where}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      The opponent is pushed into the {ex.pit.name.toLowerCase()} after {ex.winAt} seconds.
                    </p>
                    <div className="divide-y divide-white/8 border-y border-white/8">
                      <div className="flex items-center justify-between gap-4 py-3">
                        <div>
                          <p className="font-display font-bold text-white text-base">Time left</p>
                          <p className="font-display text-xs text-white/45 tabular-nums">{FIGHT_SECONDS} s − {ex.winAt} s</p>
                        </div>
                        <span className="font-display font-black text-xl tabular-nums text-white whitespace-nowrap">
                          {ex.timeLeft}<span className="text-white/40 text-xs font-bold ml-1">sec</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4 py-3">
                        <div>
                          <p className="font-display font-bold text-white text-base">{ex.pit.name} multiplier</p>
                          <p className="font-display text-xs text-white/45">Score = time left × {ex.pit.multiplier}</p>
                        </div>
                        <span className={`font-display font-black text-xl tabular-nums whitespace-nowrap ${accent}`}>×{ex.pit.multiplier}</span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between gap-4 mt-4">
                      <div>
                        <p className="font-display font-black text-xs uppercase tracking-[0.2em] text-white/50">Total Score</p>
                        <p className="font-display font-bold text-sm text-white/55 tabular-nums">{ex.timeLeft} × {ex.pit.multiplier} = {ex.score}</p>
                      </div>
                      <p className={`font-display font-black text-5xl leading-none tabular-nums ${accent}`}
                        style={{ textShadow: `0 0 30px ${glow}0.45)` }}>
                        {ex.score}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
