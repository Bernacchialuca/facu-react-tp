import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'

function ItemDetailContainer() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar el producto.')
        }
        return respuesta.json()
      })
      .then((datos) => {
        const encontrado = datos.find((item) => item.id === Number(id))
        if (!encontrado) {
          throw new Error('El producto que buscás no existe.')
        }
        setProducto(encontrado)
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) {
    return <p className="estado">Cargando producto...</p>
  }

  if (error) {
    return <p className="estado estado--error">{error}</p>
  }

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer
