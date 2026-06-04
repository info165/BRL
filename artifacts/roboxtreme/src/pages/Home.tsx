import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Trophy, MapPin, Calendar, Users,
  ShieldAlert, ChevronRight, Zap,
  Target, Award, CheckCircle2, MessageCircle,
  Clock, Swords, Star, Phone, Crown, Flame
} from "lucide-react";
import blockPushImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.00_1780570206668.jpeg";
import blockPullImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.01_1780570206668.jpeg";
import robotWarImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.01_(1)_1780570206668.jpeg";
import arenaOverviewImg from "@assets/WhatsApp_Image_2026-06-04_at_15.57.36_1780570231360.jpeg";
import pushBlockArenaImg from "@assets/WhatsApp_Image_2026-06-04_at_16.55.42_1780572719510.jpeg";
import roboWarArenaImg from "@assets/WhatsApp_Image_2026-06-04_at_16.59.04_1780572747087.jpeg";

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeeYRHPQggzAivKO6JZP5LWwMK8oC5EjMhGyhDnXY4w6ohwvQ/viewform?usp=preview";
const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const pushScoring = [
  { weight: "250g", pts: 10 },
  { weight: "500g", pts: 20 },
  { weight: "750g", pts: 30 },
  { weight: "1 kg", pts: 40 },
  { weight: "2.5 kg", pts: 50 },
];

