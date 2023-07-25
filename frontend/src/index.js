import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SAuthContextProvider } from './context/SAuthContext';
import { ProductProvider } from './context/productContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SAuthContextProvider>
      <AuthContextProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthContextProvider>
    </SAuthContextProvider>
  </React.StrictMode>
);


