import styles from '../styles/itemListcontainer.module.scss';
import { getProductos } from '../mock/AsyncMock';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';


const ItemListContainer = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getProductos()
            .then(respuesta => setData(respuesta))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1 className={styles.h1}>{props.mensaje}</h1>

            {data.length > 0 ? <ItemList data={data} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemListContainer;