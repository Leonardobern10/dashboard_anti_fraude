import axios from "axios";
import type { Client } from "../types/Client";

export const requestLogin = async (data: Client): Promise<string> => {
    try {
        const response = await axios.post("http://localhost:3000/api/v1/auth/dashboard/", data, {
            withCredentials: true,
        });
        return response.data.message.name;
    } catch (error) {
        console.log(error);
        throw new Error("Erro ao efetuar o login.")
    }
}

export const requestLogout = async () => {
    try {
        await axios.post("http://localhost:3000/api/v1/auth/logout", {}, { withCredentials: true });
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao efetuar logout.")
    }
}