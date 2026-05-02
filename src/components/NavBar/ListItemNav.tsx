import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

type ListItemNavProps = {
  SVG: ReactNode;
  label: string;
  color: string;
  href?: string;
};

export default function ListItemNav({
  SVG,
  label,
  color,
  href,
}: ListItemNavProps) {
  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: 1,
      }}
    >
      {SVG}
      <Typography variant="body2" sx={{ color: color }}>
        {label}
      </Typography>
    </Stack>
  );
}
