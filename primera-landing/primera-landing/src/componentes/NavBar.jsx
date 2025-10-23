import CartWidget from "./CartWidget";

function NavBar({ count, reservas }) {
  return (
    <nav className="barra-navegacion">
      <h2 className="titulo-sitio">Viajes a la tierra media</h2>
      <ul className="lista-menu">
        <li className="item-menu">Inicio</li>
        <li className="item-menu">Expediciones</li>
        <li className="item-menu">Contacto</li>
      </ul>
      <CartWidget count={count} reservas = {reservas}   />
    </nav>
  );
}
export default NavBar;
