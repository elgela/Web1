"use strict"

let pasos = [];
function agregar() {
    let cantidad = document.getElementById("cant-pasos").value;
    pasos.push(cantidad);
    mostrarSuma(cantidad);
    pasos = [];
}
function sumar() {
    
}
function restar() {
    
}
function reset() {
    pasos = [];
    mostrarSuma();
}
function mostrarSuma() {
    let cant = document.querySelector("#pasos");
    cant.innerHTML = "";
    for (let n of pasos) {
        cant.innerHTML = cant.innerHTML += "<h1>" + n + "</h1>";
    }
    
}

document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-borrar").addEventListener("click", reset);
document.querySelector("#btn-suma").addEventListener("click", sumar);
document.querySelector("#btn-resta").addEventListener("click", restar);
