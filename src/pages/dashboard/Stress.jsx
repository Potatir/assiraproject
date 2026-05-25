import React, { useState, useEffect } from 'react';
import { Brain, Sparkles, ChevronDown, X, Play, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Stress() {
  const [showBreathing, setShowBreathing] = useState(false);
  const [breathState, setBreathState] = useState('Idle'); // Idle, Inhale, Hold, Exhale
  const [seconds, setSeconds] = useState(180); // 3 minutes
  const [isActive, setIsActive] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 80, damping: 14 } 
    }
  };

  // Breathing simulation cycle
  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      setBreathState('Completed!');
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    let breathTimer;
    if (isActive) {
      const cycle = () => {
        setBreathState('Inhale');
        breathTimer = setTimeout(() => {
          setBreathState('Hold');
          breathTimer = setTimeout(() => {
            setBreathState('Exhale');
            breathTimer = setTimeout(() => {
              cycle();
            }, 4000); // Exhale 4s
          }, 4000); // Hold 4s
        }, 4000); // Inhale 4s
      };
      cycle();
    } else {
      setBreathState('Idle');
    }
    return () => clearTimeout(breathTimer);
  }, [isActive]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 relative"
    >
      {/* Header */}
      <motion.header variants={cardVariants} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Stress & Mindfulness</h1>
          <p className="text-gray-400 mt-2 text-lg font-medium">Burnout prevention tools & HRV analytics.</p>
        </div>
        <button 
          onClick={() => { setShowBreathing(true); setIsActive(true); setSeconds(180); }}
          className="self-start md:self-auto px-6 py-3.5 bg-gradient-to-r from-mintGreen/20 to-mintGreen/10 hover:from-mintGreen/30 hover:to-mintGreen/20 border border-mintGreen/30 text-mintGreen font-bold rounded-full transition duration-300 flex items-center space-x-2 text-sm shadow-lg shadow-mintGreen/5 hover:scale-[1.02]"
        >
          <Brain className="w-4 h-4 animate-pulse" />
          <span>Emergency Reset (3 min)</span>
        </button>
      </motion.header>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Burnout Risk Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="lg:col-span-1 glass rounded-[32px] p-8 flex flex-col justify-between min-h-[360px] bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF2D55] animate-pulse" />
            <span>Burnout Risk</span>
          </div>

          <div className="my-6">
            <h2 className="text-6xl font-extrabold tracking-tight text-[#FF2D55] drop-shadow-[0_0_20px_rgba(255,45,85,0.2)]">
              High
            </h2>
          </div>

          <p className="text-sm font-semibold text-gray-300 leading-relaxed">
            Your heart rate variability (HRV) has been low for 3 consecutive days. Recovery is recommended.
          </p>
        </motion.div>

        {/* HRV Tracker Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="lg:col-span-2 glass rounded-[32px] p-8 flex flex-col justify-between min-h-[360px] bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
              <Sparkles className="w-4 h-4 text-[#00C7BE]" />
              <span>HRV Tracker</span>
            </div>
            <button className="flex items-center space-x-1.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-300 hover:text-white transition">
              <span>This Week</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>
          </div>

          <div className="mt-8 flex-1 relative min-h-[180px] flex flex-col justify-between">
            {/* Custom SVG Line Chart */}
            <div className="flex-1 w-full relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-1 pointer-events-none">
                <div className="w-full border-t border-white/5 flex justify-between text-[10px] font-bold text-gray-700"><span className="pl-1">80</span></div>
                <div className="w-full border-t border-white/5 flex justify-between text-[10px] font-bold text-gray-700"><span className="pl-1">60</span></div>
                <div className="w-full border-t border-white/5 flex justify-between text-[10px] font-bold text-gray-700"><span className="pl-1">40</span></div>
                <div className="w-full border-t border-white/5 flex justify-between text-[10px] font-bold text-gray-700"><span className="pl-1">20</span></div>
              </div>

              {/* Smooth Neon Line */}
              <svg className="w-full h-full absolute inset-0 pt-4" viewBox="0 0 100 40" preserveAspectRatio="none">
                {/* Neon Glow under line */}
                <motion.path 
                  d="M 5,25 Q 20,15 35,22 T 65,30 T 95,35" 
                  fill="none" 
                  stroke="rgba(0,199,190,0.15)" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                />
                <motion.path 
                  d="M 5,25 Q 20,15 35,22 T 65,30 T 95,35" 
                  fill="none" 
                  stroke="#00C7BE" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                />
                {/* Data Points */}
                {[
                  { cx: 5, cy: 25, delay: 0.5 },
                  { cx: 20, cy: 18, delay: 0.7 },
                  { cx: 35, cy: 22, delay: 0.9 },
                  { cx: 50, cy: 24, delay: 1.1 },
                  { cx: 65, cy: 30, delay: 1.3 },
                  { cx: 80, cy: 32, delay: 1.5 },
                  { cx: 95, cy: 35, delay: 1.7 }
                ].map((pt, idx) => (
                  <motion.circle 
                    key={idx}
                    cx={pt.cx} 
                    cy={pt.cy} 
                    r="2" 
                    fill="#00C7BE" 
                    stroke="white" 
                    strokeWidth="0.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: pt.delay, duration: 0.3 }}
                  />
                ))}
              </svg>
            </div>

            {/* X-axis Days */}
            <div className="flex justify-between text-xs font-bold text-gray-500 pt-2 border-t border-white/5 mt-2">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stress Heatmap Card */}
      <motion.div 
        variants={cardVariants}
        whileHover={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
        className="glass rounded-[32px] p-8 flex flex-col justify-between bg-white/[0.02] cursor-pointer transition-all duration-300"
      >
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
          <Brain className="w-4 h-4 text-purple-400" />
          <span>Stress Heatmap (Today)</span>
        </div>

        {/* Heatmap Row */}
        <div className="mt-8 space-y-4">
          <div className="flex w-full h-8 rounded-full overflow-hidden bg-white/5 relative">
            <div className="absolute inset-0 flex">
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex-1 bg-gray-900/40 origin-left" />
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex-[2] bg-emerald-500/20 origin-left" />
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: 0.3 }} className="flex-1 bg-gray-900/40 origin-left" />
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: 0.4 }} className="flex-[1.5] bg-emerald-500/35 origin-left" />
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: 0.5 }} className="flex-[2.5] bg-amber-500/30 origin-left" />
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: 0.6 }} className="flex-1 bg-rose-500/40 origin-left" />
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: 0.7 }} className="flex-1 bg-emerald-500/25 origin-left" />
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4, delay: 0.8 }} className="flex-[2] bg-gray-900/40 origin-left" />
            </div>
          </div>

          <div className="flex justify-between text-xs font-semibold text-gray-500 px-2">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </div>

        {/* Heatmap Legend */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-gray-400 mt-6 pt-4 border-t border-white/5">
          <span className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/35" />
            <span>Calm</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
            <span>Moderate</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/40" />
            <span>High Stress</span>
          </span>
        </div>
      </motion.div>

      {/* EMERGENCY BREATHING MODAL OVERLAY */}
      <AnimatePresence>
        {showBreathing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => { setShowBreathing(false); setIsActive(false); }}
              className="absolute top-8 right-8 p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Timer and Title */}
            <div className="space-y-2 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-[#00C7BE] uppercase tracking-widest">Emergency Reset</h2>
              <p className="text-gray-400 font-semibold">Inhale, hold, exhale to align your nervous system.</p>
              <h3 className="text-4xl font-extrabold font-mono pt-4 text-white">{formatTime(seconds)}</h3>
            </div>

            {/* Interactive Breathing Guide Circle */}
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Pulsing Aura Rings */}
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0.3 }}
                    animate={{ 
                      scale: breathState === 'Inhale' ? 1.5 : breathState === 'Hold' ? 1.5 : 0.8,
                      opacity: breathState === 'Hold' ? 0.6 : 0.2
                    }}
                    transition={{ duration: 4, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-[#00C7BE]/10 rounded-full blur-2xl" 
                  />
                )}
              </AnimatePresence>

              {/* Central Expanding Circle */}
              <motion.div 
                animate={{ 
                  scale: breathState === 'Inhale' ? 1.3 : breathState === 'Hold' ? 1.3 : 0.8
                }}
                transition={{ duration: 4, ease: 'easeInOut' }}
                className="w-48 h-48 rounded-full bg-gradient-to-tr from-[#00C7BE] to-purple-600 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,199,190,0.3)]"
              >
                <motion.span 
                  key={breathState}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-2xl font-extrabold tracking-tight text-black"
                >
                  {breathState === 'Idle' ? 'Ready' : breathState}
                </motion.span>
              </motion.div>
            </div>

            {/* Controls */}
            <div className="mt-12 flex space-x-6">
              <button 
                onClick={() => setIsActive(!isActive)}
                className="px-8 py-4 bg-white text-black font-extrabold rounded-full flex items-center space-x-2 hover:bg-gray-200 transition shadow-lg shadow-white/10 hover:scale-[1.02]"
              >
                <Play className="w-5 h-5 fill-black" />
                <span>{isActive ? 'Pause' : 'Start Session'}</span>
              </button>
              <button 
                onClick={() => { setSeconds(180); setIsActive(false); setBreathState('Idle'); }}
                className="px-6 py-4 bg-white/5 border border-white/10 text-white font-extrabold rounded-full flex items-center space-x-2 hover:bg-white/10 transition"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
