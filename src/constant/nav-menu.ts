import type { AppMenu as NavMenu } from '~/interface/app-menu'

export const NAV_MENU: NavMenu[] = [
    {
      name: "Home",
      path: "/home",
      hasChildren: false
    },
    {
      name: "People",
      path: "/people",
      hasChildren: false
    },
    {
      name: "Time off",
      path: "/time-off",
      hasChildren: false
    },
    {
      name: "Training",
      path: "/training",
      hasChildren: true
    },
    {
      name: "Benefits",
      path: "/benefits",
      hasChildren: false
    },
    {
      name: "Documents",
      path: "/documents",
      hasChildren: false
    },
    {
      name: "Tasks",
      path: "/tasks",
      hasChildren: false
    },
    {
      name: "Attendance",
      path: "/attendance",
      hasChildren: false
    },
    {
      name: "Payslips",
      path: "/pay-slips",
      hasChildren: false
    },
    {
      name: "Assets",
      path: "/assets",
      hasChildren: false
    },
    {
      name: "Shift Rota",
      path: "/shift-rota",
      hasChildren: false
    },
    {
      name: "Performance Review",
      path: "/performance-review",
      hasChildren: false
    },
    {
      name: "Settings",
      path: "/settings",
      hasChildren: false
    }
  ] as const;