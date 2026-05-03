import axios from "axios";
import type { Order } from "../types/Order";

export const getData = async () => {
    try {
        const response = await axios.get(
            "http://localhost:3000/api/v1/orders/statistics/",
            { withCredentials: true },
        );
        const data = response.data.data;
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao obter dados do dashboard.");
    }
}

export const getOrderDetails = async (id: string): Promise<Order> => {
    try {
        const response = await axios.get(`http://localhost:3000/api/v1/orders/${id}`, { withCredentials: true });
        console.log(response.data);
        return response.data.order
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao obter detalhes do pedido.")
    }
}