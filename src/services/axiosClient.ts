import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://sys01.midvietnam.net/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = Cookies.get("refreshToken");
        const { data } = await api.post("/users/refresh-token", {
          refresh_token: refreshToken,
        });

        Cookies.set("accessToken", data?.data[0].token);

        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${data?.data[0].token}`;
        return api(originalRequest);
      } catch (error) {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
