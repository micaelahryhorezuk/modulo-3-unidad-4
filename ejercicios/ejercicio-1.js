/**
 * Ejercicio 1:
 * Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color de fondo del documento.
 * Cada cuadrado debera tener un color distinto.
 * @param {String} color 
 */

 const changeMainBackgroundColor = (color) => {
    const main = document.getElementById("main");
    main.style = `background-color: ${color} !important;`;
}

var cardBody = document.getElementById('card-body');
cardBody.addEventListener('click' , changeMainBackgroundColor);