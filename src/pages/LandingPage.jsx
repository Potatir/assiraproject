import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Watch, Smartphone, Headphones, ArrowRight, Check, Activity, Moon, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  const ringVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 25, repeat: Infinity, ease: 'linear' }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-neonCoral relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="fixed top-0 left-0 w-full z-50 glass bg-black/60 backdrop-blur-xl border-b border-white/10 px-8 py-4 flex justify-between items-center"
      >
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Shield className="w-6 h-6 text-electricBlue" />
            <Sparkles className="w-3 h-3 text-mintGreen absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="font-semibold text-lg tracking-tight">HealthGuardian AI</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm text-gray-400 font-medium">
          <a href="#features" className="hover:text-white transition duration-300">Features</a>
          <a href="#how-it-works" className="hover:text-white transition duration-300">How It Works</a>
          <a href="#pricing" className="hover:text-white transition duration-300">Pricing</a>
        </nav>
        <Link to="/dashboard" className="relative group overflow-hidden px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5">
          <span className="relative z-10">Open Dashboard</span>
          <span className="absolute inset-0 bg-gradient-to-r from-electricBlue to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </Link>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electricBlue/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neonCoral/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6 z-10"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 leading-tight"
          >
            Proactive wellness.<br />Powered by Apple Intelligence.
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed"
          >
            An AI ecosystem that tracks stress, sleep, and recovery before you even feel it. Seamlessly connected with your Apple devices.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Open Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#features" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300">
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Dynamic Abstract Wellness Ring Mockup */}
        <motion.div 
          variants={floatVariants}
          animate="animate"
          className="mt-16 relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center z-10 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            variants={ringVariants}
            animate="animate"
            className="absolute inset-0 rounded-full border border-white/5" 
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[80%] h-[80%] rounded-full border border-white/10" 
          />
          {/* Neon Ring */}
          <motion.div 
            variants={ringVariants}
            animate="animate"
            className="w-[60%] h-[60%] rounded-full border-[10px] border-transparent border-t-electricBlue border-r-purple-500 filter drop-shadow-[0_0_15px_rgba(0,122,255,0.5)]" 
          />
          <div className="absolute flex flex-col items-center">
            <span className="text-6xl md:text-7xl font-extrabold tracking-tighter">98</span>
            <span className="text-xs tracking-widest text-gray-500 uppercase font-semibold mt-1">Wellness Score</span>
          </div>
        </motion.div>
      </section>

      {/* Problem & Solution Bento Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Identify patterns. Prevent burnout.</h2>
          <p className="text-gray-500 text-lg">Stop reacting to fatigue. Start predicting it with continuous, silent monitoring.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, borderColor: 'rgba(239, 68, 68, 0.2)' }}
            className="glass rounded-[32px] p-8 border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent flex flex-col justify-between min-h-[300px] transition-all duration-300"
          >
            <div>
              <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs text-red-400 font-semibold uppercase tracking-wider">
                The Hidden Toll
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-4 mb-3">
                We notice burnout when it's already too late.
              </h3>
              <p className="text-gray-400">
                High stress, poor sleep quality, and cumulative fatigue often go unnoticed until symptoms manifest physically.
              </p>
            </div>
            <div className="mt-8 space-y-3 border-t border-white/5 pt-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Cortisol Spikes</span>
                <span className="text-red-400 font-semibold font-mono">+24%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Deep Sleep Debt</span>
                <span className="text-red-400 font-semibold font-mono">-1.5 hrs</span>
              </div>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, borderColor: 'rgba(0, 199, 190, 0.2)' }}
            className="glass rounded-[32px] p-8 border-mintGreen/10 bg-gradient-to-br from-mintGreen/5 to-transparent flex flex-col justify-between min-h-[300px] transition-all duration-300"
          >
            <div>
              <span className="px-3 py-1 bg-mintGreen/10 border border-mintGreen/20 rounded-full text-xs text-mintGreen font-semibold uppercase tracking-wider">
                AI Pattern Recognition
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-4 mb-3">
                Invisible monitoring. Actionable insights.
              </h3>
              <p className="text-gray-400">
                HealthGuardian connects with your Apple Watch, iPhone, and AirPods to map your unique stress baseline.
              </p>
            </div>
            <div className="mt-8 space-y-4 border-t border-white/5 pt-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="p-1.5 bg-mintGreen/10 rounded-lg text-mintGreen">
                  <Watch className="w-4 h-4 animate-bounce" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Seamless Integration</h4>
                  <p className="text-xs text-gray-500">Zero manual input required.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="p-1.5 bg-mintGreen/10 rounded-lg text-mintGreen">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Predictive Analytics</h4>
                  <p className="text-xs text-gray-500">Actionable recovery advice.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-card/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">A passive, powerful ecosystem.</h2>
            <p className="text-gray-500 text-lg">Three steps to optimized personal health.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-[24px] p-8 text-center flex flex-col items-center space-y-4 transition-all duration-300"
            >
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-electricBlue">
                <Watch className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">1. Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sync your Apple Watch and devices with one tap. Secure, encrypted, local.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="glass rounded-[24px] p-8 text-center flex flex-col items-center space-y-4 transition-all duration-300"
            >
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-neonCoral">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">2. Analyze</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our Apple Intelligence models process millions of data points silently in the background.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="glass rounded-[24px] p-8 text-center flex flex-col items-center space-y-4 transition-all duration-300"
            >
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-mintGreen">
                <Moon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">3. Improve</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Receive subtle, timely notifications to hydrate, breathe, or sleep earlier to optimize tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Invest in your vitality.</h2>
          <p className="text-gray-500 text-lg">Simple, transparent pricing for individuals and families.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Basic */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="glass rounded-[32px] p-8 flex flex-col justify-between border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-400">Basic</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">$0</span>
                <span className="text-gray-500 ml-1">/mo</span>
              </div>
              <p className="text-gray-400 text-sm mt-4">Essential tracking for casual users.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-electricBlue" />
                  <span>Basic Sleep Stats</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-electricBlue" />
                  <span>Step Tracking</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-500 line-through">
                  <span>No AI Predictive Models</span>
                </li>
              </ul>
            </div>
            <Link to="/dashboard" className="w-full mt-8 py-3 px-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-center font-semibold text-sm transition">
              Get Started
            </Link>
          </motion.div>

          {/* Premium (HealthGuardian+) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative rounded-[32px] p-[1px] bg-gradient-to-b from-electricBlue to-purple-600 flex flex-col justify-between shadow-[0_0_40px_rgba(0,122,255,0.25)] transition-all duration-300"
          >
            <div className="glass rounded-[31px] p-8 bg-black flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-electricBlue">HealthGuardian+</h3>
                  <span className="px-2.5 py-0.5 bg-electricBlue/10 rounded-full text-[10px] font-extrabold text-electricBlue uppercase tracking-wider animate-pulse">
                    Most Popular
                  </span>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">$4.99</span>
                  <span className="text-gray-500 ml-1">/mo</span>
                </div>
                <p className="text-gray-400 text-sm mt-4">Full AI predictive power and deeper insights.</p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center space-x-3 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-electricBlue animate-pulse" />
                    <span>Advanced Readiness Score</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-electricBlue animate-pulse" />
                    <span>AI Stress Predictor</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-electricBlue" />
                    <span>Unlimited History</span>
                  </li>
                </ul>
              </div>
              <Link to="/dashboard" className="w-full mt-8 py-4 px-6 rounded-2xl bg-gradient-to-r from-electricBlue to-purple-600 hover:from-electricBlue/90 hover:to-purple-600/90 text-center font-semibold text-sm transition shadow-lg shadow-electricBlue/20">
                Subscribe Now
              </Link>
            </div>
          </motion.div>

          {/* Family */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="glass rounded-[32px] p-8 flex flex-col justify-between border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-400">Family</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">$9.99</span>
                <span className="text-gray-500 ml-1">/mo</span>
              </div>
              <p className="text-gray-400 text-sm mt-4">Protect the whole household. Up to 5 members.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-electricBlue" />
                  <span>All Plus Features</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-electricBlue" />
                  <span>5 Accounts</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-electricBlue" />
                  <span>Shared Health Dashboard</span>
                </li>
              </ul>
            </div>
            <Link to="/dashboard" className="w-full mt-8 py-3 px-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-center font-semibold text-sm transition">
              Choose Family
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-5xl font-bold tracking-tight"
          >
            Join the Revolution in Preventative Health
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Be the first to know when major updates drop.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining the beta waitlist!"); setEmail(''); }} className="max-w-md mx-auto flex items-center bg-card/40 border border-white/10 rounded-full p-1.5 focus-within:border-white/20 transition-all">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent flex-1 outline-none px-4 text-sm text-white placeholder-gray-500"
            />
            <button type="submit" className="bg-white text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-xs text-gray-500 space-y-4">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </div>
        <p>© 2026 HealthGuardian AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
