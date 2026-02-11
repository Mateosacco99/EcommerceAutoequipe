import React from 'react'
import FetchItem from './FetchItem'

const FetchList = ({personajes}) => {
  if (!Array.isArray(personajes)) {
    return <div>No characters available</div>
  }

  return (
    <div>
      {personajes.map((personaje) => <FetchItem key={personaje.id} personaje={personaje} />)} 
    </div>
  )
}

export default FetchList
