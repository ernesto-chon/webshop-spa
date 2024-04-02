import { ProductsApiResponse, Product } from '@/types/products';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetProducts = (limit?: string | '0') => {
  return useQuery({
    queryKey: ['products', limit],
    queryFn: async () => {
      const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
      return data as ProductsApiResponse;
    },
  });
};

export const useGetProductById = (potsId: string | undefined) => {
  return useQuery({
    queryKey: ['product', potsId],
    queryFn: async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/${potsId}`);
      return data as Product;
    },
  });
};

export const useGetProductsByCategory = (category: string | undefined, limit?: string | '0') => {
  return useQuery({
    queryKey: ['productByCategory', category, limit],
    queryFn: async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/category/${category}?limit=${limit}`);
      return data as ProductsApiResponse;
    },
  });
};

export const useSearchProducts = (search: string | undefined) => {
  return useQuery({
    queryKey: ['productSearch', search],
    queryFn: async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
      return data as ProductsApiResponse;
    },
  });
};
