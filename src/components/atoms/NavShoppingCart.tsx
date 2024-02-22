import { useState } from 'react';

import ShoppingCartIcon from '@/assets/icons/cart.svg?react';

export default function NavShoppingCart() {
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false);

  const overlayColor = toggleShoppingCart ? 'bg-black/80' : 'bg-transparent';

  return (
    <div className="d-drawer d-drawer-end z-20">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="d-drawer-toggle"
        onClick={() => setToggleShoppingCart(!toggleShoppingCart)}
      />
      <div className="d-drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="d-drawer-button d-btn-primary d-btn d-btn-square hover:bg-secondary-gray"
        >
          <ShoppingCartIcon height="24px" width="20px" className="mx-1" />
        </label>
      </div>
      <div className="d-drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className={`d-drawer-overlay ${overlayColor}`}></label>
        <ul className="d-menu min-h-full w-[90vw] bg-base-200 px-4 py-12 text-base-content sm:max-w-lg">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
