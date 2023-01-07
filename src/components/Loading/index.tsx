import { CircleNotch } from 'phosphor-react';

export function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <CircleNotch className="mr-3 animate-spin" size={60} />
    </div>
  );
}
