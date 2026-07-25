import React, { useState } from 'react';
import { BANGLADESH_DISTRICTS } from '../data/districtMapData';
import { DistrictInfo } from '../types';
import { Map, MapPin, Sprout, BarChart3, Info, CheckCircle2, Search } from 'lucide-react';

export const DistrictMap: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo>(BANGLADESH_DISTRICTS[0]);
  const [searchDistrict, setSearchDistrict] = useState('');

  const divisions = ['all', 'ঢাকা', 'রাজশাহী', 'রংপুর', 'খুলনা', 'চট্টগ্রাম', 'বরিশাল', 'সিলেট'];

  const filteredDistricts = BANGLADESH_DISTRICTS.filter((d) => {
    if (selectedDivision !== 'all' && d.division !== selectedDivision) return false;
    if (searchDistrict.trim()) {
      const q = searchDistrict.toLowerCase();
      return d.nameBengali.toLowerCase().includes(q) || d.nameEnglish.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Bento Grid Header */}
      <div className="bento-card bg-gradient-to-br from-[#1A1D23] to-[#111418] border-[#2D3139]">
        <div className="bento-title">
          <span className="bento-title-icon">◆</span> ক্রপ ম্যাপ (64-District Crop Map)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
          বাংলাদেশের ইন্টারেক্টিভ ক্রপ ম্যাপ (64-District Crop Map)
        </h2>
        <p className="text-xs text-[#94A3B8] mt-1 max-w-3xl leading-relaxed">
          ৬৪ জেলার প্রধান ফসল, মাটির ধরণ, উপজেলা সংখ্যা ও বার্ষিক কৃষি উৎপাদনের তথ্যভিত্তিক ডিজিটাল মানচিত্র।
        </p>
      </div>

      {/* Division Filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {divisions.map((div) => (
          <button
            key={div}
            onClick={() => setSelectedDivision(div)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedDivision === div
                ? 'bg-[#10B981] text-slate-950 font-bold'
                : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border border-slate-200 dark:border-[#2D3139] hover:border-[#10B981]'
            }`}
          >
            {div === 'all' ? 'সকল বিভাগ (৬৪ জেলা)' : `${div} বিভাগ`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: District Selection List */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchDistrict}
              onChange={(e) => setSearchDistrict(e.target.value)}
              placeholder="জেলা খুঁজুন (যেমন: দিনাজপুর, যশোর)..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="max-h-[420px] overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
            {filteredDistricts.map((dist) => (
              <button
                key={dist.id}
                onClick={() => setSelectedDistrict(dist)}
                className={`w-full p-2.5 rounded-lg text-left transition-all flex items-center justify-between text-xs ${
                  selectedDistrict.id === dist.id
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-bold'
                    : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30'
                }`}
              >
                <div>
                  <div className="font-bold">{dist.nameBengali} ({dist.nameEnglish})</div>
                  <div className="text-[10px] text-slate-400">প্রধান ফসল: {dist.topCrops.slice(0, 2).join(', ')}</div>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {dist.division}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Interactive Map Visual & District Details Card */}
        <div className="lg:col-span-2 space-y-4">
          {/* District Details Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                  {selectedDistrict.division} বিভাগ
                </span>
                <h3 className="text-2xl font-extrabold mt-1">
                  {selectedDistrict.nameBengali} জেলা ({selectedDistrict.nameEnglish})
                </h3>
              </div>
              <MapPin className="w-8 h-8 text-emerald-400 opacity-80" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedDistrict.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-emerald-500/20 text-xs">
              <div className="p-2.5 bg-slate-900/60 rounded-lg border border-emerald-500/20">
                <span className="text-slate-400 text-[10px] block">প্রধান ফসল:</span>
                <strong className="text-emerald-400 font-semibold">{selectedDistrict.topCrops.join(', ')}</strong>
              </div>

              <div className="p-2.5 bg-slate-900/60 rounded-lg border border-emerald-500/20">
                <span className="text-slate-400 text-[10px] block">মাটির ধরণ:</span>
                <strong className="text-slate-200">{selectedDistrict.soilType}</strong>
              </div>

              <div className="p-2.5 bg-slate-900/60 rounded-lg border border-emerald-500/20">
                <span className="text-slate-400 text-[10px] block">বার্ষিক উৎপাদন:</span>
                <strong className="text-slate-200 font-mono">{(selectedDistrict.annualProductionTons / 1000).toFixed(0)} হাজার টন</strong>
              </div>

              <div className="p-2.5 bg-slate-900/60 rounded-lg border border-emerald-500/20">
                <span className="text-slate-400 text-[10px] block">উপজেলা সংখ্যা:</span>
                <strong className="text-slate-200 font-mono">{selectedDistrict.upazilaCount} টি</strong>
              </div>
            </div>
          </div>

          {/* Interactive SVG Map Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5">
              <Map className="w-4 h-4 text-emerald-500" />
              <span>৬৪ জেলা ইন্টারেক্টিভ ডিজিটাল ভেক্টোরিয়াল ভিজিউয়ালের নমুনা</span>
            </h4>

            {/* Stylized SVG Map Graphic */}
            <div className="w-full h-48 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="text-center space-y-2 z-10">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                  {selectedDistrict.nameBengali} অবস্থান চিহ্নিত করা হয়েছে
                </div>
                <div className="text-[10px] text-slate-400">
                  কৃষিভিত্তিক জিও-স্প্যাশিয়াল জোনেশন ম্যাপ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
