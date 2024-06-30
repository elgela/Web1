"use strict";
/*Utilizando lo visto en esta  clase, crear una función Javascript que oculte y muestre un div que contiene información.*/
/*Analizar cómo modificar el ejercicio para que sea un código reutilizable (poder poner muchos botones que oculten o muestren un div respectivo)
*/

function mostrar() {
    document.getElementById('container').style.display = 'block';
}

function ocultar() {
    document.getElementById('container').style.display = 'none';
}