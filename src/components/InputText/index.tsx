import { InputHTMLAttributes } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

export function InputText(props: InputTextProps) {
  return (
    <div className="flex h-[42px] w-80 items-center gap-2 rounded-lg bg-gray-400 py-3 px-3 focus-within:ring-2">
      <input
        {...props}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-700"
      />

      <MagnifyingGlass size={20} />
    </div>
  );
}
