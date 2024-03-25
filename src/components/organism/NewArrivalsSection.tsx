import LoadingBall from '../atoms/LoadingBall';
import ProductCard from '../molecules/ProductCard';
import { useGetProducts } from '@/hooks/useGetProducts.ts';

export default function NewArrivalsSection() {
  const { data, isLoading } = useGetProducts('20');
  const products = data?.products.slice(8, 16);

  return (
    <div className="content-section">
      <h2 className="my-5">New Arrivals </h2>
      <div className="grid grid-cols-1 justify-items-center gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-start 2xl:grid-cols-4 ">
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
