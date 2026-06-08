import { Conversation, HistoryItem, Message, Review } from '../types';

export const mockConversations: Conversation[] = [
  { id: 'c1', listingId: 'l3', listingName: 'Kimchi im Glas', participantIds: ['u1', 'u3'], emailNotifications: { u1: true, u3: true }, updatedAt: '2026-06-04T15:20:00Z' },
  { id: 'c2', listingId: 'l2', listingName: 'Erdbeer-Rhabarber-Konfitüre', participantIds: ['u1', 'u2'], emailNotifications: { u1: false, u2: true }, updatedAt: '2026-06-02T10:00:00Z' }
];

export const mockMessages: Message[] = [
  { id: 'm1', conversationId: 'c1', senderId: 'u1', body: 'Hallo Lena, dein Kimchi klingt super. Ist noch ein Glas verfügbar?', createdAt: '2026-06-04T15:10:00Z' },
  { id: 'm2', conversationId: 'c1', senderId: 'u3', body: 'Hallo Anna, ja, ich habe noch zwei Gläser. Schreib mir gern, was dich interessiert.', createdAt: '2026-06-04T15:20:00Z' },
  { id: 'm3', conversationId: 'c2', senderId: 'u2', body: 'Danke für dein Interesse an der Konfitüre!', createdAt: '2026-06-02T10:00:00Z' }
];

export const mockReviews: Review[] = [
  { id: 'r1', ownerId: 'u1', reviewerId: 'u2', rating: 5, text: 'Sehr freundlicher Kontakt und tolles Brot.', createdAt: '2026-05-20' },
  { id: 'r2', ownerId: 'u2', reviewerId: 'u1', rating: 4, text: 'Leckere Konfitüre, klare Kommunikation.', createdAt: '2026-05-28' }
];

export const mockHistory: HistoryItem[] = [
  { id: 'h1', type: 'listing', title: 'Bärlauch-Aufstrich', note: 'Früher angeboten, aktuell pausiert.', createdAt: '2026-05-26' },
  { id: 'h2', type: 'contact', title: 'Kontakt mit Lena', note: 'Austausch zu Kimchi im Glas.', createdAt: '2026-06-04' }
];
