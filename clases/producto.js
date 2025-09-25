export class producto {
    nombre; 
    precio;
    descripcion;
    imagen;

    constructor(nombre, precio, descripcion, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    getNombre() { return this.nombre; }
    getPrecio() { return this.precio; }
    getDescripcion() { return this.descripcion; }
    getImagen() { return this.imagen; }
    setNombre(nombre) { this.nombre = nombre; } 
    setPrecio(precio) { this.precio = precio; }
    setDescripcion(descripcion) { this.descripcion = descripcion; }
    setImagen(imagen) { this.imagen = imagen; }
}