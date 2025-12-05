import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext); 
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
 
  // Agregar Producto 
  const addItem = (product, quantity) => {
    const qty = Number(quantity);
    const stock = Number(product.stock);

    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);

      if (exists) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: Math.min(Number(p.quantity) + qty, stock) }
            : p
        );
      }

      return [...prev, { ...product, quantity: Math.min(qty, stock) }];
    });
  };

  //Quitar
  const removeOne = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

 //Eliminar
  const removeItem = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

 //Limpiar
  const clearCart = () => setCart([]);

//Total
  const totalItems = cart.reduce((sum, p) => sum + p.quantity, 0);
  const totalPrice = cart.reduce((sum, p) => sum + p.quantity * p.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeOne,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}






