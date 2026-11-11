import { createClient, type SupabaseClient } from "@supabase/supabase-js";
let client: SupabaseClient | null = null;
export function supabase() {
  if (client) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Configure .env.local with Supabase URL and publishable key");
  client = createClient(url, key);
  return client;
}
export type Role = "learner" | "issuer" | "verifier" | "admin" | "auditor";
