import React from 'react';
import { Moon, Heart, Activity, Droplet, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Sleep() {
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

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.header variants={cardVariants}>
        <h1 className="text-4xl font-extrabold tracking-tight">Sleep & Recovery</h1>
        <p className="text-gray-400 mt-2 text-lg font-medium">Detailed analysis of your last night.</p>
      </motion.header>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sleep Stages Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="lg:col-span-2 glass rounded-[32px] p-8 flex flex-col justify-between min-h-[420px] bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div>
            <div className="flex justify-between items-center text-xs font-bold tracking-widest text-gray-500 uppercase">
              <span className="flex items-center space-x-2">
                <Moon className="w-4 h-4 text-purple-400" />
                <span>Sleep Stages</span>
              </span>
            </div>
            <div className="mt-4 flex items-baseline space-x-2">
              <h2 className="text-5xl font-extrabold tracking-tight">7ч 24м</h2>
              <span className="text-sm text-gray-500 font-semibold">Time in Bed: 8h 10m</span>
            </div>

            {/* Apple Style Stages Visualizer */}
            <div className="mt-8 space-y-3 relative">
              {/* Timeline Y-axis Labels */}
              <div className="space-y-4 text-xs font-bold text-gray-600 w-24">
                <div>Awake</div>
                <div>REM</div>
                <div>Core</div>
                <div>Deep</div>
              </div>

              {/* Graphical Blocks mapped on timeline */}
              <div className="absolute left-24 right-0 top-0 bottom-0 flex flex-col justify-between py-1">
                {/* Awake Row */}
                <div className="relative h-2.5">
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute left-[15%] w-[3%] bg-[#FF2D55] h-full rounded-full" 
                  />
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute left-[65%] w-[3%] bg-[#FF2D55] h-full rounded-full" 
                  />
                </div>
                {/* REM Row */}
                <div className="relative h-2.5">
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute left-[25%] w-[12%] bg-[#32ADE6] h-full rounded-full" 
                  />
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute left-[58%] w-[10%] bg-[#32ADE6] h-full rounded-full" 
                  />
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute left-[80%] w-[8%] bg-[#32ADE6] h-full rounded-full" 
                  />
                </div>
                {/* Core Row */}
                <div className="relative h-2.5">
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute left-[5%] w-[20%] bg-gray-500 h-full rounded-full" 
                  />
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute left-[38%] w-[20%] bg-gray-500 h-full rounded-full" 
                  />
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="absolute left-[68%] w-[12%] bg-gray-500 h-full rounded-full" 
                  />
                </div>
                {/* Deep Row */}
                <div className="relative h-2.5">
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute left-[20%] w-[10%] bg-gray-700 h-full rounded-full" 
                  />
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="absolute left-[45%] w-[8%] bg-gray-700 h-full rounded-full" 
                  />
                </div>
              </div>

              {/* X-axis Timeline Markers */}
              <div className="flex justify-between pl-24 pt-4 text-xs font-semibold text-gray-500 border-t border-white/5">
                <span>23:00</span>
                <span>02:00</span>
                <span>05:00</span>
                <span>07:30</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-gray-400 mt-6 pt-4 border-t border-white/5">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF2D55]" />
              <span>Awake (2%)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#32ADE6]" />
              <span>REM (22%)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-gray-500" />
              <span>Core (58%)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-gray-700" />
              <span>Deep (18%)</span>
            </span>
          </div>
        </motion.div>

        {/* Sleep Debt Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="lg:col-span-1 glass rounded-[32px] p-8 flex flex-col justify-between min-h-[420px] bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
              <Moon className="w-4 h-4 text-[#FF2D55]" />
              <span>Sleep Debt</span>
            </div>
            <h3 className="text-5xl font-extrabold text-[#FF2D55] mt-6 tracking-tight">
              -3.5 <span className="text-xl font-bold">hours</span>
            </h3>
            <p className="text-sm font-medium text-gray-500 mt-2">Accumulated over the last 7 days.</p>
          </div>

          {/* Simple Vertical Bar Chart */}
          <div className="flex items-end justify-between h-36 px-2 mt-8">
            {[40, 60, 80, 50, 90].map((h, i) => (
              <div key={i} className="relative w-6 h-full flex items-end">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`w-full rounded-2xl ${i === 4 ? 'bg-[#FF2D55] shadow-[0_0_15px_rgba(255,45,85,0.3)]' : 'bg-white/10'}`}
                />
                {i === 4 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white" 
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI Recovery Analytics Card */}
      <motion.div 
        variants={cardVariants}
        className="glass rounded-[32px] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white/[0.02]"
      >
        <div className="flex items-start space-x-4 max-w-3xl">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-purple-400 mt-1">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">AI Recovery Analytics</span>
              <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 text-[10px] font-extrabold text-purple-400 rounded-full uppercase tracking-wider">High Confidence</span>
            </div>
            <p className="text-base text-gray-300 leading-relaxed font-semibold">
              Using iPhone before bed reduced deep sleep by 15%. Data analysis shows that screen time within 45 minutes of sleeping correlates with delayed deep sleep onset and elevated resting heart rate during the first hour of sleep.
            </p>
          </div>
        </div>
        <button className="whitespace-nowrap px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition duration-300 text-sm hover:scale-[1.02]">
          Configure Wind Down
        </button>
      </motion.div>

      {/* Recovery Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Resting Heart Rate */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="glass rounded-[32px] p-8 bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center justify-between text-xs font-bold tracking-widest text-gray-500 uppercase">
            <span>Resting Heart Rate</span>
            <Heart className="w-4 h-4 text-[#FF2D55] animate-pulse" />
          </div>
          <div className="mt-4">
            <h3 className="text-4xl font-extrabold">48 <span className="text-lg font-bold text-gray-500">bpm</span></h3>
            <p className="text-sm font-semibold text-[#00C7BE] mt-1">↓ -2 from average</p>
          </div>
          {/* Sparkline Wave */}
          <div className="h-12 mt-6">
            <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
              <motion.path 
                d="M0,15 C10,12 20,18 30,14 C40,10 50,15 60,11 C70,7 80,13 90,9 L100,12" 
                fill="none" 
                stroke="#FF2D55" 
                strokeWidth="2" 
                strokeLinecap="round" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Respiratory Rate */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="glass rounded-[32px] p-8 bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center justify-between text-xs font-bold tracking-widest text-gray-500 uppercase">
            <span>Respiratory Rate</span>
            <Activity className="w-4 h-4 text-[#00C7BE]" />
          </div>
          <div className="mt-4">
            <h3 className="text-4xl font-extrabold">14.2 <span className="text-lg font-bold text-gray-500">breaths/min</span></h3>
            <p className="text-sm font-semibold text-gray-500 mt-1">— Normal</p>
          </div>
          {/* Sparkline Wave */}
          <div className="h-12 mt-6">
            <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
              <motion.path 
                d="M0,10 L15,10 L30,10 L45,10 L60,10 L75,10 L90,10 L100,10" 
                fill="none" 
                stroke="#00C7BE" 
                strokeWidth="2" 
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Blood Oxygen */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="glass rounded-[32px] p-8 bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center justify-between text-xs font-bold tracking-widest text-gray-500 uppercase">
            <span>Blood Oxygen (SpO2)</span>
            <Droplet className="w-4 h-4 text-[#007AFF]" />
          </div>
          <div className="mt-4">
            <h3 className="text-4xl font-extrabold">98%</h3>
            <p className="text-sm font-semibold text-gray-500 mt-1">— Normal (95-100%)</p>
          </div>
          {/* Sparkline Wave */}
          <div className="h-12 mt-6">
            <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
              <motion.path 
                d="M0,8 C15,8 30,10 45,9 C60,8 75,7 90,8 L100,8" 
                fill="none" 
                stroke="#007AFF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.7 }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
