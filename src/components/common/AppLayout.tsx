import { Box, Toolbar } from "@mui/material";
import React from "react";
import AppNavigation from "./AppNavigation";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import { NavBarContextProvider } from "../../context/nav/NavBarContext";

const AppLayout: React.FC = () => {
  return (
    <>
      <NavBarContextProvider>
        <AppBar />
        <AppNavigation />
      </NavBarContextProvider>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
};

export default AppLayout;
