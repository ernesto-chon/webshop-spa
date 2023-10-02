import { Link } from 'react-router-dom';

import Button from '../atoms/Button';
import ShoppingCartIcon from '@/assets/icons/cart.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import ProfileICon from '@/assets/icons/user.svg?react';
import Grid from '@/assets/icons/grid.svg?react';

export default function Navbar() {
  return (
    <header className="relative top-0 w-screen">
      <div className="grid grid-flow-col justify-center items-center gap-5 py-5 bg-primary-gray">
        <form className="rounded border bg-white">
          <input className="font-color-black px-4 h-10" placeholder="What are you searching..."></input>
          <button className="d-btn h-10 w-20 rounded-none fill-primary transition-colors !duration-300 hover:bg-primary hover:fill-white">
            <SearchIcon height="20px" />
          </button>
        </form>
        <Link to="/my-account">
          <ProfileICon height="24px" width="20px" className='mx-1'/>
        </Link>
        <ShoppingCartIcon height="24px" width="20px" className='mx-1'/>
      </div>
      <div className="grid grid-flow-col justify-center items-center gap-5 py-5 text-lg">
        <button className='d-btn bg-gray-100 rounded-none text-lg transition-colors !duration-300 hover:fill-primary hover:text-primary'>
          <Grid height="24px" width="20px" className='mx-2'/>
          Browse Categories
        </button>
        <Link to="/">home</Link>
        <Link to="/products">products</Link>
        <Link to="/who-we-are">who-we-are</Link>
        <Link to="/404">404</Link>
        <Link to="/a-terrible-place-to-be">Something terrible</Link>
        <Button>Shop now</Button>
      </div>
    </header>
  );
}
