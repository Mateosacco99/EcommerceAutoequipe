import styles from '../styles/item.module.scss';
import {BotonGenerico} from './BotonGenerico';

const Item = ({prod}) => {
    console.log(prod);
  return (
    <div className={styles.card}>
      {prod.imagen && <img src={prod.imagen} alt={prod.nombre} className={styles.imagen} />}
      <div className={styles.contenido}>
        <h3 className={styles.titulo}>{prod.nombre}</h3>
        {prod.descripcion && <p className={styles.descripcion}>{prod.descripcion}</p>}
        <div className={styles.footer}>
          {prod.precio && <span className={styles.precio}>${prod.precio}</span>}
          {prod.categoria && <span className={styles.categoria}>{prod.categoria}</span>}
        </div>
        <div className={styles.botonContainer}><BotonGenerico tipo="primario">Agregar al Carrito</BotonGenerico></div>
      </div>
    </div>
  )
}

export default Item
