import { createBrowserRouter } from "react-router";

import MainLayout from "../components/layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import AddApplication from "../pages/AddApplication";

const router = createBrowserRouter([
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
    ],
  },
]);

export default router;
