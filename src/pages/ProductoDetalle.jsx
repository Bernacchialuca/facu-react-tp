import { Link } from 'react-router-dom'
import ItemDetailContainer from '../components/products/ItemDetailContainer.jsx'

function ProductoDetalle() {
  return (
    <div className="contenedor">
      <Link to="/productos" className="link-volver">
        ← Volver al catálogo
      </Link>
      <ItemDetailContainer />
    </div>
  )
}

export default ProductoDetalle
