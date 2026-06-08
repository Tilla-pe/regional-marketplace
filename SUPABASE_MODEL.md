# Vorgeschlagenes Supabase-Datenmodell

Dieses Modell ist vorbereitet, aber im MVP nicht angebunden. Aktuell simulieren Mock-Daten in `src/data/` alle Inhalte lokal.

## profiles

Referenziert später `auth.users.id`.

- `id uuid primary key references auth.users(id)`
- `role text check (role in ('member','admin')) default 'member'`
- `email text not null`
- `first_name text not null`
- `last_name text`
- `zip_code text not null references zip_codes(zip_code)`
- `city text`
- `avatar_url text`
- `phone text`
- `about text`
- `about_visibility text check (about_visibility in ('public','private')) default 'public'`
- `email_verified boolean default false`
- `phone_verified boolean default false`
- `profile_complete boolean default false`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

## listings

- `id uuid primary key default gen_random_uuid()`
- `owner_id uuid not null references profiles(id)`
- `name text not null`
- `category text not null`
- `description text not null`
- `ingredients text`
- `quantity text`
- `zip_code text references zip_codes(zip_code)`
- `city text not null`
- `status text check (status in ('draft','active','paused','deleted')) default 'draft'`
- `allergens text`
- `production_date date`
- `shelf_life text`
- `availability text`
- `storage_notes text`
- `popularity integer default 0`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

Wichtig: Kein Feld für Preis, Warenkorb, Reservierung, Versand oder Verkaufstatus. Status `sold` wird nicht verwendet.

## listing_images

- `id uuid primary key default gen_random_uuid()`
- `listing_id uuid not null references listings(id) on delete cascade`
- `storage_path text not null`
- `public_url text`
- `sort_order integer default 0`
- `created_at timestamptz default now()`

Später mit Supabase Storage verbunden.

## conversations

- `id uuid primary key default gen_random_uuid()`
- `listing_id uuid not null references listings(id)`
- `created_by uuid not null references profiles(id)`
- `provider_id uuid not null references profiles(id)`
- `consumer_id uuid not null references profiles(id)`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

## messages

- `id uuid primary key default gen_random_uuid()`
- `conversation_id uuid not null references conversations(id) on delete cascade`
- `sender_id uuid not null references profiles(id)`
- `body text not null`
- `created_at timestamptz default now()`
- `read_at timestamptz`

Später per Supabase Realtime abonnierbar.

## reviews

- `id uuid primary key default gen_random_uuid()`
- `owner_id uuid not null references profiles(id)`
- `reviewer_id uuid not null references profiles(id)`
- `rating integer not null check (rating between 1 and 5)`
- `text text`
- `created_at timestamptz default now()`

## reports

- `id uuid primary key default gen_random_uuid()`
- `listing_id uuid not null references listings(id)`
- `reporter_id uuid references profiles(id)`
- `reason text not null`
- `details text`
- `status text check (status in ('open','in_review','closed')) default 'open'`
- `created_at timestamptz default now()`

Der Admin-Prüfprozess ist nur vorbereitet, nicht Teil des MVP.

## zip_codes

- `zip_code text primary key`
- `city text not null`
- `lat double precision not null`
- `lon double precision not null`
- `region text`
- `created_at timestamptz default now()`

Diese Tabelle ersetzt später `src/data/mockZipCodes.ts` und kann für Radiusfilter genutzt werden.

## user_settings

- `user_id uuid primary key references profiles(id) on delete cascade`
- `profile_visibility text check (profile_visibility in ('public','private')) default 'public'`
- `global_email_notifications boolean default true`
- `privacy_contact_visible boolean default false`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

Optional kann zusätzlich eine Tabelle `conversation_settings` für chatbezogene E-Mail-Benachrichtigungen angelegt werden:

- `conversation_id uuid references conversations(id) on delete cascade`
- `user_id uuid references profiles(id) on delete cascade`
- `email_notifications boolean default true`
- Primary Key: `(conversation_id, user_id)`

## Beziehungen

- `auth.users` 1:1 `profiles`
- `profiles` 1:n `listings`
- `listings` 1:n `listing_images`
- `listings` 1:n `conversations`
- `conversations` 1:n `messages`
- `profiles` 1:n `reviews` als bewerteter Anbieter und als Reviewer
- `listings` 1:n `reports`
- `zip_codes` 1:n `profiles` und `listings`
- `profiles` 1:1 `user_settings`

## Aktuell durch Mock-Daten simuliert

- Mitglieder/Profile: `src/data/mockUsers.ts`
- Anzeigen/Produkte: `src/data/mockListings.ts`
- Konversationen, Nachrichten, Bewertungen und Historie: `src/data/mockMessages.ts`
- PLZ-Koordinaten: `src/data/mockZipCodes.ts`
