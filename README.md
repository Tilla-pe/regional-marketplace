# NahGenuss – regionaler Food-Marketplace Prototyp

NahGenuss ist ein lokal ausführbarer Frontend-Prototyp für einen regionalen Marketplace für selbstgemachte Food-Produkte privater Anbieterinnen und Anbieter. Das MVP endet bewusst bei der Kontaktaufnahme: Es gibt keinen Kaufprozess, keine Preise, keine Zahlung, keinen Warenkorb, keine Reservierung, keinen Versand, keine Abhollogik, keine Karte und kein echtes Backend.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Lokale Mock-Daten und lokaler State

## Installation

```bash
npm install
```

> Hinweis: Falls die Paketinstallation in einer eingeschränkten Umgebung blockiert wird, muss der Zugriff auf die npm Registry freigegeben werden. Der Code selbst enthält keine Backend- oder Supabase-Abhängigkeit.

## Start

```bash
npm run dev
```

Die App läuft anschließend lokal über die von Vite ausgegebene URL, typischerweise `http://localhost:5173`.

## Build

```bash
npm run build
```

## Wichtige Dateien und Ordner

- `src/App.tsx` – zentrale Routen, lokaler App-State, simulierte Authentifizierung, Anzeigen-, Chat- und Bewertungsaktionen.
- `src/pages/` – klickbare Seiten für Start, Login, Registrierung, Suche, Detailseite, Anzeige erstellen/bearbeiten und Mitgliederbereich.
- `src/components/` – wiederverwendbare UI-, Layout-, Listing-, Search- und Chat-Komponenten.
- `src/data/` – realistische Mock-Daten für Mitglieder, Produkte, Nachrichten, Bewertungen, Historie und PLZ-Geodaten.
- `src/utils/distance.ts` – vorbereitete Haversine-Logik zur Distanzberechnung auf Basis von PLZ-Koordinaten.
- `src/utils/listingFilters.ts` – Filterlogik für Textsuche, Kategorie, Ort, PLZ, Radius, Zutaten, Allergene und Sortierung.
- `src/types/index.ts` – zentrale TypeScript-Typen für spätere Supabase-Anbindung.
- `SUPABASE_MODEL.md` – vorgeschlagenes Datenmodell für die spätere Supabase-Integration.

## Klickbare MVP-Flows

### Flow 1: Registrieren und anbieten

1. Startseite als nicht eingeloggter User öffnen.
2. „Konto erstellen“ klicken.
3. Pflichtfelder ausfüllen.
4. „Ich möchte etwas anbieten“ wählen.
5. Anzeige erstellen.
6. Anzeige erscheint unter „Meine Anzeigen“.
7. Aktive Anzeige erscheint in der Produktsuche.

### Flow 2: Produkte finden und Kontakt aufnehmen

1. „Produkte finden“ öffnen.
2. Nach Text, Kategorie, Ort, PLZ, Radius, Zutaten oder Allergenen filtern.
3. Produktdetailseite öffnen.
4. „Anbieter kontaktieren“ klicken.
5. Chat im Mitgliederbereich wird geöffnet.
6. Nachricht schreiben.
7. E-Mail-Benachrichtigung im Chat an- oder abwählen.

### Flow 3: Mitgliederbereich verwalten

1. Einloggen oder registrieren.
2. Mitgliederbereich öffnen.
3. „Über mich“ bearbeiten und Sichtbarkeit ändern.
4. Eigene Anzeigen pausieren, aktivieren, bearbeiten oder löschen.
5. Historie ansehen.
6. Einstellungen öffnen.

## Demo-Login

- E-Mail: `anna@example.de`
- Passwort: beliebiger Wert, z. B. `demo1234`

## Supabase-Anbindung später

Noch ist keine echte Supabase-Verbindung eingebaut. Sinnvolle Anschlussstellen:

- Auth: `LoginPage`, `RegisterPage` und Auth-State in `App.tsx`.
- Datenbank: Mock-Dateien in `src/data/` durch Supabase Queries ersetzen.
- Storage: Bild-URLs in Listings und Profilen durch Supabase Storage Uploads ersetzen.
- Realtime: Chat-State in `App.tsx` und `ChatPanel` durch Supabase Realtime Subscriptions ersetzen.
- PLZ/Geocoding: `mockZipCodes.ts` und `distance.ts` durch Supabase-Tabelle `zip_codes` oder externes Geocoding ersetzen.

## Sinnvolle nächste Ausbauschritte nach dem MVP

1. Supabase Auth für Registrierung, Login und Session-Persistenz anbinden.
2. Row Level Security Policies für Profile, Listings, Messages und Settings definieren.
3. Supabase Storage für Profil- und Produktbilder ergänzen.
4. Realtime Chat mit `messages` Subscription umsetzen.
5. Moderationsworkflow für Reports bauen, ohne Admin-Bereich im MVP zu überladen.
6. PLZ-Daten vervollständigen und Radiusfilter serverseitig optimieren.
7. Barrierefreiheit, Formularvalidierung und leere Zustände weiter verfeinern.
