import React, { useState } from 'react';
import { PESTS_AND_DISEASES } from '../data/pestsDiseasesData';
import { Bug, ShieldAlert, CheckCircle2, Trees, Leaf, Search, AlertTriangle } from 'lucide-react';

export const DiseasesPestsSection: React.FC<{ activeCategoryTab?: 'diseases' | 'timber' }> = ({
  activeCategoryTab = 'diseases',
}) => {
  const [tab, setTab] = useState<'diseases' | 'pests' | 'ipm'>('diseases');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = PESTS_AND_DISEASES.filter((item) => {
    if (tab === 'diseases' && item.type !== 'disease') return false;
    if (tab === 'pests' && item.type !== 'pest') return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.nameBengali.toLowerCase().includes(q) ||
        item.nameEnglish.toLowerCase().includes(q) ||
        item.affectedCrops.some((c) => c.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Bento Grid Header */}
      <div className="bento-card bg-gradient-to-br from-[#1A1D23] to-[#111418] border-[#2D3139]">
        <div className="bento-title">
          <span className="bento-title-icon">◆</span> রোগবালাই ও আইপিএম (Diseases & Pests)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
          রোগবালাই, ক্ষতিকর পোকা ও আইপিএম বিশ্বকোষ
        </h2>
        <p className="text-xs text-[#94A3B8] mt-1 max-w-3xl leading-relaxed">
          বাংলাদেশের ফসলের প্রধান প্রধান ছত্রাক ও জীবাণুঘটিত রোগ, ক্ষতিকর পোকা-মাকড় চেনার লক্ষণ, রাসায়নিক ও জৈব আইপিএম সমাধান।
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-[#2D3139] pb-2">
        <button
          onClick={() => setTab('diseases')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            tab === 'diseases'
              ? 'bg-[#10B981] text-slate-950 font-bold'
              : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border border-slate-200 dark:border-[#2D3139]'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>রোগবালাই (Disease Encyclopedia)</span>
        </button>

        <button
          onClick={() => setTab('pests')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            tab === 'pests'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300'
          }`}
        >
          <Bug className="w-3.5 h-3.5" />
          <span>পোকা-মাকড় (Pest Encyclopedia)</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="রোগ বা পোকার নাম খুঁজুন (যেমন: ব্লাস্ট, মাজরা, আলুর ধসা)..."
          className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
        />
      </div>

      {/* Items List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <div>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300">
                  তীব্রতা: {item.severity}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">{item.nameBengali}</h3>
                <span className="text-[11px] text-slate-400 italic font-serif">{item.nameEnglish}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">আক্রান্ত ফসল:</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {item.affectedCrops.join(', ')}
                </span>
              </div>
            </div>

            {/* Symptoms */}
            <div className="space-y-1 text-xs">
              <h4 className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                <span>প্রধান লক্ষণসমূহ:</span>
              </h4>
              <ul className="list-disc pl-5 space-y-0.5 text-slate-600 dark:text-slate-400">
                {item.symptoms.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            {/* Controls Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs border-t border-slate-100 dark:border-slate-800 font-mono">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                <span className="text-slate-400 block text-[10px] font-sans font-semibold">অনুমোদিত ওষুধ/রাসায়নিক:</span>
                <p className="text-slate-800 dark:text-slate-200">{item.chemicalControl.join(', ')}</p>
              </div>

              <div className="p-2.5 rounded bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/30">
                <span className="text-emerald-600 dark:text-emerald-400 block text-[10px] font-sans font-semibold">
                  জৈব আইপিএম (IPM) সমাধান:
                </span>
                <p className="text-emerald-800 dark:text-emerald-300">{item.organicIpmControl.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
