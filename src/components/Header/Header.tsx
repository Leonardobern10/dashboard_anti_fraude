import { Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        height: "8vh",
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
