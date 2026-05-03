import type { OrderHistory } from "./OrderHistory";
import type { OrderStatus } from "./OrderStatus";
import type { PaymentMethod } from "./PaymentMethod";

export type Order = {
  id: string;
  user: string;
  value: number;
  createdAt: Date;
  updatedAt: Date;
  orderStatus: OrderStatus;
  orderHistory: OrderHistory[];
  payment: null | PaymentMethod;
};
