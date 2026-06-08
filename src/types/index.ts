export type Role = 'member' | 'admin';
export type ListingStatus = 'draft' | 'active' | 'paused' | 'deleted';
export type ProfileVisibility = 'public' | 'private';
export type Category = 'Backwaren' | 'Eingemachtes' | 'Fermentiertes' | 'Aufstriche' | 'Getränke' | 'Süßes' | 'Gewürze' | 'Kräuter' | 'Pflanzenbasierte Produkte' | 'Sonstiges';

export interface UserProfile {
  id: string;
  role: Role;
  email: string;
  firstName: string;
  lastName?: string;
  zipCode: string;
  city?: string;
  avatarUrl?: string;
  phone?: string;
  about?: string;
  aboutVisibility: ProfileVisibility;
  emailVerified: boolean;
  phoneVerified: boolean;
  profileComplete: boolean;
  ratingAverage: number;
  ratingCount: number;
}

export interface Listing {
  id: string;
  name: string;
  category: Category;
  description: string;
  ingredients?: string;
  quantity?: string;
  zipCode?: string;
  city: string;
  distanceKm?: number;
  images: string[];
  createdAt: string;
  status: ListingStatus;
  ownerId: string;
  ownerName: string;
  ownerProfileVisible: boolean;
  allergens?: string;
  shelfLife?: string;
  storageNotes?: string;
  productionDate?: string;
  availability?: string;
  popularity: number;
}

export interface ZipCodeEntry { zipCode: string; city: string; lat: number; lon: number; }
export interface Message { id: string; conversationId: string; senderId: string; body: string; createdAt: string; }
export interface Conversation { id: string; listingId: string; listingName: string; participantIds: string[]; emailNotifications: Record<string, boolean>; updatedAt: string; }
export interface Review { id: string; ownerId: string; reviewerId: string; rating: number; text: string; createdAt: string; }
export interface HistoryItem { id: string; type: 'listing' | 'contact'; title: string; note: string; createdAt: string; }
export interface ListingFilters { query: string; category: string; city: string; zipCode: string; radiusKm: number; ingredients: string; allergens: string; sort: 'new' | 'popular'; }
