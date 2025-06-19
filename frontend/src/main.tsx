import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
//import App from './App.tsx'
import Header from './components/Header.tsx'
import ProductList from './components/products/ProductList.tsx'
import OrdenList from './components/orders/OrdenList.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    {/* <App /> */}
    {/* <ProductList /> */}
    <OrdenList />
  </StrictMode>,
)
