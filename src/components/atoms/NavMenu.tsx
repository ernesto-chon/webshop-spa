import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavMenuProps {
  onOpenMenu: (isOpen: boolean) => void;
}

export default function NavMenu(props: NavMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
    props.onOpenMenu(isOpen);
  };

  return (
    <div className="lg:w-full lg:max-w-[40rem] xl:max-w-[50rem]">
      <div className="hidden space-x-4 md:flex lg:gap-5 lg:text-lg">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-primary' : undefined)} end>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'text-primary' : undefined)} end>
          Products
        </NavLink>
        <NavLink to="/who-we-are" className={({ isActive }) => (isActive ? 'text-primary' : undefined)} end>
          Team
        </NavLink>
        <NavLink to="/404">404</NavLink>
        <NavLink to="/a-terrible-place-to-be">Something terrible</NavLink>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
