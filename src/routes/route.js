import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../pages/error-page";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
