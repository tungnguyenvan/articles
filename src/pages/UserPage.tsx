import React from "react";
import UserTable from "../components/user/UserTable";
import { Paper } from "@mui/material";

const UserPage: React.FC = () => {
  return (
    <Paper>
      <UserTable />
    </Paper>
  );
};

export default UserPage;
