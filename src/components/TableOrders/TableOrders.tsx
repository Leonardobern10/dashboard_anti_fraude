import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from "@mui/material";
import RiskCell from "./RiskCell";
import type { Order } from "../../types/Order";
import StatusCell from "./StatusCell";
import { useNavigate } from "react-router-dom";

const headers = [
  "id",
  "usuario",
  "valor",
  "status",
  "data/hora",
  "metodo pag.",
  "risco",
];

type TableOrdersProps = {
  data: Order[];
};

export default function TableOrders({ data }: TableOrdersProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((el) => (
              <TableCell
                sx={{ color: theme.palette.secondary.dark, fontWeight: 300 }}
                key={el}
              >
                {el}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <TableRow
              key={el.id}
              onClick={() => navigate(`/dashboard/${el.id}`)}
            >
              <TableCell>{el.id}</TableCell>
              <TableCell>{el.user}</TableCell>
              <TableCell>{el.value}</TableCell>
              <StatusCell status={el.orderStatus} />
              <TableCell>
                {new Date(el.createdAt).toLocaleDateString("pt-BR")} |{" "}
                {new Date(el.createdAt).toLocaleTimeString("pt-BR")}
              </TableCell>
              <TableCell>{el.payment}</TableCell>
              <RiskCell risk="baixo" />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
