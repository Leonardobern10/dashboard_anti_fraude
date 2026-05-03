import { create } from "zustand";
import type { Client } from "../types/Client";
import { requestLogin, requestLogout } from "../api/auth";

type AuthStoreType = {
    logged: boolean;
    loading: boolean;
    user: undefined | string;
    login: (data: Client) => Promise<void>;
    logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
    logged: false,
    loading: false,
    user: undefined,
    login: async (data: Client) => {
        try {
            set({ loading: true })
            const name = await requestLogin(data);
            set({ logged: true, user: name });
        } catch (error) {
            set({ logged: false })
            throw error;
        } finally {
            set({ loading: false })
        }
    },
    logout: async () => {
        try {
            set({ loading: true })
            await requestLogout();
            set({
                logged: false,
                user: undefined,
            });
        } catch (error) {
            throw error;
        } finally {
            set({ loading: false })
        }
    }
}))
