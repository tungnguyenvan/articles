import React, { useCallback } from "react";
import UserTable from "../components/user/UserTable";
import { Box, Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { UserModel } from "../models/UserModel";
import { useUsers } from "../hooks/UserHooks";
import AppEmitter, { EmitterAction } from "../utils/AppEmitter";
import CreateUserModal from "../components/user/CreateUserModal";
import UpdateUserModal from "../components/user/UpdateUserModal";

const MOCK_USERS: UserModel[] = [
  {
    id: 1,
    username: "user1",
    email: "user1@example.com",
    created_at: new Date(),
    updated_at: new Date(),
    fullname: "User 1",
  },
  {
    id: 2,
    username: "user2",
    email: "user2@example.com",
    created_at: new Date(),
    updated_at: new Date(),
    fullname: "User 2",
  },
];

const UsersPage: React.FC = () => {
  const { data: users } = useUsers();

  const onFloatButtonClick = useCallback(() => {
    AppEmitter.instance.publish(EmitterAction.SHOW_CREATE_USER_MODAL);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <UserTable users={users ?? MOCK_USERS} />

      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Fab color="primary" aria-label="add" onClick={onFloatButtonClick}>
          <AddIcon />
        </Fab>
      </Box>

      <CreateUserModal />
      <UpdateUserModal />
    </Container>
  );
};

export default UsersPage;
