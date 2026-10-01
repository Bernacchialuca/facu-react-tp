import { Link } from 'react-router-dom'

function Carrito() {
  return (
    <div className="contenedor">
      <header className="encabezado-pagina">
        <h1 className="titulo-pagina">Tu carrito</h1>
      </header>

      <section className="pagina-vacia">
        <span className="pagina-vacia__icono" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
            <path d="M2.5 3h2.6l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 7H6" />
          </svg>
        </span>
        <h2>Tu carrito está vacío</h2>
        <p>Explorá el catálogo y encontrá lo que estás buscando.</p>
        <Link to="/productos" className="boton boton--primario">
          Ver productos
        </Link>
      </section>
    </div>
  )
}

export default Carrito
