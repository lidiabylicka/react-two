const ThemeButton = ({ toggleTheme, themeIsDark }) => {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        CHANGE THEME TO ({themeIsDark ? "LIGHT" : "DARK"})
      </button>
    </div>
  );
};

export default ThemeButton;
