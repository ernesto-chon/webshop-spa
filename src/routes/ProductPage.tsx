import { useParams } from 'react-router-dom';

import BreadcrumsContent from '@/components/atoms/BreadcrumsContent';
import ContentSection from '@/components/atoms/ContentSection';
import { useGetProductById } from '@/hooks/useGetProducts';

export default function ProductPage() {
  const {productId} = useParams();
  const { data, isLoading } = useGetProductById(productId);
  return (
    <>
      <BreadcrumsContent />
      <ContentSection>
        <img src={data?.images[0]} alt="product" className="h-56 object-fill" />
        <div>Title: {data?.title}</div>
      </ContentSection>
      {/* <AllProductsSection /> */}
    </>
  );
}
