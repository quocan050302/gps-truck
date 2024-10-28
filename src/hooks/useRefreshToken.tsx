import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh-token", {
      withCredentials: true,
    });
    setAuth((prev) => {
      if (prev) {
        return {
          ...prev,
          accessToken: response.data.accessToken,
        };
      }
      return null;  
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
