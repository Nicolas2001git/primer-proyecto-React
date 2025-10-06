import { useState } from "react";
function Login({ onLogin }) {
  const [name, setName] = useState("");
  return (
    <div className="contenedor-login">
      <input className="entrada-nombre" type="text" placeholder="Pon tu nombre para entrar a la tierra Media" value={name} onChange={(event) => setName(event.target.value)}/>
      <button className="boton-entrar" onClick={() => onLogin(name.trim())} disabled={name.trim() === ""}>
        Entrar
      </button>
    </div>
  );
}
export default Login;
