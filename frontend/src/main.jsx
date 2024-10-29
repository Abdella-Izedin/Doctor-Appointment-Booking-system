// theme toggle logic
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light-mode';

  // Apply the saved theme
  document.body.classList.add(currentTheme);

  // Toggle theme on button click
  toggleButton.addEventListener('click', () => {
      const newTheme = document.body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
      document.body.classList.remove('light-mode', 'dark-mode');
      document.body.classList.add(newTheme);
      localStorage.setItem('theme', newTheme); // Save preference
  });
});

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)
