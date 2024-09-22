document.addEventListener('DOMContentLoaded', () => {
    const verMasBotones = document.querySelectorAll('.btn-ver-mas');

    verMasBotones.forEach(boton => {
        boton.addEventListener('click', () => {
            const producto = boton.closest('.producto');
            const productoImagen = producto.querySelector('img').src;
            const productoTitulo = producto.querySelector('.producto-info h2').innerText;
            const productoDescripcion = producto.querySelector('.producto-info p').innerText;
            const productoDetalle = producto.querySelector('.producto-detalle p').innerText;

            // Redirigir a la sección de detalle del producto
            mostrarProductoDetalle(productoImagen, productoTitulo, productoDescripcion, productoDetalle);
        });
    });

    function mostrarProductoDetalle(imagen, titulo, descripcion, detalle) {
        // Crear la vista detallada del producto
        const seccionDetalle = document.createElement('div');
        seccionDetalle.classList.add('producto-detalle-vista');

        // Estructura de la vista
        seccionDetalle.innerHTML = `
            <div class="detalle-contenedor">
                <div class="detalle-imagen">
                    <img src="${imagen}" alt="${titulo}">
                </div>
                <div class="detalle-info">
                    <h2>${titulo}</h2>
                    <p><strong>Descripción breve:</strong> ${descripcion}</p>
                    <p><strong>Descripción detallada:</strong> ${detalle}</p>
                    <button class="btn-cerrar">Cerrar</button>
                </div>
            </div>
        `;

        // Añadir la vista al body
        document.body.appendChild(seccionDetalle);

        // Cerrar la vista detallada al hacer clic en el botón "Cerrar"
        const btnCerrar = seccionDetalle.querySelector('.btn-cerrar');
        btnCerrar.addEventListener('click', () => {
            document.body.removeChild(seccionDetalle);
        });
    }
});
