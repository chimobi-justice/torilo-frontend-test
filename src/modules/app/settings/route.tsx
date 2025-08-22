import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Settings = lazy(() => import('~/modules/app/settings/pages/index'));

export const settingsRoutes: RouteObject[] = [
  {
    path: "",
    element: <Settings />,
  },
];
