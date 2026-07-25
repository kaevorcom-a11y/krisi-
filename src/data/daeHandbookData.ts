import { DAEGuideMonth, HotlineNumber } from '../types';

export const DAE_12_MONTHS_GUIDE: DAEGuideMonth[] = [
  {
    monthNameBengali: 'বৈশাখ',
    monthNameEnglish: 'Baishakh (April-May)',
    seasonName: 'খরিপ-১',
    keyCrops: ['আউশ ধান', 'পাট', 'গ্রীষ্মকালীন সবজি', 'আম-লিচু'],
    tasks: [
      {
        title: 'আউশ ধানের চারা যত্ন ও বপন',
        description: 'আউশ ধানের জমিতে শেষ চাষে টিএসপি, এমপি ও জিপসাম প্রয়োগ করে চারা রোপণ ও নিড়ানি দেওয়া।',
        cropCategory: 'ধান',
      },
      {
        title: 'পাট ফসলের আগাছা ছাঁটাই',
        description: 'পাট গাছের বয়স ১৫-২০ দিন হলে অতিরিক্ত দুর্বল চারা ছাঁটাই করে সারিতে ৩-৪ ইঞ্চি পর পর গাছ রাখা।',
        cropCategory: 'পাট',
      },
      {
        title: 'আমের ব্যাগিং ও ফল মাছি দমন',
        description: 'আম মার্বেল আকারের হলে ফ্রুট ব্যাগিং করা এবং মাছি পোকা দমনে সেক্স ফেরোমোন ফাঁদ টাঙানো।',
        cropCategory: 'ফলমূল',
      },
    ],
  },
  {
    monthNameBengali: 'জ্যৈষ্ঠ',
    monthNameEnglish: 'Jaishtha (May-June)',
    seasonName: 'খরিপ-১ / খরিপ-২',
    keyCrops: ['আম', 'কাঁঠাল', 'রুপালী আউশ', 'রোপা আমন বীজতলা'],
    tasks: [
      {
        title: 'রোপা আমন ধানের বীজতলা প্রস্তুত',
        description: 'উঁচু ও আলো-বাতাসযুক্ত জমিতে বীজতলা বানিয়ে উন্নত জাতের রোপা আমন (যেমন ব্রি ধান৮৭, ব্রি ধান৭৫) এর বীজ ফেলা।',
        cropCategory: 'ধান',
      },
      {
        title: 'ফল সংগ্রহ ও বাজারজাতকরণ',
        description: 'আম, কাঁঠাল, লিচু ও আনারস সঠিক পরিপক্কতায় কেটে ক্যারেটে সাবধানে পরিবহন করা।',
        cropCategory: 'ফলমূল',
      },
    ],
  },
  {
    monthNameBengali: 'আষাঢ়',
    monthNameEnglish: 'Ashar (June-July)',
    seasonName: 'খরিপ-২',
    keyCrops: ['রোপা আমন চারা', 'পাট পচানো', 'গ্রীষ্মকালীন মরিচ'],
    tasks: [
      {
        title: 'আমন ধানের চারা রোপণ',
        description: '২৫-৩০ দিন বয়সের আমন চারা ২-৩ সেমি গভীর কাদাময় জমিতে ২০x১৫ সেমি দূরত্বে রোপণ।',
        cropCategory: 'ধান',
      },
      {
        title: 'পাট কাটা ও রিবনিং/পচানো',
        description: 'পাটের ফল আসার সময় কেটে রিবনার দিয়ে ছাল ছাড়িয়ে পরিচ্ছন্ন রিবন পচানো প্রযুক্তি ব্যবহার।',
        cropCategory: 'পাট',
      },
    ],
  },
  {
    monthNameBengali: 'শ্রাবণ',
    monthNameEnglish: 'Shraban (July-August)',
    seasonName: 'খরিপ-২',
    keyCrops: ['আমন ধান', 'বৃক্ষরোপণ অভিযান', 'তিল-কাউন'],
    tasks: [
      {
        title: 'আমন ধান ক্ষেতে ইউরিয়া উপরি প্রয়োগ',
        description: 'রোপণের ১৫-২০ দিন পর ১ম কিস্তিতে শতক প্রতি ৪০০ গ্রাম ইউরিয়া সার উপরি প্রয়োগ করা।',
        cropCategory: 'ধান',
      },
      {
        title: 'ফলদ ও বনজ চারা রোপণ',
        description: 'জাতীয় বৃক্ষরোপণ মৌসুমে বাড়ির আঙিনায় ও খামার সীমানায় উন্নত ফলদ ও কাঠের চারা রোপণ।',
        cropCategory: 'বৃক্ষ',
      },
    ],
  },
  {
    monthNameBengali: 'ভাদ্র',
    monthNameEnglish: 'Bhadra (August-September)',
    seasonName: 'খরিপ-২',
    keyCrops: ['আমন ধান', 'মাজরা পোকা দমন', 'গ্রীষ্মকালীন টমেটো'],
    tasks: [
      {
        title: 'আমন ধানের পার্চিং ও পোকা নজরদারি',
        description: 'ক্ষেতে ডাল পুঁতে (পার্চিং) ফিঙ্গে পাখিকে মাজরা ও পাতা মোড়ানো পোকা খেতে সাহায্য করা।',
        cropCategory: 'ধান',
      },
    ],
  },
  {
    monthNameBengali: 'আশ্বিন',
    monthNameEnglish: 'Ashwin (September-October)',
    seasonName: 'নাবি খরিপ-২ / রবি পূর্ববতী',
    keyCrops: ['আগাম শীতকালীন সবজি', 'মাসকলাই', 'সরিষা জমি প্রস্তুত'],
    tasks: [
      {
        title: 'আগাম ফুলকপি, বাঁধাকপি ও টমেটো চারা',
        description: 'উঁচু বেডে পলিথিন শেড দিয়ে শীতকালীন আগাম সবজির চারা রোপণ ও নিড়ানি।',
        cropCategory: 'সবজি',
      },
    ],
  },
  {
    monthNameBengali: 'কার্তিক',
    monthNameEnglish: 'Kartik (October-November)',
    seasonName: 'রবি মৌসুমের সূচনা',
    keyCrops: ['সরিষা', 'আলু', 'গম', 'মসুর-খেসারি'],
    tasks: [
      {
        title: 'সরিষা ও আলু বপন/রোপণ',
        description: 'কার্তিক মাসেই বারি সরিষা-১৪ এবং আলু চাষের সেরা সময়। জমি তৈরি ও সার প্রয়োগ।',
        cropCategory: 'তেল ও সবজি',
      },
    ],
  },
  {
    monthNameBengali: 'অগ্রহায়ণ',
    monthNameEnglish: 'Agrahayan (November-December)',
    seasonName: 'রবি মৌসুম',
    keyCrops: ['আমন ধান কর্তন', 'বোরো বীজতলা', 'গম ও ভুট্টা'],
    tasks: [
      {
        title: 'আমন ধান কাটা ও বোরো বীজতলা',
        description: 'পাকা আমন ধান কেটে মাড়াই ও বোরো ধানের জন্য কোল্ড ইনজুরি মুক্ত প্লাস্টিক বীজতলা তৈরি।',
        cropCategory: 'ধান',
      },
    ],
  },
  {
    monthNameBengali: 'পৌষ',
    monthNameEnglish: 'Poush (December-January)',
    seasonName: 'রবি মৌসুম',
    keyCrops: ['বোরো চারা রোপণ', 'আলুর নাবি ধসা রোগ', 'পেঁয়াজ-রসুন'],
    tasks: [
      {
        title: 'আলুর লেট ব্লাইট রোগ প্রতিরোধ',
        description: 'ঘন কুয়াশার আবহাওয়ায় আলুর নাবি ধসা রোগ রুখতে আগাম ম্যানকোজেব দিয়ে স্প্রে করা।',
        cropCategory: 'সবজি',
      },
    ],
  },
  {
    monthNameBengali: 'মাঘ',
    monthNameEnglish: 'Magh (January-February)',
    seasonName: 'রবি মৌসুম',
    keyCrops: ['বোরো ধান নিড়ানি', 'ভুট্টা সেচ', 'আমের মুকুল'],
    tasks: [
      {
        title: 'আমের মুকুলের প্রথম স্প্রে',
        description: 'আম গাছে মুকুল আসার প্রাক্কালে হপার পোকা ও পাউডারি মিলডিউ দমনে স্প্রে করা।',
        cropCategory: 'ফলমূল',
      },
    ],
  },
  {
    monthNameBengali: 'ফাল্গুন',
    monthNameEnglish: 'Falgun (February-March)',
    seasonName: 'রবি / খরিপ-১',
    keyCrops: ['বোরো থোড় অবস্থা', 'তরমুজ', 'মিষ্টি কুমড়া'],
    tasks: [
      {
        title: 'বোরো ধানের সেচ ও কাইচ থোড় পর্যায়',
        description: 'বোরো ধান ক্ষেতে ৫ সেমি পানি ধরে রাখা এবং শেষ কিস্তির ইউরিয়া ও পটাশ সার দেওয়া।',
        cropCategory: 'ধান',
      },
    ],
  },
  {
    monthNameBengali: 'চৈত্র',
    monthNameEnglish: 'Chaitra (March-April)',
    seasonName: 'রবি সমাপনী',
    keyCrops: ['গম কাটা', 'সরিষা তোলা', 'বোরো পাকার প্রাক্কাল'],
    tasks: [
      {
        title: 'গম, আলু ও পেঁয়াজ তোলা ও সংরক্ষণ',
        description: 'পরিমানমতো রোদে শুকিয়ে আলু হিমাগারে ও পেঁয়াজ মাচায় বাতাসমুক্তভাবে রাখা।',
        cropCategory: 'সংরক্ষণ',
      },
    ],
  },
];

