import logo from '../../assets/logo.svg';
import { InputText } from '../InputText';
import { Shopping } from './Shopping';

export function Header() {
  return (
    <header className="mx-auto flex h-20 max-w-[1280px] items-center  justify-between px-4">
      <img src={logo} alt="" />

      <div className="flex items-center gap-7">
        <InputText placeholder="Procurando por algo específico?" />

        <Shopping />
      </div>
    </header>
  );
}
