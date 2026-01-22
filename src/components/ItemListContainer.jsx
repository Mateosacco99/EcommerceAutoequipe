import styles from '../styles/itemListcontainer.module.scss';

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className={styles.h1}>{props.mensaje}</h1>
        </div>
    );
}

export default ItemListContainer;