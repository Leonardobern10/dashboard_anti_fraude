import axios from "axios";
import { useEffect, useState } from "react";
import type { Order } from "../types/Order";

export type CountStatsOrderResponse = {
  orders: Order[];
  all: number;
  today: number;
  processed: number;
  analisys: number;
  approved: number;
  rejected: number;
};

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [stats, setStats] = useState<Partial<CountStatsOrderResponse> | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/orders/statistics/",
        );
        const data = response.data.data;
        console.log(data);
        setOrders(data.orders);
        setStats({
          all: data.all,
          today: data.today,
          processed: data.processed,
          analisys: data.analisys,
          approved: data.approved,
          rejected: data.rejected,
        });
      } catch (error) {
        setError((error as string).toString());
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    get();
  }, []);

  return { orders, loading, stats, error };
};
