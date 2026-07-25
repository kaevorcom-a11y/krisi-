import React from 'react';
import { MainTab, ThemeMode } from '../types';
import {
  BookOpen,
  ShoppingBag,
  BookMarked,
  Wrench,
  Map,
  Bug,
  Trees,
  Calculator,
  ShieldCheck,
  Bot,
  Sun,
  Moon,
  Search,
  Sprout,
  Menu,
  X
} from 'lucide-react';

interface HeaderProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  globalSearchQuery: string;
  setGlobalSearchQuery: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  theme,
  setTheme,
  globalSearchQuery,
  setGlobalSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: MainTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'encyclopedia', label: 'ফসল বিশ্বকোষ', icon: <BookOpen className="w-4 h-4" />, badge: '১০০০+' },
    { id: 'ams', label: 'কৃষি ব্যবস্থাপনা (AMS)', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'dae-handbook', label: 'DAE ডায়েরি', icon: <BookMarked className="w-4 h-4" /> },
    { id: 'smart-tools', label: 'স্মার্ট টুলস', icon: <Wrench className="w-4 h-4" /> },
    { id: 'crop-map', label: '৬৪ জেলা ম্যাপ', icon: <Map className="w-4 h-4" /> },
    { id: 'diseases-pests', label: 'রোগ ও পোকা', icon: <Bug className="w-4 h-4" /> },
    { id: 'timber-medicinal', label: 'বৃক্ষ ও ভেষজ', icon: <Trees className="w-4 h-4" /> },
    { id: 'land-glossary', label: 'জমি পরিমাপক', icon: <Calculator className="w-4 h-4" /> },
    { id: 'db-security', label: 'DB & Security', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'ai-advisor', label: 'কৃষি AI পরামর্শক', icon: <Bot className="w-4 h-4" />, badge: 'Gemini' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/20 dark:border-emerald-800/30 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors duration-200">
      {/* Top Banner Bar */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white text-xs py-1 px-4 flex items-center justify-between font-medium">
        <div className="flex items-center gap-2">
          <Sprout className="w-3.5 h-3.5" />
          <span>🌾 KrishiHub Bangladesh — একটি প্ল্যাটফর্মে বাংলাদেশের সকল কৃষি তথ্য</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] opacity-90">
          <span>জরুরি কৃষি হটলাইন: <strong>১৬১২৩ (টোল ফ্রি)</strong></span>
          <span>• DAE & BARI স্বীকৃত পোর্টাল</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('encyclopedia')}>
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 font-bold flex items-center justify-center shadow-md shadow-emerald-500/20 ring-1 ring-emerald-400">
              <Sprout className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  KrishiHub <span className="text-emerald-500">BD</span>
                </h1>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  Bento Grid
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Smart Farming Ecosystem • ১,০৫৮+ ফসল, AMS, DAE গাইড ও AI উপদেষ্টা
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={globalSearchQuery}
                onChange={(e) => setGlobalSearchQuery(e.target.value)}
                placeholder="বাংলা বা ইংরেজি নাম লিখুন... (উদা: বোরো ধান, ১৬১২৩)..."
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-[#2D3139] bg-white dark:bg-[#1A1D23] text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
              {globalSearchQuery && (
                <button
                  onClick={() => setGlobalSearchQuery('')}
                  className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Actions: Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={theme === 'dark' ? 'লাইট মোড' : 'ডার্ক মোড'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="mt-2 md:hidden">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              placeholder="ফসল, বীজ বা রোগ খুঁজুন..."
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
        </div>

        {/* Desktop Tab Navigation Bar */}
        <nav className="mt-3 hidden md:flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none border-t border-slate-200/60 dark:border-slate-800/60 pt-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`ml-0.5 text-[10px] px-1 py-0.2 rounded font-mono ${
                    isActive ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-mono">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
