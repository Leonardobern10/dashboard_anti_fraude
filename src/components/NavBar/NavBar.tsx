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
        width: "10vw",
        height: "92vh",
        boxShadow: "0px 2px 5px #c5c5c5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 6,
        }}
      >
        <TitleNavBar title="Menu" />
        <ListNav
          list={[
            {
              SVG: <BarChartIcon color="warning" />,
              label: "Analisys",
              color: "#FF0",
            },
            { SVG: <ReportProblemIcon />, label: "Issues", color: "#F00" },
            { SVG: <GroupsIcon />, label: "Team", color: "#00F" },
            { SVG: <GroupsIcon />, label: "Pedidos", color: "#00F" },
            { SVG: <GroupsIcon />, label: "Clientes", color: "#00F" },
            { SVG: <GroupsIcon />, label: "Pagamento", color: "#00F" },
          ]}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 6,
        }}
      >
        <TitleNavBar title="Logout" />
        <Stack direction="column">
          <Typography sx={{ fontSize: 16 }}>Sair</Typography>
          <Typography sx={{ fontSize: 16 }}>
            Relatar problema?{" "}
            <Typography sx={{ fontSize: 10 }} component="span">
              Clique aqui
            </Typography>
          </Typography>
          <Typography>teste</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
