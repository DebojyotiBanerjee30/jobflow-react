import { createBrowserRouter } from "react-router";

import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";

import {
  Dashboard,
  Applications,
  AddApplication,
  EditApplication,
  Login,
  NotFound,
} from "./lazyPages";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "applications",
            element: <Applications />,
          },
          {
            path: "applications/new",
            element: <AddApplication />,
          },
          {
            path: "applications/edit/:id",
            element: <EditApplication />,
          },
        ],
      },
    ],
  },
]);

export default router;
