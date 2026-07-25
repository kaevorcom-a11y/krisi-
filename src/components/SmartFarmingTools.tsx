import React, { useState, useEffect } from 'react';
import { DiaryNote, Season, SoilType } from '../types';
import {
  Wrench,
  Sparkles,
  Calendar,
  Calculator,
  BookOpen,
  Plus,
  Trash2,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Layers,
  Sprout,
  Info
} from 'lucide-react';

export const SmartFarmingTools: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'planner' | 'timeline' | 'profit-calc' | 'farm-diary'>('planner');

  // --- 1. SMART CROP PLANNER STATE ---
  const [district, setDistrict] = useState('দিনাজপুর');
  const [soilType, setSoilType] = useState<SoilType>('দোআঁশ');
  const [landSizeDecimal, setLandSizeDecimal] = useState<number>(33); // 1 Bigha default
  const [season, setSeason] = useState<Season>('রবি');
  const [hasIrrigation, setHasIrrigation] = useState(true);
  const [plannerResult, setPlannerResult] = useState<any | null>(null);

  const handleCalculatePlan = () => {
    // Recommendation logic based on inputs
    let recommendedCrops = ['ব্রি ধান২৮ (বোরো ধান)', 'বারি সরিষা-১৪', 'হাইব্রিড ভুট্টা', 'ডায়মন্ড আলু'];
    if (season === 'খরিপ-১') recommendedCrops = ['আউশ ধান', 'তোষা পাট', 'গ্রীষ্মকালীন মরিচ', 'পেঁপে'];
    if (season === 'খরিপ-২') recommendedCrops = ['ব্রি ধান৮৭ (আমন ধান)', 'সুগন্ধি ব্রি ধান৩৪', 'আখ'];

    const estimatedCost = landSizeDecimal * 600; // ~600 BDT per decimal
    const estimatedYieldMaunds = Math.round((landSizeDecimal / 33) * 25); // ~25 maunds per bigha
    const estimatedRevenue = estimatedYieldMaunds * 1350; // BDT 1350 per maund
    const estimatedNetProfit = estimatedRevenue - estimatedCost;

    setPlannerResult({
      recommendedCrops,
      estimatedCost,
      estimatedYieldMaunds,
      estimatedRevenue,
      estimatedNetProfit,
      fertilizerSchedule: {
        urea: `${(landSizeDecimal * 1.0).toFixed(1)} কেজি`,
        tsp: `${(landSizeDecimal * 0.5).toFixed(1)} কেজি`,
        mop: `${(landSizeDecimal * 0.6).toFixed(1)} কেজি`,
        gypsum: `${(landSizeDecimal * 0.4).toFixed(1)} কেজি`,
      },
    });
  };

  // --- 2. FARMING TIMELINE STATE ---
  const [currentDay, setCurrentDay] = useState(25);
  const timelineSteps = [
    { day: 1, title: '১ম দিন: গভীর চাষ ও মাটির পিএইচ (pH) পরীক্ষা', desc: 'জমিতে ৩-৪ টি গভীর চাষ দিয়ে আগাছা পরিষ্কার করা ও জৈব গোবর সার প্রয়োগ।', completed: currentDay >= 1 },
    { day: 10, title: '১০ম দিন: মই দিয়ে জমি সমতল করা ও শেষ চাষে সার', desc: 'টিএসপি, এমওপি, জিপসাম ও জিংক সার মাটিতে মিশিয়ে মই দেওয়া।', completed: currentDay >= 10 },
    { day: 15, title: '১৫তম দিন: চারা রোপণ বা বীজ বপন', desc: '২৫-৩০ দিন বয়সের সুস্থ চারা ২০x১৫ সেমি দূরত্বে ২-৩ সেমি গভীরে সোজা রোপণ।', completed: currentDay >= 15 },
    { day: 30, title: '৩০তম দিন: ১ম কিস্তির ইউরিয়া ও নিড়ানি', desc: '১ম কিস্তির ইউরিয়া উপরি প্রয়োগ ও নিড়ানি দিয়ে হালকা আগাছা দমন।', completed: currentDay >= 30 },
    { day: 60, title: '৬০তম দিন: কাইচ থোড় ও সেচ পর্যায়', desc: '২য় কিস্তির ইউরিয়া প্রয়োগ ও ৫ সেমি পানি ধরে রাখা। মাজরা পোকা নজরদারি।', completed: currentDay >= 60 },
    { day: 90, title: '৯০তম দিন: ফুল ও থোড় পর্যায়', desc: 'ব্লাস্ট ও খোলপোড়া রোগের আগাম স্প্রে এবং সেচ নিয়ন্ত্রণ।', completed: currentDay >= 90 },
    { day: 120, title: '১২০তম দিন: ৮০% সোনালী পাকার পর ফসল সংগ্রহ', desc: 'ফসল কেটে মাড়াই ও ১৪% কম আর্দ্রতায় শুকিয়ে এয়ারটাইট পাত্রে সংরক্ষণ।', completed: currentDay >= 120 },
  ];

  // --- 3. COST & PROFIT CALCULATOR STATE ---
  const [seedCost, setSeedCost] = useState(1500);
  const [fertilizerCost, setFertilizerCost] = useState(4500);
  const [laborCost, setLaborCost] = useState(6000);
  const [irrigationCost, setIrrigationCost] = useState(2500);
  const [expectedMaunds, setExpectedMaunds] = useState(30);
  const [pricePerMaundCalc, setPricePerMaundCalc] = useState(1300);

  const totalInputCost = seedCost + fertilizerCost + laborCost + irrigationCost;
  const totalExpectedRevenue = expectedMaunds * pricePerMaundCalc;
  const netProfitCalc = totalExpectedRevenue - totalInputCost;
  const roiPercentage = totalInputCost > 0 ? ((netProfitCalc / totalInputCost) * 100).toFixed(1) : '0';

  // --- 4. FARM DIARY (LOCALSTORAGE PERSISTENCE) ---
  const [notes, setNotes] = useState<DiaryNote[]>(() => {
    const saved = localStorage.getItem('krishihub_farm_notes');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return []; }
    }
    return [
      { id: 'n-1', landName: 'উত্তর খামার জমি (১ বিঘা)', cropName: 'ব্রি ধান২৮', date: '২০২৬-০৭-২০', expenseBDT: 1500, expenseCategory: 'বীজ', note: 'বিএডিসি থেকে শোধিত বীজ কিনে এনেছি।' },
    ];
  });

  const [newLandName, setNewLandName] = useState('');
  const [newCropName, setNewCropName] = useState('');
  const [newExpenseBDT, setNewExpenseBDT] = useState<number>(0);
  const [newExpenseCat, setNewExpenseCat] = useState<any>('বীজ');
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    localStorage.setItem('krishihub_farm_notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLandName || !newCropName) return;

    const entry: DiaryNote = {
      id: `n-${Date.now()}`,
      landName: newLandName,
      cropName: newCropName,
      date: new Date().toISOString().split('T')[0],
      expenseBDT: newExpenseBDT || 0,
      expenseCategory: newExpenseCat,
      note: newNote,
    };

    setNotes([entry, ...notes]);
    setNewLandName('');
    setNewCropName('');
    setNewExpenseBDT(0);
    setNewNote('');
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Bento Grid Header */}
      <div className="bento-card bg-gradient-to-br from-[#1A1D23] to-[#111418] border-[#2D3139]">
        <div className="bento-title">
          <span className="bento-title-icon">◆</span> স্মার্ট প্ল্যানার ও ক্যালকুলেটর (Smart Farming Tools)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
          স্মার্ট কৃষি টুলস (Smart Farming Tools)
        </h2>
        <p className="text-xs text-[#94A3B8] mt-1 max-w-3xl leading-relaxed">
          স্মার্ট ফসল প্ল্যানার, চাষাবাদ টাইমলাইন নোটিফিকেশন গাইড, খরচ ও নিট লাভ ক্যালকুলেটর এবং পারসিস্টেন্ট কৃষি ডায়েরি।
        </p>
      </div>

      {/* Tool Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-[#2D3139] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTool('planner')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTool === 'planner'
              ? 'bg-[#10B981] text-slate-950 font-bold'
              : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border border-slate-200 dark:border-[#2D3139] hover:border-[#10B981]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>স্মার্ট ফসল প্ল্যানার</span>
        </button>

        <button
          onClick={() => setActiveTool('timeline')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTool === 'timeline'
              ? 'bg-[#10B981] text-slate-950 font-bold'
              : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border border-slate-200 dark:border-[#2D3139] hover:border-[#10B981]'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>চাষাবাদ টাইমলাইন (১-১২০ দিন)</span>
        </button>

        <button
          onClick={() => setActiveTool('profit-calc')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTool === 'profit-calc'
              ? 'bg-[#10B981] text-slate-950 font-bold'
              : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border border-slate-200 dark:border-[#2D3139] hover:border-[#10B981]'
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>খরচ ও লাভ হিসাব ক্যালকুলেটর</span>
        </button>

        <button
          onClick={() => setActiveTool('farm-diary')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTool === 'farm-diary'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>কৃষি ডায়েরি (Land Notes)</span>
        </button>
      </div>

      {/* --- TOOL 1: SMART CROP PLANNER --- */}
      {activeTool === 'planner' && (
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>জেলা, মাটি ও জমির পরিমাণ ভিত্তিক সবচেয়ে লাভজনক ফসল নির্বাচন</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block text-slate-500 mb-1">জেলা নির্বাচন করুন</label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                >
                  <option value="দিনাজপুর">দিনাজপুর</option>
                  <option value="বগুড়া">বগুড়া</option>
                  <option value="যশোর">যশোর</option>
                  <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                  <option value="কুমিল্লা">কুমিল্লা</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-500 mb-1">মাটির ধরন</label>
                <select
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value as SoilType)}
                  className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                >
                  <option value="দোআঁশ">দোআঁশ</option>
                  <option value="বেলে-দোআঁশ">বেলে-দোআঁশ</option>
                  <option value="এটেল-দোআঁশ">এটেল-দোআঁশ</option>
                  <option value="পলি মাটি">পলি মাটি</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-500 mb-1">জমির পরিমাণ (শতক / Dec)</label>
                <input
                  type="number"
                  value={landSizeDecimal}
                  onChange={(e) => setLandSizeDecimal(Number(e.target.value))}
                  className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-1">মৌসুম</label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value as Season)}
                  className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                >
                  <option value="রবি">রবি (শীতকাল)</option>
                  <option value="খরিপ-১">খরিপ-১ (গ্রীষ্ম)</option>
                  <option value="খরিপ-২">খরিপ-২ (বর্ষা/আমন)</option>
                  <option value="বারোমাসি">বারোমাসি</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleCalculatePlan}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>লাভজনক ফসল প্ল্যান তৈরি করুন</span>
            </button>
          </div>

          {/* Planner Result Box */}
          {plannerResult && (
            <div className="p-5 rounded-xl bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/30 space-y-4">
              <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>সুপারিশকৃত ফসল ও সম্ভাব্য আয়-ব্যয়ের হিসাব ({landSizeDecimal} শতক জমিতে)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/20 space-y-2 text-xs">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">সুপারিশকৃত ফসলসমূহ:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {plannerResult.recommendedCrops.map((c: string, i: number) => (
                      <span key={i} className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 space-y-1 font-mono border-t border-slate-100 dark:border-slate-800">
                    <p className="flex justify-between"><span>আনুমানিক খরচ:</span> <strong>৳{plannerResult.estimatedCost}</strong></p>
                    <p className="flex justify-between"><span>আনুমানিক ফলন:</span> <strong>{plannerResult.estimatedYieldMaunds} মন</strong></p>
                    <p className="flex justify-between"><span>সম্ভাব্য বিক্রয়মূল্য:</span> <strong>৳{plannerResult.estimatedRevenue}</strong></p>
                    <p className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold pt-1 border-t">
                      <span>আনুমানিক নিট লাভ:</span> <strong>৳{plannerResult.estimatedNetProfit}</strong>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/20 space-y-2 text-xs">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">সুপারিশকৃত সার পরিমাপ:</h4>
                  <div className="grid grid-cols-2 gap-2 font-mono">
                    <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded">
                      <span className="text-slate-400 block text-[10px]">ইউরিয়া:</span>
                      <strong>{plannerResult.fertilizerSchedule.urea}</strong>
                    </div>
                    <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded">
                      <span className="text-slate-400 block text-[10px]">টিএসপি:</span>
                      <strong>{plannerResult.fertilizerSchedule.tsp}</strong>
                    </div>
                    <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded">
                      <span className="text-slate-400 block text-[10px]">এমওপি:</span>
                      <strong>{plannerResult.fertilizerSchedule.mop}</strong>
                    </div>
                    <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded">
                      <span className="text-slate-400 block text-[10px]">জিপসাম:</span>
                      <strong>{plannerResult.fertilizerSchedule.gypsum}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- TOOL 2: FARMING TIMELINE --- */}
      {activeTool === 'timeline' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-500" />
              <span>চাষাবাদ ধাপে ধাপে টাইমলাইন (১ম দিন থেকে ১২০তম দিন পর্যন্ত)</span>
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span>বর্তমান দিন:</span>
              <input
                type="number"
                value={currentDay}
                onChange={(e) => setCurrentDay(Number(e.target.value))}
                className="w-16 p-1 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-bold text-emerald-600 text-center"
              />
            </div>
          </div>

          <div className="space-y-3 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative pl-9">
                <div
                  className={`absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    step.completed
                      ? 'bg-emerald-500 border-emerald-500'
                      : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700'
                  }`}
                />
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{step.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TOOL 3: COST & PROFIT CALCULATOR --- */}
      {activeTool === 'profit-calc' && (
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-emerald-500" />
            <span>কৃষি খরচ ও নিট লাভ পরিমাপক (Cost & Profit Calculator)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-700 dark:text-slate-300 border-b pb-1">১. মোট খরচ খাত (ইনপুট কস্ট)</h4>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">বীজ খরচ (৳)</label>
                  <input
                    type="number"
                    value={seedCost}
                    onChange={(e) => setSeedCost(Number(e.target.value))}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">সার খরচ (৳)</label>
                  <input
                    type="number"
                    value={fertilizerCost}
                    onChange={(e) => setFertilizerCost(Number(e.target.value))}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">শ্রমিক মজুরি (৳)</label>
                  <input
                    type="number"
                    value={laborCost}
                    onChange={(e) => setLaborCost(Number(e.target.value))}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">সেচ ও কীটনাশক (৳)</label>
                  <input
                    type="number"
                    value={irrigationCost}
                    onChange={(e) => setIrrigationCost(Number(e.target.value))}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
              </div>

              <h4 className="font-bold text-slate-700 dark:text-slate-300 border-b pb-1 pt-2">২. সম্ভাব্য বিক্রয় হিসেব</h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">প্রত্যাশিত ফলন (মন)</label>
                  <input
                    type="number"
                    value={expectedMaunds}
                    onChange={(e) => setExpectedMaunds(Number(e.target.value))}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">পাইকারি দর প্রতি মন (৳)</label>
                  <input
                    type="number"
                    value={pricePerMaundCalc}
                    onChange={(e) => setPricePerMaundCalc(Number(e.target.value))}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
              </div>
            </div>

            {/* Calculations Result Summary */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3 font-mono">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 border-b pb-2">হিসাব বিবরণী</h4>

              <div className="space-y-2 text-xs">
                <p className="flex justify-between"><span>মোট উৎপাদন খরচ:</span> <strong>৳{totalInputCost}</strong></p>
                <p className="flex justify-between"><span>মোট সম্ভাব্য রাজস্ব:</span> <strong>৳{totalExpectedRevenue}</strong></p>
                <p className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold text-sm border-t pt-2">
                  <span>নিট মুনাফা (Net Profit):</span> <strong>৳{netProfitCalc}</strong>
                </p>
                <p className="flex justify-between text-xs text-emerald-500">
                  <span>বিনিয়োগে ফেরত (ROI):</span> <strong>{roiPercentage}%</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TOOL 4: FARM DIARY (LAND NOTES WITH LOCALSTORAGE) --- */}
      {activeTool === 'farm-diary' && (
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>কৃষি ডায়েরি (Farm Diary - Land Notes)</span>
            </h3>

            <form onSubmit={handleAddNote} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <input
                type="text"
                placeholder="জমির নাম (যেমন: উত্তর বিঘা)"
                value={newLandName}
                onChange={(e) => setNewLandName(e.target.value)}
                className="p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
              />
              <input
                type="text"
                placeholder="ফসলের নাম (যেমন: ব্রি ধান২৮)"
                value={newCropName}
                onChange={(e) => setNewCropName(e.target.value)}
                className="p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
              />
              <input
                type="number"
                placeholder="খরচের টাকা (৳)"
                value={newExpenseBDT || ''}
                onChange={(e) => setNewExpenseBDT(Number(e.target.value))}
                className="p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-1"
              >
                <Plus className="w-4 h-4" />
                <span>নোট যোগ করুন</span>
              </button>
            </form>
          </div>

          {/* Notes List */}
          <div className="space-y-3">
            {notes.map((n) => (
              <div
                key={n.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 dark:text-slate-100">{n.landName}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {n.cropName}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{n.date}</span>
                  </div>
                  {n.expenseBDT > 0 && (
                    <p className="text-emerald-600 dark:text-emerald-400 font-mono font-bold mt-1">
                      খরচ: ৳{n.expenseBDT}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => handleDeleteNote(n.id)}
                  className="p-2 rounded text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
