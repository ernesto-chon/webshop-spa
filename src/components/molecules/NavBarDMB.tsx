import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import Grid from '@/assets/icons/grid.svg?react';
import NavMenu from '../atoms/NavMenu';
import Button from '../atoms/Button';
import navigationBarMenuItems from '@/assets/navigation-menu';

export default function NavBarDMB() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = (menuState: boolean) => {
    setShowMenu(menuState);
  };

  return (
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
        {navigationBarMenuItems.paths.map((item) => (
          <NavLink to={item.path} className={({ isActive }) => (isActive ? 'text-primary' : undefined)} end>
            {item.title}
          </NavLink>
        ))}
      </div>
    )}
  </div>

  )
}
