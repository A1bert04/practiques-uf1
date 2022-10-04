/* 
Este codigo de JS es para que los botones del indice de la izquierda
hagan autoscroll a la posicion de la seccion correspondiente.

Para hacerlo primero se obtiene la posicion de cada seccion
(cuya clase es target-element) y se guarda en un array.

Posteriormente agregamos un event listener a cada boton del indice
(clase: scroll-onclick) para que cuando se haga click se 
llame a la funcion ScrollToElement, y le pasamos de parametro
la posicion de la seccion correspondiente (que hemos conseguido
en el paso anterior)
*/

// Declaramos la funcion que nos hace scroll automatico a una posicion
function scrollToElement(pos) {
    window.scrollTo({
        top: pos,
        behavior: 'smooth'
    });
}

// Seleccionamos los elementos del indice y los guardamos en un array
var indexButtons = document.querySelectorAll('.scroll-onclick');

// Seleccionamos los titulos de los capitulos y los guardamos en un array
var targetElements = document.querySelectorAll('.target-element');

// Aconseguimos la posicion de todos los elementos y los guardamos en un array
var targetElementsHeights = [];

// Recorremos el array de elementos y vamos guardando su posicion en targetElementsHeights
for (let i = 0; i < targetElements.length; i++) {
    let rect = targetElements[i].getBoundingClientRect();
    let top = rect.top + window.scrollY - 50;
    targetElementsHeights.push(top);
};

// Para cada boton del indice, le asignamos un evento onclick que hace scroll al target 
// correspondiente (con mismo i en el otro array)
for (let i = 0; i < indexButtons.length; i++) {
    indexButtons[i].addEventListener('click', function () {
        scrollToElement(targetElementsHeights[i]);
    });
}

/* 
Por otro lado, añadimos todo el codigo para contraer y expandir el indice
*/

// 1 - Hacemos que al cargar la pagina el capitulo 2 este expandido
var cap2Title = document.querySelector('#index-chapter-2');
cap2Title.setAttribute('open', 'true');

// 2 - Hacemos que al hacer click en el titulo de un capitulo se expanda o contraiga
// Seleccionamos todos los titulos de capitulo
var chapterTitles = document.querySelectorAll('.index-chapter-expandable');

// Para cada titulo de capitulo, le asignamos un evento onclick que expande o contrae
// el capitulo correspondiente
for (let i = 0; i < chapterTitles.length; i++) {

    // A cada elemento le añadimos el EventListener
    chapterTitles[i].addEventListener('click', function () {

        // Seleccionamos el capitulo correspondiente
        let chapter = document.querySelector('#index-chapter-' + (i + 2));

        // Si al hacer click esta abierto, lo cerramos
        if (chapter.hasAttribute('open')) {
            chapter.removeAttribute('open');
        } else {
            // Si al hacer click esta cerrado, lo abrimos
            chapter.setAttribute('open', 'true');
        }

        // Ademas cerramos el resto de elementos a los que no se ha hecho click
        for (let j = 0; j < chapterTitles.length; j++) {
            // Comprobamos que no es el elemento al que se ha hecho click
            if (j != i) {
                let chapter = document.querySelector('#index-chapter-' + (j + 2));
                chapter.removeAttribute('open');
            }
        }
    });
}
