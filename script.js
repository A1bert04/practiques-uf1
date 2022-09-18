// Funcion para saber si la anchura es mas de 768px
function isLargeScreen() {
    return window.matchMedia("(min-width: 768px)").matches;
}

// Conjunto de estilos que hay que cargar en ciertos casos
function stylesOnLoad() {
    // Si la anchura es menos de 768px, cambiamos algunos estilos
    if (!isLargeScreen()) {
        let webChapter = document.querySelector('div.web-chapter');
        let index = document.querySelector('div.index');
        let nav = document.querySelector('nav');
        webChapter.style.paddingLeft = '5%';
        webChapter.style.paddingRight = '5%';
        nav.style.paddingLeft = '5%';
        nav.style.paddingRight = '5%';
        webChapter.style.width = '100%';
        index.style.display = 'none';
        // console.log('Cambiando estilos');
    }

    // Hace el padding de la parte de arriba de el contenido
    let navHeight = document.querySelector('nav').offsetHeight;
    let content = document.querySelector('span.content');
    content.style.paddingTop = navHeight + 'px';

    
}

stylesOnLoad();

// Funcion para hacer autoscroll a un elemento + 100% de la pantalla
function scrollToElement(element) {
    let rect = element.getBoundingClientRect();
    let top = rect.top + window.scrollY;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
}

// Seleccionamos los elementos del indice y de los botones
var indexButtons = document.querySelectorAll('.scroll-onclick');
var targetElements = document.querySelectorAll('.target-element');

// TODO Recordar quitar estos console.log
console.log(indexButtons);
console.log(targetElements);

// Para cada boton del indice, le asignamos un evento onclick que hace scroll al target 
// correspondiente (con mismo i en el otro array)
for (let i = 0; i < indexButtons.length; i++) {
    indexButtons[i].addEventListener('click', function () {
        scrollToElement(targetElements[i]);
    });
}


