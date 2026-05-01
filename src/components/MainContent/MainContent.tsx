import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useOrders } from "../../hooks/useOrders";
import { statsData } from "../../data/statsData";
import CardStats from "../CardStats";
import TableOrders from "../TableOrders/TableOrders";
import { MSG } from "../../data/msg";

const styles = {
  container: {
    gridArea: "content",
    width: "100%",
    paddingX: 10,
    paddingY: 4,
    rowGap: 2,
  },
  boxContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 4,
    height: "100%",
  },
};

export default function MainContent() {
  const { orders, stats, loading, error } = useOrders();
  return (
    <Stack sx={styles.container} direction="column">
      {error && <Typography>{error}</Typography>}
      <Stack direction="row" spacing={8} sx={{ height: "30%" }}>
        {stats &&
          statsData(stats).map((el) => (
            <CardStats
              key={el.title}
              title={el.title}
              value={el.value!}
              desc={el.desc}
              color={el.color}
              icon={el.icon}
            />
          ))}
      </Stack>
      <Box sx={{ width: "100%", height: "100%" }}>
        {loading ? (
          <Box sx={styles.boxContent}>
            <Typography>{MSG.loading}</Typography>
            <CircularProgress
              enableTrackSlot
              size="3rem"
              aria-label="Loading…"
            />
          </Box>
        ) : orders ? (
          <TableOrders data={orders} />
        ) : (
          <Box sx={styles.boxContent}>
            <Typography color="error">{MSG.error}</Typography>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
