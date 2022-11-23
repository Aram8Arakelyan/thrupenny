import { useState } from 'react';
import { Link } from 'react-router-dom';
import { themes, ThemeContext } from '../../contexts/ThemeContext';

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
      </nav>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            color="link"
            onClick={() => {
              console.log(darkMode);
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}>
            <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
            <span className="d-lg-none d-md-block">Switch mode</span>
          </button>
        )}
      </ThemeContext.Consumer>
    </header>
  );
}

export default Header;
