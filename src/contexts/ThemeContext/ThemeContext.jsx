/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
    return;
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
