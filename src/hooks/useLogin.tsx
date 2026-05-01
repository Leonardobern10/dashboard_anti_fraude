import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { Client } from "../types/Client";
import axios from "axios";

export const useLogin = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, reset } = useForm<Client>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: Client) => {
    try {
      await axios.post("http://localhost:3000/api/v1/auth/dashboard/", data, {
        withCredentials: true,
      });
      reset();
      navigate("/dashboard/");
    } catch (error) {
      console.error(error);
      navigate("/login/");
    }
  };

  return { onSubmit, handleSubmit, control };
};
