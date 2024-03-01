import { Link } from 'react-router-dom';
import { useGetProductsByCategory } from '@/hooks/useGetProducts.ts';

interface Props {
  category: string;
}

export default function CategoryCard({ category }: Props) {
  const { data } = useGetProductsByCategory(category, '1');
  const categoryObj = data?.products[0];

  return (
    <Link to={`/${category}`} className="group w-full">
      <div
        className="flex aspect-square h-96 w-full items-center justify-center overflow-hidden rounded-md bg-gray-200 bg-cover bg-center bg-no-repeat group-hover:opacity-75 lg:h-[30rem]"
        style={{ backgroundImage: 'url(' + categoryObj?.images[0] + ')' }}
      >
        <p className="inline-block bg-primary/60 px-8 py-4 font-medium text-white">{category}</p>
      </div>
    </Link>
  );
}
