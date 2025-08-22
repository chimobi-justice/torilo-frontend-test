import { createBrowserRouter, Navigate } from 'react-router-dom'

import Applayout from '~/modules/layouts'
import { NotFound } from '~/modules/shared'


import { homeRoutes } from '~/modules/app/home/route'
import { peopleRoutes } from '~/modules/app/people/route'
import { timeoffRoutes } from '~/modules/app/time-off/route'
import { trainingRoutes } from '~/modules/app/training/route'
import { benefitsRoutes } from '~/modules/app/benefits/route'
import { documentsRoutes } from '~/modules/app/documents/route'
import { tasksRoutes } from '~/modules/app/tasks/route'
import { attendanceRoutes } from '~/modules/app/attendance/route'
import { payslipsRoutes } from '~/modules/app/pay-slips/route'
import { assetsRoutes } from '~/modules/app/assets/route'
import { shiftRotaRoutes } from '~/modules/app/shift-rota/route'
import { performanceReviewRoutes } from '~/modules/app/performance-review/route'
import { settingsRoutes } from '~/modules/app/settings/route'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />, // Redirect from "/" to "/dashboard"
  },
  {
    path: "/home",
    element: <Applayout />,
    children: homeRoutes
  },
  {
    path: "/people",
    element: <Applayout />,
    children: peopleRoutes
  },
  {
    path: "/time-off",
    element: <Applayout />,
    children: timeoffRoutes
  },
  {
    path: "/training",
    element: <Applayout />,
    children: trainingRoutes
  },
  {
    path: "/benefits",
    element: <Applayout />,
    children: benefitsRoutes
  },
  {
    path: "/documents",
    element: <Applayout />,
    children: documentsRoutes
  },
  {
    path: "/tasks",
    element: <Applayout />,
    children: tasksRoutes
  },
  {
    path: "/attendance",
    element: <Applayout />,
    children: attendanceRoutes
  },
  {
    path: "/pay-slips",
    element: <Applayout />,
    children: payslipsRoutes
  },
  {
    path: "/assets",
    element: <Applayout />,
    children: assetsRoutes
  },
  {
    path: "/shift-rota",
    element: <Applayout />,
    children: shiftRotaRoutes
  },
  {
    path: "/performance-review",
    element: <Applayout />,
    children: performanceReviewRoutes
  },
  {
    path: "/settings",
    element: <Applayout />,
    children: settingsRoutes
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);