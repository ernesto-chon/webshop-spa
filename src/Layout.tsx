import { Outlet } from 'react-router-dom';
// import { useMemo } from 'react';

import Navbar from './components/organism/Navbar';
import Footer from './components/organism/Footer';

export default function Layout() {
  // const { pathname } = useLocation();

  // const color = useMemo(() => {
  //   const colorTable = [
  //     { path: '/', color: 'from-slate-900 to-slate-950' },
  //     { path: '/products', color: 'from-teal-900  to-cyan-950' },
  //     { path: '/who-we-are', color: 'from-green-900  to-emerald-950' },
  //     { path: '/showcase', color: 'from-base-100 to-base-200 !text-base-content' },
  //     { path: '/my-account', color: 'from-blue-600  to-blue-950' },
  //   ];

  //   const { color } = colorTable.find((object) => object.path === pathname) || {
  //     color: 'from-neutral-900  to-neutral-950',
  //   };

  //   return color;
  // }, [pathname]);

  return (
    <div className={`flex min-h-screen flex-col`}>
      <Navbar />
      <div className="flex-1 space-y-2 bg-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
