import { createContext, useContext, useState, useMemo } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = (product, guide, finalPrice, quantity = 1) => {
    if (!product || !guide || !finalPrice) return;
    setItems((prev) => [
      ...prev,
      {
        idReserve: `${product.id}-${guide.id}-${Date.now()}`, // ✔️ nuevo nombre
        destino: product.titulo,
        guia: guide.nombre,
        precioUnitario: finalPrice,
        cantidad: quantity, 
      },
    ]);
  };
  const removeItem = (idReserve) => {
    setItems((prev) => prev.filter((item) => item.idReserve !== idReserve));
  };
  const clearCart = () => setItems([]);
  const resumen = useMemo(() => {
  const totalUnits = items.reduce((total, item) => total + item.cantidad, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.precioUnitario * item.cantidad,
    0
  );
  return { totalUnits, totalPrice };}, [items]);
  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalUnits: resumen.totalUnits, totalPrice: resumen.totalPrice,}}>
      {children}
    </CartContext.Provider>
  ); }
export function useCart() {
  const cart = useContext(CartContext);   
  if (!cart) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return cart; 
}
