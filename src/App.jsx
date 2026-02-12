import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { withLogging } from './hocs/withLogging.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import CategoriaContainer from './components/CategoriaContainer.jsx'
import FetchApi from './examples/FetchApi.jsx'

function App() {
  const ItemListContainerHOC = withLogging(ItemListContainer);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainerHOC />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/categoria/:nombre' element={<CategoriaContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
