import { Controller } from "react-hook-form";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const { handleSubmit, control, onSubmit } = useLogin();
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "92vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: theme.spacing(8),
        paddingY: theme.spacing(8),
      }}
    >
      <Typography component="h1" variant="h1">
        Login
      </Typography>
      <Stack
        direction="column"
        spacing={4}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="standard-basic"
              label="E-mail"
              variant="standard"
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="standard-basic"
              label="Senha"
              variant="standard"
              type="password"
              {...field}
            />
          )}
        />

        <Button type="submit" variant="contained">
          Entrar
        </Button>
      </Stack>
    </Box>
  );
}
