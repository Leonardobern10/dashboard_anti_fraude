import { Box, Stack, Typography } from "@mui/material";
import logo from "/logo.svg";
import avatar from "../../assets/img/user_avatar.png";
import { useAuthStore } from "../../store/authStore";

const styles = {
  container: {
    height: "8vh",
    boxShadow: "2px 0px 5px #c5c5c5",
    alignItems: "center",
    justifyContent: "space-between",
    paddingX: 8,
  },
  userInfo: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 3,
  },
};

export default function Header() {
  const user = useAuthStore((state) => state.user);
  return (
    <Stack direction="row" sx={styles.container} component="header">
      <Box>
        <Box>
          <img src={logo} loading="lazy" alt="logo" />
        </Box>
      </Box>
      <Stack direction="row" spacing={4} sx={styles.userInfo}>
        <img src={avatar} loading="lazy" alt="user image" />
        <Typography variant="body2">"Olá, {user ?? "Convidado"}"</Typography>
      </Stack>
    </Stack>
  );
}
