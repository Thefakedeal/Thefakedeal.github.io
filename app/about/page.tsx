import Landing from "@/PageComponents/AboutPage/Landing";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Samir Shrestha | About",
  description: "Samir Shrestha's Portfolio",
};

type Props = {}

export default function About({}: Props) {
  return (
    <main className="w-screen flex flex-col items-center">
      <Landing />
    </main>
  )
}