class Evento {
    #id;
    #nombre;
    #listaFecha;
    #listaHorarios;
    #listaLugares;
    #listaServicios;
    #descripcion;
    #precio;
    #imagen;
    #cupoMax;
    constructor(id, nombre, fecha, hora, lugar, descripcion, precio, imagen, cupoMax, servicios) {
        this.#id = id;
        this.#nombre = nombre;
        this.#listaFecha = [fecha];
        this.#listaHorarios = [hora];
        this.#listaLugares = [lugar];
        this.#descripcion = descripcion;
        this.#precio = precio;
        this.#imagen = imagen;
        this.#cupoMax = cupoMax;
        this.#listaServicios = [servicios];
    }
    getId() { return this.#id; }
    getNombre() { return this.#nombre; }
    getListaFecha() { return this.#listaFecha; }
    getListaHorarios() { return this.#listaHorarios; }
    getListaLugares() { return this.#listaLugares; }
    getListaServicios() { return this.#listaServicios; }
    getDescripcion() { return this.#descripcion; }
    getPrecio() { return this.#precio; }
    getImagen() { return this.#imagen; }
    getCupoMax() { return this.#cupoMax; }

    setNombre(nombre) { this.#nombre = nombre; }
    setDescripcion(desc) { this.#descripcion = desc; }
    setPrecio(precio) { this.#precio = precio; }
    setImagen(img) { this.#imagen = img; }
    setCupoMax(cupo) { this.#cupoMax = cupo; }

    addFecha(fecha) { this.#listaFecha.push(fecha); }
    addHorario(hora) { this.#listaHorarios.push(hora); }
    addLugar(lugar) { this.#listaLugares.push(lugar); }
    addServicio(servicio) { this.#listaServicios.push(servicio); }

    removeFecha(fecha) {
        this.#listaFecha = this.#listaFecha.filter(f => f !== fecha);
    }
    removeHorario(hora) {
        this.#listaHorarios = this.#listaHorarios.filter(h => h !== hora);
    }
    removeLugar(lugar) {
        this.#listaLugares = this.#listaLugares.filter(l => l !== lugar);
    }
    removeServicio(servicio) {
        this.#listaServicios = this.#listaServicios.filter(s => s !== servicio);
    }
}


class eventoReservado{
    #id;
    #nombre;
    #fecha;
    #horario;
    #lugar;
    #listaServicios;
    #descripcion;
    #precio;
    constructor(id, nombre, fecha, horario, lugar, descripcion, precio) {
        this.#id = id;
        this.#nombre = nombre;
        this.#fecha = fecha;
        this.#horario = horario;
        this.#lugar = lugar;
        this.#descripcion = descripcion;
        this.#precio = precio;
        this.#listaServicios = [];
    }
    getId() { return this.#id; }
    getNombre() { return this.#nombre; }
    getFecha() { return this.#fecha; }
    getHorario() { return this.#horario; }
    getLugar() { return this.#lugar; }
    getListaServicios() { return this.#listaServicios; }
    getDescripcion() { return this.#descripcion; }
    getPrecio() { return this.#precio; }

    setNombre(nombre) { this.#nombre = nombre; }
    setFecha(fecha) { this.#fecha = fecha; }
    setHorario(horario) { this.#horario = horario; }
    setLugar(lugar) { this.#lugar = lugar; }
    setDescripcion(desc) { this.#descripcion = desc; }
    setPrecio(precio) { this.#precio = precio; }

     addServicio(servicio) {
        if (!(servicio instanceof Servicio)) {
            throw new Error("El objeto debe ser una instancia de Servicio");
        }
        this.#listaServicios.push(servicio);
        this.#precio += servicio.getPrecio();
        servicio.setContratado(true);
    }

    removeServicio(servicio) {
        const index = this.#listaServicios.findIndex(s => s.getId() === servicio.getId());
        if (index !== -1) {
            this.#precio -= this.#listaServicios[index].getPrecio();
            this.#listaServicios[index].setContratado(false);
            this.#listaServicios.splice(index, 1);
        }
    }
}
