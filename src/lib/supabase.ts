import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://njyyllwlgqmchkrbwxou.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qeXlsbHdsZ3FtY2hrcmJ3eG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1MzgwMDIsImV4cCI6MjA5NjExNDAwMn0.viNeXHF-Kn2smRSetMIapbmuzxobc4s8g1v4AmNjXQE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface PilotRequest {
  name: string;
  email: string;
  greenhouse_name?: string;
  location?: string;
  greenhouse_size?: string;
  message?: string;
}

export async function submitPilotRequest(data: PilotRequest) {
  const { error } = await supabase.from('pilot_requests').insert([data]);
  if (error) throw error;
}
