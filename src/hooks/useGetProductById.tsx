import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const useGetProductById = (potsId: number) => {
  return useQuery({
    queryKey: ['product', potsId],
    queryFn: async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/${potsId}`);
      return data as Product;
    },
  });
};
