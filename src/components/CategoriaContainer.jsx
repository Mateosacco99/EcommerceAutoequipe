import React, { useEffect, useState } from 'react'
import { getProductosByCategoria } from '../mock/AsyncMock'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import styles from '../styles/itemListcontainer.module.scss'
import Loader from './Loader'

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
      {data.length > 0 ? <ItemList data={data} /> : <Loader />}
    </div>
  )
}

export default CategoriaContainer
