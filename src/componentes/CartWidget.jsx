function CartWidget({ count, reservas, eliminarReserva }) {
  return (
    <div className="cart-widget">
      <h3 className="cart-titulo">🧭 Reservas</h3>
      {count === 0 ? (
        <p className="cart-vacio">No hay destinos seleccionados.</p>
      ) : (
        <>
          <ul className="cart-lista">
            {reservas.map((r, index) => (
              <li key={index} className="cart-item">
                <div>
                  <span className="cart-destino">{r.destino}</span>
                  <br />
                  <span className="cart-guia">Guía: {r.guia}</span>
                  <br />
                  <span className="cart-precio">${r.precio}</span>
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
