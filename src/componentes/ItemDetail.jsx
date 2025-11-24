import { Image } from "antd"; 
import ItemCount from "./ItemCount";
function ItemDetail({ item, guias, guiaId, onChangeGuia, precioConGuia, onBack, onAddClick, canAdd, quantity, onIncrease, onDecrease,agregado,
}) {
  return (
    <section className="detalle-item">
      <Image src={item.imagen} alt={item.titulo} className="detalle-imagen" preview={{ mask: "Ampliar" }}/>
      <div className="detalle-info">
        <h2 className="titulo-seccion">{item.titulo}</h2>
        <p className="detalle-descripcion">{item.descripcion}</p>
        <p className="detalle-precio"> <strong>Precio base:</strong> ${item.precio}</p>
        <label className="detalle-label">
          <strong className="guia-obligatorio">Guía (obligatorio):</strong>
          <select value={guiaId} onChange={onChangeGuia} required className="detalle-select entrada-nombre">
            <option value="">Seleccioná una guía…</option>
            {guias.map((guia) => (
              <option key={guia.id} value={guia.id}>
                {guia.nombre}
              </option>
            ))}
          </select>
        </label>
        <p className="detalle-precio">
          <strong>Precio con guía:</strong>{" "}
          {guiaId && precioConGuia ? `$${precioConGuia}` : "—"}
        </p>
        {!agregado ? (
          <ItemCount quantity={quantity} onIncrease={onIncrease} onDecrease={onDecrease}/>
        ) : (
          <p className="mensaje-agregado">
            ✓ Este destino ya fue agregado al carrito.
          </p>
        )}
        <div className="detalle-botones">
          <button className="btn-volver" onClick={onBack}>
            Volver
          </button>
          <button className={`boton-entrar ${agregado ? "boton-agregado" : ""}`} onClick={onAddClick} disabled={!canAdd || agregado}>
            {agregado ? "Agregado ✓" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </section>
  );
}
export default ItemDetail;
