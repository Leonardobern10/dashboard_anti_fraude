import {
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
  useTheme,
  Box,
  type SvgIconTypeMap,
} from "@mui/material";
import { motion } from "motion/react";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

type CardStatsProps = {
  title: string;
  value: number;
  desc: string;
  color?: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export default function CardStats({
  title,
  value,
  desc,
  color,
  icon: Icon,
}: CardStatsProps) {
  const theme = useTheme();

  return (
    <Card
      variant="elevation"
      sx={{
        backgroundColor: theme.palette.secondary.light,
        width: "100%",
        border: 2,
        borderColor: `${color}`,
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        boxShadow: `1px 1px 10px ${color}`,
      }}
    >
      <CardContent>
        <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
          <Stack
            sx={{ justifyContent: "space-between", height: "40%" }}
            direction="row"
          >
            <Typography
              sx={{
                color: theme.palette.secondary.contrastText,
                fontWeight: 500,
              }}
              variant="h4"
              component="h3"
            >
              {title}
            </Typography>
            <Icon sx={{ color: color }} />
          </Stack>
          <Box sx={{ height: "40%", padding: 0 }}>
            <Typography
              variant="caption"
              sx={{ fontSize: 35, color: theme.palette.secondary.contrastText }}
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
                color: theme.palette.secondary.contrastText,
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
