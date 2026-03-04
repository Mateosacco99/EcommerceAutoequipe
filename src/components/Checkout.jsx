import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, doc, writeBatch, runTransaction, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import { BotonGenerico } from './BotonGenerico'
import Modal from './Modal'
import styles from '../styles/checkout.module.scss'

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: '',
    isSuccess: false
  })
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: ''
  })

  const totalPrice = cart.reduce((total, item) => total + (item.precio * item.qty), 0)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const closeModal = () => {
    const wasSuccess = modalState.isSuccess
    setModalState({
      isOpen: false,
      title: '',
      message: '',
      isSuccess: false
    })
    if (wasSuccess) {
      clearCart()
      navigate('/')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const counterRef = doc(db, 'counters', 'orderNumber')
      const orderNumber = await runTransaction(db, async (transaction) => {
        const counterDoc = await transaction.get(counterRef)
        
        let newOrderNumber = 1
        if (counterDoc.exists()) {
          newOrderNumber = counterDoc.data().current + 1
        }
        
        transaction.set(counterRef, { current: newOrderNumber })
        return newOrderNumber
      })

      const batch = writeBatch(db)

      cart.forEach((item) => {
        const productRef = doc(db, 'productos', item.id)
        const newStock = item.stock - item.qty
        batch.update(productRef, { stock: newStock })
      })

      await batch.commit()

      const orderData = {
        orderNumber: orderNumber,
        cliente: formData,
        items: cart.map(item => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          cantidad: item.qty
        })),
        total: totalPrice,
        fecha: new Date().toISOString(),
        estado: 'pendiente'
      }

      await addDoc(collection(db, 'orders'), orderData)

      setModalState({
        isOpen: true,
        title: '¡Compra exitosa!',
        message: `Tu orden ha sido creada exitosamente. Número de orden: #${orderNumber}`,
        isSuccess: true
      })

    } catch (error) {
      console.error('Error al procesar la orden:', error)
      setModalState({
        isOpen: true,
        title: 'Error al procesar',
        message: 'Hubo un error al procesar tu orden. Por favor intenta nuevamente.',
        isSuccess: false
      })
    } finally {
      setLoading(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCheckout}>
        <h2>No hay productos en el carrito</h2>
        <BotonGenerico onClick={() => navigate('/')} tipo="primario">
          Ir a la tienda
        </BotonGenerico>
      </div>
    )
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.title}>Finalizar Compra</h1>
      
      <div className={styles.checkoutContent}>
        <div className={styles.orderSummary}>
          <h2>Resumen del Pedido</h2>
          {cart.map((item) => (
            <div key={item.id} className={styles.orderItem}>
              <img src={item.imagen} alt={item.nombre} className={styles.orderItemImg} />
              <div className={styles.orderItemInfo}>
                <span className={styles.orderItemName}>{item.nombre}</span>
                <span className={styles.orderItemQty}>Cantidad: {item.qty}</span>
              </div>
              <span className={styles.orderItemPrice}>
                ${(item.precio * item.qty).toLocaleString('es-AR')}
              </span>
            </div>
          ))}
          <div className={styles.orderTotal}>
            <strong>Total: ${totalPrice.toLocaleString('es-AR')}</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          <h2>Datos de Envío</h2>
          
          <div className={styles.formGroup}>
            <label>Nombre Completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Dirección de Envío</label>
            <textarea
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
              required
              disabled={loading}
              rows="3"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Codigo Postal</label>
            <input
              type="text"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          <BotonGenerico type="submit" tipo="primario" disabled={loading}>
            {loading ? 'Procesando...' : 'Confirmar Compra'}
          </BotonGenerico>
        </form>
      </div>

      <Modal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        message={modalState.message}
      />
    </div>
  )
}

export default Checkout
