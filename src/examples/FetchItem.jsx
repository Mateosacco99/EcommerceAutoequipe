import React from 'react'
import styles from './fetchItem.module.scss'

const FetchItem = ({ pj }) => {

  return (
    <div className={styles.card}>
      <img src={pj.image} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.name}>{pj.name}</h3>
        <p className={styles.species}>{pj.species}</p>
      </div>
    </div>
  )
}

export default FetchItem
