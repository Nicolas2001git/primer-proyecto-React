import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./componentes/Login";
import NavBar from "./componentes/NavBar";
import ItemListaContainer from "./componentes/ItemListaContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Expediciones from "./componentes/Expediciones";
import Contacto from "./componentes/Contacto";
import NotFound from "./NotFound";
import Cart from "./componentes/Cart";
import CheckoutForm from "./componentes/Checkout";
function Home() {
  const [logeado, setLogeado] = useState(false);
  const [name, setName] = useState("");
  const handleLogin = (userName) => {
    const limpio = userName.trim();
    if (!limpio) return;
    setName(limpio);
    setLogeado(true);
  };
  const handleLogout = () => {
    setLogeado(false);
    setName("");
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
        <button className="boton-salir" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </header>
      <NavBar />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<ItemListaContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListaContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/expediciones" element={<Expediciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
export default Home;
