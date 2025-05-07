import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useDarkMode() {
    const [isDark, setIsDark] = useLocalStorage("Режим", "light");
  
    useEffect(() => {
      document.body.className = isDark;
    }, [isDark]);
  
    const handleClick = () => {
      setIsDark(isDark === "light" ? "dark" : "light");
    };
  
    return { isDark, handleClick};
  }
  