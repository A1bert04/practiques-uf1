console.log('Cargado JS/StylesOnLoad.js');

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
        console.log('Cambiando estilos');
    }


}

stylesOnLoad();






