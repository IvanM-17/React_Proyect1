import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, addItem, removeItem, removeOne, clearCart, totalPrice } = useCart();

  if (!cart.length) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito esta vacio</h2>
        <Link to="/">Volver al catalogo</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Carrito de compras</h2>

      <div className="cart-items">
        {cart.map((prod) => (
          <div className="cart-item" key={prod.id}>
            <img src={prod.img} alt={prod.name} />

            <div className="info">
              <h3>{prod.name}</h3>
              <p>Precio: ${prod.price}</p>

              <div className="quantity-controls">
                <button onClick={() => removeOne(prod.id)}>-</button>
                <span>{prod.quantity}</span>
                <button onClick={() => addItem(prod, 1)}>+</button>
              </div>

              <button className="remove-btn" onClick={() => removeItem(prod.id)}>
                Eliminar producto
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3>Total: ${totalPrice}</h3>

      <div className="cart-actions">
        <button className="clear-btn" onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout" className="checkout-btn">Finalizar compra</Link>
      </div>
    </div>
  );
}
