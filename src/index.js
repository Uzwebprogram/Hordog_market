import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import i18n from "./i18next";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <Suspense fallback="Loading...">
      <App />
      </Suspense>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
