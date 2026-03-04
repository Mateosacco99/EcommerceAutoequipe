import React from 'react'
import styles from '../styles/modal.module.scss'
import { BotonGenerico } from './BotonGenerico'

const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
        </div>
        <div className={styles.modalBody}>
          <p>{message}</p>
        </div>
        <div className={styles.modalFooter}>
          <BotonGenerico onClick={onClose} tipo="primario">
            Entendido
          </BotonGenerico>
        </div>
      </div>
    </div>
  )
}

export default Modal
