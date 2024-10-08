"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, SunMoon } from "lucide-react";
import { Switch } from "./switch";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    setIsActive(!isActive);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Switch />;
};

export default ThemeToggler;
{
  /* <div
onClick={toggleTheme}
className={`
 relative w-16 h-4 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1`}
>
<Moon className="fill-white w-[15px] h-[15px]" />
<div
  id="toggleBtnTheme"
  className={` bg-white
  absolute  w-6 h-6 rounded-full shadow-customShadow-md ${
    isActive
      ? " transition-transform translate-x-0"
      : " transition-transform translate-x-8"
  }`}
></div>
<SunMoon className="fill-white ml-auto w-[15px] h-[15px]"></SunMoon>
</div> */
}
