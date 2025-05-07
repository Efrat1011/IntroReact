import React from "react";
import './App.css'
import useDarkMode from "./components/useDarkMode";

export default function App() {
  const { isDark, handleClick } = useDarkMode();
 
  
  return (
    <div style={{
      backgroundColor: isDark? "black" : "white",
      color: isDark ? "white" : "black",
     
    }}>
      
      <button onClick={handleClick}>
        {isDark == "dark" ? "☀" : "🌑"}
      
      </button>
    </div>
  );
}