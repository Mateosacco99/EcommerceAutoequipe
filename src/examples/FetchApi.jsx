import React, { useEffect, useState } from 'react'
import FetchList from './FetchList'
import { useFetch } from '../hooks/useFetch'

const FetchApi = () => {
      const {data:personajes, loading, error}= useFetch('https://rickandmortyapi.com/api/character')



  return (
    <div>
        <h1>FetchApi</h1>
        {loading ? <p>Cargando...</p> : <FetchList personajes={personajes}/>}
        </div>
  )
}

export default FetchApi