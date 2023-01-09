import { useQuery } from 'react-query';
import { api } from '../api';

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  description: string;
  price: number;
  createdAt: string;
};

type GetUsersResponse = {
  products: Product[];
  totalCount: number;
};

type GetUsersRequest = {
  page: number;
};

export async function getProducts({
  page,
}: GetUsersRequest): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('products', {
    params: {
      _page: page,
      _limit: 10,
    },
  });

  const products = data;
  const totalCount = Number(headers['x-total-count']);

  return {
    products,
    totalCount,
  };
}

export function useProducts(request: GetUsersRequest) {
  return useQuery<GetUsersResponse>(
    ['products', request],
    () => getProducts(request),
    {
      staleTime: 1000 * 60 * 60, // 1 minuto
    },
  );
}
