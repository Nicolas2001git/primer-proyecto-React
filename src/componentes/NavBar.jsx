import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
function NavBar() {
  return (
    <nav className="barra-navegacion">
      <h2 className="titulo-sitio">Viajes a la Tierra Media</h2>
      <ul className="lista-menu">
        <li className="item-menu">
          <Link to="/">
          Inicio
          </Link>
        </li>
        <li className="item-menu">
          <Link to="/expediciones">
          Expediciones
          </Link>
        </li>
        <li className="item-menu">
          <Link to="/contacto">
          Contacto
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
} 
export default NavBar;
