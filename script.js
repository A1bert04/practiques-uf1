// Funcion para saber si un elemento esta dentro de la pantalla
function isElementInViewport(el) {
    rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Creamos un evento scroll que oculta o muestra el titulo en la nav bar
// en funcion de si el header esta visible o no
window.addEventListener('scroll', function () {
    // Los elementos
    let bigTitle = document.querySelector('header');
    let navPractiques = document.querySelector('#NavPractiques');

    if (isElementInViewport(bigTitle)) {
        // Si esta visible el titulo grande, ocultamos el elemento
        navPractiques.style.display = 'none';
        // console.log('Ocultar');
    } else {
        // Si no esta visible el titulo grande, mostramos el elemento
        navPractiques.style.display = 'inline-block';
        // console.log('Mostrar');
        // TODO Quitar los console.log
        
    }
});

// Creamos un evento scroll para cambiar la posicion del indice
// de relativa a fixed en funcion de si el un elemento esta visible o no
// window.addEventListener('scroll', function () {
//     // Los elementos
//     let firstTitle = document.querySelector('#first-title');
//     let index = document.querySelector('.index');

//     if (isElementInViewport(firstTitle)) {
//         // Si esta visible el titulo grande, ponemos la pos en relative
//         index.style.position = 'relative';
//         // console.log('Relative');
//     } else {
//         // Si no esta visible el titulo grande, ponemos la pos en fixed
//         index.style.position = 'fixed';
//         // console.log('Fixed');
//         // TODO Quitar los console.log
//     }
// });


// Funcion para sber si la anchura es mas de 768px
function isLargeScreen() {
    return window.matchMedia("(min-width: 768px)").matches;
}

// Conjunto de estilos que hay que cargar en ciertos casos
function stylesOnLoad() {
    // Si la anchura es menos de 768px, cambiamos algunos estilos
    if (!isLargeScreen()) {
        let webChapter = document.querySelector('div.web-chapter');
        let index = document.querySelector('div.index');
        webChapter.style.paddingLeft = '5%';
        webChapter.style.paddingRight = '5%';
        webChapter.style.width = '100%';
        index.style.display = 'none';
        // console.log('Cambiando estilos');
    }

}

stylesOnLoad();
