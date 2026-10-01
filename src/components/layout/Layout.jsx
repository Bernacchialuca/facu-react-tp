import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__barra">
        <div className="contenedor layout__barra-contenido">
          <Header />
          <NavBar />
        </div>
      </div>

      <main className="layout__principal">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
