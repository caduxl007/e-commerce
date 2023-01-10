import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../../components';
import { State } from '../../../store';
import { CartState } from '../../../store/modules/cart';
import { formatterPrice } from '../../../utils/formatter-price';

export function Summary() {
  const cart = useSelector<State, CartState>((state) => state.cart);

  const subTotal = useMemo(() => {
    const value = cart.items.reduce((acc, cur) => {
      return acc + cur.quantity * cur.product.price;
    }, 0);

    return value;
  }, [cart]);

  const delivery = 40;
  const total = subTotal + delivery;

  return (
    <aside className="flex max-h-screen flex-1 flex-col bg-white p-6">
      <h2 className="text-xl font-semibold uppercase text-[#41414D]">
        Resumo do pedido
      </h2>

      <div className="mt-8 flex flex-col gap-3">
        <div className="flex justify-between">
          <p>Subtotal de produtos</p>
          <p>{formatterPrice.format(subTotal)}</p>
        </div>

        <div className="flex justify-between">
          <p>Entrega</p>
          <p>{formatterPrice.format(delivery)}</p>
        </div>

        <div className="h-px bg-gray-300"></div>

        <strong className="flex justify-between text-[#41414D]">
          <span>Total</span>
          <span>{formatterPrice.format(total)}</span>
        </strong>
      </div>

      <Button className="mt-auto">FINALIZAR A COMPRA</Button>
    </aside>
  );
}
