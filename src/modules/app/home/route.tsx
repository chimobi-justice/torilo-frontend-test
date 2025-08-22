import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Home = lazy(() => import('~/modules/app/home/pages/index'));

export const homeRoutes: RouteObject[] = [
  {
    path: "",
    element: <Home />,
  },
];
