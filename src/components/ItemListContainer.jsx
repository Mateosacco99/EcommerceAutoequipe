import styles from '../styles/itemListcontainer.module.scss';
import { use, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from './Loader';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';


const ItemListContainer = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { nombre } = useParams();

    useEffect(() => {
        setLoading(true);
        const productos = collection(db, 'productos');

        getDocs(productos)
            .then((res) => {
                const lista = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                
                const filteredData = nombre 
                    ? lista.filter(item => item.categoria === nombre)
                    : lista;
                
                setData(filteredData);
                setLoading(false);
            });
    },[nombre]);

    return (
        <div>
            <h1 className={styles.h1}>{props.mensaje}</h1>

            {loading ? <Loader /> : <ItemList data={data} />}
        </div>
    );
}

export default ItemListContainer;