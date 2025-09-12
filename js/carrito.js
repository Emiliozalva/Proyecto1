export class Carrito{
    constructor(){
        this.listaCarrito = []; 
        this._total = 0;
    }
    get total(){return this._total;}

    agregarAlCarrito(producto){
        this.listaCarrito.push(producto);
        this._total += producto.precio(); 
    }
    eliminarProducto(id){
        const index = this.listaCarrito.findIndex(p => p.id() === id);
        this.listaCarrito.splice(index,1);
        this._total = this._total - this.listaCarrito[index].precio();
    }

}