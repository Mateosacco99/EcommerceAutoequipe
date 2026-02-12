import React from 'react'
import styles from '../styles/about.module.scss'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>Sobre Nosotros</h1>
        <p className={styles.text}>En 1994 comenzó a gestarse este emprendimiento con el fin de incorporar en el mercado argentino por primera vez las más prestigiosas marcas de llantas de aluminio del mundo, obteniendo un gran suceso.</p>
        <p className={styles.text}>Luego, en consecuencia, incorporamos la oferta de los mejores neumáticos, tanto deportivos como de uso cotidiano y camioneta, y de a poco, con mucho esfuerzo nos fuimos consolidando en el mercado.</p>
        <p className={styles.text}>Así nació Autoequipe S.A. basado en la experiencia en el sector automotriz y la pasión que tenemos por los autos.</p>
        <p className={styles.text}>Desde entonces, hemos crecido y ampliado nuestros negocios en base a los objetivos trazados que son brindar a nuestros clientes productos de alta calidad, buen servicio y asesoramiento y sobre todo precios excepcionales.</p>
        <p className={styles.text}>Hoy en día tenemos el agrado de ser distribuidores oficiales Michelin y BF Goodrich, las dos marcas líderes del mercado de neumáticos en el mundo.</p>
        <p className={styles.text}>Contamos con cuatro sucursales ubicadas Zona Norte del Gran Buenos Aires. Todas nuestras sucursales están equipadas con la más alta tecnología e infraestructura, y atendidas por un equipo de gente altamente capacitada para dales siempre el mejor asesoramiento a nuestros clientes que nos eligen día a día.</p>
      </div>
      <div className={styles.imageSection}>
        <img src="/img/about.png" alt="Autoequipe" className={styles.image} />
      </div>
    </div>
  )
}

export default About
