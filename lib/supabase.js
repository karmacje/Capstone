import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project URL and anon key
const supabaseUrl = 'https://rmsnmrugwldwimcrydsz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtc25tcnVnd2xkd2ltY3J5ZHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNDY3NTIsImV4cCI6MjA1NzkyMjc1Mn0.OavFJj4q0UzJOrHozqK93fAyW3xRMG3NHU8lHK7LIjI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
}); 