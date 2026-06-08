import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserProfile } from '../types';
import { Button } from '../components/ui/Button';

export function LoginPage({ users, onLogin }: { users: UserProfile[]; onLogin: (user: UserProfile) => void }) {
  const [email, setEmail] = useState('anna@example.de');
  const navigate = useNavigate();
  const submit = (event: FormEvent) => { event.preventDefault(); onLogin(users.find((u) => u.email === email) ?? users[0]); navigate('/'); };
  return <div className="container-page max-w-2xl py-12"><form onSubmit={submit} className="card space-y-5 p-8"><h1 className="text-3xl font-black text-ocean">Login</h1><p className="text-slate-600">Simulierte Anmeldung über lokalen State. Demo: anna@example.de</p><label className="space-y-2"><span className="label">E-Mail</span><input className="input" required value={email} onChange={(e) => setEmail(e.target.value)} type="email"/></label><label className="space-y-2"><span className="label">Passwort</span><input className="input" required type="password" defaultValue="demo1234"/></label><Button className="w-full">Einloggen</Button><Link className="block text-center text-sm font-semibold text-ocean" to="/register">Noch kein Konto? Registrieren</Link></form></div>;
}
