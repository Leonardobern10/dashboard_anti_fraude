import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MainContent from "./components/MainContent/MainContent";
import { Outlet } from "react-router";

const container = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  alignItems: "strech",
  backgroundColor: "#ffffff",
};

export default function App() {
  return (
    <Box sx={container}>
      <Header />
      <Outlet />
    </Box>
  );
}
