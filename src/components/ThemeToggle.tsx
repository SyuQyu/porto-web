"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 border border-border/50 opacity-0" />;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-10 h-10 border border-border/50 hover:bg-muted/50 transition-all bg-background/50 backdrop-blur-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-all scale-100 rotate-0" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-500 transition-all scale-100 rotate-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
