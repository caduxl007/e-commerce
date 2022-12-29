import { useState } from 'react';
import { Pagination, Product } from '../../components';
import { useProducts } from '../../services/hooks/useProducts';

export function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useProducts({
    page,
  });

  if (isLoading) {
    return <h1>...</h1>;
  }

  return (
    <>
      <div className="mx-auto flex h-full max-w-[1280px] flex-col justify-between gap-3 py-5">
        <header className="flex justify-between">
          <div></div>
          <Pagination
            totalCount={data?.totalCount ?? 0}
            pageSelected={page}
            changePage={setPage}
          />
        </header>

        <div className="grid grid-cols-4 gap-8">
          {data?.products.map((product) => (
            <Product
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
