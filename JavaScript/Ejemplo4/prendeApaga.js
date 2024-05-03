"use strict";
function prender() {
    document.querySelector("body").classList.add("prendido");
    document.querySelector("body").classList.remove("apagado");
    document.querySelector("#lampara").src = "https://sites.google.com/a/alumnos.exa.unicen.edu.ar/tudai1-1/web-1/material/archivos/lampara_on.png";
}
function apagar() {
    document.querySelector("body").classList.remove("prendido");
    document.querySelector("body").classList.add("apagado");
    document.querySelector("#lampara").src = "https://sites.google.com/a/alumnos.exa.unicen.edu.ar/tudai1-1/web-1/material/archivos/lampara_off.png";
}
document.querySelector("#prendido").addEventListener("click", prender);
document.querySelector("#apagado").addEventListener("click", apagar);