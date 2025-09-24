function imprimirProductos(productos){
    const contenedor = document.getElementById('listaProducto');
    for(const producto of productos){
        const li = document.createElement('li');
        li.classList.add('producto');
        li.innerHTML = `
            <img src="${producto.getImagen()}" alt="${producto.getNombre()}">
            <h3>${producto.getNombre()}</h3>
            <p>${producto.getDescripcion()}</p>
            <span>$${producto.getPrecio()}</span>
            <button class="agregar-carrito" data-id="${producto.getId()}">Agregar al carrito</button>
        `;
    contenedor.appendChild(li); 
    }                                       
}

function imprimirEventos(e){
    const contenedor = document.getElementById('listaEvento');
    for(const evento of e){
        const li = document.createElement('li');
        li.classList.add('evento');
        li.innerHTML = `
            <img src="${evento.getImagen()}" alt="${evento.getNombre()}">
            <h3>${evento.getNombre()}</h3>
            <p>${evento.getDescripcion()}</p>
            <p>Precio: $${evento.getPrecio()}</p>
        `;
        li.addEventListener("click", () => {
    localStorage.setItem("eventoId", evento.getId());
    window.location.href = "evento.html";});
    contenedor.appendChild(li); 
    }
}