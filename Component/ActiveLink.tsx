"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { ElementType } from "react";


type Props = {
    title: string
    href: string,
    icon?: React.ReactNode
}

export default function ActiveLink({title, href, icon: Icon}: Props) {
  const pathname = usePathname();
  return (
    <Link href={href} className={`font-bold hover:underline hover:decoration-accent hover:decoration-dotted
        ${(pathname === href) ? "text-text/90":"text-text/60"}
    `}
    about={title}
    title={title}
    ><li className="flex items-center justify-center gap-2 "> 
      {Icon && Icon}
      <span className="hidden md:block">{title}</span></li></Link>
  )
}