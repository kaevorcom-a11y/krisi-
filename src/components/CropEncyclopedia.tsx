import React, { useState, useMemo } from 'react';
import { Crop, CropCategory, Season, SoilType } from '../types';
import { ALL_CROPS } from '../data/cropEncyclopediaData';
import {
  BookOpen,
  Filter,
  Search,
  Sprout,
  X,
  ChevronRight,
  Info,
  Calendar,
  CloudSun,
  Droplet,
  Layers,
  Award,
  DollarSign,
  HelpCircle,
  UserCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface CropEncyclopediaProps {
  externalSearchQuery?: string;
}

export const CropEncyclopedia: React.FC<CropEncyclopediaProps> = ({ externalSearchQuery = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<CropCategory | 'all'>('all');
  const [selectedSeason, setSelectedSeason] = useState<Season | 'all'>('all');
  const [selectedSoil, setSelectedSoil] = useState<SoilType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState(externalSearchQuery);
  const [activeCropModal, setActiveCropModal] = useState<Crop | null>(null);

  // Sync external search query if updated
  React.useEffect(() => {
    if (externalSearchQuery) {
      setSearchQuery(externalSearchQuery);
    }
  }, [externalSearchQuery]);

  const categories: { id: CropCategory | 'all'; labelBengali: string; icon: string }[] = [
    { id: 'all', labelBengali: 'সকল ফসল (১০৫৮+)', icon: '🌾' },
    { id: 'cereals', labelBengali: 'দানা শস্য (Grains)', icon: '🌾' },
    { id: 'vegetables', labelBengali: 'শাকসবজি (Vegetables)', icon: '🥦' },
    { id: 'fruits', labelBengali: 'ফলমূল (Fruits)', icon: '🥭' },
    { id: 'flowers', labelBengali: 'ফুল (Flowers)', icon: '🌹' },
    { id: 'spices', labelBengali: 'মসলা (Spices)', icon: '🌶️' },
    { id: 'pulses', labelBengali: 'ডাল ফসল (Pulses)', icon: '🫘' },
    { id: 'oilseeds', labelBengali: 'তেলবীজ (Oilseeds)', icon: '🌻' },
    { id: 'medicinal', labelBengali: 'ভেষজ ও ঔষধি', icon: '🌿' },
    { id: 'timber', labelBengali: 'বনজ ও কাঠ', icon: '🌲' },
    { id: 'bamboo', labelBengali: 'বাঁশ (Bamboo)', icon: '🎋' },
    { id: 'mushroom', labelBengali: 'মাশরুম', icon: '🍄' },
    { id: 'aquatic', labelBengali: 'জলজ উদ্ভিদ', icon: '🪷' },
  ];

  const seasonsList: (Season | 'all')[] = ['all', 'রবি', 'খরিপ-১', 'খরিপ-২', 'বারোমাসি'];
  const soilList: (SoilType | 'all')[] = ['all', 'দোআঁশ', 'এটেল-দোআঁশ', 'বেলে-দোআঁশ', 'এটেল', 'বেলে', 'পলি মাটি'];

  // Filter logic
  const filteredCrops = useMemo(() => {
    return ALL_CROPS.filter((crop) => {
      // Category Filter
      if (selectedCategory !== 'all' && crop.category !== selectedCategory) return false;

      // Season Filter
      if (selectedSeason !== 'all' && crop.season !== selectedSeason) return false;

      // Soil Filter
      if (selectedSoil !== 'all' && !crop.soilTypes.includes(selectedSoil)) return false;

      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesBengali = crop.bengaliName.toLowerCase().includes(q);
        const matchesEnglish = crop.englishName.toLowerCase().includes(q);
        const matchesScientific = crop.scientificName.toLowerCase().includes(q);
        const matchesDistricts = crop.suitableDistricts.some((d) => d.toLowerCase().includes(q));
        const matchesDiseases = crop.profile.diseases.toLowerCase().includes(q);
        return matchesBengali || matchesEnglish || matchesScientific || matchesDistricts || matchesDiseases;
      }

      return true;
    });
  }, [selectedCategory, selectedSeason, selectedSoil, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Bento Grid Search Hero Header */}
      <div className="bento-card bg-gradient-to-br from-[#1A1D23] to-[#111418] border-[#2D3139]">
        <div className="bento-title">
          <span className="bento-title-icon">◆</span> ১,০০০+ ক্রপ এনসাইক্লোপিডিয়া
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
          ফসল ও উদ্ভিদ অনুসন্ধান করুন
        </h2>
        <p className="text-xs text-[#94A3B8] mt-1 max-w-3xl leading-relaxed mb-4">
          ধান, গম, সরিষা ও ১০৫৮টি ফসলের পূর্ণাঙ্গ ২২টি কারিগরি প্রোফাইল (মাটি, বীজ, সার সারণি, সেচ, রোগবালাই ও পাইকারি দর)।
        </p>

        {/* Hero Search Box */}
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#94A3B8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="বাংলা বা ইংরেজি নাম লিখুন... (উদা: বোরো ধান, আলু, গম)"
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-[#2D3139] bg-white/5 text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#10B981] transition-colors"
          />
        </div>
      </div>

      {/* Category Pills Slider */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#10B981] text-slate-950 font-bold shadow-sm'
                : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border border-slate-200 dark:border-[#2D3139] hover:border-[#10B981]'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.labelBengali}</span>
          </button>
        ))}
      </div>

      {/* Filters Panel */}
      <div className="bento-card space-y-3">
        <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-[#2D3139] pb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-[#F8FAFC]">
            <Filter className="w-4 h-4 text-[#10B981]" />
            <span>ফিল্টারিং অপশন</span>
          </div>
          <div className="text-xs text-[#94A3B8] font-mono">
            ফলাফল: <strong className="text-[#10B981]">{filteredCrops.length}টি ফসল</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {/* Season Filter */}
          <div>
            <label className="block text-[11px] font-medium text-slate-500 dark:text-[#94A3B8] mb-1">
              মৌসুম ফিল্টার (Seasons)
            </label>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value as Season | 'all')}
              className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-[#2D3139] bg-slate-50 dark:bg-black/30 text-slate-900 dark:text-[#F8FAFC]"
            >
              <option value="all">সকল মৌসুম</option>
              {seasonsList.filter((s) => s !== 'all').map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Soil Filter */}
          <div>
            <label className="block text-[11px] font-medium text-slate-500 dark:text-[#94A3B8] mb-1">
              মাটির ধরন (Soil Types)
            </label>
            <select
              value={selectedSoil}
              onChange={(e) => setSelectedSoil(e.target.value as SoilType | 'all')}
              className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-[#2D3139] bg-slate-50 dark:bg-black/30 text-slate-900 dark:text-[#F8FAFC]"
            >
              <option value="all">সকল মাটি</option>
              {soilList.filter((s) => s !== 'all').map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bento Grid Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCrops.map((crop) => (
          <div
            key={crop.id}
            onClick={() => setActiveCropModal(crop)}
            className="bento-card group cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Top Meta Badges */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="bento-badge">
                  <Sprout className="w-3 h-3 text-[#10B981]" />
                  {crop.badgeTag}
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8]">
                  {crop.season}
                </span>
              </div>

              {/* Names */}
              <h3 className="text-sm font-bold text-slate-900 dark:text-[#F8FAFC] group-hover:text-[#10B981] transition-colors flex items-center gap-1.5">
                <span className="text-[#10B981] text-xs">◆</span> {crop.bengaliName}
              </h3>
              <p className="text-xs text-[#94A3B8] italic font-serif mt-0.5">
                {crop.scientificName} ({crop.englishName})
              </p>

              {/* Quick Specs */}
              <div className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-[#F8FAFC] bg-slate-50 dark:bg-black/20 p-2.5 rounded-lg border border-slate-100 dark:border-[#2D3139]">
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">গড় ফলন:</span>
                  <span className="font-medium text-slate-800 dark:text-[#F8FAFC]">{crop.avgYieldPerBigha}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">বর্তমান পাইকারি দর:</span>
                  <span className="font-semibold text-[#10B981]">৳{crop.currentPricePerMaund} / মন</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">অনুকূল মাটি:</span>
                  <span className="truncate max-w-[150px] font-medium">{crop.soilTypes.join(', ')}</span>
                </div>
              </div>

              {/* Snippet Intro */}
              <p className="text-xs text-[#94A3B8] mt-2.5 line-clamp-2">
                {crop.profile.introAndOrigin}
              </p>
            </div>

            {/* View Full 22 Profile Footer Button */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#2D3139] flex items-center justify-between text-xs font-semibold text-[#10B981] group-hover:underline">
              <span>২২টি কারিগরি বিভাগ দেখুন</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {filteredCrops.length === 0 && (
        <div className="text-center py-12 p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900">
          <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300">কোনো ফসল পাওয়া যায়নি</h3>
          <p className="text-xs text-slate-500 mt-1">
            আপনার ফিল্টার বা সার্চ টার্ম পরিবর্তন করে পুনরায় চেষ্টা করুন।
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedSeason('all');
              setSelectedSoil('all');
              setSearchQuery('');
            }}
            className="mt-3 px-3 py-1.5 text-xs rounded-lg bg-emerald-600 text-white font-medium"
          >
            ফিল্টার রিসেট করুন
          </button>
        </div>
      )}

      {/* --- 22-TECHNICAL PROFILE FULL MODAL / DRAWER --- */}
      {activeCropModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setActiveCropModal(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 pr-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                  {activeCropModal.badgeTag}
                </span>
                <span className="text-xs text-slate-500">মৌসুম: {activeCropModal.season}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                {activeCropModal.bengaliName}
              </h3>
              <p className="text-xs text-slate-500 italic font-serif">
                {activeCropModal.scientificName} — {activeCropModal.englishName}
              </p>
            </div>

            {/* 22 Sections Grid Layout */}
            <div className="mt-6 space-y-6 text-xs text-slate-700 dark:text-slate-300">
              {/* Section 1 & 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs mb-1 text-emerald-600 dark:text-emerald-400">
                    ১. পরিচিতি ও উৎপত্তি
                  </h4>
                  <p>{activeCropModal.profile.introAndOrigin}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs mb-1 text-emerald-600 dark:text-emerald-400">
                    ২. বৈশিষ্ট্যাবলী ও অঙ্গসংস্থান
                  </h4>
                  <p>{activeCropModal.profile.botanicalFeatures}</p>
                </div>
              </div>

              {/* Section 3 & 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs mb-1 text-emerald-600 dark:text-emerald-400">
                    ৩. আবহাওয়া (তাপমাত্রা, বৃষ্টিপাত, আর্দ্রতা)
                  </h4>
                  <p>{activeCropModal.profile.climate}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs mb-1 text-emerald-600 dark:text-emerald-400">
                    ৪. মাটি ও পিএইচ (pH) মান
                  </h4>
                  <p>{activeCropModal.profile.soilAndPh}</p>
                </div>
              </div>

              {/* Section 5, 6, 7 */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs text-emerald-600 dark:text-emerald-400">
                  ৫, ৬ ও ৭. জমি প্রস্তুতি, বীজ নির্বাচন ও বীজ শোধন
                </h4>
                <p><strong>৫. জমি প্রস্তুতি:</strong> {activeCropModal.profile.landPreparation}</p>
                <p><strong>৬. বীজ নির্বাচন:</strong> {activeCropModal.profile.seedSelection}</p>
                <p><strong>৭. বীজ শোধন:</strong> {activeCropModal.profile.seedTreatment}</p>
              </div>

              {/* Section 8, 9, 10 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">৮. রোপণের সময়</h5>
                  <p>{activeCropModal.profile.plantingTime}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">৯. রোপণ দূরত্ব</h5>
                  <p>{activeCropModal.profile.spacing}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                  <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">১০. রোপণ পদ্ধতি</h5>
                  <p>{activeCropModal.profile.plantingMethod}</p>
                </div>
              </div>

              {/* Section 11: Fertilizer Table (ইউরিয়া, টিএসপি, এমপি, জিপসাম పరిমাপ সারণি) */}
              <div className="p-4 rounded-xl bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/30">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300 text-xs mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  ১১. অনুমোদিত সার ব্যবস্থাপনা সারণি (Fertilizer Management Table)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border border-emerald-500/20">
                    <span className="text-slate-400 block text-[10px]">ইউরিয়া (Urea):</span>
                    <strong className="text-slate-900 dark:text-slate-100">{activeCropModal.profile.fertilizerManagement.urea}</strong>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border border-emerald-500/20">
                    <span className="text-slate-400 block text-[10px]">টিএসপি (TSP):</span>
                    <strong className="text-slate-900 dark:text-slate-100">{activeCropModal.profile.fertilizerManagement.tsp}</strong>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border border-emerald-500/20">
                    <span className="text-slate-400 block text-[10px]">এমওপি/পটাশ (MoP):</span>
                    <strong className="text-slate-900 dark:text-slate-100">{activeCropModal.profile.fertilizerManagement.mop}</strong>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border border-emerald-500/20">
                    <span className="text-slate-400 block text-[10px]">জিপসাম (Gypsum):</span>
                    <strong className="text-slate-900 dark:text-slate-100">{activeCropModal.profile.fertilizerManagement.gypsum}</strong>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border border-emerald-500/20">
                    <span className="text-slate-400 block text-[10px]">জিংক (Zinc):</span>
                    <strong className="text-slate-900 dark:text-slate-100">{activeCropModal.profile.fertilizerManagement.zinc}</strong>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded border border-emerald-500/20">
                    <span className="text-slate-400 block text-[10px]">গোবর/জৈবসার:</span>
                    <strong className="text-slate-900 dark:text-slate-100">{activeCropModal.profile.fertilizerManagement.cowdung}</strong>
                  </div>
                </div>
              </div>

              {/* Section 12, 13, 14, 15, 16 */}
              <div className="space-y-3">
                <p><strong>১২. সেচ ব্যবস্থাপনা:</strong> {activeCropModal.profile.irrigation}</p>
                <p><strong>১৩. আগাছা দমন:</strong> {activeCropModal.profile.weedControl}</p>
                <p><strong>১৪. রোগবালাই:</strong> {activeCropModal.profile.diseases}</p>
                <p><strong>১৫. ক্ষতিকর পোকা-মাকড়:</strong> {activeCropModal.profile.pests}</p>
                <p><strong>১৬. আইপিএম ও সমন্বিত প্রতিকার:</strong> {activeCropModal.profile.ipmRemedies}</p>
              </div>

              {/* Section 17, 18, 19, 20 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <h5 className="font-bold text-emerald-600 dark:text-emerald-400">১৭. ফসল সংগ্রহ</h5>
                  <p>{activeCropModal.profile.harvesting}</p>
                </div>
                <div>
                  <h5 className="font-bold text-emerald-600 dark:text-emerald-400">১৮. সংরক্ষণ প্রযুক্তি</h5>
                  <p>{activeCropModal.profile.storageTech}</p>
                </div>
                <div>
                  <h5 className="font-bold text-emerald-600 dark:text-emerald-400">১৯. ফলন ও উৎপাদন</h5>
                  <p>{activeCropModal.profile.yieldAndOutput}</p>
                </div>
                <div>
                  <h5 className="font-bold text-emerald-600 dark:text-emerald-400">২০. বর্তমান পাইকারি বাজার মূল্য</h5>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    ৳{activeCropModal.currentPricePerMaund} / মন (বিঘা আনুমানিক: {activeCropModal.profile.marketPrice})
                  </p>
                </div>
              </div>

              {/* Section 21: FAQ */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs mb-2 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <HelpCircle className="w-4 h-4" />
                  ২১. সাধারণ প্রশ্নোত্তর (Frequently Asked Questions)
                </h4>
                <div className="space-y-2">
                  {activeCropModal.profile.faq.map((f, i) => (
                    <div key={i} className="text-xs">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">প্রশ্ন: {f.question}</p>
                      <p className="text-slate-600 dark:text-slate-400">উত্তর: {f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 22: Upazila Agri Officer Advice */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200">
                <h4 className="font-bold text-xs mb-1 flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                  <UserCheck className="w-4 h-4" />
                  ২২. উপজেলা কৃষি কর্মকর্তার অফিশিয়াল পরামর্শ (Upazila Agri Officer Advice)
                </h4>
                <p className="text-xs">{activeCropModal.profile.officerAdvice}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveCropModal(null)}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
