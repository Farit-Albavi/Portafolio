document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll("nav ul li a");
    const secciones = document.querySelectorAll("section");

    function cambiarColorEnlace() {
        const scrollPos = window.scrollY;

        secciones.forEach(function (seccion) {
            const seccionTop = seccion.offsetTop;
            const seccionHeight = seccion.offsetHeight;

            if (scrollPos >= seccionTop && scrollPos < seccionTop + seccionHeight) {
                const targetEnlace = document.querySelector('a[href="#' + seccion.getAttribute("id") + '"]');
                enlaces.forEach(function (enlace) {
                    enlace.classList.remove("nav-active");
                });
                targetEnlace.classList.add("nav-active");
            }
        });
    }

    window.addEventListener("scroll", cambiarColorEnlace);
});

// Función para desplazarse hasta la parte superior de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar u ocultar el botón dependiendo del desplazamiento vertical
var btnTop = document.getElementById("btnTop");
var timeout;

window.addEventListener("scroll", function () {
    clearTimeout(timeout);

    if (window.pageYOffset > window.innerHeight * 0.5) {
        btnTop.style.opacity = "1";
    } else {
        btnTop.style.opacity = "0";
    }

    timeout = setTimeout(function () {
        btnTop.style.opacity = "0";
    }, 800);
});