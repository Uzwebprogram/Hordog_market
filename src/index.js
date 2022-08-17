import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/catalog-products.context';
import {XitProductProvider} from "./contexts/xit-product.context"
import {AddCartProvider} from './contexts/like-product.context'
import i18n from "./i18next";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <ProductsProvider>
    <XitProductProvider>
      <AddCartProvider>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
      </AddCartProvider>
      </XitProductProvider>
    </ProductsProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
