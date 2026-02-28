import React from 'react'
import styles from '../styles/loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Cargando...</p>
    </div>
  )
}

export default Loader
