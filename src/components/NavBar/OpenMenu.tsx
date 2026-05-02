import { Box, Typography, useTheme, type Theme } from "@mui/material";
import { motion } from "motion/react";

const styles = (theme: Theme) => ({
  container: {
    position: "fixed",
    left: 0,
    top: "50%",
    border: "none",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.light,
    padding: "12px 10px",
    borderTopRightRadius: "12px",
    borderBottomRightRadius: "12px",
    cursor: "pointer",
    zIndex: 999,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
});

type OpenMenuProps = {
  changeVisibility: () => void;
};

export default function OpenMenu({ changeVisibility }: OpenMenuProps) {
  const theme = useTheme();
  return (
    <Box
      component={motion.button}
      whileTap={{ scale: 0.95 }}
      onClick={changeVisibility}
      sx={styles(theme).container}
    >
      <Typography sx={styles(theme).text}>Menu →</Typography>
    </Box>
  );
}
