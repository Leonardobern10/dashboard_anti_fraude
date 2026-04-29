import { Typography } from "@mui/material";

type TitleNavBarProps = {
  title: string;
};

export default function TitleNavBar({ title }: TitleNavBarProps) {
  return (
    <Typography variant="caption" sx={{ fontWeight: 400, color: "#2d2d2d8a" }}>
      {title}
    </Typography>
  );
}
