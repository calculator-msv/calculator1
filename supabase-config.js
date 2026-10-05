// Конфігурація Supabase
const SUPABASE_URL = 'https://rtkwhwutvetrnmjvoumx.supabase.co'; // Ваш URL із панелі Supabase
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0a3dod3V0dmV0cm5tanZvdW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExNDE2NDgsImV4cCI6MjEwNjcxNzY0OH0.0P_uDdy5965e6nRCj47l4ExBroaoOhQhNbR-kvM2Bdk'; // Ваш публічний ключ (anon key) з панелі Supabase

// Ініціалізація глобального клієнта Supabase
if (typeof supabase !== 'undefined' && supabase.createClient) {
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error("Supabase SDK не завантажено!");
}
