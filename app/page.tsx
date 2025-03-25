import HeroSection from "@/PageComponents/HomePage/HeroSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Samir Shrestha | Home",
  description: "Samir Shrestha's Portfolio",
};

export default function Home() {

  return (
   <main className="w-screen flex flex-col items-center">
      <HeroSection />
   </main>
  );
}
