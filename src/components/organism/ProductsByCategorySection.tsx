import { useParams } from 'react-router-dom';
import LoadingBall from '../atoms/LoadingBall';
import ProductCard from '../molecules/ProductCard';
import { useGetProductsByCategory } from '@/hooks/useGetProducts.ts';

export default function ProductsByCategorySection() {
  const { category } = useParams();
  const { data, isLoading } = useGetProductsByCategory(category, '0');
  const products = data?.products;

  return (
    <div className="content-section">
      <div className="mb-10">
        <h1 className="text-2xl md:text-4xl"> All {category} Products </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {isLoading ? (
          <LoadingBall />
        ) : (
          products &&
          products.map((p) => <ProductCard key={p.id} id={p.id} imgSrc={p.images[0]} title={p.title} price={p.price} />)
        )}
      </div>
    </div>
  );
}
