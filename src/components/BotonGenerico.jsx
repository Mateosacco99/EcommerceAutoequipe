import styles from '../styles/botonGenerico.module.scss';

export function BotonGenerico ({
    tipo = 'primario',
    children,
    onClick,
    disabled = false,
    className='',
    ...props
}) {
    const tiposDeBoton = [
        'primario',
        'secundario',
        'danger',
        'carrito',
        'agregar',
        'counter',
        'navegacion'
    ];
    const tipoValido = tiposDeBoton.includes(tipo) ? tipo : 'primario';

    return (
        <button
            className={`${styles.boton} ${styles[`boton${tipoValido.charAt(0).toUpperCase() + tipoValido.slice(1)}`]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}