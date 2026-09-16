import { createBrowserClient } from '@supabase/ssr'

export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return false;
  if (url.includes('placeholder') || url.includes('dummy') || url.includes('example.com')) return false;
  if (key === 'placeholder' || key === 'dummy') return false;
  return true;
}

const createMockBrowserClient = () => {
  const mockBuilder: any = {
    select: () => mockBuilder,
    insert: () => mockBuilder,
    update: () => mockBuilder,
    delete: () => mockBuilder,
    eq: () => mockBuilder,
    neq: () => mockBuilder,
    order: () => mockBuilder,
    limit: () => mockBuilder,
    single: async () => ({ data: null, error: null }),
    then: (resolve: (val: any) => void) => resolve({ data: [], error: null }),
  };

  return {
    from: () => mockBuilder,
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: "Supabase not configured" } }),
      signOut: async () => ({ error: null }),
    },
  } as any;
};

export function createClient() {
  if (!isSupabaseConfigured()) {
    return createMockBrowserClient();
  }
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createBrowserClient(url, key)
}

