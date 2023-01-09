import { ArrowCircleLeft, ShoppingBagOpen } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Loading } from '../../components';
import { useProduct } from '../../services/hooks/useProduct';
import { add } from '../../store/modules/cart';
import { formatterPrice } from '../../utils/formatter-price';

export function PageProduct() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  if (!id) {
    return <div />;
  }

  const { data, isLoading } = useProduct({
    id: +id,
  });

  if (isLoading) {
    return <Loading />;
  }

  function handleSelectProduct() {
    console.log(data?.product);
    if (data?.product.id) {
      dispatch(add(data?.product));
    }
  }

  return (
    <>
      {!!data?.product && (
        <section className="mx-auto flex max-w-[1280px] flex-1 flex-col justify-center py-10">
          <header>
            <Link
              className="mb-6 inline-flex items-center hover:underline"
              to="/"
            >
              <ArrowCircleLeft size={20} /> Voltar
            </Link>
          </header>
          <div className="flex flex-1 gap-7">
            <img
              className="max-w-[100%] rounded"
              src={data.product.imageUrl}
              alt={data.product.name}
            />

            <div className="flex h-full w-full max-w-[480px] flex-col">
              <header className="mb-6 flex flex-col gap-3">
                <h2 className="text-[#41414D]">{data.product.category}</h2>

                <h1 className="text-3xl text-[#41414D]">{data.product.name}</h1>

                <strong className="text-xl font-bold text-[#09090A]">
                  {formatterPrice.format(data.product.price)}
                </strong>
              </header>

              <p className="mb-14 text-xs text-[#41414D]">
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>

              <div>
                <h2 className="font-medium">DESCRIÇÃO</h2>
                <p className="text-sm text-[#41414D]">
                  {data.product.description}
                </p>
              </div>

              <Button
                onClick={handleSelectProduct}
                className="mt-auto max-w-md bg-blue-600"
              >
                <ShoppingBagOpen size={20} />
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
