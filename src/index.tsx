import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductContext from './service/product-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductContext>
  </React.StrictMode>
);
