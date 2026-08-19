import { lazy } from "react";

export const Dashboard = lazy(() => import("../pages/Dashboard"));
export const Applications = lazy(() => import("../pages/Applications"));
export const AddApplication = lazy(() => import("../pages/AddApplication"));
export const EditApplication = lazy(() => import("../pages/EditApplication"));
export const Login = lazy(() => import("../pages/Login"));
export const NotFound = lazy(() => import("../pages/NotFound"));
