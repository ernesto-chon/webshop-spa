import React from 'react';

import ShoppingCartIcon from '@/assets/icons/cart.svg?react';

// This component is not currently being used

export default function NavCartBtn() {
  return (
    <div className="d-dropdown d-dropdown-end">
      <label tabIndex={0} className="d-btn-ghost d-btn d-btn-square hover:bg-secondary-gray">
        <div className="d-indicator">
          <ShoppingCartIcon height="24px" width="20px" className="mx-1" />
          <span className="d-badge d-indicator-item d-badge-sm h-5 w-5 rounded-full border-2 border-white bg-primary text-white">
            8
          </span>
        </div>
        {/* <span className='hidden lg:block ml-[100px]'>$8.00</span> */}
      </label>
      <div tabIndex={0} className="d-card d-dropdown-content d-card-compact z-[1] mt-3 w-52 bg-base-100 shadow">
        <div className="d-card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="d-card-actions">
            <button className="d-btn-primary d-btn d-btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
