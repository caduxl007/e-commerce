import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex h-11 w-full items-center justify-center gap-2 rounded bg-green-400 px-11 uppercase text-white hover:brightness-90',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
