import styles from '../styles/itemListcontainer.module.scss';
import { use, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from './Loader';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';


const ItemListContainer = (props) => {

    const [data, setData] = useState([]);
    const { nombre } = useParams();

    useEffect(() => {
        const productos = collection(db, 'productos');

        getDocs(productos)
            .then((res) => {
                const lista = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                setData(lista);
            });
    },[]);

    return (
        <div>
            <h1 className={styles.h1}>{props.mensaje}</h1>

            {data.length > 0 ? <ItemList data={data} /> : <Loader />}
        </div>
    );
}

export default ItemListContainer;