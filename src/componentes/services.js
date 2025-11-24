import { db } from "../firebase";
import { collection, doc, getDoc, getDocs, query, where,} from "firebase/firestore";
import comarca from "../assets/comarca.jpg";
import isengard from "../assets/isengard.jpg";
import lothlorien from "../assets/lothlorien.jpg";
import minas_tirith from "../assets/minas-tirith.webp";
import mordor from "../assets/mordor.jpg";
import moria from "../assets/moria.jpg";
import rivendel from "../assets/rivendel.webp";
import rohan from "../assets/rohan.webp";
const imagenesRef = {
  comarca,
  isengard,
  lothlorien,
  minas_tirith,
  mordor,
  moria,
  rivendel,
  rohan,
};
export async function obtenerLocalizaciones(categoriaId) {
  const ref = collection(db, "destinos");
  let consulta = ref;
  if (categoriaId) {
    consulta = query(ref, where("categoria", "==", categoriaId));
  } 
  const responseLoc = await getDocs(consulta);
  return responseLoc.docs.map((Loc) => {
    const data = Loc.data();
    const claveImagen = data.imagenRef || data.categoria;
    const imagen = imagenesRef[claveImagen] || comarca;
    return {
      id: Loc.id,
      ...data,
      imagen,
    };
  });
}
export async function obtenerLocalizacionPorId(id) {
  const ref = doc(db, "destinos", id);
  const responseId = await getDoc(ref);
  if (!responseId.exists()) {
    throw new Error("Lugar no encontrado");
  }
  const data = responseId.data();
  const claveImagen = data.imagenRef || data.categoria;
  const imagen = imagenesRef[claveImagen] || comarca;
  return {
    id: responseId.id,
    ...data,
    imagen,
  };
}
export async function obtenerGuias() {
  const ref = collection(db, "guias");
  const response = await getDocs(ref);
  return response.docs.map((docResponse) => ({
    id: docResponse.id,
    ...docResponse.data(),
  }));
}
export async function obtenerPrecioConGuia(idUbicacion, idGuia) {
  const destinoRef = doc(db, "destinos", idUbicacion);
  const guiaRef = doc(db, "guias", idGuia);
  const [destinoResult, guiaResult] = await Promise.all([
    getDoc(destinoRef),
    getDoc(guiaRef),
  ]);
  if (!destinoResult.exists() || !guiaResult.exists()) {
    throw new Error("Lugar o guía no encontrado");
  }
  const destino = destinoResult.data();
  const guia = guiaResult.data();
  const precioBase = Number(destino.precio) || 0;
  const extraGuia = Number(guia.precioExtra) || 0;
  return Math.round(precioBase + extraGuia);
}
