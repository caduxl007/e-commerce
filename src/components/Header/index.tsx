import { ShoppingBagOpen } from 'phosphor-react';

import logo from '../../assets/logo.svg';
import { InputText } from '../InputText';

export function Header() {
  return (
    <header className="max-[1280px] mx-auto flex items-center justify-between px-4 py-5">
      <img src={logo} alt="" />

      <div className="flex items-center gap-7">
        <InputText placeholder="Procurando por algo específico?" />

        <div>
          <ShoppingBagOpen size={20} />
        </div>
      </div>
    </header>
  );
}
