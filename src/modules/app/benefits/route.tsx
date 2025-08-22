import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Benefits = lazy(() => import('~/modules/app/benefits/pages/index'));

export const benefitsRoutes: RouteObject[] = [
  {
    path: "",
    element: <Benefits />,
  },
];
