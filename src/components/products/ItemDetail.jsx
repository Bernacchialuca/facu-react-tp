import { formatearPrecio } from '../../utils/formatearPrecio.js'
import './ItemDetail.css'

function ItemDetail({ producto }) {
  const { nombre, marca, categoria, precio, stock, descripcion, imagenGrande } = producto

  return (
    <article className="item-detail">
      <div className="item-detail__imagen">
        <img src={imagenGrande} alt={nombre} />
      </div>

      <div className="item-detail__info">
        <span className="etiqueta">{categoria}</span>
        <h1 className="item-detail__nombre">{nombre}</h1>
        <p className="item-detail__marca">Marca: {marca}</p>

        <p className="item-detail__precio">{formatearPrecio(precio)}</p>
        <p className={stock <= 20 ? 'item-detail__stock item-detail__stock--bajo' : 'item-detail__stock'}>
          {stock <= 20 ? `¡Últimas ${stock} unidades!` : `Stock disponible: ${stock} unidades`}
        </p>

        <p className="item-detail__descripcion">{descripcion}</p>

        <ul className="item-detail__beneficios">
          <li>Envío gratis a todo el país</li>
          <li>Garantía oficial de 12 meses</li>
          <li>Hasta 6 cuotas sin interés</li>
        </ul>
      </div>
    </article>
  )
}

export default ItemDetail
