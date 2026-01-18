import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/types/database'

// Singleton instance
let client: ReturnType<typeof createBrowserClient<Database>> | null = null

export function getSupabaseClient() {
  if (client) {
    return client
  }

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return client
}

// Export the singleton instance directly
export const supabase = getSupabaseClient()

// Also export the creator function for flexibility
export const createClient = getSupabaseClient