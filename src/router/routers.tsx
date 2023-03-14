import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user/login",
        element: <LoginPage />,
      },
      {
        path: "/user/register",
        element: <RegisterPage />,
      },
      {
        path: "/workouts",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
