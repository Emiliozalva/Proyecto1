import { Carrito } from './carrito.js';
import { Producto, stringToDate,printProductos } from './producto.js';
import { Servicio } from './servicio.js';

const evento1 = new Producto(1,"Prueba de zapatillas", "Veni a probar el neuvo modelo de zapatillas", 30,new Date())
const evento2 = new Producto(2,"Test de zapatillas en pista","Veni a vivir una experinecia inmersiva en una pista de atletismo",75,new Date())
const servicio1 = new Servicio("Asesoramiento por expertos",20);
const servicio2 = new Servicio("Traslado",30);
const carrito = new Carrito();
const listaDeEventos = [evento1,evento2];
printProductos(listaDeEventos);
