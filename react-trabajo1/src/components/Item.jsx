import { Link } from "react-router-dom";
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import ItemCount from './ItemCount';

export default function Item({ item }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const normalized = {
    ...item,
    price: Number(item.price),
    stock: Number(item.stock),
  };

  const handleAdd = (qty) => {
    if (normalized.stock <= 0) return;
    addItem(normalized, qty);
    setAdded(true);

    setTimeout(() => setAdded(false), 800);
  };

  return (
    <div className="item-card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>

      {!added ? (
        <ItemCount 
          stock={normalized.stock} 
          initial={1} 
          onAdd={handleAdd}
          product={normalized}  
        />
      ) : (
        <p className="added-msg">Se Agrego al Carrito</p>
      )}

      <div className="item-buttons">
        <Link to={`/item/${item.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
}
