"use client";

import { useTheme } from "next-themes";
import { Check, Moon, Power, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {({ isSelected }) => (
          <>
            <Switch.Control
              className={`h-[31px] w-[51px] bg-gray-200 rounded-full ${isSelected ? "bg-gray-300 rounded-full shadow" : ""}`}
            >
              <Switch.Thumb
                className={`size-[20px] shadow-sm rounded-full ${isSelected ? "ms-[20px]  shadow-lg rounded-full" : ""}`}
              >
                <Switch.Icon>
                  {isSelected ? (
                    <Moon className="size-4 text-gray-900" />
                  ) : (
                    <Sun className="size-4 text-gray-900" />
                  )}
                </Switch.Icon>
              </Switch.Thumb>
            </Switch.Control>
          </>
        )}
      </Switch>
    </>
  );
}
