import { useParams } from 'react-router-dom';

import BreadcrumsContent from '@/components/atoms/BreadcrumsContent';
import { useGetProductById } from '@/hooks/useGetProducts.ts';

export default function ProductPage() {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductById(productId);
  return (
    <>
      <BreadcrumsContent />
      <div className="content-section">
        <img src={data?.images[0]} alt="product" className="h-56 object-fill" />
        <div>Title: {data?.title}</div>
      </div>
      {/* <AllProductsSection /> */}
    </>
  );
}
