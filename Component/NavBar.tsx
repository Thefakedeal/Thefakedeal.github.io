import ActiveLink from "./ActiveLink"
import { SwitchTheme } from "./SwitchTheme"
type Props = {}

export default function NavBar({}: Props) {
  return (
    <header className="flex justify-center py-5 top-0 sticky z-50">
        <nav className="glass md:w-3/4 w-full  py-2 px-4 flex justify-end items-center gap-3 md:gap-10">
            <ul className="flex items-center  gap-3 md:gap-10 ">
                <ActiveLink title="Home" href="/" />
                <ActiveLink title="About" href="/about" />
                <ActiveLink title="Blogs" href="/blogs" />
                <ActiveLink title="Tools" href="/tools" />
            </ul>
            <SwitchTheme />
        </nav>
    </header>
  )
}