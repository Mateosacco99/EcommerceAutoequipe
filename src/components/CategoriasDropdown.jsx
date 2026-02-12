import { useNavigate } from 'react-router-dom';
import styles from '../styles/categoriasDropdown.module.scss';
import { BotonGenerico } from './BotonGenerico';

const CategoriasDropdown = ({ categorias, onMouseEnter, onMouseLeave }) => {
  const navigate = useNavigate();

  const handleSelectCategoria = (categoria) => {
    navigate(`/categoria/${categoria}`);
  };

  return (
    <div 
      className={styles.dropdown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {categorias.map((categoria) => (
        <BotonGenerico
          key={categoria}
          onClick={() => handleSelectCategoria(categoria)}
          tipo="navegacion"
        >
          {categoria}
        </BotonGenerico>
      ))}
    </div>
  );
};

export default CategoriasDropdown;
