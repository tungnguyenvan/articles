import React from "react";
import LoginForm from "../components/login/LoginForm";
import { Container } from "@mui/material";

const LoginPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
