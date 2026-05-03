import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const logged = useAuthStore((state) => state.logged);
  console.log(logged);
  if (!logged) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
