import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sagfsoawfvvzehaveomk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZ2Zzb2F3ZnZ2emVoYXZlb21rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NzYyMDQsImV4cCI6MjA2MDI1MjIwNH0.bk9vmG8VEKGSWAv_YyoGYoOyvuBeUzud8fc3TNGMZzk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 