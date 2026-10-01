import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const { pathname } = useLocation()

  const claseLink = (activo) => (activo ? 'navbar__link navbar__link--activo' : 'navbar__link')

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <ul className="navbar__lista">
        <li>
          <Link to="/" className={claseLink(pathname === '/')}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/productos" className={claseLink(pathname.startsWith('/producto'))}>
            Productos
          </Link>
        </li>
        <li>
          <Link to="/carrito" className={claseLink(pathname === '/carrito')}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M2.5 3h2.6l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 7H6" />
            </svg>
            Carrito
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
