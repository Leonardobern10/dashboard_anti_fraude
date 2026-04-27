import type { CountStatsOrderResponse } from "../hooks/useOrders";

export const statsData = (stats: Partial<CountStatsOrderResponse>) => [
  { title: "Hoje", value: stats.today, desc: "Recebidos hoje" },
  {
    title: "Aguardando",
    value: stats.processed,
    desc: "Esperando o pagamento...",
  },
  {
    title: "Em análise",
    value: stats.analisys,
    desc: "Em fila de análise",
  },
  {
    title: "Aprovados",
    value: stats.approved,
    desc: "Pedidos aprovados",
  },
  { title: "Rejeitados", value: stats.rejected, desc: "Alto risco" },
];
