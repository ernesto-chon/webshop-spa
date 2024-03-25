interface IProps {
  totalProducts: number;
  displayedProducts: number;
  paginate(number: number): void;
}

export default function ProductsPagination({ totalProducts, displayedProducts, paginate }: IProps) {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / displayedProducts); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="d-join mb-5 mt-20 flex items-center justify-center gap-x-4">
      {paginationNumbers.map((pageNumber) => (
        <button
          onClick={() => {
            paginate(pageNumber);
          }}
          key={pageNumber}
          className="d-btn d-join-item bg-primary-gray"
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
