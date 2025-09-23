class carrito {
    #listaEventos;
    #totalAcumulado;
    constructor() {
        this.#listaEventos = [];
        this.#totalAcumulado = 0;
    }
    getListaEventos() { return this.#listaEventos; }
    getTotalAcumulado() { return this.#totalAcumulado; }
    addEvento(evento) { 
        this.#listaEventos.push(e); 
        this.#totalAcumulado += e.getPrecio();
    }
    removeEvento(evento) {
        this.#listaEventos = this.#listaEventos.filter(e => e.getId() !== evento.getId());
        this.#totalAcumulado -= evento.getPrecio();
    }
}