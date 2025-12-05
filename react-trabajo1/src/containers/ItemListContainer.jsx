import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';


export default function ItemListContainer() {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);
const { categoryId } = useParams();


useEffect(() => {
setLoading(true);
const col = collection(db, 'items');
const q = categoryId ? query(col, where('category', '==', categoryId)) : col;


getDocs(q)
.then(snapshot => {
const prods = snapshot.docs.map(d => {
  const data = d.data();

  return {
    id: d.id,
    ...data,
    price: Number(data.price ?? 0),
    stock: Number(data.stock ?? 0),
    name: data.name ?? "",
    img: data.img ?? "",
    description: data.description ?? "",
    category: data.category ?? ""
  };
});

setItems(prods);
})
.catch(err => console.error(err))
.finally(() => setLoading(false));
}, [categoryId]);


return (
<div className="item-list-container">
<h2>{categoryId ? `Categoria: ${categoryId}` : "Catalogo completo"}</h2>
{loading ? <p>Cargando productos...</p> : (items.length ? <ItemList items={items} /> : <p>SIN productos en esta categoría.</p>)}
</div>
);
}