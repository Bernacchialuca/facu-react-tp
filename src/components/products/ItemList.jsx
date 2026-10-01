import Item from './Item.jsx'
import './ItemList.css'

function ItemList({ productos }) {
  if (productos.length === 0) {
    return <p className="estado">No hay productos para mostrar.</p>
  }

  return (
    <div className="item-list">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          marca={producto.marca}
          categoria={producto.categoria}
          precio={producto.precio}
          stock={producto.stock}
          imagen={producto.imagen}
        />
      ))}
    </div>
  )
}

export default ItemList
