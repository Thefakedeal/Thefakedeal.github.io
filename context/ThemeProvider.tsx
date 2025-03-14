"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

// Define the type for the context value
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Create context with a default undefined value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props type for ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Get the initial theme from localStorage or system preference
  const getInitialTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark";
    }
    return (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
