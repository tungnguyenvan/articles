import React from "react";
import { UserModel } from "../../models/UserModel";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface UserCardProps {
  user: UserModel;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar>{user.username.charAt(0).toUpperCase()}</Avatar>
          <Typography variant="h5" component="div">
            {user.fullname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
