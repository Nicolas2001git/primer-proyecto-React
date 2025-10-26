function CartWidget({ count, reservas, eliminarReserva }) {
  return (
    <div className="cart-widget">
      <h3 className="cart-titulo">🧭 Reservas</h3>
      {count === 0 ? (
        <p className="cart-vacio">No hay destinos seleccionados.</p>
      ) : (
        <>
          <ul className="cart-lista">
            {reservas.map((reserva, index) => (
              <li key={index} className="cart-item">
                <div>
                  <p className="cart-destino">{reserva.destino}</p>
                  <br />
                  <p className="cart-guia">Guía: {reserva.guia}</p>
                  <br />
                  <p className="cart-precio">${reserva.precio}</p>
                </div>
                <button className="boton-eliminar" onClick={() => eliminarReserva(index)} title="Eliminar destino">
                  ✕
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-total">
            Total destinos: <strong>{count}</strong>
          </p>
        </>
      )}
    </div>
  );
}
export default CartWidget;
