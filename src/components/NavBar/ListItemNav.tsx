import { Stack, Typography, type SvgIconProps } from "@mui/material";
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
      component="li"
      sx={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        border: 2,
      }}
    >
      {SVG}
      <Typography variant="body2" sx={{ color: color }}>
        {label}
      </Typography>
    </Stack>
  );
}
