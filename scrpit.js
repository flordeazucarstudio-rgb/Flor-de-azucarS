// JavaScript code to create a simple image carousel
// HTML structure
    const carousel = document.querySelector('.carousel');
    let index = 0;
    setInterval(() => {
      carousel.scrollLeft = carousel.clientWidth * index;
      index = (index + 1) % carousel.children.length;
    }, 3000);

    const carrusel = document.getElementById('carruselImagenes');
    let carouselIndex = 0;
  
    function mostrarImagen(i) {
      carouselIndex = (i + 4) % 4; // hay 4 imágenes
      carrusel.style.transition = 'transform 0.5s ease-in-out';
      carrusel.style.transform = 'translateX(' + (-carouselIndex * 100) + '%)';
    }
  
    function avanzar() {
      mostrarImagen(index + 1);
    }
  
    function retroceder() {
      mostrarImagen(index - 1);
    }

//Formulario de suscripción

document.getElementById("form-suscripcion").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  // URL de la aplicación web de Google Apps Script
  const scriptURL = "https://script.google.com/macros/s/AKfycbwTtk7yWosgFvgCXyLKIlPWCYe2lLKGh-SeHWfRdtIhBoak4ogyRVmjH1kBEgR6RV8H/exec";

  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        document.getElementById("mensaje").textContent = "¡Gracias por suscribirte!";
        document.getElementById("form-suscripcion").reset();
      } else {
        document.getElementById("mensaje").textContent = "Error al suscribirse.";
      }
    })
    .catch(() => {
      document.getElementById("mensaje").textContent = "Error al suscribirse.";
    });
});