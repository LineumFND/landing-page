"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 w-10 h-10" />
    );
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="p-2 rounded-full  bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      aria-label="Toggle Dark Mode"
    >
      {currentTheme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
