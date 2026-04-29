import { Stack, Typography, useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        gridArea: "header",
        backgroundColor: "#c5c5c5a6",
        boxShadow: "2px 0px 5px #c5c5c5",
      }}
      component="header"
    >
      <Typography>Hoje</Typography>
      <Typography>Hoje</Typography>
      <Typography>Hoje</Typography>
    </Stack>
  );
}
