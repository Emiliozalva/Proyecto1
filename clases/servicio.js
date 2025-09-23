class Servicio{
    #id;
    #nombre;
    #descripcion;
    #precio;
    #contratado
    constructor(id, nombre, descripcion, precio) {
        this.#id = id;
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#precio = precio;
        this.#contratado = false;
    }
    getId() { return this.#id; }
    getNombre() { return this.#nombre; }
    getDescripcion() { return this.#descripcion; }
    getPrecio() { return this.#precio; }
    setNombre(nombre) { this.#nombre = nombre; }
    setDescripcion(desc) { this.#descripcion = desc; }
    setPrecio(precio) { this.#precio = precio; }
    status() { return this.#contratado; }
    setContratado(estado) { this.#contratado = estado; }
}