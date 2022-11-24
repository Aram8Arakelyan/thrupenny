import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Header from './components/Header';
import { ThemeContext } from './contexts/ThemeContext';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';
import { IntlProvider } from 'react-intl';

import './App.css';

import BackgroundImageLight from './images/background-light.svg';
import BackgroundImageDark from './images/background.svg';

function getInitialLocal() {
  const savedLocale = localStorage.getItem('locale');
  return savedLocale || LOCALES.ENGLISH;
}

function App() {
  const { theme } = useContext(ThemeContext);
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem('locale', e.target.value);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}>
      <div
        className="app container"
        style={{
          backgroundImage: `url("${
            theme === 'dark-mode' ? BackgroundImageDark : BackgroundImageLight
          }")`
        }}>
        <BrowserRouter>
          <Header currentLocale={currentLocale} handleChange={handleChange} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}

export default App;
