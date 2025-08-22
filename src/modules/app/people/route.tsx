import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const People = lazy(() => import('~/modules/app/people/pages/index'));

export const peopleRoutes: RouteObject[] = [
  {
    path: "",
    element: <People />,
  },
];
