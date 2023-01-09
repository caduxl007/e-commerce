import { useQuery } from 'react-query';
import { api } from '../api';
import { Product } from './useProducts';

type GetUsersResponse = {
  product: Product;
};

type GetUsersRequest = {
  id: number;
};

export async function getProduct({
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
    ['product', request.id],
    () => getProduct(request),
    {
      staleTime: 1000 * 60, // 1 minuto
    },
  );
}
