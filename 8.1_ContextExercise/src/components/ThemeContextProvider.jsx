// Todo: Create & manage context in this file
import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  value: "",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [lightMode, setLightMode] = useState("light");

  // Todo: Add the component code (incl. dynamic context value)
  function handleToggleTheme() {
    setLightMode((prevState) => {
      console.log("prevState", prevState);
      if (prevState === "light") return "dark";
      if (prevState === "dark") return "light";
    });
  }

  const ctxValue = {
    value: lightMode,
    toggleTheme: handleToggleTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
