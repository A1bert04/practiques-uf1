/* 
Este codigo de JS es para cargar ciertos estilos que 
dependen de la anchura de la pantalla. Se podria hacer con CSS
pero es mas practico con JS porque no hay que repetir codigo
*/

// Funcion para saber si la anchura es mas de 768px
function isLargeScreen() {
    return window.matchMedia("(min-width: 768px)").matches;
}

// Conjunto de estilos que hay que cargar en ciertos casos
function stylesOnLoad() {

    // Si la anchura es menos de 768px, cambiamos algunos estilos
    if (!isLargeScreen()) {

        // Seleccionamos los elementos cuyas propiedades queremos modificar
        let webChapter = document.querySelector('div.web-chapter');
        let index = document.querySelector('div.index');
        let nav = document.querySelector('nav');

        // Modificamos las propiedades
        webChapter.style.paddingLeft = '5%';
        webChapter.style.paddingRight = '5%';
        nav.style.paddingLeft = '5%';
        nav.style.paddingRight = '5%';
        webChapter.style.width = '100%';

        // Ocultamos el indice para que solo se mostre el contenido
        index.style.display = 'none';
    }

}

// Llamamos a la funcion al cargar la pagina
stylesOnLoad();






