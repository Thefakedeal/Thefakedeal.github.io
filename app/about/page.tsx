import Landing from "@/PageComponents/AboutPage/Landing";
import Timeline from "@/PageComponents/AboutPage/Timeline";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Samir Shrestha | About",
  description: "Samir Shrestha's Portfolio",
};

type Props = {}

export default function About({}: Props) {
  return (
    <main className="w-screen flex flex-col items-center">
      <section className="glass w-full md:w-3/4 p-4 mb-5 flex flex-col gap-2 min-h-[80vh]">
        <Landing />
        <Timeline />
      </section>
    </main>
  )
}