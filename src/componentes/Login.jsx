import { useState } from "react";
function Login({ onLogin }) {
  const [name, setName] = useState("");
  return (
    <section className="pagina pagina-login">
      <h1 className="titulo-seccion">Bienvenido a la Tierra Media</h1>
      <p className="login-texto">
        Escribe tu nombre para comenzar tu viaje por montañas, bosques y fortalezas.
      </p>
      <div className="contenedor-login">
        <input className="entrada-nombre" type="text" placeholder="Pon tu nombre para entrar a la Tierra Media" value={name} onChange={(event) => setName(event.target.value)}/>
        <button className="boton-entrar" onClick={() => onLogin(name.trim())} disabled={name.trim() === ""}>
          Entrar
        </button>
      </div>
    </section>
  );
}
export default Login;
