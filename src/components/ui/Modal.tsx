import { ReactNode } from 'react';
export function Modal({ title, children, onClose }: { title: string; children: ReactNode; onClose: () => void }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-ocean/40 p-4"><div className="card max-w-lg p-6 w-full"><div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-bold text-ocean">{title}</h2><button onClick={onClose} className="rounded-full px-3 py-1 text-slate-500 hover:bg-slate-100">×</button></div>{children}</div></div>;
}
