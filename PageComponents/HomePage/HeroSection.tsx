import Link from "next/link"
import ProfessionSection from "./ProfessionSection"
import { GithubIcon, LinkedInIcon, MailIcon } from "@/Component/Icons"

type Props = {}

export default function HeroSection({}: Props) {
  return (
    <section className="glass w-full md:w-3/4 p-4 mb-5 flex justify-between gap-5 flex-col-reverse md:flex-row min-h-[80vh]">
        <div className="flex flex-col gap-2 justify-center">
            <h1 className="text-6xl py-4 font-bold">Hello, I'm <span className="text-accent/80">Samir Shrestha</span></h1>
            <div className="text-xl font-bold text-secondary flex gap-2.5 ">I'm a <ProfessionSection /></div>
            <div className="flex gap-2 px-2 items-end">
                <Link href={"https://github.com/Thefakedeal"} className="h-10 text-secondary/70 hover:text-secondary" title="Visit my Github">
                    <GithubIcon />
                </Link>
                <Link href={"https://www.linkedin.com/in/samir-shrestha-16050a210/"} className="h-10 text-secondary/70 hover:text-secondary" title="Visit my Linkedin">
                    <LinkedInIcon />
                </Link>
                <Link href={"mailto:samir.shrestha.swe@gmail.com"} className="h-10 text-secondary/70 hover:text-secondary" title="Email me">
                    <MailIcon />
                </Link>
            </div>
        </div>
        <div>

        </div>
    </section>
  )
}