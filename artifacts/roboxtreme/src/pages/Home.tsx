import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Trophy, MapPin, Calendar, ChevronRight,
  MessageCircle, Clock, Crown, Flame, Users,
  CheckCircle2, Star, Swords, Target, Zap
} from "lucide-react";
import blockPushImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.00_1780570206668.jpeg";
import blockPullImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.01_1780570206668.jpeg";
import robotWarImg from "@assets/WhatsApp_Image_2026-06-04_at_16.17.01_(1)_1780570206668.jpeg";
import roboWarArenaImg from "@assets/WhatsApp_Image_2026-06-04_at_16.59.04_1780572747087.jpeg";
import Nav from "@/components/Nav";

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeeYRHPQggzAivKO6JZP5LWwMK8oC5EjMhGyhDnXY4w6ohwvQ/viewform?usp=preview";
const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const rounds = [
  {
    num: "01",
    label: "Round 1",
    title: "Block Push",
    subtitle: "Challenge",
    objective: "Push wooden blocks out of the arena to score points. Heavier blocks carry higher point values.",
    duration: "120 seconds",
    color: "#00a8ff",
    borderColor: "rgba(0,168,255,0.3)",
    bg: "rgba(0,168,255,0.06)",
    img: blockPushImg,
    href: "/round-push",
    icon: Target,
  },
  {
    num: "02",
    label: "Round 2",
    title: "Block Pull",
    subtitle: "Challenge",
    objective: "Pull wooden blocks from the start zone into the target zone using your robot's hook mechanism.",
    duration: "120 seconds",
    color: "#ff3333",
    borderColor: "rgba(255,50,50,0.3)",
    bg: "rgba(255,50,50,0.06)",
    img: blockPullImg,
    href: "/round-pull",
    icon: Zap,
  },
  {
    num: "03",
    label: "Round 3",
    title: "Robot",
    subtitle: "War",
    objective: "Push the opponent's robot completely out of the circular arena within 60 seconds. Faster wins earn more points.",
    duration: "60 seconds",
    color: "#fac800",
    borderColor: "rgba(250,200,0,0.3)",
    bg: "rgba(250,200,0,0.05)",
    img: robotWarImg,
    href: "/round-war",
    icon: Swords,
  },
];

