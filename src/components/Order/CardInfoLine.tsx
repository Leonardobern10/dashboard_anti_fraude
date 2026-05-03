import { Stack, Typography } from "@mui/material";

type CardInfoLineProps = {
  title: string;
  value: string;
};

export default function CardInfoLine({ title, value }: CardInfoLineProps) {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-between", width: "100%" }}
    >
      <Typography>{title}</Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
}
