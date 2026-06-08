import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { UserProfile } from '../../types';
export function Layout({ user, onLogout }: { user?: UserProfile; onLogout: () => void }) { return <><Header user={user} onLogout={onLogout}/><main className="min-h-screen bg-gradient-to-b from-cream/60 to-white"><Outlet/></main><footer className="border-t border-slate-100 py-8"><div className="container-page text-sm text-slate-500">NahGenuss MVP-Prototyp · keine Preise, keine Zahlung, kein echtes Backend.</div></footer></>; }
