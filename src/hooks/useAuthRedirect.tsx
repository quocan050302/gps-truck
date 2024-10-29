import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAuthRedirect = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.accessToken) {
      navigate("/login");
    }
  }, [auth, navigate]);
};

export default useAuthRedirect;
