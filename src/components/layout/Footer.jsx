import { useState } from 'react'
import { Link } from 'react-router-dom'
import TeamCard from './TeamCard.jsx'
import { empresa, sucursales, equipo } from '../../data/empresa.js'
import './Footer.css'

const anioActual = new Date().getFullYear()

function Footer() {
  const [email, setEmail] = useState('')
  const [suscripto, setSuscripto] = useState(false)

  const manejarSuscripcion = (evento) => {
    evento.preventDefault()
    setSuscripto(true)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="footer__columnas">
          <section className="footer__columna footer__columna--marca">
            <Link to="/" className="footer__marca">
              Tecno<strong>Nova</strong>
            </Link>
            <p>{empresa.descripcion}</p>
          </section>

          <section className="footer__columna">
            <h3 className="footer__titulo">Contacto</h3>
            <ul className="footer__lista">
              <li>
                <a href={`mailto:${empresa.email}`}>{empresa.email}</a>
              </li>
              <li>
                <a href={`tel:${empresa.telefono.replace(/\s|-/g, '')}`}>{empresa.telefono}</a>
              </li>
              <li>{empresa.horario}</li>
            </ul>
          </section>

          <section className="footer__columna">
            <h3 className="footer__titulo">Sucursales</h3>
            <ul className="footer__lista">
              {sucursales.map((sucursal) => (
                <li key={sucursal.ciudad}>
                  <span className="footer__ciudad">{sucursal.ciudad}</span>
                  {sucursal.direccion}
                </li>
              ))}
            </ul>
          </section>

          <section className="footer__columna">
            <h3 className="footer__titulo">Newsletter</h3>
            {suscripto ? (
              <p className="footer__gracias">¡Gracias por suscribirte! Pronto vas a recibir nuestras novedades.</p>
            ) : (
              <form className="footer__newsletter" onSubmit={manejarSuscripcion}>
                <label htmlFor="newsletter-email">Recibí ofertas y lanzamientos en tu correo.</label>
                <div className="footer__newsletter-campos">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                    required
                  />
                  <button type="submit" className="boton boton--primario">
                    Suscribirme
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>

        <section className="footer__equipo">
          <h3 className="footer__titulo">Nuestro equipo</h3>
          <div className="footer__tarjetas">
            {equipo.map((persona) => (
              <TeamCard key={persona.id} nombre={persona.nombre} rol={persona.rol} email={persona.email} />
            ))}
          </div>
        </section>

        <div className="footer__legal">
          <p>
            © {anioActual} {empresa.razonSocial}. Todos los derechos reservados. Las marcas y logos mencionados son
            propiedad de sus respectivos titulares.
          </p>
          <ul className="footer__legal-links">
            <li>
              <a href="#">Políticas de privacidad</a>
            </li>
            <li>
              <a href="#">Términos y condiciones</a>
            </li>
            <li>
              <a href="#">Defensa del consumidor</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
