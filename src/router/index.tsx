/* eslint-disable sort-keys */
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Loader } from '@components/Loader';

const SimplePage = lazy(() => import('@pages/SimplePage'));
const PremiumPage = lazy(() => import('@pages/PremiumPage'));

export const router = createBrowserRouter([
  {
    path: '/',
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
]);
