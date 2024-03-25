import { useParams } from 'react-router-dom';

import { useGetProductById } from '@/hooks/useGetProducts.ts';
import ProductDescription from '@/components/organism/ProductDescription';
import { Product } from '@/types/products';
import BreadcrumbsSingleProduct from '@/components/atoms/BreadcrumbsSinlgeProduct';

export default function ProductPage() {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductById(productId);
  const product = data as Product;

  if (!data) {
    return <div>No data found.</div>;
  }
  return (
    <>
      <BreadcrumbsSingleProduct productCategory={product.category} productTitle={product.title} />
      <div className="content-section">
        <ProductDescription {...product} />
      </div>
    </>
  );
}
