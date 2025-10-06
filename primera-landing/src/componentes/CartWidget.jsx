function CartWidget({ count, reservas = [] }) {
  return (
    <div className="widget-carrito">
      <span className="contador-carrito">{count}</span>
      <ul className="lista-reservas">
        {reservas.map((destino, index) => (
          <li key={index}>{destino}</li>
        ))}
      </ul>
    </div>
  );
}
export default CartWidget;