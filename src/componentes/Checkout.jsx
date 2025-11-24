import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!nombre.trim() || !email.trim()) {
      setError("Por favor completá nombre y email.");
      return;
    }
    if (items.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }
    try {
      setEnviando(true);
      const order = {
        buyer: {
          nombre,
          email,
          comentarios,
        },
        items: items.map((item) => ({
          idReserve: item.idReserve,
          destino: item.destino,
          guia: item.guia,
          cantidad: item.cantidad,
          precioUnitario: item.precioUnitario,
        })),
        total: totalPrice,
        createdAt: new Date(),
      };
      const ref = collection(db, "orders");
      const docRef = await addDoc(ref, order);
      setOrderId(docRef.id);
      clearCart();
      toast.success("Compra realizada con éxito");
    } catch (error) {
      console.error(error);
      setError("Hubo un problema al generar la orden. Intentá de nuevo.");
      toast.error("Hubo un problema al generar la orden. Intentá de nuevo.");
    } finally {
      setEnviando(false);
    }
  };
  if (orderId) {
    return (
      <section className="pagina">
        <div className="checkout-pergamino">
          <h1 className="titulo-seccion">¡Gracias por tu compra!</h1>
          <p> Tu número de reserva es: <strong>{orderId}</strong></p>
          <p> Te enviaremos los detalles al correo: <strong>{email}</strong></p>
          <Link to="/" className="boton-entrar volver-inicio">
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }
  if (items.length === 0) {
    return (
      <section className="pagina">
        <div className="checkout-pergamino">
          <h1 className="titulo-seccion">Checkout</h1>
          <p>Tu carrito está vacío.</p>
          <Link to="/" className="boton-entrar">
            Volver al catálogo
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="pagina">
      <div className="checkout-pergamino">
        <h1 className="titulo-seccion">Checkout</h1>
        <div className="checkout-resumen">
          <h2 className="checkout-subtitulo">Resumen de tu reserva</h2>
          <ul className="checkout-lista">
            {items.map((item) => (
              <li key={item.idReserve}>
                {item.cantidad}× {item.destino} (Guía: {item.guia}) — $
                {item.precioUnitario * item.cantidad}
              </li>
            ))}
          </ul>
          <p className="checkout-total"> <strong>Total:</strong> ${totalPrice}</p>
        </div>
        <h2 className="checkout-subtitulo">Datos de contacto</h2>
        {error && <p className="checkout-error">{error}</p>}
        <form onSubmit={handleSubmit} className="formulario-checkout">
          <div className="checkout-campo">
            <label>
              Nombre completo
              <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} className="entrada-nombre"/>
            </label>
          </div>
          <div className="checkout-campo">
            <label>
              Email de contacto
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="entrada-nombre" />
            </label>
          </div>
          <div className="checkout-campo">
            <label>
              Comentarios (opcional)
              <textarea value={comentarios}onChange={(event) => setComentarios(event.target.value)} className="entrada-nombre" rows={4}/>
            </label>
          </div>
          <button type="submit" className="boton-entrar boton-confirmar" disabled={enviando}>
            {enviando ? "Generando orden..." : "Confirmar compra"}
          </button>
        </form>
      </div>
    </section>
  );
}
export default Checkout;
