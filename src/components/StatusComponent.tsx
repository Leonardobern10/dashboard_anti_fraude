import { Box, Typography } from "@mui/material";
import type { OrderStatus } from "../types/OrderStatus";
import { transformStatus } from "../utils/transformStatus";

type StatusComponentProps = {
  status: OrderStatus;
  small?: boolean;
};

export default function StatusComponent({
  status,
  small,
}: StatusComponentProps) {
  const transformed = transformStatus(status);
  return (
    <Box
      sx={{
        color:
          transformed === "Aprovado"
            ? "#71fd71"
            : transformed === "Rejeitado"
              ? "#f76c6c"
              : transformed === "Em análise"
                ? "#ffff00"
                : transformed === "Pagamento pendente"
                  ? "#4e4ed3"
                  : transformed === "Cancelado"
                    ? "#f4a63f"
                    : "#000",
        backgroundColor:
          transformed === "Aprovado"
            ? "rgb(6, 195, 6)"
            : transformed === "Rejeitado"
              ? "rgb(168, 13, 13)"
              : transformed === "Em análise"
                ? "rgb(163, 163, 5)"
                : transformed === "Pagamento pendente"
                  ? "rgb(20, 20, 81)"
                  : transformed === "Cancelado"
                    ? "#a15d04"
                    : "#000",
        paddingX: 2,
        paddingY: small ? 0.5 : 1,
        borderRadius: 2,
        width: "fit-content",
      }}
    >
      <Typography sx={{ fontSize: small ? 12 : 20 }}>{transformed}</Typography>
    </Box>
  );
}
