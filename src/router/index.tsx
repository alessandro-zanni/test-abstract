import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { Eyeglasses, Home, Lenses, NotFound } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/eyeglasses', element: <Eyeglasses /> },
      { path: '/lenses', element: <Lenses /> },
    ],
  },
]);
