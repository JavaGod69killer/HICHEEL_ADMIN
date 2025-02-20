import { lazy } from "react";

const DashboardPage = lazy(() => import("pages/dashboard/dashboard"));
const Information = lazy(() => import("pages/dashboard/information"));
const Report = lazy(() => import("pages/dashboard/report"));

export const dashboardRoutes = [
  {
    key: "dashboard",
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    key: "dashboard",
    path: "information",
    element: <Information />,
  },
  {
    key: "dashboard",
    path: "report",
    element: <Report />,
  },
];
