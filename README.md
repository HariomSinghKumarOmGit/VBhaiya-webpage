# Innerlight

A luxury spiritual studio platform for Vishal Gautam.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Supabase (Database & Auth)
- Framer Motion

## Deployment (Vercel)

When deploying to Vercel, ensure you set the following Environment Variables from your Supabase project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Setup

1. Run the SQL schema from `supabase/schema.sql` in your Supabase SQL Editor.
2. Set up the Environment Variables above in your `.env.local` file.
3. Run `npm run dev` to start the development server.

## Features Built
- Scroll-triggered glass nav and interactive 3D hero
- Auto-computing Lunar Calendar merged with admin events
- Programs, Journal, and Shop pages powered by Supabase
- Gated Admin Dashboard
- Newsletter Signup
