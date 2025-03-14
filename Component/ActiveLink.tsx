"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"


type Props = {
    title: string
    href: string,

}

export default function ActiveLink({title, href}: Props) {
  const pathname = usePathname();
  return (
    <Link href={href} className={`font-bold hover:underline hover:decoration-accent hover:decoration-dotted
        ${(pathname === href) ? "text-text/90":"text-text/60"}
    `}><li>{title}</li></Link>
  )
}