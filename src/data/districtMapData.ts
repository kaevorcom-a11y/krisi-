import { DistrictInfo } from '../types';

export const BANGLADESH_DISTRICTS: DistrictInfo[] = [
  // Dhaka Division
  { id: 'dhaka', nameBengali: 'ঢাকা', nameEnglish: 'Dhaka', division: 'ঢাকা', topCrops: ['সবজি', 'ধান', 'পেঁপে'], soilType: 'পলি মাটি ও দোআঁশ', annualProductionTons: 350000, upazilaCount: 5, arableLandHectares: 45000, description: 'তুরাগ ও বুড়িগঙ্গা অববাহিকার উর্বর কৃষ্ণাঞ্চল।' },
  { id: 'gazipur', nameBengali: 'গাজীপুর', nameEnglish: 'Gazipur', division: 'ঢাকা', topCrops: ['কাঁঠাল', 'পেয়ারা', 'মাশরুম', 'ধান'], soilType: 'লাল শালবন মাটি ও দোআঁশ', annualProductionTons: 420000, upazilaCount: 5, arableLandHectares: 68000, description: 'বাংলাদেশের অন্যতম প্রধান কাঁঠাল ও মাশরুম উৎপাদনকারী জেলা।' },
  { id: 'tangail', nameBengali: 'টাঙ্গাইল', nameEnglish: 'Tangail', division: 'ঢাকা', topCrops: ['সরিষা', 'ধান', 'আনারস', 'কলা'], soilType: 'পলি মাটি ও মধুপুর গড় লাল মাটি', annualProductionTons: 890000, upazilaCount: 12, arableLandHectares: 210000, description: 'মধুপুরের আনারস ও বিশাল সরিষা ক্ষেতের জন্য বিখ্যাত।' },
  { id: 'manikganj', nameBengali: 'মানিকগঞ্জ', nameEnglish: 'Manikganj', division: 'ঢাকা', topCrops: ['সরিষা', 'কাঁচামরিচ', 'পেঁয়াজ', 'ধনিয়াপাতা'], soilType: 'পলি-দোআঁশ মাটি', annualProductionTons: 560000, upazilaCount: 7, arableLandHectares: 92000, description: 'পদ্মা ও যমুনার পলিধৌত উর্বর মশলা ও শাকসবজি অঞ্চল।' },
  { id: 'munshiganj', nameBengali: 'মুন্সীগঞ্জ', nameEnglish: 'Munshiganj', division: 'ঢাকা', topCrops: ['আলু', 'ধান', 'কলা', 'সবজি'], soilType: 'পলি দোআঁশ মাটি', annualProductionTons: 1400000, upazilaCount: 6, arableLandHectares: 58000, description: 'বাংলাদেশের আলুর রাজধানী হিসেবে পরিচিত।' },
  { id: 'faridpur', nameBengali: 'ফরিদপুর', nameEnglish: 'Faridpur', division: 'ঢাকা', topCrops: ['পেঁয়াজ', 'পাট', 'আখ', 'ধান'], soilType: 'পলি-দোআঁশ মাটি', annualProductionTons: 780000, upazilaCount: 9, arableLandHectares: 145000, description: 'পেঁয়াজ বীজ ও মানসম্মত পাট উৎপাদনের শীর্ষস্থান।' },

  // Rajshahi Division
  { id: 'rajshahi', nameBengali: 'রাজশাহী', nameEnglish: 'Rajshahi', division: 'রাজশাহী', topCrops: ['আম', 'ধান', 'পেঁয়াজ', 'ভুট্টা'], soilType: 'বরেন্দ্র লাল এটেল ও দোআঁশ', annualProductionTons: 950000, upazilaCount: 9, arableLandHectares: 180000, description: 'আমের রাজধানী ও সুস্বাদু রেশম অঞ্চল।' },
  { id: 'chapai-nawabganj', nameBengali: 'চাঁপাইনবাবগঞ্জ', nameEnglish: 'Chapai Nawabganj', division: 'রাজশাহী', topCrops: ['আম (আম্রপালি/ফজলী)', 'ধান', 'টমেটো'], soilType: 'বরেন্দ্র মাটি ও বেলে-দোআঁশ', annualProductionTons: 880000, upazilaCount: 5, arableLandHectares: 132000, description: 'আমের বৃহত্তম পাইকারি বাজার।' },
  { id: 'bogra', nameBengali: 'বগুড়া', nameEnglish: 'Bogra', division: 'রাজশাহী', topCrops: ['মরিচ', 'আলু', 'টমেটো', 'ধান'], soilType: 'করতোয়া পলি-দোআঁশ', annualProductionTons: 1650000, upazilaCount: 12, arableLandHectares: 225000, description: 'সবজি ও আলুর উত্তরবঙ্গের বিশাল হাব।' },
  { id: 'pabna', nameBengali: 'পাবনা', nameEnglish: 'Pabna', division: 'রাজশাহী', topCrops: ['পেঁয়াজ (তাহেরপুরী)', 'রসুন', 'গবাদিপশুর দুধ', 'ধান'], soilType: 'পলি-দোআঁশ', annualProductionTons: 1200000, upazilaCount: 9, arableLandHectares: 175000, description: 'পেঁয়াজ ও দুধ উৎপাদনে অত্যন্ত সুপরিচিত।' },

  // Rangpur Division
  { id: 'dinajpur', nameBengali: 'দিনাজপুর', nameEnglish: 'Dinajpur', division: 'রংপুর', topCrops: ['লিচু (বেদানা/চায়না-৩)', 'কটারিভোগ ধান', 'ভুট্টা'], soilType: 'দোআঁশ ও এটেল-দোআঁশ', annualProductionTons: 1850000, upazilaCount: 13, arableLandHectares: 285000, description: 'সুগন্ধি কটারিভোগ চাল ও লিচুর দেশ।' },
  { id: 'rangpur', nameBengali: 'রংপুর', nameEnglish: 'Rangpur', division: 'রংপুর', topCrops: ['তামাক', 'আলু', 'ধান', 'হাড়িভাঙা আম'], soilType: 'তিস্তা পলি মাটি', annualProductionTons: 1350000, upazilaCount: 8, arableLandHectares: 195000, description: 'হাড়িভাঙা আম ও তিস্তা নদীর পলি উর্বরতা।' },

  // Khulna Division
  { id: 'jessore', nameBengali: 'যশোর', nameEnglish: 'Jessore', division: 'খুলনা', topCrops: ['সবজি', 'ফুল (গদখালী)', 'খেজুর গুড়', 'ধান'], soilType: 'সুসংগঠিত দোআঁশ মাটি', annualProductionTons: 1450000, upazilaCount: 8, arableLandHectares: 210000, description: 'গদখালীর বাণিজ্যিকভাবে ফুল ও খেজুরের গুড় হাব।' },
  { id: 'chuadanga', nameBengali: 'চুয়াডাঙ্গা', nameEnglish: 'Chuadanga', division: 'খুলনা', topCrops: ['ভুট্টা', 'পান', 'আখ', 'ড্রাগন ফল'], soilType: 'মাথারভাঙ্গা পলি-দোআঁশ', annualProductionTons: 1100000, upazilaCount: 4, arableLandHectares: 98000, description: 'বাংলাদেশের সর্বোচ্চ তাপমাত্রা ও ভূট্টা উৎপাদনের শীর্ষ জেলা।' },

  // Chittagong Division
  { id: 'comilla', nameBengali: 'কুমিল্লা', nameEnglish: 'Comilla', division: 'চট্টগ্রাম', topCrops: ['ধান (আমন/বোরো)', 'সবজি', 'সরিষা'], soilType: 'গোমতী পলি মাটি', annualProductionTons: 1300000, upazilaCount: 17, arableLandHectares: 240000, description: 'গোমতী নদীর পলি সমভূমি ধান ও সবজি জোন।' },
  { id: 'chittagong', nameBengali: 'চট্টগ্রাম', nameEnglish: 'Chittagong', division: 'চট্টগ্রাম', topCrops: ['তরমুজ', 'ধান', 'চা', 'সেগুন কাঠ'], soilType: 'পাহাড়ী ও উপকূলীয় দোআঁশ', annualProductionTons: 980000, upazilaCount: 15, arableLandHectares: 190000, description: 'পাহাড়ী ফল, উপকূলীয় তরমুজ ও চা বাগান।' },

  // Barisal Division
  { id: 'barisal', nameBengali: 'বরিশাল', nameEnglish: 'Barisal', division: 'বরিশাল', topCrops: ['পেয়ারা (ভাসমান বাজার)', 'ধান', 'নারকেল', 'শাপলা'], soilType: 'উপকূলীয় পলি ও কাদা মাটি', annualProductionTons: 850000, upazilaCount: 10, arableLandHectares: 165000, description: 'ভাসমান পেয়ারা বাজার ও ধানের শস্য ভাণ্ডার।' },

  // Sylhet Division
  { id: 'sylhet', nameBengali: 'সিলেট', nameEnglish: 'Sylhet', division: 'সিলেট', topCrops: ['চা', 'কমলা/মাল্টা', 'বোরো ধান (হাওর)', 'বাঁশ'], soilType: 'পাহাড়ী অম্লীয় ও হাওর পলি', annualProductionTons: 720000, upazilaCount: 13, arableLandHectares: 220000, description: 'দুটি পাতা একটি কুঁড়ির চায়ের রাজধানী ও হাওরাঞ্চল।' },
];
