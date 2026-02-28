import { FaCartPlus } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/cartWidget.module.scss";

const Cart = () => {
    const { cart } = useContext(CartContext);
    
    const totalItems = cart?.reduce((total, item) => total + item.qty, 0) || 0;

    return (
        <div className={styles.cartContainer}>
            <span className={styles.cartIcon}><FaCartPlus /></span>
            {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
        </div>
    );
}

export default Cart;