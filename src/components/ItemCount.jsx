import { useState } from "react"
import styles from '../styles/itemCount.module.scss';
import { BotonGenerico } from './BotonGenerico';

const ItemCount = ({stock, onAdd})=> {
  const [count, setCount]= useState(1)

  const sumar = ()=> {
    if(count < stock){
      setCount(count + 1)
    }
  }

  const restar= ()=> {
    if(count > 0){
      setCount(count - 1)
    }
  }

  return(
    <div className={styles.counterContainer}>
      <div className={styles.counterControls}>
        <BotonGenerico tipo="counter" onClick={restar}>‹</BotonGenerico>
        <span className={styles.counterValue}>{count}</span>
        <BotonGenerico tipo="counter" onClick={sumar}>›</BotonGenerico>
      </div>
      <BotonGenerico tipo="agregar" onClick={()=>onAdd(count)}>
        Agregar al Carrito
      </BotonGenerico>
    </div>
  )
}
export default ItemCount