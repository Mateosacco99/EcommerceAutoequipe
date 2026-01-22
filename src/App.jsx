import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemCount from './examples/ItemCount.jsx'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos a AutoEquipe!" />
    </>
  )
}

export default App
