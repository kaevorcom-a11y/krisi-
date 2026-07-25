import React, { useState } from 'react';
import { DAE_12_MONTHS_GUIDE, OFFICIAL_SEED_RATES, EMERGENCY_HOTLINES } from '../data/daeHandbookData';
import { BookMarked, Phone, Calendar, Calculator, CheckCircle2, Sprout, ArrowRight, ShieldAlert } from 'lucide-react';

export const DAEHandbook: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(0); // 0 = Baishakh
  const activeMonthData = DAE_12_MONTHS_GUIDE[selectedMonth];

  return (
    <div className="space-y-6">
      {/* Bento Grid Header */}
      <div className="bento-card bg-gradient-to-br from-[#1A1D23] to-[#111418] border-[#2D3139]">
        <div className="bento-title">
          <span className="bento-title-icon">◆</span> DAE নির্দেশিকা (Official DAE Handbook)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
          সরকারী কৃষি ডায়েরি বই (Official DAE Handbook)
        </h2>
        <p className="text-xs text-[#94A3B8] mt-1 max-w-3xl leading-relaxed">
          কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও কৃষি তথ্য সার্ভিস (AIS) নির্দেশিত ১২ মাসের চাষাবাদ গাইড, অফিশিয়াল বীজ হার এবং ১৬১২৩ জরুরি হটলাইন ডিরেক্টরি।
        </p>
      </div>

      {/* 12-Month Selector Grid */}
      <div className="space-y-3">
        <h3 className="bento-title">
          <span className="bento-title-icon">◆</span> অফিশিয়াল ১২ মাসের কৃষি কাজ নির্দেশিকা (বৈশাখ - চৈত্র)
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {DAE_12_MONTHS_GUIDE.map((m, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMonth(idx)}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                selectedMonth === idx
                  ? 'bg-[#10B981] text-slate-950 border-[#10B981] shadow-md font-bold'
                  : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border-slate-200 dark:border-[#2D3139] hover:border-[#10B981]'
              }`}
            >
              <div className="text-xs font-bold">{m.monthNameBengali}</div>
              <div className="text-[10px] opacity-80 mt-0.5 font-mono">{m.seasonName}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Month Details */}
      <div className="bento-card space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#2D3139] pb-3">
          <div>
            <span className="bento-badge mb-1">
              {activeMonthData.seasonName} মৌসুম
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-[#F8FAFC]">
              {activeMonthData.monthNameBengali} মাসের কৃষি কাজ নির্দেশিকা ({activeMonthData.monthNameEnglish})
            </h3>
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            {activeMonthData.keyCrops.map((c, i) => (
              <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeMonthData.tasks.map((task, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {task.title}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {task.cropCategory}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 pl-5 leading-relaxed">
                {task.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Official Seed Rate & Spacing Table */}
      <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <Calculator className="w-4 h-4 text-emerald-500" />
          <span>অফিসিয়াল বীজ হার ও রোপণ দূরত্ব সারণি (DAE Standard Seed Rate)</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 font-mono border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-2.5">ফসল</th>
                <th className="p-2.5">বিঘা প্রতি অনুমোদিত বীজ</th>
                <th className="p-2.5">শতক প্রতি বীজ</th>
                <th className="p-2.5">রোপণ দূরত্ব (সারি x চারা)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {OFFICIAL_SEED_RATES.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/50">
                  <td className="p-2.5 font-bold text-slate-900 dark:text-slate-100">{row.crop}</td>
                  <td className="p-2.5 font-mono text-emerald-600 dark:text-emerald-400">{row.unitBigha}</td>
                  <td className="p-2.5 font-mono">{row.unitDecimal}</td>
                  <td className="p-2.5 font-mono text-slate-500">{row.spacing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Emergency Hotline Directory */}
      <div className="p-5 rounded-xl bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/30 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              জরুরি কৃষি হটলাইন ও ইনস্টিটিউট ডিরেক্টরি (Emergency Hotlines)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              ১৬১২৩ টোল-ফ্রি সরাসরি কৃষি সেবা ও বৈজ্ঞানিক ইনস্টিটিউটের হেল্পলাইন
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {EMERGENCY_HOTLINES.map((hotline, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-emerald-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {hotline.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{hotline.hours}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{hotline.institution}</h4>
                <p className="text-[11px] text-slate-500 mt-1">{hotline.tagline}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {hotline.number}
                </span>
                <a
                  href={`tel:${hotline.number}`}
                  className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold"
                >
                  কল করুন
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
