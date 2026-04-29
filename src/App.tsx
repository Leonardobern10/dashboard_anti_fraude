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
  gridTemplateColumns: "10% 90%",
  gridTemplateRows: "7% 93%",
  height: "100%",
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
