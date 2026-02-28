import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

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
        {detail ? <ItemDetail detail={detail}/> : <Loader />}
    </div>
  )
}

export default ItemDetailContainer