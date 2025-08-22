import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Payslips = lazy(() => import('~/modules/app/pay-slips/pages/index'));

export const payslipsRoutes: RouteObject[] = [
  {
    path: "",
    element: <Payslips />,
  },
];
