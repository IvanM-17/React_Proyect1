import { useState } from "react";

export default function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="item-detail">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>

      <div className="quantity-controls">
        <button onClick={decrease}>−</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>

      <button className="add-cart">Agregar al carrito</button>
    </div>
  );
}
