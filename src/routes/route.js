import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../pages/error-page";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

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
      {
        path: "movies/:id",
        Component: MovieDetails,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/registration",
    Component: Registration,
  },
]);
