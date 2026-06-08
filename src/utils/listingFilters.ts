import { Listing, ListingFilters } from '../types';
import { distanceBetweenZipCodes, findZipCode } from './distance';

export const filterListings = (listings: Listing[], filters: ListingFilters) => {
  const query = filters.query.toLowerCase().trim();
  const ingredients = filters.ingredients.toLowerCase().trim();
  const allergens = filters.allergens.toLowerCase().trim();
  const originKnown = filters.zipCode ? Boolean(findZipCode(filters.zipCode)) : true;

  let items = listings
    .filter((listing) => listing.status === 'active')
    .map((listing) => ({ ...listing, distanceKm: filters.zipCode ? distanceBetweenZipCodes(filters.zipCode, listing.zipCode) : listing.distanceKm }))
    .filter((listing) => !query || [listing.name, listing.description, listing.ownerName].join(' ').toLowerCase().includes(query))
    .filter((listing) => !filters.category || listing.category === filters.category)
    .filter((listing) => !filters.city || listing.city.toLowerCase().includes(filters.city.toLowerCase().trim()))
    .filter((listing) => !ingredients || listing.ingredients?.toLowerCase().includes(ingredients))
    .filter((listing) => !allergens || listing.allergens?.toLowerCase().includes(allergens))
    .filter((listing) => !filters.zipCode || !originKnown || (listing.distanceKm !== undefined && listing.distanceKm <= filters.radiusKm));

  items = filters.sort === 'popular'
    ? items.sort((a, b) => b.popularity - a.popularity)
    : items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return { items, zipCodeKnown: originKnown };
};
