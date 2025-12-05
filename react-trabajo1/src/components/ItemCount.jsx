import React, { useState } from 'react';
import { useCart } from "../contexts/CartContext";

export default function ItemCount({ initial = 1, stock = 0, onAdd, product }) {

  const { cart } = useCart();
  const [quantity, setQuantity] = useState(initial);

  const increase = () => setQuantity(q => Math.min(q + 1, stock));
  const decrease = () => setQuantity(q => Math.max(1, q - 1));

  const handleAdd = () => {
    if (stock <= 0) return;
    onAdd(quantity);
  };

  // Detectar Productos
  const itemInCart = cart.find(item => item.id === product?.id);
  const alreadyAdded = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="item-count">
      {stock <= 0 ? (
        <p className="out-of-stock">Producto Fuera de Stock</p>
      ) : (
        <>
          <div className="quantity-controls">
            <button onClick={decrease}>−</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
          </div>

          <button onClick={handleAdd} className="add-to-cart">
            {alreadyAdded > 0 
              ? `Seguir Agregando (${alreadyAdded})` 
              : "Agregar al carrito"}
          </button>
        </>
      )}
    </div>
  );
}
