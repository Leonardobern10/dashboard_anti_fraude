import { TableCell } from "@mui/material";
import type { OrderStatus } from "../../types/OrderStatus";
import { transformStatus } from "../../utils/tranformStatus";

type StatusCellProps = {
  status: OrderStatus;
};

export default function StatusCell({ status }: StatusCellProps) {
  const transformed = transformStatus(status);
  return (
    <TableCell
      sx={{
        fontWeight: 600,
        letterSpacing: 0,
        color:
          transformed === "Aprovado"
            ? "#0F0"
            : transformed === "Rejeitado"
              ? "#F00"
              : transformed === "Em análise"
                ? "#FF0"
                : transformed === "Pagamento pendente"
                  ? "#00F"
                  : transformed === "Cancelado"
                    ? "#b66802"
                    : "#000",
      }}
    >
      {transformed}
    </TableCell>
  );
}
