import { useState } from 'react';
import { shallow } from 'zustand/shallow';

import LoadingBall from '../atoms/LoadingBall';
import ProductCard from '../molecules/ProductCard';
import ProductsPagination from '../atoms/ProductsPagination';
import { useSearchStore } from '@/store/searchStore';
import { useSearchProducts } from '@/hooks/useGetProducts';

export default function SearchingResultsSection() {
  const [search] = useSearchStore((state) => [state.searchDetails, state.setSearchDetails], shallow);
  const { data, isLoading } = useSearchProducts(search.input);
  const products = data?.products;
  // pagination
  const productsDisplayed = 24;
  const [currentPage, setCurrentPage] = useState(1);

  if (!products) {
    return <div>No data found</div>;
  }

  // pagination
  const indexOfLastProduct = currentPage * productsDisplayed;
  const indexOfFirstProduct = indexOfLastProduct - productsDisplayed;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const updatePage = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="content-section">
      <div className="mb-10 flex items-center justify-center">
        <h4>
          Showing {indexOfFirstProduct + 1} -{' '}
          {indexOfLastProduct <= products.length ? indexOfLastProduct : products.length} of {products?.length}
        </h4>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {isLoading ? (
          <LoadingBall />
        ) : (
          products &&
          currentProducts.map((p) => (
            <ProductCard key={p.id} id={p.id} imgSrc={p.images[0]} title={p.title} price={p.price} />
          ))
        )}
      </div>
      <ProductsPagination
        totalProducts={products?.length}
        displayedProducts={productsDisplayed}
        currentPage={currentPage}
        paginate={updatePage}
      />
    </div>
  );
}
