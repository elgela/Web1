
let url = ("https://web-unicen-service.onrender.com/api/html");

document.querySelector("#ver").addEventListener("click", function(e){
    mostra("#div1");
});

document.querySelector("#ver2").addEventListener("click", function(e){
    mostra("#div2");
});

document.querySelector("#ver3").addEventListener("click", function(e){
    mostra("#div3");
});


function mostra(ver) {
    fetch(url).then(Response => {
        Response.text().then(contenidoNuevo => {
            document.querySelector(ver).innerHTML += contenidoNuevo;
            document.querySelectorAll(".js-comportamiento").forEach(b => b.addEventListener("click", alerta));

        });
    });
}

function alerta() {
    alert("hola mundo");
}