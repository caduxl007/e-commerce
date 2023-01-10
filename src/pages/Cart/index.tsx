import { ArrowCircleLeft } from 'phosphor-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../store';
import { CartState } from '../../store/modules/cart';
import { CartProduct } from './components/CartProduct';
import { Summary } from './components/Summary';

export function Cart() {
  const cart = useSelector<State, CartState>((state) => state.cart);

  return (
    <>
      <section className="mx-auto flex max-w-[1280px] flex-1 flex-col pt-10 ">
        <header>
          <Link
            className="mb-6 inline-flex items-center hover:underline"
            to="/"
          >
            <ArrowCircleLeft size={20} /> Voltar
          </Link>
        </header>

        <div className="flex justify-between gap-8 h-full">
          <div className="flex flex-col gap-5 overflow-y-auto">
            {cart.items.map(({ product }) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
          <Summary />
        </div>
      </section>
    </>
  );
}
