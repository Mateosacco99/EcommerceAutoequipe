import React from 'react'
import styles from './fetchItem.module.scss'

const FetchItem = ({ personaje }) => {
  const { name, image, species } = personaje

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.species}>{species}</p>
      </div>
    </div>
  )
}

export default FetchItem
