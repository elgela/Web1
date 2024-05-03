// "use strict";

// function tirarDados() {
//     let d1 = Math.floor((Math.random() * 6) + 1);
//     let d2 = Math.floor((Math.random() * 6) + 1);
//     document.getElementById("dado1").src = "img/dado1"+d1+".png";
//     let suma = d1 + d2;
//     if (suma === 8) {
//         document.getElementById("resultado").innerHTML = "salió el 8";
//     }
// }

"use strict";

function tirarDados() {
    //genera dos numeros al azar y cambia las fuentes de las imagenes
  let path = "/Users/gelat/OneDrive/Documentos/TUDAI/TUDAI/Web 1/JavaScript/Ejemplo5-Juego de dados/img"
  let d1 = Math.floor((Math.random() * 6) + 1);
  let d2 = Math.floor((Math.random() * 6) + 1);
  document.getElementById("dado1").src = path + "dado1"+d1+".png"; //link externo
  document.getElementById("dado2").src =  path + "dado2"+d2+".png"; //link externo
  let suma = d1 + d2;
  if (suma == 8){ //verificacion si es 8 e incremento cuenta
      document.getElementById("resultado").innerHTML = "salio el 8";
  }
}