import { UserProfile } from '../types';

export const mockUsers: UserProfile[] = [
  { id: 'u1', role: 'member', email: 'anna@example.de', firstName: 'Anna', lastName: 'Keller', zipCode: '79100', city: 'Freiburg', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80', phone: '+49 761 123456', about: 'Ich backe seit vielen Jahren Sauerteigbrot und koche Marmeladen mit Obst aus dem Garten.', aboutVisibility: 'public', emailVerified: true, phoneVerified: true, profileComplete: true, ratingAverage: 4.8, ratingCount: 18 },
  { id: 'u2', role: 'member', email: 'mehmet@example.de', firstName: 'Mehmet', lastName: 'Aydin', zipCode: '79098', city: 'Freiburg', about: 'Fermentiertes, Kräuter und kleine Chargen mit viel Ruhe.', aboutVisibility: 'public', emailVerified: true, phoneVerified: false, profileComplete: true, ratingAverage: 4.6, ratingCount: 9 },
  { id: 'u3', role: 'member', email: 'lena@example.de', firstName: 'Lena', zipCode: '79211', city: 'Denzlingen', aboutVisibility: 'private', emailVerified: true, phoneVerified: false, profileComplete: false, ratingAverage: 4.9, ratingCount: 6 }
];

export const demoUser = mockUsers[0];
