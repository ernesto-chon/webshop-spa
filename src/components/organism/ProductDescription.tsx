import Button from '../atoms/Button';
import ImageGallery from '../molecules/ImageGallery';
import { Product } from '@/types/products';

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
  return (
    <div className="h-screen">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">{category}</span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{title}</h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="gap-x-2 rounded-full">
                <span className="text-sm">{rating}</span>
                {/* <Star className="h-5 w-5" /> */}
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">56 ratings</span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">${price}</span>
                <span className="mb-0.5 text-red-500 line-through">${price + 30}</span>
                <span className="mb-0.5 text-red-500">{discountPercentage}% off</span>
              </div>
              <span className="text-sm text-gray-500">Incl. Vat plus shipping</span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              {/* <Truck className="w-6 h-6" /> */}
              <span className="text-sm">2-4 Day shipping</span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              {/* <Truck className="w-6 h-6" /> */}
              <span className="text-sm">{brand}</span>
              <span className="text-sm">On stock:{stock}</span>
            </div>
            <div className="flex gap-2.5">
              <Button>Add to bag</Button>
              <Button>Check out</Button>
            </div>
            <p className="mt-12 text-base tracking-wide text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
