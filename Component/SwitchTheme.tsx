"use client"

import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";
import { MoonIcon, SunIcon } from "./Icons";

type Props = {}

export const SwitchTheme = (props: Props) => {
const { theme, toggleTheme } = useContext(ThemeContext)!;
  return (
    <button
    onClick={toggleTheme}
    className="rounded-full 
    transition-colors flex items-center
    justify-center 
    font-medium text-sm  h-[100%] text-secondary hover:text-accent"
    title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
  >
    {theme === "dark" ? (
      <MoonIcon />
    ) : <SunIcon />}
  </button>
  )
}