import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  // import.meta.env.SUPABASE_URL,
  // import.meta.env.SUPABASE_ANON_KEY,
  "https://ltqbgthwoewodlicoshm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0cWJndGh3b2V3b2RsaWNvc2htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMjMyMTgsImV4cCI6MjAzMzg5OTIxOH0.2Ke4qSnJt0EpJ6njA4HARRpDPuaI5WiSuBEydEueCWk",
);
