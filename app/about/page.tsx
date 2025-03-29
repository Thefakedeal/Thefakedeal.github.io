import Landing from "@/PageComponents/AboutPage/Landing";
import Skills from "@/PageComponents/AboutPage/Skills";
import Timeline from "@/PageComponents/AboutPage/Timeline";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Samir Shrestha | About",
  description: "I'm Samir Shrestha, a software developer with a strong focus on web technologies like Laravel, React, Next.js, and Vue.js. With 4+ years of experience, I specialize in building scalable applications and optimizing performance. Beyond coding, I have a deep passion for strength training, fitness coaching, and crafting high-protein, budget-friendly meal plans. Explore my projects, insights, and blogs as I blend tech, fitness, and problem-solving into my daily life.",
  openGraph: {
    title: "Samir Shrestha | About",
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
        title: "Samir Shrestha | About",
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


export default function About() {
  return (
    <main className="w-screen flex flex-col items-center">
      <section className="glass w-full md:w-3/4 p-4 mb-5 flex flex-col gap-2 min-h-[80vh]">
        <Landing />
        <Skills />
        <Timeline />
      </section>
    </main>
  )
}