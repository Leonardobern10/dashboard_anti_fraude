import { Box, useTheme } from "@mui/material";

export default function NavBar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        gridArea: "aside",
        borderRight: 2,
        borderColor: theme.palette.primary.main,
      }}
    ></Box>
  );
}
