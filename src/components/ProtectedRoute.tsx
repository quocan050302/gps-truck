import { ReactNode } from "react";
import useAuthRedirect from "../hooks/useAuthRedirect";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  useAuthRedirect();
  return <>{children}</>;
};

export default ProtectedRoute;
