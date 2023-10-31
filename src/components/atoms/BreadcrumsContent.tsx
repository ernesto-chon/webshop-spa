import React from 'react';
import ChevronIcon from '@/assets/icons/chevron-right.svg?react';
import ContentSection from './ContentSection';

export default function BreadcrumsContent() {
  const currentPath = window.location.pathname.slice(1);
  const title = currentPath.charAt(0).toUpperCase() + currentPath.slice(1);

  return (
    <div className="flex flex-col bg-secondary-gray">
      <ContentSection>
        <div className="d-breadcrumbs text-xl">
          <ul>
            <li className="px-2">
              <a href="/">Home</a>
              <ChevronIcon height="18px" className="pl-2" />
            </li>
            <li className="px-2">
              <a href={currentPath}>{currentPath}</a>
            </li>
          </ul>
        </div>
        <div className="mt-5 text-left font-bold">
          <h2>{title}</h2>
        </div>
      </ContentSection>
    </div>
  );
}
