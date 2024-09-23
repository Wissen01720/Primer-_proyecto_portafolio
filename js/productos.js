document.addEventListener('DOMContentLoaded', () => {
    // Control de los modales de detalles de productos
    const modal = document.querySelector('.producto-detalle-modal');
    const openButtons = document.querySelectorAll('.btn-ver-mas');
    const closeButton = document.querySelector('.btn-cerrar');

    // Abrir modal correspondiente al producto seleccionado
    openButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modal.classList.add('show');
        });
    });

    // Cerrar modal correspondiente
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Control del carrusel de imágenes dentro del modal
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');
    let currentIndex = 0;

    // Función para mostrar la imagen actual
    const showImage = (index) => {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };

    // Evento para el botón "anterior"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    // Evento para el botón "siguiente"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
});