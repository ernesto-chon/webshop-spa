import React from 'react';

import NavBarLSPC from '../molecules/NavBarLSPC';
import NavBarDMB from '../molecules/NavBarDMB';

export default function Navbar() {
  return (
    <nav className="relative top-0 w-screen bg-primary-gray">
      <NavBarLSPC/>
      <NavBarDMB/>
    </nav>
  );
}
