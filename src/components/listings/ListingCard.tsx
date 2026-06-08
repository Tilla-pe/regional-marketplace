import { Link } from 'react-router-dom';
import { Listing } from '../../types';
import { Badge, StatusBadge } from '../ui/Badge';

export function ListingCard({ listing, showStatus = false }: { listing: Listing; showStatus?: boolean }) {
  return <article className="card overflow-hidden"><img src={listing.images[0]} alt={listing.name} className="h-52 w-full object-cover"/><div className="space-y-4 p-5"><div className="flex items-start justify-between gap-3"><div><Badge>{listing.category}</Badge><h3 className="mt-3 text-xl font-bold text-ocean">{listing.name}</h3></div>{showStatus && <StatusBadge status={listing.status}/>}</div><p className="line-clamp-3 text-sm leading-6 text-slate-600">{listing.description}</p><div className="flex flex-wrap gap-2 text-sm text-slate-500"><span>{listing.zipCode} {listing.city}</span>{listing.distanceKm !== undefined && <span>· {listing.distanceKm} km entfernt</span>}<span>· von {listing.ownerName}</span></div><Link className="btn-ghost w-full" to={`/listings/${listing.id}`}>Details ansehen</Link></div></article>;
}
