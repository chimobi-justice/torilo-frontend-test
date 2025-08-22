import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const PerformanceReview = lazy(() => import('~/modules/app/performance-review/pages/index'));

export const performanceReviewRoutes: RouteObject[] = [
  {
    path: "",
    element: <PerformanceReview />,
  },
];
