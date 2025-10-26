import PersonajeCard from "./componentes/PersonajeCard";
import frodo from "./assets/frodo.jpg";
import gollum from "./assets/gollum.jpg";
import gandalf from "./assets/gandalf.jpg";
function Contacto() {
  return (
    <div className="pagina">
      <h1>Contacto</h1>
      <p>¿Querés unirte a una expedición o hacer una reserva especial?
        Escribinos a <strong>contacto@tierramedia.com</strong>…</p>
      <div className="seccion-personajes-contacto">
        <PersonajeCard imagen={frodo} titulo="Frodo Bolsón" descripcion="El portador del Anillo." puntuacion={4}/>
        <PersonajeCard imagen={gollum} titulo="Gollum" descripcion="Una criatura dividida por el poder del Anillo." puntuacion={3}/>
        <PersonajeCard imagen={gandalf} titulo="Gandalf el Gris" descripcion="El sabio mago guía de la Comunidad." puntuacion={5}/>
      </div>
    </div>
  );
}
export default Contacto;
