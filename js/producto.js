export class Producto{
    constructor(id,nombre,descripcion,precio){
        this._id = id;
        this._nombre = nombre;
        this._desc = descripcion;
        this._precio = precio;
        this._listaServicio = [];
    }
    get id(){return this._id;}
    get nombre(){return this._nombre;}
    get descripcion(){return this._desc;}
    get precio(){return this._precio;}
    agregarServicio(serv){
        this._listaServicio.push(serv);
        this._precio += serv.precio();
    }
    eliminarServicio(nombre){
        const index = this._listaServicio.findIndex(p => p.nombre() === nombre);
        this._listaServicio.splice(index,1);
        this._total = this._total - this._listaServicio[index].precio();
    }
}
function imprimirHTML(listaprod){
    const contenedor = document.getElementById("listaProducto");
    for(const prd of listaprod){
        const card = document.createElement("li");
        card.innerHTML = `
            <img src="img/imgpred.png" alt="Producto">
            <p>${prd._nombre}</p>
            <p>${prd._desc}</p>
            <p>${prd._precio}</p>
            <button id="${prd._id}">Comprar</button>
        `
        contenedor.appendChild(card);
        const boton = getElementById(`${prd._id}`);
        boton.addEventListener("click", () => agregarAlCarrito(Producto) )
    }
}