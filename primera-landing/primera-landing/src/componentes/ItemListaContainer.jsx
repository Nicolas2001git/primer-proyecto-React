import { useState, useRef, useEffect } from "react";
import comarca from "../assets/comarca.jpg";
import isengard from "../assets/isengard.jpg";
import lothlorien from "../assets/lothlorien.jpg";
import minas_tirith from "../assets/minas-tirith.webp";
import mordor from "../assets/mordor.jpg";
import moria from "../assets/moria.jpg";
import rivendel from "../assets/rivendel.webp";
import rohan from "../assets/rohan.webp";
import sonidoMordor from "../assets/sonido-mordor.mp3";
import sonidoRivendel from "../assets/sonido-rivendell.mp3";
import sonidoComarca from "../assets/sonido-comarca.mp3";
import sonidoMinasTirith from "../assets/sonido-minas.mp3";
import sonidoRohan from "../assets/sonido-rohan.mp3";
import sonidoLothlorien from "../assets/sonido-lothlorien.mp3";
import sonidoMoria from "../assets/sonido-moria.mp3";
import sonidoIsengard from "../assets/sonido-isengard.mp3";
function ItemListaContainer({ setCount, count, reservas, setReservas }) {
  const destinos = [
    "Mordor",
    "Rivendel",
    "La Comarca",
    "Minas Tirith",
    "Rohan",
    "Lothlórien",
    "Moria",
    "Isengard",
  ];
  const imagenes = {
    "Mordor": { img: mordor },
    "Rivendel": { img: rivendel },
    "La Comarca": { img: comarca },
    "Minas Tirith": { img: minas_tirith },
    "Rohan": { img: rohan },
    "Lothlórien": { img: lothlorien },
    "Moria": { img: moria },
    "Isengard": { img: isengard },
  };
  const sonidos = {
    "Mordor": sonidoMordor,
    "Rivendel": sonidoRivendel,
    "La Comarca": sonidoComarca,
    "Minas Tirith": sonidoMinasTirith,
    "Rohan": sonidoRohan,
    "Lothlórien": sonidoLothlorien,
    "Moria": sonidoMoria,
    "Isengard": sonidoIsengard,
  };
  const [destino, setDestino] = useState(destinos[0]);
  const imagenSeleccionada = imagenes[destino];
  const audioRef = useRef(null);
  const stopTimerRef = useRef(null);
  const activarSonido= (event) => {
    const nuevo = event.target.value;
    setDestino(nuevo);
    if (stopTimerRef.current) {
      clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    const sonido = new Audio(sonidos[nuevo]);
    sonido.currentTime = 0;
    audioRef.current = sonido;
    sonido.play();
    stopTimerRef.current = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, 15000);
  };
  return (
    <section className="seccion-reservas">
      <h3 className="titulo-seccion">Elegí tu destino</h3>
      <div className="fila-destino">
        <label className="etiqueta-destino" htmlFor="destino">Destino:</label>
        <select id="destino" className="selector-destino" value={destino} onChange={activarSonido}>
          {destinos.map((destino) => (
            <option key={destino} value={destino}>{destino}</option>
          ))}
        </select>
      </div>
      <div className="contenedor-imagen">
        <img className="imagen-destino" src={imagenSeleccionada.img} alt={destino} />
      </div>
      <div className="grupo-botones">
        <button type="button" onClick={() => { setCount(contador => contador + 1); setReservas([...reservas, destino]); }}  disabled={count === 3}>
          Agregar viaje 
        </button>
        <button type="button" onClick={() => { setCount(contador => contador - 1); setReservas(reservas.slice(0, -1)); }} disabled={count === 0} >
          Quitar viaje  
        </button>
      </div>
    </section>
  );
}
export default ItemListaContainer;
