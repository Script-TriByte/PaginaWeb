import { ruta } from "./variables.js";

const botonVerContrasenia = document.getElementById("verContrasenia");

const inputContrasenia = document.getElementById("contrasenia");

function revelarContrasenia(){
    if (inputContrasenia.type === "password"){
        inputContrasenia.type = "text";
        botonVerContrasenia.style.backgroundImage = "url('/img/ocultarContrasena.png')";
    } else {
        inputContrasenia.type = "password";
        botonVerContrasenia.style.backgroundImage = "url('/img/verContrasena.png')";
    }
}

botonVerContrasenia.addEventListener("click", function(){
    revelarContrasenia();
})

function aplicarIngles() {
    document.cookie = "lang=en;path=/"
    location.reload()
  }
  
  function aplicarEspanol(){
    document.cookie = "lang=es;path=/"
    location.reload()
  }

$('#idiomaDelSistema').click(function(){
    if(document.cookie.indexOf("lang=en") !== -1){
        aplicarEspanol()
    } else {
        aplicarIngles()
    }
});

$(document).ready(function () {
    if(document.cookie.indexOf("lang=en") !== -1){
        $('#idiomaDelSistema').css('background-image', 'url(/img/banderaUK.png)')
    } else {
        $('#idiomaDelSistema').css('background-image', 'url(/img/banderaUruguay.png)')
    }
    Promise.all([fetch(ruta), fetch('./json/elementos.json')])
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((data) => {
        const idioma = data[0];
        const arrayDeIdioma = idioma[7]
        const arrayDeTextos = data[1];
        const arrayDeTextos2 = arrayDeTextos[7]

        for (let posicion = 0; posicion < Object.keys(arrayDeTextos2).length; posicion++){
            let texto = document.getElementById(arrayDeTextos2[posicion])
            texto.textContent = arrayDeIdioma[posicion]
        }
    })
});