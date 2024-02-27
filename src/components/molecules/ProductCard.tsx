import { useNavigate } from 'react-router-dom';

import Button from '../atoms/Button';

type Props = {
  id: number;
  imgSrc: string;
  title: string;
  price: number;
};

export default function ProductCard(props: Props) {
  const navigate = useNavigate();
  const options = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const price = props.price.toLocaleString('en-US', options);

  return (
    <div
      className="d-card w-60 cursor-pointer bg-base-100 transition-transform !duration-300 hover:-translate-y-2 hover:shadow-xl xl:w-80"
      onClick={() => {
        navigate(`/products/${props.id}`);
      }}
    >
      <figure>
        <img src={props.imgSrc} alt="product" className="h-56 object-fill" />
      </figure>
      <div className="d-card-body p-5">
        <h3 className="d-card-title">{props.title}</h3>
        <p className="text-base text-primary">${price}</p>
        <div className="d-card-actions mt-3 justify-end">
          <Button>Add item</Button>
        </div>
      </div>
    </div>
  );
}
