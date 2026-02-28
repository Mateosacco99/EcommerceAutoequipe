import React from 'react'
import ItemCount from './ItemCount';
import styles from '../styles/itemDetail.module.scss';
import { CartContext } from '../context/CartContext.jsx'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BotonGenerico } from './BotonGenerico.jsx';

const ItemDetail = ({detail}) => {
  const {addItem} = useContext(CartContext)
  const [purchase, setPurchase] = useState(false)
  const navigate = useNavigate()

  const onAdd = (cantidad)=>{
    console.log(`Agregaste del  ${detail.name},  ${cantidad} unidades`)
    addItem(detail, cantidad)
    setPurchase(true)
  }
  return (
    <div className={styles.detailContainer}>
      <div className={styles.imageSection}>
        <img src={detail.imagen} alt={detail.nombre} className={styles.image} />
      </div>
      <div className={styles.infoSection}>
        <h1 className={styles.title}>{detail.nombre}</h1>
        <p className={styles.price}>${detail.precio.toLocaleString('es-AR')}</p>
        <p className={styles.envio}>Envío gratis</p>
        <div className={styles.counterWrapper}>
          {purchase ? <BotonGenerico onClick={() => navigate('/cart')}>Ir al carrito</BotonGenerico> : <ItemCount stock={detail.stock} onAdd={onAdd} />}
        </div>
        <div className={styles.description}>
          <h3 className={styles.descriptionTitle}>Descripción</h3>
          <p>{detail.descripcion}</p>
          <p className={styles.stock}>Stock disponible: {detail.stock} unidades</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
