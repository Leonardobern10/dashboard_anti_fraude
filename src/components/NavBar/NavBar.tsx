import { Box, Stack, Typography, useTheme } from "@mui/material";
import TitleNavBar from "./TitleNavBar";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import GroupsIcon from "@mui/icons-material/Groups";
import ListNav from "./ListNav";

export default function NavBar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        gridArea: "aside",
        backgroundColor: "#c5c5c5a6",
        boxShadow: "0px 2px 5px #c5c5c5",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitleNavBar title="title" />
        <ListNav
          list={[
            { SVG: <BarChartIcon />, label: "Analisys", color: "#FF0" },
            { SVG: <ReportProblemIcon />, label: "Issues", color: "#F00" },
            { SVG: <GroupsIcon />, label: "Team", color: "#00F" },
          ]}
        />
      </Box>
      <Box>
        <TitleNavBar title="title" />
        <Stack direction="column">
          <Typography>teste</Typography>
          <Typography>teste</Typography>
          <Typography>teste</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
