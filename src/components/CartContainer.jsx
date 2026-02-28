import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { FaTrash } from 'react-icons/fa6'
import styles from '../styles/cartContainer.module.scss'
import { BotonGenerico } from './BotonGenerico'

const CartContainer = () => {
  const { cart, removeItem, incrementQty, decreaseQty } = useContext(CartContext)

  const totalPrice = cart.reduce((total, item) => total + (item.precio * item.qty), 0)

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos para comenzar tu compra</p>
      </div>
    )
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Carrito de Compras</h1>
      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.imagen} alt={item.nombre} className={styles.itemImage} />
            <div className={styles.itemInfo}>
              <h3 className={styles.itemName}>{item.nombre}</h3>
              <h3 className={styles.itemName}>{item.descripcion}</h3>
              <p className={styles.envioGratis}>ENVÍO GRATIS</p>
            </div>
            <div className={styles.quantityControls}>
              <BotonGenerico 
                onClick={() => decreaseQty(item.id)} 
                tipo="counter"
              >
                -
              </BotonGenerico>
              <span className={styles.quantity}>{item.qty}</span>
              <BotonGenerico 
                onClick={() => incrementQty(item.id)} 
                tipo="counter"
              >
                +
              </BotonGenerico>
            </div>
            <div className={styles.itemPrice}>
              ${(item.precio * item.qty).toLocaleString('es-AR')}
            </div>
            <BotonGenerico 
              onClick={() => removeItem(item.id)} 
              tipo="eliminar"
            >
              <FaTrash />
            </BotonGenerico>
          </div>
        ))}
      </div>
      <div className={styles.cartSummary}>
        <h2>Total: ${totalPrice.toLocaleString('es-AR')}</h2>
      </div>
    </div>
  )
}

export default CartContainer
