import {
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
  useTheme,
  Box,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { motion } from "motion/react";

type CardStatsProps = {
  title: string;
  value: number;
  desc: string;
};

export default function CardStats({ title, value, desc }: CardStatsProps) {
  const theme = useTheme();

  return (
    <Card
      variant="elevation"
      sx={{
        backgroundColor: theme.palette.primary.dark,
        width: "12rem",
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        boxShadow: `2px 2px 5px ${theme.palette.primary.dark}`,
      }}
    >
      <CardContent>
        <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
          <Stack
            sx={{ justifyContent: "space-between", height: "40%" }}
            direction="row"
          >
            <Typography
              sx={{ color: theme.palette.secondary.main }}
              variant="h4"
              component="h3"
            >
              {title}
            </Typography>
            <CalendarMonthOutlinedIcon color="secondary" />
          </Stack>
          <Box sx={{ height: "40%", padding: 0 }}>
            <Typography
              variant="caption"
              sx={{ fontSize: 35, color: theme.palette.secondary.main }}
            >
              {value}
            </Typography>
            <Divider
              sx={{
                marginY: 1,
                backgroundColor: "#f3efefa1",
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.secondary.main,
                whiteSpace: "nowrap",
              }}
            >
              {desc}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
