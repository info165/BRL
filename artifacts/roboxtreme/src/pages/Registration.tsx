import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Users, ChevronRight, CheckCircle2, MessageCircle, Clock, ArrowLeft, AlertCircle } from "lucide-react";
import Nav from "@/components/Nav";

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeeYRHPQggzAivKO6JZP5LWwMK8oC5EjMhGyhDnXY4w6ohwvQ/viewform?usp=preview";
const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Registration() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl transition-all hover:scale-110"
        style={{ boxShadow: "0 0 20px rgba(37,211,102,0.4)" }} title="Chat on WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Page header */}
      <section className="pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(rgba(255,80,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,255,0.8) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(255,80,0,0.06),transparent)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-display mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-red-400" />
            <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-red-400">Join the League</span>
          </div>
          <h1 className="font-display font-black text-6xl md:text-7xl uppercase text-white tracking-tight leading-none mb-3">
            Registration
          </h1>
          <p className="text-white/50 text-lg font-display">Bharat Robotics League 2026 — Season 1 · Dangal of Robots</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-8">

        {/* Eligibility */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="rounded-md border border-white/10 bg-card overflow-hidden">
            <div className="px-7 py-5 border-b border-white/8 flex items-center gap-3">
              <Users className="w-5 h-5 text-[#00a8ff]" />
              <h2 className="font-display font-black text-xl uppercase tracking-wider text-white">Eligibility Criteria</h2>
            </div>
            <div className="p-7 grid sm:grid-cols-2 gap-4">
              {[
                "Grade 6 and above",
                "Team Size: 2 Participants + 1 Mentor",
                "Multiple teams allowed per school",
                "Free Participation — no entry fee",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00a8ff] shrink-0" />
                  <span className="font-display font-semibold text-white/80 text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Registration Phases */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6">

          {/* Phase 1 — Pre-Registration */}
          <motion.div variants={fadeUp}
            className="relative rounded-md border overflow-hidden"
            style={{ borderColor: "#00a8ff40", background: "linear-gradient(135deg, rgba(0,168,255,0.06) 0%, rgba(0,168,255,0.02) 100%)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#00a8ff]" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-[#00a8ff] text-[#030912] px-3 py-1 rounded-sm">Phase 1</span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-display font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Open Now
                </span>
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-white tracking-tight mb-1">Pre-Registration</h3>
              <p className="text-white/50 text-sm mb-5 leading-relaxed">Show your intent to participate. Register your school and team early to secure your spot.</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="font-display font-semibold text-white/70">Status: <span className="text-green-400">Open — Registration Started</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-display font-semibold text-white/70">Last Date: <span className="text-white">10th September 2026</span></span>
                </div>
              </div>

              <button
                onClick={() => window.open(FORM_LINK, "_blank")}
                data-testid="button-register-phase1"
                className="w-full py-4 font-display font-black text-sm uppercase tracking-[0.15em] text-[#030912] rounded-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg,#00a8ff,#0077cc)", boxShadow: "0 0 20px rgba(0,168,255,0.25)" }}
              >
                Pre-Register Now <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Phase 2 — Final Registration */}
          <motion.div variants={fadeUp}
            className="relative rounded-md border overflow-hidden"
            style={{ borderColor: "#ff330040", background: "linear-gradient(135deg, rgba(255,80,0,0.05) 0%, rgba(255,80,0,0.02) 100%)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-500" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display font-black text-xs tracking-[0.2em] uppercase bg-red-500 text-white px-3 py-1 rounded-sm">Phase 2</span>
                <span className="inline-flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-display font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  <Clock className="w-3 h-3" /> Coming Soon
                </span>
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-white tracking-tight mb-1">Final Registration</h3>
              <p className="text-white/50 text-sm mb-5 leading-relaxed">Full participant details submission. Confirm your team roster and complete the registration process.</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="font-display font-semibold text-white/70">Opens: <span className="text-yellow-400">20th July 2026</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-display font-semibold text-white/70">Last Date: <span className="text-white">10th September 2026</span></span>
                </div>
              </div>

              <div className="w-full py-4 font-display font-black text-sm uppercase tracking-[0.15em] text-white/40 rounded-sm border border-white/10 text-center">
                Registration Opens 20 July
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Important note */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="flex items-start gap-4 p-5 rounded-md border border-yellow-400/25 bg-yellow-400/5">
          <AlertCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-display font-black text-sm uppercase tracking-wider text-yellow-400 mb-1">Important</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Pre-Registration is required to confirm intent. Final Registration (opening 20th July) will require complete participant details, school information, and mentor contact. Both phases close on <strong className="text-white">10th September 2026</strong>.
            </p>
          </div>
        </motion.div>

        {/* Event details recap */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="rounded-md border border-white/10 bg-card p-7">
          <h3 className="font-display font-black text-lg uppercase tracking-wider text-white/60 mb-5">Event Details</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "Event Date", value: "30 September 2026" },
              { label: "Time", value: "9:00 AM – 5:00 PM" },
              { label: "Venue", value: "Exhibition Hall, Indian Museum, Kolkata" },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-display text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground mb-1">{item.label}</p>
                <p className="font-display font-bold text-white text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center pt-4">
          <p className="text-white/40 text-sm mb-4 font-display">Have questions about registration?</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-all font-display font-bold uppercase tracking-wider text-sm">
            <MessageCircle className="w-5 h-5" /> Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
