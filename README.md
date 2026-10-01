# TecnoNova · Tienda de tecnología

Pre-entrega del proyecto de **React JS** (2026-2C): e-commerce de ejemplo con catálogo de productos y navegación entre vistas.

Incluye los **requerimientos #1 a #3** de la consigna. El carrito con Context API (#4) se agrega en la entrega final.

## Tecnologías

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (`react-router-dom`) para el ruteo
- JavaScript y CSS nativo (un archivo `.css` por componente)

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir la URL que aparece en la consola (por defecto `http://localhost:5173`).

Otros scripts:

| Comando           | Descripción                          |
| ----------------- | ------------------------------------ |
| `npm run build`   | Genera el build de producción en `dist/` |
| `npm run preview` | Sirve el build localmente            |
| `npm run lint`    | Revisa el código con oxlint          |

## Rutas

| Ruta            | Vista                                           |
| --------------- | ----------------------------------------------- |
| `/`             | Inicio: bienvenida y productos destacados       |
| `/productos`    | Catálogo completo                               |
| `/producto/:id` | Detalle de un producto                          |
| `/carrito`      | Carrito de compras                              |
| `*`             | Página 404                                      |

## Estructura de carpetas

```
public/
  productos.json            # "API" local con los productos
src/
  main.jsx                  # Punto de entrada; envuelve la app en <BrowserRouter>
  App.jsx                   # Definición de rutas
  index.css                 # Variables de diseño y estilos globales
  components/
    layout/
      Layout.jsx            # Header + NavBar + contenido + Footer
      Header.jsx            # Logo y nombre de la tienda
      NavBar.jsx            # Navegación con <Link>
      Footer.jsx            # Info de la empresa, newsletter y equipo
      TeamCard.jsx          # Tarjeta de un integrante del equipo
    products/
      ItemListContainer.jsx # Carga productos.json con useEffect + fetch
      ItemList.jsx          # Grilla de productos
      Item.jsx              # Tarjeta reutilizable de un producto (recibe props)
      ItemDetailContainer.jsx # Busca un producto por id (useParams + fetch)
      ItemDetail.jsx        # Vista de detalle del producto
  pages/
    Home.jsx
    Productos.jsx
    ProductoDetalle.jsx
    Carrito.jsx
    NotFound.jsx
  data/
    empresa.js              # Datos de la empresa, sucursales y equipo
  utils/
    formatearPrecio.js      # Formato de precios en es-AR
```

## Requerimientos cubiertos

1. **Estructura y Layout**: `Layout.jsx` contiene `Header.jsx`, la barra de navegación (`NavBar.jsx`) y `Footer.jsx`. El footer muestra datos de la empresa (propiedad intelectual, políticas de privacidad, contacto, newsletter, sucursales) y las tarjetas de 3 integrantes del equipo.
2. **Catálogo de productos**: `ItemListContainer.jsx` obtiene los productos de `public/productos.json` usando `useEffect` y `fetch`, y los renderiza con el componente reutilizable `Item.jsx`, que recibe los datos por props.
3. **Ruteo**: navegación con `react-router-dom` y las rutas `/`, `/productos`, `/producto/:id` y `/carrito`. El NavBar usa `<Link>` para navegar sin recargar la página.

## Deploy (opcional)

El proyecto ya incluye la configuración para que las rutas funcionen al recargar la página:

- **Netlify**: `public/_redirects`
- **Vercel**: `vercel.json`

> Las imágenes de los productos se toman de [DummyJSON](https://dummyjson.com/) y los datos de la empresa son ficticios.
