import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../atoms/Button';
import NavShoppingCart from '../atoms/NavCartBtn';
import NavProfileBtn from '../atoms/NavProfileBtn';
import NavSearch from '../atoms/NavSearch';
import NavMenu from '../atoms/NavMenu';
import Grid from '@/assets/icons/grid.svg?react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = (menuState: boolean) => {
    setShowMenu(menuState);
  };

  return (
    <nav className="relative top-0 w-screen bg-primary-gray">
      <div className="container mx-auto flex items-center justify-center gap-5 py-5">
        <div className="logo">
          <Link to="/">
            <img
              src="https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/08/webshop-logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden w-full max-w-[45rem] md:flex">
          <NavSearch />
        </div>
        <div className="flex flex-row gap-3">
          <NavProfileBtn />
          <NavShoppingCart />
        </div>
      </div>
      <div className="flex justify-center p-5 md:hidden">
        <NavSearch />
      </div>
      <div className="bg-white py-5">
        <div className="mx-auto flex items-center justify-center gap-5 md:container">
          <div className="drawer">
            <button className="d-btn rounded-none bg-secondary-gray transition-colors !duration-300 hover:bg-primary-gray hover:fill-primary hover:text-primary lg:text-lg">
              <Grid height="24px" width="20px" className="mx-2" />
              Browse Categories
            </button>
          </div>
          <NavMenu onOpenMenu={toggleMenu} />
          <div className="hidden md:inline-flex">
            <Button>Shop now</Button>
          </div>
        </div>
        {showMenu && (
          <div className="m-5 flex flex-col gap-y-3 text-lg md:hidden">
            <Link to="/">home</Link>
            <Link to="/products">products</Link>
            <Link to="/who-we-are">who-we-are</Link>
            <Link to="/404">404</Link>
            <Link to="/a-terrible-place-to-be">Something terrible</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
