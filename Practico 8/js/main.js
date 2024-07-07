"use strict"

let container = document.querySelector("#use-ajax");
async function clickLoad(event) {
    event.preventDefault();
    container.innerHTML = "<h1>Loading...</h1>";
    try {
        let response = await fetch("partial-render.html")
        if (response.ok) {
            let text = await response.text()
            container.innerHTML = text;
            let nuevo = document.querySelector(".btn-alert");
            nuevo.addEventListener("click", alerta);
        }
        else {
            container.innerHTML = text;
        }
    }
    catch (error) {
        container.innerHTML = "<h1>Error</h1>";
    }
    // fetch("partial-render.html")
    //     .then(response => {
    //         console.log(response);
    //         console.log(response.status);
    //         response.text().then(text => {
    //             document.querySelector("#use-ajax").innerHTML = text;
    //             document.querySelector(".btn-alert").addEventListener("click", alerta);
    //         });
    //     });
}

let jsload = document.querySelectorAll(".btn-load");
jsload.forEach(e => e.addEventListener("click", clickLoad));

function alerta() {
    alert("Dije que se borró!");
}

function volverAtras() {
    window.history.go(-1);
}
let atras = document.querySelectorAll(".btn-volver");
atras.forEach(e => e.addEventListener("click", volverAtras));

let informacion = document.querySelector(".col-md-6");
async function clickInformacion(event) {
    event.preventDefault();
    try {
        let response = await fetch("info.html")
        if (response.ok) {
            let text = await response.text()
            informacion.innerHTML = text;
        }
    } catch (error) {
        informacion.innerHTML = "<h2>Error!</h2>";
    }
}
let info = document.querySelector(".btn-info");
info.addEventListener("click", clickInformacion);

let acerca = document.querySelector(".col-md-6");
async function clickAcerca(event) {
    event.preventDefault();
    try {
        let response = await fetch("acerca.html")
        if (response.ok) {
            let text = await response.text()
            acerca.innerHTML = text;
        }
    } catch (error) {
        acerca.innerHTML = text;
    }
}
let acercaDe = document.querySelector(".btn-acerca");
acercaDe.addEventListener("click", clickAcerca);

