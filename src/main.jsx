import React, { StrictMode }from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


// ① Import MUI theming utilities

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// ② Create (or customize) your theme
const theme = createTheme({
  palette: {
    primary:   { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);