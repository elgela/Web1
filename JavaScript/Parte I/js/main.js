"use strict";
//1//
function textoFijo() {
    let nombre = "Marcelo";
    let apellido = "Gelato";
    alert("Nombre: " + nombre + "         " + "Apellido: " + apellido);
}
textoFijo();
//2//
let unDiv = document.getElementById("div1").innerHTML = "Párrafo 1";
let dosDiv = document.getElementById("div2").innerHTML = "Párrafo 2";
let tresDiv = document.getElementById("div3").innerHTML = "Párrafo 3";
//3//
let btn = document.getElementById("btn-nombreApellido");
btn.addEventListener("click", textoFijo);
//4//
