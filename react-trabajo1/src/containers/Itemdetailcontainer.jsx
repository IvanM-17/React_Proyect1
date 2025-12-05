import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';


export default function ItemDetailContainer() {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const { itemId } = useParams();


useEffect(() => {
setLoading(true);
const ref = doc(db, 'items', itemId);
getDoc(ref)
.then(snapshot => {
if (snapshot.exists()) setProduct({ id: snapshot.id, ...snapshot.data() });
else setProduct(null);
})
.catch(err => console.error(err))
.finally(() => setLoading(false));
}, [itemId]);


return (
<div className="item-detail-container">
{loading ? <p>Cargando, espere por favor...</p> : (product ? <ItemDetail product={product} /> : <p>Producto no encontrado.</p>)}
</div>
);
}