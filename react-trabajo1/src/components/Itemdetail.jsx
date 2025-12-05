import { useState } from "react";
import ItemCount from './ItemCount';
import { useCart } from '../contexts/CartContext';

export default function ItemDetail({ product }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);

    // Para que el mensaje desaparezca
    setTimeout(() => setAdded(false), 800);
  };

  return (
    <div className="item-detail">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>

      {!added ? (
        <ItemCount
          initial={1}
          stock={product.stock || 0}
          onAdd={handleAdd}
          product={product}   
        />
      ) : (
        <p className="added-msg">Se Agrego al Carrito</p>
      )}
    </div>
  );
}
