import styles from '../styles/navBar.module.scss';
import Cart from './Cart';
import AutoEquipe from '../assets/AutoEquipe.png';

const NavBar = () => {
    return (
        <nav className={styles['nav-container']}>
            <h1><img className={styles.logo} src={AutoEquipe} alt="AutoEquipe Logo" /></h1>
            <a href="#" className={styles['nav-item']}>Home</a>
            <a href="#" className={styles['nav-item']}>Products</a>
            <a href="#" className={styles['nav-item']}>About</a>
            <a href="#" className={styles['nav-item']}>Contact</a>
            <Cart />
        </nav>
    );
}

export default NavBar;