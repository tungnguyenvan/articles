import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import NewsFeedPage from "../../pages/NewsFeedPage";
import UsersPage from "../../pages/UsersPage";
import MyProfile from "../../pages/MyProfile";
import AppLayout from "./AppLayout";

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <NewsFeedPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/users",
          element: <UsersPage />,
        },
        {
          path: "my-profile",
          element: <MyProfile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
