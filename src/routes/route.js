import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../pages/error-page";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminLayout from "../components/layouts/AdminLayout";
import Movies from "../admin/Movies";
import NewMovie from "../admin/NewMovie";
import Users from "../admin/Users";

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
    path: "login",
    Component: Login,
  },
  {
    path: "registration",
    Component: Registration,
  },
  {
    path: "admin",
    Component: AdminLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/admin",
        Component: Movies,
      },
      {
        path: "/admin/new-movie",
        Component: NewMovie,
      },
      {
        path: "/admin/users",
        Component: Users,
      },
    ],
  },
]);
