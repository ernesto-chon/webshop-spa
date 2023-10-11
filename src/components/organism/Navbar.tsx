import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../atoms/Button';
import ShoppingCartIcon from '@/assets/icons/cart.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import ProfileICon from '@/assets/icons/user.svg?react';
import Grid from '@/assets/icons/grid.svg?react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative top-0 w-screen bg-primary-gray">
      <div className="container mx-auto flex items-center justify-around gap-5 py-5">
        <div className="justify-self-end">
          <Link to="/">
            <img src="https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/08/webshop-logo.png" />
          </Link>
        </div>
        <form className="hidden w-full max-w-[45rem] rounded border bg-white md:flex">
          <input
            className="font-color-black h-12 grow px-5 focus:outline-none"
            placeholder="What are you searching..."
          ></input>
          <button className="d-btn h-10 w-20 rounded-none fill-primary transition-colors !duration-300 hover:bg-primary hover:fill-white">
            <SearchIcon height="20px" />
          </button>
        </form>
        <div className="flex flex-row gap-5">
          <Link to="/my-account">
            <ProfileICon height="24px" width="20px" className="mx-1" />
          </Link>
          <ShoppingCartIcon height="24px" width="20px" className="mx-1" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary-gray px-5 py-5 md:hidden">
        <form className="flex w-full max-w-[25rem] rounded border bg-white">
          <input
            className="font-color-black h-12 grow px-5 focus:outline-none"
            placeholder="What are you searching..."
          ></input>
          <button className="d-btn h-10 w-20 rounded-none fill-primary transition-colors !duration-300 hover:bg-primary hover:fill-white">
            <SearchIcon height="20px" />
          </button>
        </form>
      </div>
      <div className="bg-white py-5">
        <div className="md:container mx-0 md:mx-auto">
          <div className="flex items-center justify-around">
            <div className="justify-self-end">
              <button className="d-btn rounded-none bg-gray-100 lg:text-lg transition-colors !duration-300 hover:fill-primary hover:text-primary">
                <Grid height="24px" width="20px" className="mx-2" />
                Browse Categories
              </button>
            </div>
            <div className="hidden space-x-4 lg:text-lg md:flex">
              <Link to="/">home</Link>
              <Link to="/products">products</Link>
              <Link to="/who-we-are">who-we-are</Link>
              <Link to="/404">404</Link>
              <Link to="/a-terrible-place-to-be">Something terrible</Link>
            </div>
            <div className="flex items-center md:hidden">
              <button onClick={toggleNavbar} className="text-black hover:text-primary focus:outline-none">
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
            <div className="hidden justify-self-start md:inline-flex">
              <Button>Shop now</Button>
            </div>
          </div>
          {isOpen && (
            <div className="m-5 flex flex-col gap-y-3 text-lg md:hidden">
              <Link to="/">home</Link>
              <Link to="/products">products</Link>
              <Link to="/who-we-are">who-we-are</Link>
              <Link to="/404">404</Link>
              <Link to="/a-terrible-place-to-be">Something terrible</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