export const OFFICIAL_SEED_RATES: { crop: string; unitBigha: string; unitDecimal: string; spacing: string }[] = [
  { crop: 'উচ্চফলনশীল ধান (বোরো/আমন)', unitBigha: '৪-৫ কেজি (বীজতলা)', unitDecimal: '১২০-১৫০ গ্রাম', spacing: '২০ x ১৫ সেমি' },
  { crop: 'হাইব্রিড ধান', unitBigha: '১.৫-২ কেজি', unitDecimal: '৫০-৬০ গ্রাম', spacing: '২৫ x ১৫ সেমি' },
  { crop: 'হাইব্রিড ভুট্টা', unitBigha: '২.৫-৩ কেজি', unitDecimal: '৯০-১০০ গ্রাম', spacing: '৬০ x ২৫ সেমি' },
  { crop: 'গম', unitBigha: '১৬-১৮ কেজি', unitDecimal: '৫০০-৫৫০ গ্রাম', spacing: '২০ সেমি সারি' },
  { crop: 'আলু (বীজ আলু)', unitBigha: '২০০-২২০ কেজি', unitDecimal: '৬.৫-৭ কেজি', spacing: '৫০ x ২০ সেমি' },
  { crop: 'সরিষা', unitBigha: '১.২-১.৫ কেজি', unitDecimal: '৪০-৫০ গ্রাম', spacing: '২৫ সেমি সারি' },
  { crop: 'মসুর ডাল', unitBigha: '৪-৫ কেজি', unitDecimal: '১২০-১৫০ গ্রাম', spacing: '২০ সেমি সারি' },
  { crop: 'পেঁয়াজ (বীজ)', unitBigha: '১.৫-২ কেজি', unitDecimal: '৫০-৬০ গ্রাম', spacing: '১৫ x ১০ সেমি' },
  { crop: 'টমেটো (চারা)', unitBigha: '২০-২৫ গ্রাম (বীজ)', unitDecimal: '১ গ্রাম', spacing: '৬০ x ৪৫ সেমি' },
  { crop: 'পাট (তোষা)', unitBigha: '১ কেজি', unitDecimal: '৩০-৩৫ গ্রাম', spacing: '৩০ x ৭-১০ সেমি' },
];

