import React from 'react';
import Button from './Button';

type Props = {
  imgSrc: string;
  title: string;
  price: string;
  onSelectItem?: () => void;
};

export default function ProductCard(props: Props) {
  return (
    <div className="d-card w-60 cursor-pointer rounded-md bg-base-100 transition-transform !duration-300 hover:-translate-y-2 hover:shadow-xl xl:w-80">
      <figure>
        <img src={props.imgSrc} alt="product" className="rounded-t-lg" />
      </figure>
      <div className="d-card-body p-5">
        <h2 className="d-card-title">{props.title}</h2>
        <p className="text-base text-primary">${props.price}</p>
        <div className="d-card-actions mt-3 justify-end">
          <Button>Add item</Button>
        </div>
      </div>
    </div>
  );
}
