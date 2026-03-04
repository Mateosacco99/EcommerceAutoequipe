import React, { useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/searchBar.module.scss'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()

  const handleSearch = async (e) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.trim().length > 2) {
      const productos = collection(db, 'productos')
      const snapshot = await getDocs(productos)
      
      const filtered = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        .filter(producto => 
          producto.nombre.toLowerCase().includes(value.toLowerCase()) ||
          producto.descripcion?.toLowerCase().includes(value.toLowerCase())
        )
      
      setResults(filtered)
      setShowResults(true)
    } else {
      setResults([])
      setShowResults(false)
    }
  }

  const handleSelectProduct = (id) => {
    navigate(`/item/${id}`)
    setSearchTerm('')
    setShowResults(false)
  }

  const handleBlur = () => {
    setTimeout(() => setShowResults(false), 200)
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearch}
        onBlur={handleBlur}
        onFocus={() => searchTerm.length > 2 && setShowResults(true)}
        className={styles.searchInput}
      />
      {showResults && results.length > 0 && (
        <div className={styles.resultsDropdown}>
          {results.map((producto) => (
            <div
              key={producto.id}
              className={styles.resultItem}
              onMouseDown={() => handleSelectProduct(producto.id)}
            >
              <img src={producto.img} alt={producto.nombre} className={styles.resultImg} />
              <div className={styles.resultInfo}>
                <span className={styles.resultNombre}>{producto.nombre}</span>
                <span className={styles.resultPrecio}>${producto.precio}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {showResults && results.length === 0 && searchTerm.length > 2 && (
        <div className={styles.resultsDropdown}>
          <div className={styles.noResults}>No se encontraron productos</div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
