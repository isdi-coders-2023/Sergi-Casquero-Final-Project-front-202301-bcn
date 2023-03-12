import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const routes = [
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
    ],
  },
];

export const router = createBrowserRouter(routes);
