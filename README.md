# 🌋 Proyecto React – Expediciones en Tierra Media  
Una Single Page Application (SPA) desarrollada con **React + Vite** que simula un e-commerce de reservas de destinos épicos de la Tierra Media.  
Permite explorar lugares, ver detalles, seleccionar guías, agregar al carrito y finalizar la compra guardando una orden real en **Firebase Firestore**.
Este proyecto fue realizado como parte de una entrega final, cumpliendo con buenas prácticas, arquitectura modular, contexto global, rutas protegidas y un diseño personalizado basado en la estética medieval de la saga.

## 🧙‍♂️ **Características principales**
### Inicio personalizado
El usuario ingresa un nombre al iniciar, que queda almacenado durante toda la sesión.
### Catálogo dinámico (Firestore)
- Los destinos (Mordor, Rivendel, Rohan, Moria, etc.) se leen desde **Cloud Firestore**.
- Cada destino contiene título, descripción, precio, imagen e imagenRef para el mapeo local.
### Detalle de destino
- Vista individual cargada por ID vía React Router.
- El usuario debe elegir una **guía obligatoria** antes de agregar al carrito.
- Precio se actualiza dinámicamente según guía seleccionada.
- Se usa un **contador medieval estilizado** para la cantidad.
### Carrito (Context API)
- Se implementó un **CartContext** global.
- Permite agregar 1 destino por reserva y evitar duplicados.
- Cálculo automático de subtotal y total.
- Eliminación individual y limpieza completa.
### Checkout
- Formulario con validación de nombre, email y comentarios opcionales.
- Resumen del pedido.
- Al confirmar, se **genera un documento en la colección `orders` de Firestore`.**
- Mensajes de éxito y error con **react-hot-toast**.
- Pantalla final con ID de orden generada.
### Sección Contacto (UI moderna)
Incluye 3 personajes:
- Frodo  
- Gollum  
- Gandalf  
Cada uno con foto, descripción y puntuación en estrellas usando **Ant Design**.
### Estilo visual personalizado
Se trabajó fuertemente la UI:
- Tipografías medievales (**Cinzel**, **EB Garamond**)  
- Paleta cálida estilo pergamino  
- Botones estilizados con degradados  
- Cards con sombras suaves  
- Caja tipo pergamino para el checkout  
- Diseño responsive para tablets y celulares
### Navegación SPA
- React Router manteniendo la app sin recargas.
- 404 personalizada.
- Rutas:  
/
/categoria/:categoriaId
/destino/:id
/carrito
/checkout
/contacto

## 🛠️ **Tecnologías utilizadas**

### Frontend
- **React**
- **Vite**
- **React Router DOM**
- **Context API**
- **Ant Design**
- **React Hot Toast**

### Backend (BaaS)
- **Firebase**
- **Cloud Firestore**
- **Firebase SDK v9 modular**
