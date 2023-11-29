import LoadingBall from '../atoms/LoadingBall';
import ContentSection from '../atoms/ContentSection';
import ProductCard from '../atoms/ProductCard';
import { useGetProducts } from '@/hooks/useGetProducts';

export default function AllProductsSection() {
  const { data, isLoading } = useGetProducts();
  const products = data?.products;

  return (
    <ContentSection>
      <div className="mb-5">
        <h1 className="text-2xl md:text-4xl"> All Products </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-start 2xl:grid-cols-4 ">
        {
          isLoading ? (
            <LoadingBall/>
          ) : (
            products && products.map((p) => <ProductCard key={p.id} id={p.id} imgSrc={p.images[0]} title={p.title} price={p.price} />)
          )
        }
      </div>
    </ContentSection>
  );
}
