import React, { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";

interface UserSession {
  accessToken: string;
  refreshToken?: string;
}

interface AuthContextType {
  auth: UserSession | null;
  setAuth: React.Dispatch<React.SetStateAction<UserSession | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<UserSession | null>(() => {
    const token = Cookies.get("accessToken");
    return token ? { accessToken: token } : null;
  });

  useEffect(() => {
    if (auth?.accessToken) {
      Cookies.set("accessToken", auth.accessToken, { expires: 1 });
    } else {
      Cookies.remove("accessToken");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
