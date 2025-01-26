import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  console.log("ThemeSwitcher component rendered");
  return (
    <div className="position-fixed top-0 end-0 p-3">
      <button className={"btn btn-outline-" + (theme === 'light' ? 'dark' : 'light')} onClick={toggleTheme}>
        {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>} {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;