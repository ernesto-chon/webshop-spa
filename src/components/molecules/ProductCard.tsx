import { Link } from 'react-router-dom';

type Props = {
  id: number;
  imgSrc: string;
  title: string;
  price: number;
};

export default function ProductCard(props: Props) {
  const options = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const price = props.price.toLocaleString('en-US', options);

  return (
    <Link to={`/products/${props.id}`} className="group w-full">
      <div className="d-card block h-96 bg-base-100 transition-transform !duration-300 hover:shadow-xl hover:group-hover:opacity-75">
        <img src={props.imgSrc} alt="product" className="max-h-96 w-full object-fill object-center" />
        <div className="absolute bottom-0 left-0 m-0 grid h-24 w-full grid-flow-col bg-black/80 px-4 text-white">
          <div className="flex flex-col  items-center justify-center pt-2">
            <h4 className="d-card-title">{props.title}</h4>
            <p className="text-base text-primary">${price}</p>
          </div>
          {/* TODO: ADD BUTTON??
          <div className="d-card-actions mt-3 items-end justify-end pb-4">
            <Button>Add item</Button>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
