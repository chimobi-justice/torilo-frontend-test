import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom'

const Tasks = lazy(() => import('~/modules/app/tasks/pages/index'));

export const tasksRoutes: RouteObject[] = [
  {
    path: "",
    element: <Tasks />,
  },
];
