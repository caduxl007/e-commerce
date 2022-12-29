import { formatterPrice } from '../../utils/formatter-price';

export type ProductProps = {
  imageUrl: string;
  price: number;
  name: string;
};

export function Product({ imageUrl, name, price }: ProductProps) {
  return (
    <div className="max-w-[256px] rounded">
      <img
        className="h-72 w-full overflow-hidden rounded-t"
        src={imageUrl}
        alt=""
      />

      <footer className="px-3 py-2 bg-white">
        <p>{name}</p>

        <div className="my-2 h-[1px] w-full bg-gray-300"></div>

        <strong className="text-black">{formatterPrice.format(price)}</strong>
      </footer>
    </div>
  );
}
