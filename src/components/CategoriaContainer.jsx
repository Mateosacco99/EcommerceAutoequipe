import React, { useEffect, useState } from 'react'
import { getProductosByCategoria } from '../mock/AsyncMock'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import styles from '../styles/itemListcontainer.module.scss'

const CategoriaContainer = () => {
  const [data, setData] = useState([])
  const { nombre } = useParams()

  useEffect(() => {
    getProductosByCategoria(nombre)
      .then(respuesta => setData(respuesta))
      .catch(error => console.log(error))
  }, [nombre])

  return (
    <div>
      <ItemList data={data} /> : <p>Cargando...</p>
    </div>
  )
}

export default CategoriaContainer
