import { TableCell } from "@mui/material";
import { OrderStatus } from "../../types/OrderStatus";
import StatusComponent from "../StatusComponent";

type StatusCellProps = {
  status: OrderStatus;
};

export default function StatusCell({ status }: StatusCellProps) {
  return (
    <TableCell>
      <StatusComponent small status={status} />
    </TableCell>
  );
}
