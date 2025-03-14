import Link from "next/link"
import ActiveLink from "./ActiveLink"
import {MoonIcon, SunIcon} from "@/Component/Icons"
import { SwitchTheme } from "./SwitchTheme"
type Props = {}

export default function NavBar({}: Props) {
  return (
    <header className="flex justify-center py-5 top-0 sticky">
        <nav className="glass md:w-[80%] py-2 px-4 flex justify-end">
            <ul className="flex gap-10 ">
                <ActiveLink title="Home" href="/" />
                <ActiveLink title="Blogs" href="/blogs" />
                <ActiveLink title="Tools" href="/tools" />
                <SwitchTheme />
            </ul>
        </nav>
    </header>
  )
}