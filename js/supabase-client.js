/* ============================================
   VDIRECTORS — supabase-client.js
   ============================================ */

const SUPABASE_URL  = 'https://zpyzgicyfkancewoxmbg.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NjE5NTcsImV4cCI6MjA5MDAzNzk1N30.ZmOKjLWPga8AZ6nEvJUYh0c1QrqBmHaOCiIry3iEGiU';

window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