const awards = [
  {
    tier: "Round Champion",
    title: "Block Push Champion",
    criteria: "Highest score in Round 1",
    color: "#00a8ff",
    icon: Target,
  },
  {
    tier: "Round Champion",
    title: "Block Pull Champion",
    criteria: "Highest score in Round 2",
    color: "#ff3333",
    icon: Zap,
  },
  {
    tier: "Round Champion",
    title: "Robot War Champion",
    criteria: "Highest score in Round 3",
    color: "#fac800",
    icon: Swords,
  },
  {
    tier: "The Ultimate Title",
    title: "Bharat Robotics League Grand Champion",
    criteria: "Highest cumulative score across all 3 rounds",
    color: "#fac800",
    icon: Crown,
    grand: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      {/* Floating WhatsApp */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
        data-testid="button-whatsapp-float"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ boxShadow: "0 0 20px rgba(37,211,102,0.4)" }}
        title="Chat on WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* ═══════════════════════════════ HERO — POSTER STYLE ═══════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-4">

        {/* ── Background ── */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 90% 70% at 50% 20%, #0d1525 0%, #05080e 60%, #020408 100%)" }} />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "linear-gradient(rgba(255,153,51,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,153,51,0.4) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
          {/* Corner glow — saffron top-left, green top-right */}
          <div className="absolute top-0 left-0 w-72 h-72 opacity-20"
            style={{ background: "radial-gradient(circle, #FF9933 0%, transparent 70%)" }} />
          <div className="absolute top-0 right-0 w-72 h-72 opacity-15"
            style={{ background: "radial-gradient(circle, #138808 0%, transparent 70%)" }} />
          {/* Bottom vignette */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <motion.div
          initial="hidden" animate="show" variants={stagger}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto px-4"
        >

          {/* ── FunScholar Logo ── */}
          <motion.div variants={fadeUp} className="flex flex-col items-center mb-5">
            {/* Badge icon */}
            <div className="w-12 h-12 rounded-xl mb-2 flex items-center justify-center border-2 border-[#FF9933]/60"
              style={{ background: "linear-gradient(135deg,#FF9933,#e67300)", boxShadow: "0 0 20px rgba(255,153,51,0.5)" }}>
              {/* Robot arm icon using SVG */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/>
              </svg>
            </div>
            <span className="font-display font-black text-base tracking-[0.08em] lowercase"
              style={{ color: "#FF9933", textShadow: "0 0 16px rgba(255,153,51,0.5)" }}>funscholar</span>
            <span className="font-display font-bold text-xs tracking-[0.35em] uppercase text-white/50 mt-0.5">PRESENTS</span>
          </motion.div>

          {/* ── Main Title — Indian Flag Colors ── */}
          <motion.div variants={fadeUp} className="w-full mb-1">
            <h1 className="font-display font-black uppercase leading-[0.88] tracking-tighter w-full">

              {/* BHARAT — Saffron/Orange */}
              <div className="flex items-center justify-center gap-2 mb-0.5">
                {/* Left wings */}
                <span className="flex items-center gap-0.5 opacity-80">
                  <span className="block w-6 h-0.5 bg-[#FF9933]" />
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#FF9933]" />
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#FF9933]" />
                </span>
                <span
                  className="text-[clamp(3rem,11vw,5.5rem)]"
                  style={{
                    background: "linear-gradient(180deg,#FFD700 0%,#FF9933 40%,#e65c00 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    filter: "drop-shadow(0 2px 12px rgba(255,153,51,0.6))",
                    textShadow: "none"
                  }}
                >BHARAT</span>
                {/* Right wings */}
                <span className="flex items-center gap-0.5 opacity-80">
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] border-r-[#FF9933]" />
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] border-r-[#FF9933]" />
                  <span className="block w-6 h-0.5 bg-[#FF9933]" />
                </span>
              </div>

              {/* ROBOTICS — White/Silver with Ashoka Chakra O */}
              <div className="flex items-center justify-center gap-2 mb-0.5">
                <span className="flex items-center gap-0.5 opacity-70">
                  <span className="block w-6 h-0.5 bg-white/60" />
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white/60" />
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white/60" />
                </span>
                <span className="flex items-center text-[clamp(2.6rem,9.5vw,4.8rem)]">
                  <span style={{
                    background: "linear-gradient(180deg,#ffffff 0%,#cccccc 50%,#999 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    filter: "drop-shadow(0 2px 10px rgba(255,255,255,0.25))"
                  }}>ROB</span>
                  {/* Ashoka Chakra replacing "O" */}
                  <span className="relative inline-flex items-center justify-center mx-0.5">
                    <svg
                      viewBox="0 0 40 40"
                      className="inline-block"
                      style={{ width: "clamp(2.2rem,8vw,4rem)", height: "clamp(2.2rem,8vw,4rem)" }}
                    >
                      {/* Outer ring */}
                      <circle cx="20" cy="20" r="18" fill="none" stroke="#1a3fa0" strokeWidth="2.5"/>
                      {/* Inner filled circle (hub) */}
                      <circle cx="20" cy="20" r="4" fill="#1a3fa0"/>
                      {/* 24 spokes */}
                      {Array.from({length: 24}).map((_, i) => {
                        const angle = (i * 360) / 24;
                        const rad = (angle * Math.PI) / 180;
                        const x1 = 20 + 4.5 * Math.cos(rad);
                        const y1 = 20 + 4.5 * Math.sin(rad);
                        const x2 = 20 + 15.5 * Math.cos(rad);
                        const y2 = 20 + 15.5 * Math.sin(rad);
                        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a3fa0" strokeWidth="1.2"/>;
                      })}
                    </svg>
                  </span>
                  <span style={{
                    background: "linear-gradient(180deg,#ffffff 0%,#cccccc 50%,#999 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    filter: "drop-shadow(0 2px 10px rgba(255,255,255,0.25))"
                  }}>TICS</span>
                </span>
                <span className="flex items-center gap-0.5 opacity-70">
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] border-r-white/60" />
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] border-r-white/60" />
                  <span className="block w-6 h-0.5 bg-white/60" />
                </span>
              </div>

              {/* LEAGUE — India Green */}
              <div className="flex items-center justify-center gap-2">
                <span className="flex items-center gap-0.5 opacity-80">
                  <span className="block w-6 h-0.5 bg-[#138808]" />
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#138808]" />
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#138808]" />
                </span>
                <span
                  className="text-[clamp(3rem,11vw,5.5rem)]"
                  style={{
                    background: "linear-gradient(180deg,#22cc22 0%,#138808 40%,#0a5c0a 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    filter: "drop-shadow(0 2px 12px rgba(19,136,8,0.6))"
                  }}
                >LEAGUE</span>
                <span className="flex items-center gap-0.5 opacity-80">
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] border-r-[#138808]" />
                  <span className="block w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] border-r-[#138808]" />
                  <span className="block w-6 h-0.5 bg-[#138808]" />
                </span>
              </div>
            </h1>
          </motion.div>

          {/* ── 2026 ── */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 my-2">
            <div className="h-px flex-1 max-w-[80px]"
              style={{ background: "linear-gradient(to right, transparent, #FF9933)" }} />
            <span className="font-display font-black text-4xl md:text-5xl text-white tracking-widest"
              style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)", letterSpacing: "0.25em" }}>2026</span>
            <div className="h-px flex-1 max-w-[80px]"
              style={{ background: "linear-gradient(to left, transparent, #138808)" }} />
          </motion.div>

          {/* ── Season Theme ── */}
          <motion.div variants={fadeUp} className="mb-4">
            <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white/40 mb-1">This Season's Theme:</p>
            <p className="font-display font-black text-xl md:text-2xl tracking-wider uppercase"
              style={{ color: "#FF9933", textShadow: "0 0 20px rgba(255,153,51,0.5)", fontStyle: "italic" }}>
              Dangal of Robots
            </p>
          </motion.div>

          {/* ── Robots VS ── */}
          <motion.div variants={fadeUp} className="w-full relative mb-4">
            <div className="flex items-end justify-center gap-0 relative">
              {/* Left robot — blue tint */}
              <div className="relative w-[42%] max-w-xs overflow-hidden rounded-l-md"
                style={{ boxShadow: "-8px 0 30px rgba(30,100,255,0.3)" }}>
                <img src={blockPushImg} alt="Robot 1" className="w-full object-cover object-center"
                  style={{ height: "clamp(130px,22vw,200px)", filter: "hue-rotate(200deg) saturate(1.2) brightness(0.85)" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, rgba(30,60,255,0.15), transparent)" }} />
              </div>

              {/* VS badge */}
              <div className="relative z-10 flex flex-col items-center justify-center shrink-0 mx-1"
                style={{ width: "clamp(56px,10vw,90px)" }}>
                <div className="flex items-center justify-center rounded-sm border-2 border-white/20"
                  style={{
                    width: "clamp(50px,9vw,80px)", height: "clamp(50px,9vw,80px)",
                    background: "linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)",
                    boxShadow: "0 0 20px rgba(255,255,255,0.15), inset 0 0 20px rgba(0,0,0,0.5)"
                  }}>
                  <span className="font-display font-black text-white"
                    style={{ fontSize: "clamp(1.1rem,3.5vw,2rem)", textShadow: "0 0 10px rgba(255,255,255,0.5)" }}>
                    VS
                  </span>
                </div>
              </div>

              {/* Right robot — orange/red tint */}
              <div className="relative w-[42%] max-w-xs overflow-hidden rounded-r-md"
                style={{ boxShadow: "8px 0 30px rgba(255,80,0,0.3)" }}>
                <img src={robotWarImg} alt="Robot 2" className="w-full object-cover object-center"
                  style={{ height: "clamp(130px,22vw,200px)", filter: "hue-rotate(340deg) saturate(1.3) brightness(0.85)" }} />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to left, rgba(255,60,0,0.18), transparent)" }} />
              </div>
            </div>
          </motion.div>

          {/* ── Info Boxes ── */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mb-5">
            {[
              {
                icon: <Calendar className="w-5 h-5" />,
                label: "DATE",
                value: "30th September\n2026"
              },
              {
                icon: <Clock className="w-5 h-5" />,
                label: "TIME",
                value: "9:00 A.M. to\n5:00 P.M."
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                label: "VENUE",
                value: "Exhibition Hall,\nIndian Museum, Kolkata"
              },
              {
                icon: <Trophy className="w-5 h-5" />,
                label: "EVENTS",
                value: "Robo Push\nRobo Pull\nRobo War"
              },
            ].map((box, i) => (
              <div key={i}
                className="flex flex-col items-center gap-1.5 px-3 py-3 rounded-sm border"
                style={{
                  borderColor: "rgba(0,168,255,0.4)",
                  background: "rgba(0,50,100,0.18)",
                  boxShadow: "0 0 12px rgba(0,168,255,0.08)"
                }}>
                <span style={{ color: "#00a8ff" }}>{box.icon}</span>
                <span className="font-display font-black text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "#00a8ff" }}>{box.label}</span>
                <span className="font-display font-semibold text-white text-center leading-snug whitespace-pre-line"
                  style={{ fontSize: "clamp(0.62rem,1.2vw,0.78rem)" }}>{box.value}</span>
              </div>
            ))}
          </motion.div>

          {/* ── Tagline ── */}
          <motion.div variants={fadeUp} className="mb-5">
            <p className="font-display font-black text-lg md:text-xl tracking-[0.25em] uppercase text-white"
              style={{ textShadow: "0 0 20px rgba(255,255,255,0.2)" }}>
              BUILD. BATTLE. CONQUER.
            </p>
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <button
              data-testid="button-register-hero"
              onClick={() => window.open(FORM_LINK, "_blank")}
              className="flex items-center gap-2 px-8 py-4 font-display font-black text-sm uppercase tracking-[0.15em] text-black rounded-sm transition-all hover:scale-105 hover:brightness-110"
              style={{ background: "linear-gradient(135deg,#ff3333,#ff6600)", boxShadow: "0 0 30px rgba(255,80,0,0.4)" }}>
              Register Your School <ChevronRight className="w-4 h-4" />
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 font-display font-black text-sm uppercase tracking-[0.15em] text-[#25D366] rounded-sm border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </motion.div>

        </motion.div>
      </section>

      {/* ═══════════════════════════════ HIGHLIGHTS STRIP ═══════════════════════════════ */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              { icon: Star, text: "1 Bot · 3 Rounds" },
              { icon: CheckCircle2, text: "Free Participation" },
              { icon: Users, text: "2 Participants + 1 Mentor" },
              { icon: Trophy, text: "Prize per Round + Mega Prize" },
              { icon: Flame, text: "Media Coverage" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/55 font-display font-semibold text-sm uppercase tracking-wide">
                <item.icon className="w-3.5 h-3.5 text-[#00a8ff]" /> {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ ELIGIBILITY ═══════════════════════════════ */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
            <div className="h-px w-10 bg-[#00a8ff]" />
            <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-[#00a8ff]">Who Can Participate</span>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Grade 6+", desc: "Open to students from Grade 6 and above" },
              { title: "2 + 1", desc: "2 student participants and 1 mentor per team" },
              { title: "Multiple Teams", desc: "Schools may register more than one team" },
              { title: "Free to Join", desc: "Zero entry fee — free participation for all" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                className="p-5 rounded-md border border-white/10 bg-card hover:border-[#00a8ff]/30 transition-colors">
                <h3 className="font-display font-black text-2xl text-[#00a8ff] mb-1">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════ THREE ROUNDS ═══════════════════════════════ */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-red-400" />
              <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-red-400">The Competition</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-black text-4xl md:text-5xl uppercase text-white tracking-tight mb-12">
              Three Rounds.<br /><span className="text-white/35">One Champion.</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {rounds.map((round, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="group rounded-md overflow-hidden border transition-all duration-300 hover:scale-[1.02]"
                  style={{ borderColor: round.borderColor, background: round.bg }}>
                  {/* Thumbnail image */}
                  <div className="relative overflow-hidden h-48">
                    <img src={round.img} alt={round.title} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="font-display font-black text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm text-black"
                        style={{ background: round.color }}>
                        {round.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <round.icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: round.color }} />
                      <div>
                        <h3 className="font-display font-black text-xl uppercase text-white leading-none">
                          {round.title}
                        </h3>
                        <p className="font-display font-bold text-base uppercase tracking-wider" style={{ color: round.color }}>
                          {round.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed mb-3">{round.objective}</p>

                    <div className="flex items-center gap-2 text-white/35 text-xs font-display font-semibold uppercase tracking-wide mb-5">
                      <Clock className="w-3 h-3" style={{ color: round.color }} /> {round.duration}
                    </div>

                    <Link href={round.href}
                      className="flex items-center justify-center gap-2 w-full py-3 font-display font-black text-xs uppercase tracking-[0.15em] rounded-sm border transition-all hover:brightness-125"
                      style={{ borderColor: round.borderColor, color: round.color, background: `${round.color}15` }}>
                      Know More <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ REGISTRATION CTA BAND ═══════════════════════════════ */}
      <section className="py-14 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="rounded-md border border-white/10 overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, rgba(255,50,50,0.08) 0%, rgba(0,168,255,0.05) 100%)" }}>
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,80,0,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-10">
              <div>
                <motion.p variants={fadeUp} className="font-display text-xs font-bold tracking-[0.25em] uppercase text-red-400 mb-2">Join the League</motion.p>
                <motion.h3 variants={fadeUp} className="font-display font-black text-3xl md:text-4xl uppercase text-white leading-none">
                  Pre-Registration<br /><span className="text-white/40">is Open Now</span>
                </motion.h3>
                <motion.div variants={fadeUp} className="flex items-center gap-2 mt-3 text-sm font-display text-white/40">
                  <Calendar className="w-4 h-4 text-red-400" />
                  Last Date: <strong className="text-white">10 September 2026</strong>
                </motion.div>
              </div>
              <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 shrink-0">
                <button
                  onClick={() => window.open(FORM_LINK, "_blank")}
                  data-testid="button-register-mid"
                  className="px-10 py-4 font-display font-black text-sm uppercase tracking-[0.15em] text-black rounded-sm transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#ff3333,#ff6600)", boxShadow: "0 0 30px rgba(255,80,0,0.35)" }}>
                  Register Now
                </button>
                <Link href="/registration"
                  className="text-xs font-display font-semibold text-white/35 hover:text-white transition-colors uppercase tracking-wider">
                  View full registration details →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ AWARDS ═══════════════════════════════ */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-yellow-400" />
              <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-yellow-400">Honours</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-black text-4xl md:text-5xl uppercase text-white tracking-tight mb-12">
              Awards Structure
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {awards.map((award, i) => (
                <motion.div key={i} variants={fadeUp}
                  className={`relative rounded-md border p-6 text-center overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${award.grand ? "md:col-span-2 lg:col-span-4" : ""}`}
                  style={{
                    borderColor: `${award.color}35`,
                    background: award.grand
                      ? "linear-gradient(135deg, rgba(250,200,0,0.10) 0%, rgba(250,200,0,0.04) 100%)"
                      : `${award.color}0a`,
                    boxShadow: award.grand ? `0 0 40px ${award.color}15` : "none"
                  }}>
                  {award.grand && (
                    <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(to right, transparent, ${award.color}, transparent)` }} />
                  )}
                  <div className={`flex items-center justify-center mb-4 ${award.grand ? "flex-row gap-3" : "flex-col gap-2"}`}>
                    <div className={`flex items-center justify-center rounded-full ${award.grand ? "w-14 h-14" : "w-10 h-10"}`}
                      style={{ background: `${award.color}20` }}>
                      {award.grand
                        ? <Crown className="w-7 h-7" style={{ color: award.color, filter: `drop-shadow(0 0 8px ${award.color})` }} />
                        : <award.icon className="w-5 h-5" style={{ color: award.color }} />
                      }
                    </div>
                    {award.grand && (
                      <div className="text-left">
                        <p className="font-display font-black text-xs tracking-[0.15em] uppercase mb-0.5" style={{ color: award.color }}>
                          The Ultimate Title
                        </p>
                        <h3 className="font-display font-black text-2xl md:text-3xl uppercase text-white leading-none">
                          {award.title}
                        </h3>
                      </div>
                    )}
                  </div>
                  {!award.grand && (
                    <>
                      <p className="font-display font-bold text-xs uppercase tracking-[0.12em] mb-1" style={{ color: award.color }}>
                        {award.tier}
                      </p>
                      <h3 className="font-display font-black text-lg uppercase text-white leading-tight mb-2">{award.title}</h3>
                    </>
                  )}
                  <p className={`font-display font-semibold text-sm leading-relaxed ${award.grand ? "text-white/55 mt-2" : "text-white/45"}`}>
                    {award.criteria}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */}
      <footer className="border-t border-white/8 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
            <div>
              <p className="font-display font-black text-[10px] tracking-[0.25em] uppercase text-white/30 mb-1">FunScholar Presents</p>
              <h4 className="font-display font-black text-2xl uppercase">
                <span className="text-white">Bharat </span>
                <span style={{ color: "#00a8ff" }}>Robotics </span>
                <span style={{ color: "#fac800" }}>League</span>
              </h4>
              <p className="text-white/30 font-display text-xs tracking-widest uppercase mt-1">Season 1 · 2026 · Dangal of Robots</p>
              <p className="text-white/25 text-sm mt-3 font-display">Build. Battle. Conquer.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h5 className="font-display font-black text-xs tracking-[0.2em] uppercase text-white/30 mb-3">Pages</h5>
                <div className="space-y-2">
                  {[
                    { label: "Round 1 — Block Push", href: "/round-push" },
                    { label: "Round 2 — Block Pull", href: "/round-pull" },
                    { label: "Round 3 — Robot War", href: "/round-war" },
                    { label: "Registration", href: "/registration" },
                    { label: "Robot Specifications", href: "/robot-specs" },
                    { label: "General Rules", href: "/rules" },
                  ].map(l => (
                    <Link key={l.href} href={l.href}
                      className="block font-display text-sm text-white/45 hover:text-white transition-colors">{l.label}</Link>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-display font-black text-xs tracking-[0.2em] uppercase text-white/30 mb-3">Contact</h5>
                <p className="font-display font-semibold text-sm text-white/55 mb-1">Risheb Bhartia</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="font-display text-sm text-[#25D366] hover:underline flex items-center gap-2 mb-4">
                  <MessageCircle className="w-4 h-4" /> +91 90515 55593
                </a>
                <p className="font-display text-xs text-white/30 uppercase tracking-wide">FunScholar Innovations Pvt. Ltd.</p>
                <p className="font-display text-xs text-white/25 mt-1">Exhibition Hall, Indian Museum, Kolkata</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/20 text-xs font-display tracking-wider uppercase">
              © 2026 FunScholar Innovations Pvt. Ltd. · Bharat Robotics League
            </p>
            <button
              onClick={() => window.open(FORM_LINK, "_blank")}
              className="px-6 py-2.5 font-display font-black text-xs uppercase tracking-[0.15em] text-black rounded-sm"
              style={{ background: "linear-gradient(135deg,#ff3333,#ff6600)" }}>
              Register Now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
