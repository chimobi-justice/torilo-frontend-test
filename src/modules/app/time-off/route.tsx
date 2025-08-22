import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Timeoff = lazy(() => import('~/modules/app/time-off/pages/index'));

export const timeoffRoutes: RouteObject[] = [
  {
    path: "",
    element: <Timeoff />,
  },
];
