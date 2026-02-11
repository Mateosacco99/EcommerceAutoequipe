import styles from '../styles/navBar.module.scss';
import Cart from './CartWidget';
import { BotonGenerico } from './BotonGenerico';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav className={styles['nav-container']}>
            <h1><img className={styles.logo} src="/Autoequipe.png" alt="Autoequipe" /></h1>
            <BotonGenerico onClick={() => navigate('/')} tipo="navegacion">Inicio</BotonGenerico>
            <BotonGenerico href="#" tipo="navegacion">Categorias</BotonGenerico>
            <BotonGenerico href="#" tipo="navegacion">Sobre Nosotros</BotonGenerico>
            <BotonGenerico href="#" tipo="navegacion">Contacto</BotonGenerico>
            <BotonGenerico href="#" tipo="carrito"><Cart /></BotonGenerico>
        </nav>
    );
}

export default NavBar;