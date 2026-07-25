export type ThemeMode = 'dark' | 'light';

export type MainTab =
  | 'encyclopedia'
  | 'ams'
  | 'dae-handbook'
  | 'smart-tools'
  | 'crop-map'
  | 'diseases-pests'
  | 'timber-medicinal'
  | 'land-glossary'
  | 'db-security'
  | 'ai-advisor';

export type CropCategory =
  | 'cereals'
  | 'vegetables'
  | 'fruits'
  | 'flowers'
  | 'spices'
  | 'pulses'
  | 'oilseeds'
  | 'medicinal'
  | 'timber'
  | 'bamboo'
  | 'mushroom'
  | 'aquatic';

export type Season = 'রবি' | 'খরিপ-১' | 'খরিপ-২' | 'বারোমাসি';

export type SoilType =
  | 'দোআঁশ'
  | 'এটেল-দোআঁশ'
  | 'বেলে-দোআঁশ'
  | 'এটেল'
  | 'বেলে'
  | 'পলি মাটি';

export interface FertilizerDose {
  urea: string;
  tsp: string;
  mop: string;
  gypsum: string;
  zinc: string;
  cowdung: string;
}

export interface TechnicalProfile {
  introAndOrigin: string; // ১. পরিচিতি ও উৎপত্তি
  botanicalFeatures: string; // ২. বৈশিষ্ট্যাবলী ও অঙ্গসংস্থান
  climate: string; // ৩. আবহাওয়া (তাপমাত্রা, বৃষ্টিপাত, আর্দ্রতা)
  soilAndPh: string; // ৪. মাটি ও পিএইচ (pH) মান
  landPreparation: string; // ৫. জমি প্রস্তুতি
  seedSelection: string; // ৬. বীজ নির্বাচন
  seedTreatment: string; // ৭. বীজ শোধন
  plantingTime: string; // ৮. রোপণের সময়
  spacing: string; // ৯. রোপণ দূরত্ব
  plantingMethod: string; // ১০. রোপণ পদ্ধতি
  fertilizerManagement: FertilizerDose; // ১১. সার ব্যবস্থাপনা
  irrigation: string; // ১২. সেচ ব্যবস্থাপনা
  weedControl: string; // ১৩. আগাছা দমন
  diseases: string; // ১৪. রোগবালাই
  pests: string; // ১৫. ক্ষতিকর পোকা-মাকড়
  ipmRemedies: string; // ১৬. আইপিএম ও সমন্বিত প্রতিকার
  harvesting: string; // ১৭. ফসল সংগ্রহ
  storageTech: string; // ১৮. সংরক্ষণ প্রযুক্তি
  yieldAndOutput: string; // ১৯. ফলন ও উৎপাদন
  marketPrice: string; // ২০. বর্তমান বাজার মূল্য
  faq: { question: string; answer: string }[]; // ২১. সাধারণ প্রশ্নোত্তর (FAQ)
  officerAdvice: string; // ২২. উপজেলা কৃষি কর্মকর্তার পরামর্শ
}

export interface Crop {
  id: string;
  bengaliName: string;
  englishName: string;
  scientificName: string;
  category: CropCategory;
  season: Season;
  soilTypes: SoilType[];
  suitableDistricts: string[]; // Districts or "সব জেলা"
  avgYieldPerBigha: string; // e.g., "২৫-৩০ মন"
  currentPricePerMaund: number; // in BDT
  iconName: string;
  badgeTag: string;
  profile: TechnicalProfile;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  cropName: string;
  variety: string;
  farmerName: string;
  district: string;
  upazila: string;
  quantityMaunds: number;
  pricePerMaund: number;
  contactNumber: string;
  postedDate: string;
  status: 'In Stock' | 'Sold Out';
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalPrice: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  sellerName: string;
  sellerPhone: string;
  buyerName: string;
  buyerPhone: string;
  buyerAddress: string;
  items: InvoiceItem[];
  subtotal: number;
  discount: number;
  grandTotal: number;
  paymentMethod: 'Cash' | 'bKash' | 'Nagad' | 'Bank';
}

export interface AgriWorker {
  id: string;
  name: string;
  role: 'রোয়া শ্রমিক' | 'ছাঁটাই মেকানিক' | 'ট্রেইনার' | 'ট্রাক/ট্রাক্টর ড্রাইভার' | 'সেচ মেকানিক';
  district: string;
  upazila: string;
  experienceYears: number;
  dailyWageBDT: number;
  phone: string;
  rating: number;
  availableNow: boolean;
}

export interface ResearchArticle {
  id: string;
  title: string;
  author: string;
  institution: 'BARI' | 'BRRI' | 'DAE' | 'BAU' | 'BINA';
  category: string;
  summary: string;
  publishedDate: string;
  readTime: string;
  contentMarkdown: string;
}

export interface DAEGuideMonth {
  monthNameBengali: string;
  monthNameEnglish: string;
  seasonName: string;
  keyCrops: string[];
  tasks: {
    title: string;
    description: string;
    cropCategory: string;
  }[];
}

export interface HotlineNumber {
  institution: string;
  number: string;
  tagline: string;
  hours: string;
  category: 'National' | 'Research' | 'Seed' | 'Soil';
}

export interface DistrictInfo {
  id: string;
  nameBengali: string;
  nameEnglish: string;
  division: string;
  topCrops: string[];
  soilType: string;
  annualProductionTons: number;
  upazilaCount: number;
  arableLandHectares: number;
  description: string;
}

export interface PestDisease {
  id: string;
  nameBengali: string;
  nameEnglish: string;
  type: 'disease' | 'pest';
  affectedCrops: string[];
  symptoms: string[];
  chemicalControl: string[];
  organicIpmControl: string[];
  preventionTips: string[];
  severity: 'উচ্চ' | 'মাঝারি' | 'কম';
}

export interface DiaryNote {
  id: string;
  landName: string;
  cropName: string;
  date: string;
  expenseBDT: number;
  expenseCategory: 'বীজ' | 'সার' | 'সেচ' | 'কীটনাশক' | 'শ্রমিক' | 'অন্যান্য';
  note: string;
}

export interface AcronymItem {
  acronym: string;
  fullNameBengali: string;
  fullNameEnglish: string;
  description: string;
  category: 'সংস্থা' | 'বিজ্ঞান' | 'সার/রসায়ন' | 'নীতিমালা';
}
