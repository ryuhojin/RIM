import { cookies } from "next/headers";
import { useCallback, useState } from "react";

const useTheme = () => {
  const theme = cookies().get("theme")
    ? cookies().get("theme")
    : window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const onToggle = useCallback(() => {
    const _toggleTheme = theme === "light" ? "dark" : "light";
    cookies().set("theme", _toggleTheme);
  }, [theme]);

  return [theme, onToggle] as [string, typeof onToggle];
};
export default useTheme;
