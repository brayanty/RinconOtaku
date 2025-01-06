import useTheme from "./useTheme";

function useDarkMode () {
  const [theme, setTheme] = useTheme();

  function darkMode() {
    theme === "dark" ? setTheme("light") : setTheme("dark")

    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)

    window.localStorage.setItem('theme', theme)
  }

    return darkMode
  }

  export default useDarkMode