const warScoring = [
  { time: "Win in 10s", pts: 50, top: true },
  { time: "Win in 20s", pts: 40, top: false },
  { time: "Win in 35s", pts: 25, top: false },
  { time: "Win in 50s", pts: 10, top: false },
  { time: "Tie (60s)", pts: "30 each", top: false },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      {inView ? value : 0}{suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

      {/* ── Floating WhatsApp ─────────────────────────────── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-whatsapp-float"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ boxShadow: "0 0 20px rgba(37,211,102,0.4)" }}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BG: robot war arena image fills right portion */}
        <div className="absolute inset-0 z-0">
          {/* Dark base so nothing bleeds through on left */}
          <div className="absolute inset-0 bg-background" />
          <img
            src={roboWarArenaImg}
            alt="Arena"
            className="absolute right-0 top-0 h-full w-[55%] object-cover object-center"
          />
          {/* Strong left wipe — fully opaque to 45%, then fades to transparent */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, hsl(220,20%,4%) 0%, hsl(220,20%,4%) 40%, rgba(7,10,15,0.92) 55%, rgba(7,10,15,0.5) 68%, transparent 100%)" }}
          />
          {/* Top and bottom darkening */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/90" />
          {/* Subtle blue glow on left */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_20%_60%,rgba(0,100,200,0.07),transparent)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-2xl"
          >
            {/* Presenter */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#00a8ff]" />
              <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-[#00a8ff]">
                FunScholar presents
              </span>
            </motion.div>

            {/* Main title — BHARAT ROBOTICS LEAGUE */}
            <motion.div variants={fadeUp} className="mb-2">
              <h1 className="font-display font-black uppercase leading-[0.92] tracking-tight">
                {/* BHARAT — white */}
                <span className="block text-5xl sm:text-6xl md:text-7xl text-white">
                  BHARAT
                </span>

                {/* ROBOTICS — vivid split: blue left, red right stroke outline */}
                <span
                  className="block text-[clamp(3.5rem,10vw,6rem)] relative"
                  style={{
                    background: "linear-gradient(90deg, #00a8ff 0%, #00a8ff 48%, #ff3333 52%, #ff3333 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 20px rgba(0,168,255,0.3)) drop-shadow(0 0 20px rgba(255,50,50,0.2))"
                  }}
                >
                  ROBOTICS
                </span>

                {/* LEAGUE — yellow/gold */}
                <span
                  className="block text-5xl sm:text-6xl md:text-7xl"
                  style={{
                    color: "#fac800",
                    textShadow: "0 0 30px rgba(250,200,0,0.5), 0 0 60px rgba(250,200,0,0.2)"
                  }}
                >
                  LEAGUE
                </span>
              </h1>
            </motion.div>

            {/* Season / Dangal badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mt-5 mb-3">
              <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-[#00a8ff] text-[#030912] px-3 py-1 rounded-sm">
                SEASON 1
              </span>
              <span className="font-display font-bold text-white/40 text-xs tracking-widest uppercase">2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-display font-black text-2xl tracking-wider uppercase text-[#ff3333]"
                style={{ textShadow: "0 0 16px rgba(255,50,50,0.6)" }}>
                DANGAL
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="font-display font-semibold tracking-[0.18em] text-white/40 uppercase text-sm mb-8">
              Build. Battle. Conquer.
            </motion.p>

            {/* Event info */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Calendar, text: "30 Sept 2026" },
                { icon: Clock, text: "9 AM – 5 PM" },
                { icon: MapPin, text: "Indian Museum, Kolkata" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-sm text-sm font-display font-semibold text-white/70"
                >
                  <item.icon className="w-3.5 h-3.5 text-[#00a8ff]" />
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <button
                data-testid="button-register-hero"
                onClick={() => window.open(FORM_LINK, "_blank")}
                className="font-display font-black text-base tracking-[0.12em] uppercase px-10 py-4 rounded-sm text-black transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #ff3333 0%, #ff6600 100%)",
                  boxShadow: "0 0 30px rgba(255,80,0,0.4), 0 0 60px rgba(255,80,0,0.15)"
                }}
              >
                Register Your School <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp-hero"
                className="font-display font-bold text-base tracking-[0.1em] uppercase px-8 py-4 rounded-sm border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ══════════════════════════════════════════════════════
          HIGHLIGHTS — animated, colorful
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_50%,rgba(0,50,100,0.12),transparent)]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {[
              { icon: Target, label: "1 Bot", sub: "3 Rounds", color: "#00a8ff", glow: "rgba(0,168,255,0.3)" },
              { icon: Zap, label: "Free", sub: "Participation", color: "#fac800", glow: "rgba(250,200,0,0.3)" },
              { icon: Trophy, label: "Mega", sub: "Prizes", color: "#ff3333", glow: "rgba(255,50,50,0.3)" },
              { icon: Star, label: "Media", sub: "Coverage", color: "#a855f7", glow: "rgba(168,85,247,0.3)" },
              { icon: Flame, label: "1st Ever", sub: "In Kolkata", color: "#ff6600", glow: "rgba(255,102,0,0.3)" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.06, y: -4 }}
                className="flex flex-col items-center gap-3 p-5 rounded-md border bg-card text-center cursor-default transition-all duration-300"
                style={{ borderColor: `${item.color}25` }}
              >
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}40`,
                    boxShadow: `0 0 16px ${item.glow}`
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </motion.div>
                <div>
                  <div className="font-display font-black text-xl text-white uppercase tracking-wide" style={{ color: item.color }}>
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ELIGIBILITY
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#00a8ff]" />
              <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-[#00a8ff]">Who Can Compete</span>
              <div className="h-px w-12 bg-[#00a8ff]" />
            </div>
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-white tracking-tight">
              Enter the Arena
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Grade 6 & Above", desc: "Open to all middle and high school students passionate about robotics.", color: "#00a8ff" },
              { icon: ShieldAlert, title: "Team of 3", desc: "2 Student Participants + 1 Official School Mentor. Multiple teams per school welcome.", color: "#fac800" },
              { icon: Target, title: "Free Entry", desc: "Zero participation fee. Every team gets a fair shot at glory — no barriers.", color: "#ff3333" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative p-8 rounded-md border bg-card overflow-hidden group hover:scale-[1.02] transition-all duration-300"
                style={{ borderColor: `${item.color}30` }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: item.color }} />
                <div className="w-14 h-14 rounded-md flex items-center justify-center mb-5"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ROUND 1 — BLOCK PUSH
      ══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 overflow-hidden">
        {/* Cinematic header image */}
        <div className="relative">
          <img src={blockPushImg} alt="Block Push Challenge" className="w-full object-cover object-center" style={{ maxHeight: "580px" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-lg">
                <motion.div variants={fadeUp} className="mb-3">
                  <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-[#00a8ff] text-[#030912] px-3 py-1.5 rounded-sm">Round 1</span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-display font-black uppercase leading-none mb-2">
                  <span className="block text-5xl md:text-7xl text-white">BLOCK</span>
                  <span className="block text-5xl md:text-7xl" style={{ color: "#00a8ff", textShadow: "0 0 30px rgba(0,168,255,0.5)" }}>PUSH</span>
                  <span className="block text-3xl md:text-4xl text-yellow-400 font-bold tracking-wider">CHALLENGE</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/55 font-display text-lg mb-1">Push the Blocks. Score the Points.</motion.p>
                <motion.p variants={fadeUp} className="flex items-center gap-2 text-white/40 font-display text-sm">
                  <Clock className="w-4 h-4 text-[#00a8ff]" /> 120 seconds match duration
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Arena overview + scoring */}
        <div className="bg-card border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Arena overview image */}
              <div className="rounded-md overflow-hidden border border-[#00a8ff]/20 relative">
                <img src={pushBlockArenaImg} alt="Push Block Arena" className="w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="font-display font-bold text-white/60 text-xs tracking-widest uppercase">Arena Overview — Round 1</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-black text-lg uppercase text-white/60 tracking-widest mb-4">Scoring Table</h3>
                  <div className="rounded-md overflow-hidden border border-white/10">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#00a8ff]/15 border-b border-white/10">
                          <th className="text-left p-3 font-display font-bold uppercase tracking-wider text-[#00a8ff] text-xs">Block Weight</th>
                          <th className="text-center p-3 font-display font-bold uppercase tracking-wider text-[#00a8ff] text-xs">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pushScoring.map((row, i) => (
                          <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                            <td className="p-3 font-display font-bold text-white">{row.weight}</td>
                            <td className="p-3 text-center">
                              <span className="font-display font-black text-xl" style={{ color: "#00a8ff" }}>{row.pts}</span>
                              <span className="text-white/40 text-xs ml-1 font-display">pts</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    "Push wooden blocks completely out of the arena to score",
                    "Heavier blocks carry higher point values",
                    "Score as many points as possible within 120 seconds",
                    "Highest cumulative score wins the round",
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-sm bg-[#00a8ff]/20 border border-[#00a8ff]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#00a8ff]" />
                      </div>
                      <p className="text-white/65 text-sm leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ROUND 2 — BLOCK PULL
      ══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 overflow-hidden">
        <div className="relative">
          <img src={blockPullImg} alt="Block Pull Challenge" className="w-full object-cover object-center" style={{ maxHeight: "580px" }} />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="max-w-6xl mx-auto px-6 w-full flex justify-end">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-lg text-right">
                <motion.div variants={fadeUp} className="mb-3 flex justify-end">
                  <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-red-500 text-white px-3 py-1.5 rounded-sm">Round 2</span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-display font-black uppercase leading-none mb-2">
                  <span className="block text-5xl md:text-7xl text-white">BLOCK</span>
                  <span className="block text-5xl md:text-7xl text-red-500" style={{ textShadow: "0 0 30px rgba(255,60,60,0.5)" }}>PULL</span>
                  <span className="block text-3xl md:text-4xl text-yellow-400 font-bold tracking-wider">CHALLENGE</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/55 font-display text-lg mb-1">Pull with Strength. Score with Strategy.</motion.p>
                <motion.p variants={fadeUp} className="flex items-center justify-end gap-2 text-white/40 font-display text-sm">
                  <Clock className="w-4 h-4 text-red-400" /> 120 seconds match duration
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bg-card border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-black text-lg uppercase text-white/60 tracking-widest mb-4">Scoring Table</h3>
                  <div className="rounded-md overflow-hidden border border-white/10">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-red-500/15 border-b border-white/10">
                          <th className="text-left p-3 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Block Weight</th>
                          <th className="text-center p-3 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pushScoring.map((row, i) => (
                          <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                            <td className="p-3 font-display font-bold text-white">{row.weight}</td>
                            <td className="p-3 text-center">
                              <span className="font-display font-black text-xl text-red-400">{row.pts}</span>
                              <span className="text-white/40 text-xs ml-1 font-display">pts</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    "Pull wooden blocks from start zone into the target zone",
                    "Blocks tied with ropes that have hooks at one end",
                    "Robot MUST have a front-center hook hole (10mm diameter)",
                    "Hooks are manually placed by participants at start of each attempt",
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-sm bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-red-400" />
                      </div>
                      <p className="text-white/65 text-sm leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pull arena overview */}
              <div className="rounded-md overflow-hidden border border-red-500/20 relative">
                <img src={arenaOverviewImg} alt="Pull Challenge Arena" className="w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="font-display font-bold text-white/60 text-xs tracking-widest uppercase">Arena Overview — Round 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ROUND 3 — ROBOT WAR
      ══════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 overflow-hidden">
        <div className="relative">
          <img src={robotWarImg} alt="Robot War" className="w-full object-cover object-center" style={{ maxHeight: "620px" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center px-6">
              <motion.div variants={fadeUp} className="mb-4">
                <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-yellow-400 text-black px-3 py-1.5 rounded-sm">Round 3</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display font-black uppercase leading-none">
                <span className="block text-6xl md:text-8xl text-white">ROBOT</span>
                <span className="block text-7xl md:text-9xl" style={{ color: "#ff3333", textShadow: "0 0 40px rgba(255,50,50,0.7), 0 0 80px rgba(255,50,50,0.3)" }}>WAR</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-display font-bold text-2xl text-white/75 mt-2">
                Push. Outlast. <span className="text-yellow-400">WIN!</span>
              </motion.p>
              <motion.p variants={fadeUp} className="flex items-center justify-center gap-2 text-white/40 font-display text-sm mt-2">
                <Clock className="w-4 h-4 text-yellow-400" /> 60 seconds match duration
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="bg-card border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-black text-lg uppercase text-white/60 tracking-widest mb-4">Speed Bonus Scoring</h3>
                  <p className="text-muted-foreground text-sm mb-4">Push opponent's robot out of the arena. Win faster — score higher.</p>
                  <div className="rounded-md overflow-hidden border border-white/10">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-red-500/15 border-b border-white/10">
                          <th className="text-left p-3 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Win Time</th>
                          <th className="text-center p-3 font-display font-bold uppercase tracking-wider text-red-400 text-xs">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {warScoring.map((row, i) => (
                          <tr key={i} className={`border-b border-white/5 ${row.top ? "bg-yellow-400/10" : i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                            <td className="p-3 font-display font-bold text-white">{row.time}</td>
                            <td className="p-3 text-center">
                              <span className={`font-display font-black text-xl ${row.top ? "text-yellow-400" : "text-red-400"}`}>{row.pts}</span>
                              {typeof row.pts === "number" && <span className="text-white/40 text-xs ml-1 font-display">pts</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    "Push the opponent's robot completely out of the arena to win",
                    "Match duration is 60 seconds — fight until the final bell",
                    "Faster victories earn higher points (remaining time = score)",
                    "If neither robot exits in 60s, it's a tie — 30 points each",
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-sm bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Swords className="w-3 h-3 text-red-400" />
                      </div>
                      <p className="text-white/65 text-sm leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Robo war arena overview */}
              <div className="rounded-md overflow-hidden border border-red-500/20 relative">
                <img src={roboWarArenaImg} alt="Robo War Arena" className="w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="font-display font-bold text-white/60 text-xs tracking-widest uppercase">Arena Overview — Round 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          AWARDS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-yellow-400" />
                <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-yellow-400">Glory Awaits</span>
                <div className="h-px w-12 bg-yellow-400" />
              </div>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-white tracking-tight">Awards Structure</h2>
            </motion.div>

            {/* 3 round champions */}
            <div className="grid md:grid-cols-3 gap-5 mb-6">
              {[
                { num: "01", title: "Champion", sub: "Block Push", round: "Round 1", icon: Target, color: "#00a8ff" },
                { num: "02", title: "Champion", sub: "Block Pull", round: "Round 2", icon: Swords, color: "#ff3333" },
                { num: "03", title: "Champion", sub: "Robot War", round: "Round 3", icon: Award, color: "#ff6600" },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative p-7 rounded-md border bg-card overflow-hidden group hover:scale-[1.03] transition-all duration-300 text-center"
                  style={{ borderColor: `${a.color}30` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: a.color }} />
                  <div className="font-display font-black text-5xl mb-2" style={{ color: `${a.color}25` }}>{a.num}</div>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border"
                    style={{ background: `${a.color}15`, borderColor: `${a.color}40` }}>
                    <a.icon className="w-7 h-7" style={{ color: a.color }} />
                  </div>
                  <p className="font-display font-bold text-xs uppercase tracking-widest mb-1" style={{ color: a.color }}>{a.round}</p>
                  <h3 className="font-display font-black text-2xl uppercase tracking-wide text-white mb-1">{a.title}</h3>
                  <p className="font-display font-bold text-lg tracking-wider" style={{ color: a.color }}>{a.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* MEGA CHAMPION — full-width, standalone */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-md overflow-hidden border border-yellow-400/50 p-10 text-center group hover:scale-[1.01] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(250,200,0,0.08) 0%, rgba(255,102,0,0.08) 50%, rgba(250,200,0,0.05) 100%)",
                boxShadow: "0 0 60px rgba(250,200,0,0.1), inset 0 0 60px rgba(250,200,0,0.03)"
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-400/60" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-yellow-400/60" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-yellow-400/60" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-400/60" />

              {/* Top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600" />

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="w-24 h-24 rounded-full flex items-center justify-center border-2 border-yellow-400/50"
                  style={{ background: "rgba(250,200,0,0.12)", boxShadow: "0 0 30px rgba(250,200,0,0.3), 0 0 60px rgba(250,200,0,0.1)" }}
                >
                  <Crown className="w-12 h-12 text-yellow-400" />
                </motion.div>

                <div className="text-center md:text-left">
                  <p className="font-display font-bold text-sm uppercase tracking-[0.25em] text-yellow-400/70 mb-1">
                    The Ultimate Title
                  </p>
                  <h3 className="font-display font-black text-4xl md:text-5xl uppercase text-yellow-400 tracking-tight leading-none mb-2"
                    style={{ textShadow: "0 0 30px rgba(250,200,0,0.4)" }}>
                    BHARAT ROBOTICS LEAGUE<br />GRAND CHAMPION
                  </h3>
                  <p className="text-white/50 font-display text-sm mt-3 max-w-md">
                    Awarded to the team with the <strong className="text-white">highest cumulative score</strong> across all three rounds — the ultimate test of building, pulling, and fighting.
                  </p>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  {["Block Push", "Block Pull", "Robot War"].map((r, i) => (
                    <div key={i} className="flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 rounded-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                      <span className="font-display font-bold text-xs uppercase tracking-wider text-yellow-300">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ROBOT SPECIFICATIONS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#00a8ff]" />
                <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-[#00a8ff]">Tech Specs</span>
                <div className="h-px w-12 bg-[#00a8ff]" />
              </div>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-white tracking-tight">Robot Specifications</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {[
                { label: "Max Weight", value: "3.5", unit: "kg" },
                { label: "Length", value: "30", unit: "cm max" },
                { label: "Width", value: "25", unit: "cm max" },
                { label: "Height", value: "25", unit: "cm max" },
                { label: "Hook Hole Dia.", value: "10", unit: "mm" },
                { label: "Max Power", value: "12", unit: "Volts" },
              ].map((spec, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="flex items-center gap-4 p-5 rounded-md border border-white/10 bg-card hover:border-[#00a8ff]/30 transition-colors">
                  <div className="w-2 h-10 rounded-full bg-[#00a8ff]/60 shrink-0" />
                  <div>
                    <p className="font-display text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">{spec.label}</p>
                    <p className="font-display font-black text-2xl text-white">
                      {spec.value} <span className="text-sm text-[#00a8ff] font-bold">{spec.unit}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-5">
              <div className="flex items-start gap-4 p-6 rounded-md border border-[#00a8ff]/30 bg-[#00a8ff]/5">
                <CheckCircle2 className="w-6 h-6 text-[#00a8ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-black text-lg uppercase tracking-wide text-white mb-1">Hook Hole Required</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Every robot must have a <strong className="text-white">10mm diameter hook hole</strong> at the center of its front or back chassis for Round 2.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-md border border-red-500/30 bg-red-500/5">
                <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-black text-lg uppercase tracking-wide text-white mb-1">Same Robot for All 3 Rounds</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">You <strong className="text-white">cannot swap parts or change robots</strong> between rounds. One machine must conquer all three.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GENERAL RULES
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-red-400" />
                <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-red-400">Official Rulebook</span>
                <div className="h-px w-12 bg-red-400" />
              </div>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-white tracking-tight">General Rules</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-md border border-white/10 bg-card overflow-hidden">
              {[
                "Participants must design, build, and assemble their robots themselves. Ready-made commercial robots are not allowed.",
                "All robots must remain within the specified dimension and weight limits throughout the entire competition.",
                "The use of fire, flames, explosives, smoke-generating devices, corrosive substances, or any dangerous materials is strictly prohibited.",
                "Sharp weapons, blades, spikes, projectiles, firearms, or any component that may cause injury are not allowed.",
                "Teams must fully prepare, assemble, programme, and test their robots before entering the competition arena.",
                "No major repairs, assembly work, or modifications will be permitted inside the competition arena unless approved by organizers.",
                "Teams must report to the venue before their scheduled event time. Late arrivals may result in disqualification.",
                "Participants must maintain sportsmanship and fair play throughout the competition.",
                "Any form of cheating, intentional interference, or unsportsmanlike conduct will result in penalties or disqualification.",
                "Participants are responsible for the safety and proper operation of their robots.",
                "Robots must not intentionally damage the competition arena, track, equipment, or surrounding infrastructure.",
                "Judges and event officials reserve the right to inspect any robot before or during the competition.",
                "In case of disputes, the decision of the judges and organizers shall be final and binding.",
                "Organizers reserve the right to modify or update rules if required to ensure safety, fairness, and smooth conduct.",
              ].map((rule, i) => (
                <div key={i} className={`flex items-start gap-4 p-5 ${i !== 13 ? "border-b border-white/5" : ""} hover:bg-white/[0.03] transition-colors`}>
                  <span className="font-display font-black text-2xl text-[#00a8ff]/25 w-8 shrink-0 leading-none mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/65 leading-relaxed text-sm pt-0.5">{rule}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          REGISTRATION CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(rgba(255,80,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,255,0.8) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,80,0,0.06),transparent)]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-3">
              <span className="font-display text-sm font-bold tracking-[0.25em] uppercase text-red-400">Ready to Compete?</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-black text-5xl md:text-7xl uppercase text-white tracking-tight mb-6 leading-none">
              Register<br />
              <span style={{ background: "linear-gradient(135deg, #ff3333, #ff6600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 20px rgba(255,80,0,0.4))" }}>
                Your School
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Kolkata's first robotics championship. Claim your spot before slots fill up.
            </motion.p>
            <motion.div variants={fadeUp}>
              <button
                data-testid="button-register-cta"
                onClick={() => window.open(FORM_LINK, "_blank")}
                className="font-display font-black text-xl tracking-[0.12em] uppercase px-14 py-6 rounded-sm text-black transition-all duration-300 hover:scale-105 mx-auto block"
                style={{
                  background: "linear-gradient(135deg, #ff3333 0%, #ff6600 100%)",
                  boxShadow: "0 0 40px rgba(255,80,0,0.4), 0 0 80px rgba(255,80,0,0.15)"
                }}
              >
                Fill the Registration Form
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="font-display font-black text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">FunScholar presents</div>
              <h3 className="font-display font-black text-2xl uppercase text-white leading-tight mb-1">Bharat Robotics League</h3>
              <p className="font-display font-bold text-sm text-[#00a8ff] tracking-widest uppercase mb-3">Season 1 · Dangal · 2026</p>
              <p className="text-muted-foreground text-sm">Build. Battle. Conquer.</p>
            </div>
            <div>
              <h4 className="font-display font-black text-sm uppercase tracking-widest text-muted-foreground mb-4">Event Details</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/65 text-sm"><Calendar className="w-4 h-4 text-[#00a8ff] shrink-0" /><span>30 September 2026</span></div>
                <div className="flex items-center gap-3 text-white/65 text-sm"><Clock className="w-4 h-4 text-[#00a8ff] shrink-0" /><span>9:00 AM – 5:00 PM</span></div>
                <div className="flex items-start gap-3 text-white/65 text-sm"><MapPin className="w-4 h-4 text-[#00a8ff] shrink-0 mt-0.5" /><span>Exhibition Hall, Indian Museum, Kolkata</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-display font-black text-sm uppercase tracking-widest text-muted-foreground mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/65 text-sm"><Users className="w-4 h-4 text-[#00a8ff] shrink-0" /><span>Risheb Bhartia</span></div>
                <a href="tel:+919051555593" className="flex items-center gap-3 text-white/65 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-[#00a8ff] shrink-0" /><span>+91 90515 55593</span>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp-footer"
                  className="flex items-center gap-3 text-[#25D366] hover:text-[#4ddc8a] text-sm transition-colors">
                  <MessageCircle className="w-4 h-4 shrink-0" /><span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs tracking-wider">© 2026 FunScholar Innovations Pvt. Ltd. All rights reserved.</p>
            <button onClick={() => window.open(FORM_LINK, "_blank")} data-testid="button-register-footer"
              className="font-display font-bold text-xs tracking-[0.15em] uppercase px-6 py-2.5 rounded-sm text-black transition-all"
              style={{ background: "linear-gradient(135deg, #ff3333, #ff6600)" }}>
              Register Your School
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
