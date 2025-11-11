import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";
import ItemList from "../components/ItemList";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
      }, 1000);
    });

    getProducts.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Categoria: ${categoryId}` : "Catalogo completo"}</h2>
      <ItemList items={items} />
    </div>
  );
}



