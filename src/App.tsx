import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { mockUsers } from './data/mockUsers';
import { mockListings } from './data/mockListings';
import { mockConversations, mockHistory, mockMessages, mockReviews } from './data/mockMessages';
import { CreateListingPage } from './pages/CreateListingPage';
import { EditListingPage } from './pages/EditListingPage';
import { HomePage } from './pages/HomePage';
import { ListingDetailPage } from './pages/ListingDetailPage';
import { LoginPage } from './pages/LoginPage';
import { MemberAreaPage } from './pages/MemberAreaPage';
import { RegisterPage } from './pages/RegisterPage';
import { SearchPage } from './pages/SearchPage';
import { Conversation, Listing, Message, Review, UserProfile } from './types';

export default function App() {
  const [users, setUsers] = useState<UserProfile[]>(mockUsers);
  const [currentUser, setCurrentUser] = useState<UserProfile | undefined>();
  const [listings, setListings] = useState<Listing[]>(mockListings);
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [reviews, setReviews] = useState<Review[]>(mockReviews);

  const saveListing = (listing: Listing) => setListings((items) => items.some((item) => item.id === listing.id) ? items.map((item) => item.id === listing.id ? listing : item) : [listing, ...items]);
  const updateListingStatus = (id: string, status: Listing['status']) => setListings((items) => items.map((item) => item.id === id ? { ...item, status } : item));
  const updateProfile = (user: UserProfile) => { setCurrentUser(user); setUsers((items) => items.map((item) => item.id === user.id ? user : item)); };
  const register = (user: UserProfile) => { setUsers((items) => [user, ...items]); setCurrentUser(user); };
  const contact = (listing: Listing) => {
    if (!currentUser) return '';
    const existing = conversations.find((conversation) => conversation.listingId === listing.id && conversation.participantIds.includes(currentUser.id));
    if (existing) return existing.id;
    const conversation: Conversation = { id: `c-${Date.now()}`, listingId: listing.id, listingName: listing.name, participantIds: [currentUser.id, listing.ownerId], emailNotifications: { [currentUser.id]: true, [listing.ownerId]: true }, updatedAt: new Date().toISOString() };
    setConversations((items) => [conversation, ...items]);
    setMessages((items) => [...items, { id: `m-${Date.now()}`, conversationId: conversation.id, senderId: currentUser.id, body: `Hallo ${listing.ownerName}, ich interessiere mich für „${listing.name}“.`, createdAt: new Date().toISOString() }]);
    return conversation.id;
  };
  const sendMessage = (conversationId: string, body: string) => { if (!currentUser) return; setMessages((items) => [...items, { id: `m-${Date.now()}`, conversationId, senderId: currentUser.id, body, createdAt: new Date().toISOString() }]); setConversations((items) => items.map((item) => item.id === conversationId ? { ...item, updatedAt: new Date().toISOString() } : item)); };
  const toggleEmail = (conversationId: string) => { if (!currentUser) return; setConversations((items) => items.map((item) => item.id === conversationId ? { ...item, emailNotifications: { ...item.emailNotifications, [currentUser.id]: !item.emailNotifications[currentUser.id] } } : item)); };

  return <Routes><Route element={<Layout user={currentUser} onLogout={() => setCurrentUser(undefined)} />}><Route index element={<HomePage user={currentUser} listings={listings} conversations={conversations.filter((c) => currentUser && c.participantIds.includes(currentUser.id))}/>} /><Route path="login" element={<LoginPage users={users} onLogin={setCurrentUser}/>} /><Route path="register" element={<RegisterPage onRegister={register}/>} /><Route path="search" element={<SearchPage listings={listings}/>} /><Route path="listings/new" element={<CreateListingPage user={currentUser} onSave={saveListing}/>} /><Route path="listings/:id/edit" element={<EditListingPage user={currentUser} listings={listings} onSave={saveListing}/>} /><Route path="listings/:id" element={<ListingDetailPage listings={listings} users={users} reviews={reviews} currentUser={currentUser} onContact={contact} onReview={(review) => setReviews((items) => [review, ...items])}/>} /><Route path="member" element={<MemberAreaPage user={currentUser} listings={listings} conversations={conversations} messages={messages} history={mockHistory} onProfileUpdate={updateProfile} onListingStatus={updateListingStatus} onSend={sendMessage} onToggleEmail={toggleEmail}/>} /><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes>;
}
