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
import funscholarLogo from "@assets/Funsholar_New_Logo_Final-03_1782135255922.jpg";
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

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">

        {/* Background: arena image fills right half, strong left wipe */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <img src={roboWarArenaImg} alt="Arena"
            className="absolute right-0 top-0 h-full w-[55%] object-cover object-center" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, hsl(220,20%,4%) 0%, hsl(220,20%,4%) 40%, rgba(7,10,15,0.92) 55%, rgba(7,10,15,0.5) 68%, transparent 100%)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-2xl">

            {/* FunScholar logo — subtle, small */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-white/20" />
              <div className="flex items-center gap-2 opacity-60 hover:opacity-80 transition-opacity">
                <div className="bg-white rounded px-2 py-1 shrink-0">
                  <img
                    src={funscholarLogo}
                    alt="FunScholar"
                    className="h-4 w-auto block"
                  />
                </div>
                <span className="font-display font-bold text-[10px] tracking-[0.3em] uppercase text-white/70">
                  presents
                </span>
              </div>
            </motion.div>

            {/* BHARAT ROBOTICS LEAGUE — Indian flag colours */}
            <motion.div variants={fadeUp} className="mb-4">
              <h1 className="font-display font-black uppercase leading-[0.90] tracking-tight">

                {/* BHARAT — Saffron */}
                <span
                  className="block text-5xl sm:text-6xl md:text-7xl"
                  style={{
                    background: "linear-gradient(175deg, #FFD166 0%, #FF9933 45%, #e65c00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 18px rgba(255,153,51,0.45))"
                  }}
                >
                  BHARAT
                </span>

                {/* ROBOTICS — White / silver with Ashoka Chakra in the O */}
                <span className="flex items-center text-[clamp(3.4rem,9.5vw,5.8rem)]">
                  <span
                    style={{
                      background: "linear-gradient(175deg,#ffffff 0%,#d0d0d0 60%,#a0a0a0 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 14px rgba(255,255,255,0.18))"
                    }}
                  >ROB</span>
                  {/* Ashoka Chakra replacing the O */}
                  <span className="inline-flex items-center justify-center" style={{ margin: "0 1px" }}>
                    <svg
                      viewBox="0 0 40 40"
                      style={{ width: "clamp(2.6rem,7.5vw,4.5rem)", height: "clamp(2.6rem,7.5vw,4.5rem)" }}
                    >
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#1a40b0" strokeWidth="3"/>
                      <circle cx="20" cy="20" r="3.5" fill="#1a40b0"/>
                      {Array.from({ length: 24 }).map((_, i) => {
                        const a = (i * Math.PI * 2) / 24;
                        return (
                          <line
                            key={i}
                            x1={20 + 4.2 * Math.cos(a)} y1={20 + 4.2 * Math.sin(a)}
                            x2={20 + 14.5 * Math.cos(a)} y2={20 + 14.5 * Math.sin(a)}
                            stroke="#1a40b0" strokeWidth="1.3"
                          />
                        );
                      })}
                    </svg>
                  </span>
                  <span
                    style={{
                      background: "linear-gradient(175deg,#ffffff 0%,#d0d0d0 60%,#a0a0a0 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 14px rgba(255,255,255,0.18))"
                    }}
                  >TICS</span>
                </span>

                {/* LEAGUE — India Green */}
                <span
                  className="block text-5xl sm:text-6xl md:text-7xl"
                  style={{
                    background: "linear-gradient(175deg,#4de84d 0%,#138808 45%,#0a5c0a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 18px rgba(19,136,8,0.45))"
                  }}
                >
                  LEAGUE
                </span>
              </h1>
            </motion.div>

            {/* Season badge + Dangal */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-[#FF9933] text-black px-3 py-1 rounded-sm">
                SEASON 1
              </span>
              <span className="font-display font-bold text-white/35 text-xs tracking-widest uppercase">2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-display font-black text-2xl tracking-wider uppercase"
                style={{ color: "#FF9933", textShadow: "0 0 14px rgba(255,153,51,0.5)" }}>
                DANGAL
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="font-display font-bold text-sm uppercase tracking-[0.15em] text-white/40 mb-1">
              Season Theme: <span className="text-white/55">Dangal of Robots</span>
            </motion.p>

            <motion.p variants={fadeUp} className="font-display font-semibold tracking-[0.18em] text-white/35 uppercase text-sm mb-8">
              Build. Battle. Conquer.
            </motion.p>

            {/* Event info pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Calendar, text: "30 Sept 2026" },
                { icon: Clock, text: "9 AM – 5 PM" },
                { icon: MapPin, text: "Exhibition Hall, Indian Museum, Kolkata" },
              ].map((item, i) => (
                <div key={i}
                  className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-sm text-sm font-display font-semibold text-white/65">
                  <item.icon className="w-3.5 h-3.5 text-[#FF9933]" />
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
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

            {/* Sub-nav */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-5 mt-5">
              {[
                { label: "Registration Info", href: "/registration" },
                { label: "Robot Specs", href: "/robot-specs" },
                { label: "General Rules", href: "/rules" },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="text-xs font-display font-bold uppercase tracking-wider text-white/35 hover:text-white/70 transition-colors flex items-center gap-1">
                  {l.label} <ChevronRight className="w-3 h-3" />
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
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
