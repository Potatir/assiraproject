import React, { useState } from 'react';
import { Settings as SettingsIcon, Watch, Smartphone, Headphones, Shield, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Settings() {
  const [onDevice, setOnDevice] = useState(true);
  const [cloudSync, setCloudSync] = useState(false);

  const devices = [
    { name: "Apple Watch Series 9", type: "Watch", battery: 84, icon: Watch, status: "Connected" },
    { name: "iPhone 15 Pro", type: "Smartphone", battery: 92, icon: Smartphone, status: "Connected" },
    { name: "AirPods Pro 2", type: "Headphones", battery: 100, icon: Headphones, status: "Connected" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight">Ecosystem & Settings</h1>
        <p className="text-gray-400 mt-2 text-lg font-medium">Manage connections and Apple's privacy ecosystem.</p>
      </header>

      {/* Connected Devices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {devices.map((device, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-[32px] p-6 flex flex-col justify-between min-h-[200px] bg-white/[0.02]"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-[#00C7BE]">
                <device.icon className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-0.5 bg-emerald-500/10 rounded-full text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider">
                {device.status}
              </span>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-lg text-white">{device.name}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex-1 bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#00C7BE] h-full" style={{ width: `${device.battery}%` }} />
                </div>
                <span className="text-xs font-bold text-gray-400">{device.battery}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Privacy & Health Sync Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* On-Device AI */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-[32px] p-8 flex flex-col justify-between min-h-[300px] bg-white/[0.02]"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-purple-400 uppercase">
            <Shield className="w-4 h-4" />
            <span>Privacy & Data</span>
          </div>

          <div className="space-y-4 my-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-lg">On-Device AI Processing</h4>
                <p className="text-sm text-gray-500">Health data analysis takes place locally on your Apple devices.</p>
              </div>
              <button 
                onClick={() => setOnDevice(!onDevice)}
                className={`w-12 h-6 rounded-full p-1 transition duration-300 ${onDevice ? 'bg-[#00C7BE]' : 'bg-gray-700'}`}
              >
                <div className={`bg-black w-4 h-4 rounded-full transition duration-300 ${onDevice ? 'translate-x-6' : ''}`} />
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div>
                <h4 className="font-bold text-white text-lg">iCloud Synchronization</h4>
                <p className="text-sm text-gray-500">Secure cloud backup for health logs.</p>
              </div>
              <button 
                onClick={() => setCloudSync(!cloudSync)}
                className={`w-12 h-6 rounded-full p-1 transition duration-300 ${cloudSync ? 'bg-[#00C7BE]' : 'bg-gray-700'}`}
              >
                <div className={`bg-black w-4 h-4 rounded-full transition duration-300 ${cloudSync ? 'translate-x-6' : ''}`} />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-gray-500 font-semibold uppercase">
            <ShieldCheck className="w-4 h-4 text-[#00C7BE]" />
            <span>Securely Encrypted</span>
          </div>
        </motion.div>

        {/* HealthKit Permissions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-[32px] p-8 flex flex-col justify-between min-h-[300px] bg-white/[0.02]"
        >
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-[#00C7BE] uppercase">
            <Watch className="w-4 h-4" />
            <span>Apple HealthKit Integration</span>
          </div>

          <div className="space-y-3 my-6">
            {["Stress Levels & HRV", "Sleep Stages", "Blood Oxygen during sleep", "Activity & Steps"].map((perm, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 text-sm">
                <span className="font-semibold text-gray-300">{perm}</span>
                <span className="text-xs font-bold text-emerald-400">ALLOWED</span>
              </div>
            ))}
          </div>

          <button className="w-full py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl transition duration-300 text-sm">
            Configure Apple Health Permissions
          </button>
        </motion.div>
      </div>
    </div>
  );
}
