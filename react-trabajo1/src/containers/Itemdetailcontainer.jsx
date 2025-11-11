import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === parseInt(itemId)));
      }, 1000);
    });

    getProduct.then(res => setProduct(res));
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail product={product} /> : <p>Cargando, Espere porfavor..</p>}
    </div>
  );
}
