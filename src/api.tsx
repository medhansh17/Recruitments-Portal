"use client";
import { useContext } from "react";
import { AuthContext } from "./contexts/auth.context";
import axios from "axios";

export const PutDomains = async (selectedDomains: string[], domain: string) => {
  const { emailValue, accessToken } = useContext(AuthContext);
  try {
    const response = await axios.put(
      `https://recruitments-portal-backend.vercel.app/put_domains/${domain.toLocaleLowerCase()}/${emailValue}`,
      {
        [domain.toLocaleLowerCase()]: selectedDomains,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      alert("Successfully submitted");
    } else {
      alert("Failed to submit");
    }
  } catch (error: Error | any) {
    alert(error.message);
  }
};

export const GetDomains = async () => {
  const { emailValue, accessToken } = useContext(AuthContext);
  try {
    const response = await axios.get(
      `https://recruitments-portal-backend.vercel.app/get_domains/${emailValue}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: Error | any) {
    console.error(error.message);
    throw error;
  }
};
