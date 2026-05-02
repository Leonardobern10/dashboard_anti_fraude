import { Box, Stack, Typography } from "@mui/material";
import logo from "/logo.svg";
import avatar from "../../assets/img/user_avatar.png";

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        height: "8vh",
        boxShadow: "2px 0px 5px #c5c5c5",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 8,
      }}
      component="header"
    >
      <Box>
        <Box>
          <img src={logo} loading="lazy" alt="logo" />
        </Box>
      </Box>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: 3,
        }}
      >
        <img src={avatar} loading="lazy" alt="user image" />
        <Typography variant="body2">Admin</Typography>
      </Stack>
    </Stack>
  );
}
