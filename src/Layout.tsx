import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/organism/Navbar';
import { useMemo } from 'react';

export default function Layout() {
  const { pathname } = useLocation();

  const color = useMemo(() => {
    const colorTable = [
      { path: '/', color: 'from-slate-900 to-slate-950' },
      { path: '/products', color: 'from-teal-900  to-cyan-950' },
      { path: '/who-we-are', color: 'from-green-900  to-emerald-950' },
    ];

    const { color } = colorTable.find((object) => object.path === pathname) || {
      color: 'from-neutral-900  to-neutral-950',
    };
    
    return color;
  }, [pathname]);

  return (
    <div className={`grid place-items-center h-screen !bg-gradient-to-bl ${color} text-white`}>
      <div className="space-y-2">
        <div className={`text-center p-16 mx-4 bg-gradient-to-tr ${color}`}>
          <Outlet />
        </div>

        <Navbar />
      </div>
    </div>
  );
}
