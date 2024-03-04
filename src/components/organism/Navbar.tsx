import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import NavProfileBtn from '../atoms/NavProfileBtn';
import NavShoppingCart from '../atoms/NavShoppingCart';
import navigationBarMenuItems from '@/assets/navigation-menu';
import NavHamburgerMenu from '../atoms/NavHamburgerButton';
import NavSearch from '../atoms/NavSearch';
import CategoriesButton from '../atoms/CategoriesButton';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <nav className="relative top-0 w-screen bg-white">
      <div className="mx-auto flex items-center justify-center gap-5 bg-primary-gray py-8">
        <div className="logo pl-5">
          <Link to="/">
            <img
              src="https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/08/webshop-logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden justify-center space-x-10 md:flex lg:w-full lg:max-w-[40rem] lg:gap-5 lg:text-xl">
          {navigationBarMenuItems.paths.map((item) => (
            <NavLink to={item.path} className={({ isActive }) => (isActive ? 'text-primary' : undefined)} end>
              {item.title}
            </NavLink>
          ))}
        </div>
        <NavProfileBtn />
        <NavShoppingCart />
      </div>
      <div className="mx-auto flex items-center justify-center gap-5  py-8">
        <NavHamburgerMenu onOpenMenu={toggleMenu} openMenu={showMenu} />
        <CategoriesButton />
        <NavSearch />
      </div>
      {showMenu && (
        <div className="flex flex-col gap-y-3 p-5 text-lg md:hidden">
          {navigationBarMenuItems.paths.map((item) => (
            <NavLink
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'text-primary' : undefined)}
              end
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
