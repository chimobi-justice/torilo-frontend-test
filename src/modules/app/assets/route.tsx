import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Assets = lazy(() => import('~/modules/app/assets/pages/index'));

export const assetsRoutes: RouteObject[] = [
  {
    path: "",
    element: <Assets />,
  },
];
