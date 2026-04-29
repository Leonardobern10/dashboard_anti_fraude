import { Stack } from "@mui/material";
import type { ReactNode } from "react";
import ListItemNav from "./ListItemNav";

type ListNavProps = {
  list: { label: string; SVG: ReactNode; color: string }[];
};

export default function ListNav({ list }: ListNavProps) {
  return (
    <Stack
      direction="column"
      component="ul"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        border: 2,
      }}
    >
      {list.map((el) => (
        <ListItemNav label={el.label} SVG={el.SVG} color={el.color} />
      ))}
    </Stack>
  );
}
