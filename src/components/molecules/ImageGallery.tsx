import { useState } from 'react';

interface Props {
  images: string[];
}

export default function ImageGallery({ images }: Props) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className=" overflow-hidden rounded-lg bg-gray-100">
            <img
              src={image}
              alt="Photo"
              className="h-full w-full cursor-pointer object-cover object-center"
              width={200}
              height={200}
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <img src={bigImage} alt="Photo" width={500} height={500} className="h-full w-full object-cover object-center" />
        <span className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
