import LoadingBall from '../atoms/LoadingBall';
import ProductCard from '../molecules/ProductCard';
import { useGetProducts } from '@/hooks/useGetProducts.ts';

export default function AllProductsSection() {
  const { data, isLoading } = useGetProducts();
  const products = data?.products;

  return (
    <div className="content-section">
      <div className="mb-10 flex items-center justify-center">
        <h4>Showing 1 - 20 of 100 items</h4>
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
