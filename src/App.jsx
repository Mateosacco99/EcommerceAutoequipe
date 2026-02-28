import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import CategoriaContainer from './components/CategoriaContainer.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import { CartProvider } from './context/CartContext.jsx'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/categoria/:nombre' element={<CategoriaContainer />} />
          <Route path='/sobre-nosotros' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
