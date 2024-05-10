"use strict";
//1//
function textoFijo() {
    let nombre = "Marcelo";
    let apellido = "Gelato";
    alert("Nombre: " + nombre + "         " + "Apellido: " + apellido);
}
textoFijo();
//2//
let unDiv = document.querySelector("#div1").innerHTML = "Párrafo 1";
let dosDiv = document.querySelector("#div2").innerHTML = "Párrafo 2";
let tresDiv = document.querySelector("#div3").innerHTML = "Párrafo 3";
//3//
let btn = document.querySelector("#btn-nombreApellido");
btn.addEventListener("click", textoFijo);
//4//
function buton1() {
    // let boton1 = document.querySelector("#boton1").innerHTML = "Botón 1";
    // boton1.addEventListener("click");
    alert("Botón 1");
}
function buton2() {
    // let boton2 = document.querySelector("#boton2").innerHTML = "Botón 2";
    // boton2.addEventListener("click");
    alert("Botón 2");
}
function buton3() {
    // let boton3 = document.querySelector("#boton3").innerHTML = "Botón 3";
    // boton3.addEventListener("click");
    alert("Botón 3");
}
//5//
function enviar() {
    let nombre = document.querySelector(".nombre");
    nombre.innerHTML = nombre;
    let apellido = document.querySelector(".apellido").innerHTML = apellido;
}
let buton = getElementById("nombre");
buton.addEventListener("click", enviar);
