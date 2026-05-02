import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const logged = useAuthStore((state) => state.logged);
  const navigate = useNavigate();

  if (!logged) {
    navigate("login");
  } else {
    return children;
  }
}
