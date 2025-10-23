import { Link } from "react-router-dom";
const ItemCard = ({ id, titulo, imagen, precio, descripcion }) => {
  return (
    <article className="card-item">
      <img className="card-img" src={imagen} alt={titulo} />
      <div className="card-body">
        <h4 className="card-title">{titulo}</h4>
        <p className="card-desc">{descripcion}</p>
        <p className="card-price">Desde ${precio}</p>
        <Link className="btn-detalle" to={`/item/${id}`}>
          Elegir guía y reservar
        </Link>
      </div>
    </article>
  );
};

export default ItemCard;
