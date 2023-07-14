import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout.tsx';
// routes
import Error from './routes/Error.tsx';
import Home from './routes/Home.tsx';
import Products from './routes/Products.tsx';
import WhoWeAre from './routes/WhoWeAre.tsx';
import SomethingTerrible from './routes/SomethingTerrible.tsx';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
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
          path: '/who-we-are',
          element: <WhoWeAre />,
        },
        {
          path: '/a-terrible-place-to-be',
          element: <SomethingTerrible />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}