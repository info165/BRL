import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, CheckCircle2, ShieldAlert } from "lucide-react";
import Nav from "@/components/Nav";
import chassisImg from "@assets/WhatsApp_Image_2026-06-09_at_14.38.07_1781313837519.jpeg";

const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const specs = [
  { label: "Maximum Weight", value: "3.5", unit: "kg" },
  { label: "Robot Length", value: "30", unit: "cm max" },
  { label: "Robot Width", value: "25", unit: "cm max" },
  { label: "Robot Height", value: "25", unit: "cm max (from ground)" },
  { label: "Hook Hole Diameter", value: "10", unit: "mm" },
  { label: "Hook Hole Location", value: "Back-center", unit: "of chassis" },
  { label: "Power Limit", value: "12", unit: "Volts max" },
];

export default function RobotSpecs() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />

      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl transition-all hover:scale-110"
        style={{ boxShadow: "0 0 20px rgba(37,211,102,0.4)" }} title="Chat on WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Header */}
      <section className="pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(rgba(0,168,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,255,0.8) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(0,168,255,0.06),transparent)]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-display mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#00a8ff]" />
            <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-[#00a8ff]">Tech Specs</span>
          </div>
          <h1 className="font-display font-black text-6xl md:text-7xl uppercase text-white tracking-tight leading-none mb-3">
            Robot<br /><span style={{ color: "#00a8ff" }}>Specifications</span>
          </h1>
          <p className="text-white/45 text-base font-display">All competing robots must comply with these specifications.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-10">

        {/* Specs grid */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp}
            className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-5">
            Size, Weight &amp; Control
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specs.map((spec, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-md border border-white/10 bg-card hover:border-[#00a8ff]/30 transition-colors">
                <div className="w-2 h-10 rounded-full bg-[#00a8ff]/60 shrink-0" />
                <div>
                  <p className="font-display text-xs font-bold tracking-[0.12em] uppercase text-muted-foreground">{spec.label}</p>
                  <p className="font-display font-black text-2xl text-white leading-tight">
                    {spec.value} <span className="text-sm text-[#00a8ff] font-bold">{spec.unit}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Control note */}
          <motion.div variants={fadeUp}
            className="mt-4 p-5 rounded-md border border-white/8 bg-white/[0.02] text-center">
            <p className="font-display font-semibold text-white/50 text-sm tracking-wide uppercase">
              Control: Wireless or Wired — team's choice &nbsp;|&nbsp; Wired: cables must be long enough for full arena movement
            </p>
          </motion.div>
        </motion.div>

        {/* Mandatory requirements */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp}
            className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-5">
            Mandatory Requirements
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div variants={fadeUp}
              className="flex items-start gap-4 p-6 rounded-md border border-[#00a8ff]/30 bg-[#00a8ff]/5">
              <CheckCircle2 className="w-6 h-6 text-[#00a8ff] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-black text-lg uppercase tracking-wide text-white mb-1">Hook Hole Required</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every robot must have a <strong className="text-white">10mm diameter hook hole</strong> in the <strong className="text-[#00a8ff]">back-center of the chassis</strong>. Do not attach any hook — hooks will be provided by the organizers during the event.
                </p>
                <p className="text-white/40 text-xs mt-2 font-display">For wired robots, the hook hole must be on the same side from which the wire exits.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}
              className="flex items-start gap-4 p-6 rounded-md border border-red-500/30 bg-red-500/5">
              <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-black text-lg uppercase tracking-wide text-white mb-1">Same Robot — All Rounds</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You <strong className="text-white">cannot swap parts or change robots</strong> between rounds. One machine must be built to handle all three challenges: pushing, pulling, and fighting.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Chassis modification image */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp}
            className="font-display font-black text-sm uppercase tracking-[0.2em] text-white/40 mb-5">
            Technical Specification: Required Chassis Modification
          </motion.h2>
          <motion.div variants={fadeUp}
            className="rounded-md overflow-hidden border border-[#00a8ff]/25"
            style={{ boxShadow: "0 0 40px rgba(0,168,255,0.08)" }}>
            <img
              src={chassisImg}
              alt="Technical Specification: Pull Block Challenge Required Chassis Modification"
              className="w-full object-cover"
            />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-3 text-center text-white/35 text-xs font-display tracking-widest uppercase">
            Participants must create a 10mm hole at the back of the chassis · Do not attach any hook
          </motion.p>
        </motion.div>

        {/* Battery reminder */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="flex items-start gap-4 p-6 rounded-md border border-yellow-400/25 bg-yellow-400/5">
          <ShieldAlert className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-display font-black text-base uppercase tracking-wide text-yellow-400 mb-1">Don't Forget</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Every team must bring <strong className="text-white">additional rechargeable batteries</strong> to the event.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
