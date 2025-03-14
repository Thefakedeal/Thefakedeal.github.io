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
      <div className="glass">
        <h1>Lorem ipsum dolor sit.</h1>
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consequatur laboriosam ipsam cupiditate nihil, inventore ipsum recusandae ducimus necessitatibus, iste distinctio ex asperiores nisi temporibus natus accusamus commodi. Adipisci, exercitationem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere veniam quos consectetur odio numquam tenetur!</p>
      </div>
   </main>
  );
}
