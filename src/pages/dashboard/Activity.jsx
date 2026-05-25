import React from 'react';
import { Activity as ActivityIcon, Smartphone, Watch, Battery, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Activity() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight">Activity & Lifestyle</h1>
        <p className="text-gray-400 mt-2 text-lg font-medium">How movement and daily habits impact your health.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Balance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 glass rounded-[32px] p-8 flex flex-col justify-between min-h-[300px] bg-white/[0.02]"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <ActivityIcon className="w-4 h-4 text-[#FF2D55]" />
            <span>Activity Balance</span>
          </div>

          <div className="my-6 grid grid-cols-2 gap-8 pt-4">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase">Active Movement</span>
              <h3 className="text-4xl font-extrabold mt-1 text-[#FF2D55]">5,240 <span className="text-base font-medium">steps</span></h3>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase">Sedentary Time</span>
              <h3 className="text-4xl font-extrabold mt-1 text-gray-400">6h 45m</h3>
            </div>
          </div>

          <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden flex">
            <div className="bg-[#FF2D55] h-full w-[65%]" />
            <div className="bg-gray-700 h-full w-[35%]" />
          </div>
        </motion.div>

        {/* Screen Time Integration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1 glass rounded-[32px] p-8 flex flex-col justify-between min-h-[300px] bg-white/[0.02]"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <Smartphone className="w-4 h-4 text-[#007AFF]" />
            <span>Screen Time (iPhone)</span>
          </div>

          <div className="my-6">
            <h3 className="text-5xl font-extrabold text-white">5h 20m</h3>
            <p className="text-sm font-semibold text-[#FF2D55] mt-2">↑ 25% higher than average</p>
          </div>

          <p className="text-xs font-semibold text-gray-500 leading-relaxed uppercase">
            Synced via iCloud
          </p>
        </motion.div>
      </div>

      {/* Battery Energy Level */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-[32px] p-8 bg-white/[0.02]"
      >
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">
          <Battery className="w-4 h-4 text-emerald-400" />
          <span>Body Battery (Energy Level)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-4xl font-extrabold">Current Level: 72%</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your body battery is in the optimal zone due to high-quality deep sleep last night.
            </p>
          </div>
          {/* Visual Battery Bar */}
          <div className="h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center p-1.5 relative overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-xl" style={{ width: '72%' }} />
            <div className="absolute inset-0 flex items-center justify-center font-extrabold text-sm text-white">
              72% RECHARGED
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
