import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> - commented out because it doesnt allow the dnd to work
    <App />
  // </React.StrictMode>
);


