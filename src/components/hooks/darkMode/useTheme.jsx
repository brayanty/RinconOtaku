import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;
