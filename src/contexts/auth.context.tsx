"use client";
import { GetDomains } from "@/api";
import React, { createContext, useEffect, useState } from "react";

interface AuthContextType {
  emailValue: string | undefined;
  accessToken: string | undefined;
  setCookieEmailValue: (email: string) => void;
  setCookieAccessToken: (token: string) => void;
  setResponseData: (data: any) => void;
  responseData: {};
}

export const AuthContext = createContext<AuthContextType>({
  emailValue: undefined,
  accessToken: undefined,
  setCookieEmailValue: () => {},
  setCookieAccessToken: () => {},
  responseData: {},
  setResponseData: () => {},
});
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [emailValue, setEmailValue] = useState<string | undefined>();
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [responseData, setResponseData] = useState<any>();

  const setCookieEmailValue = (email: string) => {
    setEmailValue(email);
  };
  const setCookieAccessToken = (token: string) => {
    setAccessToken(token);
  };
  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("email"))
      ?.split("=")[1];
    const accessTokenValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken"))
      ?.split("=")[1];
    if (cookieValue && accessTokenValue) {
      setEmailValue(cookieValue);
      setAccessToken(accessTokenValue);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        emailValue,
        accessToken,
        setCookieEmailValue,
        setCookieAccessToken,
        responseData: responseData,
        setResponseData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
