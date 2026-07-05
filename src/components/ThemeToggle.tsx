"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full border border-border opacity-0" />;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-10 w-10 rounded-full border border-border text-foreground transition-colors hover:bg-accent"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
