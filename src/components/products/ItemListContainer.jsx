import { useEffect, useState } from 'react'
import ItemList from './ItemList.jsx'

function ItemListContainer({ soloDestacados = false }) {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los productos.')
        }
        return respuesta.json()
      })
      .then((datos) => {
        setProductos(soloDestacados ? datos.filter((producto) => producto.destacado) : datos)
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [soloDestacados])

  if (cargando) {
    return <p className="estado">Cargando productos...</p>
  }

  if (error) {
    return <p className="estado estado--error">{error}</p>
  }

  return <ItemList productos={productos} />
}

export default ItemListContainer
