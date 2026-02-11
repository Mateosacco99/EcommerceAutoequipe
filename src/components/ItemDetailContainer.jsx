import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
 const[detail, setDetail]= useState(null)
   const{id}= useParams()
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((err)=> console.log(err))
    },[id])
  return (
    <div>
        {detail ? <ItemDetail detail={detail}/> : <p>Cargando...</p>}
    </div>
  )
}

export default ItemDetailContainer