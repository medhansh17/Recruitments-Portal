"use client";
import { Suspense, useEffect, useContext } from "react";
import Loading from "../components/loading";
import { AuthContext } from "@/contexts/auth.context";
import Hero from "@/components/hero";
import ScrollIndicator from "@/components/scrollindicator";
import Welcome from "@/components/welcome";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { setCookieEmailValue, setCookieAccessToken } = useContext(AuthContext);

  useEffect(() => {
    // Check if the router is available
    if (!router) return;

    // Your router-related logic here
  }, [router]);

  useEffect(() => {
    const checkCookie = () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("email"))
        ?.split("=")[1];
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken"))
        ?.split("=")[1];
      if (cookieValue && accessToken) {
        setCookieEmailValue(cookieValue);
        setCookieAccessToken(accessToken);
      } else {
        // Not logged in
        router.push("/login");
      }
    };

    checkCookie();
  }, []);

  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <Hero />
        <Welcome />
      </Suspense>
      <ScrollIndicator />
    </main>
  );
}
