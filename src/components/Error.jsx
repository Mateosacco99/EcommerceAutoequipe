import React from 'react'
import styles from '../styles/error.module.scss';

const Error = () => {
  return (
    <div>
       <h1 className={styles.h1}>Error 404: Página no encontrada</h1>
       <p className={styles.p}>Lo sentimos, la página que estás buscando no existe.</p>
       <img className={styles.imagenError} src='../../public/img/bib-meditate.jpg' alt="Error 404" />
    </div>
  )
}

export default Error
