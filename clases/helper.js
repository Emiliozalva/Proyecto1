export function imprimirProductos(productos){
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

export function imprimirEventos(e){
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
export function imprimirEventoEnVentana(listaEvento){
    const contenedor = document.getElementById('mainEvento');
    const eventoId = localStorage.getItem("eventoId");
    const evento = listaEvento.find(ev => ev.getId() === eventoId);
    const div = document.createElement('div');
    div.innerHTML = `
    <h2 class="tituloEvento">${evento.getNombre()}</h2>
    <img class="imgEvento" src="${evento.getImagen()}" alt="${evento.getNombre()}">
    <p class="descripcionEvento">${evento.getDescripcion()}</p>
    <p class="precioEvento">Precio: $${evento.getPrecio()}</p>
    <button id="inscribirseBtn" class="inscribirseBtn">Inscribirse</button>
    `;
    const btn = div.querySelector("#inscribirseBtn");
    btn.addEventListener("click", () => {
    abrirFormularioPago(evento);
}); contenedor.appendChild(div);

}

export function abrirFormularioPago(evento) {
    // Crear un overlay (ventana flotante)
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    overlay.innerHTML = `
        <div class="formulario-pago">
            <h3>Formulario de Pago - ${evento.getNombre()}</h3>
            <p>Precio: $${evento.getPrecio()}</p>
            
            <label>Nombre completo:</label>
            <input type="text" id="nombre" required>

            <label>Número de tarjeta:</label>
            <input type="text" id="tarjeta" required>

            <label>Fecha de expiración:</label>
            <input type="text" id="expiracion" placeholder="MM/AA" required>

            <label>CVV:</label>
            <input type="text" id="cvv" required>

            <button id="confirmarPago">Confirmar pago</button>
            <button id="cerrarFormulario">Cancelar</button>
        </div>
    `;

    document.body.appendChild(overlay);

  
    overlay.querySelector("#cerrarFormulario").addEventListener("click", () => {
        overlay.remove();
    });

 
overlay.querySelector("#confirmarPago").addEventListener("click", () => {
    Swal.fire({
        title: "¡Pago confirmado!",
        text: "Te inscribiste al evento: " + evento.getNombre(),
        icon: "success",
        confirmButtonText: "Ok"
    });
    overlay.remove();
});
}