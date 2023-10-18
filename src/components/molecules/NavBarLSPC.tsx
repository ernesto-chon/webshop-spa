import React from 'react';
import { Link } from 'react-router-dom';
import NavSearch from '../atoms/NavSearch';
import NavProfileBtn from '../atoms/NavProfileBtn';
import NavShoppingCart from '../atoms/NavCartBtn';

export default function NavBarLSPC() {
  return (
    <>
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
    </>
  );
}
