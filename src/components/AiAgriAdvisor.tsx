import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, Image as ImageIcon, Loader2, AlertCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AiAgriAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: 'আসসালামু আলাইকুম! আমি আপনার কৃষি পরামর্শক AI (Gemini Powered)। আপনার ফসলের নাম, লক্ষণ, বা পোকা-মাকড় ও রোগের কোনো সমস্যা সম্পর্কে লিখুন। আমি তাৎক্ষণিক বিএআরআই (BARI) ও ডিএই (DAE) নির্দেশিত সমাধান প্রদান করব।',
      timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'আমার ধান ক্ষেতে ব্লাস্ট রোগ হয়েছে, জরুরি ওষুধ বলুন',
    '১ বিঘা জমিতে ব্রি ধান২৮ এ সারের সঠিক ডোজ কত?',
    'টমেটো ক্ষেতে লেট ব্লাইট রোগ দমনে করণীয় কী?',
    'সরিষা ক্ষেতে জাব পোকা দমনের সবচেয়ে কার্যকর উপায়',
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const prompt = textToSend || inputText;
    if (!prompt.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, history: messages.slice(-6) }),
      });

      const data = await response.json();

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: data.reply || 'দুঃখিত, কোনো উত্তর পাওয়া যায়নি। অনুগ্রহ করে পুনরায় চেষ্টা করুন।',
        timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'ai',
          text: 'এআই সার্ভারে যোগাযোগ করতে সমস্যা হচ্ছে। আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন অথবা অফলাইন ১৬১২৩ হটলাইনে কল দিন।',
          timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Bento Grid Header */}
      <div className="bento-card bg-gradient-to-br from-[#1A1D23] to-[#111418] border-[#2D3139]">
        <div className="bento-title">
          <span className="bento-title-icon">◆</span> কৃষি AI পরামর্শক (Gemini Agri Assistant)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
          কৃষি পরামর্শক AI (Gemini Agri Assistant)
        </h2>
        <p className="text-xs text-[#94A3B8] mt-1 max-w-3xl leading-relaxed">
          সার্ভার-সাইড জেমিনাই মডেলের সাহায্যে ফসলের রোগ নির্ণয়, অনুমোদিত ওষুধ নির্বাচন ও সার প্রয়োগ পরামর্শ।
        </p>
      </div>

      {/* Quick Prompts Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {quickPrompts.map((qp, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(qp)}
            className="px-3 py-1.5 rounded-lg text-xs bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/25 hover:border-[#10B981] font-medium whitespace-nowrap transition-all"
          >
            💡 {qp}
          </button>
        ))}
      </div>

      {/* Chat Container */}
      <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 min-h-[420px] flex flex-col justify-between">
        {/* Messages Scroll Area */}
        <div className="space-y-4 max-h-[480px] overflow-y-auto pr-2 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl text-xs leading-relaxed space-y-1 ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-tr-none font-medium'
                    : 'bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 rounded-tl-none border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <div
                  className={`text-[9px] font-mono text-right ${
                    msg.sender === 'user' ? 'text-emerald-200' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center text-xs text-slate-500 italic">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 animate-pulse">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                <span>Gemini AI প্রতিক্রিয়া তৈরি করছে...</span>
              </div>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Chat Input Bar */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="আপনার প্রশ্ন লিখুন (যেমন: ব্রি ধান২৮ এ সার ডোজ কত?)..."
            className="flex-1 p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            onClick={() => handleSend()}
            disabled={loading || !inputText.trim()}
            className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold transition-all shadow-md shadow-emerald-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
