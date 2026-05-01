import { Box } from "@mui/material";
import MainContent from "../components/MainContent/MainContent";
import NavBar from "../components/NavBar/NavBar";

export default function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <MainContent />;
    </Box>
  );
}
