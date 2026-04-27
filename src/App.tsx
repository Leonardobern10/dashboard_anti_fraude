import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MainContent from "./components/MainContent/MainContent";

const container = {
  display: "grid",
  gridTemplateAreas: `
          "header header"
          "aside content"
        `,
  gridTemplateColumns: "5% 1fr",
  gridTemplateRows: "7% 1fr",
  height: "100vh",
  justifyContent: "center",
};

export default function App() {
  return (
    <Box sx={container}>
      <Header />
      <NavBar />
      <MainContent />
    </Box>
  );
}
