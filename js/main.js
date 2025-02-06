// Si necesitas Swiper, también lo importas desde el CDN (asegúrate de tener elementos con clase 'swiper-container' en tu HTML)
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

// Función para enviar el correo mediante EmailJS
function sendEmail(event) {
    event.preventDefault(); // Previene el envío tradicional del formulario (recarga de la página)

    const form = event.target;

    emailjs.sendForm(
        'service_28gwlh8',   // Reemplaza con tu Service ID
        'template_w2v53j9',   // Reemplaza con tu Template ID
        form,
        'USbBDU2JCWnAG9EWY'   // Reemplaza con tu Public Key
    ).then(response => {
        console.log('Correo enviado:', response);
        alert('¡Mensaje enviado con éxito!');
    }).catch(error => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un error, intenta de nuevo más tarde.');
    });
}

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el formulario mediante su ID ("request")
    const form = document.getElementById("request");
    if (form) {
        form.addEventListener("submit", sendEmail);
    }
});

// Inicializa Swiper solo si existe un contenedor con la clase "swiper-container"
if (document.querySelector('.swiper-container')) {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
