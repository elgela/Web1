/*Se desea realizar una página de registro de personas en el que se puedan ingresar los datos de
DNI, Edad y Ciudad de nacimiento. Los datos deben ser ingresados por el usuario y todos son
obligatorios.
Realice una página que permita:
    1. Ingresar personas con DNI, Edad, y Ciudad de nacimiento completando un formulario y con
un botón Agregar.
    2. Con un botón Buscar y un input de búsqueda por DNI se debe buscar si una persona está
registrada. Se debe mostrar un mensaje con los datos completos si la persona está
registrada o un mensaje “La persona que busca no está registrada” en caso que no se
encuentre registrada.
    3. Con un botón sortear, se debe sortear un ganador entre las personas registradas y mostrar
en un párrafo los datos completos de la persona ganadora de manera resaltada.
a. Escriba el código CSS, JS y agregue el código HTML si lo cree necesario, para lograr la funcionalidad
descrita de la página.
IMPORTANTE:
    - Los datos se deben manejar con un arreglo de objetos JSON
*/
"use strict"

let personas = [];
let res_buscar = document.querySelector("#res-buscar");
let res_sortear = document.querySelector("#res-sortear");
let btn_reg = document.querySelector("#btn-registrar");
let btn_bus = document.querySelector("#btn-buscar");
let btn_sor = document.querySelector("#btn-sortear");
btn_reg.addEventListener("click", registrar);
btn_bus.addEventListener("click", buscar);
btn_sor.addEventListener("click", sortear);
function registrar() {
    let dni = document.querySelector("#dni").value;
    let ciudad = document.querySelector("#ciudad").value;
    let edad = document.querySelector("#edad").value;
    let persona = {
        "dni": dni,
        "ciudad": ciudad,
        "edad": edad
    };
    personas.push(persona);
}
function buscar() {
    let encontrado = false;
    let buscado = parseInt(document.querySelector("#dni_buscar").value);
    for (let persona of personas) {
        if (persona.dni == buscado) {
            encontrado = true;
            res_buscar.innerHTML = "Se encontró " + persona.dni + " " +
                persona.ciudad + " " + persona.edad;
        }
    }
    if (!encontrado) {
        res_buscar.innerHTML = "La persona que busca no está registrada";
    }
}
function sortear() {
    let nro_sorteo = Math.floor(Math.random() * personas.length);
    res_sortear.innerHTML = personas[nro_sorteo].dni + " " +
        personas[nro_sorteo].ciudad + " " + personas[nro_sorteo].edad;
    res_sortear.classList.add("resaltado");
}