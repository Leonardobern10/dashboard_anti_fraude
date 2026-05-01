import type { CountStatsOrderResponse } from "../hooks/useOrders";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AssessmentIcon from '@mui/icons-material/Assessment';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export const statsData = (stats: Partial<CountStatsOrderResponse>) => [
  { title: "Hoje", value: stats.today, desc: "Recebidos hoje", icon: CalendarMonthOutlinedIcon },
  {
    title: "Aguardando",
    value: stats.processed,
    desc: "Esperando o pagamento...",
    color: "#00F", icon: CurrencyExchangeIcon
  },
  {
    title: "Em análise",
    value: stats.analisys,
    desc: "Em fila de análise",
    color: "rgba(165, 165, 11, 0.83)",
    icon: AssessmentIcon
  },
  {
    title: "Aprovados",
    value: stats.approved,
    desc: "Pedidos aprovados",
    color: "rgb(5, 146, 5)",
    icon: CreditScoreIcon
  },
  { title: "Rejeitados", value: stats.rejected, desc: "Alto risco", color: "#F00", icon: RemoveShoppingCartIcon },
];
