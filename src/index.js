import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routers/routes';
import { PrimeReactProvider } from 'primereact/api'; 
import { RouterProvider } from 'react-router-dom';
import "/node_modules/primeflex/primeflex.css";
import   "primereact/resources/themes/lara-dark-blue/theme.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <PrimeReactProvider>
    <RouterProvider router={Routes} />
    </PrimeReactProvider>
  </React.StrictMode>
);

