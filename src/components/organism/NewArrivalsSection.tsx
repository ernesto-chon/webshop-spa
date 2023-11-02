import React from 'react';
import ContentSection from '../atoms/ContentSection';
import ProductCard from '../atoms/ProductCard';

export default function NewArrivalsSection() {
  return (
    <ContentSection>
      <div className="my-10">
        <h1 className="text-2xl md:text-4xl"> New Arrivals </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:justify-items-start ">
        <ProductCard imgSrc="https://i.dummyjson.com/data/products/1/1.jpg" title="iPhone 9" price="549" />
        <ProductCard imgSrc="https://i.dummyjson.com/data/products/1/1.jpg" title="iPhone 9" price="549" />
        <ProductCard imgSrc="https://i.dummyjson.com/data/products/1/1.jpg" title="iPhone 9" price="549" />
        <ProductCard imgSrc="https://i.dummyjson.com/data/products/1/1.jpg" title="iPhone 9" price="549" />
        <ProductCard imgSrc="https://i.dummyjson.com/data/products/1/1.jpg" title="iPhone 9" price="549" />
        <ProductCard imgSrc="https://i.dummyjson.com/data/products/1/1.jpg" title="iPhone 9" price="549" />
        <ProductCard imgSrc="https://i.dummyjson.com/data/products/1/1.jpg" title="iPhone 9" price="549" />
        <ProductCard imgSrc="https://i.dummyjson.com/data/products/1/1.jpg" title="iPhone 9" price="549" />
      </div>
    </ContentSection>
  );
}
