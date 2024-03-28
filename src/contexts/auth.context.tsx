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
  useEffect(() => {
    console.log("Medhansh");

    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("email"))
      ?.split("=")[1];
    const accessTokenValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken"))
      ?.split("=")[1];
    if (cookieValue && accessTokenValue) {
      console.log("Exist");
      setEmailValue(cookieValue);
      setAccessToken(accessTokenValue);
    }
  });
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
