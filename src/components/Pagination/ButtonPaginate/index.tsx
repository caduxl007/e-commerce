import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonPaginateProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSelect?: boolean;
}

export function ButtonPaginate({
  isSelect = false,
  children,
  ...rest
}: ButtonPaginateProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'h-8 w-8 rounded-lg border bg-gray-600',
        isSelect && 'border-orange-400 text-orange-400 bg-gray-100',
      )}
    >
      {children}
    </button>
  );
}
