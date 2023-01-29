import React from 'react';
import ReactDOM from 'react-dom/client';
import { Normolize } from './normolize';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Normolize/>
    <App />
  </React.StrictMode>
);
