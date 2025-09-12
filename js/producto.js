export class Producto {
    constructor(id, nombre, descripcion, precio, fecha) {
        this._id = id;
        this._nombre = nombre;
        this._desc = descripcion;
        this._precio = precio;
        this._listaServicio = [];
        this._fecha = new Date(fecha);
        this._reservado = false; // empieza como no reservado
    }

    get id() { return this._id; }
    get nombre() { return this._nombre; }
    get descripcion() { return this._desc; }
    get precio() { return this._precio; }
    get estado() { return this._reservado; }
    reservado() {
        this._reservado = !this._reservado;
    }
    agregarServicio(serv) {
        this._listaServicio.push(serv);
        this._precio += serv.precio;
    }
    eliminarServicio(nombre) {
        const index = this._listaServicio.findIndex(s => s.nombre === nombre);
        if (index !== -1) {
            const serv = this._listaServicio[index];
            this._precio -= serv.precio;
            this._listaServicio.splice(index, 1);
        }
    }
    cambiarFecha(nuevaFecha) {
        this._fecha = new Date(nuevaFecha);
    }
}

export function stringToDate(fechaString) {
    //"2025-10-15" → Date
    return new Date(fechaString);
}

export function printProductos(listaDeEventos){
    const contenedor = document.getElementById("listaProducto");
    for(const prd of listaDeEventos){
        const card = document.createElement("li");
        card.classList.add("itemLista");
        card.innerHTML = `
        <img src="img/imgpred.png">
        <h3 class="nombreProducto">${prd._nombre}</h3>
        <p class="descProducto">${prd._desc}</p>
        `
        const boton = document.createElement("button");
        boton.textContent = "Reservar evento";
        boton.classList.add("botonReserva");
        card.appendChild(boton);
        contenedor.appendChild(card);
    }
    


}
