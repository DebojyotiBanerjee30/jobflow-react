import { createBrowserRouter } from "react-router";

import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";

import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import AddApplication from "../pages/AddApplication";
import EditApplication from "../pages/EditApplication";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
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
