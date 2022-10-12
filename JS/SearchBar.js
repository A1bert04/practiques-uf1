const searchBar = document.querySelector("#search-bar");
const resultsBox = document.querySelector(".results");

// Hacemos que la barra de busqueda esté pegada a la parte de abajo de la barra de navegacion
resultsBox.style.top = searchBar.offsetHeight + 10 + "px";

// Hacemos que mueva la barra de busqueda cuando cambiemos el tamaño de la ventana
window.addEventListener("resize", () => {
  resultsBox.style.top = searchBar.offsetHeight + "px";
});

// Hacemos que los resultados se oculten cuando se haga click fuera de la barra de busqueda o de los resultados
window.addEventListener("click", (e) => {
  if (e.target != searchBar && e.target != resultsBox) {
    resultsBox.style.display = "none";
  }
});

// Hacemos que los resultados se muestren cuando se haga click en la barra de busqueda
searchBar.addEventListener("click", () => {
  resultsBox.style.display = "block";
});

// Hacemos que los resultados se muestren cuando se escriba en la barra de busqueda
searchBar.addEventListener("input", () => {
  resultsBox.style.display = "block";
})

function relResultadosTitulos() {
  // Seleccionamos los resultados de busqueda y los guardamos en un array
  var searchResults = document.querySelectorAll(".result");

  // Seleccionamos los titulos de los capitulos que no sean h1 y los guardamos en un array
  var targetElements = document.querySelectorAll(".target-element:not(h1)");

  // Inicializamos el array donde guardaremos la posicion de todos los elementos
  var targetElementsHeights = [];

  // Recorremos el array de titulos y vamos guardando su posicion en targetElementsHeights
  for (let i = 0; i < targetElements.length; i++) {
      let rect = targetElements[i].getBoundingClientRect();
      let top = rect.top + window.scrollY - 50;
      targetElementsHeights.push(top);
  };

  // Para cada resultado, le asignamos un evento onclick que hace scroll al target 
  // correspondiente (con mismo i en el otro array)
  for (let i = 0; i < searchResults.length; i++) {
      searchResults[i].addEventListener('click', function () {
          scrollToElement(targetElementsHeights[i]);
      });
  }
}

relResultadosTitulos();

// Añadimos un evento que vuelva a ejecutar la funcion relResultadosTitulos cuando se cambie el tamaño de la ventana
window.addEventListener('resize', relResultadosTitulos);

// Hacemos una funcion que oculte los elementos que no coinciden con la busqueda
function hideElements() {
  // Seleccionamos todos los resultados posibles
  var searchResults = document.querySelectorAll(".result");

  // miramos si el texto de dentro de la barra de busqueda coincide con el texto de algun resultado
  for (let i = 0; i < searchResults.length; i++) {
      if (searchResults[i].innerHTML.toLowerCase().includes(searchBar.value.toLowerCase())) {
          searchResults[i].style.display = "block";
      } else {
          searchResults[i].style.display = "none";
      }
  }
}

// Añadimos un evento que ejecute la funcion hideElements cuando se escriba en la barra de busqueda
searchBar.addEventListener("input", hideElements);
