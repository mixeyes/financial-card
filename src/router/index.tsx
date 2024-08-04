/* eslint-disable sort-keys */
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Loader } from '@components/Loader';
import { MainContainer } from '@modules/layout/Main';

const SimplePage = lazy(() => import('@pages/SimplePage'));
const PremiumPage = lazy(() => import('@pages/PremiumPage'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <SimplePage />
          </Suspense>
        ),
      },
      {
        path: '/premium',
        element: (
          <Suspense fallback={<Loader />}>
            <PremiumPage />
          </Suspense>
        ),
      },
    ],
  },
]);
