import { useState } from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="item-card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>

      <div className="item-buttons">
        <Link to={`/item/${item.id}`}>Ver detalle</Link>

        <div className="quantity-controls">
          <button onClick={decrease}>−</button>
          <span>{quantity}</span>
          <button onClick={increase}>+</button>
        </div>

        <button className="add-cart">Agregar al carrito</button>
      </div>
    </div>
  );
}
