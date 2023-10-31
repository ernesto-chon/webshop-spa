import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navigationBarMenuItems from '@/assets/navigation-menu';

interface NavMenuProps {
  onOpenMenu: () => void;
  openMenu: boolean;
}

export default function NavMenu(props: NavMenuProps) {
  const toggleIcon = () => {
    props.onOpenMenu();
  };

  return (
    <div className="lg:w-full lg:max-w-[40rem] xl:max-w-[50rem]">
      <div className="hidden space-x-4 md:flex lg:gap-5 lg:text-lg">
        {navigationBarMenuItems.paths.map((item) => (
          <NavLink to={item.path} className={({ isActive }) => (isActive ? 'text-primary' : undefined)} end>
            {item.title}
          </NavLink>
        ))}
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
            {props.openMenu ? (
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
