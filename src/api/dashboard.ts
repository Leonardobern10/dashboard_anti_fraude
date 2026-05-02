import axios from "axios";

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