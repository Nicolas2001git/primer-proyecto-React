function CartItem({ reserva, onRemove }) {
  const subtotal = reserva.precioUnitario * reserva.cantidad;
  return (
    <li className="cart-item">
      <div className="cart-item-contenido">
        <p className="cart-destino">{reserva.destino}</p>
        <p className="cart-guia">Guía: {reserva.guia}</p>
        <p className="cart-precio">
          ${reserva.precioUnitario} × {reserva.cantidad} = <strong>${subtotal}</strong>
        </p>
      </div>
      <button className="boton-eliminar" onClick={onRemove} title="Eliminar destino de la reserva" aria-label="Eliminar destino">
        ✕
      </button>
    </li>
  );
}
export default CartItem;
