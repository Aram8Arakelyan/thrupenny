import { useState } from 'react';
import { Link } from 'react-router-dom';
import { themes, ThemeContext } from '../../contexts/ThemeContext';
import ConnectWalletButton from '../ConnectWalletButton';
import { languages } from '../../i18n/locales';
import Form from 'react-bootstrap/Form';

import styles from './header.module.css';

import LogoWhite from '../../images/logos/thrupenny-logo-light.svg';
import LogoDark from '../../images/logos/thrupenny-logo.svg';

function Header({ currentLocale, handleChange }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className={styles.header}>
      <div className={styles.logo_with_navbar}>
        <img className={styles.logo} src={darkMode ? LogoDark : LogoWhite} alt="Logo" />
        <nav className={styles.navbar}>
          <Link to="dashboard">Dashboard</Link>
          <Link to="dashboard">Market</Link>
          <Link to="dashboard">Stake</Link>
          <Link to="dashboard">Governance</Link>
        </nav>
      </div>
      <div className={styles.actions}>
        <ConnectWalletButton />
        <Form.Select value={currentLocale} onChange={handleChange}>
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </Form.Select>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              color="link"
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}>
              <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
              <span className="d-lg-none d-md-block">Switch mode</span>
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </header>
  );
}

export default Header;
