import ActiveLink from "./ActiveLink"
import { AboutIcon, BlogIcon, HomeIcon, ToolIcon } from "./Icons"
import { SwitchTheme } from "./SwitchTheme"

export default function NavBar() {

  const links = [
    {
      title: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      title: "About",
      href: "/about",
      icon: <AboutIcon />,
    },
    // {
    //   title: "Blogs",
    //   href: "/blogs",
    //   icon: <BlogIcon />,
    // },
    // {
    //   title: "Tools",
    //   href: "/tools",
    //   icon: <ToolIcon />
    // },
  ]

  return (
    <header className="flex justify-center py-5 top-0 sticky z-50">
        <nav className="glass md:w-3/4 w-full  py-2 px-4 flex justify-end items-center gap-10 md:gap-10">
            <ul className="flex items-center  gap-10 md:gap-10 ">
                {links.map((link) => (
                  <ActiveLink key={link.href} title={link.title} href={link.href} icon={link.icon} />
                ))}
            </ul>
            <SwitchTheme />
        </nav>
    </header>
  )
}