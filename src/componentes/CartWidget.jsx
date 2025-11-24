import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function CartWidget() {
  const { items, totalUnits, totalPrice, removeItem } = useCart();
  const isEmpty = totalUnits === 0;
  return (
    <div className="cart-widget">
      <h3 className="cart-titulo">🧭 Reservas</h3>
      {isEmpty ? ( <p className="cart-vacio">No hay destinos seleccionados.</p>)
      :(
        <>
          <ul className="cart-lista">
            {items.map((reserva) => (
              <li key={reserva.idReserve} className="cart-item">
                <div>
                  <p className="cart-destino">{reserva.destino}</p>
                  <br />
                  <p className="cart-guia">Guía: {reserva.guia}</p>
                  <br />
                  <p className="cart-precio"> ${reserva.precioUnitario} x {reserva.cantidad} </p>
                </div>
                <button className="boton-eliminar" onClick={() => removeItem(reserva.idReserve)} title="Eliminar destino">
                  ✕ 
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-total"> Total destinos: <strong>{totalUnits}</strong></p>
          <p className="cart-total"> Importe total: <strong>${totalPrice}</strong></p>
          <Link to="/cart" className="btn-detalle" style={{ marginTop: "8px" }}> Ver carrito </Link>
        </>
      )}
    </div>
  );
}
export default CartWidget;

