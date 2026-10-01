import ItemListContainer from '../components/products/ItemListContainer.jsx'

function Productos() {
  return (
    <div className="contenedor">
      <header className="encabezado-pagina">
        <h1 className="titulo-pagina">Catálogo de productos</h1>
        <p className="subtitulo-pagina">Elegí entre celulares, notebooks, tablets y accesorios.</p>
      </header>
      <ItemListContainer />
    </div>
  )
}

export default Productos
