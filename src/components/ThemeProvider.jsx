import { useState } from "react";
import ThemeButton from "./ThemeButton";

const ThemeProvider = ({ children }) => {
  const [themeIsDark, setThemeIsDark] = useState(false);

  const toggleTheme = () => {
    setThemeIsDark((currentTheme) => !currentTheme);
    document.body.classList.toggle("theme-dark");
  };

  const theme = themeIsDark ? "dark" : "light";

  return (
    <div className={`theme-${theme}`}>
      <ThemeButton toggleTheme={toggleTheme} themeIsDark={themeIsDark} />
      {children}
    </div>
  );
};

export default ThemeProvider;
