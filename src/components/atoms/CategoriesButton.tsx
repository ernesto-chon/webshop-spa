import { useState } from 'react';
import { useGetCategories } from '@/hooks/useGetCategory.ts';
import { Link } from 'react-router-dom';

export default function CategoriesButton() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const overlayColor = toggleDrawer ? 'bg-black/80' : 'bg-transparent';

  const { data: allCategories } = useGetCategories();

  return (
    <div className="d-drawer z-20">
      <input
        id="my-drawer"
        type="checkbox"
        className="d-drawer-toggle"
        onClick={() => setToggleDrawer(!toggleDrawer)}
      />
      <div className="d-drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="d-btn rounded-sm bg-primary text-base text-white transition-colors !duration-300 hover:bg-primary-hover"
        >
          Categories
        </label>
      </div>
      <div className="d-drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className={`d-drawer-overlay ${overlayColor}`}></label>
        <ul className="d-menu min-h-full w-[90vw] bg-base-200 px-10 py-12 sm:w-96">
          {/* Sidebar content here */}
          {allCategories &&
            allCategories.map((categoryName) => (
              <li>
                <Link to={`/${categoryName}`} className="w-max px-4 py-1 text-lg hover:bg-secondary-gray">
                  {categoryName.replace('-', ' ')}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
