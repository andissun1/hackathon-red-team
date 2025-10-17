import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../Pages/Main/Main';
import { MainLayout } from '../Layouts/MainLayout/MainLayout';
import { Profile } from '../Pages/Profile/Profile';
import { Favorites } from '../Pages/Favorites/Favorites';
import { ErrorPage } from '../Pages/ErrorPage/ErrorPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: '/profile/:id',
        Component: Profile,
      },
      {
        path: '/favorites',
        Component: Favorites,
      },
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);
