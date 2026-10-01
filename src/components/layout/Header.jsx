import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__marca" aria-label="TecnoNova, ir al inicio">
        <span className="header__logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
          </svg>
        </span>
        <span className="header__nombre">
          Tecno<strong>Nova</strong>
        </span>
      </Link>
      <p className="header__lema">Tecnología con garantía oficial</p>
    </header>
  )
}

export default Header
