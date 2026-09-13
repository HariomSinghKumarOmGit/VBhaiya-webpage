-- programs / retreats
create table programs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text,
  description text,
  start_date date,
  end_date date,
  cover_image text,
  booking_link text, -- razorpay/calendly link
  created_at timestamptz default now()
);

-- calendar events (daily sits, satsangs, one-offs)
create table calendar_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_date date not null,
  event_time text,
  type text check (type in ('session','satsang','retreat','purnima','amavasya','other')),
  program_id uuid references programs(id),
  created_at timestamptz default now()
);

-- journal / blog
create table journal_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  body text not null,
  cover_image text,
  published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now()
);

-- shop items (own products + affiliate)
create table shop_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  image text,
  price text,
  external_link text not null, -- Amazon affiliate / SaaS referral link
  category text check (category in ('own','amazon','saas')),
  created_at timestamptz default now()
);

-- testimonials
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  quote text not null,
  created_at timestamptz default now()
);

-- newsletter subscribers
create table subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);

-- RLS Setup
alter table programs enable row level security;
alter table calendar_events enable row level security;
alter table journal_posts enable row level security;
alter table shop_items enable row level security;
alter table testimonials enable row level security;
alter table subscribers enable row level security;

-- Public read access
create policy "Public can view programs" on programs for select using (true);
create policy "Public can view calendar events" on calendar_events for select using (true);
create policy "Public can view journal posts" on journal_posts for select using (true);
create policy "Public can view shop items" on shop_items for select using (true);
create policy "Public can view testimonials" on testimonials for select using (true);

-- Subscribers: only insert by public (newsletter form)
create policy "Public can insert subscribers" on subscribers for insert with check (true);

-- Admin full access (assuming authenticated users are admins)
create policy "Admins have full access to programs" on programs using (auth.role() = 'authenticated');
create policy "Admins have full access to calendar events" on calendar_events using (auth.role() = 'authenticated');
create policy "Admins have full access to journal posts" on journal_posts using (auth.role() = 'authenticated');
create policy "Admins have full access to shop items" on shop_items using (auth.role() = 'authenticated');
create policy "Admins have full access to testimonials" on testimonials using (auth.role() = 'authenticated');
create policy "Admins have full access to subscribers" on subscribers using (auth.role() = 'authenticated');
