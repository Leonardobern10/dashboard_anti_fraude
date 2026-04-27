export type Order = {
  id: string;
  user: string;
  value: number;
  createdAt: Date;
  updatedAt: Date;
  orderStatus: string;
  orderHistory: string[];
  payment: null | string;
};