export const EMERGENCY_HOTLINES: HotlineNumber[] = [
  {
    institution: 'কৃষি কল সেন্টার (AIS / DAE)',
    number: '16123',
    tagline: 'যে কোনো সিম থেকে সম্পূর্ণ টোল-ফ্রি সরাসরি কৃষি বিশেষজ্ঞের সাথে কথা বলুন',
    hours: 'সকাল ৭:০০ - রাত ৯:০০ (প্রতিদিন)',
    category: 'National',
  },
  {
    institution: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE Head Office)',
    number: '02-55028242',
    tagline: 'খামারবাড়ি, ফার্মগেট, ঢাকা - ১২১৫',
    hours: 'সকাল ৯:০০ - বিকাল ৫:০০ (সরকারি কর্মদিবস)',
    category: 'National',
  },
  {
    institution: 'বাংলাদেশ ধান গবেষণা ইনস্টিটিউট (BRRI Hotline)',
    number: '01711-285640',
    tagline: 'ধানের রোগবালাই, সার ও নতুন জাত সম্পর্কিত বিশেষজ্ঞ পরামর্শ',
    hours: '২৪/৭ জরুরি হেল্পলাইন',
    category: 'Research',
  },
  {
    institution: 'বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট (BARI Call Info)',
    number: '02-49272101',
    tagline: 'সবজি, ফলমূল, মসলা ও তেলবীজের আধুনিক বৈজ্ঞানিক পরামর্শ',
    hours: 'সকাল ৯:০০ - বিকাল ৫:০০',
    category: 'Research',
  },
  {
    institution: 'বাংলাদেশ কৃষি উন্নয়ন কর্পোরেশন (BADC Seed Helpline)',
    number: '02-9556080',
    tagline: 'মানসম্পন্ন সার্টিফাইড বীজ ও সেচ পাম্প সেবা তথ্য',
    hours: 'সকাল ৯:০০ - বিকাল ৫:০০',
    category: 'Seed',
  },
  {
    institution: 'মৃত্তিকা সম্পদ উন্নয়ন ইনস্টিটিউট (SRDI Soil Test)',
    number: '02-58153483',
    tagline: 'মাটি পরীক্ষা, পিএইচ (pH) মান ও ডিজিটাল সার সুপারিশ কার্ড',
    hours: 'সকাল ৯:০০ - বিকাল ৪:৩০',
    category: 'Soil',
  },
];
