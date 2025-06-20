import './App.css'
import Header from './components/Header'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NoFound from './utils/NoFound'
import Principal from './components/Principal'

const App = () => {
  return (
    <>      
      <HashRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/productos" element={<Header ruta="productos" />} />
          <Route path="/crear-producto" element={<Header ruta="crear-producto" />} />
          <Route path="/editar-producto/:id" element={<Header ruta="editar-producto" />} />
          <Route path="/eliminar-producto/:id" element={<Header ruta="eliminar-producto" />} />

          <Route path="/ordenes" element={<Header ruta="ordenes" />} />
          <Route path="/crear-orden" element={<Header ruta="crear-orden" />} />
          <Route path="/editar-orden/:id" element={<Header ruta="editar-orden" />} />
          <Route path="/eliminar-orden/:id" element={<Header ruta="eliminar-orden" />} />

          <Route path="/noFound" element={<NoFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;