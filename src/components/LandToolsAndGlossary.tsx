import React, { useState } from 'react';
import { ACRONYM_GLOSSARY } from '../data/pestsDiseasesData';
import { Calculator, Book, Warehouse, ArrowRightLeft, Search, Layers, CheckCircle2 } from 'lucide-react';

export const LandToolsAndGlossary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'converter' | 'storage' | 'glossary'>('converter');

  // Converter States
  const [decimalVal, setDecimalVal] = useState<number>(33); // Default 1 Bigha (33 Decimals)

  // Calculations
  const sqFt = (decimalVal * 435.6).toFixed(1);
  const sqMeter = (decimalVal * 40.4686).toFixed(1);
  const katha = (decimalVal / 1.65).toFixed(2);
  const bigha = (decimalVal / 33).toFixed(2);
  const acre = (decimalVal / 100).toFixed(3);
  const hectare = (decimalVal / 247.105).toFixed(3);
  const kani = (decimalVal / 120).toFixed(2);
  const ganda = (decimalVal / 2).toFixed(1);

  const [searchGlossary, setSearchGlossary] = useState('');

  const filteredGlossary = ACRONYM_GLOSSARY.filter((g) => {
    if (!searchGlossary) return true;
    const q = searchGlossary.toLowerCase();
    return (
      g.acronym.toLowerCase().includes(q) ||
      g.fullNameEnglish.toLowerCase().includes(q) ||
      g.fullNameBengali.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Bento Grid Header */}
      <div className="bento-card bg-gradient-to-br from-[#1A1D23] to-[#111418] border-[#2D3139]">
        <div className="bento-title">
          <span className="bento-title-icon">◆</span> ল্যান্ড টুলস ও শব্দকোষ (Land Tools & Glossary)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
          জমি পরিমাপক, সংরক্ষণ প্রযুক্তি ও শব্দকোষ
        </h2>
        <p className="text-xs text-[#94A3B8] mt-1 max-w-3xl leading-relaxed">
          শতক, কাঠা, বিঘা, একর, হেক্টর, কানি ও গণ্ডা রূপান্তরক, জিরো-এনার্জি কুল চেম্বার সংরক্ষণ প্রযুক্তি ও ২০০+ কৃষি সংক্ষিপ্ত শব্দকোষ।
        </p>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('converter')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'converter'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300'
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>জমি পরিমাপক (Land Unit Converter)</span>
        </button>

        <button
          onClick={() => setActiveTab('storage')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'storage'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300'
          }`}
        >
          <Warehouse className="w-3.5 h-3.5" />
          <span>সংরক্ষণ প্রযুক্তি (Storage Tech)</span>
        </button>

        <button
          onClick={() => setActiveTab('glossary')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'glossary'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300'
          }`}
        >
          <Book className="w-3.5 h-3.5" />
          <span>২০০+ কৃষি সংক্ষিপ্ত শব্দকোষ (A-Z Glossary)</span>
        </button>
      </div>

      {/* --- TAB 1: LAND CONVERTER --- */}
      {activeTab === 'converter' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                রিয়েল-টাইম একাই রূপান্তরক (Instant Land Unit Converter)
              </h3>
              <p className="text-xs text-slate-500">শতক / ডেসিমেল মান লিখলেই স্বয়ংক্রিয়ভাবে সকল এককে পরিবর্তিত হবে।</p>
            </div>
            <ArrowRightLeft className="w-5 h-5 text-emerald-500" />
          </div>

          <div className="max-w-md">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              জমির পরিমাণ (শতক / ডেসিমেল / Satak):
            </label>
            <input
              type="number"
              value={decimalVal}
              onChange={(e) => setDecimalVal(Number(e.target.value))}
              className="w-full text-base font-bold p-3 rounded-xl border border-emerald-500/40 bg-slate-50 dark:bg-slate-950 text-emerald-600 dark:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block font-sans">বিঘা (Bigha):</span>
              <strong className="text-sm text-slate-900 dark:text-slate-100">{bigha} বিঘা</strong>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block font-sans">কাঠা (Katha):</span>
              <strong className="text-sm text-slate-900 dark:text-slate-100">{katha} কাঠা</strong>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block font-sans">একর (Acre):</span>
              <strong className="text-sm text-emerald-600 dark:text-emerald-400">{acre} একর</strong>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block font-sans">হেক্টর (Hectare):</span>
              <strong className="text-sm text-emerald-600 dark:text-emerald-400">{hectare} হেক্টর</strong>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block font-sans">বর্গফুট (Sq. Feet):</span>
              <strong className="text-sm text-slate-900 dark:text-slate-100">{sqFt} sq ft</strong>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block font-sans">বর্গমিটার (Sq. Meter):</span>
              <strong className="text-sm text-slate-900 dark:text-slate-100">{sqMeter} sq m</strong>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block font-sans">কানি (চট্টগ্রাম/সিলেট):</span>
              <strong className="text-sm text-slate-900 dark:text-slate-100">{kani} কানি</strong>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block font-sans">গণ্ডা (Ganda):</span>
              <strong className="text-sm text-slate-900 dark:text-slate-100">{ganda} গণ্ডা</strong>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2: STORAGE TECH --- */}
      {activeTab === 'storage' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              বিদ্যুৎহীন প্রযুক্তি
            </span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              জিরো-এনার্জি কুল চেম্বার (Zero-Energy Cool Chamber - ZECC)
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              ইটের জোড়া দেয়ালের মাঝখানে ভেজা বালু রেখে বাসাবাড়িতে বিদ্যুৎ ছাড়াই টমেটো, শাকসবজি ও ফলমূল ১০-১৫ দিন সতেজ রাখার সাশ্রয়ী দেশীয় প্রযুক্তি।
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              দানা শস্য সংরক্ষণ
            </span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              উন্নত প্লাস্টিক ও মেটাল ক্রপ সাইলো (Grain Storage Silos)
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              ১৪% বা তার কম আর্দ্রতায় ধান, গম ও ভুট্টার বীজ এয়ারটাইট পাত্রে সাইলোতে রাখলে ১ বছর পর্যন্ত পোকা-মাকড় ও আর্দ্রতামুক্ত থাকে।
            </p>
          </div>
        </div>
      )}

      {/* --- TAB 3: ACRONYM GLOSSARY --- */}
      {activeTab === 'glossary' && (
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchGlossary}
              onChange={(e) => setSearchGlossary(e.target.value)}
              placeholder="সংক্ষিপ্ত রূপ বা পূর্ণ রূপ খুঁজুন (যেমন: BARI, BRRI, DAE)..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filteredGlossary.map((item, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    {item.acronym}
                  </span>
                  <span className="text-[10px] text-slate-400">{item.category}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{item.fullNameBengali}</h4>
                <p className="text-[11px] text-slate-500 italic font-serif">{item.fullNameEnglish}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
