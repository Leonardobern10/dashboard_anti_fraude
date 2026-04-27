import { Stack, Typography, useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        gridArea: "header",
        borderBottom: 2,
        borderColor: theme.palette.primary.main,
      }}
      component="header"
    >
      <Typography>Hoje</Typography>
      <Typography>Hoje</Typography>
      <Typography>Hoje</Typography>
    </Stack>
  );
}
