import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useCallback, useEffect } from "react";
import { UserModel } from "../../models/UserModel";
import { useUserLogin } from "../../hooks/UserHooks";

const LoginForm: React.FC = () => {
  const handleLoginError = useCallback((error: unknown) => {
    // TODO: Handle login error
    // example: Toast message login failed here
    console.log(error);
  }, []);

  // TODO: Handle loading
  const { execute: executeLogin, data: loginResponse } =
    useUserLogin(handleLoginError);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const user: Pick<UserModel, "username" | "password"> = {
        username: data.get("username") as string,
        password: data.get("password") as string,
      };

      // TODO: login user
      executeLogin(user);
    },
    [executeLogin]
  );

  useEffect(() => {
    if (!loginResponse) {
      return;
    }

    // TODO: Handle login response here
    // example: Toast message login success here
    console.log(loginResponse);
  }, [loginResponse]);

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User name"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginForm;
