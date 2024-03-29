import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { AppProvider } from 'components/AppContext/AppContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
