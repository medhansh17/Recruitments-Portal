import { Suspense } from "react";
import Loading from "../components/loading";
import Hero from "@/components/hero";
import ScrollIndicator from "@/components/scrollindicator";
import Welcome from "@/components/welcome";


export default function Home() {
  return (
  <main className="min-h-screen">
    <Suspense fallback={<Loading/>}>
        <Hero/>
        <Welcome/>
    </Suspense>
    <ScrollIndicator/>
    </main> 
  );
}
