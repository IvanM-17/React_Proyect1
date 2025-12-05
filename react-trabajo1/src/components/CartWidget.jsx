import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <div className="cart-icon-container">
        <img
          src="/cart-icon.png"
          alt="Carrito"
          className="cart-icon"
          onError={(e) => (e.target.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png")}
        />
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </div>
    </Link>
  );
}




