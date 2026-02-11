import React from 'react'
import FetchItem from './FetchItem'

const FetchList = ({personajes}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {personajes && personajes?.results?.map((pj)=> <FetchItem key={pj.id} pj={pj}/>)}
    </div>
  )
}

export default FetchList