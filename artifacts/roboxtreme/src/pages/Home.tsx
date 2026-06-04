import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, MapPin, Calendar, Users, Cpu, 
  ShieldAlert, MessagesSquare, ChevronRight, Zap,
  Target, Sword, Award, CheckCircle2, MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeeYRHPQggzAivKO6JZP5LWwMK8oC5EjMhGyhDnXY4w6ohwvQ/viewform?usp=preview";
const WHATSAPP_LINK = "https://wa.me/919051555593";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* 1. Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold tracking-wider text-sm uppercase"
          >
            Bharat Robotics League Presents
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase text-white mb-4 leading-none"
          >
            Robo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Xtreme</span><br />
            Championship <span className="text-muted-foreground/50">2026</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold text-gray-300 mt-6 mb-12 tracking-wide uppercase"
          >
            Season Theme: <span className="text-primary">Dangal</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-2xl font-light text-gray-400 mb-12 italic max-w-3xl mx-auto"
          >
            "Build. Battle. Conquer."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-gray-300"
          >
            <div className="flex items-center gap-3 bg-secondary/50 px-6 py-3 rounded-lg border border-border">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">30th September 2026</span>
            </div>
            <div className="flex items-center gap-3 bg-secondary/50 px-6 py-3 rounded-lg border border-border">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Exhibition Hall, Indian Museum, Kolkata</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button 
              size="lg" 
              className="h-16 px-12 text-lg font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.open(FORM_LINK, "_blank")}
            >
              Register Now <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Event Highlights */}
      <section className="py-24 bg-secondary/30 relative border-y border-border">
        <div className="container px-4 mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center"
          >
            {[
              { icon: Cpu, text: "1 Bot • 3 Rounds" },
              { icon: Zap, text: "Free Participation" },
              { icon: Trophy, text: "Mega Prize" },
              { icon: MessagesSquare, text: "Media Coverage" },
              { icon: Award, text: "1st in Kolkata" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-gray-200">{item.text}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Eligibility */}
      <section className="py-24 relative">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white mb-4">Who Can Enter the Arena?</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Grade 6 & Above</h3>
              <p className="text-muted-foreground">Open to middle and high school students with a passion for robotics.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <ShieldAlert className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Team Structure</h3>
              <p className="text-muted-foreground">2 Student Participants + 1 Official Mentor per team.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Multiple Entries</h3>
              <p className="text-muted-foreground">Schools can send multiple teams to increase their chances of victory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Three Rounds */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container px-4 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white mb-4">The Battle: 3 Rounds</h2>
            <p className="text-xl text-muted-foreground">One Robot. Three distinct challenges to prove your supremacy.</p>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="space-y-12">
            {/* Round 1 */}
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-32 h-32" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2 flex items-center gap-4">
                <span className="text-primary">Round 1</span> Block Push Challenge
              </h3>
              <p className="text-muted-foreground mb-6 font-mono">Time Limit: 120 Seconds</p>
              <p className="text-lg text-gray-300 mb-6">
                Test your robot's pushing power. Push wooden blocks of varying weights completely out of the arena to score points.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/50 text-gray-300 uppercase font-bold">
                    <tr>
                      <th className="p-4 border-b border-border">Block Weight</th>
                      <th className="p-4 border-b border-border">250g</th>
                      <th className="p-4 border-b border-border">500g</th>
                      <th className="p-4 border-b border-border">750g</th>
                      <th className="p-4 border-b border-border">1kg</th>
                      <th className="p-4 border-b border-border">2.5kg</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-border bg-secondary/20">Points</td>
                      <td className="p-4 text-primary font-bold">10 pts</td>
                      <td className="p-4 text-primary font-bold">20 pts</td>
                      <td className="p-4 text-primary font-bold">30 pts</td>
                      <td className="p-4 text-primary font-bold">40 pts</td>
                      <td className="p-4 text-primary font-bold">50 pts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Round 2 */}
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <MapPin className="w-32 h-32" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2 flex items-center gap-4">
                <span className="text-primary">Round 2</span> Block Pull Challenge
              </h3>
              <p className="text-muted-foreground mb-6 font-mono">Time Limit: 120 Seconds</p>
              <p className="text-lg text-gray-300 mb-6">
                Precision and traction. Pull blocks into the designated target zone. 
                <span className="block mt-2 text-primary font-bold">Requirement: Robot must have a front-center 10mm hook hole.</span>
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/50 text-gray-300 uppercase font-bold">
                    <tr>
                      <th className="p-4 border-b border-border">Block Weight</th>
                      <th className="p-4 border-b border-border">250g</th>
                      <th className="p-4 border-b border-border">500g</th>
                      <th className="p-4 border-b border-border">750g</th>
                      <th className="p-4 border-b border-border">1kg</th>
                      <th className="p-4 border-b border-border">2.5kg</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-border bg-secondary/20">Points</td>
                      <td className="p-4 text-primary font-bold">10 pts</td>
                      <td className="p-4 text-primary font-bold">20 pts</td>
                      <td className="p-4 text-primary font-bold">30 pts</td>
                      <td className="p-4 text-primary font-bold">40 pts</td>
                      <td className="p-4 text-primary font-bold">50 pts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Round 3 */}
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sword className="w-32 h-32" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2 flex items-center gap-4">
                <span className="text-primary">Round 3</span> Robot War
              </h3>
              <p className="text-muted-foreground mb-6 font-mono">Time Limit: 60 Seconds</p>
              <p className="text-lg text-gray-300 mb-6">
                Pure combat. Push your opponent completely out of the arena. Speed is rewarded.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/50 text-gray-300 uppercase font-bold">
                    <tr>
                      <th className="p-4 border-b border-border">Win Time</th>
                      <th className="p-4 border-b border-border">Under 10s</th>
                      <th className="p-4 border-b border-border">Under 20s</th>
                      <th className="p-4 border-b border-border">Under 35s</th>
                      <th className="p-4 border-b border-border">Under 50s</th>
                      <th className="p-4 border-b border-border text-muted-foreground">Tie Game</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    <tr>
                      <td className="p-4 font-bold text-white border-r border-border bg-secondary/20">Points</td>
                      <td className="p-4 text-primary font-bold text-xl">50 pts</td>
                      <td className="p-4 text-primary font-bold text-lg">40 pts</td>
                      <td className="p-4 text-primary font-bold">25 pts</td>
                      <td className="p-4 text-primary font-bold">10 pts</td>
                      <td className="p-4 text-muted-foreground font-bold">30 pts each</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Awards */}
      <section className="py-24 relative">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white mb-4">Glory Awaits</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <Award className="w-10 h-10 text-gray-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg">Champion<br/><span className="text-muted-foreground">Block Push</span></h3>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <Award className="w-10 h-10 text-gray-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg">Champion<br/><span className="text-muted-foreground">Block Pull</span></h3>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <Award className="w-10 h-10 text-gray-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg">Champion<br/><span className="text-muted-foreground">Robot War</span></h3>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-card p-6 rounded-2xl border border-primary/50 ring-2 ring-primary/20 relative overflow-hidden">
              <Trophy className="w-10 h-10 text-primary mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-lg text-white relative z-10">ROBO XTREME<br/><span className="text-primary">CHAMPION 2026</span></h3>
              <p className="text-xs text-muted-foreground mt-2 relative z-10">Highest Cumulative Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Robot Specifications */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white mb-4">Robot Specifications</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4 bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">WT</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Max Weight</p>
                <p className="text-2xl font-black text-white">3.5 KG</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">DIM</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Dimensions (L×W×H)</p>
                <p className="text-2xl font-black text-white">30 × 25 × 25 cm</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">PWR</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Max Power</p>
                <p className="text-2xl font-black text-white">12V</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">CTL</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Control Type</p>
                <p className="text-xl font-bold text-white">Wireless or Wired</p>
              </div>
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/30 p-6 rounded-xl">
            <h4 className="text-destructive font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" /> Mandatory Requirements
            </h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Robot must have a <strong>10mm hook hole</strong> (center front/back) for Round 2.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Same robot must be used</strong> for all 3 rounds. No part swaps allowed between rounds.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. General Rules */}
      <section className="py-24">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-4">Official Rules of Engagement</h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <ol className="list-decimal list-inside space-y-4 text-gray-300 text-lg leading-relaxed marker:text-primary marker:font-bold">
              <li>Participants must build their own robots. No commercial or pre-built bots allowed.</li>
              <li>No fire, explosives, blades, or dangerous weapons permitted in the arena.</li>
              <li>No modifications to the robot are allowed inside the arena.</li>
              <li>Teams must report to the venue 30 minutes before their scheduled time.</li>
              <li>Robots must be inspected and weighed before the competition begins.</li>
              <li>Only the 2 student participants are allowed near the arena during matches.</li>
              <li>Mentors may only provide verbal guidance from the designated viewing area.</li>
              <li>Any robot damaging the arena intentionally will be disqualified.</li>
              <li>Wired robots must ensure cables do not entangle the opponent or the arena elements.</li>
              <li>In the event of a tie, the robot with the lower weight wins the advantage.</li>
              <li>If a robot is immobilized for 10 seconds, it loses the round.</li>
              <li>Unsportsmanlike conduct will result in immediate disqualification of the entire team.</li>
              <li>The judges' decision is final and binding under all circumstances.</li>
              <li>Organizers reserve the right to modify rules if necessary for safety or fairness.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 8. Registration CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
              Ready to Compete?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Gather your team. Build your bot. Claim the title of the first RoboXtreme Champion in Kolkata.
            </p>
            <Button 
              size="lg" 
              className="h-20 px-16 text-2xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_-10px_rgba(255,69,0,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,69,0,0.7)] transition-all hover:scale-105"
              onClick={() => window.open(FORM_LINK, "_blank")}
            >
              Register Your School
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 9. Contact & Footer */}
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-black uppercase text-white mb-2">RoboXtreme</h3>
              <p className="text-muted-foreground mb-6">Championship 2026 • Kolkata</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <p>Organised by</p>
                <p className="text-white font-bold text-lg">Funscholar Innovations Pvt. Ltd.</p>
              </div>
            </div>
            
            <div className="md:text-right bg-secondary/50 p-8 rounded-2xl border border-border">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Direct Contact</h4>
              <p className="text-xl text-white font-medium mb-1">Risheb Bhartia</p>
              <p className="text-primary font-mono text-xl mb-6">+91 90515 55593</p>
              
              <Button 
                variant="outline" 
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border text-sm text-muted-foreground">
            &copy; 2026 Funscholar Innovations Pvt. Ltd. All rights reserved. Bharat Robotics League.
          </div>
        </div>
      </footer>

    </div>
  );
}
