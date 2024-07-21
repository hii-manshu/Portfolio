"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black  rounded-md h-[25px] w-[25px]"
            onClick={() => setTheme("light")}
          />
          <Moon
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100  text-white  rounded-md h-[25px] w-[25px]"
            onClick={() => setTheme("dark")}
          />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
