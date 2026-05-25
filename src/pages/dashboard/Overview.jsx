import React from 'react';
import { Sparkles, Moon, Droplet, Zap, Check, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Overview() {
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
        <h1 className="text-4xl font-extrabold tracking-tight">Overview</h1>
        <p className="text-gray-400 mt-2 text-lg font-medium">Your wellness summary for today.</p>
      </motion.header>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wellness Score Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="lg:col-span-1 glass rounded-[32px] p-8 flex flex-col items-center justify-between min-h-[380px] bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center space-x-2 self-start text-xs font-bold tracking-widest text-gray-500 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00C7BE] animate-pulse" />
            <span>Wellness Score</span>
          </div>

          <div className="relative w-48 h-48 my-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.05)" strokeWidth="7" fill="none" />
              <motion.circle 
                cx="50" 
                cy="50" 
                r="42" 
                stroke="#00C7BE" 
                strokeWidth="7" 
                fill="none" 
                strokeDasharray="263.89" 
                initial={{ strokeDashoffset: 263.89 }}
                animate={{ strokeDashoffset: 58.05 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                strokeLinecap="round" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-6xl font-extrabold tracking-tighter"
              >
                78
              </motion.span>
              <span className="text-xs text-gray-500 tracking-wider uppercase font-semibold mt-1">/ 100</span>
            </div>
          </div>

          <div className="text-center space-y-1">
            <h3 className="text-2xl font-bold tracking-tight text-white">Optimal State</h3>
            <p className="text-sm font-semibold text-[#00C7BE]">+2 points since yesterday</p>
          </div>
        </motion.div>

        {/* AI Smart Stack Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="lg:col-span-2 glass rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>AI Smart Insights</span>
            </div>
            <button className="text-gray-500 hover:text-white transition">
              <span className="text-lg">•••</span>
            </button>
          </div>

          <div className="my-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold leading-snug tracking-tight text-white max-w-2xl"
            >
              "Busy day ahead, but you only slept 5 hours. Recommendation: <span className="underline decoration-[#FF2D55] decoration-3 underline-offset-4">Skip the evening workout</span>."
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5">
            <button className="flex-1 py-4 bg-white hover:bg-gray-200 text-black font-bold rounded-2xl transition duration-300 flex items-center justify-center space-x-2 text-[15px] hover:scale-[1.02]">
              <Check className="w-5 h-5" />
              <span>Accept Plan</span>
            </button>
            <button className="flex-1 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl transition duration-300 flex items-center justify-center space-x-2 text-[15px] hover:scale-[1.02]">
              <Calendar className="w-5 h-5" />
              <span>Modify Schedule</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stress Level */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="glass rounded-[32px] p-8 flex flex-col justify-between min-h-[220px] bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <Droplet className="w-4 h-4 text-[#00C7BE]" />
            <span>Stress Level</span>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-white">Low</h3>
            {/* Slider bar */}
            <div className="w-full bg-white/5 h-2 rounded-full mt-4 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '25%' }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                className="bg-[#00C7BE] h-full" 
              />
            </div>
          </div>
        </motion.div>

        {/* Sleep Quality */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="glass rounded-[32px] p-8 flex flex-col justify-between min-h-[220px] bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <Moon className="w-4 h-4 text-[#007AFF]" />
            <span>Sleep Quality</span>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-white">5h 12m</h3>
            <p className="text-sm font-semibold text-[#FF2D55] mt-2">↓ Below average</p>
          </div>
        </motion.div>

        {/* Energy Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.15)' }}
          className="glass rounded-[32px] p-8 flex flex-col justify-between min-h-[220px] bg-white/[0.02] cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Energy Level</span>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-white">64%</h3>
            {/* Segmented bar */}
            <div className="flex space-x-1.5 h-2 mt-4">
              {[0.2, 0.3, 0.4, 0.5, 0.6].map((delay, index) => (
                <motion.div 
                  key={index}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: index === 3 ? 1 : index === 4 ? 0.05 : 0.2 }}
                  transition={{ duration: 0.5, delay: delay }}
                  className={`flex-1 rounded-full h-full ${index === 3 ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-white'}`} 
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
