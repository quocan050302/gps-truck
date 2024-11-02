import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://sys01.midvietnam.net/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function onRefreshed(token: string) {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
}
function addRefreshSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

api.interceptors.request.use((config) => {
  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        const refreshToken = Cookies.get("refreshToken");

        try {
          const { data } = await api.post<{ data: { token: string }[] }>(
            "/users/refresh-token",
            {
              refresh_token: refreshToken,
            }
          );

          const newToken = data?.data[0].token;
          Cookies.set("accessToken", newToken);
          isRefreshing = false;
          onRefreshed(newToken);
        } catch (refreshError) {
          isRefreshing = false;
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }

      return new Promise((resolve) => {
        addRefreshSubscriber((token: string) => {
          originalRequest._retry = true;
          if (originalRequest.headers) {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
          }
          resolve(api(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  }
);

export default api;
