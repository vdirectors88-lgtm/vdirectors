-- VDIRECTORS portfolio table
create table if not exists portfolio (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  category    text not null check (category in ('web', 'design')),
  tags        text[] not null default '{}',
  thumb_url   text,
  detail_images text[] not null default '{}',
  sort_order  integer not null default 0,
  created_at  timestamptz default now()
);

-- sort_order 인덱스
create index if not exists portfolio_sort_order_idx on portfolio (sort_order asc);

-- anon 읽기 허용 (메인 페이지 fetch용)
alter table portfolio enable row level security;

create policy "public read" on portfolio
  for select using (true);

create policy "service full access" on portfolio
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
