import React from 'react';
import styles from '../styles/navBar.module.scss';
import Cart from './CartWidget';
import { BotonGenerico } from './BotonGenerico';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa6';
import { useState, useEffect, useContext } from 'react';
import CategoriasDropdown from './CategoriasDropdown';
import SearchBar from './SearchBar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const closeTimeoutRef = React.useRef(null);
    const { cart } = useContext(CartContext);

    useEffect(() => {
        const productos = collection(db, 'productos');
        
        getDocs(productos)
            .then((res) => {
                const lista = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                const categoriasUnicas = [...new Set(lista.map(p => p.categoria))];
                setCategorias(categoriasUnicas);
            })
            .catch(error => console.log(error));
    }, []);

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setShowDropdown(false);
        }, 150);
    };

    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setShowDropdown(true);
    };

    return (
        <nav className={styles['nav-container']}>
            <h1><img className={styles.logo} src="/Autoequipe.png" alt="Autoequipe" /></h1>
            <BotonGenerico onClick={() => navigate('/')} tipo="navegacion">Inicio</BotonGenerico>
            <div 
                className={styles.categoriasWrapper}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <BotonGenerico 
                    tipo="navegacion"
                >
                    Categorias <FaChevronDown />
                </BotonGenerico>
            </div>
            <BotonGenerico onClick={() => navigate('/sobre-nosotros')} tipo="navegacion">Sobre Nosotros</BotonGenerico>
            <SearchBar />
            {cart.length > 0 && (
                <BotonGenerico onClick={() => navigate('/cart')} tipo="carrito"><Cart /></BotonGenerico>
            )}
            {showDropdown && <CategoriasDropdown categorias={categorias} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />}
        </nav>
    );
}

export default NavBar;