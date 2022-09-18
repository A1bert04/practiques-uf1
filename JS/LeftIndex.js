console.log('Cargado JS/LeftIndex.js');

// Funcion para hacer autoscroll a una posicion
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

// Aconseguimos la altura de todos los elementos y los guardamos en un array
var targetElementsHeights = [];
for (let i = 0; i < targetElements.length; i++) {
    let rect = targetElements[i].getBoundingClientRect();
    let top = rect.top + window.scrollY - 50;
    targetElementsHeights.push(top);
};

// TODO Recordar quitar estos console.log
console.log(indexButtons);
console.log(targetElements);

// Para cada boton del indice, le asignamos un evento onclick que hace scroll al target 
// correspondiente (con mismo i en el otro array)
for (let i = 0; i < indexButtons.length; i++) {
    indexButtons[i].addEventListener('click', function () {
        console.log('Click en boton ' + i);
        scrollToElement(targetElementsHeights[i]);
    });
}

