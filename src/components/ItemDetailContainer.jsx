import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
 const[detail, setDetail]= useState(null)
   const{id}= useParams()
    useEffect(()=>{
        const producto = doc(db, 'productos', id)
        
        getDoc(producto)
        .then((res)=> {
            setDetail({
                id: res.id,
                ...res.data()
            })
        })
        .catch((err)=> console.log(err))
    },[id])
  return (
    <div>
        {detail ? <ItemDetail detail={detail}/> : <Loader />}
    </div>
  )
}

export default ItemDetailContainer