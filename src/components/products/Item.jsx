import { Link } from 'react-router-dom'
import { formatearPrecio } from '../../utils/formatearPrecio.js'
import './Item.css'

function Item({ id, nombre, marca, categoria, precio, stock, imagen }) {
  return (
    <article className="item">
      <Link to={`/producto/${id}`} className="item__imagen">
        <img src={imagen} alt={nombre} loading="lazy" />
        {stock <= 20 && <span className="item__aviso">¡Últimas unidades!</span>}
      </Link>

      <div className="item__cuerpo">
        <span className="etiqueta">{categoria}</span>
        <h3 className="item__nombre">{nombre}</h3>
        <p className="item__marca">{marca}</p>

        <div className="item__pie">
          <span className="item__precio">{formatearPrecio(precio)}</span>
          <Link to={`/producto/${id}`} className="boton boton--secundario item__boton">
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Item
