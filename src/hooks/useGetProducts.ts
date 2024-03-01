import { Products, Product } from '@/types/products';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get('https://dummyjson.com/products');
      return data as Products;
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
      return data as Products;
    },
  });
};
