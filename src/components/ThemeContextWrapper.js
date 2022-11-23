import { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function ThemeContextWrapper({ children }) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add(themes.light);
        document.body.classList.remove(themes.dark);
        break;
      case themes.dark:
        document.body.classList.add(themes.dark);
        document.body.classList.remove(themes.light);
        break;
      default:
        document.body.classList.add(themes.dark);
        document.body.classList.remove(themes.light);
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
