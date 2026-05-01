import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.ts";
import "./assets/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <StrictMode>
        <CssBaseline />
        <Routes>
          <Route element={<App />}>
            <Route index path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </ThemeProvider>,
);
