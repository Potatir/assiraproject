import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, Moon, Brain, Activity, BarChart3, Settings, LogOut, Shield, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Sleep & Recovery', path: '/dashboard/sleep', icon: Moon },
    { name: 'Stress & Mindfulness', path: '/dashboard/stress', icon: Brain },
    { name: 'Activity & Lifestyle', path: '/dashboard/activity', icon: Activity },
    { name: 'AI Reports & Trends', path: '/dashboard/reports', icon: BarChart3 },
    { name: 'Ecosystem & Settings', path: '/dashboard/settings', icon: Settings },
  ];

  const SidebarContent = () => (
    <>
      <div className="space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative p-2.5 bg-white/5 rounded-2xl border border-white/10">
              <Shield className="w-6 h-6 text-[#FF2D55]" />
              <Sparkles className="w-3 h-3 text-[#00C7BE] absolute top-1 right-1 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Guardian AI</h2>
              <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Premium Wellness</p>
            </div>
          </div>
          {/* Close button for mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="lg:hidden p-2 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/dashboard'}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-4 px-4 py-3.5 rounded-[20px] transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/10 text-white border border-white/10 shadow-lg shadow-black/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-semibold text-[15px]">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="space-y-4 pt-6 border-t border-white/5">
        <button className="w-full py-4 bg-[#00C7BE] hover:bg-[#00C7BE]/90 text-black font-bold rounded-2xl transition duration-300 shadow-lg shadow-[#00C7BE]/15 text-sm tracking-wide">
          Schedule Check-up
        </button>
        
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm text-white shadow-md">
              A
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Alex</h4>
              <p className="text-[11px] text-gray-500">Premium ID</p>
            </div>
          </div>
          <Link to="/" className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition duration-300">
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans relative">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-80 bg-[#1C1C1E] border-r border-white/5 flex-col justify-between p-6 shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Top Header - z-30 makes sure it sits above standard content */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-30 glass bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-[#FF2D55]" />
          <span className="font-bold text-base">Guardian AI</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - z-40 sits above header and main content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black z-40"
            />
            {/* Drawer - z-50 sits above everything else */}
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-[#1C1C1E] border-r border-white/5 z-50 flex flex-col justify-between p-6"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-black p-6 md:p-8 pt-24 lg:pt-8 relative w-full">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electricBlue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto z-10 relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
