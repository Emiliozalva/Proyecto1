function imprimirProductos(productos){
    const contenedor = document.getElementById('listaProducto');
    for(const producto of productos){
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.getImagen()}" alt="${producto.getNombre()}">
            <h3>${producto.getNombre()}</h3>
            <p>${producto.getDescripcion()}</p>
            <span>$${producto.getPrecio()}</span>
        `;
    contenedor.appendChild(div); 
}                                       
                                    



}