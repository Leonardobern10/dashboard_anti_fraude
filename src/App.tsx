import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

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
