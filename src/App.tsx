import { ThemeProvider } from "@emotion/react";
import "./App.css";
import AppRouter from "./components/common/AppRouter";
import { createTheme } from "@mui/material";
import AppBar from "./components/common/AppBar";

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
