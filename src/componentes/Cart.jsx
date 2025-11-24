import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
function Cart() {
  const { items, totalUnits, totalPrice, removeItem, clearCart } = useCart();
  const isEmpty = totalUnits === 0;
  if (isEmpty) {
    return (
      <section className="pagina">
        <h1 className="titulo-seccion">Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link to="/" className="btn-detalle">
          Volver al catálogo
        </Link>
      </section>
    );
  }
  return (
    <section className="pagina">
      <h1 className="titulo-seccion">Carrito</h1>
      <ul className="cart-lista">
        {items.map((reserva) => (
          <CartItem key={reserva.idReserve} reserva={reserva} onRemove={() => removeItem(reserva.idReserve)}/>
        ))}
      </ul>
      <div className="cart-resumen">
        <p className="cart-total">
          Total de destinos: <strong>{totalUnits}</strong>
        </p>
        <p className="cart-total">
          Importe total: <strong>${totalPrice}</strong>
        </p>
      </div>
      <div className="cart-acciones">
        <button className="boton-salir" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn-detalle">
          Ir al checkout
        </Link>
      </div>
    </section>
  );
}
export default Cart;
