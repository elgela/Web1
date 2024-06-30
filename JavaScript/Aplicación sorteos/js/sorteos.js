"use strict"

let personas = [];

function agregar() {
    let nombre = document.getElementById("nombre").value;
    personas.push(nombre);
    mostrar();
}

function reset() {
    personas = [];
    mostrar();
}

function borrarUltimo() {
    personas.pop();
    mostrar();
}

function mostrar() {
    let lista = document.querySelector("#listado");
    lista.innerHTML = ""; //borro lo que haya
    for (let n of personas) {
        lista.innerHTML = lista.innerHTML += "<li>" + n + "</li>";
    }
}

function sortear() {
    let n = Math.floor(Math.random() * personas.length);
    let g = document.querySelector("#ganador");
    g.innerHTML = personas[n];
}

document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-reset").addEventListener("click", reset);
document.querySelector("#btn-borrarUltimo").addEventListener("click", borrarUltimo);
document.querySelector("#btn-sorteo").addEventListener("click", sortear);