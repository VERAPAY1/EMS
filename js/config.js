/**
 * AL-ARABI EMS v36.7
 * Centralized Configuration Module
 * Production-ready Enterprise Management System
 */

// ============================================
// SUPABASE CONFIGURATION
// ============================================
const CONFIG = {
  supabase: {
    url: 'https://qqqxxbixuzdihfnmutpp.supabase.co',
    anonKey: 'sb_publishable_oAqdfpvMyYEdeMzZuIb57w_muvQROpY'
  },
  
  // Application Settings
  app: {
    name: 'AL-ARABI EMS',
    version: '36.7',
    environment: 'production',
    timezone: 'Africa/Lagos'
  },

  // Feature Flags
  features: {
    cbtEnabled: true,
    attendanceEnabled: true,
    financialEnabled: true,
    reportsEnabled: true,
    notificationsEnabled: true,
    analyticsEnabled: true
  },

  // Pagination
  pagination: {
    defaultPageSize: 20,
    maxPageSize: 100
  },

  // Session Management
  session: {
    timeout: 60 * 60 * 1000, // 1 hour
    warningBefore: 5 * 60 * 1000, // 5 minutes before timeout
    refreshInterval: 30 * 60 * 1000 // 30 minutes
  },

  // Database Table Names
  tables: {
    students: 'students',
    teachers: 'teachers',
    parents: 'parents',
    staff: 'staff',
    administrators: 'administrators',
    classes: 'classes',
    sessions: 'academic_sessions',
    attendance: 'attendance',
    payments: 'payments',
    invoices: 'invoices',
    cbtExams: 'cbt_exams',
    cbtQuestions: 'cbt_questions',
    cbtOptions: 'cbt_options',
    cbtAttempts: 'cbt_attempts',
    cbtAnswers: 'cbt_answers',
    auditLogs: 'audit_logs',
    announcements: 'announcements',
    notifications: 'notifications'
  },

  // Storage Buckets
  storage: {
    studentPhotos: 'student-images',
    teacherPhotos: 'teacher-images',
    documents: 'documents',
    reports: 'reports'
  },

  // UI Configuration
  ui: {
    sidebarWidth: 280,
    topbarHeight: 64,
    animationDuration: 300,
    theme: 'light' // 'light' or 'dark'
  },

  // API Limits
  api: {
    timeout: 30000, // 30 seconds
    retries: 3,
    retryDelay: 1000 // 1 second
  },

  // Validation Rules
  validation: {
    minPasswordLength: 8,
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phonePattern: /^[\d\s\-\+\(\)]{10,}$/,
    passwordRequirements: {
      uppercase: true,
      lowercase: true,
      numbers: true,
      special: false
    }
  }
};

// ============================================
// INITIALIZE SUPABASE CLIENT
// ============================================
let supabaseClient = null;

async function initializeSupabase() {
  if (!window.supabase) {
    console.error('Supabase library not loaded');
    return null;
  }
  
  supabaseClient = window.supabase.createClient(
    CONFIG.supabase.url,
    CONFIG.supabase.anonKey
  );
  
  return supabaseClient;
}

// Get Supabase client (lazy initialization)
function getSupabaseClient() {
  if (!supabaseClient) {
    initializeSupabase();
  }
  return supabaseClient;
}

// ============================================
// EXPORT CONFIGURATION
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, getSupabaseClient };
}
