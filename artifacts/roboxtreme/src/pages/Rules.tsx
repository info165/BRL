import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, ShieldAlert } from "lucide-react";
import Nav from "@/components/Nav";

const WHATSAPP_LINK = "https://wa.me/919051555593?text=Hi%2C%20I%20want%20to%20know%20more%20about%20BRL";

const rules = [
  "Participants must design, build, and assemble their robots themselves. Ready-made commercial robots are not allowed.",
  "All robots must remain within the specified dimension and weight limits throughout the entire competition.",
  "The use of fire, flames, explosives, smoke-generating devices, corrosive substances, hazardous chemicals, or any dangerous materials is strictly prohibited.",
  "Sharp weapons, blades, spikes, projectiles, firearms, or any component that may cause injury to participants, spectators, officials, or equipment are not allowed.",
  "Teams must fully prepare, assemble, programme, and test their robots at their own place before entering the competition arena.",
  "No major repairs, assembly work, or modifications will be permitted inside the competition arena unless approved by the organizers.",
  "Teams must report to the competition venue before their scheduled event time. Late arrivals may result in disqualification.",
  "Participants must maintain sportsmanship and fair play throughout the competition.",
  "Any form of cheating, intentional interference, or unsportsmanlike conduct will result in penalties or disqualification.",
  "Participants are responsible for the safety and proper operation of their robots.",
  "Robots must not intentionally damage the competition arena, track, equipment, or surrounding infrastructure.",
  "Judges and event officials reserve the right to inspect any robot before or during the competition.",
  "In case of disputes, the decision of the judges and organizers shall be final and binding.",
  "Every team must bring additional rechargeable batteries to the event.",
  "Organizers reserve the right to modify or update rules if required to ensure safety, fairness, and smooth conduct of the event.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

export default function Rules() {
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
            style={{ backgroundImage: "linear-gradient(rgba(255,50,50,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,50,50,0.8) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(255,50,50,0.05),transparent)]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-display mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-red-400" />
            <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-red-400">Official Rulebook</span>
          </div>
          <h1 className="font-display font-black text-6xl md:text-7xl uppercase text-white tracking-tight leading-none mb-3">
            General Rules<br /><span className="text-white/30">&amp; Guidelines</span>
          </h1>
          <p className="text-white/45 text-base font-display">Bharat Robotics League 2026 — all participants must read and comply.</p>
        </div>
      </section>

      {/* Rules list */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <div className="rounded-md border border-white/10 bg-card overflow-hidden">
            {rules.map((rule, i) => (
              <motion.div key={i} variants={fadeUp}
                className={`flex items-start gap-5 px-7 py-5 ${i !== rules.length - 1 ? "border-b border-white/5" : ""} hover:bg-white/[0.025] transition-colors`}>
                <span className="font-display font-black text-3xl shrink-0 w-9 text-right leading-none mt-0.5"
                  style={{ color: i === 13 ? "#fac800" : "rgba(0,168,255,0.2)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={`leading-relaxed text-sm pt-1 ${i === 13 ? "text-yellow-300 font-semibold" : "text-white/70"}`}>
                  {i === 13 && <ShieldAlert className="inline w-4 h-4 text-yellow-400 mr-2 mb-0.5" />}
                  {rule}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp}
            className="mt-6 p-6 rounded-md border border-red-500/25 bg-red-500/5 flex items-start gap-4">
            <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-white/60 text-sm leading-relaxed">
              Violation of any rule may result in <strong className="text-red-400">immediate disqualification</strong>. All decisions made by judges and event officials are final and binding. The organizers reserve the right to modify rules to ensure the safety and fairness of the event.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
