import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Training = lazy(() => import('~/modules/app/training/pages/index'));

export const trainingRoutes: RouteObject[] = [
  {
    path: "",
    element: <Training />,
  },
];
