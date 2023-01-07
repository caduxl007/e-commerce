import { useQuery } from 'react-query';
import { api } from '../api';
import { Product } from './useProducts';

type GetUsersResponse = {
  product: Product;
};

type GetUsersRequest = {
  id: number;
};

export async function getProducts({
  id,
}: GetUsersRequest): Promise<GetUsersResponse> {
  const { data } = await api.get(`products/${id}`);

  const product = data;

  return {
    product,
  };
}

export function useProduct(request: GetUsersRequest) {
  return useQuery<GetUsersResponse>(
    ['products', request.id],
    () => getProducts(request),
    {
      staleTime: 1000 * 60, // 1 minuto
    },
  );
}
