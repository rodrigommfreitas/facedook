import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
