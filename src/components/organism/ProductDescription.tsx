import { Product } from '@/types/products';
import Button from '../atoms/Button';
import ImageGallery from '../molecules/ImageGallery';
import StarIcon from '@/assets/icons/star-icon.svg?react';

export default function ProductDescription({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}: Product) {
  const originalPrice = price * (1 + discountPercentage / 100);
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-3 md:col-span-2">
            <ImageGallery images={images} />
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="mb-2 md:mb-3">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{title}</h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-4">
              <StarIcon height="24px" width="20px" />
              <span className="text-sm">{rating}</span>
              <a href="#" className="underline">
                Rate this product
              </a>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-3xl">${price.toFixed(2)}</span>
                <span className="mb-0.5 text-red-500 line-through md:text-xl">${originalPrice.toFixed(2)}</span>
                <span className="mb-0.5 text-red-500">{discountPercentage.toFixed(2)}% off</span>
              </div>
              <span className="text-sm text-gray-500">Incl. Vat plus shipping</span>
            </div>
            <div className="mb-4 flex-row items-center gap-2 text-gray-500">
              <p className="text-base">
                Brand: <span className="text-black">{brand}</span>
              </p>
              <p className="mb-0.5 inline-block text-base">
                Category: <span className="text-black">{category}</span>
              </p>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <span className="text-sm">On stock: {stock}</span>
              <span className="text-sm">2-4 Day shipping</span>
            </div>
            <div className="flex gap-2.5">
              <Button>Add to bag</Button>
              <Button>Check out</Button>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-white px-8 py-5">
              <p className="text-base font-bold">Description:</p>
              <p className="mt-12 text-base tracking-wide text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
