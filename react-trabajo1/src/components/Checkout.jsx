import { useCart } from '../contexts/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useState } from 'react';

export default function Checkout() {
  const { cart, clearCart, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  //Carrito-checkout
  const [cartSnapshot, setCartSnapshot] = useState([]);

  const handleCheckout = async () => {
    if (!cart.length) return;

    setLoading(true);

    const order = {
      items: cart.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        quantity: p.quantity
      })),
      total: totalPrice,
      createdAt: serverTimestamp()
    };

    try {
      const ref = await addDoc(collection(db, 'orders'), order);
      setOrderId(ref.id);

      //Carrito-Clean
      setCartSnapshot(cart);
    } catch (e) {
      console.error("Error generando la orden:", e);
    } finally {
      setLoading(false);
      clearCart(); 
    }
  };

  //Descarga
  const downloadOrder = () => {
    if (!orderId) return;

    const totalSnapshot = cartSnapshot.reduce(
      (sum, p) => sum + p.quantity * p.price,
      0
    );

    const content = `
Gracias por tu compra!

Numero de orden: ${orderId}

--------------------------------------
Productos:
${cartSnapshot
  .map(i => `${i.name} - ${i.quantity} x $${i.price}`)
  .join("\n")}
--------------------------------------

Total: $${totalSnapshot}
Fecha: ${new Date().toLocaleString()}
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `orden_${orderId}.txt`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra</h1>

      {/*ORDEN*/}
      {orderId && (
        <div className="order-success">
          <h2>¡Se Realizo Tu Compra!</h2>
          <p>Tu numero de orden es:</p>
          <strong className="order-id">{orderId}</strong>

          <button className="btn-download" onClick={downloadOrder}>
            Descargar Comprobante (.txt)
          </button>
        </div>
      )}

      {/* CARRITO VACIO */}
      {!orderId && cart.length === 0 && (
        <p className="empty">Tu carrito está vacío.</p>
      )}

      {/* DETALLE CARRITO */}
      {!orderId && cart.length > 0 && (
        <>
          <ul className="checkout-list">
            {cart.map(item => (
              <li key={item.id} className="checkout-item">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.quantity} x ${item.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="total">Total: ${totalPrice}</h3>

          <button
            className="btn-checkout"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Procesando..." : "Confirmar Compra"}
          </button>
        </>
      )}
    </div>
  );
}
