import { Outlet, useLocation } from 'react-router-dom';
// import { useMemo } from 'react';

import Navbar from './components/organism/Navbar';
import Hero from './components/molecules/Hero';
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
      <div className="flex-1 space-y-2 bg-[#F8F8F8]">
        <Hero
          title="Get 30% off"
          subtitle="Step into style with our curated collection of footwear that's designed to elevate your every step. We believe that the right pair of shoes can transform not just your outfit, but your entire day."
          season='AUTUMN SALES'
          imageSrc="https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/06/banner-1024x836.png"
        />
        <div className={`mx-4 p-16 text-center`}>
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
