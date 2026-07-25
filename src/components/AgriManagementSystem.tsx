import React, { useState } from 'react';
import { MarketplaceItem, Invoice, AgriWorker, ResearchArticle } from '../types';
import {
  ShoppingBag,
  Receipt,
  Users,
  BarChart3,
  BookOpen,
  Plus,
  Printer,
  Phone,
  CheckCircle,
  Search,
  Sparkles,
  Download,
  Calendar,
  DollarSign,
  User,
  MapPin,
  Tag
} from 'lucide-react';

export const AgriManagementSystem: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'marketplace' | 'invoice' | 'workers' | 'analytics' | 'articles'>('marketplace');

  // Initial Marketplace items
  const [marketplaceItems, setMarketplaceItems] = useState<MarketplaceItem[]>([
    {
      id: 'm-1',
      title: 'উন্নত জাতের সুগন্ধি ব্রি ধান৩৪',
      cropName: 'ধান',
      variety: 'ব্রি ধান৩৪',
      farmerName: 'মোঃ রফিকুল ইসলাম',
      district: 'দিনাজপুর',
      upazila: 'বীরগঞ্জ',
      quantityMaunds: 120,
      pricePerMaund: 1550,
      contactNumber: '01711223344',
      postedDate: '২০২৬-০৭-২৪',
      status: 'In Stock',
    },
    {
      id: 'm-2',
      title: 'জিআই স্বীকৃত সুস্বাদু হিমসাগর আম',
      cropName: 'আম',
      variety: 'হিমসাগর',
      farmerName: 'হাজী মোঃ কফিল উদ্দিন',
      district: 'চাঁপাইনবাবগঞ্জ',
      upazila: 'শিবগঞ্জ',
      quantityMaunds: 300,
      pricePerMaund: 3200,
      contactNumber: '01819988776',
      postedDate: '২০২৬-০৭-২৫',
      status: 'In Stock',
    },
    {
      id: 'm-3',
      title: 'হিমাগারে সংরক্ষিত সার্টিফাইড ডায়মন্ড বীজ আলু',
      cropName: 'আলু',
      variety: 'ডায়মন্ড (Diamond)',
      farmerName: 'আব্দুল হান্নান',
      district: 'মুন্সীগঞ্জ',
      upazila: 'সিরাজদিখান',
      quantityMaunds: 500,
      pricePerMaund: 1400,
      contactNumber: '01912345678',
      postedDate: '২০২৬-০৭-২৩',
      status: 'In Stock',
    },
  ]);

  // Invoice / Cash Memo Generator State
  const [invoice, setInvoice] = useState<Invoice>({
    id: 'inv-1001',
    invoiceNumber: 'KH-INV-2026-089',
    date: new Date().toISOString().split('T')[0],
    sellerName: 'কৃষিহাব পাইকারি এগ্রো ফার্ম',
    sellerPhone: '01700000000',
    buyerName: 'আলহাজ্ব জলিল ব্যাপারী',
    buyerPhone: '01811223344',
    buyerAddress: 'কারওয়ান বাজার, ঢাকা',
    items: [
      { description: 'ব্রি ধান২৮ (বোরো ধান)', quantity: 50, unit: 'মন', unitPrice: 1250, totalPrice: 62500 },
      { description: 'বারি সরিষা-১৪', quantity: 10, unit: 'মন', unitPrice: 3800, totalPrice: 38000 },
    ],
    subtotal: 100500,
    discount: 500,
    grandTotal: 100000,
    paymentMethod: 'Cash',
  });

  const [printPreviewOpen, setPrintPreviewOpen] = useState(false);

  // Agri Workers Directory
  const workers: AgriWorker[] = [
    { id: 'w-1', name: 'মোঃ করিম শেখ (প্রধান দলনেতা)', role: 'রোয়া শ্রমিক', district: 'ময়মনসিংহ', upazila: 'ত্রিশাল', experienceYears: 12, dailyWageBDT: 750, phone: '01712001122', rating: 4.9, availableNow: true },
    { id: 'w-2', name: 'আবুল কাসেম মেকানিক', role: 'ছাঁটাই মেকানিক', district: 'যশোর', upazila: 'ঝিকরগাছা', experienceYears: 8, dailyWageBDT: 900, phone: '01815334455', rating: 4.8, availableNow: true },
    { id: 'w-3', name: 'ড. জাহাঙ্গীর আলম (আইপিএম প্রশিক্ষক)', role: 'ট্রেইনার', district: 'গাজীপুর', upazila: 'সদর', experienceYears: 15, dailyWageBDT: 2000, phone: '01911778899', rating: 5.0, availableNow: false },
    { id: 'w-4', name: 'সুজন মিয়া (ট্রাক্টর ড্রাইভার)', role: 'ট্রাক/ট্রাক্টর ড্রাইভার', district: 'দিনাজপুর', upazila: 'বীরগঞ্জ', experienceYears: 7, dailyWageBDT: 1000, phone: '01755667788', rating: 4.7, availableNow: true },
  ];

  // Research Articles
  const articles: ResearchArticle[] = [
    {
      id: 'art-1',
      title: 'আইপিএম প্রযুক্তিতে রাসায়নিক কীটনাশকমুক্ত নিরাপদ সবজি চাষ',
      author: 'ড. মোহাম্মদ শরিফুল ইসলাম (প্রধান বৈজ্ঞানিক কর্মকর্তা)',
      institution: 'BARI',
      category: 'আইপিএম প্রযুক্তি',
      summary: 'সেক্স ফেরোমোন ফাঁদ, হলুদ আঠালো ফাঁদ ও ট্রাইকো-কমপোস্ট ব্যবহার করে সবজি ক্ষেতে বিষমুক্ত উৎপাদনের আধুনিক গাইড।',
      publishedDate: '২০২৬-০৭-২০',
      readTime: '৫ মিনিট',
      contentMarkdown: 'সমন্বিত বালাই ব্যবস্থাপনা (IPM) পরিবেশে পরিবেশবান্ধব কৃষির প্রধান স্তম্ভ...',
    },
    {
      id: 'art-2',
      title: 'জলবায়ু সহনশীল জিআই সুগন্ধি ধান ও রপ্তানি সম্ভাবনা',
      author: 'ড. শাহজাহান কবির (মহাপরিচালক)',
      institution: 'BRRI',
      category: 'রপ্তানি কৃষি',
      summary: 'ইউরোপীয় ইউনিয়ন ও মধ্যপ্রাচ্যে ব্রি ধান৩৪ ও কালিজিরা চালের উচ্চমূল্য আন্তর্জাতিক আন্তর্জাতিক চাহিদা বিশ্ববাজারে বাজারজাতকরণ।',
      publishedDate: '২০২৬-০৭-১৫',
      readTime: '৭ মিনিট',
      contentMarkdown: 'বাংলাদেশ থেকে সুগন্ধি চাল রপ্তানির বিশাল সম্ভাবনা রয়েছে...',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Bento Grid Page Header */}
      <div className="bento-card bg-gradient-to-br from-[#1A1D23] to-[#111418] border-[#2D3139]">
        <div className="bento-title">
          <span className="bento-title-icon">◆</span> পাইকারি বাজার (Produce Marketplace)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
          কৃষি ব্যবস্থাপনা সিস্টেম (Agriculture Management System)
        </h2>
        <p className="text-xs text-[#94A3B8] mt-1 max-w-3xl leading-relaxed">
          ফসল পাইকারি কেনাবেচা বাজার, ১-ক্লিক প্রিন্টযোগ্য ক্যাশ মেমো জেনারেটর, এলাকাভিত্তিক শ্রমিক ডিরেক্টরি ও অ্যানালিটিক্যাল রিপোর্ট।
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-[#2D3139] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('marketplace')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'marketplace'
              ? 'bg-[#10B981] text-slate-950 font-bold'
              : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border border-slate-200 dark:border-[#2D3139] hover:border-[#10B981]'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>পাইকারি বাজার (Marketplace)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('invoice')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'invoice'
              ? 'bg-[#10B981] text-slate-950 font-bold'
              : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border border-slate-200 dark:border-[#2D3139] hover:border-[#10B981]'
          }`}
        >
          <Receipt className="w-3.5 h-3.5" />
          <span>১-ক্লিক ক্যাশ মেমো (Invoice)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('workers')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'workers'
              ? 'bg-[#10B981] text-slate-950 font-bold'
              : 'bg-white dark:bg-[#1A1D23] text-slate-700 dark:text-[#F8FAFC] border border-slate-200 dark:border-[#2D3139] hover:border-[#10B981]'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>কৃষি শ্রমিক ডিরেক্টরি</span>
        </button>

        <button
          onClick={() => setActiveSubTab('analytics')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'analytics'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>বিক্রেতা অ্যানালিটিক্স</span>
        </button>

        <button
          onClick={() => setActiveSubTab('articles')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeSubTab === 'articles'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>কৃষি গবেষণা নিবন্ধ</span>
        </button>
      </div>

      {/* --- SUB-TAB 1: PRODUCE MARKETPLACE --- */}
      {activeSubTab === 'marketplace' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-emerald-500" />
              <span>কৃষকের সরাসরি পাইকারি মজুদ ও দর (Produce Marketplace)</span>
            </h3>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
              সরাসরি যোগাযোগের বোতাম
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {marketplaceItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {item.cropName} — {item.variety}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      ৳{item.pricePerMaund} / মন
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>কৃষক: <strong>{item.farmerName}</strong></span>
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>অবস্থান: {item.upazila}, {item.district}</span>
                  </p>

                  <div className="mt-3 p-2 bg-slate-50 dark:bg-slate-950 rounded text-xs flex justify-between font-mono">
                    <span className="text-slate-400">মজুদ পরিমাণ:</span>
                    <strong className="text-slate-900 dark:text-slate-100">{item.quantityMaunds} মন</strong>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{item.postedDate}</span>
                  <a
                    href={`tel:${item.contactNumber}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>সরাসরি কল ({item.contactNumber})</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- SUB-TAB 2: INVOICE / CASH MEMO GENERATOR --- */}
      {activeSubTab === 'invoice' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Receipt className="w-4 h-4 text-emerald-500" />
                <span>১-ক্লিক ক্যাশ মেমো ও বিল জেনারেটর (Invoice Bill Generator)</span>
              </h3>
              <p className="text-xs text-slate-500">কৃষি পণ্য কেনাবেচায় প্রিন্টযোগ্য ও ডিজিটাল রসিদ জেনারেট করুন।</p>
            </div>
            <button
              onClick={() => setPrintPreviewOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>প্রিন্ট রসিদ (Print Receipt)</span>
            </button>
          </div>

          {/* Form and Live Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400">রসিদ তথ্য এডিটর</h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-500 mb-1">চালান নম্বর (Invoice #)</label>
                  <input
                    type="text"
                    value={invoice.invoiceNumber}
                    onChange={(e) => setInvoice({ ...invoice, invoiceNumber: e.target.value })}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">তারিখ</label>
                  <input
                    type="date"
                    value={invoice.date}
                    onChange={(e) => setInvoice({ ...invoice, date: e.target.value })}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-500 mb-1">বিক্রেতা / খামারের নাম</label>
                  <input
                    type="text"
                    value={invoice.sellerName}
                    onChange={(e) => setInvoice({ ...invoice, sellerName: e.target.value })}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">ক্রেতার নাম</label>
                  <input
                    type="text"
                    value={invoice.buyerName}
                    onChange={(e) => setInvoice({ ...invoice, buyerName: e.target.value })}
                    className="w-full p-2 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-500 text-xs mb-1">ক্রেতার ঠিকানা ও ফোন</label>
                <input
                  type="text"
                  value={invoice.buyerAddress}
                  onChange={(e) => setInvoice({ ...invoice, buyerAddress: e.target.value })}
                  className="w-full p-2 text-xs rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                />
              </div>
            </div>

            {/* Live Cash Memo Receipt Box */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 font-mono text-xs text-slate-900 dark:text-slate-100 shadow-inner">
              <div className="text-center border-b border-dashed border-slate-300 dark:border-slate-700 pb-3">
                <h3 className="font-bold text-sm tracking-wide">{invoice.sellerName}</h3>
                <p className="text-[11px] text-slate-500">কৃষিহাব ক্যাশ মেমো / পাইকারি চালান</p>
                <p className="text-[10px] text-slate-400 mt-1">চালান নং: {invoice.invoiceNumber} | তারিখ: {invoice.date}</p>
              </div>

              <div className="py-3 border-b border-dashed border-slate-300 dark:border-slate-700 space-y-1 text-[11px]">
                <p><strong>ক্রেতা:</strong> {invoice.buyerName}</p>
                <p><strong>ঠিকানা:</strong> {invoice.buyerAddress}</p>
              </div>

              {/* Items Table */}
              <div className="py-3 border-b border-dashed border-slate-300 dark:border-slate-700">
                <div className="grid grid-cols-12 font-bold mb-2 text-[11px] text-slate-600 dark:text-slate-400">
                  <span className="col-span-6">পণ্যের বিবরণ</span>
                  <span className="col-span-2 text-center">পরিমাণ</span>
                  <span className="col-span-4 text-right">মোট (৳)</span>
                </div>
                {invoice.items.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-12 py-1 text-[11px]">
                    <span className="col-span-6 truncate">{item.description}</span>
                    <span className="col-span-2 text-center">{item.quantity} {item.unit}</span>
                    <span className="col-span-4 text-right font-semibold">৳{item.totalPrice}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 space-y-1 text-right text-[11px]">
                <p className="text-slate-500">মোট মূল্য: ৳{invoice.subtotal}</p>
                <p className="text-slate-500">ছাড়: ৳{invoice.discount}</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 pt-1">
                  সর্বমোট প্রদেয়: ৳{invoice.grandTotal}
                </p>
              </div>

              <div className="mt-6 pt-3 text-center text-[10px] text-slate-400 border-t border-dotted border-slate-300 dark:border-slate-700">
                ধন্যবাদ! কৃষিহাব বাংলাদেশ এর মাধ্যমে রসিদ প্রস্তুতকৃত।
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUB-TAB 3: AGRI WORKERS DIRECTORY --- */}
      {activeSubTab === 'workers' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-500" />
              <span>কৃষি শ্রমিক ও হেল্পার ডিরেক্টরি (Agri Workers Directory)</span>
            </h3>
            <span className="text-xs text-slate-500">মাঠ পর্যায়ের অভিজ্ঞ রোয়া শ্রমিক, মেকানিক ও চালক</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{worker.name}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {worker.role}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mt-1">
                    {worker.upazila}, {worker.district} • অভিজ্ঞতা: {worker.experienceYears} বছর
                  </p>

                  <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    দৈনিক মজুরি: ৳{worker.dailyWageBDT}
                  </div>
                </div>

                <a
                  href={`tel:${worker.phone}`}
                  className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>কল করুন</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- SUB-TAB 4: SELLER ANALYTICS --- */}
      {activeSubTab === 'analytics' && (
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-500" />
            <span>বিক্রেতা চার্ট ও অ্যানালিটিক্স (Seller Analytics)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-400">মোট বিক্রয়ের পরিমাণ</span>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">৯২০ মন</div>
              <span className="text-[10px] text-emerald-500">↑ ১২% গত মাস থেকে বৃদ্ধি</span>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-400">মোট অর্জিত রাজস্ব (Revenue)</span>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">৳১৪,৮০,০০০</div>
              <span className="text-[10px] text-emerald-500">নিট মুনাফা হিসাব অন্তর্ভুক্ত</span>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-400">সক্রিয় ক্রেতা ও পাইকার</span>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">৪৮ জন</div>
              <span className="text-[10px] text-slate-400">ঢাকা, কুমিল্লা ও বগুড়া জোন</span>
            </div>
          </div>
        </div>
      )}

      {/* --- SUB-TAB 5: RESEARCH ARTICLES --- */}
      {activeSubTab === 'articles' && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-500" />
            <span>কৃষি গবেষণা নিবন্ধ ও বৈজ্ঞানিক ব্লগ (Agri Articles)</span>
          </h3>

          <div className="space-y-3">
            {articles.map((art) => (
              <div
                key={art.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {art.institution} • {art.category}
                  </span>
                  <span className="text-xs text-slate-400">{art.publishedDate}</span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{art.title}</h4>
                <p className="text-xs text-slate-500">{art.summary}</p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 font-mono">
                  লেখক: {art.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
