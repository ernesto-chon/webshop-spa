import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await axios.get('https://dummyjson.com/products/categories');
      return data as string[];
    },
  });
};
