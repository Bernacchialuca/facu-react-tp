const formateador = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'USD',
})

export function formatearPrecio(valor) {
  return formateador.format(valor)
}
