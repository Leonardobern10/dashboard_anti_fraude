import type { OrderStatus } from "./OrderStatus";

export type OrderHistory = {
    id: string;
    updatedAt: Date;
    currentStatus: OrderStatus;
}