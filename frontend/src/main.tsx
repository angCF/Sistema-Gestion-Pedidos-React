import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './components/Header.tsx'
import ProductList from './components/ProductList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    {<App /> }
    <ProductList />
  </StrictMode>,
)
