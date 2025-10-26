import { Card, Rate } from "antd";
const { Meta } = Card;
import { Image } from "antd";

const PersonajeCard = ({ imagen, titulo, descripcion, puntuacion }) => {
  return (
    <Card hoverable className="tarjeta-personaje-tierra_media"cover={<Image className="imagen-personaje-tierra_media" alt={titulo} src={imagen} draggable={false} preview={{ mask: "Ampliar" }}/>}>
      <Meta className="info-personaje-tierra_media" title={titulo} description={descripcion}/>
      <Rate disabled defaultValue={puntuacion} style={{ marginTop: 8 }}/>
    </Card>
  );
};
export default PersonajeCard;
