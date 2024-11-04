import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppContexts from "./useAppContexts";
import AuthContext from "../context/AuthProvider";

const useAuthRedirect = () => {
  const { auth } = useAppContexts(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth?.accessToken) {
      navigate("/login");
    }
  }, [auth, navigate]);
};

export default useAuthRedirect;
