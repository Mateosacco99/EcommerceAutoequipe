import styles from '../styles/itemListcontainer.module.scss';
import { getProductos, getProductosByCategoria } from '../mock/AsyncMock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from './Loader';


const ItemListContainer = (props) => {

    const [data, setData] = useState([]);
    const { nombre } = useParams();

    useEffect(() => {
        setData([]);
        
        const fetchFunction = nombre ? getProductosByCategoria(nombre) : getProductos();
        
        fetchFunction
            .then(respuesta => setData(respuesta))
            .catch(error => console.log(error));
    }, [nombre]);

    return (
        <div>
            <h1 className={styles.h1}>{props.mensaje}</h1>

            {data.length > 0 ? <ItemList data={data} /> : <Loader />}
        </div>
    );
}

export default ItemListContainer;