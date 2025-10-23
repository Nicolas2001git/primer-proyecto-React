import { useState } from "react";
import Login from "./componentes/Login";
import NavBar from "./componentes/NavBar";
import ItemListaContainer from "./componentes/ItemListaContainer";
function App() {
  const [logeado, setLogeado] = useState(false);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [reservas, setReservas] = useState([]);
  const handleLogin = (userName) => {
    const limpio = userName.trim();
    if (!limpio) return;
    setName(limpio);
    setLogeado(true);
  };
  if (!logeado) {
    return (
      <div className="pantalla-login">
        <Login onLogin={handleLogin} />
      </div>
    );
  }
  return (
    <div className="app">
      <header className="encabezado">
        <h1 className="bienvenida">Bienvenido, {name}, a la Tierra Media</h1>
        <button className="boton-salir" onClick={() => { setLogeado(false); setName(""); }} >
          Cerrar sesión
        </button>
      </header>
      <NavBar count={count} reservas={reservas}/>
      <main className="contenido">
        <ItemListaContainer setCount={setCount} count={count} reservas={reservas} setReservas={setReservas}/>
      </main>
    </div>
  );
}
export default App;