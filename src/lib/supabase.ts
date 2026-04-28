import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://prwihcsgleemiojrlqdj.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByd2loY3NnbGVlbWlvanJscWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMjc0MjEsImV4cCI6MjA5MjkwMzQyMX0.Wcgr1comozqgqY9MpicgS9Cc6vO_yrO-1TGW9ciRAB8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  },
});

export const SUPABASE_PROJECT_URL = SUPABASE_URL;

/** Public URL for a file stored in the `cms-media` storage bucket. */
export function publicMediaUrl(path: string) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const { data } = supabase.storage.from("cms-media").getPublicUrl(path);
  return data.publicUrl;
}