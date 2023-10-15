import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
    props.onOpenMenu(isOpen);
  };
  return (
    <div>
      <div className="hidden space-x-4 md:flex lg:text-lg">
        <Link to="/">home</Link>
        <Link to="/products">products</Link>
        <Link to="/who-we-are">who-we-are</Link>
        <Link to="/404">404</Link>
        <Link to="/a-terrible-place-to-be">Something terrible</Link>
      </div>
      <div className="flex items-center md:hidden">
        <button onClick={toggleIcon} className="text-black hover:text-primary focus:outline-none">
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
