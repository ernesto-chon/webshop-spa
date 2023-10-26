import React from 'react';
import ChevronIcon from '@/assets/icons/chevron-right.svg?react';

export default function BreadcrumsContent() {
  const currentPath = window.location.pathname;

  return (
    <div className="my-10 flex flex-col bg-secondary-gray">
      <div className="d-breadcrumbs">
        <ul>
          <li className="px-2">
            <a href="/">Home</a>
            <ChevronIcon height="18px" className="pl-2" />
          </li>
          <li className="px-2">
            <a href={currentPath}>{currentPath.slice(1)}</a>
          </li>
        </ul>
      </div>
      <div className="mt-5 text-left font-extrabold">
        <h2>Shop</h2>
      </div>
    </div>
  );
}
