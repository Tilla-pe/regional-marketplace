import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'danger' };
export function Button({ variant = 'primary', className = '', ...props }: Props) {
  const variants = { primary: 'btn-primary', secondary: 'btn-secondary', ghost: 'btn-ghost', danger: 'inline-flex items-center justify-center rounded-2xl bg-coral px-5 py-3 text-sm font-bold text-white transition hover:bg-coral/90' };
  return <button className={`${variants[variant]} ${className}`} {...props} />;
}
