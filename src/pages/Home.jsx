import { Link } from 'react-router-dom'
import ItemListContainer from '../components/products/ItemListContainer.jsx'
import './Home.css'

const beneficios = [
  { titulo: 'Envíos a todo el país', texto: 'Gratis en compras desde US$ 100.' },
  { titulo: 'Garantía oficial', texto: '12 meses en todos nuestros productos.' },
  { titulo: 'Pagá en cuotas', texto: 'Hasta 6 cuotas sin interés con tarjeta.' },
]

function Home() {
  return (
    <div className="contenedor home">
      <section className="home__hero">
        <div className="home__hero-texto">
          <span className="etiqueta">Nueva temporada 2026</span>
          <h1 className="home__titulo">
            La tecnología que necesitás, <span>en un solo lugar.</span>
          </h1>
          <p className="home__bajada">
            Celulares, notebooks, tablets y accesorios de las mejores marcas, con garantía oficial y envío a todo el
            país.
          </p>
          <div className="home__acciones">
            <Link to="/productos" className="boton boton--primario">
              Ver catálogo
            </Link>
            <Link to="/carrito" className="boton boton--secundario">
              Ir al carrito
            </Link>
          </div>
        </div>
        <div className="home__hero-imagen">
          <img
            src="https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp"
            alt="Notebook MacBook Pro"
          />
        </div>
      </section>

      <ul className="home__beneficios">
        {beneficios.map((beneficio) => (
          <li key={beneficio.titulo} className="home__beneficio">
            <h3>{beneficio.titulo}</h3>
            <p>{beneficio.texto}</p>
          </li>
        ))}
      </ul>

      <section className="home__destacados">
        <div className="home__destacados-encabezado">
          <h2>Productos destacados</h2>
          <Link to="/productos" className="home__ver-todos">
            Ver todos →
          </Link>
        </div>
        <ItemListContainer soloDestacados />
      </section>
    </div>
  )
}

export default Home
