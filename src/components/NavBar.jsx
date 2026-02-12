import React from 'react';
import styles from '../styles/navBar.module.scss';
import Cart from './CartWidget';
import { BotonGenerico } from './BotonGenerico';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { getProductos } from '../mock/AsyncMock';
import CategoriasDropdown from './CategoriasDropdown';

const NavBar = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const closeTimeoutRef = React.useRef(null);

    useEffect(() => {
        getProductos()
            .then(productos => {
                const categoriasUnicas = [...new Set(productos.map(p => p.categoria))];
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
            <BotonGenerico href="#" tipo="navegacion">Sobre Nosotros</BotonGenerico>
            <BotonGenerico href="#" tipo="navegacion">Contacto</BotonGenerico>
            <BotonGenerico href="#" tipo="carrito"><Cart /></BotonGenerico>
            {showDropdown && <CategoriasDropdown categorias={categorias} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />}
        </nav>
    );
}

export default NavBar;