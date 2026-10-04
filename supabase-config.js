// Адреса та публічний ключ проекту Supabase
const SUPABASE_URL = "https://rtkwhwutvetrnmjvoumx.supabase.co";
const SUPABASE_KEY = "СЮДИ_ВСТАВТЕ_ВАШ_СКОПІЙОВАНИЙ_PUBLISHABLE_KEY";

// Створення єдиного глобального клієнта (ВАЖЛИВО: window.supabase)
window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
