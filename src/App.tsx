import React, { useState, useEffect } from 'react';
import { MainTab, ThemeMode } from './types';
import { Header } from './components/Header';
import { CropEncyclopedia } from './components/CropEncyclopedia';
import { AgriManagementSystem } from './components/AgriManagementSystem';
import { DAEHandbook } from './components/DAEHandbook';
import { SmartFarmingTools } from './components/SmartFarmingTools';
import { DistrictMap } from './components/DistrictMap';
import { DiseasesPestsSection } from './components/DiseasesPestsSection';
import { LandToolsAndGlossary } from './components/LandToolsAndGlossary';
import { DatabaseSecurityPortal } from './components/DatabaseSecurityPortal';
import { AiAgriAdvisor } from './components/AiAgriAdvisor';
import { Sprout, Phone } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('encyclopedia');
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  // Apply dark mode class to HTML root element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // When global search query is typed, automatically switch to Crop Encyclopedia
  useEffect(() => {
    if (globalSearchQuery && activeTab !== 'encyclopedia') {
      setActiveTab('encyclopedia');
    }
  }, [globalSearchQuery]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#0F1115] text-slate-900 dark:text-[#F8FAFC] font-sans transition-colors duration-200 selection:bg-emerald-500 selection:text-slate-950">
      {/* Bento Grid Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
        globalSearchQuery={globalSearchQuery}
        setGlobalSearchQuery={setGlobalSearchQuery}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'encyclopedia' && <CropEncyclopedia externalSearchQuery={globalSearchQuery} />}
        {activeTab === 'ams' && <AgriManagementSystem />}
        {activeTab === 'dae-handbook' && <DAEHandbook />}
        {activeTab === 'smart-tools' && <SmartFarmingTools />}
        {activeTab === 'crop-map' && <DistrictMap />}
        {activeTab === 'diseases-pests' && <DiseasesPestsSection activeCategoryTab="diseases" />}
        {activeTab === 'timber-medicinal' && <DiseasesPestsSection activeCategoryTab="timber" />}
        {activeTab === 'land-glossary' && <LandToolsAndGlossary />}
        {activeTab === 'db-security' && <DatabaseSecurityPortal />}
        {activeTab === 'ai-advisor' && <AiAgriAdvisor />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-[#2D3139] bg-white dark:bg-[#1A1D23] mt-12 py-8 text-xs text-slate-500 dark:text-[#94A3B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs">
              <Sprout className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200">KrishiHub BD (কৃষিহাব বাংলাদেশ)</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
              Smart Farming Ecosystem
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>জরুরি কৃষি হটলাইন: <strong className="text-emerald-600 dark:text-emerald-400">১৬১২৩ (টোল ফ্রি)</strong></span>
            <span>•</span>
            <span>PostgreSQL 17 & Laravel 12 Ready</span>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            © ২০২৬ KrishiHub BD। Bento Grid Ecosystem।
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
