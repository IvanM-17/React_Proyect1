import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav>
      <div> Mi Futura Tienda </div>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Descuentos</a></li>
        <li><a href="#">Contactanos</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
