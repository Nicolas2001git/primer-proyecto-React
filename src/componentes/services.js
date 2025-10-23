import comarca from "../assets/comarca.jpg";
import isengard from "../assets/isengard.jpg";
import lothlorien from "../assets/lothlorien.jpg";
import minas_tirith from "../assets/minas-tirith.webp";
import mordor from "../assets/mordor.jpg";
import moria from "../assets/moria.jpg";
import rivendel from "../assets/rivendel.webp";
import rohan from "../assets/rohan.webp";
import frodo from "../assets/frodo.jpg";
import gandalf from "../assets/gandalf.jpg";
import gollum from "../assets/gollum.jpg";
const espera = (milisegundos) => {
  return new Promise((resolver) => {
    setTimeout(resolver, milisegundos);
  });
};
const listaDeUbicaciones = [
  { id: 1, 
    titulo: "Mordor", 
    categoria: "mordor", 
    precio: 180, 
    imagen: mordor, 
    descripcion: "Aventura extrema al Monte del Destino." },
  { id: 2, 
    titulo: "Rivendel", 
    categoria: "rivendel", 
    precio: 200, 
    imagen: rivendel, 
    descripcion: "Valles élficos y cascadas cristalinas." },
  { id: 3, 
    titulo: "La Comarca", 
    categoria: "la-comarca", 
    precio: 150, 
    imagen: comarca, 
    descripcion: "Senderos tranquilos y aldeas hobbit." },
  { id: 4, 
    titulo: "Minas Tirith", 
    categoria: "minas-tirith", 
    precio: 240, 
    imagen: minas_tirith, 
    descripcion: "La Ciudad Blanca y su historia." },
  { id: 5, 
    titulo: "Rohan", 
    categoria: "rohan", 
    precio: 210, 
    imagen: rohan, 
    descripcion: "Praderas y caballería legendaria." },
  { id: 6, 
    titulo: "Lothlórien", 
    categoria: "lothlorien", 
    precio: 220, 
    imagen: lothlorien, 
    descripcion: "Bosque dorado de los elfos." },
  { id: 7, 
    titulo: "Moria", 
    categoria: "moria", 
    precio: 120, 
    imagen: moria, 
    descripcion: "Antiguas minas y pasadizos." },
  { id: 8, 
    titulo: "Isengard", 
    categoria: "isengard", 
    precio: 170, 
    imagen: isengard, 
    descripcion: "La torre de Orthanc y sus aledaños." },
];
const listaDeGuias = [
  { id: 1, 
    nombre: "Frodo Bolsón", 
    imagen: frodo, 
    descripcion: "Guía amable y humilde, ideal para rutas tranquilas y seguras." },
  { id: 2, 
    nombre: "Gollum", 
    imagen: gollum, 
    descripcion: "Conoce cada rincón oscuro; ideal para rutas subterráneas o peligrosas." },
  { id: 3, 
    nombre: "Gandalf el Gris", 
    imagen: gandalf, 
    descripcion: "Guía legendario, sabio y poderoso. Experiencia inigualable." },
];
function obtenerMultiplicadorPorGuiaYCiudad(nombreGuia, nombreCiudad) {
  const guia = nombreGuia.toLowerCase();
  const ciudad = nombreCiudad.toLowerCase();
  if (guia.includes("gandalf")) {
    if (ciudad.includes("minas tirith")) return 1.30;
    if (ciudad.includes("rohan")) return 1.25;
    return 1.15;
  }
  if (guia.includes("frodo")) {
    if (ciudad.includes("la comarca")) return 0.90;
    if (ciudad.includes("rivendel")) return 0.95;
    return 1.00;
  }
  if (guia.includes("gollum")) {
    if (ciudad.includes("moria")) return 0.80;
    if (ciudad.includes("mordor")) return 0.90;
    return 1.05;
  }
  return 1.00;
}
function generarPreciosPorCiudad(nombreGuia) {
  return listaDeUbicaciones.map((ubicacion) => {
    const multiplicador = obtenerMultiplicadorPorGuiaYCiudad(nombreGuia, ubicacion.titulo);
    const precioAjustado = Math.round(ubicacion.precio * multiplicador);
    return { ciudad: ubicacion.titulo, precio: precioAjustado };
  });
}
export async function obtenerLocalizaciones(categoriaId) {
  await espera(600);
  if (!categoriaId) return listaDeUbicaciones;
  return listaDeUbicaciones.filter((ubicacion) => ubicacion.categoria === categoriaId);
}
export async function obtenerLocalizacionPorId(id) {
  await espera(600);
  const idNumerico = Number(id);
  const ubicacion_encontrada = listaDeUbicaciones.find((ubicacion) => ubicacion.id === idNumerico);
  if (!ubicacion_encontrada) throw new Error("Lugar no encontrado");
  return ubicacion_encontrada;
}
export async function obtenerGuias() {
  await espera(500);
  return listaDeGuias.map((guia) => ({
    ...guia,
    preciosPorCiudad: generarPreciosPorCiudad(guia.nombre),
  }));
}
export async function obtenerGuiaPorId(id) {
  await espera(500);
  const idNumerico = Number(id);
  const guia_encontrado = listaDeGuias.find((guia) => guia.id === idNumerico);
  if (!guia_encontrado) throw new Error("Guía no encontrado");
  return {
    ...guia_encontrado,
    preciosPorCiudad: generarPreciosPorCiudad(guia_encontrado.nombre),
  };
}
export async function obtenerPrecioConGuia(idUbicacion, idGuia) {
  await espera(200);
  const ubicacion_encontrada = listaDeUbicaciones.find((ubicacion) => ubicacion.id === Number(idUbicacion));
  const guia_encontrado = listaDeGuias.find((guia) => guia.id === Number(idGuia));
  if (!ubicacion_encontrada || !guia_encontrado) throw new Error("Lugar o guía no encontrado");
  const multiplicador = obtenerMultiplicadorPorGuiaYCiudad(guia_encontrado.nombre, ubicacion_encontrada.titulo);
  const precioFinal = Math.round(ubicacion_encontrada.precio * multiplicador);
  return precioFinal;
}
