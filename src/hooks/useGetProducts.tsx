import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Product {
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

interface Data {
  products: Product[];
}

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get('https://dummyjson.com/products');
      return data as Data;
    },
  });
};
