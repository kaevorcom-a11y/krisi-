import React, { useState } from 'react';
import { CORE_MODULES_SCHEMA, LARAVEL_POSTGRES_DDL_SQL } from '../data/ddlSchemaData';
import { ShieldCheck, Database, Download, Lock, Key, Server, CheckCircle2, AlertCircle, Cpu } from 'lucide-react';

export const DatabaseSecurityPortal: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleDownloadSQL = () => {
    const blob = new Blob([LARAVEL_POSTGRES_DDL_SQL], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'krishihub_enterprise_postgres17_schema.sql';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Bento Grid Header */}
      <div className="bento-card bg-gradient-to-br from-[#1A1D23] to-[#111418] border-[#2D3139]">
        <div className="bento-title">
          <span className="bento-title-icon">◆</span> সিকিউরিটি ও ডাটাবেস পোর্টাল (Security & DB)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
          এন্টারপ্রাইজ ডাটাবেস আর্কিটেকচার ও সিকিউরিটি পোর্টাল
        </h2>
        <p className="text-xs text-[#94A3B8] mt-1 max-w-3xl leading-relaxed">
          Laravel 12 ও PostgreSQL 17 এর ১৮টি কোর মডিউলের ১৮০টি টেবিল ডিডিএল (DDL) স্কিমা ও সিকিউরিটি পলিসি গার্ডস।
        </p>
      </div>

      {/* SQL Download Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900/80 to-slate-900 border border-emerald-500/30 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-400" />
            <h3 className="font-extrabold text-sm">PostgreSQL 17 & Laravel 12 Enterprise DDL Export</h3>
          </div>
          <p className="text-xs text-slate-300">
            ১৮টি মডিউল, ১৮০টি টেবিল, ফরেন কি রিলেশনশিপ, UUID ও PostGIS ইন্ডেক্স অন্তর্ভুক্ত।
          </p>
        </div>

        <button
          onClick={handleDownloadSQL}
          className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 whitespace-nowrap"
        >
          <Download className="w-4 h-4" />
          <span>১-ক্লিকে SQL স্কিমা ডাউনলোড (.sql)</span>
        </button>
      </div>

      {/* 18 Core Modules Table Schema Breakdown */}
      <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <Database className="w-4 h-4 text-emerald-500" />
          <span>১৮টি কোর ডাটাবেস মডিউল ও টেবিল পরিসংখ্যান (18 Core Modules)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {CORE_MODULES_SCHEMA.map((mod) => (
            <div
              key={mod.id}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{mod.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                  {mod.tableCount} Tables
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono line-clamp-2">{mod.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security Policies Portal */}
      <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <Lock className="w-4 h-4 text-emerald-500" />
          <span>এন্টারপ্রাইজ সিকিউরিটি প্রোটোকল ও গার্ডস (Security Architecture)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/30">
            <span className="text-emerald-600 dark:text-emerald-400 block font-bold mb-0.5">অফিশিয়াল বিয়ারার টোকেন</span>
            <p className="text-[11px] text-slate-500">OAuth 2.0 / JWT Auth Guard enabled for all API routes.</p>
          </div>

          <div className="p-3 rounded-lg bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/30">
            <span className="text-emerald-600 dark:text-emerald-400 block font-bold mb-0.5">সিকিউরিটি হেডার্স</span>
            <p className="text-[11px] text-slate-500">HSTS (1 Year), CSP, X-Frame-Options, X-Content-Type Enabled.</p>
          </div>

          <div className="p-3 rounded-lg bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/30">
            <span className="text-emerald-600 dark:text-emerald-400 block font-bold mb-0.5">রেট লিমিট বাকেট</span>
            <p className="text-[11px] text-slate-500">60 Requests / Minute per IP throttling active.</p>
          </div>

          <div className="p-3 rounded-lg bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-500/30">
            <span className="text-emerald-600 dark:text-emerald-400 block font-bold mb-0.5">RBAC এক্সেস কন্ট্রোল</span>
            <p className="text-[11px] text-slate-500">Farmer, Merchant, DAE Officer & Superadmin Matrix.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
