import { motion } from "framer-motion";
import {
  Trophy, MapPin, Calendar, Users,
  ShieldAlert, ChevronRight, Zap,
  Target, Award, CheckCircle2, MessageCircle,
  Clock, Swords, Star, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import blockPushImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.00_1780570206668.jpeg";
import blockPullImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.01_1780570206668.jpeg";
import robotWarImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.01_(1)_1780570206668.jpeg";
import arenaOverviewImg from "@assets/WhatsApp_Image_2026-06-04_at_15.57.36_1780570231360.jpeg";

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeeYRHPQggzAivKO6JZP5LWwMK8oC5EjMhGyhDnXY4w6ohwvQ/viewform?usp=preview";
const WHATSAPP_LINK = "https://wa.me/919051555593";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const pushScoring = [
  { weight: "250g", pts: 10 },
  { weight: "500g", pts: 20 },
  { weight: "750g", pts: 30 },
  { weight: "1 kg", pts: 40 },
  { weight: "2.5 kg", pts: 50 },
];

const warScoring = [
  { time: "Win in 10s", pts: 50, highlight: true },
  { time: "Win in 20s", pts: 40, highlight: false },
  { time: "Win in 35s", pts: 25, highlight: false },
  { time: "Win in 50s", pts: 10, highlight: false },
  { time: "Tie (60s)", pts: "30 each", highlight: false },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-whatsapp-float"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="font-semibold text-sm font-display tracking-wide">Chat on WhatsApp</span>
      </a>

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Arena grid background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "linear-gradient(rgba(0,168,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,168,255,0.12),transparent)]" />
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-[#00a8ff]/30" />
          <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-[#00a8ff]/30" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-[#00a8ff]/30" />
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-[#00a8ff]/30" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
          {/* Presenter badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground font-display">
              FunScholar Innovations Pvt. Ltd. presents
            </span>
          </motion.div>

          {/* Main brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-2"
          >
            <h1 className="font-display font-black uppercase leading-none tracking-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl text-white/90 mb-1">BHARAT</span>
              <span
                className="block text-6xl sm:text-8xl md:text-[9rem] text-transparent"
                style={{
                  WebkitTextStroke: "2px #00a8ff",
                  textShadow: "0 0 60px rgba(0,168,255,0.4), 0 0 120px rgba(0,168,255,0.2)"
                }}
              >
                ROBOTICS
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl text-white/90 mt-1">LEAGUE</span>
            </h1>
          </motion.div>

          {/* Season badge row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mt-6 mb-2"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00a8ff]" />
            <span className="bg-[#00a8ff] text-[#030912] font-display font-black text-sm tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
              Season 1
            </span>
            <span className="font-display font-bold text-white/60 text-sm tracking-widest uppercase">2026</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="font-display font-black text-2xl tracking-wider uppercase text-yellow-400" style={{ textShadow: "0 0 20px rgba(250,200,0,0.5)" }}>
              DANGAL
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00a8ff]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-display text-xl md:text-2xl font-semibold tracking-[0.2em] text-white/50 uppercase mt-2 mb-10"
          >
            Build. Battle. Conquer.
          </motion.p>

          {/* Event info pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-md">
              <Calendar className="w-4 h-4 text-[#00a8ff]" />
              <span className="font-display font-semibold text-white tracking-wide">30 September 2026</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-md">
              <Clock className="w-4 h-4 text-[#00a8ff]" />
              <span className="font-display font-semibold text-white tracking-wide">9:00 AM – 5:00 PM</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-md">
              <MapPin className="w-4 h-4 text-[#00a8ff]" />
              <span className="font-display font-semibold text-white tracking-wide">Indian Museum, Kolkata</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              data-testid="button-register-hero"
              onClick={() => window.open(FORM_LINK, "_blank")}
              className="relative group overflow-hidden font-display font-black text-lg tracking-[0.15em] uppercase px-12 py-5 rounded-sm text-[#030912] bg-[#00a8ff] hover:bg-[#33bbff] transition-all duration-300"
              style={{ boxShadow: "0 0 30px rgba(0,168,255,0.4), 0 0 60px rgba(0,168,255,0.2)" }}
            >
              <span className="relative z-10 flex items-center gap-2">Register Your School <ChevronRight className="w-5 h-5" /></span>
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-whatsapp-hero"
              className="font-display font-bold text-lg tracking-[0.1em] uppercase px-10 py-5 rounded-sm border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00a8ff]/40 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════
          HIGHLIGHTS STRIP
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] diagonal-stripe">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {[
              { icon: Target, label: "1 Bot", sub: "3 Rounds" },
              { icon: Zap, label: "Free", sub: "Participation" },
              { icon: Trophy, label: "Mega", sub: "Prizes" },
              { icon: Star, label: "Media", sub: "Coverage" },
              { icon: Award, label: "1st Ever", sub: "In Kolkata" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 p-5 rounded-md border border-white/8 bg-white/[0.03] hover:border-[#00a8ff]/40 hover:bg-[#00a8ff]/5 transition-all duration-300 text-center group"
              >
                <item.icon className="w-8 h-8 text-[#00a8ff] group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-display font-black text-xl text-white tracking-wide uppercase">{item.label}</div>
                  <div className="text-xs text-muted-foreground font-semibold tracking-wider uppercase">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ELIGIBILITY
      ═══════════════════════════════════════════════════ */}
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
              {
                icon: Users,
                title: "Grade 6 & Above",
                desc: "Open to all middle and high school students with passion for building robots.",
                color: "#00a8ff"
              },
              {
                icon: ShieldAlert,
                title: "Team of 3",
                desc: "2 Student Participants + 1 Official School Mentor. Multiple teams per school welcome.",
                color: "#fac800"
              },
              {
                icon: Target,
                title: "Free Entry",
                desc: "Zero participation fee. Every team gets a fair shot at glory — no barriers.",
                color: "#ff4444"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative p-8 rounded-md border bg-card overflow-hidden group hover:scale-[1.02] transition-all duration-300"
                style={{ borderColor: `${item.color}30` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: item.color }}
                />
                <div
                  className="w-14 h-14 rounded-md flex items-center justify-center mb-5"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION DIVIDER
      ═══════════════════════════════════════════════════ */}
      <div className="relative py-10 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <div className="relative bg-background px-8 text-center">
          <div className="font-display font-black text-4xl md:text-5xl uppercase tracking-[0.1em] text-white/10">
            THE 3 ROUNDS
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          ROUND 1 — BLOCK PUSH
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Full bleed image with overlay */}
        <div className="relative">
          <img
            src={blockPushImg}
            alt="Block Push Challenge"
            className="w-full object-cover object-center"
            style={{ maxHeight: "600px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="max-w-lg"
              >
                <motion.div variants={fadeUp} className="mb-3">
                  <span className="font-display font-black text-sm tracking-[0.2em] uppercase bg-[#00a8ff] text-[#030912] px-3 py-1.5 rounded-sm">
                    Round 1
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-display font-black uppercase leading-none mb-2">
                  <span className="block text-5xl md:text-7xl text-white">BLOCK</span>
                  <span className="block text-5xl md:text-7xl" style={{ color: "#00a8ff", textShadow: "0 0 30px rgba(0,168,255,0.5)" }}>PUSH</span>
                  <span className="block text-3xl md:text-4xl text-yellow-400 font-bold tracking-wider">CHALLENGE</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/60 font-display text-lg mb-2">
                  Push the Blocks. Score the Points.
                </motion.p>
                <motion.p variants={fadeUp} className="flex items-center gap-2 text-white/50 font-display text-sm mb-4">
                  <Clock className="w-4 h-4 text-[#00a8ff]" /> 120 seconds match duration
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scoring table below */}
        <div className="bg-card border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="font-display font-black text-xl uppercase text-white/70 tracking-widest mb-4">Scoring Table</h3>
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
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl uppercase text-white/70 tracking-widest mb-4">Rules</h3>
                {[
                  "Push wooden blocks completely out of the arena to score",
                  "Heavier and larger blocks carry higher point values",
                  "Score as many points as possible within 120 seconds",
                  "Highest cumulative score wins the round",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-sm bg-[#00a8ff]/20 border border-[#00a8ff]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-[#00a8ff]" />
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ROUND 2 — BLOCK PULL
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="relative">
          <img
            src={blockPullImg}
            alt="Block Pull Challenge"
            className="w-full object-cover object-center"
            style={{ maxHeight: "600px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center justify-end">
            <div className="max-w-6xl mx-auto px-6 w-full flex justify-end">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="max-w-lg text-right"
              >
                <motion.div variants={fadeUp} className="mb-3 flex justify-end">
                  <span className="font-display font-black text-sm tracking-[0.2em] uppercase bg-red-500 text-white px-3 py-1.5 rounded-sm">
                    Round 2
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-display font-black uppercase leading-none mb-2">
                  <span className="block text-5xl md:text-7xl text-white">BLOCK</span>
                  <span className="block text-5xl md:text-7xl text-red-500" style={{ textShadow: "0 0 30px rgba(255,60,60,0.5)" }}>PULL</span>
                  <span className="block text-3xl md:text-4xl text-yellow-400 font-bold tracking-wider">CHALLENGE</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/60 font-display text-lg mb-2">
                  Pull with Strength. Score with Strategy.
                </motion.p>
                <motion.p variants={fadeUp} className="flex items-center justify-end gap-2 text-white/50 font-display text-sm mb-4">
                  <Clock className="w-4 h-4 text-red-500" /> 120 seconds match duration
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bg-card border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl uppercase text-white/70 tracking-widest mb-4">Rules</h3>
                {[
                  "Pull wooden blocks from the start zone into the target zone",
                  "Blocks are tied with ropes that have hooks at one end",
                  "Your robot MUST have a front-center hook hole (10mm diameter)",
                  "Hooks are manually placed by participants at start of each attempt",
                  "For wired robots, hook hole must be on the wire-exit side",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-sm bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-red-400" />
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-display font-black text-xl uppercase text-white/70 tracking-widest mb-4">Scoring Table</h3>
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
            </div>

            {/* Arena overview image */}
            <div className="mt-8 rounded-md overflow-hidden border border-white/10 relative">
              <img src={arenaOverviewImg} alt="Pull Challenge Arena Overview" className="w-full object-cover rounded-md" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="font-display font-bold text-white/70 text-xs tracking-widest uppercase">Arena Overview — Pull Challenge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ROUND 3 — ROBOT WAR
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="relative">
          <img
            src={robotWarImg}
            alt="Robot War"
            className="w-full object-cover object-center"
            style={{ maxHeight: "650px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center"
            >
              <motion.div variants={fadeUp} className="mb-4">
                <span className="font-display font-black text-sm tracking-[0.2em] uppercase bg-yellow-400 text-black px-3 py-1.5 rounded-sm">
                  Round 3
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display font-black uppercase leading-none">
                <span className="block text-6xl md:text-8xl text-white">ROBOT</span>
                <span
                  className="block text-7xl md:text-9xl"
                  style={{
                    color: "#ff3333",
                    textShadow: "0 0 40px rgba(255,50,50,0.7), 0 0 80px rgba(255,50,50,0.3)"
                  }}
                >
                  WAR
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-display font-bold text-2xl text-white/80 mt-2">
                Push. Outlast. <span className="text-yellow-400">WIN!</span>
              </motion.p>
              <motion.p variants={fadeUp} className="flex items-center justify-center gap-2 text-white/50 font-display text-sm mt-3">
                <Clock className="w-4 h-4 text-yellow-400" /> 60 seconds match duration
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="bg-card border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="font-display font-black text-xl uppercase text-white/70 tracking-widest mb-4">Speed Bonus Scoring</h3>
                <p className="text-muted-foreground text-sm mb-4">Push opponent's robot completely out of the arena. Win faster — score higher.</p>
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
                        <tr
                          key={i}
                          className={`border-b border-white/5 ${row.highlight ? "bg-yellow-400/10" : i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                        >
                          <td className="p-3 font-display font-bold text-white">{row.time}</td>
                          <td className="p-3 text-center">
                            <span className={`font-display font-black text-xl ${row.highlight ? "text-yellow-400" : "text-red-400"}`}>
                              {row.pts}
                            </span>
                            {typeof row.pts === "number" && (
                              <span className="text-white/40 text-xs ml-1 font-display">pts</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl uppercase text-white/70 tracking-widest mb-4">Rules</h3>
                {[
                  "Push the opponent's robot completely out of the arena to win",
                  "Match duration is 60 seconds — fight until the final bell",
                  "Faster victories earn higher points (remaining time = score)",
                  "If neither robot exits in 60s, it's a tie — 30 points each",
                  "Two robots, one arena. Only one can survive.",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-sm bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Swords className="w-3 h-3 text-red-400" />
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          AWARDS
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-yellow-400" />
                <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-yellow-400">Glory Awaits</span>
                <div className="h-px w-12 bg-yellow-400" />
              </div>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-white tracking-tight">
                Awards Structure
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "Champion", sub: "Block Push Challenge", icon: Target, desc: "Highest score in Round 1", color: "#00a8ff" },
                { title: "Champion", sub: "Block Pull Challenge", icon: Target, desc: "Highest score in Round 2", color: "#ff4444" },
                { title: "Champion", sub: "Robot War", icon: Swords, desc: "Highest score in Round 3", color: "#ff4444" },
                { title: "ROBO XTREME", sub: "CHAMPION 2026", icon: Trophy, desc: "Highest cumulative score across all 3 rounds", color: "#fac800", mega: true },
              ].map((award, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`relative p-7 rounded-md border overflow-hidden text-center group hover:scale-[1.03] transition-all duration-300 ${award.mega ? "border-yellow-400/50 bg-gradient-to-b from-yellow-400/10 to-card" : "border-white/10 bg-card"}`}
                >
                  {award.mega && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600" />
                  )}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border"
                    style={{ background: `${award.color}15`, borderColor: `${award.color}40` }}
                  >
                    <award.icon className="w-8 h-8" style={{ color: award.color }} />
                  </div>
                  <h3 className="font-display font-black text-lg uppercase tracking-wide text-white">{award.title}</h3>
                  <p className="font-display font-bold text-sm uppercase tracking-wider mb-3" style={{ color: award.color }}>{award.sub}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{award.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ROBOT SPECIFICATIONS
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#00a8ff]" />
                <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-[#00a8ff]">Tech Specs</span>
                <div className="h-px w-12 bg-[#00a8ff]" />
              </div>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-white tracking-tight">
                Robot Specifications
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {[
                { label: "Max Weight", value: "3.5 kg", unit: "" },
                { label: "Length", value: "30", unit: "cm max" },
                { label: "Width", value: "25", unit: "cm max" },
                { label: "Height", value: "25", unit: "cm max" },
                { label: "Hook Hole Dia.", value: "10", unit: "mm" },
                { label: "Max Power", value: "12", unit: "Volts" },
              ].map((spec, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-5 rounded-md border border-white/10 bg-card hover:border-[#00a8ff]/30 transition-colors"
                >
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
                  <h4 className="font-display font-black text-lg uppercase tracking-wide text-white mb-1">Same Robot for All Rounds</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">You <strong className="text-white">cannot swap parts or change robots</strong> between rounds. One robot must handle all 3 challenges.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 p-5 rounded-md border border-white/8 bg-white/[0.02]">
              <p className="text-center font-display font-semibold text-white/50 text-sm tracking-wide uppercase">
                Control: Wireless or Wired — team's choice &nbsp;|&nbsp; Wired setup: wires must be long enough for full arena movement
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          GENERAL RULES
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-red-400" />
                <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-red-400">Official Rulebook</span>
                <div className="h-px w-12 bg-red-400" />
              </div>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-white tracking-tight">
                General Rules
              </h2>
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
                <div
                  key={i}
                  className={`flex items-start gap-4 p-5 ${i !== 13 ? "border-b border-white/5" : ""} hover:bg-white/[0.03] transition-colors`}
                >
                  <span className="font-display font-black text-2xl text-[#00a8ff]/30 w-8 shrink-0 leading-none mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/70 leading-relaxed text-sm pt-0.5">{rule}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          REGISTRATION CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(rgba(0,168,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,168,255,0.08),transparent)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-3">
              <span className="font-display text-sm font-bold tracking-[0.25em] uppercase text-[#00a8ff]">Ready to Compete?</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-black text-5xl md:text-7xl uppercase text-white tracking-tight mb-6 leading-none">
              Register<br />
              <span style={{ color: "#00a8ff", textShadow: "0 0 40px rgba(0,168,255,0.4)" }}>Your School</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Kolkata's first robotics championship is here. Claim your spot before slots fill up.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                data-testid="button-register-cta"
                onClick={() => window.open(FORM_LINK, "_blank")}
                className="font-display font-black text-xl tracking-[0.12em] uppercase px-14 py-6 rounded-sm text-[#030912] bg-[#00a8ff] hover:bg-[#33bbff] transition-all duration-300"
                style={{ boxShadow: "0 0 40px rgba(0,168,255,0.4), 0 0 80px rgba(0,168,255,0.2)" }}
              >
                Fill the Registration Form
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp-cta"
                className="font-display font-bold text-xl tracking-[0.1em] uppercase px-10 py-6 rounded-sm border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" /> Ask on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER / CONTACT
      ═══════════════════════════════════════════════════ */}
      <footer className="border-t border-white/8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="font-display font-black text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                FunScholar Innovations Pvt. Ltd. presents
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-white leading-tight mb-1">
                Bharat Robotics League
              </h3>
              <p className="font-display font-bold text-sm text-[#00a8ff] tracking-widest uppercase mb-3">
                Season 1 · Dangal · 2026
              </p>
              <p className="text-muted-foreground text-sm">Build. Battle. Conquer.</p>
            </div>

            {/* Event Info */}
            <div>
              <h4 className="font-display font-black text-sm uppercase tracking-widest text-muted-foreground mb-4">Event Details</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Calendar className="w-4 h-4 text-[#00a8ff] shrink-0" />
                  <span>30 September 2026</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Clock className="w-4 h-4 text-[#00a8ff] shrink-0" />
                  <span>9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-[#00a8ff] shrink-0 mt-0.5" />
                  <span>Exhibition Hall, Indian Museum, Kolkata</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-black text-sm uppercase tracking-widest text-muted-foreground mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Users className="w-4 h-4 text-[#00a8ff] shrink-0" />
                  <span>Risheb Bhartia</span>
                </div>
                <a
                  href="tel:+919051555593"
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00a8ff] shrink-0" />
                  <span>+91 90515 55593</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-whatsapp-footer"
                  className="flex items-center gap-3 text-[#25D366] hover:text-[#4ddc8a] text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs tracking-wider">
              © 2026 FunScholar Innovations Pvt. Ltd. All rights reserved.
            </p>
            <button
              onClick={() => window.open(FORM_LINK, "_blank")}
              data-testid="button-register-footer"
              className="font-display font-bold text-xs tracking-[0.15em] uppercase px-6 py-2.5 rounded-sm border border-[#00a8ff]/40 text-[#00a8ff] hover:bg-[#00a8ff]/10 transition-all duration-300"
            >
              Register Your School
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
