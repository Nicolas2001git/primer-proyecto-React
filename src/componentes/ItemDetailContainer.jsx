import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerLocalizacionPorId,obtenerGuias, obtenerPrecioConGuia} from "./services";
import ItemDetail from "./ItemDetail";
import { useCart } from "../context/CartContext";
function ItemDetailContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [item, setItem] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [guias, setGuias] = useState([]);
  const [guiaId, setGuiaId] = useState("");
  const [precioConGuia, setPrecioConGuia] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [agregado, setAgregado] = useState(false);
  useEffect(() => {
    setCargando(true);
    setError("");
    setGuiaId("");
    setPrecioConGuia(null);
    setQuantity(1);
    setAgregado(false); 
    obtenerLocalizacionPorId(id)
      .then((data) => setItem(data))
      .catch(() => setError("No se pudo cargar el detalle."))
      .finally(() => setCargando(false));
  }, [id]);
  useEffect(() => {
    obtenerGuias()
      .then(setGuias)
      .catch(() => {
      });
  }, []);
  useEffect(() => {
    if (!item || !guiaId) {
      setPrecioConGuia(null);
      return;
    }
    obtenerPrecioConGuia(item.id, guiaId)
      .then(setPrecioConGuia)
      .catch(() => setPrecioConGuia(null));
  }, [item, guiaId]);
  if (cargando) return <p>Cargando detalle…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!item) return <p>No se encontró el destino.</p>;
  const handleAdd = () => {
    const guiaSeleccionada = guias.find(
      (guia) => String(guia.id) === String(guiaId)
    );
    if (!guiaSeleccionada || !precioConGuia) return;
    addItem(item, guiaSeleccionada, precioConGuia, quantity);
    setAgregado(true);
  };
  const canAdd = !!guiaId && !!precioConGuia && quantity > 0;
  const handleIncrease = () => {
    setQuantity((prev) => {
      if (prev >= 5) return prev; 
      return prev + 1;
    });
  };
  const handleDecrease = () => {
    setQuantity((prev) => {
      if (prev <= 1) return prev; 
      return prev - 1;
    });
  };
  return (
    <ItemDetail item={item} guias={guias} guiaId={guiaId} onChangeGuia={(event) => setGuiaId(event.target.value)}
      precioConGuia={precioConGuia} onBack={() => navigate(-1)}
      onAddClick={handleAdd} canAdd={canAdd} quantity={quantity}
      onIncrease={handleIncrease} onDecrease={handleDecrease} agregado={agregado}
    />
  );
}
export default ItemDetailContainer;
