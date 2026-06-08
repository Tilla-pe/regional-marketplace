import { useParams } from 'react-router-dom';
import { Listing, UserProfile } from '../types';
import { ListingForm } from './CreateListingPage';
export function EditListingPage({ user, listings, onSave }: { user?: UserProfile; listings: Listing[]; onSave: (listing: Listing) => void }) { const { id } = useParams(); const listing = listings.find((item) => item.id === id); if (!user || !listing) return <div className="container-page py-12"><div className="card p-8">Anzeige nicht gefunden oder nicht eingeloggt.</div></div>; return <div className="container-page max-w-5xl py-12"><ListingForm user={user} initial={listing} onSave={onSave}/></div>; }
