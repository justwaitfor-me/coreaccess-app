import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeSwitcher from './components/ThemeSwitcher';
import icons from './assets/icons/index';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ThemeSwitcher />
  </React.StrictMode>,
  document.getElementById('root')
);

const iconKeys = Object.keys(icons);
const randomIconKey = iconKeys[Math.floor(Math.random() * iconKeys.length)];
const randomIcon = icons[randomIconKey]; // Access the icon directly

const link = document.createElement('link');
link.rel = 'icon';
link.href = randomIcon;
document.head.appendChild(link);

reportWebVitals();