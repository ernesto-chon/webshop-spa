import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout.tsx';

// routes
import ErrorPage from './routes/ErrorPage.tsx';
import Home from './routes/Home.tsx';
import Products from './routes/Products.tsx';
import ProductPage from './routes/ProductPage.tsx';
import WhoWeAre from './routes/WhoWeAre.tsx';
import SomethingTerrible from './routes/SomethingTerrible.tsx';
import MyAccount from './routes/MyAccount.tsx';
import Showcase from './routes/Showcase.tsx';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/products/:productId',
          element: <ProductPage />,
        },
        {
          path: '/who-we-are',
          element: <WhoWeAre />,
        },
        {
          path: '/a-terrible-place-to-be',
          element: <SomethingTerrible />,
        },
        {
          path: '/my-account',
          element: <MyAccount />,
        },
        {
          path: '/showcase',
          element: <Showcase />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
