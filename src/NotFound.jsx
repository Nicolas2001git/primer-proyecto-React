import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="pagina-error">
      <h1 className="error-titulo">404</h1>
      <h2 className="error-subtitulo">Página no encontrada</h2>
      <p className="error-texto">Lo sentimos, la ruta que intentás visitar no existe.</p>
      <Link to="/" className="btn-volver">Volver al inicio</Link>
    </div>
  );
}
export default NotFound;
 