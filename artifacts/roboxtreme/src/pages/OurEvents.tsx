import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar, MapPin, Building2, Swords, Target, Zap, Crown, Trophy,
  Camera, Play, X, ChevronLeft, ChevronRight, ArrowUpRight, MessageCircle,
} from "lucide-react";
import Nav from "@/components/Nav";
import funscholarLogo from "@assets/funscholar-logo.png";

const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const glance = [
  { icon: Calendar, label: "Event Date", value: "29 September 2026", color: "#FF9933" },
  { icon: MapPin, label: "Venue", value: "Indian Museum, Kolkata", color: "#00a8ff" },
  { icon: Building2, label: "Presented by", value: "FunScholar", color: "#ff3333" },
  { icon: Swords, label: "Format", value: "Three arenas, one champion", color: "#fac800" },
];

const marquee = [
  "Robo Push", "Robo Pull", "Robo War", "Dangal of Robots", "Season 1 · 2026",
  "Indian Museum, Kolkata", "Presented by FunScholar",
];

const arenas = [
  { label: "Round 1", icon: Target, image: "/images/events/brl-arena-push.jpg", title: "Robo Push", tagline: "Push the weight past the line.", color: "#00a8ff", href: "/round-push" },
  { label: "Round 2", icon: Zap, image: "/images/events/brl-arena-pull.jpg", title: "Robo Pull", tagline: "Haul the load down the track.", color: "#ff3333", href: "/round-pull" },
  { label: "Round 3", icon: Swords, image: "/images/events/brl-arena-war.jpg", title: "Robo War", tagline: "Knock the opponent into the pit.", color: "#fac800", href: "/round-war" },
];

const gallery = [
  { src: "/images/events/brl-gallery-01.jpg", alt: "Students celebrating a win at the Bharat Robotics League", wide: true },
  { src: "/images/events/brl-gallery-02.jpg", alt: "A match in progress as the crowd cheers on", wide: false },
  { src: "/images/events/brl-gallery-03.jpg", alt: "Students driving their robot on the Robo War arena", wide: false },
  { src: "/images/events/brl-gallery-04.jpg", alt: "A team guiding their robot across the arena", wide: true },
  { src: "/images/events/brl-gallery-05.jpg", alt: "Last-minute adjustments to a robot before a match", wide: true },
  { src: "/images/events/brl-gallery-06.jpg", alt: "A competition robot on the Robo War floor", wide: false },
  { src: "/images/events/brl-gallery-07.jpg", alt: "Two students with their robot controller between matches", wide: false },
  { src: "/images/events/brl-gallery-08.jpg", alt: "Robots facing off on the Robo War arena", wide: true },
  { src: "/images/events/brl-gallery-09.jpg", alt: "A student setting up a robot on the Robo Pull track", wide: true },
  { src: "/images/events/brl-gallery-10.jpg", alt: "Teams competing on the Robo War arena", wide: false },
  { src: "/images/events/brl-gallery-11.jpg", alt: "Teams lined up at the Robo Push arena", wide: false },
  { src: "/images/events/brl-gallery-12.jpg", alt: "A match being filmed on the Robo Push arena", wide: true },
  { src: "/images/events/brl-gallery-13.jpg", alt: "The Robo Pull track with the Dangal of Robots banners", wide: true },
  { src: "/images/events/brl-gallery-14.jpg", alt: "A robot lined up on the Robo Push arena", wide: false },
  { src: "/images/events/brl-gallery-15.jpg", alt: "The host and teams around the Robo War arena", wide: false },
  { src: "/images/events/brl-gallery-16.jpg", alt: "A robot pulling its load along the Robo Pull track", wide: true },
];

const trophies = [
  { name: "BRL 2026 Grand Champion", grand: true },
  { name: "Robo War Winner", grand: false },
  { name: "Robo Pull Winner", grand: false },
  { name: "Robo Push Winner", grand: false },
];

const winners = [
  "/images/events/brl-winners-1.jpg",
  "/images/events/brl-winners-2.jpg",
  "/images/events/brl-winners-3.jpg",
  "/images/events/brl-winners-4.jpg",
];

