import { motion } from "motion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import TitleNavBar from "./TitleNavBar";
import ListNav from "./ListNav";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import GroupsIcon from "@mui/icons-material/Groups";

const styles = {
  container: {
    width: {
      xs: 240,
      md: 280,
    },
    height: "100dvh",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 4,
    paddingY: 4,
    backgroundColor: "#FFF",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 1000,
    border: 2,
  },
};

type MenuPros = {
  changeVisibility: () => void;
};

export default function Menu({ changeVisibility }: MenuPros) {
  return (
    <Box
      component={motion.aside}
      initial={{ opacity: 0, x: -280 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -280 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      sx={styles.container}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 4,
        }}
      >
        <TitleNavBar title="Menu" />

        <ListNav
          list={[
            {
              SVG: <BarChartIcon />,
              label: "Analytics",
              color: "#7d7c7c",
            },

            {
              SVG: <ReportProblemIcon />,
              label: "Issues",
              color: "#7d7c7c",
            },

            {
              SVG: <GroupsIcon />,
              label: "Team",
              color: "#7d7c7c",
            },

            {
              SVG: <GroupsIcon />,
              label: "Pedidos",
              color: "#7d7c7c",
            },

            {
              SVG: <GroupsIcon />,
              label: "Clientes",
              color: "#7d7c7c",
            },

            {
              SVG: <GroupsIcon />,
              label: "Pagamento",
              color: "#7d7c7c",
            },
          ]}
        />
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 3,
        }}
      >
        <TitleNavBar title="Suporte" />

        <Stack direction="column" spacing={1} sx={{ alignItems: "center" }}>
          <Typography sx={{ fontSize: 16 }}>Sair</Typography>

          <Typography sx={{ fontSize: 16 }}>
            Relatar problema?{" "}
            <Box
              component="span"
              sx={{
                fontSize: 12,
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Clique aqui
            </Box>
          </Typography>
        </Stack>

        <Button variant="contained" onClick={changeVisibility}>
          Fechar
        </Button>
      </Box>
    </Box>
  );
}
