import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Documents = lazy(() => import('~/modules/app/documents/pages/index'));

export const documentsRoutes: RouteObject[] = [
  {
    path: "",
    element: <Documents />,
  },
];
