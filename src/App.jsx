import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import Login from "./componentes/Login";
import NavBar from "./componentes/NavBar";
import ItemListaContainer from "./componentes/ItemListaContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Expediciones from "./Expediciones";
import Contacto from "./Contacto";
import NotFound from "./NotFound"; 
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
  const agregarAlCarrito = (producto, guiaSeleccionada) => {
  if (reservas.length >= 2) return;
  const nuevasReservas = [
    ...reservas,
    {
      destino: producto.titulo,
      guia: guiaSeleccionada.nombre,
      precio: guiaSeleccionada.precioConGuia,
    },
  ];
  setReservas(nuevasReservas);
  setCount(nuevasReservas.length); };
const eliminarReserva = (index) => {
  const nuevasReservas = reservas.filter((_, i) => i !== index);
  setReservas(nuevasReservas);
  setCount(nuevasReservas.length);
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
      <button className="boton-salir" onClick={() => {
          setLogeado(false);
          setName("");
        }}
      >
        Cerrar sesión
      </button>
    </header>
    <NavBar count={count} reservas={reservas} eliminarReserva={eliminarReserva}/>
    <main className="contenido">
      <Routes>
        <Route path="/" element={ <ItemListaContainer setCount={setCount} count={count} reservas={reservas} setReservas={setReservas}/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListaContainer setCount={setCount} count={count} reservas={reservas} setReservas={setReservas}/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer onAddToCart={agregarAlCarrito} count={count}/>}/>
        <Route path="/expediciones" element={<Expediciones />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </div>
);
}
export default App;
