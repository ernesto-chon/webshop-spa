import { useParams } from 'react-router-dom';

import BreadcrumsContent from '@/components/atoms/BreadcrumsContent';
import { useGetProductById } from '@/hooks/useGetProducts.ts';
import ProductDescription from '@/components/organism/ProductDescription';
import { Product } from '@/types/products';

export default function ProductPage() {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductById(productId);
  const product = data as Product;

  if (!data) {
    return <div>No data found.</div>;
  }
  return (
    <>
      <BreadcrumsContent />
      <div className="content-section">
        <ProductDescription {...product} />
      </div>
    </>
  );
}
