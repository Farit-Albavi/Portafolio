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

const sendmail = document.getElementById("sendmail");
sendmail.addEventListener('submit', (e) => {
    e.preventDefault();
})

//Esta funcionalidad hace dinamico la barra de navegación
let farit = document.getElementById("itsme");
let aboutme = document.getElementById("abtme");
let habilidades = document.getElementById("skills");
let educacion = document.getElementById("ed");
let portfolio = document.getElementById("porfolio");
let contacto = document.getElementById("contact");


function esVisible(seccion) {
    var posicion = seccion.getBoundingClientRect();
    var ventanaAltura = window.innerHeight;

    return (
        posicion.top >= 0 &&
        posicion.bottom <= ventanaAltura
    );
}

const li = document.querySelectorAll('a');
function manejarScroll() {
    //Itera en todos los elementos del nav e interactua con cada uno
    const navitems = [farit, aboutme, habilidades, educacion, portfolio, contacto]
    for (let i = 0; i < navitems.length; i++) {
        if (esVisible(navitems[i])) {
            li[i].classList.add('active')

        } else {
            li[i].classList.remove('active')
        }
    }
}

var posicionYAnterior = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener('scroll', function () {
    var posicionYActual = window.pageYOffset || document.documentElement.scrollTop;

    if (posicionYActual > posicionYAnterior) {
        manejarScroll()
        // El usuario ha hecho scroll hacia abajo
    } else if (posicionYActual < posicionYAnterior) {
        manejarScroll()
        // El usuario ha hecho scroll hacia arriba
    }

    // Actualizar la posición Y anterior
    posicionYAnterior = posicionYActual;
});