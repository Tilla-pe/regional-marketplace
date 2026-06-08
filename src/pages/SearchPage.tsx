import { useMemo, useState } from 'react';
import { Listing, ListingFilters } from '../types';
import { ListingCard } from '../components/listings/ListingCard';
import { SearchFilters } from '../components/search/SearchFilters';
import { filterListings } from '../utils/listingFilters';

const initialFilters: ListingFilters = { query: '', category: '', city: '', zipCode: '', radiusKm: 15, ingredients: '', allergens: '', sort: 'new' };
export function SearchPage({ listings }: { listings: Listing[] }) {
  const [filters, setFilters] = useState(initialFilters);
  const result = useMemo(() => filterListings(listings, filters), [listings, filters]);
  return <div className="container-page py-10"><div className="mb-6"><h1 className="text-4xl font-black text-ocean">Produkte finden</h1><p className="mt-2 text-slate-600">Suche ohne Karte – mit vorbereiteter PLZ-Radiuslogik über Mock-Geodaten.</p></div><SearchFilters filters={filters} onChange={setFilters}/>{!result.zipCodeKnown && <div className="mt-4 rounded-2xl bg-coral/10 p-4 text-sm font-semibold text-coral">Diese PLZ ist in den Mock-Daten noch nicht bekannt. Später kann hier eine Supabase-PLZ-Tabelle oder Geocoding angebunden werden.</div>}<div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{result.items.map((listing) => <ListingCard key={listing.id} listing={listing}/>)}</div>{result.items.length === 0 && <div className="card mt-6 p-8 text-center text-slate-500">Keine passenden aktiven Anzeigen gefunden. Passe Suche, Radius oder Kategorie an.</div>}</div>;
}
