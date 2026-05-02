import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Client } from "../types/Client";
import { useAuthStore } from "../store/authStore";

export const useLogin = () => {
  const navigate = useNavigate();
  const logged = useAuthStore((state) => state.logged);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const loading = useAuthStore((state) => state.loading);
  const { handleSubmit, control, reset } = useForm<Client>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: Client) => {
    try {
      await login(data);
      reset();
      navigate("/dashboard/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      navigate("/login/");
    }
  };

  const tryLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return { onSubmit, tryLogout, handleSubmit, control, logged, loading };
};
