import Link from "next/link"


type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className=" flex justify-center pt-5 pb-2">
        <section className="glass w-full md:w-3/4 p-4 mb-5 flex flex-wrap gap-2 text-small justify-center align-center text-sm text-text/60">
            <Link  target="_blank" href={"https://github.com/Thefakedeal"}  title="Github">
                Github
            </Link> 
            <span className="hidden md:block">
            | 
            </span>
            <Link target="_blank" href={"mailto:samir.shrestha.swe@gmail.com"}  title="Email">
                samir.shrestha.swe@gmail.com
            </Link>
            <span className="hidden md:block">
            | 
            </span>
            <Link target="_blank" href={"https://www.linkedin.com/in/samir-shrestha-16050a210/"}  title="Linkedin">
                Linkedin
            </Link> 
        </section>
    </footer>
  )
}