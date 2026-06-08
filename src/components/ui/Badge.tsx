import { ReactNode } from 'react';
import { ListingStatus } from '../../types';
const labels: Record<ListingStatus, string> = { draft: 'Entwurf', active: 'Aktiv', paused: 'Pausiert', deleted: 'Gelöscht' };
const styles: Record<ListingStatus, string> = { draft: 'bg-slate-100 text-slate-700', active: 'bg-sage/15 text-ocean', paused: 'bg-coral/15 text-coral', deleted: 'bg-slate-200 text-slate-500' };
export function StatusBadge({ status }: { status: ListingStatus }) { return <span className={`badge ${styles[status]}`}>{labels[status]}</span>; }
export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) { return <span className={`badge bg-sage/15 text-ocean ${className}`}>{children}</span>; }
