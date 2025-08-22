import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const ShiftRota = lazy(() => import('~/modules/app/shift-rota/pages/index'));

export const shiftRotaRoutes: RouteObject[] = [
  {
    path: "",
    element: <ShiftRota />,
  },
];
