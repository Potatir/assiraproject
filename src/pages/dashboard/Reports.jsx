import React from 'react';
import { BarChart3, Award, Sparkles, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Reports() {
  const correlations = [
    { title: "AirPods & Stress Levels", desc: "On days you listen to podcasts through AirPods in the morning, your daytime stress levels drop by 20%." },
    { title: "Screen Time & Deep Sleep Quality", desc: "Using your iPhone within an hour of going to bed reduces your deep sleep phase by 15%." }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight">AI Reports & Trends</h1>
        <p className="text-gray-400 mt-2 text-lg font-medium">Weekly summary of your physical wellness.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 glass rounded-[32px] p-8 flex flex-col justify-between min-h-[300px] bg-white/[0.02]"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <BarChart3 className="w-4 h-4 text-[#00C7BE]" />
            <span>Weekly Summary</span>
          </div>

          <div className="my-6">
            <p className="text-lg font-semibold leading-relaxed">
              You managed stress exceptionally well this week, but sleep consistency dropped by 12%. AI recommends balancing your sleep schedule.
            </p>
          </div>

          <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden">
            <div className="bg-[#00C7BE] h-full w-[82%]" />
          </div>
        </motion.div>

        {/* Prediction Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1 glass rounded-[32px] p-8 flex flex-col justify-between min-h-[300px] bg-white/[0.02] border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <TrendingDown className="w-4 h-4 text-[#FF2D55]" />
            <span>AI Forecasting</span>
          </div>

          <div className="my-6">
            <h3 className="text-2xl font-bold text-white">Burnout Risk by Friday</h3>
            <p className="text-sm text-gray-400 mt-2">
              If sleep quality doesn't improve, energy levels are expected to drop to 35% by Friday.
            </p>
          </div>

          <span className="text-[10px] font-extrabold tracking-widest text-[#FF2D55] uppercase">Critical Zone</span>
        </motion.div>
      </div>

      {/* Correlations Bento */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-[32px] p-8 bg-white/[0.02]"
      >
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-purple-400 uppercase mb-6">
          <Sparkles className="w-4 h-4" />
          <span>AI Correlations & Patterns</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {correlations.map((c, i) => (
            <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
              <h4 className="font-bold text-white text-lg">{c.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
