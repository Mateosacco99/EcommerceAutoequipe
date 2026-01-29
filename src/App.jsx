import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemCount from './examples/ItemCount.jsx'
import { withLogging } from './hocs/withLogging.jsx'

function App() {
  const ItemListContainerHOC = withLogging(ItemListContainer);

  return (
    <>
      <NavBar />
      <ItemListContainerHOC mensaje="Bienvenidos a AutoEquipe!" />
      <ItemCount/>
    </>
  )
}

export default App
