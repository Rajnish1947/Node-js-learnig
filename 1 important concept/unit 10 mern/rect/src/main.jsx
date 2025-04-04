import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create a root for rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

