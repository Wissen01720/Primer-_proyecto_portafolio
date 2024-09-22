// Wrap all code in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    /* Animación de escritura (typewriter) */
    const texts = [
        'Hello world', // Plain text
        'print("Hello, World!")', // Python
        'console.log("Hello, World!");', // JavaScript
        'System.out.println("Hello, World!");', // Java
        'printf("Hello, World!\\n");' // C
    ];
    const speed = 150;           // Velocidad de escritura
    const eraseSpeed = 50;       // Velocidad para borrar
    let index = 0;               // Índice del array
    let charIndex = 0;           // Carácter actual del texto
    let isErasing = false;       // Flag para saber si está borrando
    const typedTextSpan = document.getElementById("typedText");

    // Función de escritura
    function typeWriter() {
        const currentText = texts[index];
        if (!isErasing && charIndex < currentText.length) {
            typedTextSpan.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else if (isErasing && charIndex > 0) {
            typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeWriter, eraseSpeed);
        } else if (charIndex === currentText.length) {
            setTimeout(() => isErasing = true, 1000);
            setTimeout(typeWriter, speed);
        } else if (isErasing && charIndex === 0) {
            isErasing = false;
            index = (index + 1) % texts.length;  // Reinicia al primer texto
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    /* Funcionalidad del menú de tecnologías */
    const menuItems = document.querySelectorAll('.menu-navegacion-tecnologias ul li');
    const techSections = document.querySelectorAll('.tecnologia');

    // Muestra la sección de tecnología seleccionada
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            techSections.forEach(section => {
                section.style.display = 'none';
            });
            
            const category = item.getAttribute('data-category');
            const selectedSection = document.getElementById(category);
            if (selectedSection) {
                selectedSection.style.display = 'flex';
            }
        });
    });

    // Mostrar la primera sección al cargar la página
    const firstMenuItem = document.querySelector('[data-category="bases de datos"]');
    if (firstMenuItem) {
        firstMenuItem.click();
    }

    /* Modal para logros y certificados en PDF */
    const logros = document.querySelectorAll('.logro');
    const modal = document.getElementById('certificacion-modal');
    const modalPdf = document.getElementById('certificacion-pdf');
    const closeBtn = document.querySelector('.close');

    // Muestra el PDF en el modal
    logros.forEach(logro => {
        logro.addEventListener('click', function() {
            const pdfSrc = this.getAttribute('data-certificado');
            modalPdf.src = pdfSrc;
            modal.style.display = "block";
        });
    });

    // Cierra el modal al hacer clic en el botón de cerrar
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    // Cierra el modal si el usuario hace clic fuera del iframe
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Efecto de scroll en el texto (fade-in cuando el usuario se desplaza)
    window.addEventListener('scroll', function() {
        const section = document.querySelector('.inicio');
        const texto = document.querySelector('.texto_inicio');
        if (section && texto) {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;

            if (sectionPosition < screenPosition) {
                texto.style.opacity = '1';
                texto.style.transform = 'translateY(0)';
            } else {
                texto.style.opacity = '0';
                texto.style.transform = 'translateY(-50px)';
            }
        }
    });
});