import Link from "next/link"
import ProfessionSection from "./ProfessionSection"
import { EyeIcon, GithubIcon, LinkedInIcon, MailIcon } from "@/Component/Icons"
import Avatar from "./Avatar"


export default function HeroSection() {
  return (
    <section
    className="glass w-full md:w-3/4 p-4 mb-5 flex justify-between gap-5 flex-col-reverse md:flex-row min-h-[80vh]">
        <div className="flex flex-col gap-2 p-5 justify-center flex-1">
            <h1 className="text-4xl md:text-6xl py-2 font-bold break-words">Hello, I'm <span className="text-primary inline">Samir Shrestha</span></h1>
            <div className="text-xl md:text-2xl font-bold break-words ">I'm a <ProfessionSection /></div>
            <div className="flex gap-2 items-end">
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
            <div className="mt-5">
                <Link href={"/pdfs/resume.pdf"} className="block p-2 rounded-full bg-primary/40 text-text/80 font-bold hover:bg-primary/60 border-2 border-text/30 w-fit" title="View Resume">
                  <div className="flex items-center gap-2 h-5">
                   <EyeIcon /> View Resume
                  </div>
                </Link>
            </div>
        </div>
        <div className="flex items-center justify-center flex-1 p-5 md:p-10">
                <Avatar />
        </div>
    </section>
  )
}