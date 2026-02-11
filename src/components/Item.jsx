import styles from '../styles/item.module.scss';
import {BotonGenerico} from './BotonGenerico';
import { useNavigate } from 'react-router-dom';

const Item = ({prod}) => {
    const navigate = useNavigate();
    console.log(prod);
  return (
    <div className={styles.card} onClick={() => navigate(`/item/${prod.id}`)}>
      {prod.imagen && <img src={prod.imagen} alt={prod.nombre} className={styles.imagen} />}
      <div className={styles.contenido}>
        <h3 className={styles.titulo}>{prod.nombre}</h3>
        {prod.descripcion && <p className={styles.descripcion}>{prod.descripcion}</p>}
        <div className={styles.footer}>
          {prod.precio && <span className={styles.precio}>${prod.precio}</span>}
        </div>
        <div className={styles.botonContainer}><BotonGenerico tipo="primario">Agregar al Carrito</BotonGenerico></div>
      </div>
    </div>
  )
}

export default Item
