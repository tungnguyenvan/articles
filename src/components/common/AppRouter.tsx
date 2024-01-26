import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import UserPage from "../../pages/UserPage";

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/users",
      element: <UserPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
