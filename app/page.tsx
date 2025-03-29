import HeroSection from "@/PageComponents/HomePage/HeroSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Samir Shrestha | Home",
  description: "I'm Samir Shrestha, a software developer with a strong focus on web technologies like Laravel, React, Next.js, and Vue.js. With 4+ years of experience, I specialize in building scalable applications and optimizing performance. Beyond coding, I have a deep passion for strength training, fitness coaching, and crafting high-protein, budget-friendly meal plans. Explore my projects, insights, and blogs as I blend tech, fitness, and problem-solving into my daily life.",
  openGraph: {
    title: "Samir Shrestha | Home",
    siteName: "samirshrestha.info.np",
    type: "website",
    description:"I'm Samir Shrestha, a software developer with a strong focus on web technologies like Laravel, React, Next.js, and Vue.js. With 4+ years of experience, I specialize in building scalable applications and optimizing performance. Beyond coding, I have a deep passion for strength training, fitness coaching, and crafting high-protein, budget-friendly meal plans. Explore my projects, insights, and blogs as I blend tech, fitness, and problem-solving into my daily life.",
    images: [
        {
            url: "https://samirshrestha.info.np/images/avatar.webp"
        },
    ],
    },

    twitter: {
        title: "Samir Shrestha | Home",
        description: "I'm Samir Shrestha, a software developer with a strong focus on web technologies like Laravel, React, Next.js, and Vue.js. With 4+ years of experience, I specialize in building scalable applications and optimizing performance. Beyond coding, I have a deep passion for strength training, fitness coaching, and crafting high-protein, budget-friendly meal plans. Explore my projects, insights, and blogs as I blend tech, fitness, and problem-solving into my daily life.",
        card: "summary_large_image",
        site: "samirshrestha.info.np",
        images: [
          {
              url: "https://samirshrestha.info.np/images.avatar.webp"
          },
        ],
    },

    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        },
},
};

export default function Home() {

  return (
   <main className="w-screen flex flex-col items-center">
      <HeroSection />
   </main>
  );
}
