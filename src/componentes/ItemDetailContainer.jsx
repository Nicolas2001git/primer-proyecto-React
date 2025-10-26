import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {obtenerLocalizacionPorId,obtenerGuias,obtenerPrecioConGuia,} from "./services";
import { Image} from "antd";
function ItemDetailContainer({ onAddToCart }) {
  const { id } = useParams();
  const navegar = useNavigate();
  const [item, setItem] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [guias, setGuias] = useState([]);
  const [guiaId, setGuiaId] = useState("");
  const [precioConGuia, setPrecioConGuia] = useState(null);
  useEffect(() => {
    setCargando(true);
    obtenerLocalizacionPorId(id)
      .then(setItem)
      .catch(() => setError("No se pudo cargar el detalle."))
      .finally(() => setCargando(false));
  }, [id]);
  useEffect(() => {
    obtenerGuias()
    .then(setGuias)
    .catch(() => {});
  }, []);
  useEffect(() => {
    if (!item || !guiaId) return setPrecioConGuia(null);
    obtenerPrecioConGuia(item.id, guiaId)
      .then(setPrecioConGuia)
      .catch(() => setPrecioConGuia(null));
  }, [item, guiaId]);
  if (cargando) return <p>Cargando detalle...</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!item) return <p>No se encontró el destino.</p>;
  const guiaSeleccionada = guias.find((guia) => String(guia.id) === String(guiaId));
  return (
    <section className="detalle-item">
      <Image src={item.imagen} alt={item.titulo} width={320} className="detalle-imagen" style={{ borderRadius: "12px", cursor: "zoom-in" }} preview={{ mask: "Ampliar" }}/>
      <div className="detalle-info">
        <h2>{item.titulo}</h2>
        <p>{item.descripcion}</p>
        <p><strong>Precio base:</strong> ${item.precio}</p>
        <label>
          <strong>Guía (obligatorio):</strong>{" "}
          <select value={guiaId} onChange={(event) => setGuiaId(event.target.value)} required>
            <option value="">Seleccioná una guía…</option>
            {guias.map((guia) => (
              <option key={guia.id} value={guia.id}>
                {guia.nombre}
              </option>
            ))}
          </select>
        </label>
        <p>
          <strong>Precio con guía:</strong>{" "}
          {guiaId && precioConGuia ? `$${precioConGuia}` : "—"}
        </p>
        <div className="detalle-botones">
          <button onClick={() => navegar(-1)}>← Volver</button>
          <button
            onClick={() =>
              onAddToCart(item, {
                id: guiaSeleccionada.id,
                nombre: guiaSeleccionada.nombre,
                precioConGuia,
              })
            }
            disabled={!guiaId}
            title={!guiaId ? "Elegí una guía para continuar" : ""}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}
export default ItemDetailContainer;
 