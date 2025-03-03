import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');
  const [accentColor, setAccentColor] = useState('primary');

  useEffect(() => {
    document.body.className = `${theme} bg-${accentColor}`;
  }, [theme, accentColor]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  console.log("ThemeSwitcher component rendered");

  return (
    <div className="position-fixed top-0 end-0 p-3">
      <button className={"btn btn-outline-" + (theme === 'light' ? 'dark' : 'light')} onClick={toggleTheme}>
        {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>} {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      <div className="mt-2"></div>
      <select
        className={`form-select form-select-sm mb-2 mt-2 bg-transparent text-${(theme === 'light' ? 'dark' : 'light')} border border-${(theme === 'light' ? 'dark' : 'light')} rounded p-10`} 
        value={accentColor}
        onChange={(e) => setAccentColor(e.target.value)}
      >
        <option value="primary" className={`text-dark`}>Blue</option>
        <option value="secondary" className={`text-dark`}>Gray</option>
        <option value="success" className={`text-dark`}>Green</option>
        <option value="danger" className={`text-dark`}>Red</option>
        <option value="warning" className={`text-dark`}>Yellow</option>
        <option value="info" className={`text-dark`}>Teal</option>
        <option value="light" className={`text-dark`}>Light</option>
        <option value="dark" className={`text-dark`}>Dark</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;