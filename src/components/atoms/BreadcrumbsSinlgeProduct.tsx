import ChevronIcon from '@/assets/icons/chevron-right.svg?react';

interface IProps {
  productTitle: string;
  productCategory: string;
}

export default function BreadcrumbsSingleProduct({ productTitle, productCategory }: IProps) {
  const categoryTitle = productCategory.charAt(0).toUpperCase() + productCategory.slice(1);
  return (
    <div className="flex flex-col bg-secondary-gray">
      <div className="content-section">
        <div className="d-breadcrumbs text-xl">
          <ul>
            <li className="px-2">
              <a href="/products">Products</a>
              <ChevronIcon height="18px" className="pl-2" />
            </li>
            <li className="px-2">
              <a href={`/${productCategory}`}>{categoryTitle.replace('-', ' ')}</a>
              <ChevronIcon height="18px" className="pl-2" />
            </li>
            <li className="px-2">
              <p>{productTitle}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
