import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerLocalizaciones } from "./services";
import ItemCard from "./ItemCard"; 
function ItemListaContainer() {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setCargando(true);
    setError("");
    obtenerLocalizaciones(categoriaId)
      .then((data) => setItems(data))
      .catch(() => setError("No se pudieron cargar los destinos."))
      .finally(() => setCargando(false));
  }, [categoriaId]);
  if (cargando) return <p>Cargando destinos...</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  return (
    <section className="seccion-reservas">
      <h3>{categoriaId ? `Categoría: ${categoriaId}` : "Catálogo completo"}</h3>
      <div className="grid-items">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
      <nav>
        <p>Categorías:</p>
        {["mordor", "rivendel", "la-comarca", "rohan", "moria"].map((categoria) => (
          <Link key={categoria} to={`/categoria/${categoria}`}className="link-categoria">
            {categoria}
          </Link>
        ))}
      </nav>
    </section>
  );
}
export default ItemListaContainer;
