import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import NavProfileBtn from '../atoms/NavProfileBtn';
import NavShoppingCart from '../atoms/NavShoppingCart';
import navigationBarMenuItems from '@/assets/navigation-menu';
import NavHamburgerMenu from '../atoms/NavHamburgerButton';

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
      <div className="mx-auto flex items-center justify-center gap-5 py-8">
        <NavHamburgerMenu onOpenMenu={toggleMenu} openMenu={showMenu} />
        <div className="logo pl-5">
          <Link to="/">
            <img
              src="https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/08/webshop-logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden justify-center space-x-4 md:flex lg:w-full lg:max-w-[50rem] lg:gap-5 lg:text-xl">
          {navigationBarMenuItems.paths.map((item) => (
            <NavLink to={item.path} className={({ isActive }) => (isActive ? 'text-primary' : undefined)} end>
              {item.title}
            </NavLink>
          ))}
        </div>
        <NavProfileBtn />
        <NavShoppingCart />
      </div>
      {showMenu && (
        <div className="m-5 flex flex-col gap-y-3 text-lg md:hidden">
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
