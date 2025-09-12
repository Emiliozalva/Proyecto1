export class Servicio{
    constructor(nombre,precio,){
        this._nombre = nombre;
        this._precio = precio;
    }
    get nombre(){return this._nombre;}
    get precio(){return this._precio;}

}