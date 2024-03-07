import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Home, NotFound } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [{ path: '/', element: <Home /> }],
  },
]);
