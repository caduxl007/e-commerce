import { Trash } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { Product } from '../../../services/hooks/useProducts';
import { remove } from '../../../store/modules/cart';
import { formatterPrice } from '../../../utils/formatter-price';

interface CartProductProps {
  product: Product;
}

export function CartProduct({ product }: CartProductProps) {
  const dispatch = useDispatch();

  function handleRemoveCart() {
    dispatch(
      remove({
        id: product.id,
      }),
    );
  }

  return (
    <div className="flex max-w-[736px] gap-7 rounded bg-white">
      <div className="min-h-[211px] w-64">
        <img className="h-full" src={product.imageUrl} alt={product.name} />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-3">
        <header className="flex justify-between">
          <h3 className="text-xl font-light leading-[150%]">{product.name}</h3>
          <button onClick={handleRemoveCart} className="leading-none">
            <Trash className="text-red-500" size={20} />
          </button>
        </header>

        <p>{product.description}</p>

        <strong className="text-[#09090A]">
          {formatterPrice.format(product.price)}
        </strong>

        <footer></footer>
      </div>
    </div>
  );
}
