import { Card } from "antd";
const { Meta } = Card;
const PersonajeCard = ({ imagen, titulo, descripcion }) => {
  return (
    <Card hoverable className="tarjeta-personaje-tierra_media" cover={<img className="imagen-personaje-tierra_media" alt={titulo} src={imagen} draggable={false}/>}>
      <Meta className="info-personaje-tierra_media" title={titulo} description={descripcion}/>
    </Card>
  );
};
export default PersonajeCard;
