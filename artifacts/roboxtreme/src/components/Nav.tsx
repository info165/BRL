import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import brlLogo from "@assets/ChatGPT_Image_Jun_23,_2026_at_11_21_53_AM_1782193932043.png";

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeeYRHPQggzAivKO6JZP5LWwMK8oC5EjMhGyhDnXY4w6ohwvQ/viewform?usp=preview";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Rounds", href: "#",
    children: [
      { label: "Round 1 — Block Push", href: "/round-push" },
      { label: "Round 2 — Block Pull", href: "/round-pull" },
      { label: "Round 3 — Robot War", href: "/round-war" },
    ]
  },
  { label: "Registration", href: "/registration" },
  { label: "Robot Specs", href: "/robot-specs" },
  { label: "General Rules", href: "/rules" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roundsOpen, setRoundsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/8"
      style={{ background: "rgba(7,10,15,0.95)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group opacity-90 hover:opacity-100 transition-opacity">
          <img src={brlLogo} alt="BRL" className="h-9 w-9 rounded-lg object-cover" />
          <span className="font-display font-black text-sm uppercase tracking-wide leading-none flex items-center">
            <span style={{ color: "#FF9933" }}>Bharat </span>
            <span style={{ color: "#e8e8e8" }}>&nbsp;Robotics </span>
            <span style={{ color: "#138808" }}>&nbsp;League</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-sm font-display font-bold text-sm uppercase tracking-wider transition-colors
                    ${link.children.some(c => c.href === location) ? "text-[#00a8ff]" : "text-white/60 hover:text-white"}`}
                >
                  {link.label} <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-[#0a0e16] border border-white/10 rounded-md overflow-hidden min-w-[220px] shadow-2xl">
                    {link.children.map(child => (
                      <Link key={child.href} href={child.href}
                        className={`block px-4 py-3 font-display font-semibold text-sm uppercase tracking-wider transition-colors
                          ${location === child.href ? "text-[#00a8ff] bg-[#00a8ff]/10" : "text-white/65 hover:text-white hover:bg-white/5"}`}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href}
                className={`px-4 py-2 rounded-sm font-display font-bold text-sm uppercase tracking-wider transition-colors
                  ${location === link.href ? "text-[#00a8ff]" : "text-white/60 hover:text-white"}`}>
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={() => window.open(FORM_LINK, "_blank")}
            className="ml-3 px-5 py-2 font-display font-black text-sm uppercase tracking-wider text-black rounded-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#ff3333,#ff6600)", boxShadow: "0 0 16px rgba(255,80,0,0.3)" }}
          >
            Register
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="button-nav-mobile"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/8 bg-[#07090f]"
          >
            <div className="px-5 py-4 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)}
                className="block py-2 font-display font-bold text-sm uppercase tracking-wider text-white/70 hover:text-white">Home</Link>
              <button onClick={() => setRoundsOpen(!roundsOpen)}
                className="w-full text-left flex items-center justify-between py-2 font-display font-bold text-sm uppercase tracking-wider text-white/70 hover:text-white">
                Rounds <ChevronDown className={`w-4 h-4 transition-transform ${roundsOpen ? "rotate-180" : ""}`} />
              </button>
              {roundsOpen && (
                <div className="pl-4 space-y-1 border-l border-white/10">
                  {[
                    { label: "Round 1 — Block Push", href: "/round-push" },
                    { label: "Round 2 — Block Pull", href: "/round-pull" },
                    { label: "Round 3 — Robot War", href: "/round-war" },
                  ].map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                      className="block py-2 font-display font-semibold text-xs uppercase tracking-wider text-white/60 hover:text-white">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/registration" onClick={() => setMobileOpen(false)}
                className="block py-2 font-display font-bold text-sm uppercase tracking-wider text-white/70 hover:text-white">Registration</Link>
              <Link href="/robot-specs" onClick={() => setMobileOpen(false)}
                className="block py-2 font-display font-bold text-sm uppercase tracking-wider text-white/70 hover:text-white">Robot Specs</Link>
              <Link href="/rules" onClick={() => setMobileOpen(false)}
                className="block py-2 font-display font-bold text-sm uppercase tracking-wider text-white/70 hover:text-white">General Rules</Link>
              <button onClick={() => { window.open(FORM_LINK, "_blank"); setMobileOpen(false); }}
                className="w-full mt-3 py-3 font-display font-black text-sm uppercase tracking-wider text-black rounded-sm"
                style={{ background: "linear-gradient(135deg,#ff3333,#ff6600)" }}>
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
