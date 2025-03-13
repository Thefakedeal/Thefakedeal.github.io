"use client"

import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";

type Props = {}

export const SwitchTheme = (props: Props) => {
const { theme, toggleTheme } = useContext(ThemeContext)!;
  return (
    <button
    onClick={toggleTheme}
    className="rounded-full border border-solid border-black/[.08] dark:border-accent/[.145] transition-colors flex items-center justify-center  hover:text-secondary hover:border-secondary font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
  >
    Switch to {theme === "dark" ? "Light" : "Dark"} Mode
  </button>
  )
}