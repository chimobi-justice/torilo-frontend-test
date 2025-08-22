import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Attendance = lazy(() => import('~/modules/app/attendance/pages/index'));

export const attendanceRoutes: RouteObject[] = [
  {
    path: "",
    element: <Attendance />,
  },
];
