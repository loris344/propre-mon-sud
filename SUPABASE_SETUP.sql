-- =========================================================
-- CMS Setup pour Supabase (projet: prwihcsgleemiojrlqdj)
-- À exécuter dans : Supabase Dashboard > SQL Editor > New query
-- =========================================================

-- 1) Enum + table des rôles (sécurité, jamais sur profils)
do $$ begin
  create type public.app_role as enum ('admin', 'editor');
exception when duplicate_object then null; end $$;

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- Fonction security definer pour éviter la récursion RLS
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

drop policy if exists "users read own roles" on public.user_roles;
create policy "users read own roles" on public.user_roles
  for select to authenticated using (auth.uid() = user_id);

-- 2) Articles
create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text,
  excerpt text,
  content_html text not null default '',
  cover_image text,
  read_time text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.articles enable row level security;

drop policy if exists "public read published articles" on public.articles;
create policy "public read published articles" on public.articles
  for select using (published = true);

drop policy if exists "admins full access articles" on public.articles;
create policy "admins full access articles" on public.articles
  for all to authenticated using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- 3) Avis clients
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  location text,
  rating int not null default 5 check (rating between 1 and 5),
  text text not null,
  service text,
  date date,
  display_order int not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.reviews enable row level security;

drop policy if exists "public read published reviews" on public.reviews;
create policy "public read published reviews" on public.reviews
  for select using (published = true);

drop policy if exists "admins full access reviews" on public.reviews;
create policy "admins full access reviews" on public.reviews
  for all to authenticated using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- 4) Galerie d'exemples
create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  image_path text not null,
  alt_text text not null default '',
  caption text,
  display_order int not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.gallery_items enable row level security;

drop policy if exists "public read published gallery" on public.gallery_items;
create policy "public read published gallery" on public.gallery_items
  for select using (published = true);

drop policy if exists "admins full access gallery" on public.gallery_items;
create policy "admins full access gallery" on public.gallery_items
  for all to authenticated using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- 5) Contenus de pages (blocs textuels éditables)
create table if not exists public.page_contents (
  id uuid primary key default gen_random_uuid(),
  page_key text not null,
  block_key text not null,
  value text not null default '',
  updated_at timestamptz not null default now(),
  unique (page_key, block_key)
);
alter table public.page_contents enable row level security;

drop policy if exists "public read page contents" on public.page_contents;
create policy "public read page contents" on public.page_contents
  for select using (true);

drop policy if exists "admins full access page contents" on public.page_contents;
create policy "admins full access page contents" on public.page_contents
  for all to authenticated using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- 6) Bucket de stockage public pour les images du CMS
insert into storage.buckets (id, name, public)
values ('cms-media', 'cms-media', true)
on conflict (id) do update set public = true;

drop policy if exists "public read cms-media" on storage.objects;
create policy "public read cms-media" on storage.objects
  for select using (bucket_id = 'cms-media');

drop policy if exists "admins write cms-media" on storage.objects;
create policy "admins write cms-media" on storage.objects
  for all to authenticated
  using (bucket_id = 'cms-media' and public.has_role(auth.uid(), 'admin'))
  with check (bucket_id = 'cms-media' and public.has_role(auth.uid(), 'admin'));

-- =========================================================
-- ÉTAPE FINALE : créer ton compte admin
-- =========================================================
-- 1) Va dans Authentication > Users > "Add user" > "Create new user"
--    Email: ton email     Password: ton mot de passe   (Auto-confirm = ON)
-- 2) Récupère son UUID puis exécute (remplace 'TON-UUID-ICI') :
--
--    insert into public.user_roles (user_id, role) values ('TON-UUID-ICI', 'admin');
--
-- 3) Connecte-toi sur https://ton-site/admin/login
-- =========================================================