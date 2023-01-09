import { ShoppingBagOpen } from 'phosphor-react';
import { useSelector } from 'react-redux';
import { State } from '../../../store';
import { CartState } from '../../../store/modules/cart';

export function Shopping() {
  const { items } = useSelector<State, CartState>((state) => state.cart);

  return (
    <div className="relative">
      <ShoppingBagOpen size={25} />
      <div className="absolute right-[-8px] top-[55%] flex h-[17px] w-[17px] items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
        {items.length}
      </div>
    </div>
  );
}
