import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="contenedor">
      <section className="pagina-vacia">
        <span className="pagina-vacia__codigo">404</span>
        <h2>Página no encontrada</h2>
        <p>La dirección que ingresaste no existe o fue movida.</p>
        <Link to="/" className="boton boton--primario">
          Volver al inicio
        </Link>
      </section>
    </div>
  )
}

export default NotFound
