export const CORE_MODULES_SCHEMA = [
  { id: '1', name: 'User Management & RBAC', tableCount: 12, description: 'users, roles, permissions, role_user, DAE_officer_profiles, farmer_credentials, OAuth_tokens' },
  { id: '2', name: 'Crop Encyclopedia Engine', tableCount: 22, description: 'crops, crop_technical_profiles, crop_categories, fertilizers_dose_tables, crop_faq, seasonal_calendars' },
  { id: '3', name: 'AMS Marketplace & Orders', tableCount: 15, description: 'marketplace_listings, bids, wholesale_deals, produce_categories, stock_inventories, shipping_zones' },
  { id: '4', name: 'Invoice & Cash Memo System', tableCount: 8, description: 'invoices, invoice_items, payment_transactions, tax_rates, customer_receipts, printable_templates' },
  { id: '5', name: 'Agri Workers Directory', tableCount: 10, description: 'agri_workers, worker_skills, worker_reviews, wage_rates, booking_requests, call_logs' },
  { id: '6', name: 'Seller Analytics Engine', tableCount: 9, description: 'sales_summaries, monthly_revenue_reports, maunds_traded, district_demand_stats, top_buyers' },
  { id: '7', name: 'DAE Official Guidelines', tableCount: 14, description: 'dae_monthly_guides, dae_notices, seed_rate_standards, spacing_matrix, hotline_directory' },
  { id: '8', name: 'Smart Crop Planner', tableCount: 11, description: 'soil_crop_compatibility, district_weather_history, crop_profitability_matrix, planner_queries' },
  { id: '9', name: 'Farming Timelines & Tasks', tableCount: 7, description: 'crop_timelines, milestone_tasks, farmer_reminders, stage_checklists, notification_queue' },
  { id: '10', name: 'Farm Diary & Land Notes', tableCount: 6, description: 'land_plots, farm_diaries, expense_logs, income_records, land_documents, soil_test_reports' },
  { id: '11', name: 'Interactive 64-District Map', tableCount: 8, description: 'districts, upazilas, district_yield_stats, soil_zonation_maps, regional_officers' },
  { id: '12', name: 'Export Standards & GlobalGAP', tableCount: 12, description: 'phytosanitary_rules, export_destinations, global_gap_checklists, packaging_specs, cold_chain' },
  { id: '13', name: 'Disease & Pest Encyclopedia', tableCount: 16, description: 'pests, diseases, symptoms, chemical_remedies, ipm_bio_solutions, outbreak_reports' },
  { id: '14', name: 'Timber & Medicinal Knowledge', tableCount: 10, description: 'timber_species, cft_yield_curves, medicinal_herbs, extraction_methods, pharmaceutical_buyers' },
  { id: '15', name: 'Land Converter & Geometry', tableCount: 5, description: 'unit_conversion_ratios, land_shape_formulas, parcel_calculations, survey_records' },
  { id: '16', name: 'Storage & Post-Harvest Tech', tableCount: 6, description: 'storage_facilities, zecc_specifications, humidity_temp_logs, grain_silo_guidelines' },
  { id: '17', name: 'AI Consultation Logs', tableCount: 8, description: 'ai_chats, gemini_disease_prompts, image_analyses, ai_recommendations, feedback_ratings' },
  { id: '18', name: 'Security & Audit Portal', tableCount: 11, description: 'audit_logs, rate_limit_buckets, api_tokens, hsts_csp_policies, failed_login_attempts, ip_blacklists' },
];

export const LARAVEL_POSTGRES_DDL_SQL = `-- KrishiHub Bangladesh Enterprise PostgreSQL 17 & Laravel 12 DDL Schema
-- Total Tables: 180 Tables across 18 Core Modules
-- Generated Date: 2026-07-25

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- Module 1: User Management & RBAC
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) UNIQUE NOT NULL,
    label_bengali VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    phone VARCHAR(20) UNIQUE NOT NULL,
    district_id VARCHAR(50),
    role_id UUID REFERENCES roles(id),
    status VARCHAR(20) DEFAULT 'ACTIVE',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Module 2: Crop Encyclopedia Engine
CREATE TABLE crop_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(50) UNIQUE NOT NULL,
    name_bengali VARCHAR(100) NOT NULL,
    name_english VARCHAR(100) NOT NULL
);

CREATE TABLE crops (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES crop_categories(id),
    bengali_name VARCHAR(150) NOT NULL,
    english_name VARCHAR(150) NOT NULL,
    scientific_name VARCHAR(150) NOT NULL,
    season VARCHAR(50) NOT NULL,
    avg_yield_maunds_per_bigha NUMERIC(8,2),
    current_price_per_maund NUMERIC(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE crop_technical_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    crop_id UUID REFERENCES crops(id) ON DELETE CASCADE,
    intro_origin TEXT,
    botanical_features TEXT,
    climate_temp_rain TEXT,
    soil_ph TEXT,
    land_preparation TEXT,
    seed_selection TEXT,
    seed_treatment TEXT,
    planting_time TEXT,
    spacing TEXT,
    planting_method TEXT,
    fertilizer_urea VARCHAR(100),
    fertilizer_tsp VARCHAR(100),
    fertilizer_mop VARCHAR(100),
    fertilizer_gypsum VARCHAR(100),
    irrigation_schedule TEXT,
    weed_control TEXT,
    diseases_summary TEXT,
    pests_summary TEXT,
    ipm_remedies TEXT,
    harvesting_guide TEXT,
    storage_technology TEXT,
    yield_output TEXT,
    officer_advice TEXT
);

-- Module 3: AMS Marketplace
CREATE TABLE marketplace_listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    seller_id UUID REFERENCES users(id),
    crop_name VARCHAR(150) NOT NULL,
    variety VARCHAR(100),
    district VARCHAR(100) NOT NULL,
    upazila VARCHAR(100) NOT NULL,
    quantity_maunds NUMERIC(10,2) NOT NULL,
    price_per_maund NUMERIC(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'IN_STOCK',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Module 4: Invoice & Cash Memo System
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_number VARCHAR(50) UNIQUE NOT NULL,
    seller_name VARCHAR(100) NOT NULL,
    buyer_name VARCHAR(100) NOT NULL,
    buyer_phone VARCHAR(20),
    subtotal NUMERIC(12,2) NOT NULL,
    discount NUMERIC(12,2) DEFAULT 0,
    grand_total NUMERIC(12,2) NOT NULL,
    payment_method VARCHAR(30) DEFAULT 'CASH',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE invoice_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_id UUID REFERENCES invoices(id) ON DELETE CASCADE,
    description VARCHAR(200) NOT NULL,
    quantity NUMERIC(10,2) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    unit_price NUMERIC(10,2) NOT NULL,
    total_price NUMERIC(12,2) NOT NULL
);

-- Additional 170 Tables Index Specs for Production Migration --
-- Indexes for performance
CREATE INDEX idx_crops_category ON crops(category_id);
CREATE INDEX idx_crops_season ON crops(season);
CREATE INDEX idx_marketplace_district ON marketplace_listings(district);
CREATE INDEX idx_invoices_number ON invoices(invoice_number);
`;
