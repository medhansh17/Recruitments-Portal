"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  emailValue: string | undefined;
  accessToken: string | undefined;
  setCookieEmailValue: (email: string) => void;
  setCookieAccessToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  emailValue: undefined,
  accessToken: undefined,
  setCookieEmailValue: () => {},
  setCookieAccessToken: () => {},
});
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [emailValue, setEmailValue] = useState<string | undefined>();
  const [accessToken, setAccessToken] = useState<string | undefined>();

  const setCookieEmailValue = (email: string) => {
    setEmailValue(email);
    console.log("Email value set to " + email);
  };
  const setCookieAccessToken = (token: string) => {
    setAccessToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        emailValue,
        accessToken,
        setCookieEmailValue,
        setCookieAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