/* Section eyebrow + heading, matching the home page */
function SectionHead({ eyebrow, color, children }: { eyebrow: string; color: string; children: ReactNode }) {
  return (
    <>
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
        <div className="h-px w-10" style={{ background: color }} />
        <span className="font-display text-xs font-bold tracking-[0.25em] uppercase" style={{ color }}>{eyebrow}</span>
      </motion.div>
      <motion.h2 variants={fadeUp} className="font-display font-black text-4xl md:text-5xl uppercase text-white tracking-tight mb-10">
        {children}
      </motion.h2>
    </>
  );
}

function Tile({ src, alt, className = "", children }: { src: string; alt: string; className?: string; children?: ReactNode }) {
  return (
    <motion.div variants={fadeUp}
      className={`group relative overflow-hidden rounded-md border border-white/10 bg-card ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      {children}
    </motion.div>
  );
}

export default function OurEvents() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const reelRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = reelRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (lightbox === null && !videoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setLightbox(null); setVideoOpen(false); }
      if (lightbox === null) return;
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, videoOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav overlay compact />

      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl transition-all hover:scale-110"
        style={{ boxShadow: "0 0 20px rgba(37,211,102,0.4)" }} title="Chat on WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-16">
        <motion.div initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }} className="absolute -inset-px z-0">
          <img src="/images/events/brl-hero.jpg" alt="A student placing his robot at the start line of a Bharat Robotics League arena"
            className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "80% 35%" }} />
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/55 to-background/30" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-28 w-full">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <img src={funscholarLogo} alt="FunScholar" draggable={false} className="h-7 w-auto object-contain select-none" />
              <span className="h-4 w-px bg-white/20" />
              <span className="font-sans font-light text-[10px] tracking-[0.45em] indent-[0.45em] uppercase text-white/55">Presents</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#FF9933]" />
              <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-[#FF9933]">Season 1 · 2026 Highlights</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display font-black uppercase leading-[0.92] tracking-tight">
              <span className="block text-5xl sm:text-6xl md:text-7xl" style={{ color: "#FF9933", textShadow: "0 0 24px rgba(255,153,51,0.35)" }}>Bharat</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-white">Robotics</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl" style={{ color: "#2fcc2f", textShadow: "0 0 24px rgba(19,136,8,0.4)" }}>League</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-white/80">
              Dangal of <span className="text-[#FF9933]">Robots.</span>
            </motion.p>
            <motion.p variants={fadeUp} className="mt-3 text-white/55 text-base md:text-lg max-w-lg leading-relaxed">
              Highlights from FunScholar&apos;s competitive robotics league for school teams.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-7">
              {[
                { icon: Calendar, text: "29 Sept 2026" },
                { icon: MapPin, text: "Indian Museum, Kolkata" },
                { icon: Building2, text: "Presented by FunScholar" },
              ].map((item, i) => (
                <div key={i}
                  className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-sm text-sm font-display font-semibold text-white/65">
                  <item.icon className="w-3.5 h-3.5 text-[#FF9933]" />
                  {item.text}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-22">
              <a href="#gallery"
                className="flex items-center gap-2 px-8 py-4 font-display font-black text-sm uppercase tracking-[0.15em] text-black rounded-sm transition-all hover:scale-105 hover:brightness-110"
                style={{ background: "linear-gradient(135deg,#ff3333,#ff6600)", boxShadow: "0 0 30px rgba(255,80,0,0.4)" }}>
                <Camera className="w-4 h-4" /> See the Highlights
              </a>
              <Link href="/home"
                className="flex items-center gap-2 px-8 py-4 font-display font-black text-sm uppercase tracking-[0.15em] text-white/80 rounded-sm border border-white/15 hover:bg-white/[0.06] hover:text-white transition-all">
                Explore the League <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ AT A GLANCE ═══════════════════════════════ */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {glance.map((g) => (
              <motion.div key={g.label} variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-md border border-white/10 bg-card transition-colors"
                style={{ boxShadow: "0 20px 40px -24px rgba(0,0,0,0.8)" }}>
                <span className="w-11 h-11 shrink-0 rounded-sm flex items-center justify-center"
                  style={{ background: `${g.color}1f`, border: `1px solid ${g.color}55` }}>
                  <g.icon className="w-5 h-5" style={{ color: g.color }} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">{g.label}</p>
                  <p className="font-display font-bold text-white text-base leading-snug">{g.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ MOMENTS ═══════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <SectionHead eyebrow="On the Floor" color="#00a8ff">
              Built by Students.<br /><span className="text-white/35">Decided on the Floor.</span>
            </SectionHead>

            <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
              {/* Recap reel */}
              <motion.div variants={fadeUp}
                className="group relative overflow-hidden rounded-md border border-white/10 bg-black col-span-2 md:col-span-3 md:row-span-2 aspect-[9/16]">
                <video ref={reelRef} src="/videos/brl-recap.mp4" poster="/images/events/brl-recap-poster.jpg"
                  autoPlay muted loop playsInline preload="metadata" aria-label="Bharat Robotics League 2026 recap"
                  className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-black/50 backdrop-blur border border-white/15 px-3 py-1.5 rounded-sm font-display text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3333] animate-pulse" /> Recap
                </span>
                <button type="button" onClick={() => setVideoOpen(true)}
                  className="absolute inset-x-4 bottom-4 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 px-4 py-3 rounded-sm font-display font-bold text-xs uppercase tracking-[0.15em] text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" /> Watch with sound
                </button>
              </motion.div>

              <Tile src="/images/events/brl-story-1.jpg" alt="Two students celebrating with their fists in the air after a match"
                className="col-span-2 md:col-span-5 md:row-span-2 aspect-[4/3] md:aspect-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5">
                  <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF9933]">The Moment</p>
                  <p className="font-display font-black text-xl uppercase text-white">A match won on the floor.</p>
                </div>
              </Tile>

              <Tile src="/images/events/brl-identity.jpg" alt="The FunScholar team in front of the Bharat Robotics League backdrop"
                className="col-span-2 md:col-span-4 aspect-[16/9] md:aspect-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute left-5 bottom-5 inline-flex items-center gap-2 bg-black/40 backdrop-blur border border-white/15 px-3 py-1.5 rounded-sm font-display text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933]" /> Presented by FunScholar
                </span>
              </Tile>
              <Tile src="/images/events/brl-story-2.jpg" alt="Students concentrating on their controllers mid-match"
                className="col-span-1 md:col-span-2 aspect-[4/3] md:aspect-auto" />
              <Tile src="/images/events/brl-story-4.jpg" alt="A competition robot on the Robo War arena"
                className="col-span-1 md:col-span-2 aspect-[4/3] md:aspect-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ ARENAS ═══════════════════════════════ */}
      <section className="relative border-t border-white/5 overflow-hidden">
        <div className="border-b border-white/8 py-3 overflow-hidden">
          <motion.div className="flex w-max whitespace-nowrap font-display text-xs font-bold tracking-[0.25em] uppercase text-white/40"
            animate={{ x: ["0%", "-50%"] }} transition={{ duration: 32, ease: "linear", repeat: Infinity }}>
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center">
                <span className="px-6">{m}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933]" />
              </span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <SectionHead eyebrow="The Competition" color="#ff3333">
              Three Challenges.<br /><span className="text-white/35">One Champion.</span>
            </SectionHead>

            <div className="grid sm:grid-cols-3 gap-5">
              {arenas.map((a) => (
                <motion.div key={a.title} variants={fadeUp}>
                  <Link href={a.href}
                    className="group relative block overflow-hidden rounded-md border aspect-[4/3] sm:aspect-[4/5] transition-all duration-300 hover:scale-[1.02]"
                    style={{ borderColor: `${a.color}40` }}>
                    <img src={a.image} alt={a.title} loading="lazy" decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <span className="absolute top-4 left-4 font-display font-black text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm text-black"
                      style={{ background: a.color }}>{a.label}</span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <a.icon className="w-6 h-6 mb-3" style={{ color: a.color }} />
                      <h3 className="font-display font-black text-3xl uppercase text-white leading-none">{a.title}</h3>
                      <p className="mt-2 font-display font-semibold text-sm uppercase tracking-wide" style={{ color: a.color }}>{a.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-[0.15em] text-white/50 group-hover:text-white transition-colors">
                        Know More <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ GALLERY ═══════════════════════════════ */}
      <section id="gallery" className="py-20 border-t border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <SectionHead eyebrow="Gallery" color="#FF9933">
                  Moments From<br /><span className="text-white/35">The Floor.</span>
                </SectionHead>
              </div>
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 mb-10 font-display text-xs font-semibold uppercase tracking-wide text-white/40">
                <Camera className="w-4 h-4 text-[#FF9933]" /> Tap any photo to view it full size
              </motion.span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {gallery.map((g, i) => (
                <motion.button key={g.src} type="button" variants={fadeUp} onClick={() => setLightbox(i)}
                  aria-label={`View photo: ${g.alt}`}
                  className={`group relative overflow-hidden rounded-md border border-white/10 bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9933] ${
                    g.wide ? "col-span-2 md:col-span-4 aspect-[16/9]" : "col-span-1 md:col-span-2 aspect-[4/3] md:aspect-auto h-full"
                  }`}>
                  <img src={g.src} alt={g.alt} loading="lazy" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute right-3 bottom-3 w-9 h-9 rounded-sm bg-[#FF9933] text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ HONOURS ═══════════════════════════════ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <SectionHead eyebrow="Honours" color="#fac800">
              Four Trophies.<br /><span className="text-white/35">Earned on the Floor.</span>
            </SectionHead>

            <div className="grid lg:grid-cols-12 gap-5">
              <Tile src="/images/events/brl-trophies.jpg" alt="The four Bharat Robotics League 2026 trophies on the presentation table"
                className="lg:col-span-7 aspect-[16/9]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
                  {trophies.map((t) => (
                    <span key={t.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-display text-xs font-bold uppercase tracking-wide border ${
                        t.grand ? "bg-[#fac800] border-[#fac800] text-black" : "bg-black/40 backdrop-blur border-white/20 text-white"
                      }`}>
                      {t.grand ? <Crown className="w-3.5 h-3.5" /> : <Trophy className="w-3.5 h-3.5 text-[#fac800]" />}
                      {t.name}
                    </span>
                  ))}
                </div>
              </Tile>
              <Tile src="/images/events/brl-unveil.jpg" alt="The Bharat Robotics League trophies being unveiled"
                className="lg:col-span-5 aspect-[16/9] lg:aspect-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute left-5 bottom-5 inline-flex items-center gap-2 bg-black/40 backdrop-blur border border-white/15 px-3 py-1.5 rounded-sm font-display text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fac800]" /> The Unveiling
                </span>
              </Tile>
            </div>

            <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {winners.map((w) => (
                <Tile key={w} src={w} alt="A winning team receiving their trophy from the organisers" className="aspect-[4/3]" />
              ))}
            </div>
            <motion.p variants={fadeUp} className="mt-6 text-center font-display text-sm uppercase tracking-wide text-white/40">
              The winning teams of Season 1 with the FunScholar team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ CLOSING ═══════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[34rem] lg:min-h-[44rem] flex items-start">
        <img src="/images/events/brl-group.jpg" alt="Everyone at the Bharat Robotics League gathered around the arena"
          loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 20%" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 via-30% to-transparent to-55%" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-20%" />
        <div className="relative max-w-6xl mx-auto px-6 pt-14 lg:pt-20 text-center w-full">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#FF9933]" />
              <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-[#FF9933]">Season 1 · 2026</span>
              <div className="h-px w-10 bg-[#FF9933]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-black text-4xl md:text-6xl uppercase text-white tracking-tight"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}>
              One Floor. <span className="text-white/45">One League.</span>
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */}
      <footer className="border-t border-white/8 py-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
          <p className="text-white/20 text-xs font-display tracking-wider uppercase">© 2026 FunScholar Innovations Pvt. Ltd.</p>
        </div>
      </footer>

      {/* Recap video, full screen */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div role="dialog" aria-modal="true" aria-label="Recap video"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
            <button type="button" onClick={() => setVideoOpen(false)} aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <X className="w-5 h-5" />
            </button>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[calc(85vh*9/16)] aspect-[9/16] rounded-md overflow-hidden bg-black border border-white/10">
              <video src="/videos/brl-recap.mp4" poster="/images/events/brl-recap-poster.jpg" controls autoPlay playsInline
                className="absolute inset-0 w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo viewer */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div role="dialog" aria-modal="true" aria-label="Photo viewer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
            <button type="button" onClick={() => setLightbox(null)} aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <X className="w-5 h-5" />
            </button>
            <button type="button" aria-label="Previous photo"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button type="button" aria-label="Next photo"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i + 1) % gallery.length)); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <motion.figure key={lightbox} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-6xl">
              <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} className="w-full max-h-[80vh] object-contain rounded-md" />
              <figcaption className="mt-4 text-center font-display text-sm text-white/60">
                {gallery[lightbox].alt}
                <span className="text-white/35"> · {lightbox + 1} / {gallery.length}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
